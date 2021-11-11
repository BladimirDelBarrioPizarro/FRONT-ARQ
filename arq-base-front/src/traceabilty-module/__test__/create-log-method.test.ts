import { createLogMethod, IcreateLogMethod } from '../create-log-method'

describe('create-log-method', () => {
  test('Log no tiene prioridad suficiente, se ignora', () => {
    const args: IcreateLogMethod = {
      checkLogLevelPriority: jest.fn(() => false),
      logLevel: 'DEBUG',
      logDecorator: (...args) => args,
      level: () => 'INFO',
      sendInmediately: ['ERROR'],
      insertLog: () => true,
      logsHandler: () => true,
      clearLogs: () => true,
      getLogs: () => [],
      capacity: 1
    }

    const method = createLogMethod(args)
    method()
    expect(args.checkLogLevelPriority).toHaveBeenCalled()
  })

  test('Log se debe enviar inmediatamente', () => {
    const args: IcreateLogMethod = {
      checkLogLevelPriority: () => true,
      logLevel: 'ERROR',
      logDecorator: (...args) => args,
      level: () => 'INFO',
      sendInmediately: ['ERROR'],
      insertLog: () => true,
      logsHandler: jest.fn(() => true),
      clearLogs: () => true,
      getLogs: () => [],
      capacity: 1
    }

    const method = createLogMethod(args)
    method()
    expect(args.logsHandler).toHaveBeenCalled()
  })

  test('Log se trata al exceder la capacidad maxima', () => {
    const args: IcreateLogMethod = {
      checkLogLevelPriority: () => true,
      logLevel: 'ERROR',
      logDecorator: (...args) => args,
      level: () => 'INFO',
      sendInmediately: [],
      insertLog: () => true,
      logsHandler: () => true,
      clearLogs: jest.fn(() => true),
      getLogs: () => ['hola', 'adios'],
      capacity: 2
    }

    const method = createLogMethod(args)
    method()
    expect(args.clearLogs).toHaveBeenCalled()
  })

  test('Log NO se trata al NO exceder la capacidad maxima', () => {
    const args: IcreateLogMethod = {
      checkLogLevelPriority: () => true,
      logLevel: 'ERROR',
      logDecorator: (...args) => args,
      level: () => 'INFO',
      sendInmediately: [],
      insertLog: () => true,
      logsHandler: () => true,
      clearLogs: jest.fn(() => true),
      getLogs: () => ['hola', 'adios'],
      capacity: 3
    }

    const method = createLogMethod(args)
    method()
    expect(args.clearLogs).not.toHaveBeenCalled()
  })
})
