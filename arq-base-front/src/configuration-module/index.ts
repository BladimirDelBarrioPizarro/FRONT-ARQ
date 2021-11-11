const init: any = async (requestConfig) => {
  interface IConfig {
    [key: string]: any
  }

  let config: IConfig = {
    configRequestTime: Number
  }

  let intervalId: number

  /**
   * Obtiene el resultado de configuración para una clave concreta
   * en caso de no existir parámetro  de entrada, devolvería el objeto config
   * @param key
   */
  function getConfig (key?: string): Object | null {
    if (key === null || key === undefined) {
      return config
    }
    if ((key !== null || key !== undefined) && config[key] !== undefined) {
      return config[key]
    } else {
      return null
    }
  }
  /**
   * Obtiene el resultado de configuración según un intervalo
   * de tiempo solicitado
   * @param time
   */

  function getConfigByTime ({ time } = { time: config.configRequestTime }): any {
    if (time > 0) {
      intervalId = window.setTimeout(() => {
        requestConfig()
        getConfigByTime(time)
      }, time)
    }
  }

  /**
   * Obtiene el archivo de configuración del servicio remoto
   * **/
  async function getRemoteConfig (): Promise<Object> {
    config = await requestConfig()
    return config
  }

  const cancelGetConfigByTime: any = () => {
    clearInterval(intervalId)
  }

  return {
    getRemoteConfig,
    getConfigByTime,
    getConfig,
    cancelGetConfigByTime
  }
}

export default init
