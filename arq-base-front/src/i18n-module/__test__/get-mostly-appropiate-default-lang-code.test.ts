/* eslint-env jest */
/* eslint-disable no-console */
import { getMostlyAppropiateLangCode } from '../get-mostly-appropiate-default-lang-code'
import { availableLanguages } from '../example-config-lang'

describe('get-mostly-appropiate-default-lang-code', () => {
  test('parametro userlang a null, devuelve lang por defecto', () => {
    const result = getMostlyAppropiateLangCode(null, availableLanguages)
    expect(result).toBe('es-ES')
  })
  test('parametro userlang disponible en objeto, devuelve userLang', () => {
    const result = getMostlyAppropiateLangCode('en-UK', availableLanguages)
    expect(result).toBe('en-UK')
  })
  test('parametro userlang no existe en objeto, devuelve idioma por defecto', () => {
    const result = getMostlyAppropiateLangCode('gi-GI', availableLanguages)
    expect(result).toBe('es-ES')
  })
  test('parametro userlang solo idioma (aa), devuelve aa-AA correspondiente', () => {
    const result = getMostlyAppropiateLangCode('en', availableLanguages)
    expect(result).toBe('en-UK')
  })
  test('parametro userlang idioma y cultura (aa-AA), devuelve aa-AA correspondiente', () => {
    const result = getMostlyAppropiateLangCode('en-UK', availableLanguages)
    expect(result).toBe('en-UK')
  })
  test('parametro userlang idioma y cultura (aa-AA) pero en el objeto no existe la cultura pero si el idioma, devuelve idioma correspondiente', () => {
    const result = getMostlyAppropiateLangCode('en-IR', availableLanguages)
    expect(result).toBe('en-UK')
  })
})
