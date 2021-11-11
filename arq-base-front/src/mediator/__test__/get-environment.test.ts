import { getEnvironment } from '../get-environment'

describe('get-environment', () => {
  describe('method: getEnvironment', () => {
    test('process.env.ENV no informado, devuelve DEV', () => {
      expect(getEnvironment()).toBe('DEV')
    })

    test('process.env.ENV informado, devuelve PRO', () => {
      process.env.ENV = 'PRO'
      expect(getEnvironment()).toBe('PRO')
    })
  })
})
