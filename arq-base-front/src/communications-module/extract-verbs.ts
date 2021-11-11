import { HTTP } from './axios'
import { composeUrl } from './utils'

const extractVerbs: any = ({ pathName, verbs, generalConfig }) => {
  const verbObj = {}
  Object.keys(verbs).forEach(verb => {
    const mergeConfig = Object.assign(
      {
        url: pathName,
        method: verb,
        protocol: generalConfig.protocol,
        host: generalConfig.host,
        basepath: generalConfig.basepath,
        timeout: generalConfig.timeout
      },
      verbs[verb]
    )

    const requestConfig = Object.assign(
      {
        baseURL: composeUrl({
          protocol: mergeConfig.protocol,
          host: mergeConfig.host,
          basepath: mergeConfig.basepath
        })
      },
      mergeConfig
    )

    // borra las claves que no espera AXIOS
    delete requestConfig.protocol
    delete requestConfig.host
    delete requestConfig.basepath
    delete requestConfig.pathvariable

    const requestMethod: any = async (data = {}, config = {}) => {
      const mergeConfig = Object.assign({}, requestConfig,
        {
          ...verb.toLowerCase() === 'get'
            ? { params: data }
            : { data: data }
        },
        config)
      /* eslint-disable */
      return HTTP.request(mergeConfig)
      /* eslint-enable  */
    }

    verbObj[verb] = requestMethod

    verbObj[verb].requestConfig = requestConfig
  })

  return verbObj
}

export { extractVerbs }
