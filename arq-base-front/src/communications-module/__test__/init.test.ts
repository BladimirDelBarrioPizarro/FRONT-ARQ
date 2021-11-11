/* eslint-env jest */
import init from '../init'
import { exampleConfigPaths } from './example-config-paths'

jest.mock('axios', () => ({
  request: (data) => data,
  create: () => ({
    request: (data) => data,
    interceptors: {
      request: {
        use: () => true
      },
      response: {
        use: () => true
      }
    }
  })
}))

const initParams = {
  paths: exampleConfigPaths.paths,
  host: 'midominio.com',
  basepath: 'v1',
  protocol: 'https',
  timeout: 1000
}

describe('function: init', () => {
  test('Result tiene una clave call', async () => {
    const result = await init({
      paths: exampleConfigPaths.paths
    })
    expect(result).toHaveProperty('call')
  })
  test('Calcula correctamente el baseURL con los parametros que se le pasan', async () => {
    const { call } = await init(initParams)
    const result = await call({ url: 'ejemploAPI' })
    // eslint-disable-next-line
    expect(result['baseURL']).toBe('https://midominio.com/v1')
  })
  test('El resultado tiene una clave "api"', async () => {
    const { call } = await init(initParams)

    expect(call).toHaveProperty('api')
  })
  test('El resultado tiene una clave "api" con una clave mascota y sus verbos', async () => {
    const { call } = await init(initParams)

    expect(call).toHaveProperty('api')
    expect(call.api).toHaveProperty('mascota')
    // eslint-disable-next-line
    expect(call.api.mascota).toHaveProperty('get')
    // eslint-disable-next-line
    expect(call.api.mascota).toHaveProperty('post')
  })
})
