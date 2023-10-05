import { EnumData } from '../src'

describe('EnumData:', () => {
	describe('EnumData bace function', () => {
		const COLOR_DATA = EnumData([
			['RED', 1, '红色'],
			['BLUE', 2, '蓝色'],
			['GREEN', 3, '绿色'],
			['YELLOW', 4, '黄色'],
		])

		test('match color key / value', () => {
			COLOR_DATA['3'], '绿色'
		})

		test('match color undefined key / value', () => {
			COLOR_DATA['5'], undefined
		})
	})
})

describe('EnumData 0 1', () => {
	const ENABLE_DISABLE = EnumData([
		['ENABLE', 1, '启用'],
		['DISABLE', 0, '停用'],
	])

	test('enable disable', () => {
		ENABLE_DISABLE['1'], '启用'
	})
})

describe('EnumData array function', () => {
	const STATUS_MAP = EnumData([
		['PAY', 10, '待支付'],
		['BALANCE', 20, '待回款'],
		['REVIEW', 30, '待审核'],
	])

	test('match array prototype function', () => {
		STATUS_MAP.forEach.constructor, Array.prototype.forEach.constructor
	})
	test(' match in EnumData', () => {
		Symbol.iterator in STATUS_MAP, true
	})
})

describe('EnumData object function', () => {
	const originData = [
		['A', 0, '大A'],
		['B', 1, '大B'],
	]
	const ABC_MAP = EnumData(originData)
	test(' match object prototype function ', () => {
		ABC_MAP.toString.constructor, Object.prototype.toString.constructor
	})
	test(' run object function ', () => {
		ABC_MAP.toString(), originData.toString()
	})
})

describe('EnumData conflict', () => {
	const STATUS_MAP = EnumData([
		['PAY', 10, '待支付'],
		['PAYED', 'PAY', '已支付'],
		['forEach', 30, '每一个'],
	])
	test(' fields reflect ', () => {
		STATUS_MAP.PAY === '已支付', false
	})
})
