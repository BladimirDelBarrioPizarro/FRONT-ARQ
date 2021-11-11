import { checkLogLevelPriorityF, IcheckLogLevelPriorityF } from '../check-log-level-priority-factory'

describe('check-priority-factory', () => {
  test('Nivel mas bajo', () => {
    const args: IcheckLogLevelPriorityF = {
      levelsPriority: {
        INFO: 2,
        WARNING: 1,
        ERROR: 0
      },
      level: () => 'INFO'
    }
    const checkLogLevelPriority = checkLogLevelPriorityF(args)
    expect(checkLogLevelPriority('INFO')).toBeTruthy()
    expect(checkLogLevelPriority('WARNING')).toBeTruthy()
    expect(checkLogLevelPriority('ERROR')).toBeTruthy()
  })

  test('Nivel intermedio', () => {
    const args: IcheckLogLevelPriorityF = {
      levelsPriority: {
        INFO: 2,
        WARNING: 1,
        ERROR: 0
      },
      level: () => 'WARNING'
    }
    const checkLogLevelPriority = checkLogLevelPriorityF(args)
    expect(checkLogLevelPriority('INFO')).toBeFalsy()
    expect(checkLogLevelPriority('WARNING')).toBeTruthy()
    expect(checkLogLevelPriority('ERROR')).toBeTruthy()
  })

  test('Nivel alto', () => {
    const args: IcheckLogLevelPriorityF = {
      levelsPriority: {
        INFO: 2,
        WARNING: 1,
        ERROR: 0
      },
      level: () => 'ERROR'
    }
    const checkLogLevelPriority = checkLogLevelPriorityF(args)
    expect(checkLogLevelPriority('INFO')).toBeFalsy()
    expect(checkLogLevelPriority('WARNING')).toBeFalsy()
    expect(checkLogLevelPriority('ERROR')).toBeTruthy()
  })
})
