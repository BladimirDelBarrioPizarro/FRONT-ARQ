import { defaultLogHandler } from '../default-log-handler'

describe('default-log-handler', () => {
  test('method: defaultLogHandler', () => {
    console["log"] = jest.fn() // eslint-disable-line

    const param = ['log1', { data: 'log2' }]
    defaultLogHandler(param)

    expect(console.log).toHaveBeenCalledTimes(2)  // eslint-disable-line
  })
})
