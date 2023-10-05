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
