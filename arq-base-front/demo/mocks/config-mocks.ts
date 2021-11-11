
const configMock = {
  endpointsConfig: (endpoints) => ({
    paths: {
      languages: {
        path: 'languages',
        verbs: {
          get: {
            host: 'localhost:9000',
            basepath: 'api'
          },
          post: {
            headers: { 'Content-Type': 'application/json' }
          },
          delete: {}
        }
      },
      configuration: {
        path: '',
        verbs: {
          get: {
            host: 'cesce-config-manager-pre.cesce.grupo.loc/config-manager/cesdata-front/pre'
          }
        }
      },
      trace: {
        path: `${endpoints.cesce_trace_path}`,
        verbs: {
          post: {
            host: `${endpoints.cesce_trace_host}`
          }
        }
      },
      paises: {
        path: 'paises',
        verbs: {
          get: {}
        }
      },
      error400: {
        path: '/api/v1/errors/400error',
        verbs: {
          get: {
            host: 'localhost:9999'
          },
          post: {}
        }
      },
      error500: {
        path: '/api/v1/errors/500error"',
        verbs: {
          get: {
            host: 'localhost:9999'
          },
          post: {}
        }
      }
    },

    host: '',
    basepath: '',
    protocol: 'http',
    timeout: 0
  }),
  logConfig: () => ({
    logLevel: 'INFO'
  })
}

export { configMock }
