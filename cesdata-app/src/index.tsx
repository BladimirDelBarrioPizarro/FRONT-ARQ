/* istanbul ignore file */
import * as React from 'react'
import ReactDOM, { render } from 'react-dom'
import { enableAllPlugins } from 'immer'
import { Provider } from 'react-redux'
import { store } from './store/store'
import initArq from '@cesce/arq'
import { arqConfig } from './config/arq-local-config'
import { i18nextConfig } from './utils/i18next-config'

enableAllPlugins() // https://immerjs.github.io/immer/docs/installation

const init = async () => {
  try {
    const apiArq = await initArq(arqConfig)

    await i18nextConfig({
      
      langCode: apiArq.lang.currentLangCode,
      language: apiArq.lang.currentLanguage,
      changeLanguage: apiArq.lang.changeLanguage,
      
    })

    const { App } = await import(/* webpackChunkName: "App" */ './App')

    const ele = document.createElement('div')
    ele.id = 'root'
    document.body.appendChild(ele)
    var script = document.createElement('script')
    script.type = 'text/javascript'
    var textNode = document.createTextNode("function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NN63RZW'")
    script.appendChild(textNode)
    document.head.appendChild(script)

    var noScript = document.createElement('noscript')
    var iFrame = document.createElement('iframe')
    iFrame.src = "https://www.googletagmanager.com/ns.html?id=GTM-NN63RZW"
    iFrame.height = '0'
    iFrame.width = '0'
    noScript.appendChild(iFrame)
    document.body.appendChild(noScript)
    document.documentElement.lang = apiArq.lang.currentLanguage
    
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      ele
    )
  } catch (errors) {
    /* errors tiene esta forma
      [
        {
          target: 'comunication module',
          error: e
        }
      ]
    */
    const PrintError = (arqError, index) => {
      let error = ''
      if (arqError.error.toJSON) {
        error = JSON.stringify(arqError.error.toJSON(), null, 2)
      } else error = arqError.error.toString()

      return (
        <div key={index}>
          <h3>{arqError.target}</h3>
          <code>{error}</code>
        </div>
      )
    }
    const PrintErrors = errors.map((e, index) => PrintError(e, index))

    render(
      <React.StrictMode>{PrintErrors}</React.StrictMode>,
      document.getElementById('root')
    )
  }
}

init()
