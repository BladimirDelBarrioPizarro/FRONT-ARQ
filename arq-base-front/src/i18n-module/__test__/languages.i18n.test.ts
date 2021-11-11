import { languagesI18n } from '../languages/languages-i18n'

describe('languagesI18n', () => {
  describe('languagesI18n', () => {
    const mock = {
      'es-ES': {
        data: require('../languages/i18n/es-ES/language.json')
      },
      'en-UK': {
        data: require('../languages/i18n/en-UK/language.json')
      },
      'en-US': {
        data: require('../languages/i18n/en-US/language.json')
      }
    }
    test('languagesI18n', () => {
      const wrapper = languagesI18n
      expect(wrapper).toEqual(mock)
    })
  })
})
