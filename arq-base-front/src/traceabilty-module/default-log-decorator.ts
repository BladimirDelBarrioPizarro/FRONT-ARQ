import { TlogDecorator } from './types'

const defaultLogDecorator: TlogDecorator = ({
  logArgs,
  logLevel
}) => logArgs

export { defaultLogDecorator, TlogDecorator }
