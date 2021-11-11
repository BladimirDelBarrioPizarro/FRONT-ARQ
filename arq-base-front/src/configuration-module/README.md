# Configuration-module

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [API](#api)
    - [Promise = init(requestConfig)](#promise-initrequestconfig)
    - [Object = getConfig(key?)](#object-getconfigkey)
    - [Object = getRemoteConfig()](#object-getremoteconfig)
    - [Object = getConfigByTime({ time } = { time: config.configRequestTime )](#object-getconfigbytime-time-time-configconfigrequesttime)
  - [Object = cancelGetConfigByTime()](#object-cancelgetconfigbytime)
- [Uso](#uso)
  - [config](#config)

<!-- /code_chunk_output -->

## API

#### Promise = init(requestConfig)

El modulo de configuración expone una función de inicialización asíncrona que espera un único parametro, que es una función asíncrona que se resuelve con el objeto de configuración.

```typescript
const configurationApi = await configInit(requestConfig)
```

A modo de ejemplo, el parametro requestConfig podría tener la siguiente forma

```typescript
const requestConfig = () => new Promise((resolve, reject) => {
  fetch('http://midominio.es/configuration', requestOptions)
    .then(response => response.text())
    .then(result => resolve(result))
    .catch(error => reject(error))
})

const configurationApi = await configInit(requestConfig)
```

El API devuelto por la función init es el siguiente

#### Object = getConfig(key?)

Se trata de una función que acepta un parametro opcional `key`

Si se indica este parametro se devolverá la configuración correspondiente a la clave indicada, en caso de no existir esa clave se devolverá `null`

Si no se indica el parametro `key` se devolverá el objeto de configuración completo.

#### Object = getRemoteConfig()

Volverá a llamar a la función correspondiente del parametro de inicialización `requestConfig` sustituyendo los datos actuales de configuración por los obtenidos nuevamente.

Devuelve los datos obtenidos de la función [requestConfig]([Promise = init(requestConfig)](#promise-initrequestconfig))

#### Object = getConfigByTime({ time } = { time: config.configRequestTime )

Función que nos devuelve la configuración cada cierto intervalo de tiempo.

Se trata de una función que trata el parámetro time el cual nos indica cada cuanto tiempo debemos pedir la configuración.

El parámetro time nos vendrá inferido por el servidor. Al ejecutar la función getRemoteConfig nos vendra implicito.

Inicialmente se ha propuesto este formato.
```
{
  "configuration": {
    "configRequestTime": 3000
  }
}
```
### Object = cancelGetConfigByTime()

Función que nos cancela la solicitud de la configuración cada cierto tiempo.

Utilizamos el método clearInterval el cual borra un temporizador configurado por el método setTimeout().

El valor de ID devuelto por setTimeout() se utiliza como parámetro para el método clearInterval().

Dicho parámetro se ha expuesto como una variable global.

## Uso

### config

```typescript
import { config } from '@andbank-homebanking/arq'
```

Se trata de un objeto que contiene toda la configuración obtenida  durante la inicialización de la arquitectura

```typescript
{
  getConfig,  
  getRemoteConfig,
  getConfigByTime,
  cancelGetConfigByTime
}
```

[<-- volver](../../README.md)