/* istanbul ignore file */
import configInit from '../configuration-module'
import comunicationInit from '../communications-module'
import i18nInit, { changeLanguage, pluginLocalStorage } from '../i18n-module'
import loggerInit, { Iinit } from '../traceabilty-module'
import { languagesI18n } from '../i18n-module/languages/languages-i18n'
import auth from '../auth-module/index'
import axios from 'axios'
import { CESCE_PRE_URL } from './constants'

const init: any = async (arqConfig) => {
  try {
    /*
        auth module
      */
    await auth()

    /*
      configuration-module inizialization
    */

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    let configRequestTime
    let languages
    let endpoints

    const requestConfig: any = async () => {
      await axios.get(CESCE_PRE_URL, config)
        .then(response => {
          configRequestTime = response.data.configRequestTime
          languages = response.data.languages
          endpoints = response.data.endpoints
        })
    }

    const configApi = await configInit(requestConfig)
    await configApi.getRemoteConfig()
    await configApi.getConfigByTime(configRequestTime)

    /*
        communication-module inizialization
      */

    interface IbyEnv {
      [key: string]: any
    }
    const arqConfigByEndpoints: IbyEnv = Object
      .keys(arqConfig)
      .reduce((acum, key) => {
        acum[key] = arqConfig[key](endpoints)
        return acum
      }, {})

    const { call } = await comunicationInit(arqConfigByEndpoints.endpointsConfig)

    /*
        i18n-module initialization
      */
    const requestLang: any = (langCode) => {
      return languagesI18n[langCode] === undefined ? languagesI18n['es-ES'].data : languagesI18n[langCode].data
    }

    const i18nApi = await i18nInit({
      requestLang,
      availableLanguages: () => languages,
      store: pluginLocalStorage()
    })

    /*
      traceability-module inizialization
    */

    const logDecorator = ({
      logArgs,
      logLevel
    }): any => {
      return {
        app: 'cesdata-trace',
        level: logLevel,
        data: logArgs[0],
        timestamp: new Date()
      }
    }

    const levels = [
      'trace',
      'info',
      'warning',
      'error',
      'fatal'
    ]
    const levelsPriority = {
      trace: 4,
      info: 3,
      warning: 2,
      error: 1,
      fatal: 0
    }
    const sendInmediately = []
    const capacity = 500
    const interval = 2000
    const logsHandler = (logs): void => {
      logs.forEach(log => {
        cesdataLogsHandler(log)
        console.log(log) // eslint-disable-line no-console
      })
    }

    const args: Iinit = {
      level: () => levels[0],
      levels,
      logsHandler,
      logDecorator,
      levelsPriority,
      sendInmediately,
      capacity,
      interval
    }
    /* eslint-disable */
    const logger = await loggerInit(args)
    /* eslint-enable  */

    const cesdataLogsHandler = (logger): any => {
      call.api.trace.post(logger)
    }

    return {
      call,
      configApi,
      i18n: {
        ...i18nApi,
        changeLanguage
      },
      logger,
      endpoints
    }
  } catch (error) {
    /* eslint-disable */
    return await Promise.reject(error)
    /* eslint-enable  */
  }
}

export default init
