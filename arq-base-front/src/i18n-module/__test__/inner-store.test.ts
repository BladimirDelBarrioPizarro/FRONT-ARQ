/* eslint-env jest */
import { get, put } from '../inner-store'

describe('inner-store', () => {
  describe('function: put', () => {
    test('se proporciona clave y valor y devuelve valor', () => {
      const result = put('bar', 'foo')
      expect(result).toBe('foo')
    })
  })
  describe('function: get', () => {
    test('añade una clave y la obtiene correctamente', () => {
      put('bar', 'foo')
      const result = get('bar')
      expect(result).toBe('foo')
    })
  })
})
