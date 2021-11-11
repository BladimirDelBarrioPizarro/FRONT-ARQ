/* eslint-disable no-console */
import mediadorInit from '../src/mediator'
import { configMock } from './mocks/config-mocks'

export default async (): Promise<any> => {
  console.clear()
  const api = await mediadorInit(configMock)

  console.log('Api actual del mediador')
  console.table(Object.keys(api))
  console.log(api)
}
/* eslint-enable no-console */
