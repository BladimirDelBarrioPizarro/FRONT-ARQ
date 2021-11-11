# Comunication module

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Introducción](#introducción)
- [API](#api)
  - [Promise = init({paths, host?, basepath?, protocol?, timeout?})](#promise-initpaths-host-basepath-protocol-timeout)
      - [paths](#paths)

<!-- /code_chunk_output -->

## Introducción

Este módulo se encargará de gestionar la comunicación con los servicios.

Ejemplo de inicialización:

```typescript
import ComunicationsInit from '../src/comunication-module'

const configObjExample = {
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
  protocol: 'http'
}

const start = async () => {
  const call = await ComunicationsInit(configObjExample)
}

start()
```

## API

### Promise = init({paths, host?, basepath?, protocol?, timeout?})

| Nombre parametro | Requerido | Concepto                                                        | Valor por defecto      |
|------------------|-----------|-----------------------------------------------------------------|------------------------|
| paths            | SI        | Objeto de definición de los endpoints                           | NO                     |
| host             | NO        | Host que se utilizará en las peticiones (midominio.com)         | dominio de la pagina   |
| basepath         | NO        | Basepath que se utilizará en las peticiones (por ejemplo "api") | Vacío                  |
| protocol         | NO        | Protocolo que se usará en las peticiones (http)                 | protocolo de la página |


##### paths

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

También dentro de cada verbo podemos indicar configuración que se aplicará a ese endpoint, se trata de la misma configuración que acepta AXIOS, por ejemplo

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
        "protocol": "https" call } from '@cesce/arq'

Dominio sin protocolo, tipo

SI -- **mydomain.com**
NO -- http://mydomain.com

##### basepath

Si existe un basepath indicarlo en este parametro, se añadirá al domain, se debe indicar sin **/**

SI -- **api**
SI -- **v1**
NO -- /api

##### protocol

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
## Uso

### call

##### Promise = call(params)

```typescript
import { call } from '@cesce/arq'
```

|                        |    |
|------------------------|----|
| Asíncrono              | SI |
| Puede lanzar excepción | SI |

Esté módulo ofrece un wrapper de la librería [AXIOS](https://github.com/axios/axios), esta función en concreto es la misma que la función `axios.request` pero a la que se le pasan los datos con los que se han inicializado el módulo (host, timeout, etc)

Sin embargo podemos sobreescribir estos datos en los parametros de entrada, se acepta el siguiente objeto de configuración [axios.request](https://github.com/axios/axios#request-config)

> Debemos tener en cuenta que si queremos sobreescribir alguno de los parámetros generales, deberemos hacerlo explicitamente, aunque sea para pasar un valor vacío. Por ejemplo {basepath : ''}

La promesa devuelta es de tipo axios, que podemos ver [aquí](https://github.com/axios/axios#response-schema)

```typescript
call(requestObj)
  .then(result=>{
    // ...
  })
  .catch(err => {
    // ...
  })
```

##### Promise = call.api[endpoint][verb](data, reqObj?)

|                        |    |
|------------------------|----|
| Asíncrono              | SI |
| Puede lanzar excepción | SI |

Se trata de un objeto que contendrá todos los paths indicados en el parametro path de inicialización la arquitectura ([paths](#paths))

Por ejemplo si el parametro era tal que así:

```typescript
{
  'mascota': {
    path: 'pet'
    post: {},
    get: {}
  }
}
```
tendremos disponibles las siguientes funciones

```typescript
call.api.mascota.post
call.api.mascota.get
```

Estas funciones aceptan dos parametros de entrada, un objeto **data** que será los datos a envíar a ese endpoint

```typescript
call.api.mascota.post({
  param1: 'foo',
  param2: 'bar'
})
  .then(result => {
    // ...
  })
  .catch(err => {
    // ...
  })

// o con async await
try{
  const result = await call.api.pet.post({
    param1: 'foo',
    param2: 'bar'
  })
} catch(e){
  // ...
}
```

Y un segundo objeto opcional **reqObj**, que sobreescribirá los parametros con los que se inicializó el módulo, y permite personalizar la llamada al servicio. Este objeto acepta los mismos parametros que un petición [Axios](https://github.com/axios/axios#request-config)

```typescript
const result = await call.api.pet.post({
  param1: 'foo',
  param2: 'bar'
  },
  {
    url: '/user',
    baseURL: 'https://some-domain.com/api/',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    /* ... */
  })
```

La promesa devuelta es de tipo Axios, que podemos ver [aquí](https://github.com/axios/axios#response-schema)

Por último, los datos de la petición calculados a partir de los datos iniciales los podemos encontrar para cada verbo en **call.api[endpoint][verb].requestConfig**

```typescript
call.api.mascota.post.requestConfig
```

## Autenticación

El módulo de comunicaciones queda recubierto por el módulo de autenticación. 
La inicialización del módulo de autenticación la hacemos en nuestro cliente http.
Desde nuestro archivo axios.ts mediante un interceptor recubrimos el servicio con el token y hacemos uso de dicho interceptor para pedir un nuevo access_token en base al refresh_token obtenido anteriormente.
El interceptor nos automatiza el proceso para volver a hacer la llamada que fallo en base a un código de estado 401 y al mensaje "invalid_token"
proporcionado por el servicio back-end. 


[<-- volver](../../README.md)