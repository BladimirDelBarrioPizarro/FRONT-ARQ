import { TlogHandler } from './types'

const defaultLogHandler: TlogHandler = (logs) => {
  // hacer algo con el array de logs
  logs.forEach(log => {
    console.log(log) // eslint-disable-line
  })
}

export { defaultLogHandler, TlogHandler }
