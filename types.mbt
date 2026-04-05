///|
/// S3 error type (replaces VfsError dependency).
pub suberror S3Error {
  S3Error(String)
}

///|
pub fn S3Error::to_string(self : S3Error) -> String {
  let S3Error(msg) = self
  msg
}

///|
/// Helper to create S3Error.
pub fn s3_error(msg : String) -> S3Error {
  S3Error(msg)
}
