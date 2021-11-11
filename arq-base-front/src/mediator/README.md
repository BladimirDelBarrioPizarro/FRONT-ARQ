# Mediador

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Objetivos](#objetivos)
- [Como se usa](#como-se-usa)

<!-- /code_chunk_output -->


## Objetivos

Este artefacto será el encargado de iniciar los módulos, gestionar los errores no controlados de los mismos producto de la inicialización, proveerá a los módulos de los parámetros necesarios y expondrá a la fachada la api de arquitectura.

## Como se usa

El artefacto mediador expone un método por defecto, asíncrono, que al completarse devuelve la API de los módulos de arquitectura iniciados.

```javascript
import initArq from './mediador'

initArq()
  .then((api) => {
    // aquí ya podemos usar la API de arquitectura
    api.logger.info('Mensaje info')
  }).catch(err => {
    console.log(err)
  })
```

[<-- volver](../../README.md)