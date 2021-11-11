import { initReactI18next } from 'react-i18next'
import { changeLanguage } from '../i18n-module/change-language'
const i18next = require('i18next/i18next')

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'es-Es': {
        // currentLangCode()
        translation: 'es-Es' // currentLanguage()
      }
    },
    lng: 'es-Es', // currentLangCode

    keySeparator: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

const i18nextChangeLanguage = async (langCode): Promise<any> => {
  const language = await changeLanguage(langCode)

  i18next.addResourceBundle(langCode, 'translation', language, false, true)

  await i18next.changeLanguage(langCode)

  return i18next
}

export { i18nextChangeLanguage as changeLanguage }
