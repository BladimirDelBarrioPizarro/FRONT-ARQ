const normalizePath: any = (path) => {
  return path.replace('/', '')
}

const composeUrl = ({ protocol, host, basepath = '' }): string => {
  let requestPath = `${protocol}://${host}`
  if (basepath !== '') {
    requestPath = `${requestPath}/${basepath}`
  }
  return requestPath
}

export { normalizePath, composeUrl }
