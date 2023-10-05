'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toString = Object.prototype.toString;
/**
 * 输入一个任意值,转换成字符串的类型
 * @param value 任意类型值
 * @returns [object xxx]
 * @public
 * @author loveWei0
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
/**
 * 输入任意类型值,判断是否是数值类型
 * @param value 任意类型值
 * @returns boolean值
 * @public
 * @author loveWei0
 */
function isNumber(value) {
  return getTag(value) === '[object Number]';
}
/**
 * 输入任意类型值,判断是否是字符串类型
 * @param value 任意类型值
 * @returns boolean值
 * @public
 * @author loveWei0
 */
function isString(value) {
  return getTag(value) === '[object String]';
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var slicedToArray = {exports: {}};

var arrayWithHoles = {exports: {}};

(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(arrayWithHoles));

var iterableToArrayLimit = {exports: {}};

(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(iterableToArrayLimit));

var unsupportedIterableToArray = {exports: {}};

var arrayLikeToArray = {exports: {}};

(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(arrayLikeToArray));

(function (module) {
var arrayLikeToArray$1 = arrayLikeToArray.exports;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(unsupportedIterableToArray));

var nonIterableRest = {exports: {}};

(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(nonIterableRest));

(function (module) {
var arrayWithHoles$1 = arrayWithHoles.exports;

var iterableToArrayLimit$1 = iterableToArrayLimit.exports;

var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;

var nonIterableRest$1 = nonIterableRest.exports;

function _slicedToArray(arr, i) {
  return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(slicedToArray));

var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray.exports);

function EnumData(data) {
  var keyMap = {};
  var valueMap = {};
  data.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      key = _ref2[0],
      value = _ref2[1],
      text = _ref2[2];
    keyMap[key] = value;
    valueMap[value] = text;
  });
  var ans = new Proxy(data, {
    get: function get(target, propKey) {
      if (keyMap.hasOwnProperty(propKey)) {
        return keyMap[propKey];
      }
      if (valueMap.hasOwnProperty(propKey)) {
        return valueMap[propKey];
      }
      // 除了可以使用 Array 的方法外，也应该允许使用 Object 上的方法
      // 用 in 可以获取到继承对象的属性，而 hasOwnProperty 不能
      if (propKey in Array.prototype) {
        if (typeof Array.prototype[propKey] === 'function') {
          return Array.prototype[propKey].bind(target);
        }
        return target[propKey];
      }
      return '';
    },
    set: function set() {
      // eslint-disable-next-line no-console
      console.warn('Don’t allow assignment to constant variable');
      return false;
    }
  });
  return ans;
}

exports.EnumData = EnumData;
exports.getTag = getTag;
exports.isNumber = isNumber;
exports.isString = isString;
