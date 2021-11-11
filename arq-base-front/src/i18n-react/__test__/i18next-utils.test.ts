import { changeLanguage } from '../i18next-utils'
import { initReactI18next } from 'react-i18next'

describe('i18next-utils', () => {
  test('i18next-utils', () => {
    const mock = require('i18next/i18next')

    mock
      .use(initReactI18next)
      .init({
        resources: {
          'es-Es': {
            translation: 'es-Es'
          }
        },
        lng: 'es-Es',

        keySeparator: false,

        interpolation: {
          escapeValue: false
        }
      })

    mock.addResourceBundle('es-ES', 'translation', 'es-ES', false, true)
    mock.changeLanguage('es-ES')

    expect(mock).toBeDefined()
    const wrapper = changeLanguage('es-ES')
    expect(wrapper).toBeDefined()
  })
})
