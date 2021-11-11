import { getMostlyAppropiateLangCode } from './get-mostly-appropiate-default-lang-code'
import { get, put } from './inner-store'

const changeLanguage = async (newLangCode): Promise<any> => {
  if (newLangCode === false || newLangCode === null) {
    return false
  }

  const availableLanguages = get('availableLanguages')()
  const requestLang = get('requestLang')
  const store = get('store')

  const langCode = getMostlyAppropiateLangCode(
    newLangCode,
    availableLanguages
  )

  try {
    const language = await requestLang(langCode)
    await store.put(langCode)

    put('language', language)
    put('langCode', langCode)

    return language
  } catch (e) {
    return false
  }
}

export { changeLanguage }
