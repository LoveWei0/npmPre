import { toUnicodeAt, toUnicode } from '../src/toUnicode'

describe('type:', () => {
  describe('toUnicodeAt', () => {
    test(' "ABC" => \\u0041 ', () => {
      toUnicodeAt('ABC'), '\\u0041'
    })
    test(' "ABC", 1 => \\u0042 ', () => {
      toUnicodeAt('ABC', 1), '\\u0042'
    })
  })
})

/**
 * toUnicode
 */
describe('toUnicode', () => {
  test(' "ABC" => \\u0041\\u0042\\u0043 ', () => {
    toUnicode('ABC'), '\\u0041\\u0042\\u0043'
  })
})
