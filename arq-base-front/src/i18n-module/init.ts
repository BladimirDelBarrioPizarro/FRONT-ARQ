import { getMostlyAppropiateLangCode } from './get-mostly-appropiate-default-lang-code'
import { getBrowserLanguage } from './get-browser-language'
import { get, put } from './inner-store'

// string
const init = async ({
  requestLang,
  availableLanguages,
  store = {
    get: () => null,
    put: (value: string) => null
  }
}): Promise<any> => {
  let langCode = await store.get()

  if (langCode === null) {
    langCode = getMostlyAppropiateLangCode(
      getBrowserLanguage(),
      availableLanguages())
  }

  const language = await requestLang(langCode)
  await store.put(langCode)
  put('requestLang', requestLang)
  put('availableLanguages', availableLanguages)
  put('store', store)
  put('language', language)
  put('langCode', langCode)

  return {
    langCode: () => get('langCode'),
    language: () => get('language')
  }
}

export { init }
