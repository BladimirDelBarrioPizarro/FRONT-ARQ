import { IlevelsPriority, Tlevel } from './types'

export interface IcheckLogLevelPriorityF{
  levelsPriority: IlevelsPriority
  level: Tlevel
}
type TcheckLogLevelPriorityF=(arg: IcheckLogLevelPriorityF) => (logLevel: string) => boolean

/**
 * Comprueba que el nivel sea igual o mayor que el nivel actual de log
 */
const checkLogLevelPriorityF: TcheckLogLevelPriorityF = ({
  levelsPriority,
  level
}) => {
  return (logLevel) => levelsPriority[level()] >= levelsPriority[logLevel]
}

export { checkLogLevelPriorityF }
