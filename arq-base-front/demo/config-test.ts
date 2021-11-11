/* eslint-disable no-console */
import configInit from '../src/configuration-module'

var requestOptions = {
  method: 'GET'
}

const requestConfig = (): Promise<any> => new Promise((resolve, reject) => {
  fetch('http://localhost:9000/api/configuration', requestOptions)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(error => reject(error))
})

const start = async (): Promise<any> => {
  const api = await configInit(requestConfig)
  await api.getRemoteConfig()
  api.getConfigByTime()
  console.log('Obtengo toda la configuración')
  console.log(api.getConfig())
  console.log('Obtengo la configuración en base a una clave')
  console.log(api.getConfig('configRequestTime'))
  // console.log(api.getConfig(key))
  console.log('Obtengo la configuración por la clave languages')
  console.log(api.getConfig('languages'))
  console.log('Cancelamos la petición iterativa a los 6000 ms en Network tendremos dos peticiones')
  setTimeout(function () { api.cancelGetConfigByTime() }, 6000)
}

export default async (): Promise<any> => {
  console.clear()
  try {
    await start()
  } catch (e) {
    console.log('No se ha podido obtener la configuración')
    console.log(e)
  }
}
