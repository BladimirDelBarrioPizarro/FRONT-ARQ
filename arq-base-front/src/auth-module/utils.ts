import Cookies from 'js-cookie'

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
  Cookies.set('cookietest', '1')
  return Cookies.get('cookietest') !== null
}

const urlUtils = {
  getParamsObj,
  hasParam,
  getParam,
  clearAllParams
}

export {
  urlUtils,
  isCookieEnabled
}
