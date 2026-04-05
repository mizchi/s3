///|
fn amz_date_now() -> String {
  amz_date_now_ffi()
}

///|
fn S3Client::signing_path(self : S3Client, key : String) -> String {
  "/\{self.config.bucket}/\{key}"
}

///|
async fn S3Client::ensure_client(
  self : S3Client,
) -> @http.Client raise @s3.S3Error {
  match self.client {
    Some(c) => c
    None => {
      let c = @http.Client::new(self.config.endpoint) catch {
        e => raise @s3.s3_error("S3 connection failed: \{e}")
      }
      self.client = Some(c)
      c
    }
  }
}

///|
fn extract_host(url : String) -> String {
  let s = if url is [.. "https://", .. rest] {
    rest.to_string()
  } else if url is [.. "http://", .. rest] {
    rest.to_string()
  } else {
    url
  }
  let idx = string_index_of(s, "/", 0)
  if idx >= 0 {
    s[:idx].to_string()
  } else {
    s
  }
}

///|
async fn S3Client::signed_headers(
  self : S3Client,
  meth : String,
  key : String,
  query : String,
  payload_hash : String,
) -> Map[String, String] {
  let amz_date = amz_date_now()
  let host = extract_host(self.config.endpoint)
  let headers : Array[(String, String)] = [
    ("host", host),
    ("x-amz-content-sha256", payload_hash),
    ("x-amz-date", amz_date),
  ]
  let auth = sign_request(
    self.config,
    meth,
    self.signing_path(key),
    query,
    headers,
    payload_hash,
    amz_date,
  )
  let result : Map[String, String] = {}
  result["x-amz-content-sha256"] = payload_hash
  result["x-amz-date"] = amz_date
  result["authorization"] = auth
  result
}

///|
let empty_sha256 : String = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"

///|
pub async fn S3Client::get_object(
  self : S3Client,
  key : String,
) -> Bytes raise @s3.S3Error {
  let extra = self.signed_headers("GET", key, "", empty_sha256) catch {
    e => raise @s3.s3_error("S3 GET signing failed: \{e}")
  }
  let client = self.ensure_client()
  let response = client.get(
    "/\{self.config.bucket}/\{key}",
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 GET request failed: \{e}")
  }
  if response.code != 200 {
    raise @s3.s3_error("S3 GET failed: status \{response.code}")
  }
  let data = (client : &@io.Reader).read_all() catch {
    e => raise @s3.s3_error("S3 GET read failed: \{e}")
  }
  data.binary()
}

///|
pub async fn S3Client::put_object(
  self : S3Client,
  key : String,
  data : Bytes,
) -> Unit raise @s3.S3Error {
  let payload_hash = sha256_hex(data) catch {
    e => raise @s3.s3_error("S3 PUT hash failed: \{e}")
  }
  let extra = self.signed_headers("PUT", key, "", payload_hash) catch {
    e => raise @s3.s3_error("S3 PUT signing failed: \{e}")
  }
  let client = self.ensure_client()
  let response = client.put(
    "/\{self.config.bucket}/\{key}",
    data,
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 PUT request failed: \{e}")
  }
  if response.code != 200 && response.code != 204 {
    raise @s3.s3_error("S3 PUT failed: status \{response.code}")
  }
}

///|
pub async fn S3Client::delete_object(
  self : S3Client,
  key : String,
) -> Unit raise @s3.S3Error {
  let extra = self.signed_headers("DELETE", key, "", empty_sha256) catch {
    e => raise @s3.s3_error("S3 DELETE signing failed: \{e}")
  }
  let client = self.ensure_client()
  client.request(
    @http.Delete,
    "/\{self.config.bucket}/\{key}",
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 DELETE request failed: \{e}")
  }
  let response = client.end_request() catch {
    e => raise @s3.s3_error("S3 DELETE end_request failed: \{e}")
  }
  if response.code != 204 && response.code != 200 {
    raise @s3.s3_error("S3 DELETE failed: status \{response.code}")
  }
}

///|
/// List objects with a given prefix (single page, up to 1000 results).
/// Use list_all_objects for automatic pagination.
pub async fn S3Client::list_objects(
  self : S3Client,
  prefix : String,
) -> Array[S3Object] raise @s3.S3Error {
  let extra = self.signed_headers(
    "GET",
    "",
    "list-type=2&prefix=\{prefix}",
    empty_sha256,
  ) catch {
    e => raise @s3.s3_error("S3 LIST signing failed: \{e}")
  }
  let client = self.ensure_client()
  let response = client.get(
    "/\{self.config.bucket}?list-type=2&prefix=\{prefix}",
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 LIST request failed: \{e}")
  }
  if response.code != 200 {
    raise @s3.s3_error("S3 LIST failed: status \{response.code}")
  }
  let body_data = (client : &@io.Reader).read_all() catch {
    e => raise @s3.s3_error("S3 LIST read failed: \{e}")
  }
  let xml = body_data.text() catch {
    e => raise @s3.s3_error("S3 LIST decode failed: \{e}")
  }
  parse_list_objects_v2(xml)
}

