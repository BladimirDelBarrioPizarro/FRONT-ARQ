import { defaultLogDecorator } from '../default-log-decorator'

describe('default-log-decorator', () => {
  test('method: defaultLogDecorator', () => {
    expect(defaultLogDecorator({
      logArgs: 'hola'
    })).toBe('hola')
  })
})
