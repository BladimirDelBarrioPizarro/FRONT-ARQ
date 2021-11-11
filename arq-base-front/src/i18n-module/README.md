# i18n-module


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Introducción](#introducción)
- [API](#api)
  - [Promise = init({requestLang, availableLanguages, store?})](#promise-initrequestlang-availablelanguages-store)
    - [requestLang](#requestlang)
    - [availableLanguages](#availablelanguages)
    - [store](#store)
    - [Return](#return)
  - [Promise = changeLanguage(langCode)](#promise-changelanguagelangcode)
    - [langCode](#langcode)
    - [Return](#return-1)
  - [Json of languages](#json-of-languages)
    - [Objetivos](#objetivos)
    - [Como se usa](#como-se-usa)
- [Uso](#uso)
  - [lang](#lang)
    - [availableLanguages = Object](#availablelanguages-object)
    - [Object = currentLanguage()](#object-currentlanguage)
    - [Object = currentLangCode()](#object-currentlangcode)
    - [Promise = changeLanguage(langCode)](#promise-changelanguagelangcode-1)

<!-- /code_chunk_output -->

## Introducción

Este módulo se encargará de gestionar la petición de literales:

* Petición de los mimos
* Almacenamiento
* Disponibilización


## API

### Promise = init({requestLang, availableLanguages, store?})

El método init inicializa el módulo de literales, espera los siguientes parametros:

#### requestLang

Promise = requestLang(langCode)

Se trata de un función que espera como parametro un código de idioma según la ISO 639 Code (aa) o un código de idioma mas un código de cultura según la ISO 3166 (aa-AA)

Debe devolver una promesa que se resuelva con un objeto con los literales para el idioma requerido.

```typescript
// ejemplo de párametro requestLang
const requestLang = (langCode) => new Promise((resolve, reject)=>{
  // obtiene los literales de un servicio o similar
  // ...
  resolve(language)
})
```

#### availableLanguages

Se trata de un objeto que indica los idiomas que hay disponibles para la aplicación, debe tener la siguiente forma:

```typescript
{
  languageCode: {
    default: "cultura por defecto para el idioma",
    availables: ['idioma disponible 1']
  },
  default: {
    default: 'idioma por defecto'
  }
}
```

Un ejemplo:

```typescript
const availableLanguages = {
  es: {
    default: 'es-ES',
    availables: ['es-ES', 'es-AR']
  },
  en: {
    default: 'en-UK',
    availables: ['en-UK', 'en-US']
  },
  ar: {
    default: 'ar',
    availables: ['ar']
  },
  default: {
    default: 'es'
  }
}
```

El navegador puede tener registrado el idioma del usuario en los siguientes formatos:

aa : el código devuelto puede ser de tipo ISO 639 Code (dos letras minúsculas)

aa-AA: el código devuelto puede ser de tipo ISO 639-ISO 3166 (aa-AA) (lenguaje-CULTURA)

aa-aa: en SAFARI versión <10.2 el código de cultura aparece en minúscula (aa-aa)

null: El navegador no tiene registrado idioma de usuario

* Si el navegador devuelve `null` se utilizará el lenguaje indicado en `default.default`
* Si el navegador devuelve código de idioma únicamente (aa) se buscará en la clave de ese idioma (si existe) el lenguaje y cultura por defecto para ese idioma.
* Si el navegador devuelve idioma y cultura (aa-AA o aa-aa) se comprueba que esa combinación exista para ese idioma.
* En todos los casos se recurrirá al idioma por defecto si no encuentra opciones disponibles para el idioma indicado.

#### store

Se trata de un objeto **opcional** que permite indicar al módulo las herramientas para guardar y recuperar el código de idioma seleccionado por el usuario. De forma que si refresca la pantalla o vuelve a la página mas tarde se mantenga la preferencia de idioma.

Si no se indica este parametro no se guardará este dato entre sesiones.

Si se informa, este parametro debe ser de la siguiente forma:

```typescript
{
  get: función sin parametros que devuelve el código de idioma del usuario,
  put: función con único parametro **langCode** que almacena el código de lenguaje del usuario.
}
```

Junto al módulo se ofrece una implementación por defecto de este store que podemos obtener y utilizar de la siguiente forma:

```
import { pluginLocalStorage } from '../i18n-module'

const i18nApi = await i18nInit({
    requestLang,
    availableLanguages,
    store: pluginLocalStorage()
  })
```

`pluginLocalStorage(id:string)` acepta un único parametro de tipo String que corresponde a la clave que se utilizará en el localStorage para guardar el langCode.

#### Return

Este método devuelve una promesa que se resuelve con el siguiente objeto

```typescript
{
  langCode: Función que devuelve el código de idioma actual,
  language: Función que devuelve el lenguaje actual
}
```

### Promise = changeLanguage(langCode)

Este método intentará obtener el idioma indicado en el parametro langCode.

Usará el resto de parametros indicados en el método init para obtener el lenguaje adecuado.

#### langCode

Código de idioma en formato ISO 639 Code (dos letras minúsculas) o formato ISO 639-ISO 3166 (aa-AA)

#### Return

Devuelve una promesa que se resuelve con el objeto de literales del idioma obtenido.

### Json of languages


#### Objetivos

Proveerá a los módulos de los datos necesarios de literales.

#### Como se usa

El estático languages expone un método por defecto, asíncrono, que al completarse devuelve un JSON con todos los idomas completos.

```javascript
const languagesI18n = {
  "es-ES": {
    data: require('./i18n/es-ES/language.json')
  },
  "en-UK": {
    data: require('./i18n/en-UK/language.json')
  },
  "en-US": {
    data: require('./i18n/en-US/language.json')
  }
}

export { languagesI18n }
```

## Uso

### lang

```typescript
import { lang } from '@andbank-homebanking/arq'
```

**lang** es un objeto con las siguientes claves

```typescript
{
  availableLanguages,
  currentLanguage,
  currentLangCode,
  changeLanguage
}
```

#### availableLanguages = Object

```typescript
lang.availableLanguages
```

Se trata de un objeto de la siguiente forma:

```typescript
{
  "es": {
    "default": "es-ES",
    "availables": [
      "es-ES"
    ]
  },
  "en": {
    "default": "en-UK",
    "availables": [
      "en-UK",
      "en-US"
    ]
  },
  "ar": {
    "default": "ar",
    "availables": []
  },
  "default": {
    "default": "es"
  }
}
```

Este objeto indica los idiomas disponibles, las culturas que hay disponibles para ese idioma así como la cultura por defecto para el idioma, que se usará si no se encuentra la cultura buscada (o no se indica).

La clave default.default indica el código de idioma por defecto.

#### Object = currentLanguage()

```typescript
lang.currentLanguage
```

|                        |    |
|------------------------|----|
| Asíncrono              | NO |
| Puede lanzar excepción | NO |

Se trata de una función que devuelve la traducción para el idioma actual

#### Object = currentLangCode()

```typescript
lang.currentLangCode
```

|                        |    |
|------------------------|----|
| Asíncrono              | NO |
| Puede lanzar excepción | NO |

Obtiene el código de idioma (o idioma y cultura) que se está usando en este momento.

#### Promise = changeLanguage(langCode)

```typescript
lang.changeLanguage
```

**No debemos usar esta función**

Se delega este acción a i18next, en cambio cuando queramos cambiar de idioma debemos utilizar la funcionalidad que se implementa en la propia aplicación en el archivo `src/.../i18next-config.ts` que expone una función llamada `i18nextChangeLanguage`

Debemos utilizar esta función para cambiar el idioma, el único parámetro que espera es un código de idioma

```typescript
i18nextChangeLanguage(langCode)
```

|                        |    |
|------------------------|----|
| Asíncrono              | SI |
| Puede lanzar excepción | SI |


[<-- volver](../../README.md)