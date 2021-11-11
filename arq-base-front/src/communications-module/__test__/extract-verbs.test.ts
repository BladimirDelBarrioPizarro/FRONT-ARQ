import { extractVerbs } from '../extract-verbs'
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

const generalConfig = {
  host: exampleConfigPaths.host,
  basepath: exampleConfigPaths.basepath,
  protocol: exampleConfigPaths.protocol,
  timeout: exampleConfigPaths.timeout,
  auth: exampleConfigPaths.auth
}

describe('function: extractVerbs', () => {
  test('Obtiene el objeto esperado', () => {
    const result = extractVerbs({
      pathName: '/ejemplo',
      verbs: exampleConfigPaths.paths.mascota.verbs,
      generalConfig
    })
    expect(result).toHaveProperty('post')
    expect(result).toHaveProperty('get')
  })
  test('Verbo post tiene parametro data', async () => {
    const reqObj = extractVerbs({
      pathName: '/ejemplo',
      verbs: exampleConfigPaths.paths.mascota.verbs,
      generalConfig
    })

    const result = await reqObj.post({ param1: 'foo' })
    expect(result).toHaveProperty('data')
  })
  test('Verbo get tiene parametro params', async () => {
    const reqObj = extractVerbs({
      pathName: '/ejemplo',
      verbs: exampleConfigPaths.paths.mascota.verbs,
      generalConfig
    })

    const result = await reqObj.get({ param1: 'foo' })
    expect(result).toHaveProperty('params')
  })
})
