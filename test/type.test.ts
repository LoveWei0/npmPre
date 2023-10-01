import { getTag, isNumber, isString } from '../src/type'

/**
 * getTag
 */
describe('type', () => {
	describe('getTag', () => {
		test('undefined=>[object Undefined]', () => {
			getTag(undefined), '[object Undefined]'
		})
		test('null=>[object Null]', () => {
			getTag(null), '[object Null]'
		})
		test('1 =>[object Number]', () => {
			getTag(1), '[object Number]'
		})
		test('"xiaomi"=>[object String]', () => {
			getTag('xiaomi'), '[object String]'
		})
		test('{}=>[object Object]', () => {
			getTag({}), '[object Object]'
		})
		test('[]=>[object Array]', () => {
			getTag([]), '[object Array]'
		})
		test('Symbol=>{object Symbol]', () => {
			getTag(Symbol('key')), '[object Symbol]'
		})
	})
})

/**
 * isNumber
 */
describe('isNumber', () => {
	test('1=>true', () => {
		isNumber(1), 'true'
	})
	test('NaN=>true', () => {
		isNumber(NaN), 'true'
	})
	test('"2"=>false', () => {
		isNumber('2'), 'false'
	})
})

describe('isString', () => {
	test('"xiaomi"=>true', () => {
		isString('xiaomi'), 'true'
	})
	test('6=>false', () => {
		isString(6), 'false'
	})
})
