/* eslint-disable no-console */
import Cookie from 'js-cookie'
export default async (): Promise<any> => {
  const getParamsObj = (): URLSearchParams => {
    const queryString = window.location.search
    return new URLSearchParams(queryString)
  }
  const hasParam = (key): boolean => {
    return getParamsObj().has(key)
  }
  const getParam = (key): string => {
    return decodeURI(getParamsObj().get(key))
  }
  const clearAllParams = (): string => {
    history.replaceState(null, null, window.location.pathname)
    return location.href
  }
  const isCookieEnabled = (): boolean => {
    if (navigator.cookieEnabled) {
      return true
    }
    // setea y borra una cookie para navegadores antiguos que no tienen el
    // api navigator
    Cookie.set('cookietest', '1')
    return Cookie.get('cookietest') !== null
  }
  const URL_SERVICE_PARAM_NAME = 'service'
  const URL_TICKET_PARAM_NAME = 'ticket'
  const CAS_URL_LOGIN = 'https://test.cesce.grupo.loc/cas/login'
  const URL_OAUTH = 'http://cesce-oauth-server-pre.cesce.grupo.loc/oauth/token?st='
  // const URL_TRACE = 'http://cesce-trace-microservice-pre.cesce.grupo.loc/trace'
  // 1. Comprobar si están habilitadas las cookies
  if (isCookieEnabled()) {
    // 2. comprobar si existe el parametro "service" en la URL
    if (hasParam(URL_TICKET_PARAM_NAME)) {
      const ticket = getParam(URL_TICKET_PARAM_NAME) // TODO guardar el ticket en algún sitio
      clearAllParams()
      // borramos los parametros de la URL

      const URL_OAUTH_TICKET = `${URL_OAUTH}${ticket}`
      console.log(URL_OAUTH_TICKET)
      // let accessToken
      // let refreshToken
      try {
        var myHeaders = new Headers()
        myHeaders.append('Authorization', 'Basic Y2VzZGF0YTpOZ2QzM3VMc3lZRmZDaG9L')
        var formdata = new FormData()
        formdata.append('grant_type', 'password')
        const urlencoded = new URLSearchParams()
        urlencoded.append('grant_type', 'password')
        urlencoded.append('username', 'ext001')
        urlencoded.append('password', '!nxY1DGK97Y123')
        // urlencoded.append('st', ticket)

        var requestOptionsOauth = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        }

        const result = await fetch(URL_OAUTH_TICKET, requestOptionsOauth as any)
        const response = await result.json()
        console.log(response)
        // accessToken = response.access_token
        // refreshToken = response.refresh_token
      } catch (e) {
        console.log('error', e)
      }

      // Para invocar al servicio de trazas se ha de utilizar el token de OAuth en lugar del Service Ticket del CAS.
      // El Service Ticket sirve únicamente para poder obtener un token de OAuth con un usuario ya autenticado.
      // cuando el usuario cierre la sesión, tendría que borrar los tokens de OAuth (access token y refresh token)
      // y hacer un logout en el CAS eliminado la Cookie y el ST si lo sigue conservando.
      /**
       *
Primero el usuario se ha de validar contra el CAS. Una vez validado el CAS proporciona una cookie y un ST. Con el ST se ha de atacar el OAuth para obtener un "access_token" y un "refresh_token" que tendrán una vida limitada. Cuando caduque el "access_token", habrá que pedir uno nuevo usando el "refresh_token" en el OAuth, el cual dará un "access_token" y un "refresh_token" nuevos. En el caso de que ambos tokens estén caducados, habrá que redirigir de nuevo al usuario a la ventana de login del CAS para volver a comenzar el ciclo de autenticación.

Con el fin de mantener viva la sesión, con cada llamada al backend habría que hacer una llamada AJAX al CAS con su cookie ignorando la respuesta usando un método GET.
       *
       */

      /*  try {
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${access_token}`)
        var formdata = new FormData()
        formdata.append('app', 'cesdata-form')
        formdata.append('level', 'info')
        formdata.append('data', 'informacion de la traza')
        formdata.append('timestamp', '2017-09-30T03:57:26.875Z')
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        }
        const result = await fetch(URL_TRACE, requestOptions as any)
        const response = await result.text()
        console.log(response)
      } catch (e) {
        console.log('error', e)
      } */
      /* Prueba con el servicio de trazas ********************************** */

      /* Prueba servicio de validación **************************************/
      /*
      https://cas.example.com/serviceValidate
      ?service=NOMBRESERVICIO
      ?ticket=XXX
      */
      /*
        <cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
          <cas:authenticationSuccess>
            <cas:user>ATMRA02</cas:user>
          </cas:authenticationSuccess>
        </cas:serviceResponse>
      */
      /*
        <cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'>
          <cas:authenticationFailure code='INVALID_TICKET'>
            no se ha reconocido el ticket &#039;ST-2268-pkMZITGoPdWrHPp5MDrl-bla&#039;
          </cas:authenticationFailure>
        </cas:serviceResponse>
      */
      /*  const validateUrl = [
        'https://castest.cesce.grupo.loc/cas/serviceValidate',
        '?',
        URL_SERVICE_PARAM_NAME,
        '=',
        window.encodeURI(window.location.origin),
        '&',
        URL_TICKET_PARAM_NAME,
        '=',
        window.encodeURI(ticket)
      ].join('')
      var headers = new Headers()
      headers.append('Accept', 'application/xml')
      headers.append('content-type', 'application/x-www-form-urlencoded')
      headers.append('Access-Control-Allow-Headers', 'Content-Type')
      var requestOptionsValidate = {
        method: 'GET',
        redirect: 'follow',
        headers
      } */
      /*  try {
        const resultValidate = await fetch(validateUrl, requestOptionsValidate as any)
        const responseValidate = await resultValidate.text()
        debugger
      } catch (e) {
        console.log('error', e)
      } */
    } else {
      // 3. si no tenemos el parametro service redirigimos a la página del CAS
      const serviceParam = window.encodeURI(window.location.origin)
      // redirecto to
      window.location.href = `${CAS_URL_LOGIN}?${URL_SERVICE_PARAM_NAME}=${serviceParam}`
    }
  } else {
    console.log('El proceso de autenticación requiere que habilite las cookies en su navegador')
  }
}
/* eslint-enable no-console */
