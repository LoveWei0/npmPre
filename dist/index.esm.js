/**
 *
 * @param str string
 * @returns 'hello word'
 */
var helloWord = function helloWord(str) {
  return "hello ".concat(str);
};

/**
 * sum
 * @param a number
 * @param b number
 * @returns number
 */
var add = function add(a, b) {
  return a + b;
};
var multiplication = function multiplication(x, y) {
  return x * y;
};

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

export { add, getTag, helloWord, isNumber, isString, multiplication };
