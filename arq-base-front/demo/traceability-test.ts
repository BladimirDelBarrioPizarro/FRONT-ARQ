/* eslint-disable no-console */
import loggerInit, { Iinit } from '../src/traceabilty-module'

export default async (): Promise<any> => {
  const levels = [
    'TRACE',
    'INFO',
    'WARNING',
    'ERROR',
    'FATAL'
  ]
  const levelsPriority = {
    TRACE: 4,
    INFO: 3,
    WARNING: 2,
    ERROR: 1,
    FATAL: 0
  }
  const logsHandler = (logs): void => {
    logs.forEach(log => {
      console.log(log)
    })
  }
  const logDecorator = ({
    logArgs,
    logLevel
  }): string => {
    return `${logArgs} : ${logLevel}`
  }
  const sendInmediately = []
  const capacity = 500
  const interval = 2000
  const args: Iinit = {
    level: () => levels[0],
    levels,
    logsHandler,
    logDecorator,
    levelsPriority,
    sendInmediately,
    capacity,
    interval
  }
  const logger = await loggerInit(args)
  console.log(logger)

  logger.trace('traza 1')
  logger.trace('traza 2')
  logger.trace('traza 3')
  logger.info('info 1')
  logger.info('info 2')
  logger.info('info 3')
  logger.warning('warning 1')
  logger.warning('warning 2')
  logger.warning('warning 3')
  logger.error('error 1')
  logger.error('error 2')
  logger.error('error 3')
  logger.fatal('fatal 1')
  logger.fatal('fatal 2')
  logger.fatal('fatal 3')
}
/* eslint-enable no-console */
