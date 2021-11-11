/* eslint-disable no-console */
import initI18n, { changeLanguage, pluginLocalStorage } from '../src/i18n-module'
import { availableLanguages } from '../src/i18n-module/example-config-lang'

var myHeaders = new Headers()
myHeaders.append('Access-Control-Allow-Origin', '*')

const requestLang: Object = (langCode) => {
  if (langCode === 'en-US') {
    return {
      Welcome: 'Welcome',
      text: 'text'
    }
  } else {
    return {
      Welcome: 'Bienvenido',
      text: 'texto'
    }
  }
}

export default async (): Promise<any> => {
  console.clear()
  const api = await initI18n({
    requestLang,
    availableLanguages: () => availableLanguages,
    store: pluginLocalStorage()
  })
  console.log(`Actual language code ${api.langCode()}`)
  console.log('Actual translation')
  console.log(api.langCode())
  console.log(api.language())

  console.log('Cambio de idioma a en-US')
  await changeLanguage('en-US')
  console.log(`Actual language code ${api.langCode()}`)
  console.log('Actual translation')
  console.log(api.langCode())
  console.log(api.language())
}

/* eslint-enable no-console */
