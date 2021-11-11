/* eslint-env jest */
import { i18nextConfig, i18nextChangeLanguage } from '../i18next-config'
jest.mock('i18next', () => ({
  use: () => ({
    init: () => ({
      t: k => k,
      on: () => { }
    })
  }),
  init: () => true,
  addResourceBundle: () => true,
  changeLanguage: () => true
}))

const langCode: any = () => 'es'
const language: any = () => ({
  salute: 'hola'
})
const changeLanguage: any = () => ({
  salute: 'hello'
})

describe('i18next-config', () => {
  describe('function: i18nextConfig', () => {
    test('Devuelve instancia de i18n inicializada', async () => {
      const i18nInstance = await i18nextConfig(
        {
          langCode,
          language,
          changeLanguage
        }
      )
      expect(i18nInstance).toHaveProperty('init')
    })
  })
  describe('function: i18nextChangeLanguage', () => {
    test('Devuelve instancia de i18n inicializada', async () => {
      await i18nextConfig(
        {
          langCode,
          language,
          changeLanguage
        }
      )
      const i18nInstance = await i18nextChangeLanguage(langCode())

      expect(i18nInstance).toHaveProperty('init')
    })
  })
})
