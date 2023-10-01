/**
 * 输入一个任意值,转换成字符串的类型
 * @param value 任意类型值
 * @returns [object xxx]
 * @public
 * @author loveWei0
 */
export declare function getTag(value: any): string;

/**
 * 输入任意类型值,判断是否是数值类型
 * @param value 任意类型值
 * @returns boolean值
 * @public
 * @author loveWei0
 */
export declare function isNumber(value: any): boolean;

/**
 * 输入任意类型值,判断是否是字符串类型
 * @param value 任意类型值
 * @returns boolean值
 * @public
 * @author loveWei0
 */
export declare function isString(value: any): boolean;

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
export declare function toUnicode(str: string): unknown;

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
export declare function toUnicodeAt(str: string, index?: number): string;

export { }
