/* istanbul ignore file */
import axios from 'axios'
import auth from '../auth-module/index'
import {
  CLIENT_CREDENTIALS,
  URL_REFRESH_TOKEN
} from '../auth-module/constants'

const config = {
  authorization: '',
  headers: {}
}

const authInterceptor: any = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}
let refreshBoolean = true
const HTTP = axios.create(config)

HTTP.interceptors.request.use(authInterceptor)

HTTP.interceptors.response.use(undefined, err => {
  const error = err.response
  const originalRequest = error.config
  if ((error.status === 401 && error.data.error === 'invalid_token') && refreshBoolean) {
    initRefreshAuth(originalRequest)
    const accessToken = localStorage.getItem('token')
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${accessToken}` // eslint-disable-line
    return HTTP(originalRequest)
  }
  return Promise.reject(error)
})

const initRefreshAuth: any = async (originalRequest) => {
  refreshBoolean = false

  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Basic ${CLIENT_CREDENTIALS}`)
  const urlencoded = new URLSearchParams()
  urlencoded.append('grant_type', 'refresh_token')
  urlencoded.append('refresh_token', localStorage.getItem('refreshToken'))

  const requestOptionsOauth = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  }

  const URL_FORMAT_REFRESH_TOKEN = `${URL_REFRESH_TOKEN}`

  const response = await fetch(URL_FORMAT_REFRESH_TOKEN, requestOptionsOauth as any)
    .then(result => result.json())
    .catch(err => {
      console.log("Error en la peticion de refresh token: ", err) // eslint-disable-line
    })

  if (response.access_token === undefined) {
    await auth()
  } else {
    const accessToken = response.access_token
    const refreshToken = response.refresh_token

    localStorage.setItem('token', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  }
  refreshBoolean = true
  /* eslint-disable */
  return await Promise.resolve(originalRequest)
  /* eslint-enable  */
}

export { HTTP }
