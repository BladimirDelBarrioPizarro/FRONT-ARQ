<Meta title="Docs|arquitectura.00 Indice" />

# Indice

A continuación se detallan el uso de la arquitectura proporcionada.


- [Configuración](#configuración)
  - [Entornos de ejecución](#entornos-de-ejecución)
  - [endpointsConfig](#endpointsconfig)
    - [paths](#paths)
    - [host](#host)
    - [basepath](#basepath)
    - [protocol](#protocol)
  - [logConfig](#logconfig)


- [Inicialización y errores](#inicialización-y-errores)
  - [Errores](#errores)

- [Mediator](./src/mediator/README.md)
- [Facade](./src/facade/README.md)


## API de arquitectura disponible

[call API (Módulo comunicaciones)](./src/communications-module/README.md)

[lang API (Módulo internacionalización)](./src/i18n-module/README.md)

[config API (Módulo configuración)](./src/configuration-module/README.md)

[log API (Módulo trazabilidad)](./src/traceability-module/README.md)

## Configuración

La arquitectura espera un objeto de configuración que tiene la siguiente forma:

```typescript
{
  endpointsConfig: (ENV)=>({/* ... */}),
  logConfig: (ENV)=>({/* ... */}),
}
```

Observamos que cada clave es una función que acepta un único parametro y devuelve un objeto (que se detalla mas adelante).

Este único parametro de entrada es el entorno en que se está ejecutando la página, y que se resuelve en tiempo de ejecución.

La motivación de que sea una función es poder cambiar la configuración dependiendo del entorno, por ejemplo los endpoints variarán dependiendo de si estamos en desarrollo, preproducción y producción.

Será necesario que el entorno se encuentre disponible como variable de entorno de forma que pueda ser accedido en entorno nodejs.

Se acuerda que la variable de entorno será ENV de forma que pueda ser accedida por nodejs mediante process.env.ENV

### Entornos de ejecución

// TODO revisar si esto sigue siendo así

El entorno en que se está ejecutando la aplicación se evalúa en tiempo de ejecución, y puede ser uno de los siguientes:

* **DEV**: Entorno de desarrollo, correspondiente a las ramas de trabajo.
* **PRE**: Entorno de preproducción.
* **PRO**: Entorno productivo.

### endpointsConfig

// TODO revisar si esto sigue siendo así

Se trata del objeto de configuración para los endpoints de la aplicación

Vemos un ejemplo, y un uso rudimentario del parametro ENV, deberemos distinguir el retorno de la función según este parametro de Entorno.

```typescript
(ENV) => ({
    paths: {
      languages: {
        path: ENV === 'LOCAL' ? 'languages' : 'pro/languages',
        verbs: {
          get: {},
          post: {
            headers: { 'Content-Type': 'application/json' }
          },
          delete: {}
        }
      },
      configuration: {
        path: 'configuration',
        verbs: {
          get: {}
        }
      },
    },
    host: 'localhost:3003',
    basepath: '',
    protocol: 'http',
    logConfig: () => ({
      logLevel: 'INFO'
  })
})
```

Un ejemplo más completo de una posible configuración por entorno.

```typescript
import { ENVIRONMENTS } from './environments'

interface byEnvI {
  [key: string]: any
}

const byEnv: byEnvI = {
  [ENVIRONMENTS.DEV]: {
    host: "cesce-dev",
    basepath: "",
    protocol: "http",
    timeout: 0,
    auth: false,
  },
  [ENVIRONMENTS.PRE]: {
    host: "cesce-pre",
    basepath: "",
    protocol: "http",
    timeout: 50,
    auth: true,
  },
  [ENVIRONMENTS.PRO]: {
    host: "cesce-pro",
    basepath: "",
    protocol: "https",
    timeout: 50,
    auth: true,
  },
}

const endpointsConfig = (ENV) => ({
  paths: {
    languages: {
      path: 'languages',
      verbs: {
        get: {
        },
        post: {
          headers: { 'Content-Type': 'application/json' }
        },
        delete: {
        }
      }
    },
    configuration: {
      path: 'configuration',
      verbs: {
        get: {
        }
      }
    },
  },
  host: byEnv[ENV].host,
  basepath: byEnv[ENV].basepath,
  protocol: byEnv[ENV].protocol
})

export { endpointsConfig }
```

#### paths

Se espera un objeto como el siguiente ejemplo

```typescript
{
  "id1": {
    path: 'path1',
    post: {},
    get: {}
  },
  "id2": {
    path: 'path2',
    get: {},
    put: {}
  }
}
```

Cada clave del objeto corresponde a un ID que representa un endpoint. El path del endpoint se especifica en el parametro 'path' para cada endpoint.

Dentro de cada endpoint se especificarán los diferentes verbos a los que se puede llamar con ese endpoint.

Dentro de cada verbo podemos sobreescribir los parametros iniciales de configuración.

```typescript
    "id2": {
      path: 'path2',
      get: {
        auth: false
      },
      post: {
        "host": "otrodominio",
        "basepath": "v1",
        "protocol": "https"
      }
    }
  }
```


También dentro de cada verbo podemos indicar configuración que se aplicará a ese endpoint.

```typescript
    "id2": {
      path: 'path2',
      get: {
        auth: false,
        headers: {
          CUSTOM: 'custom header'
        }
      },
      post: {
        "host": "otrodominio",
        "basepath": "v1",
        "protocol": "https"
      }
    }
  }
```

#### host

Dominio sin protocolo, tipo

SI -- **mydomain.com**

NO -- http://mydomain.com

#### basepath

Si existe un basepath indicarlo en este parametro, se añadirá al domain, se debe indicar sin **/**

SI -- **api**

SI -- **v1**

NO -- /api

#### protocol

Protocolo que se utilizará en las llamadas, indicar sin **/**

SI -- **http**

SI -- **https**

NO -- /http


Dados por ejemplo:

```
host: mydomain.com
basepath: api
protocol: https

Tendríamos la URL : https://mydomain.com/api
```

```
host: mydomain.com
basepath:
protocol: http

Tendríamos la URL : http://mydomain.com
```

### logConfig

Se trata del objeto de configuración para el módulo de trazabilidad.

```typescript
const logConfig = () => ({
	// las opciones son
	// INFO | WARNING | ERROR
	logLevel: 'INFO'
})

export { logConfig }
```

Espera un único dato que se refiere al nivel de log, puede ser:

* INFO
* WARNING
* ERROR

Cáda uno de los niveles suprime los anteriores, nivel INFO loguea todo, nivel WARNING no loguea INFO y nivel ERROR loguea únicamente ERROR

## Inicialización y errores

La arquitectura debe iniciarse con el objeto de configuración que se comenta en el apartado configuración.
En este ejemplo el objeto recibiría los endpoints y el log.

```typescript
import initArq from '@cesce/arq'

import { arqConfig } from './config/arq-local-config'

const init = async () => {
  try {
    const apiArq = await initArq(arqConfig)

    console.log(apiArq)  // api disponible
  } catch (errors) {
    /* errors tiene esta forma
      [
        {
          target: 'comunication module',
          error: e
        }
      ]
    */
   console.log(errors)
  }
}
```
O con promesas

```typescript
import initArq from '@andbank-homebanking/arq'

import { arqConfig } from './config/arq-local-config'

initArq(arqConfig)
  .then(apiArq => {
    console.log(apiArq)  // api disponible
  })
  .catch(errors => {
    /* errors tiene esta forma
      [
        {
          target: 'comunication module',
          error: e
        }
      ]
    */
   console.log(errors)
  })
```

La inicialización de la arquitectura como vemos es asíncrona, la api la tenemos disponible despues de iniciarla. Sin embargo también se ofrece mediante `named exports` de la siguiente forma:

> Consultar el apartado de API

```typescrypt
import { call } from '@cesce/arq'
```

Debemos tener en cuenta que únicamente podremos utilizar la API de esta forma después de iniciar la arquitectura, por lo que si queremos utilizarla así deberemos importar con lazy load los archivos que queramos usar **despues** de iniciar la arquitectura, de está manera **no se evaluarán** las dependencias antes de cargar la arquitectura como en el siguiente ejemplo:

```typescript
const init = async () => {
  try {
    const apiArq = await initArq(arqConfig)

    // es necesario cargar la aplicación con lazy load para que
    // no se evalúen las dependencias antes de cargar la arquitectura
    const { App } = await import('./App')

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
  } catch (errors) {
    // ...
  }
}
```

### Errores

La arquitectura puede lanzar excepciones resultado de posibles fallos en su inicialización de los que no pueda recuperarse automáticamente.

Por ejemplo si el servicio de configuración no está disponible la arquitectura no puede inicializarse.

Estos errores deben ser tratados mediante `try cach` o en el `catch` de la promesa dependiendo de si la arquitectura se inicializa con `async await` o con una promesa.

En caso de lanzar una excepción, tendrá la siguiente forma:

```typescript
[
  {
    target: 'Artefacto que ha fallado',
    error: 'Información del error'
  }
]
```

**Otros errores genéricos que pueden devolver los servicios**

```
400 : bad request
500 : internal error
403: recurso no autorizado
413: Body to large (1mb)
429: Rate limit
```


