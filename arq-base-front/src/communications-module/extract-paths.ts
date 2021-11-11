import { extractVerbs } from './extract-verbs'

const extractPaths: any = ({
  paths,
  generalConfig
}) => {
  const pathObj = {}
  Object.keys(paths).forEach(id => {
    pathObj[id] = extractVerbs({
      pathName: paths[id].path,
      verbs: paths[id].verbs,
      generalConfig
    })
  })

  return pathObj
}

export { extractPaths }
