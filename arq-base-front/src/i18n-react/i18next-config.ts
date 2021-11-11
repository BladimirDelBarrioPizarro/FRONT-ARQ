import { initReactI18next } from 'react-i18next'
const i18next = require('i18next/i18next')

interface InnerStore {
  langCode?: string
  language?: object
  changeLanguage?: Function
}
const innerStore: InnerStore = {}

const i18nextConfig = ({ langCode, language, changeLanguage }): any => {
  innerStore.langCode = langCode
  innerStore.language = language
  innerStore.changeLanguage = changeLanguage

  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        [langCode()]: {
          translation: language()
        }
      },
      lng: langCode(),

      nsSeparator: true,

      interpolation: {
        escapeValue: false // react already safes from xss
      }
    })

  return i18next
}

const i18nextChangeLanguage = async (langCode): Promise<any> => {
  const language = await innerStore.changeLanguage(langCode)

  i18next.addResourceBundle(langCode, 'translation', language, false, true)

  await i18next.changeLanguage(langCode)

  return i18next
}

export { i18nextConfig, i18nextChangeLanguage }
