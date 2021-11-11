/* eslint-env jest */
import { init } from '../init'
import { availableLanguages } from '../example-config-lang'

const language = {
  saludo: 'hello'
}

const requestLang = async (): Promise<any> => language

const store = {
  get: () => 'es-ES',
  put: () => null
}

describe('init', () => {
  test('obtiene langCode por defecto y traduccion', async () => {
    const api = await init({
      requestLang,
      availableLanguages: () => availableLanguages
    })
    expect(api.langCode()).toBe('en-US')
    expect(api.language().saludo).toBe('hello')
  })
  test('obtiene langCode del store y traduccion', async () => {
    const api = await init({
      requestLang,
      availableLanguages,
      store
    })
    expect(api.langCode()).toBe('es-ES')
    expect(api.language().saludo).toBe('hello')
  })
})
