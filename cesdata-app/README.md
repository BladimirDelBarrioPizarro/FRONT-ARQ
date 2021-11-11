# Inicialización CESDATA-APP

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Objetivos](#objetivos)
- [Como se usa](#como-se-usa)
- [Distribución del proyecto](#Distribución-del-proyecto)

<!-- /code_chunk_output -->

## Objetivos

Para la fecha de la creación de esta documentación, cesdata-app cuenta con dos librerias externas que son: @cesce/arq y @cesce/ui-catalogue.
Estas dependencias, deben ser construidas y publicadas en un registry, pero actualmente no disponemos de uno, por lo tanto para poder instalar estas dependencias en nuestro entorno de desarrollo debemos instalar una herramienta llamada verdaccio, esta herramienta nos permitira tener un registy de npm en nuestro ordenador local.

Para instalar verdaccio podemos ejecutar el siguiente comando en una terminal:


```javascript
npm install --global verdaccio
```
Lo ejecutamos con el siguiente comando en una terminal:

```javascript
verdaccio
```

Para que nuestro registry apunte a nuestro servidor local adjuntaremos al proyecto un archico .npmrc en el que indicaremos que apunte a verdaccio.

```javascript
registry=http://localhost:4873/
#registry=https://celiap63.cesce.grupo.loc:8081/repository/npm-group 
```
Se observa que el registry del cliente esta comentado. De la manera inversa nos descargariamos las dependencias del Nexus del cliente y así podríamos ver lo que posee en su entorno.

## Como se usa

Con el servidor de verdaccio levantado, vamos al nuestro proyecto  @cesce/arq [puedes clonarlo aquí](https://celiap61.cesce.grupo.loc:7443/microservicios/arquitectura/frontend/arq-base-front)  y ejecutamos los siguientes comandos en una terminal:


```javascript
npm i
npm run build
npm publish --registry http://localhost:4873 // verdaccio debe estar levantado
```

Si tenemos algun error en la publicación porque ya existia una version publicada, debemos publicarlo de la siguiente manera aunque NO es lo recomendable:

```javascript
npm publish --registry http://localhost:4873 --force
npm publish --registry http://localhost:4873 --force
```
Si incrementamos la versión no necesitariamos hacer --force

Se recomienda hacer una instalación limpia. 
En linux las dependencias de verdaccio se almacenan en  /home/nombreUsuario/.local/share/verdaccio/storage
Podemos eliminar el contenido y hacer una instalación limpia.

```javascript
cd /home/nombreUsuario/.local/share/verdaccio/storage
rm -r @cesce
```


Para construir y publicar el catalogo de componentes [puedes clonarlo aquí](https://celiap61.cesce.grupo.loc:7443/microservicios/desarrollo/cesdata/frontend/ui-catalogue) hacemos el mismo procedimiento salvo por alguna variación.


```javascript
npm i
npm run build:lib
npm publish --registry http://localhost:4873 // verdaccio debe estar
```

Se introduce build:lib para que no se construyan los tipos de typescript. 
Se recomienda mirar el package.json y ver los scripts.

Una vez construidas y publicadas las dependencias de arquitectura podemos instalar e inicializar. 

```javascript
npm i
npm start
```

## Distribución del proyecto

Disponemos de la siguiente distribución de carpetas.

```
├── build
├── mock-api
├── node_modules
├── reports
└── src
    ├── config
    │   ├── arq-local-config
    │   ├── constantes
    │   ├── endpoints
    │   ├── error-config
    │   └── log
    |   └── pageUtilities 
    |    
    ├── features
    │   └── MetaBaseReport
        |     ├── MetaBaseReport
        |     ├── ducks 
    |   └── Meta ...
    |   └── Meta ... 
    └── formUtils
    |   └── ...
    ├── pages
    |    ├── DashboardContent
    |    ├── DashboardFooter
    |    ├── DashboardMenu
    |    ├── Dashboard
    |
    ├── store
    |     ├── enhancer
    |     ├── middleware   
    |     ├── store
    |
    |
    ├── utils
         ├── i18next-config
         ├── App
         ├── index  
             
```
Comentaremos las más relevantes y el sentido que tienen.

* .mock-api: Se añadio una instancia de express cuando no se disponían de servicios para simular la entrada de datos. Está carpeta se podrá eliminar a futuro.
* .src/config: Archivos necesarios para la inicialización del proyecto. Dependientes del módulo de arquitectura. Incluye archivos como constantes y pageUtilities (funciones genéricas) que no son necesarios para la inicialización del proyecto. Se debera buscar una mejor ubicación para ellos.
* .features: Cada template del catálogo tiene su envoltura Meta y su archivo [redux-ducks](https://github.com/erikras/ducks-modular-redux) correspondiente. 
* .formUtils: Carpeta dummy para pruebas de concepto para acelerar el desarrollo en determinadas casuísticas. Se deberá eliminar.
* .pages: Se creo esta carpeta para mostrar el escritorio inicial. En su mayoría son estáticos.
   DashboardContent hace uso de react-router-dom para redirigir hacia el contenido requierido. 
   DashboardFooter es un estático que representa el pie de página.
   DashboardMenu hace una lectura del token y de está forma gestionamos las entradas del usuario a las páginas donde tenga permisos y formamos las "migas de pan" del menu horizontal.
   Dashboard es el componente padre donde construimos el escritorio mediante los componentes descritos anteriormente.
* .store: Configuración del store de redux.
* .utils: Carpeta necesaria para la inicialización
   utils/i18next-config: Archivo necesario para el módulo de literales.
   utils/App: En este archivo se recibe una instancia de todos los módulos de arquitectura para comprobar que se inicializan bien.Dispone de un ErrorBoundary para gestionar errores mediante un mensaje y se declaran Routes necesarios. También se generan ids para las clases css envolviendo toda la aplicación en ellos.   
   utils/index: Inicialización de la carga de la aplicación mediante [lazy load](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading) para que no se evaluen las dependencias antes de cargar la arquitectura. Mediante el dom hay una pequeña configuración para Googler Analitics.
   También disponemos del Provider de redux y una pequeña función para pintar errores. 


[<-- volver](../../README.md)

