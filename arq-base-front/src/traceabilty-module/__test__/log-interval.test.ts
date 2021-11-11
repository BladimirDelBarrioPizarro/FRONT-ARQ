/* eslint-env jest */

import { logInterval, IlogInterval } from '../log-interval'

jest.useFakeTimers()

describe('log-interval', () => {
  test('Llama a setTimeout', () => {
    const logsHandler = jest.fn((): boolean => true)
    const getLogs = jest.fn((): any[] => ([]))
    const clearLogs = jest.fn((): boolean => true)
    const args: IlogInterval = {
      interval: 1000,
      logsHandler,
      getLogs,
      clearLogs
    }

    logInterval(args)
    jest.advanceTimersByTime(1001)
    expect(logsHandler).toHaveBeenCalledTimes(1)
    expect(getLogs).toHaveBeenCalledTimes(1)
    expect(clearLogs).toHaveBeenCalledTimes(1)
  })
})
