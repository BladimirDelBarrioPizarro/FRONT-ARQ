/* eslint-disable no-console */
import facadeInit from '../src/facade'
import { configMock } from './mocks/config-mocks'

export default (): any => {
  console.clear()
  facadeInit(configMock)
    .then((api) => {
      console.log('Api actual de la fachada')
      console.table(Object.keys(api))
      console.log(api)
    })
    .catch(err => {
      console.log(err)
    })
}
/* eslint-enable no-console */
