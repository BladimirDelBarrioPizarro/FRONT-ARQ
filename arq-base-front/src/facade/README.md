# Fachada

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Objetivos](#objetivos)
- [Como se usa](#como-se-usa)

<!-- /code_chunk_output -->

## Objetivos

Este artefacto se encuentra entre la aplicación y la arquitectura, su funciones son:

* Disponibilizar a la aplicación la API de arquitectura que necesite utilizar.
* Centralizará los posibles cambios que existan en arquitectura de forma que el impacto sea menor en la aplicación.

## Como se usa

El artefacto mediador expone un método por defecto, asíncrono, que al completarse da por iniciada la arquitectura.

```javascript
import facadeInit from '../src/facade'

export default () => {
  facadeInit()
    .then((apiArq) => {
      apiArq.log.error('mensaje de error')
      apiArq.log.warn('mensaje de alerta')
      apiArq.log.warn({
        msg: 'alerta!'
      })
      apiArq.log.info('mensaje de información')
    })
    .catch(err => {
      console.log(err)
    })
}
```

Para que no sea necesario que cada vez que se quiera usar la API proporcionada la funcionalidad deba estar bajo una función async o una promesa la API estará expuesta de forma independiente, eso si, primero habrá que inicializar la fachada. Veamos el siguiente ejemplo:

```typescript
import facadeInit from '../src/facade'
// importamos la API que queramos utilizar
import { log } from '../src/facade'

export default () => {
  facadeInit()
    .then(() => {
      // en este punto ya está iniciada la arquitectura
      // y podemos utilizar la API
      log.error('mensaje de error')
      log.warn('mensaje de alerta')
      log.warn({
        msg: 'alerta!'
      })
      log.info('mensaje de información')
    })
    .catch(err => {
      console.log(err)
    })
}
```

Debemos asegurarnos que se ha iniciado la fachada antes de utilizar la API por separado, para asegurar esto podemos retrasar la importación de los archivos que vayan a usar esta API, por ejemplo con Webpack, como vemos en el siguiente ejemplo:

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import initArq from './and-arq'

const init = async ()=>{
  await initArq()
  // es necesario cargar la aplicación con lazy load
  // para que no se evalúen las
  // dependencias antes de cargar la arquitectura
  const { default: App } = await import(/* webpackChunkName: "App" */ './App');

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

init()
```

En el ejemplo anterior vemos que se utiliza `await import` de [webpack](https://webpack.js.org/guides/code-splitting/#dynamic-imports) cuando ya tenemos iniciada la arquitectura, posibilitando así que la aplicación utilice la API sin preocuparse de la inicialización asíncrona de la misma.

[<-- volver](../../README.md)