/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-dynamic-delete */
import React, { Fragment } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import { IShowReport } from './types'
// Recibe 2 params: la data y el i18n

const ShowReport: React.FC<IShowReport> = ({
  data,
  i18n
}) => {
  const useStyles = makeStyles((theme) => ({
    // margen: {
    //   margin: '15px 15px 0 0',
    //   '& tr,td,table': {
    //     border: 'none',
    //     marginLeft: 0,
    //     paddingLeft: 0,
    //     lineHeight: 1.8,
    //     fontSize: '18px',
    //     borderSpacing: 0,
    //     whiteSpace: 'nowrap'
    //   }
    // },
    // Clase para las tablas
    table: {
      border: '1px solid rgba(0,0,0,0.15)',
      width: '100%',
      background: '##eeeeee',
      color: 'grey',
      '& td': {
        padding: '2px',
        textAlign: 'justify',
        display: 'inline-grid',
        '& span': {
          // Nothing
        }
      },
      '& tr': {
        display: 'block'
        // border: '1px solid rgba(0,0,0,0.15)'
      }
    },
    // Esta clase es la de las claves que llevan un objeto y/o array como hijo
    header: {
      fontSize: '15px',
      fontWeight: 500,
      color: '#003b64',
      textTransform: 'uppercase'
    },
    // Esta clase es la de la td con los valores
    tdValue: {
      //
    },
    // Esta es la de las filas
    trElement: {
      width: '100%'
    },
    // Los valores de los span dentro de  las tds que muestran los valores
    labelStyle: {
      width: '11em',
      fontFamily: 'NeverMind',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#003b64',
      float: 'left',
      display: 'inline-block',
      alignSelf: 'flex-end',
      textTransform: 'none'
    },
    // Los inputs con los valores
    fieldStyle: {
      width: '100%',
      height: '1.3em',
      boxSizing: 'border-box',
      background: '#f9f9f9',
      border: 'solid 1px #eeeeee',
      color: '#666666',
      textDecoration: 'underline',
      textDecorationColor: '#ff9900'
    }
  })
  )

  const classes = useStyles()

  // Esta es una forma algo más precisa de saber que es realmente un objeto o array, similar al de js nativo pero exluyendo las funciones
  const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj: any) {
    return typeof obj
  } : function (obj: Symbol) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
  }

  // Esta función se le pasa al propio objeto con la data para eliminar los valores que queramos (string|null|\n)
  const removeFields = (obj: any): any => {
    Object.keys(obj).forEach(key => { // Iteramos sobre las claves / índeices de los objetos / arrays
      if (obj[key] !== null && typeof obj[key] === 'object') {
        if (Object.values(obj[key]).length === 0) delete obj[key] // Se borra la clave para que no muestre el campo vacío
        else removeFields(obj[key]) // Se llama de forma recursiva hasta que llega al valor
        return
      }
      if (_typeof(obj[key]) === 'string') { // Sólo si es de tipo string, podemos añadir booleanos y numéricos
        obj[key] = obj[key].replace(/string|null|\n/g, '')
      }
    })
    return obj
  }

  // Función que crea el componente tabla, que es el que devuelve luego el showReport
  const JSONtoHTML = (data: { [x: string]: any }): any => {
    // Función para las claves
    const cKey = (val: string, clase: string = null): any => {
      return (
        !/data|undefined|classname|payload/.test(val) && <span className={classes[clase]}>{
          i18n[`ShowReport:${val}`] ?? val
        }</span>)
    }
    // Función para los inputs
    const cInput = (value: string | number | readonly string[]): any =>
      <input
        type="text"
        className={(classes.fieldStyle)}
        value={value}
      />

    return (
      <table className={classes.table}>
        {
          Object.keys(data).map((k) => { // Itermanos sobre las claves del objeto. Si es un array, las claves serán los ínidices
            return <tr key={k} className={(classes.trElement)}> {/* Con cada clave, crreamos una fila */}
              {!Array.isArray(data) && _typeof(data[k]) !== 'object' &&
              <td className={classes.header}>{cKey(k, 'labelStyle')}</td>}  {/* Creamos una celda con la clave. Esta muestra un valor, no lleva arrays ni objetos */}
              {(data[k] && _typeof(data[k])) === 'object' // Vamos a mostrar los valores, pero miramos que exista y si es un objeto
                ? <td className={classes.header}><tr><td> {/* Lleva otros elelemntos, así que se pinta otra fila para que quede independiente */}
                  {!Array.isArray(data) && (cKey(k, 'header'))} {/* Sabemos que lleva elementos dentro, pero no queremos que nos pinte la clave de un array */}
                  {JSONtoHTML(data[k])}</td></tr></td> // Como es un objeto, vuelve a iterar sobre si misma para pintar el siguiente bucle */}
                : data[k] && <td className={classes.tdValue}>{cInput(data[k])}</td> } {/* Pintamos el valor final cuando la clave ya no lleva objetos ni arrays */}
            </tr>
          })
        }
      </table>
    )
  }

  // Código más limpio que fue rechazado
  //   return createElement(
  //     'div',
  //     { className: classes.container },
  //     createElement(
  //       'table',
  //       { className: classes.table },
  //       createElement(
  //         'tbody',
  //         { clasName: classes.tBody },
  //         Object.keys(data).map((k) => {
  //           return createElement(
  //             'tr',
  //             { key: k },
  //             !Array.isArray(data) && createElement(
  //               'td',
  //               { className: classes.index },
  //               /data|undefined|classname|payload/.test(k.toLowerCase().trim()) ? '' : createElement('span', null, i18n[`showReport:${k}`] ?? k)
  //             ),/ Itermanos sobre las claves del objeto. Si es un array, las claves serán los ínidices
  //             (function () {
  //               if (data[k] && _typeof(data[k]) === 'object') {
  //                 return createElement(
  //                   'td',
  //                   { className: classes.nTD },
  //                   createElement(JSONtoHTML, data[k])
  //                 )
  //               }
  //               return createElement(
  //                 'td',
  //                 { className: classes.data },
  //                 createElement('span', null, data[k])
  //               )
  //             }())
  //           )
  //         })
  //       )
  //     )
  //   )
  // }

  // Un simple render del componente creado con el HTMLtoJSON dentro de un wrapper
  return (
    <Fragment>
      <Card>
        <CardHeader title={i18n?.ShowReportTitle}></CardHeader>
        <CardContent>
          <JSONtoHTML data={removeFields(data.payload ?? {})} />
        </CardContent>
      </Card>
    </Fragment>
  )
}
export { ShowReport }
export type { IShowReport }
