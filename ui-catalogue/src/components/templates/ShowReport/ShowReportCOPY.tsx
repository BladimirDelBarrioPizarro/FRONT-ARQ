/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-dynamic-delete */
import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'

export interface IShowReport {
  data: any
  i18n: any
}

const ShowReport: any = ({ data, i18n }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      table: {
        border: '1px solid #003b64',
        width: '100%',
        background: '##eeeeee',
        margin: '5px 5px 14px 5px',
        color: 'grey',
        padding: '0 8px 0 0',
        '& td': {
          padding: '0 0.75rem 0 0',
          verticalAlign: 'middle',
          textAlign: 'justify',
          '& span': {
            padding: '2px 0 2px 6px'
          }
        }
      },
      container: {
        marginTop: '16px'
      },
      nTD: {
        paddingBottom: '0.75rem'
      },
      index: {
        fontWeight: 600,
        whiteSpace: 'nowrap'
      },
      data: {
        margin: '0.3rem',
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: '#ff9900'
      },
      tBody: {
        paddingTop: '5px'
      }
    })
  )

  data = {
    payload: [
      {
        informeCreica: {
          remitente: 'EXPERIAN ESP',
          fechamensaje: 20210225,
          tipdoc: '10',
          numpeticion: 28000323,
          fec: 20210225,
          fecenvio: 20210225,
          identificacion: {
            deudor: {
              iden: {
                tipiden: 'VAT',
                codiden: 'A28017895'
              }
            }
          },
          moneda: 'EUR',
          protestosdemandasimpagos: {
            protestodemandaimpago: {
              tipincidencia: 'INFORMACION RAI',
              fecincidencia: 0,
              numincidencias: '0',
              impincidencias: 0
            }
          },
          datoshost: {
            codcorresponsal: 11679,
            codproducto: '22',
            codempresa: 28000323,
            tipocorresponsal: '2',
            tipodocumento: '10',
            numinforme: 'P',
            nummovimient: '0',
            origen: '1',
            indinformeref: '1',
            tipfichero: 'IRQ',
            indultinforme: 'SI'
          }
        },
        informeExterno: null,
        informeCesceDgx: null
      }
    ],
    codigo: 200,
    mensaje: 'OK',
    tipo: 'OK',
    totalPaginas: null,
    totalRegistros: null,
    paginaActual: null
  }

  const classes = useStyles()

  const deepIterObj = (obj: any): any => {
    Object.keys(obj).forEach(key => {
      if (obj[key] !== null && typeof obj[key] === 'object') {
        if (Object.values(obj[key]).length === 0) delete obj[key]
        else deepIterObj(obj[key])
        return
      }
      if (typeof obj[key] === 'string') {
        obj[key] = obj[key].replace(/string|null|\n/g, 'Enter text here!')
      }
    })
    return obj
  }

  const _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj
  } : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
  }

  // eslint-disable-next-line no-console
  console.log(i18n)

  const mColumns = []
  const mData = []
  const mOptions = {
    selectableRows: 'none',
    filter: false,
    download: false,
    print: false,
    viewColumns: false,
    serverSide: false,
    pagination: false,
    search: false
  }

  const mTable = (key: string | number) => {
    console.log('\nCurrent table key => ', key)
    return (
      <MUIDataTable
        data={[]}
        columns={[]}
        options={mOptions}
      />
    )
  }

  const CreateTable = (data: { [x: string]: any }, index: string | number): any => {
    return (
      <div>
        { mTable(index) }
        { Object.keys(data).map((k) => {
          console.log(mColumns, mData)
          console.log(k, `(${_typeof(data[k])})`, data[k])
          mData.push(data[k])
          if (data[k] && _typeof(data[k]) === 'object') {
            console.log('\nNew Table: index[ ', k, ']')
            return CreateTable(data[k], k)
          } else if (data[k] && !Array.isArray(data)) {
            console.log('Show key => ', k, ' (', i18n[`showReport:${k}`], ')')
            mColumns.push({ name: k })
            console.log('Show value => ', data[k])
          } else {
            console.log('\n That`s all, my friend..., (null field) ')
          }
          console.log('\n --------------------------->> ')
        })
        }</div>)

    // return createElement(
    //   'div',
    //   { className: classes.container },
    //   createElement(
    //     'table',
    //     { className: classes.table },
    //     createElement(
    //       'tbody',
    //       { clasName: classes.tBody },
    //       Object.keys(data).map((k) => {
    //         return createElement(
    //           'tr',
    //           { key: k },
    //           !Array.isArray(data) && createElement(
    //             'td',
    //             { className: classes.index },
    //             /data|undefined|classname|payload|[0-9]/.test(k.toLowerCase().trim()) ? '' : createElement('span', null, i18n[`showReport:${k}`] ?? k)
    //           ),
    //           (function () {
    //             if (data[k] && _typeof(data[k]) === 'object') {
    //               return createElement(
    //                 'td',
    //                 { className: classes.nTD },
    //                 createElement(CreateTable, data[k])
    //               )
    //             }
    //             return createElement(
    //               'td',
    //               { className: classes.data },
    //               createElement('span', null, data[k])
    //             )
    //           }())
    //         )
    //       })
    //     )
    //   )
    // )
  }

  // const CreateTable = (data: { [x: string]: any }): any => {
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
  //               /data|undefined|classname|payload|[0-9]/.test(k.toLowerCase().trim()) ? '' : createElement('span', null, i18n[`showReport:${k}`] ?? k)
  //             ),
  //             (function () {
  //               if (data[k] && _typeof(data[k]) === 'object') {
  //                 return createElement(
  //                   'td',
  //                   { className: classes.nTD },
  //                   createElement(CreateTable, data[k])
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

  return (
    <div className={classes.container}>
      <CreateTable data={deepIterObj(data.payload)} className={classes.table} />
    </div>
  )
}

export default ShowReport
