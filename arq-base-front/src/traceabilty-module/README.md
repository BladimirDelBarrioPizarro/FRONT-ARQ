# Logger

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Objetivos](#objetivos)
- [Como se inicializa](#como-se-inicializa)
- [Configuración](#configuración)
- [API](#api)
- [Uso en la aplicación](#uso-en-la-aplicación)
  - [log](#log)

<!-- /code_chunk_output -->


## Objetivos

Este módulo será el encargado de procesar y enviar los logs a la salida configurada (servicio, consola)

## Como se inicializa

```javascript
import initLogger from './logger'

initLogger(config)
  .then(logger => {
    // aquí ya podemos utilizar la API de logger
    logger.info('mensaje de información')
  })
  .catch(err => {
    console.log(err)
  })
```

## Configuración

Se expone la interfaz `Iinit` para poder configurar correctamente los parametros que espera este módulo.

```typescript
interface Iinit {
  level?: Tlevel
  levels?: string[]
  logsHandler?: TlogHandler
  logDecorator?: TlogDecorator
  levelsPriority?: IlevelsPriority
  sendInmediately?: string[]
  capacity?: number
  interval?: number
}
```

**level**

Valor por defecto:

```javascript
() => 'INFO'
```

Descripción:

Debe ser una función que devuelva el nivel de log deseado, **los logs por debajo de ese nivel no serán procesados**.

Este parametro se puede cambiar en caliente si el valor devuelto por la función cambia.

**levels**

Valor por defecto:

```javascript
[
  'INFO',
  'WARNING',
  'ERROR'
]
```

Informa de todos los niveles de log que queremos tener. Obtendremos una función por cada nivel informado (`log.info`, `log.warning`, `log.error`, etc)

**levelsPriority**

Valor por defecto:

```javascript
{
  INFO: 2,
  WARNING: 1,
  ERROR: 0
}
```

Informa la prioridad de cada nivel de log.

La prioridad debe ser un numero descendente siendo el numero mas alto el nivel de menor prioridad, y el numero menor el nivel de mayor prioridad.

**sendInmediately**

Valor por defecto:

```javascript
[]
```

Se trata de un array que informa de los niveles de log que no deben ser acumulados y se deben procesar directamente.

Su uso es por si queremos procesar de inmediato determinados niveles de log, como por ejemplo `ERROR` o `FATAL`

Ejemplo:

```javascript
['ERROR', 'FATAL']
```

**capacity**

Valor por defecto:

```javascript
0
```

Es un numero que indica cuantos logs se deben acumular antes de procesarlos. Normalmente no querremos enviar a un servicio log por log sino por paquetes.

Un valor de `0` indica que no se acumularán los logs.

Los logs se procesarán una vez superado el valor informado en este parametro.

**interval**

Valor por defecto:

```javascript
0
```

Es un numero que indica (en milisegundos) cada cuanto tiempo se procesarán los logs.

Este dato se informa para que los logs se procesen cada cierto tiempo independientemente de si han superado el valor de `capacity` o no.

Un valor de `0` indica que los los no se procesarán por tiempo.

Ejemplo:

```javascript
1000 * 60 * 2   // cada 2 minutos
```

**logDecorator**

Valor por defecto:

```javascript
log => log
```

Se trata de una función que nos permite tratar cada log en el momento en que se usa uno de los metodos proporcionados. De esta forma podemos dar formato o agregar elementos al log, por ejemplo la fecha.

La función recibirá como parámetro un objeto

```javascript
{
  logArgs: [/* array con argumentos pasados al métodos de log utilizado */],
  logLevel: 'Nivel del log que se va a decorar'
}
```

Ejemplo 1:

```javascript
const myLogDecorator = ({
  logArgs,
  logLevel
}) => {
  return {
    data: logArgs[0],
    level: logLevel,
    date: new Date()
  }
}

// así, si usamos por ejemplo
log.info('log de información')

// el resultado de myLogDecorator sería
{
  data: 'log de información',
  level: 'INFO',
  date: 'Fri Oct 02 2020 11:54:04 GMT+0200'
}
```

Ejemplo 2:

El decorador puede ser como queramos dependiendo de como vayamos a usar los logs

```javascript
const myLogDecorator = ({
  logArgs,
  logLevel
}) => {
  return {
    data: logArgs[0],
    metaData: logArgs[1]
    level: logLevel,
    date: new Date()
  }
}

// así, si usamos por ejemplo
log.warning('Elemento mal informado', {
  page: 'Informe SEPA'
})

// el resultado de myLogDecorator sería
{
  data: 'Elemento mal informado',
  metaData: {
    page: 'Informe SEPA'
  },
  level: 'WARNING',
  date: 'Fri Oct 02 2020 11:54:04 GMT+0200'
}
```

**logsHandler**

Valor por defecto:

```javascript
(logs) => {
  logs.forEach(log => {
    console.log(log)
  })
}
```

Función que recibirá un array de logs al superar el valor informado en `capacity` o cuando se supere el tiempo informado en `interval`

Cada log del array habrá sido decorado en el momento de su uso si se informó el parametro `logDecorator`

Debemos procesar este array de logs, normalmente querremos enviarlo a un servicio aunque dependerá de cada caso.

Ejemplo:

```javascript
const myLogsHandler = (logs) => {
  fetch('http://mi-servicio', {
    method: 'POST',
    body: logs
  })
  .then(/* ... */)
  .catch(/* ... */)
}
```

## API

Se obtendrán tantos métodos como elementos del array informado en el parámetro `levels`

Por defecto si no informamos este parametro tendremos la siguiente API:

```javascript
.info(any)
.warn(any)
.error(any)
```

Si por ejemplo informamos el parametro `levels` con `['TRACE', 'INFO', 'WARNING', 'ERROR', 'FATAL']`

Obtendremos la siguiente API:

```javascript
.trace(any)
.info(any)
.warning(any)
.error(any)
.fatal(any)
```

**Los parametros que espera cada método dependerán del objeto de configuración __logDecorator__ que hayamos indicado**

## Uso en la aplicación

### log

```typescript
import { log } from '@cesce/arq'
```

Este clave expone varios métodos con los que podemos trazar la información que queramos.


[<-- volver](../../README.md)