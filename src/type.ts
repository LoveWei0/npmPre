const { toString } = Object.prototype

/**
 * 输入一个任意值,转换成字符串的类型
 * @param value 任意类型值
 * @returns [object xxx]
 * @public
 * @author loveWei0
 */
export function getTag (value: any): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

/**
 * 输入任意类型值,判断是否是数值类型
 * @param value 任意类型值
 * @returns boolean值
 * @public
 * @author loveWei0
 */
export function isNumber (value: any): boolean {
  return getTag(value) === '[object Number]'
}

/**
 * 输入任意类型值,判断是否是字符串类型
 * @param value 任意类型值
 * @returns boolean值
 * @public
 * @author loveWei0
 */
export function isString (value: any): boolean {
  return getTag(value) === '[object String]'
}
