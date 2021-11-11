/* eslint-disable no-console */
import ComunicationsInit from '../src/communications-module'
import { configMock } from './mocks/config-mocks'

const start: any = async () => {
  console.clear()
  const endpoints = {
    pre: 'http://cesce-config-manager-pre.cesce.grupo.loc/config-manager/cesdata-front/pre'
  }
  const { call } = await ComunicationsInit(configMock.endpointsConfig(endpoints))

  console.log('Endpoints disponibles')
  console.log(call.api)



  console.log('Petición a api/configuration:')
  const config = await call.api.configuration.get({})
  console.log(config)
 

  console.log('Petición get a endpoint literales:')
  const translation = await call.api.languages.get({
    lang: 'en-US'
  })

  console.log(translation)
  console.log(translation.data)

  console.log('Petición post a endpoints literales:')
  console.log(call.api.languages.post.requestConfig)

  try {
    const postResponse = await call.api.languages.post({
      id: 'fr',
      lang: 'fr',
      'login:user': 'bladi',
      'login:password': 'atmira'
    })
    console.log(postResponse)
  } catch (error) {
    console.log('No se ha podido crear el lenguaje')
  }
}

export default start
/* eslint-enable no-console */
