/* istanbul ignore file */
import arq from '../mediator'

let log
let call
let config
let endpoints
const lang = {
  // availableLanguages: null,
  currentLanguage: null,
  currentLangCode: null,
  changeLanguage: null
}
const token = localStorage.getItem('token')

const init: any = async (initConfig) => {
  const apiArq = await arq(initConfig)
  config = apiArq.configApi
  lang.currentLanguage = apiArq.i18n.language
  lang.currentLangCode = apiArq.i18n.langCode
  lang.changeLanguage = apiArq.i18n.changeLanguage
  // lang.availableLanguages = config.getConfig('languages')
  log = apiArq.logger
  call = apiArq.call
  endpoints = apiArq.endpoints
  return {
    config,
    call,
    lang: {
      // availableLanguages: lang.availableLanguages,
      currentLanguage: lang.currentLanguage,
      currentLangCode: lang.currentLangCode,
      changeLanguage: lang.changeLanguage
    },
    log,
    token,
    endpoints
  }
}

export default init

export {
  config,
  call,
  lang,
  log,
  token,
  endpoints
}
