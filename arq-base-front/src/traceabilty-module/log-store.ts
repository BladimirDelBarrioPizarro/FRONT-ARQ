import { TlogStore, TgetLogs, TinsertLog, TclearLogs } from './types'

const logStore: TlogStore = () => {
  const logs = []

  const getLogs: TgetLogs = () => logs
  const insertLog: TinsertLog = (log) => {
    logs.push(log)
  }
  const clearLogs: TclearLogs = () => {
    logs.length = 0
  }

  return {
    getLogs,
    insertLog,
    clearLogs
  }
}

export { logStore }
