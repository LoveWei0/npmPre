import myFirstFunc from '../src'

describe('myFirstFunc', () => {
	test('return hello rollup', () => {
		myFirstFunc('rollup'), 'hello rollup'
	})
})