///|
pub async fn S3Client::head_object(
  self : S3Client,
  key : String,
) -> S3Object? raise @s3.S3Error {
  let extra = self.signed_headers("HEAD", key, "", empty_sha256) catch {
    e => raise @s3.s3_error("S3 HEAD signing failed: \{e}")
  }
  let client = self.ensure_client()
  client.request(
    @http.Head,
    "/\{self.config.bucket}/\{key}",
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 HEAD request failed: \{e}")
  }
  let response = client.end_request() catch {
    e => raise @s3.s3_error("S3 HEAD end_request failed: \{e}")
  }
  if response.code == 404 {
    return None
  }
  if response.code != 200 {
    raise @s3.s3_error("S3 HEAD failed: status \{response.code}")
  }
  let size : Int64 = match response.headers.get("content-length") {
    Some(s) => @string.parse_int64(s) catch { _ => 0L }
    None => 0L
  }
  Some({ key, size })
}

///|
/// Copy an object within the same bucket or across buckets.
/// source_key is the key in the source bucket.
pub async fn S3Client::copy_object(
  self : S3Client,
  source_bucket : String,
  source_key : String,
  dest_key : String,
) -> Unit raise @s3.S3Error {
  let payload_hash = empty_sha256
  let extra = self.signed_headers("PUT", dest_key, "", payload_hash) catch {
    e => raise @s3.s3_error("S3 COPY signing failed: \{e}")
  }
  extra["x-amz-copy-source"] = "/\{source_bucket}/\{source_key}"
  let client = self.ensure_client()
  let response = client.put(
    "/\{self.config.bucket}/\{dest_key}",
    b"",
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 COPY request failed: \{e}")
  }
  if response.code != 200 {
    raise @s3.s3_error("S3 COPY failed: status \{response.code}")
  }
}

///|
/// Delete multiple objects in a single request.
pub async fn S3Client::delete_objects(
  self : S3Client,
  keys : Array[String],
) -> Unit raise @s3.S3Error {
  if keys.is_empty() {
    return
  }
  let xml = StringBuilder::new()
  xml.write_string("<Delete>")
  for key in keys {
    xml.write_string("<Object><Key>\{key}</Key></Object>")
  }
  xml.write_string("</Delete>")
  let body = @utf8.encode(xml.to_string())
  let payload_hash = sha256_hex(body) catch {
    e => raise @s3.s3_error("S3 DELETE_OBJECTS hash failed: \{e}")
  }
  let extra = self.signed_headers("POST", "", "delete=", payload_hash) catch {
    e => raise @s3.s3_error("S3 DELETE_OBJECTS signing failed: \{e}")
  }
  extra["content-type"] = "application/xml"
  let client = self.ensure_client()
  let response = client.post(
    "/\{self.config.bucket}?delete=",
    body,
    extra_headers=extra,
  ) catch {
    e => raise @s3.s3_error("S3 DELETE_OBJECTS request failed: \{e}")
  }
  if response.code != 200 {
    raise @s3.s3_error("S3 DELETE_OBJECTS failed: status \{response.code}")
  }
}

///|
/// List ALL objects with a prefix, handling pagination automatically.
/// S3 returns max 1000 objects per request.
pub async fn S3Client::list_all_objects(
  self : S3Client,
  prefix : String,
) -> Array[S3Object] raise @s3.S3Error {
  let all : Array[S3Object] = []
  let mut continuation_token : String? = None
  while true {
    let mut query = "list-type=2&prefix=\{prefix}"
    match continuation_token {
      Some(token) => query = query + "&continuation-token=\{token}"
      None => ()
    }
    let extra = self.signed_headers("GET", "", query, empty_sha256) catch {
      e => raise @s3.s3_error("S3 LIST signing failed: \{e}")
    }
    let client = self.ensure_client()
    let response = client.get(
      "/\{self.config.bucket}?\{query}",
      extra_headers=extra,
    ) catch {
      e => raise @s3.s3_error("S3 LIST request failed: \{e}")
    }
    if response.code != 200 {
      raise @s3.s3_error("S3 LIST failed: status \{response.code}")
    }
    let body_data = (client : &@io.Reader).read_all() catch {
      e => raise @s3.s3_error("S3 LIST read failed: \{e}")
    }
    let xml_str = body_data.text() catch {
      e => raise @s3.s3_error("S3 LIST decode failed: \{e}")
    }
    let objects = parse_list_objects_v2(xml_str)
    all.append(objects)
    let tokens = extract_tag_values(xml_str, "NextContinuationToken")
    if tokens.is_empty() {
      break
    }
    continuation_token = Some(tokens[0])
  }
  all
}

///|
/// Check if an object exists. Returns true if HEAD succeeds with 200.
pub async fn S3Client::object_exists(
  self : S3Client,
  key : String,
) -> Bool raise @s3.S3Error {
  let result = self.head_object(key)
  result is Some(_)
}
