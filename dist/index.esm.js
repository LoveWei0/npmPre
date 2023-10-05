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

/**
 * 获取字符串指定下标的 unicode
 *
 * @param str - 字符串
 * @param index - unicode 的下标
 * @returns data
 *
 * @example
 * ```ts
 * unicodeAt('ABC', 1) // -> '\\u0042'
 * ```
 *
 * @beta
 */
function toUnicodeAt(str) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var code = str.charCodeAt(index).toString(16).toUpperCase();
  while (code.length < 4) {
    code = "0".concat(code);
  }
  return "\\u".concat(code);
}
/**
 * 获取字符串的 unicode
 *
 * @param str - 字符串
 * @returns data
 *
 * @example
 * ```ts
 * toUnicode('ABC', 1) // -> '\\u0041\\u0042\\u0043'
 * ```
 *
 * @beta
 */
function toUnicode(str) {
  if (!str) {
    return '';
  }
  return Array.prototype.reduce.call(str, function (pre, cur, index) {
    return "".concat(pre).concat(toUnicodeAt(str, index));
  }, '');
}

export { getTag, isNumber, isString, toUnicode, toUnicodeAt };
