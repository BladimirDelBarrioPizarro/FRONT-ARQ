/* eslint-env jest */
import {
  configure,
  get,
  put
} from '../store-plugin-localstorage'

describe('store-plugin-localstorage', () => {
  describe('function: put', () => {
    test('se proporciona id y valor, se obtiene valor', () => {
      const id = 'foo'
      const value = 'bar'
      const result = put(id, value)
      expect(result).toBe(value)
    })
    test('se proporciona id y valor, se comprueba que se encuentra en el localStorage', () => {
      const id = 'foo'
      const value = 'bar'
      const result = window.localStorage.getItem(id)
      expect(result).toBe(value)
    })
  })
  describe('function: get', () => {
    test('dado un id obtiene el valor del localStorage', () => {
      const id = 'foo'
      const value = 'bar'
      put(id, value)
      const result = get(id)
      expect(result).toBe(value)
    })
  })
  describe('function: configure', () => {
    test('dado un id devuelve las functiones get y put', () => {
      const api = configure('foo')
      const result = Object.keys(api)
      expect(result[0]).toBe('get')
      expect(result[1]).toBe('put')
    })
  })
})
