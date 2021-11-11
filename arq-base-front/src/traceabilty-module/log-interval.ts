import { TlogHandler, TgetLogs, TclearLogs } from './types'

export interface IlogInterval {
  interval: any
  logsHandler: TlogHandler
  getLogs: TgetLogs
  clearLogs: TclearLogs
}
type TlogInterval = ({
  interval,
  logsHandler,
  getLogs,
  clearLogs
}: IlogInterval) => NodeJS.Timeout

const logInterval: TlogInterval = ({
  interval,
  logsHandler,
  getLogs,
  clearLogs
}) => {
  const intervalHandler = (): void => {
    logsHandler(getLogs())
    clearLogs()
    logInterval({
      interval,
      logsHandler,
      getLogs,
      clearLogs
    })
  }
  return setTimeout(intervalHandler, interval)
}

export { logInterval }
