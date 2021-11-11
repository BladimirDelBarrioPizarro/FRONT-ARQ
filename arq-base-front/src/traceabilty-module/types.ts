export interface IlevelsPriority {
  [levelName: string]: number
}

export type Tlevel = () => string

export type TlogHandler = (logs: any[]) => void

export interface IlogDecorator {
  logArgs: any[]
  logLevel: string
}

export type TlogDecorator = (IlogDecorator) => unknown

export type TgetLogs = () => any[]
export type TinsertLog = (log: any) => void
export type TclearLogs = () => void
export type TlogStore = () => ({
  getLogs: TgetLogs
  insertLog: TinsertLog
  clearLogs: TclearLogs
})
