/* eslint-env jest */
import { isCookieEnabled, urlUtils } from '../utils'

describe('utils', () => {
  describe('function: isCookieEnabled', () => {
    test('isCookieEnabled', () => {
      const wrapper = navigator.cookieEnabled
      const result = isCookieEnabled()
      expect(wrapper).toEqual(result)
      expect(result).toBe(true)
    })
  })
  describe('function: urlUtils', () => {
    test('urlUtils.hasParam', () => {
      const wrapper = urlUtils.hasParam('ticket')
      const wrapper2 = urlUtils.getParamsObj().has('ticket')
      const wrapper3 = urlUtils.getParam('ticket')
      urlUtils.clearAllParams()
      expect(wrapper).toBeDefined()
      expect(wrapper3).toBeDefined()
      expect(wrapper2).toBeDefined()
    })
  })
})
