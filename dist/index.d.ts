export declare function EnumData<T extends EnumDataList>(data: T): EnumDataResult<T>;

declare type EnumDataItem = readonly [string, number | string, string];

export declare type EnumDataList = readonly EnumDataItem[];

declare type EnumDataRecord = Record<PropertyKey, any>;

export declare type EnumDataResult<TD extends EnumDataList> = ReadonlyMergedRecord<TransformArrayToObject<TD>> & Array<TD[number]>;

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

declare type ReadonlyMergedRecord<T> = T extends EnumDataRecord ? {
    readonly [K in keyof T]: T[K];
} : never;

declare type TransformArrayToObject<Tuple extends EnumDataList, Result extends EnumDataRecord = {}> = Tuple extends [] ? Result : Tuple extends readonly [infer Head, ...infer Tail] ? Head extends readonly [infer Key, infer Value, infer Text] ? Tail extends EnumDataList ? Value extends PropertyKey ? Key extends PropertyKey ? TransformArrayToObject<Tail, Result & Record<Value, Text> & Record<Key, Value>> : Result : Result : Result : Result : Result;

export { }
