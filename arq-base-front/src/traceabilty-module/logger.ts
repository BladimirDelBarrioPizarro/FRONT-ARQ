import { defaultLogHandler } from './default-log-handler'
import { defaultLogDecorator, TlogDecorator } from './default-log-decorator'
import { checkLogLevelPriorityF } from './check-log-level-priority-factory'
import { IlevelsPriority, Tlevel, TlogHandler } from './types'
import { logInterval } from './log-interval'
import { createLogMethod } from './create-log-method'
import { logStore } from './log-store'

const defaultLevels = [
  'TRACE',
  'INFO',
  'WARNING',
  'ERROR',
  'FATAL'
]
const defaultLevelsPriority = {
  TRACE: 4,
  INFO: 3,
  WARNING: 2,
  ERROR: 1,
  FATAL: 0
}

interface IlogApi {
  [key: string]: any
}

export interface Iinit {
  level?: Tlevel
  levels?: string[]
  logsHandler?: TlogHandler
  logDecorator?: TlogDecorator
  levelsPriority?: IlevelsPriority
  sendInmediately?: string[]
  capacity?: number
  interval?: number
}

const defaultInitArguments: Iinit = {
  level: () => defaultLevels[3],
  levels: defaultLevels,
  logsHandler: defaultLogHandler,
  logDecorator: defaultLogDecorator,
  levelsPriority: defaultLevelsPriority,
  sendInmediately: [],
  capacity: 0,
  interval: 0
}

type Tinit = (config?: Iinit) => IlogApi
const init: Tinit = async ({
  level = defaultInitArguments.level,
  levels = defaultInitArguments.levels,
  logsHandler = defaultInitArguments.logsHandler,
  logDecorator = defaultInitArguments.logDecorator,
  levelsPriority = defaultInitArguments.levelsPriority,
  sendInmediately = defaultInitArguments.sendInmediately,
  capacity = defaultInitArguments.capacity,
  interval = defaultInitArguments.interval
} = defaultInitArguments) => {
  const log = {}
  const checkLogLevelPriority = checkLogLevelPriorityF({ levelsPriority, level })
  const { getLogs, insertLog, clearLogs } = logStore()

  levels.forEach((logLevel) => {
    const methodName = logLevel.toLowerCase()
    log[methodName] = createLogMethod({
      checkLogLevelPriority: checkLogLevelPriority,
      logLevel: logLevel,
      logDecorator: logDecorator,
      level: level,
      sendInmediately: sendInmediately,
      logsHandler: logsHandler,
      insertLog: insertLog,
      getLogs: getLogs,
      clearLogs: clearLogs,
      capacity: capacity
    })
  })

  if (interval > 0) {
    logInterval({
      interval: interval,
      logsHandler: logsHandler,
      getLogs: getLogs,
      clearLogs: clearLogs
    })
  }
  return log
}

export { init }
