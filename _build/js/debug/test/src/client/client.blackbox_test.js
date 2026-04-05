function _M0TPB15WasmHelperCache(param0, param1) {
  this.tried = param0;
  this.exports = param1;
}
function _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
function _M0TPB7MyInt64(param0, param1) {
  this.hi = param0;
  this.lo = param1;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0FPB21int64__to__string__js = (num, radix) => {
  let val = (BigInt(num.hi >>> 0) << 32n) | BigInt(num.lo >>> 0);
  if (val & (1n << 63n)) {
    val = val - (1n << 64n);
  }
  return val.toString(radix);
};
function _M0DTPC16result6ResultGuRPB7FailureE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPB7FailureE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPB7FailureE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error60moonbitlang_2fcore_2fbuiltin_2eSnapshotError_2eSnapshotError.prototype.$tag = 5;
function _M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fbuiltin_2eInspectError_2eInspectError.prototype.$tag = 4;
function _M0DTPC15error5Error112mizchi_2fs3_2fsrc_2fclient__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error112mizchi_2fs3_2fsrc_2fclient__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError.prototype.$tag = 3;
function _M0DTPC15error5Error114mizchi_2fs3_2fsrc_2fclient__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error114mizchi_2fs3_2fsrc_2fclient__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest.prototype.$tag = 2;
function _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError.prototype.$tag = 1;
function _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRPC15error5ErrorE2Ok.prototype.$tag = 1;
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
const _M0FPB23try__init__wasm__helper = function() {
  try {
    return new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
  } catch (e) {
    return undefined;
  }
};
const _M0MPB7MyInt6411div__bigint = (a, b) => {
  const aVal = (BigInt(a.hi) << 32n) | BigInt(a.lo >>> 0);
  const bVal = (BigInt(b.hi) << 32n) | BigInt(b.lo >>> 0);
  const result = aVal / bVal;
  const lo = Number(result & 0xFFFFFFFFn);
  const hi = Number((result >> 32n) & 0xFFFFFFFFn);
  return { hi: hi | 0, lo: lo | 0 };
};
const _M0MPB7MyInt647compare = (a, b) => {
  const ahi = a.hi;
  const bhi = b.hi;
  if (ahi < bhi) {
    return -1;
  }
  if (ahi > bhi) {
    return 1;
  }
  const alo = a.lo >>> 0;
  const blo = b.lo >>> 0;
  if (alo < blo) {
    return -1;
  }
  if (alo > blo) {
    return 1;
  }
  return 0;
};
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE2Ok.prototype.$tag = 1;
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
const $0L = { hi: 0, lo: 0 };
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TP46mizchi2s33src6client8S3Object(param0, param1) {
  this.key = param0;
  this.size = param1;
}
const $42L = { hi: 0, lo: 42 };
function _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok.prototype.$tag = 1;
const _M0MP46mizchi2s33src22client__blackbox__test34MoonBitTestDriverInternalTestEntry8filename = (entry) => entry[0];
const _M0MP46mizchi2s33src22client__blackbox__test34MoonBitTestDriverInternalTestEntry5index = (entry) => entry[1];
const _M0FP46mizchi2s33src22client__blackbox__test42moonbit__test__driver__internal__js__catch = (f, on_err) => {
   try {
     f()
   } catch (err) {
     const msg = err.stack.toString()
     on_err(msg)
   }
 };
const _M0FP46mizchi2s33src22client__blackbox__test38moonbit__test__driver__js__parse__args = () => {
  try {
    let testParams = []
    // check if there is command line argument
    if (process.argv.length > 2) {
      const testArgs = JSON.parse(process.argv[2])
      testParams = testArgs.file_and_index.flatMap(([file, ranges]) => {
        let arr = []
        for (let range of ranges) {
          for (let i = range.start; i < range.end; i++) {
            arr.push([file, i])
          }
        }
        return arr
      })
      return testParams
    }
  } catch (error) {
    console.error('failed to parse args: ', error.message)
    process.exit(1)
  }
};
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char };
function _M0FP15Error10to__string(_e) {
  switch (_e.$tag) {
    case 5: {
      return "moonbitlang/core/builtin.SnapshotError.SnapshotError";
    }
    case 0: {
      return _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(_e);
    }
    case 2: {
      return "mizchi/s3/src/client_blackbox_test.MoonBitTestDriverInternalSkipTest.MoonBitTestDriverInternalSkipTest";
    }
    case 4: {
      return "moonbitlang/core/builtin.InspectError.InspectError";
    }
    case 3: {
      return "mizchi/s3/src/client_blackbox_test.MoonBitTestDriverInternalJsError.MoonBitTestDriverInternalJsError";
    }
    default: {
      return _M0IP016_24default__implPB4Show10to__stringGRPC17strconv12StrConvErrorE(_e);
    }
  }
}
const _M0FPB19wasm__helper__cache = new _M0TPB15WasmHelperCache(false, undefined);
const _M0FPC17strconv14base__err__str = "invalid base";
const _M0FPC17strconv15range__err__str = "value out of range";
const _M0FPC17strconv16syntax__err__str = "invalid syntax";
const _M0FPC17strconv20parse__int64_2einnerN7_2abindS539 = "";
const _M0FPB4seed = _M0FPB12random__seed();
const _bind = [{ _0: 0, _1: { _0: _M0FP46mizchi2s33src22client__blackbox__test37____test__786d6c5f746573742e6d6274__0, _1: ["extract_tag_values"] } }, { _0: 1, _1: { _0: _M0FP46mizchi2s33src22client__blackbox__test37____test__786d6c5f746573742e6d6274__1, _1: ["extract_tag_values empty"] } }, { _0: 2, _1: { _0: _M0FP46mizchi2s33src22client__blackbox__test37____test__786d6c5f746573742e6d6274__2, _1: ["parse_list_objects_v2"] } }];
const _tmp = { _0: "xml_test.mbt", _1: _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind, 0, 3)) };
const _bind$2 = [];
const _tmp$2 = { _0: "xml.mbt", _1: _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$2, 0, 0)) };
const _bind$3 = [];
const _tmp$3 = { _0: "types.mbt", _1: _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$3, 0, 0)) };
const _bind$4 = [];
const _tmp$4 = { _0: "signing.mbt", _1: _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$4, 0, 0)) };
const _bind$5 = [];
const _tmp$5 = { _0: "operations.mbt", _1: _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$5, 0, 0)) };
const _bind$6 = [];
const _bind$7 = [_tmp, _tmp$2, _tmp$3, _tmp$4, _tmp$5, { _0: "js_ffi.mbt", _1: _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(new _M0TPB9ArrayViewGUiUWEuQRPC15error5ErrorNsEEE(_bind$6, 0, 0)) }];
const _M0FP46mizchi2s33src22client__blackbox__test48moonbit__test__driver__internal__no__args__tests = _M0MPB3Map11from__arrayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(new _M0TPB9ArrayViewGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_bind$7, 0, 6));
function _M0FPC15abort5abortGuE(msg) {
  $panic();
}
function _M0FPC15abort5abortGRPC16string10StringViewE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0MPB6Logger13write__objectGsE(self, obj) {
  _M0IPC16string6StringPB4Show6output(obj, self);
}
function _M0IPB7FailurePB4Show6output(_x_4709, _x_4710) {
  const _Failure = _x_4709;
  const _$42$arg_4711 = _Failure._0;
  _x_4710.method_table.method_0(_x_4710.self, "Failure(");
  _M0MPB6Logger13write__objectGsE(_x_4710, _$42$arg_4711);
  _x_4710.method_table.method_0(_x_4710.self, ")");
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = Math.imul(_M0FPB4rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0FPB5abortGuE(string, loc) {
  _M0FPC15abort5abortGuE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0FPB5abortGRPC16string10StringViewE(string, loc) {
  return _M0FPC15abort5abortGRPC16string10StringViewE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0FPB5abortGOiE(string, loc) {
  return _M0FPC15abort5abortGOiE(`${_M0IPC16string6StringPB4Show10to__string(string)}\n  at ${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)}\n`);
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder11new_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 55296) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 56319);
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3442(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3442(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3442(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView6length(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = _end < 0 ? self.end + _end | 0 : self.start + _end | 0;
  }
  const abs_start = start < 0 ? self.end + start | 0 : self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView11unsafe__get(self, index) {
  return self.str.charCodeAt(self.start + index | 0);
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i) {
  const self = _env._1;
  const logger = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = _M0MPC16string10StringView6length(self);
  const _env = { _0: logger, _1: self };
  let _tmp$6 = 0;
  let _tmp$7 = 0;
  _L: while (true) {
    const i = _tmp$6;
    const seg = _tmp$7;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
      break;
    }
    const code = _M0MPC16string10StringView11unsafe__get(self, i);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp$6 = i + 1 | 0;
          _tmp$7 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp$6 = i + 1 | 0;
          _tmp$7 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp$6 = i + 1 | 0;
          _tmp$7 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp$6 = i + 1 | 0;
          _tmp$7 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (_M0IP016_24default__implPB7Compare6op__ltGkE(code, 32)) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp$6 = i + 1 | 0;
            _tmp$7 = i + 1 | 0;
            continue _L;
          } else {
            _tmp$6 = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3427(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp$6 = i + 1 | 0;
    _tmp$7 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder11new_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0IPC16uint166UInt16PB7Compare7compare(self, that) {
  return $compare_int(self, that);
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPB7MyInt649from__int(value) {
  return new _M0TPB7MyInt64(value >> 31 & -1, value | 0);
}
function _M0MPC13int3Int9to__int64(self) {
  return _M0MPB7MyInt649from__int(self);
}
function _M0MPB6Hasher7combineGiE(self, value) {
  _M0IPC13int3IntPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGsE(self, value) {
  _M0IPC16string6StringPB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGlE(x, y) {
  return !_M0IPC15int645Int64PB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__ltGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__ltGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) < 0;
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__leGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return _M0IPC16uint166UInt16PB7Compare7compare(x, y) >= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGlE(x, y) {
  return _M0IPC15int645Int64PB7Compare7compare(x, y) >= 0;
}
function _M0MPB6Hasher9avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function _M0MPB6Hasher8finalize(self) {
  return _M0MPB6Hasher9avalanche(self);
}
function _M0MPB6Hasher11new_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher3new(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher11new_2einner(seed);
}
function _M0IP016_24default__implPB4Hash4hashGiE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGiE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGsE(self) {
  const h = _M0MPB6Hasher3new(undefined);
  _M0MPB6Hasher7combineGsE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  if (start$2 >= 0 && (start$2 <= end$2 && end$2 <= len)) {
    if (start$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start$2))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start$2, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show10to__stringGiE(self) {
  const logger = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPC13int3IntPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(self) {
  const logger = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPB9SourceLocPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRPB7FailureE(self) {
  const logger = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPB7FailurePB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0IP016_24default__implPB4Show10to__stringGRPC17strconv12StrConvErrorE(self) {
  const logger = _M0MPB13StringBuilder11new_2einner(0);
  _M0IPC17strconv12StrConvErrorPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPC15int645Int6418to__string_2einner(self, radix) {
  return _M0FPB21int64__to__string__js(self, radix);
}
function _M0FPB13debug__stringGiE(t) {
  const buf = _M0MPB13StringBuilder11new_2einner(50);
  _M0IPC13int3IntPB4Show6output(t, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FPB13debug__stringGsE(t) {
  const buf = _M0MPB13StringBuilder11new_2einner(50);
  _M0IPC16string6StringPB4Show6output(t, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FPB13debug__stringGlE(t) {
  const buf = _M0MPB13StringBuilder11new_2einner(50);
  _M0IPC15int645Int64PB4Show6output(t, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0FPB4failGuE(msg, loc) {
  return new _M0DTPC16result6ResultGuRPB7FailureE3Err(new _M0DTPC15error5Error48moonbitlang_2fcore_2fbuiltin_2eFailure_2eFailure(`${_M0IP016_24default__implPB4Show10to__stringGRPB9SourceLocE(loc)} FAILED: ${_M0IPC16string6StringPB4Show10to__string(msg)}`));
}
function _M0FPB10assert__eqGiE(a, b, msg, loc) {
  if (a !== b) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${_M0IPC16string6StringPB4Show10to__string(_M0FPB13debug__stringGiE(a))} != ${_M0IPC16string6StringPB4Show10to__string(_M0FPB13debug__stringGiE(b))}\``;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(fail_msg, loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPB10assert__eqGsE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGsE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${_M0IPC16string6StringPB4Show10to__string(_M0FPB13debug__stringGsE(a))} != ${_M0IPC16string6StringPB4Show10to__string(_M0FPB13debug__stringGsE(b))}\``;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(fail_msg, loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0FPB10assert__eqGlE(a, b, msg, loc) {
  if (_M0IP016_24default__implPB2Eq10not__equalGlE(a, b)) {
    let fail_msg;
    if (msg === undefined) {
      fail_msg = `\`${_M0IPC16string6StringPB4Show10to__string(_M0FPB13debug__stringGlE(a))} != ${_M0IPC16string6StringPB4Show10to__string(_M0FPB13debug__stringGlE(b))}\``;
    } else {
      const _Some = msg;
      fail_msg = _Some;
    }
    return _M0FPB4failGuE(fail_msg, loc);
  } else {
    return new _M0DTPC16result6ResultGuRPC15error5ErrorE2Ok(undefined);
  }
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = _M0MPC16string10StringView6length(self);
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= _M0MPC16string10StringView6length(self)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPB5abortGRPC16string10StringViewE("Invalid index for View", "builtin/stringview.mbt:113:5-113:36@moonbitlang/core");
}
function _M0IPC16string10StringViewPB4Show10to__string(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = _M0MPC16string10StringView6length(self);
  if (len === _M0MPC16string10StringView6length(other)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    let _tmp$6 = 0;
    while (true) {
      const i = _tmp$6;
      if (i < len) {
        if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), other.str.charCodeAt(other.start + i | 0))) {
        } else {
          return false;
        }
        _tmp$6 = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return true;
  } else {
    return false;
  }
}
function _M0MPC15array9ArrayView6lengthGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(self) {
  return self.end - self.start | 0;
}
function _M0MPC16string6String24char__length__eq_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp$6 = start_offset;
  let _tmp$7 = 0;
  while (true) {
    const index = _tmp$6;
    const count = _tmp$7;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp$6 = index + 2 | 0;
          _tmp$7 = count + 1 | 0;
          continue;
        } else {
          _M0FPB5abortGuE("invalid surrogate pair", "builtin/string.mbt:429:9-429:40@moonbitlang/core");
        }
      }
      _tmp$6 = index + 1 | 0;
      _tmp$7 = count + 1 | 0;
      continue;
    } else {
      return count === len && index === end_offset$2;
    }
  }
}
function _M0MPC16string6String24char__length__ge_2einner(self, len, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  let _tmp$6 = start_offset;
  let _tmp$7 = 0;
  while (true) {
    const index = _tmp$6;
    const count = _tmp$7;
    if (index < end_offset$2 && count < len) {
      const c1 = self.charCodeAt(index);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index + 1 | 0) < end_offset$2) {
        const c2 = self.charCodeAt(index + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          _tmp$6 = index + 2 | 0;
          _tmp$7 = count + 1 | 0;
          continue;
        } else {
          _M0FPB5abortGuE("invalid surrogate pair", "builtin/string.mbt:457:9-457:40@moonbitlang/core");
        }
      }
      _tmp$6 = index + 1 | 0;
      _tmp$7 = count + 1 | 0;
      continue;
    } else {
      return count >= len;
    }
  }
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp$6 = end_offset;
  let _tmp$7 = 0;
  while (true) {
    const utf16_offset = _tmp$6;
    const char_count = _tmp$7;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp$6 = utf16_offset - 2 | 0;
        _tmp$7 = char_count + 1 | 0;
        continue;
      } else {
        _tmp$6 = utf16_offset - 1 | 0;
        _tmp$7 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp$6 = start_offset;
    let _tmp$7 = 0;
    while (true) {
      const utf16_offset = _tmp$6;
      const char_count = _tmp$7;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp$6 = utf16_offset + 2 | 0;
          _tmp$7 = char_count + 1 | 0;
          continue;
        } else {
          _tmp$6 = utf16_offset + 1 | 0;
          _tmp$7 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPB5abortGOiE("Invalid start index", "builtin/string.mbt:329:5-329:33@moonbitlang/core");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0IPC16string10StringViewPB4Show10to__string(str)}`;
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC16string6String17substring_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    end$2 = _Some;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function _M0IPC13int3IntPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MPC13int3Int18to__string_2einner(self, 10));
}
function _M0IPC15int645Int64PB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0MPC15int645Int6418to__string_2einner(self, 10));
}
function _M0IPC16string6StringPB4Show6output(self, logger) {
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), logger, true);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0MPB3Map11new_2einnerGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return new _M0TPB3MapGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$10, 0, capacity$2, _bind$8, _bind$9, _bind$11, -1);
}
function _M0MPB3Map11new_2einnerGiUWEuQRPC15error5ErrorNsEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$8 = capacity$2 - 1 | 0;
  const _bind$9 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$10 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$11 = undefined;
  return new _M0TPB3MapGiUWEuQRPC15error5ErrorNsEE(_bind$10, 0, capacity$2, _bind$8, _bind$9, _bind$11, -1);
}
function _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$8);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_tmp$6[_bind$8]).next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  const _bind$8 = self.tail;
  if (_bind$8 === -1) {
    self.head = entry;
  } else {
    const _tmp$6 = self.entries;
    $bound_check(_tmp$6, _bind$8);
    _M0MPC16option6Option6unwrapGRPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(_tmp$6[_bind$8]).next = entry;
  }
  self.tail = idx;
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, idx);
  _tmp$6[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry, new_idx) {
  const _tmp$6 = self.entries;
  $bound_check(_tmp$6, new_idx);
  _tmp$6[new_idx] = entry;
  const _bind$8 = entry.next;
  if (_bind$8 === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind$8;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$8 = _tmp$9[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, entry) {
  let _tmp$6 = entry.psl + 1 | 0;
  let _tmp$7 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$8 = entry;
  while (true) {
    const psl = _tmp$6;
    const idx$2 = _tmp$7;
    const entry$2 = _tmp$8;
    const _tmp$9 = self.entries;
    $bound_check(_tmp$9, idx$2);
    const _bind$8 = _tmp$9[idx$2];
    if (_bind$8 === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGiUWEuQRPC15error5ErrorNsEE(self, entry$2, idx$2);
        _tmp$6 = _curr_entry.psl + 1 | 0;
        _tmp$7 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$8 = _curr_entry;
        continue;
      } else {
        _tmp$6 = psl + 1 | 0;
        _tmp$7 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, hash) {
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$8 = _tmp$8[idx];
    if (_bind$8 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
        _tmp$6 = 0;
        _tmp$7 = hash & self.capacity_mask;
        continue;
      }
      const _bind$9 = self.tail;
      const _bind$10 = undefined;
      const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$9, _bind$10, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self);
          _tmp$6 = 0;
          _tmp$7 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, _curr_entry);
        const _bind$9 = self.tail;
        const _bind$10 = undefined;
        const entry = new _M0TPB5EntryGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_bind$9, _bind$10, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, idx, entry);
        return undefined;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, hash) {
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$8 = _tmp$8[idx];
    if (_bind$8 === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
        _tmp$6 = 0;
        _tmp$7 = hash & self.capacity_mask;
        continue;
      }
      const _bind$9 = self.tail;
      const _bind$10 = undefined;
      const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$9, _bind$10, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind$8;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self);
          _tmp$6 = 0;
          _tmp$7 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGiUWEuQRPC15error5ErrorNsEE(self, idx, _curr_entry);
        const _bind$9 = self.tail;
        const _bind$10 = undefined;
        const entry = new _M0TPB5EntryGiUWEuQRPC15error5ErrorNsEE(_bind$9, _bind$10, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGiUWEuQRPC15error5ErrorNsEE(self, idx, entry);
        return undefined;
      }
      _tmp$6 = psl + 1 | 0;
      _tmp$7 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4growGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, _key, _value, _hash);
      _tmp$6 = _next;
      continue;
    }
  }
}
function _M0MPB3Map4growGiUWEuQRPC15error5ErrorNsEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp$6 = old_head;
  while (true) {
    const _param = _tmp$6;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _next = _x.next;
      const _key = _x.key;
      const _value = _x.value;
      const _hash = _x.hash;
      _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, _key, _value, _hash);
      _tmp$6 = _next;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGsE(key));
}
function _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(self, key, value) {
  _M0MPB3Map15set__with__hashGiUWEuQRPC15error5ErrorNsEE(self, key, value, _M0IP016_24default__implPB4Hash4hashGiE(key));
}
function _M0MPB3Map11from__arrayGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(capacity);
  const _bind$8 = arr.end - arr.start | 0;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind$8) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(m, e._0, e._1);
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map11from__arrayGiUWEuQRPC15error5ErrorNsEE(arr) {
  const length = _M0MPC15array9ArrayView6lengthGUsRPB3MapGiUWEuQRPC15error5ErrorNsEEEE(arr);
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  const m = _M0MPB3Map11new_2einnerGiUWEuQRPC15error5ErrorNsEE(capacity);
  const _bind$8 = arr.end - arr.start | 0;
  let _tmp$6 = 0;
  while (true) {
    const _ = _tmp$6;
    if (_ < _bind$8) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGiUWEuQRPC15error5ErrorNsEE(m, e._0, e._1);
      _tmp$6 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGiE(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$8 = _tmp$8[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGsE(key);
  let _tmp$6 = 0;
  let _tmp$7 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$6;
    const idx = _tmp$7;
    const _tmp$8 = self.entries;
    $bound_check(_tmp$8, idx);
    const _bind$8 = _tmp$8[idx];
    if (_bind$8 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$8;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$6 = i + 1 | 0;
      _tmp$7 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB7MyInt6411add__hi__lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return new _M0TPB7MyInt64(hi, lo);
}
function _M0IPB7MyInt64PB3Add3add(self, other) {
  return _M0MPB7MyInt6411add__hi__lo(self, other.hi, other.lo);
}
function _M0IPB7MyInt64PB3Sub3sub(self, other) {
  return other.lo === 0 ? new _M0TPB7MyInt64(self.hi - other.hi | 0, self.lo) : _M0MPB7MyInt6411add__hi__lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function _M0IPB7MyInt64PB3Mul3mul(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return new _M0TPB7MyInt64(c48$5 << 16 | c32$8, c16$5 << 16 | c00$2);
}
function _M0FPB29try__get__int64__wasm__helper() {
  if (_M0FPB19wasm__helper__cache.tried) {
    const _bind$8 = _M0FPB19wasm__helper__cache.exports;
    return !(_bind$8 === undefined);
  }
  _M0FPB19wasm__helper__cache.tried = true;
  _M0FPB19wasm__helper__cache.exports = _M0FPB23try__init__wasm__helper();
  const _bind$8 = _M0FPB19wasm__helper__cache.exports;
  return !(_bind$8 === undefined);
}
function _M0IPB7MyInt64PB3Div3div(self, other) {
  if (!(other.hi === 0 && other.lo === 0)) {
    if (!_M0FPB29try__get__int64__wasm__helper()) {
      return _M0MPB7MyInt6411div__bigint(self, other);
    }
    const _bind$8 = _M0FPB19wasm__helper__cache.exports;
    if (_bind$8 === undefined) {
      return $panic();
    } else {
      const _Some = _bind$8;
      const _exports = _Some;
      const _ahi = self.hi;
      const _alo = self.lo;
      const _bhi = other.hi;
      const _blo = other.lo;
      const _func = _exports.div_s;
      const lo = _func(_alo, _ahi, _blo, _bhi);
      const _func$2 = _exports.get_high;
      const hi = _func$2();
      return new _M0TPB7MyInt64(hi, lo);
    }
  } else {
    return $panic();
  }
}
function _M0IPB7MyInt64PB2Eq5equal(self, other) {
  return self.hi === other.hi && self.lo === other.lo;
}
function _M0IPC15int645Int64PB3Add3add(self, other) {
  return _M0IPB7MyInt64PB3Add3add(self, other);
}
function _M0IPC15int645Int64PB3Sub3sub(self, other) {
  return _M0IPB7MyInt64PB3Sub3sub(self, other);
}
function _M0IPC15int645Int64PB3Mul3mul(self, other) {
  return _M0IPB7MyInt64PB3Mul3mul(self, other);
}
function _M0IPC15int645Int64PB3Div3div(self, other) {
  return _M0IPB7MyInt64PB3Div3div(self, other);
}
function _M0IPC15int645Int64PB2Eq5equal(self, other) {
  return _M0IPB7MyInt64PB2Eq5equal(self, other);
}
function _M0IPC15int645Int64PB7Compare7compare(self, other) {
  return _M0MPB7MyInt647compare(self, other);
}
function _M0MPB6Hasher15combine__string(self, value) {
  const _bind$8 = value.length;
  let _tmp$6 = 0;
  while (true) {
    const i = _tmp$6;
    if (i < _bind$8) {
      _M0MPB6Hasher13combine__uint(self, value.charCodeAt(i));
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IPC16string6StringPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher15combine__string(hasher, self);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0FPB7printlnGsE(input) {
  console.log(_M0IPC16string6StringPB4Show10to__string(input));
}
function _M0IPB9SourceLocPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0MPC15array5Array2atGRP46mizchi2s33src22client__blackbox__test34MoonBitTestDriverInternalTestEntryE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0FPC17strconv9base__errGUiRPC16string10StringViewbEE() {
  return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv14base__err__str));
}
function _M0FPC17strconv25check__and__consume__base(view, base) {
  if (base === 0) {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MPC16string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp$6 = view.str;
                    const _bind$8 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$7;
                    if (_bind$8 === undefined) {
                      _tmp$7 = view.end;
                    } else {
                      const _Some = _bind$8;
                      _tmp$7 = _Some;
                    }
                    const _x$3 = new _M0TPC16string10StringView(_tmp$6, _tmp$7, view.end);
                    rest$3 = _x$3;
                    break _L$4;
                  }
                  case 88: {
                    const _tmp$8 = view.str;
                    const _bind$9 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$9;
                    if (_bind$9 === undefined) {
                      _tmp$9 = view.end;
                    } else {
                      const _Some = _bind$9;
                      _tmp$9 = _Some;
                    }
                    const _x$4 = new _M0TPC16string10StringView(_tmp$8, _tmp$9, view.end);
                    rest$3 = _x$4;
                    break _L$4;
                  }
                  case 111: {
                    const _tmp$10 = view.str;
                    const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$10 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$10;
                      _tmp$11 = _Some;
                    }
                    const _x$5 = new _M0TPC16string10StringView(_tmp$10, _tmp$11, view.end);
                    rest$2 = _x$5;
                    break _L$3;
                  }
                  case 79: {
                    const _tmp$12 = view.str;
                    const _bind$11 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$13;
                    if (_bind$11 === undefined) {
                      _tmp$13 = view.end;
                    } else {
                      const _Some = _bind$11;
                      _tmp$13 = _Some;
                    }
                    const _x$6 = new _M0TPC16string10StringView(_tmp$12, _tmp$13, view.end);
                    rest$2 = _x$6;
                    break _L$3;
                  }
                  case 98: {
                    const _tmp$14 = view.str;
                    const _bind$12 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$15;
                    if (_bind$12 === undefined) {
                      _tmp$15 = view.end;
                    } else {
                      const _Some = _bind$12;
                      _tmp$15 = _Some;
                    }
                    const _x$7 = new _M0TPC16string10StringView(_tmp$14, _tmp$15, view.end);
                    rest = _x$7;
                    break _L$2;
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$13 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$13 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$13;
                      _tmp$17 = _Some;
                    }
                    const _x$8 = new _M0TPC16string10StringView(_tmp$16, _tmp$17, view.end);
                    rest = _x$8;
                    break _L$2;
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 10, _1: view, _2: false });
  } else {
    _L: {
      let rest;
      _L$2: {
        let rest$2;
        _L$3: {
          let rest$3;
          _L$4: {
            if (_M0MPC16string6String24char__length__ge_2einner(view.str, 2, view.start, view.end)) {
              const _x = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 0, view.start, view.end));
              if (_x === 48) {
                const _x$2 = _M0MPC16string6String16unsafe__char__at(view.str, _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 1, view.start, view.end));
                switch (_x$2) {
                  case 120: {
                    const _tmp$6 = view.str;
                    const _bind$8 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$7;
                    if (_bind$8 === undefined) {
                      _tmp$7 = view.end;
                    } else {
                      const _Some = _bind$8;
                      _tmp$7 = _Some;
                    }
                    const _x$3 = new _M0TPC16string10StringView(_tmp$6, _tmp$7, view.end);
                    if (base === 16) {
                      rest$3 = _x$3;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 88: {
                    const _tmp$8 = view.str;
                    const _bind$9 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$9;
                    if (_bind$9 === undefined) {
                      _tmp$9 = view.end;
                    } else {
                      const _Some = _bind$9;
                      _tmp$9 = _Some;
                    }
                    const _x$4 = new _M0TPC16string10StringView(_tmp$8, _tmp$9, view.end);
                    if (base === 16) {
                      rest$3 = _x$4;
                      break _L$4;
                    } else {
                      break _L;
                    }
                  }
                  case 111: {
                    const _tmp$10 = view.str;
                    const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$11;
                    if (_bind$10 === undefined) {
                      _tmp$11 = view.end;
                    } else {
                      const _Some = _bind$10;
                      _tmp$11 = _Some;
                    }
                    const _x$5 = new _M0TPC16string10StringView(_tmp$10, _tmp$11, view.end);
                    if (base === 8) {
                      rest$2 = _x$5;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 79: {
                    const _tmp$12 = view.str;
                    const _bind$11 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$13;
                    if (_bind$11 === undefined) {
                      _tmp$13 = view.end;
                    } else {
                      const _Some = _bind$11;
                      _tmp$13 = _Some;
                    }
                    const _x$6 = new _M0TPC16string10StringView(_tmp$12, _tmp$13, view.end);
                    if (base === 8) {
                      rest$2 = _x$6;
                      break _L$3;
                    } else {
                      break _L;
                    }
                  }
                  case 98: {
                    const _tmp$14 = view.str;
                    const _bind$12 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$15;
                    if (_bind$12 === undefined) {
                      _tmp$15 = view.end;
                    } else {
                      const _Some = _bind$12;
                      _tmp$15 = _Some;
                    }
                    const _x$7 = new _M0TPC16string10StringView(_tmp$14, _tmp$15, view.end);
                    if (base === 2) {
                      rest = _x$7;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  case 66: {
                    const _tmp$16 = view.str;
                    const _bind$13 = _M0MPC16string6String29offset__of__nth__char_2einner(view.str, 2, view.start, view.end);
                    let _tmp$17;
                    if (_bind$13 === undefined) {
                      _tmp$17 = view.end;
                    } else {
                      const _Some = _bind$13;
                      _tmp$17 = _Some;
                    }
                    const _x$8 = new _M0TPC16string10StringView(_tmp$16, _tmp$17, view.end);
                    if (base === 2) {
                      rest = _x$8;
                      break _L$2;
                    } else {
                      break _L;
                    }
                  }
                  default: {
                    break _L;
                  }
                }
              } else {
                break _L;
              }
            } else {
              break _L;
            }
          }
          return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 16, _1: rest$3, _2: true });
        }
        return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 8, _1: rest$2, _2: true });
      }
      return new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: 2, _1: rest, _2: true });
    }
    return base >= 2 && base <= 36 ? new _M0DTPC16result6ResultGUiRPC16string10StringViewbERPC17strconv12StrConvErrorE2Ok({ _0: base, _1: view, _2: false }) : _M0FPC17strconv9base__errGUiRPC16string10StringViewbEE();
  }
}
function _M0FPC17strconv10range__errGlE() {
  return new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv15range__err__str));
}
function _M0FPC17strconv11syntax__errGiE() {
  return new _M0DTPC16result6ResultGiRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv16syntax__err__str));
}
function _M0FPC17strconv11syntax__errGlE() {
  return new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE3Err(new _M0DTPC15error5Error58moonbitlang_2fcore_2fstrconv_2eStrConvError_2eStrConvError(_M0FPC17strconv16syntax__err__str));
}
function _M0FPC17strconv19overflow__threshold(base, neg) {
  return !neg ? (base === 10 ? _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Div3div($9223372036854775807L, $10L), $1L) : base === 16 ? _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Div3div($9223372036854775807L, $16L), $1L) : _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Div3div($9223372036854775807L, _M0MPC13int3Int9to__int64(base)), $1L)) : base === 10 ? _M0IPC15int645Int64PB3Div3div($_9223372036854775808L, $10L) : base === 16 ? _M0IPC15int645Int64PB3Div3div($_9223372036854775808L, $16L) : _M0IPC15int645Int64PB3Div3div($_9223372036854775808L, _M0MPC13int3Int9to__int64(base));
}
function _M0FPC17strconv20parse__int64_2einner(str, base) {
  if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(str, new _M0TPC16string10StringView(_M0FPC17strconv20parse__int64_2einnerN7_2abindS539, 0, _M0FPC17strconv20parse__int64_2einnerN7_2abindS539.length))) {
    let neg;
    let rest;
    _L: {
      let rest$2;
      _L$2: {
        const _bind$8 = _M0MPC16string10StringView12view_2einner(str, 0, undefined);
        if (_M0MPC16string6String24char__length__ge_2einner(_bind$8.str, 1, _bind$8.start, _bind$8.end)) {
          const _x = _M0MPC16string6String16unsafe__char__at(_bind$8.str, _M0MPC16string6String29offset__of__nth__char_2einner(_bind$8.str, 0, _bind$8.start, _bind$8.end));
          switch (_x) {
            case 43: {
              const _tmp$6 = _bind$8.str;
              const _bind$9 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$8.str, 1, _bind$8.start, _bind$8.end);
              let _tmp$7;
              if (_bind$9 === undefined) {
                _tmp$7 = _bind$8.end;
              } else {
                const _Some = _bind$9;
                _tmp$7 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_tmp$6, _tmp$7, _bind$8.end);
              neg = false;
              rest = _x$2;
              break _L;
            }
            case 45: {
              const _tmp$8 = _bind$8.str;
              const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(_bind$8.str, 1, _bind$8.start, _bind$8.end);
              let _tmp$9;
              if (_bind$10 === undefined) {
                _tmp$9 = _bind$8.end;
              } else {
                const _Some = _bind$10;
                _tmp$9 = _Some;
              }
              const _x$3 = new _M0TPC16string10StringView(_tmp$8, _tmp$9, _bind$8.end);
              neg = true;
              rest = _x$3;
              break _L;
            }
            default: {
              rest$2 = _bind$8;
              break _L$2;
            }
          }
        } else {
          rest$2 = _bind$8;
          break _L$2;
        }
      }
      neg = false;
      rest = rest$2;
      break _L;
    }
    const _bind$8 = _M0FPC17strconv25check__and__consume__base(rest, base);
    let _bind$9;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _bind$9 = _ok._0;
    } else {
      return _bind$8;
    }
    const _num_base = _bind$9._0;
    const _rest = _bind$9._1;
    const _allow_underscore = _bind$9._2;
    const overflow_threshold = _M0FPC17strconv19overflow__threshold(_num_base, neg);
    let has_digit;
    if (_M0MPC16string6String24char__length__ge_2einner(_rest.str, 1, _rest.start, _rest.end)) {
      const _x = _M0MPC16string6String16unsafe__char__at(_rest.str, _M0MPC16string6String29offset__of__nth__char_2einner(_rest.str, 0, _rest.start, _rest.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (_M0MPC16string6String24char__length__ge_2einner(_rest.str, 2, _rest.start, _rest.end)) {
              if (_x === 95) {
                const _x$2 = _M0MPC16string6String16unsafe__char__at(_rest.str, _M0MPC16string6String29offset__of__nth__char_2einner(_rest.str, 1, _rest.start, _rest.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp$6;
      let _tmp$7 = _rest;
      let _tmp$8 = $0L;
      let _tmp$9 = _allow_underscore;
      while (true) {
        const _param_0 = _tmp$7;
        const _param_1 = _tmp$8;
        const _param_2 = _tmp$9;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (_M0MPC16string6String24char__length__eq_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
            const _x = _M0MPC16string6String16unsafe__char__at(_param_0.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
            if (_x === 95) {
              const _bind$10 = _M0FPC17strconv11syntax__errGlE();
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _tmp$6 = _ok._0;
                break;
              } else {
                return _bind$10;
              }
            } else {
              const _tmp$10 = _param_0.str;
              const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
              let _tmp$11;
              if (_bind$10 === undefined) {
                _tmp$11 = _param_0.end;
              } else {
                const _Some = _bind$10;
                _tmp$11 = _Some;
              }
              const _x$2 = new _M0TPC16string10StringView(_tmp$10, _tmp$11, _param_0.end);
              acc = _param_1;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (_M0MPC16string6String24char__length__ge_2einner(_param_0.str, 1, _param_0.start, _param_0.end)) {
              const _x = _M0MPC16string6String16unsafe__char__at(_param_0.str, _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 0, _param_0.start, _param_0.end));
              if (_x === 95) {
                if (_param_2 === false) {
                  const _bind$10 = _M0FPC17strconv11syntax__errGlE();
                  if (_bind$10.$tag === 1) {
                    const _ok = _bind$10;
                    _tmp$6 = _ok._0;
                    break;
                  } else {
                    return _bind$10;
                  }
                } else {
                  const _tmp$10 = _param_0.str;
                  const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                  let _tmp$11;
                  if (_bind$10 === undefined) {
                    _tmp$11 = _param_0.end;
                  } else {
                    const _Some = _bind$10;
                    _tmp$11 = _Some;
                  }
                  const _x$2 = new _M0TPC16string10StringView(_tmp$10, _tmp$11, _param_0.end);
                  _tmp$7 = _x$2;
                  _tmp$9 = false;
                  continue;
                }
              } else {
                const _tmp$10 = _param_0.str;
                const _bind$10 = _M0MPC16string6String29offset__of__nth__char_2einner(_param_0.str, 1, _param_0.start, _param_0.end);
                let _tmp$11;
                if (_bind$10 === undefined) {
                  _tmp$11 = _param_0.end;
                } else {
                  const _Some = _bind$10;
                  _tmp$11 = _Some;
                }
                const _x$2 = new _M0TPC16string10StringView(_tmp$10, _tmp$11, _param_0.end);
                acc = _param_1;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp$6 = _param_1;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$10 = _M0FPC17strconv11syntax__errGiE();
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                d = _ok._0;
              } else {
                return _bind$10;
              }
            }
          }
        }
        if (d < _num_base) {
          if (neg) {
            if (_M0IP016_24default__implPB7Compare6op__geGlE(acc, overflow_threshold)) {
              const next_acc = _M0IPC15int645Int64PB3Sub3sub(_M0IPC15int645Int64PB3Mul3mul(acc, _M0MPC13int3Int9to__int64(_num_base)), _M0MPC13int3Int9to__int64(d));
              if (_M0IP016_24default__implPB7Compare6op__leGlE(next_acc, acc)) {
                _tmp$7 = rest$2;
                _tmp$8 = next_acc;
                _tmp$9 = true;
                continue;
              } else {
                const _bind$10 = _M0FPC17strconv10range__errGlE();
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _tmp$6 = _ok._0;
                  break;
                } else {
                  return _bind$10;
                }
              }
            } else {
              const _bind$10 = _M0FPC17strconv10range__errGlE();
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _tmp$6 = _ok._0;
                break;
              } else {
                return _bind$10;
              }
            }
          } else {
            if (_M0IP016_24default__implPB7Compare6op__ltGlE(acc, overflow_threshold)) {
              const next_acc = _M0IPC15int645Int64PB3Add3add(_M0IPC15int645Int64PB3Mul3mul(acc, _M0MPC13int3Int9to__int64(_num_base)), _M0MPC13int3Int9to__int64(d));
              if (_M0IP016_24default__implPB7Compare6op__geGlE(next_acc, acc)) {
                _tmp$7 = rest$2;
                _tmp$8 = next_acc;
                _tmp$9 = true;
                continue;
              } else {
                const _bind$10 = _M0FPC17strconv10range__errGlE();
                if (_bind$10.$tag === 1) {
                  const _ok = _bind$10;
                  _tmp$6 = _ok._0;
                  break;
                } else {
                  return _bind$10;
                }
              }
            } else {
              const _bind$10 = _M0FPC17strconv10range__errGlE();
              if (_bind$10.$tag === 1) {
                const _ok = _bind$10;
                _tmp$6 = _ok._0;
                break;
              } else {
                return _bind$10;
              }
            }
          }
        } else {
          const _bind$10 = _M0FPC17strconv11syntax__errGlE();
          if (_bind$10.$tag === 1) {
            const _ok = _bind$10;
            _tmp$6 = _ok._0;
            break;
          } else {
            return _bind$10;
          }
        }
      }
      return new _M0DTPC16result6ResultGlRPC17strconv12StrConvErrorE2Ok(_tmp$6);
    } else {
      return _M0FPC17strconv11syntax__errGlE();
    }
  } else {
    return _M0FPC17strconv11syntax__errGlE();
  }
}
function _M0IPC17strconv12StrConvErrorPB4Show6output(self, logger) {
  const _StrConvError = self;
  const _err = _StrConvError._0;
  logger.method_table.method_0(logger.self, _err);
}
function _M0FP46mizchi2s33src6client17string__index__of(haystack, needle, from) {
  const h_len = haystack.length;
  const n_len = needle.length;
  if (n_len === 0) {
    return from;
  }
  if ((from + n_len | 0) > h_len) {
    return -1;
  }
  const _bind$8 = h_len - n_len | 0;
  let _tmp$6 = from;
  while (true) {
    const i = _tmp$6;
    if (i <= _bind$8) {
      const matched = new _M0TPB8MutLocalGbE(true);
      const _bind$9 = 0;
      let _tmp$7 = _bind$9;
      while (true) {
        const j = _tmp$7;
        if (j < n_len) {
          const _tmp$8 = i + j | 0;
          $bound_check(haystack, _tmp$8);
          const _tmp$9 = haystack.charCodeAt(_tmp$8);
          $bound_check(needle, j);
          if (_M0IPC16uint166UInt16PB2Eq10not__equal(_tmp$9, needle.charCodeAt(j))) {
            matched.val = false;
            break;
          }
          _tmp$7 = j + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (matched.val) {
        return i;
      }
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return -1;
}
function _M0FP46mizchi2s33src6client20extract__tag__values(xml, tag) {
  const results = [];
  const open_tag = `<${_M0IPC16string6StringPB4Show10to__string(tag)}>`;
  const close_tag = `</${_M0IPC16string6StringPB4Show10to__string(tag)}>`;
  const pos = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (pos.val < xml.length) {
      const start = _M0FP46mizchi2s33src6client17string__index__of(xml, open_tag, pos.val);
      if (start < 0) {
        break;
      }
      const content_start = start + open_tag.length | 0;
      const end_pos = _M0FP46mizchi2s33src6client17string__index__of(xml, close_tag, content_start);
      if (end_pos < 0) {
        break;
      }
      _M0MPC15array5Array4pushGsE(results, _M0MPC16string6String17substring_2einner(xml, content_start, end_pos));
      pos.val = end_pos + close_tag.length | 0;
      continue;
    } else {
      break;
    }
  }
  return results;
}
function _M0FP46mizchi2s33src6client24parse__list__objects__v2(xml) {
  const keys = _M0FP46mizchi2s33src6client20extract__tag__values(xml, "Key");
  const sizes = _M0FP46mizchi2s33src6client20extract__tag__values(xml, "Size");
  const results = [];
  const _bind$8 = 0;
  const _bind$9 = keys.length;
  let _tmp$6 = _bind$8;
  while (true) {
    const i = _tmp$6;
    if (i < _bind$9) {
      let size;
      if (i < sizes.length) {
        let _try_err;
        _L: {
          _L$2: {
            const _bind$10 = _M0MPC15array5Array2atGsE(sizes, i);
            const _bind$11 = _M0FPC17strconv20parse__int64_2einner(new _M0TPC16string10StringView(_bind$10, 0, _bind$10.length), 0);
            if (_bind$11.$tag === 1) {
              const _ok = _bind$11;
              size = _ok._0;
            } else {
              const _err = _bind$11;
              _try_err = _err._0;
              break _L$2;
            }
            break _L;
          }
          size = $0L;
        }
      } else {
        size = $0L;
      }
      _M0MPC15array5Array4pushGsE(results, new _M0TP46mizchi2s33src6client8S3Object(_M0MPC15array5Array2atGsE(keys, i), size));
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return results;
}
function _M0FP46mizchi2s33src22client__blackbox__test37____test__786d6c5f746573742e6d6274__0() {
  const xml = "<Key>foo/bar.txt</Key><Key>baz.txt</Key>";
  const values = _M0FP46mizchi2s33src6client20extract__tag__values(xml, "Key");
  const _bind$8 = _M0FPB10assert__eqGiE(values.length, 2, undefined, "src/client/xml_test.mbt:5:3-5:32@mizchi/s3");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPB10assert__eqGsE(_M0MPC15array5Array2atGsE(values, 0), "foo/bar.txt", undefined, "src/client/xml_test.mbt:6:3-6:38@mizchi/s3");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  return _M0FPB10assert__eqGsE(_M0MPC15array5Array2atGsE(values, 1), "baz.txt", undefined, "src/client/xml_test.mbt:7:3-7:34@mizchi/s3");
}
function _M0FP46mizchi2s33src22client__blackbox__test37____test__786d6c5f746573742e6d6274__1() {
  const values = _M0FP46mizchi2s33src6client20extract__tag__values("<root></root>", "Key");
  return _M0FPB10assert__eqGiE(values.length, 0, undefined, "src/client/xml_test.mbt:13:3-13:32@mizchi/s3");
}
function _M0FP46mizchi2s33src22client__blackbox__test37____test__786d6c5f746573742e6d6274__2() {
  const xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<ListBucketResult>\n  <Contents><Key>foo/bar.txt</Key><Size>42</Size></Contents>\n  <Contents><Key>baz/</Key><Size>0</Size></Contents>\n</ListBucketResult>";
  const objects = _M0FP46mizchi2s33src6client24parse__list__objects__v2(xml);
  const _bind$8 = _M0FPB10assert__eqGiE(objects.length, 2, undefined, "src/client/xml_test.mbt:25:3-25:33@mizchi/s3");
  if (_bind$8.$tag === 1) {
    const _ok = _bind$8;
    _ok._0;
  } else {
    return _bind$8;
  }
  const _bind$9 = _M0FPB10assert__eqGsE(_M0MPC15array5Array2atGsE(objects, 0).key, "foo/bar.txt", undefined, "src/client/xml_test.mbt:26:3-26:43@mizchi/s3");
  if (_bind$9.$tag === 1) {
    const _ok = _bind$9;
    _ok._0;
  } else {
    return _bind$9;
  }
  const _bind$10 = _M0FPB10assert__eqGlE(_M0MPC15array5Array2atGsE(objects, 0).size, $42L, undefined, "src/client/xml_test.mbt:27:3-27:34@mizchi/s3");
  if (_bind$10.$tag === 1) {
    const _ok = _bind$10;
    _ok._0;
  } else {
    return _bind$10;
  }
  const _bind$11 = _M0FPB10assert__eqGsE(_M0MPC15array5Array2atGsE(objects, 1).key, "baz/", undefined, "src/client/xml_test.mbt:28:3-28:36@mizchi/s3");
  if (_bind$11.$tag === 1) {
    const _ok = _bind$11;
    _ok._0;
  } else {
    return _bind$11;
  }
  return _M0FPB10assert__eqGlE(_M0MPC15array5Array2atGsE(objects, 1).size, $0L, undefined, "src/client/xml_test.mbt:29:3-29:33@mizchi/s3");
}
function _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP46mizchi2s33src22client__blackbox__test34MoonBit__Async__Test__Driver__ImplE(_discard_) {}
function _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5) {
  return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5) {
  return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5) {
  return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(_discard_, _discard_$2, _discard_$3, _discard_$4, _discard_$5) {
  return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
}
function _M0FP46mizchi2s33src22client__blackbox__test45moonbit__test__driver__internal__catch__error(f, on_ok, on_err) {
  _M0FP46mizchi2s33src22client__blackbox__test42moonbit__test__driver__internal__js__catch(() => {
    let _try_err;
    _L: {
      const _bind$8 = f();
      if (_bind$8.$tag === 1) {
        const _ok = _bind$8;
        _ok._0;
      } else {
        const _err = _bind$8;
        _try_err = _err._0;
        break _L;
      }
      on_ok();
      return;
    }
    const err = _try_err;
    on_err(err);
  }, (err_str) => {
    on_err(new _M0DTPC15error5Error112mizchi_2fs3_2fsrc_2fclient__blackbox__test_2eMoonBitTestDriverInternalJsError_2eMoonBitTestDriverInternalJsError(err_str));
  });
}
function _M0IP46mizchi2s33src22client__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__test(_discard_, filename, index, handle_result, error_to_string) {
  let index_map;
  _L: {
    const _bind$8 = _M0MPB3Map3getGsRPB3MapGiUWEuQRPC15error5ErrorNsEEE(_M0FP46mizchi2s33src22client__blackbox__test48moonbit__test__driver__internal__no__args__tests, filename);
    if (_bind$8 === undefined) {
      return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$8;
      const _index_map = _Some;
      index_map = _index_map;
      break _L;
    }
  }
  let f;
  let attrs;
  _L$2: {
    const _bind$8 = _M0MPB3Map3getGiUWEuQRPC15error5ErrorNsEE(index_map, index);
    if (_bind$8 === undefined) {
      return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(false);
    } else {
      const _Some = _bind$8;
      const _x = _Some;
      const _f = _x._0;
      const _attrs = _x._1;
      f = _f;
      attrs = _attrs;
      break _L$2;
    }
  }
  let name;
  if (attrs.length >= 1) {
    const _name = attrs[0];
    name = _name;
  } else {
    name = "";
  }
  _M0FP46mizchi2s33src22client__blackbox__test45moonbit__test__driver__internal__catch__error(f, () => {
    handle_result(name, "", false);
  }, (err) => {
    handle_result(name, error_to_string(err), false);
  });
  return new _M0DTPC16result6ResultGbRP46mizchi2s33src22client__blackbox__test33MoonBitTestDriverInternalSkipTestE2Ok(true);
}
function _M0FP46mizchi2s33src22client__blackbox__test29moonbit__test__driver__finish() {}
function _M0FP46mizchi2s33src22client__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, filename, index) {
  const handle_result = (testname, message, skipped) => {
    if (!skipped && false) {
    }
    const file_name = _M0MPC16string6String14escape_2einner(filename, true);
    const test_name = _M0MPC16string6String14escape_2einner(testname, true);
    const message$2 = _M0MPC16string6String14escape_2einner(message, true);
    _M0FPB7printlnGsE("----- BEGIN MOON TEST RESULT -----");
    _M0FPB7printlnGsE(`{\"package\": \"mizchi/s3/src/client\", \"filename\": ${_M0IPC16string6StringPB4Show10to__string(file_name)}, \"index\": \"${_M0IP016_24default__implPB4Show10to__stringGiE(index)}\", \"test_name\": ${_M0IPC16string6StringPB4Show10to__string(test_name)}, \"message\": ${_M0IPC16string6StringPB4Show10to__string(message$2)}}`);
    _M0FPB7printlnGsE("----- END MOON TEST RESULT -----");
  };
  const error_to_string = (err) => {
    let e;
    _L: {
      switch (err.$tag) {
        case 0: {
          const _Failure = err;
          const _e = _Failure._0;
          return _e;
        }
        case 4: {
          const _InspectError = err;
          const _e$2 = _InspectError._0;
          return _e$2;
        }
        case 5: {
          const _SnapshotError = err;
          const _e$3 = _SnapshotError._0;
          return _e$3;
        }
        case 3: {
          const _MoonBitTestDriverInternalJsError = err;
          const _e$4 = _MoonBitTestDriverInternalJsError._0;
          return _e$4;
        }
        default: {
          e = err;
          break _L;
        }
      }
    }
    return _M0FP15Error10to__string(e);
  };
  let _try_err;
  _L: {
    let _tmp$6;
    const _bind$8 = _M0IP46mizchi2s33src22client__blackbox__test41MoonBit__Test__Driver__Internal__No__ArgsP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__test(async_tests, filename, index, handle_result, error_to_string);
    let _tmp$7;
    if (_bind$8.$tag === 1) {
      const _ok = _bind$8;
      _tmp$7 = _ok._0;
    } else {
      const _err = _bind$8;
      _try_err = _err._0;
      break _L;
    }
    if (_tmp$7) {
      _tmp$6 = true;
    } else {
      let _tmp$8;
      const _bind$9 = _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test43MoonBit__Test__Driver__Internal__With__ArgsE(async_tests, filename, index, handle_result, error_to_string);
      let _tmp$9;
      if (_bind$9.$tag === 1) {
        const _ok = _bind$9;
        _tmp$9 = _ok._0;
      } else {
        const _err = _bind$9;
        _try_err = _err._0;
        break _L;
      }
      if (_tmp$9) {
        _tmp$8 = true;
      } else {
        let _tmp$10;
        const _bind$10 = _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test48MoonBit__Test__Driver__Internal__Async__No__ArgsE(async_tests, filename, index, handle_result, error_to_string);
        let _tmp$11;
        if (_bind$10.$tag === 1) {
          const _ok = _bind$10;
          _tmp$11 = _ok._0;
        } else {
          const _err = _bind$10;
          _try_err = _err._0;
          break _L;
        }
        if (_tmp$11) {
          _tmp$10 = true;
        } else {
          let _tmp$12;
          const _bind$11 = _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test50MoonBit__Test__Driver__Internal__Async__With__ArgsE(async_tests, filename, index, handle_result, error_to_string);
          let _tmp$13;
          if (_bind$11.$tag === 1) {
            const _ok = _bind$11;
            _tmp$13 = _ok._0;
          } else {
            const _err = _bind$11;
            _try_err = _err._0;
            break _L;
          }
          if (_tmp$13) {
            _tmp$12 = true;
          } else {
            const _bind$12 = _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test21MoonBit__Test__Driver9run__testGRP46mizchi2s33src22client__blackbox__test50MoonBit__Test__Driver__Internal__With__Bench__ArgsE(async_tests, filename, index, handle_result, error_to_string);
            let _tmp$14;
            if (_bind$12.$tag === 1) {
              const _ok = _bind$12;
              _tmp$14 = _ok._0;
            } else {
              const _err = _bind$12;
              _try_err = _err._0;
              break _L;
            }
            _tmp$12 = _tmp$14;
          }
          _tmp$10 = _tmp$12;
        }
        _tmp$8 = _tmp$10;
      }
      _tmp$6 = _tmp$8;
    }
    if (!_tmp$6) {
      _try_err = new _M0DTPC15error5Error114mizchi_2fs3_2fsrc_2fclient__blackbox__test_2eMoonBitTestDriverInternalSkipTest_2eMoonBitTestDriverInternalSkipTest("");
      break _L;
    } else {
      return;
    }
  }
  const err = _try_err;
  let name;
  _L$2: {
    const _MoonBitTestDriverInternalSkipTest = err;
    const _name = _MoonBitTestDriverInternalSkipTest._0;
    name = _name;
    break _L$2;
  }
  handle_result(name, "skipped test", true);
}
function _M0FP46mizchi2s33src22client__blackbox__test40moonbit__test__driver__internal__execute(tests) {
  const async_tests = [];
  const _bind$8 = 0;
  const _bind$9 = tests.length;
  let _tmp$6 = _bind$8;
  while (true) {
    const i = _tmp$6;
    if (i < _bind$9) {
      const entry = _M0MPC15array5Array2atGRP46mizchi2s33src22client__blackbox__test34MoonBitTestDriverInternalTestEntryE(tests, i);
      _M0FP46mizchi2s33src22client__blackbox__test44moonbit__test__driver__internal__do__execute(async_tests, _M0MP46mizchi2s33src22client__blackbox__test34MoonBitTestDriverInternalTestEntry8filename(entry), _M0MP46mizchi2s33src22client__blackbox__test34MoonBitTestDriverInternalTestEntry5index(entry));
      _tmp$6 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0IP016_24default__implP46mizchi2s33src22client__blackbox__test28MoonBit__Async__Test__Driver17run__async__testsGRP46mizchi2s33src22client__blackbox__test34MoonBit__Async__Test__Driver__ImplE(async_tests);
}
(() => {
  const test_params = _M0FP46mizchi2s33src22client__blackbox__test38moonbit__test__driver__js__parse__args();
  _M0FP46mizchi2s33src22client__blackbox__test40moonbit__test__driver__internal__execute(test_params);
  _M0FP46mizchi2s33src22client__blackbox__test29moonbit__test__driver__finish();
})();
exports.moonbit_test_driver_finish = _M0FP46mizchi2s33src22client__blackbox__test29moonbit__test__driver__finish;
exports.moonbit_test_driver_internal_execute = _M0FP46mizchi2s33src22client__blackbox__test40moonbit__test__driver__internal__execute;
//# sourceMappingURL=client.blackbox_test.js.map
