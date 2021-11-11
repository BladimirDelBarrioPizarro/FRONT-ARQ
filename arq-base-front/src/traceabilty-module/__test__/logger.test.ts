/* eslint-env jest */

import { init } from '../logger'

describe('module: logger', () => {
  test('Devuelve tantas funciones como el parametro levels por defecto',
    async () => {
      const loggerInit = await init()
      loggerInit.info('info')
      expect(loggerInit).toHaveProperty('info')
      expect(loggerInit).toHaveProperty('warning')
      expect(loggerInit).toHaveProperty('error')
    })

  test('Devuelve tantas funciones como el parametro levels informado',
    async () => {
      const levelMock = jest.fn().mockReturnValue('foo')
      const loggerInit = await init({
        levels: [
          'foo',
          'bar'
        ],
        levelsPriority: { foo: 0, bar: 1 },
        level: levelMock,
        interval: 1000
      })
      loggerInit.foo('foo')
      expect(levelMock).toHaveBeenCalled()
      expect(loggerInit).toHaveProperty('foo')
      expect(loggerInit).toHaveProperty('bar')
    })

  test('Levels array vacío',
    async () => {
      const levelMock = jest.fn().mockReturnValue('foo')
      const loggerInit = await init({
        levels: [],
        levelsPriority: { foo: 0, bar: 1 },
        level: levelMock,
        interval: 1000
      })
      expect(loggerInit).toEqual({})
    })

  test('levelsPriority objeto vacío',
    async () => {
      const loggerInit = await init({
        levelsPriority: {}
      })
      loggerInit.info('info')
      expect(loggerInit).toHaveProperty('info')
      expect(loggerInit).toHaveProperty('warning')
    })
})
