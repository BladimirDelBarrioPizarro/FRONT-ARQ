/* eslint-env jest */
import { getBrowserLanguage } from '../get-browser-language'

describe('get-browser-language', () => {
  test('Obtiene el idioma de usuario', () => {
    const result = getBrowserLanguage()
    const langCode = 'en-US'
    expect(result).toBe(langCode)
  })
})
