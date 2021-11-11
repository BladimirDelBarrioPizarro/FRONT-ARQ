const exampleConfigPaths = {
  paths: {
    mascota: {
      path: 'pet',
      verbs: {
        post: {
          host: 'ejemplo.com',
          basepath: 'v1',
          protocol: 'http',
          timeout: 1000
        },
        get: {}
      }
    },
    login: {
      path: 'login',
      verbs: {
        post: {
          auth: false
        }
      }
    }
  },
  host: 'ejemplo.com',
  basepath: 'v1',
  protocol: 'http',
  timeout: 1000,
  auth: true
}

export { exampleConfigPaths }
