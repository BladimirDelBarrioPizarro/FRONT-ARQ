/* eslint-env jest */
import { normalizePath, composeUrl } from '../utils'

describe('utils', () => {
  describe('function: normalizePath', () => {
    test('Elimina "/" del path', () => {
      const path = '/user'
      const result = normalizePath(path)
      expect(result).toBe('user')
    })
    test('Deja el path igual al no tener "/"', () => {
      const path = 'user'
      const result = normalizePath(path)
      expect(result).toBe('user')
    })
  })
  describe('function: composeUrl', () => {
    test('Compone la url correctamente', () => {
      const urlParams = {
        host: 'ejemplo.com',
        basepath: 'v1',
        protocol: 'http'
      }
      const result = composeUrl(urlParams)
      expect(result).toBe('http://ejemplo.com/v1')
    })
    test('Compone la url correctamente sin basepath', () => {
      const urlParams = {
        host: 'ejemplo.com',
        protocol: 'http'
      }
      const result = composeUrl(urlParams)
      expect(result).toBe('http://ejemplo.com')
    })
  })
})
