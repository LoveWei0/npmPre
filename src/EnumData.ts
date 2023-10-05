type EnumDataItem = readonly [string, number | string, string]
export type EnumDataList = readonly EnumDataItem[]
type EnumDataRecord = Record<PropertyKey, any>

type TransformArrayToObject<
	Tuple extends EnumDataList,
	Result extends EnumDataRecord = {}
> = Tuple extends []
	? Result // last call
	: Tuple extends readonly [infer Head, ...infer Tail]
	? Head extends readonly [infer Key, infer Value, infer Text]
		? Tail extends EnumDataList
			? Value extends PropertyKey
				? Key extends PropertyKey
					? TransformArrayToObject<
							Tail,
							Result & Record<Value, Text> & Record<Key, Value>
					  > // recursive call
					: Result
				: Result
			: Result
		: Result
	: Result

type ReadonlyMergedRecord<T> = T extends EnumDataRecord
	? {
			readonly [K in keyof T]: T[K]
	  }
	: never

export type EnumDataResult<TD extends EnumDataList> = ReadonlyMergedRecord<
	TransformArrayToObject<TD>
> &
	Array<TD[number]>

export function EnumData<T extends EnumDataList>(data: T) {
	const keyMap = {}
	const valueMap = {}
	data.forEach(([key, value, text]) => {
		keyMap[key] = value
		valueMap[value] = text
	})

	const ans = new Proxy(data, {
		get(target, propKey) {
			if (keyMap.hasOwnProperty(propKey)) {
				return keyMap[propKey]
			}
			if (valueMap.hasOwnProperty(propKey)) {
				return valueMap[propKey]
			}
			// 除了可以使用 Array 的方法外，也应该允许使用 Object 上的方法
			// 用 in 可以获取到继承对象的属性，而 hasOwnProperty 不能
			if (propKey in Array.prototype) {
				if (typeof Array.prototype[propKey] === 'function') {
					return Array.prototype[propKey].bind(target)
				}
				return target[propKey]
			}
			return ''
		},
		set() {
			// eslint-disable-next-line no-console
			console.warn('Don’t allow assignment to constant variable')
			return false
		},
	})
	return ans as unknown as EnumDataResult<T>
}
