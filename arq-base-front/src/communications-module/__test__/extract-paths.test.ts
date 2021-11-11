/* eslint-env jest */
import { extractPaths } from '../extract-paths'
import { exampleConfigPaths } from './example-config-paths'

describe('function: extractPaths', () => {
  test('Obtiene el objeto parseado correctamente', () => {
    const result = extractPaths({
      paths: exampleConfigPaths.paths,
      generalConfig: {
        host: exampleConfigPaths.host,
        basepath: exampleConfigPaths.basepath,
        protocol: exampleConfigPaths.protocol,
        timeout: exampleConfigPaths.timeout,
        auth: exampleConfigPaths.auth
      }
    })

    expect(result).toHaveProperty('mascota')
    expect(result['mascota']).toHaveProperty('post') // eslint-disable-line
    expect(result['mascota']).toHaveProperty('get')  // eslint-disable-line
  })
})
