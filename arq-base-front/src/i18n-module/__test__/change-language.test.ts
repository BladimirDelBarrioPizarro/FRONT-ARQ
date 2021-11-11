/* eslint-env jest */
import { put } from '../inner-store'
import { changeLanguage } from '../change-language'
import { availableLanguages } from '../example-config-lang'

const language = {
  saludo: 'hello'
}

const requestLang = async (): Promise<any> => language

const store = {
  get: () => null,
  put: () => null
}

put('availableLanguages', () => availableLanguages)
put('requestLang', requestLang)
put('store', store)

describe('change-language', () => {
  test('parametro newLangCode a null, devuelve false', async () => {
    const result = await changeLanguage(null)
    expect(result).toBeFalsy()
  })
  test('parametro newLangCode a es-ES, devuelve la traducción', async () => {
    const result = await changeLanguage('es-ES')
    expect(result.saludo).toBe(language.saludo)
  })
})
