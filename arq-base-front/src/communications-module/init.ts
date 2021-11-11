/* eslint-disable no-console */
import { AxiosResponse } from 'axios'
import { HTTP } from './axios'
import { extractPaths } from './extract-paths'
import { composeUrl, normalizePath } from './utils'

type callTypeFunc = (any) => Promise<AxiosResponse>
export interface CallType extends callTypeFunc {
  api: any
}

const init: any = async ({
  paths = {},
  host = location.hostname,
  basepath = '',
  protocol = location.protocol.replace(':', ''),
  timeout = 0
}) => {
  const generalConfig = {
    host,
    basepath,
    protocol,
    timeout
  }

  const call: CallType = async function (config = {}) {
    const reqConfig = Object.assign({
      baseURL: composeUrl({ protocol, host, basepath }),
      timeout
    }, config)
    /* eslint-disable */
    return HTTP.request(reqConfig)
    /* eslint-enable  */
  }

  call.api = extractPaths({
    paths,
    generalConfig
  })

  return {
    call,
    normalizePath
  }
}

export default init
