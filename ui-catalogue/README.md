# Inicialización CESDATA-APP

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Distribución del proyecto](#Distribución-del-proyecto)
- [Patrones](#patrones)
- [WIP](#wip)
- [Como se usa](#como-se-usa)

<!-- /code_chunk_output -->






## Distribución del proyecto

Disponemos de la siguiente distribución de carpetas.

```
├── .storybook
├── component-templates
├── docs
└── src
    ├── assets
    │   ├── fonts
    │   ├── img
    │  
    ├── components
    |    ├── atoms
    |    ├── molecules
    |    ├── organisms
    |    ├── templates
    |
    ├── mocks
    |
    |
    ├── stories
    |    ├── atoms
    |    ├── molecules
    |    ├── organisms
    |    ├── templates
    |
    |
    ├── i18n.json 
    |
    |
    ├── ui
         ├── theme        
```
Comentaremos las más relevantes y el sentido que tienen.
* .storybook: Archivos de configuración general para el catálogo.
* component-templates: Templates para crear nuevos componentes, se explica en el apartado scaffolding de la documentación.
* docs: Documentación del cátalogo, la veremos al inicializar la aplicación.
* src: Código fuente del proyecto, aquí estarán nuestros componentes basados en el modelo de Atom Design. 
* .assets/fonts: Estáticos. Archivos para fuentes .ttf
* .assets/img: Estáticos. Archivos para imagenes
* .components: Carpeta padre para nuestro atom design
* .stories: Carpeta para las stories. Tiene la distribución atom desing
* .i18n.json: Objeto para literales.
* .ui/theme: Aquí es donde almacenaremos nuestro theme para los estilos. Contiene su [ThemeProvider](https://mui.com/styles/advanced/) configurado con el ThemeCESCE. En este último archivo es donde podremos configurar estilos globales y fuentes.

## Patrones

* Cada fichero de componente debe exponer mediante **named export** tanto el propio componente como la interfaz del mismo, la interfaz siempre será el nombre del componente precedido de una I latina en mayúscula

```typescript
export {MiComponente, IMiComponente}
```

* El componente exportado se tiene que llamar igual que el fichero que lo contiene

* Los componentes que internamente utilicen otros, y cuya complejidad del componente interno sea suficiente para agrupar los props que recibe en un objeto. El prop se llamará igual que el componente interno pero en minúscula y seguido del sufijo Props.

```typescript
const InternalComponent = ({prop1, prop2, prop3})=>/* ... */

const MyComponent = ({
  myComponentProp1,
  myComponentProp2,
  myComponentProp3,
  internalComponentProps  // <--
  }) => (
  <div>
    /**/
    <MyInternalComponent {...internalComponentProps} />
  </div>
)
```
* Las interfaces se definen de la siguient manera.


```typescript
interface Ii18nOtherData {
  'OtherData:title': string
  'OtherData:actividades': string
  'OtherData:telefono': string
  'OtherData:telefax': string
  'OtherData:telex': string
}

export interface IOtherDataRequestForm {
  actividades: string
  telefono: string
  telefax: string
  telex: string
}

export interface IOtherData {
  i18n: Ii18nOtherData
  data: IOtherDataRequestForm
}
```
* Cómo norma empezarán por I.
* Para los literales comienza con Ii18n seguido del nombre del componente.
* Para los datos comienza con I nombre del componente y finalizado en RequestForm.
 
## WIP

Se realizo una prueba de concepto para el visor pdf.

* WIP (Work in progress) : PDF Viewer (Prueba de concepto)

El Pdf viewer se ha realizado con la librería [react-pdf-viewer](https://react-pdf-viewer.dev/examples/use-the-default-button-to-list-the-document-properties)

Combinando los plugins de [Thumbnail](https://react-pdf-viewer.dev/plugins/thumbnail) y [Toolbar](https://react-pdf-viewer.dev/plugins/toolbar)

La forma de instalarlo esta en la [documentación](https://react-pdf-viewer.dev/docs)

Resumen:

Instalamos [pdfjs](https://github.com/mozilla/pdf.js) library:
```
npm install pdfjs-dist@2.6.347
```

Package.json quedaría asi:
```
{
    "dependencies": {
        "pdfjs-dist": "^2.6.347",
        ...
    }
}

```

[Uso básico](https://react-pdf-viewer.dev/docs/basic-usage)
```
import { Worker } from '@react-pdf-viewer/core';
.
.
.
<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
    <!-- The viewer component will be put here -->
    ...
</Worker>
```

Nosotros lo usaremos con autenticación, ejemplo:
```
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          fileUrl={fileUrl}
          plugins={[
            thumbnailPluginInstance,
            toolbarPluginInstance
          ]}
          httpHeaders={{
            Authorization: `Bearer ${accessToken}`
          }}
          withCredentials={true}
        />
      </Worker>
```

## Cómo se usa
* Inicializaremos nuestro storybook como cualquier aplicación simple npm.

```typescript
npm i
npm start
```
* Una vez se inicialice la aplicación en nuestro navegador. Dispondremos de nuestra documentación y nuestras stories.

```typescript
SIGAMOS NUESTRO RECORRIDO EN LA APLICACIÓN
```