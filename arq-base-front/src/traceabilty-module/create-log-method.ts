import { TlogDecorator, Tlevel, TlogHandler } from './types'

export interface IcreateLogMethod{
  checkLogLevelPriority: (logLevel: string) => boolean
  logLevel: string
  logDecorator: TlogDecorator
  level: Tlevel
  sendInmediately: string[]
  insertLog: (unknown) => void
  logsHandler: TlogHandler
  clearLogs: () => void
  getLogs: () => any[]
  capacity: number
}
const createLogMethod = ({
  checkLogLevelPriority,
  logLevel,
  logDecorator,
  level,
  sendInmediately,
  insertLog,
  logsHandler,
  clearLogs,
  getLogs,
  capacity
}: IcreateLogMethod) => (...logArgs) => {
  if (checkLogLevelPriority(logLevel)) {
    const logDecorated = logDecorator({
      logArgs,
      logLevel,
      level: level()
    })
    // comprobar si se debe enviar de inmediato
    if (sendInmediately.includes(logLevel)) {
      logsHandler([logDecorated])
    } else {
      insertLog(logDecorated)
      // comprobar si se ha llegado a la capacidad maxima
      if (getLogs().length >= capacity) {
        logsHandler(getLogs())
        clearLogs()
      }
    }
  }
}

export { createLogMethod }
