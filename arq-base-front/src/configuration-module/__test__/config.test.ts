import configInit from '../index'

const requestResponse = {
  configuration: {
    configRequestTime: 300000
  }
}

const requestConfig: any = () => requestResponse

jest.useFakeTimers()
describe('Configuration-module', () => {
  describe('function: getRemoteConfig', () => {
    test('function: getRemoteConfig', async () => {
      const init = await configInit(requestConfig)
      const remote = await init.getRemoteConfig()
      expect(remote).toStrictEqual(requestResponse)
    })
  })
  describe('function: getConfigByTime', () => {
    test('function: getConfigByTime and cancelGetConfigByTime', async () => {
      const init = await configInit(requestConfig)
      let time = 3000
      await init.getConfigByTime({ time } = { time: requestResponse.configuration.configRequestTime })
      const result = setTimeout(function () { init.getConfigByTime() }, time)
      await init.cancelGetConfigByTime()
      expect(result).toBe(2)
    })
  })
  describe('function: getConfig', () => {
    test('Obtiene null si no encuentra la clave', async () => {
      const init = await configInit(requestConfig)
      const result = await init.getConfig('claveQueNoExiste')
      expect(result).toBe(null)
    })
    test('Obtiene toda la configuración si no se proporciona clave', async () => {
      const init = await configInit(requestConfig)
      await init.getRemoteConfig()
      const result = await init.getConfig()
      expect(result).toBe(requestResponse)
    })
    test('Obtiene la configuración de la clave indicada', async () => {
      const init = await configInit(requestConfig)
      await init.getRemoteConfig()
      const result = await init.getConfig('configuration')
      expect(result).toEqual(requestResponse.configuration)
    })
  })
  describe('function: cancelGetConfigByTime', () => {
    test('ejecuta clearInterval', async () => {
      const init = await configInit(requestConfig)
      await init.cancelGetConfigByTime()
      const result = await init.cancelGetConfigByTime()
      expect(result).toBe(undefined)
    })
  })
})
