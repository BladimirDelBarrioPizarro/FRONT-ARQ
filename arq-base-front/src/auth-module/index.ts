/* istanbul ignore file */
import { isCookieEnabled, urlUtils } from './utils'
import {
  CAS_URL_LOGIN,
  URL_OAUTH,
  URL_SERVICE_PARAM_NAME,
  URL_TICKET_PARAM_NAME,
  SERVICE_NAME,
  CLIENT_CREDENTIALS
} from './constants'

let accessToken
let refreshToken
const initAuth: any = async () => {
  if (isCookieEnabled()) {
    if (urlUtils.hasParam(URL_TICKET_PARAM_NAME)) {
      const ticket = urlUtils.getParam(URL_TICKET_PARAM_NAME)
      urlUtils.clearAllParams()

      const URL_OAUTH_TICKET = `${URL_OAUTH}${ticket}${SERVICE_NAME}${window.encodeURI(window.location.href)}`

      try {
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `Basic ${CLIENT_CREDENTIALS}`)
        const urlencoded = new URLSearchParams()
        urlencoded.append('grant_type', 'password')

        var requestOptionsOauth = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }
        const result = await fetch(URL_OAUTH_TICKET, requestOptionsOauth as any)
        const response = await result.json()
        accessToken = response.access_token
        refreshToken = response.refresh_token
        localStorage.setItem('token', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        return {
          accessToken,
          refreshToken
        }
      } catch (e) {
        console.log('error', e) // eslint-disable-line
        return null
      }
    } else {
      const serviceParam = window.encodeURI(window.location.href)
      window.location.href = `${CAS_URL_LOGIN}?${URL_SERVICE_PARAM_NAME}=${serviceParam}`
      return null
    }
  } else {
    console.log('El proceso de autenticación requiere que habilite las cookies en su navegador') // eslint-disable-line
    return null
  }
}

export default initAuth
