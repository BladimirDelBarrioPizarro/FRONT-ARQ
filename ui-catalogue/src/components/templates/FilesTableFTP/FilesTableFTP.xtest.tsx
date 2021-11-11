// import React from 'react'
// import { render } from '@testing-library/react'

// import { FilesTableFTP } from './FilesTable'

// test('Render Test', () => {
//   const staggedFiles = [
//     {
//       error: false,
//       name: 'archivo 1',
//       size: 123,
//       type: '.csv',
//       message: 'erer'
//     },
//     {
//       error: true,
//       name: 'archivo 2',
//       size: 0,
//       type: '.txt',
//       message: 'error formato'
//     }
//   ]

//   const handleChange = jest.fn()
//   const handleSendFiles = jest.fn()
//   const handleCancelFiles = jest.fn()
//   const handleDeleteFile = jest.fn()
//   const inputRef = null
//   const data: Array<object | number[] | string[]> = staggedFiles
//   const country = [
//     {
//       value: '1',
//       label: 'ESP'
//     },
//     {
//       value: '2',
//       label: 'ENG'
//     },
//     {
//       value: '3',
//       label: 'POR'
//     },
//     {
//       value: '4',
//       label: 'FRA'
//     }
//   ]
//   const business = [
//     {
//       country: 'ESP',
//       name: 'Cesce',
//       code: 12134
//     },
//     {
//       country: 'ENG',
//       name: 'IBM',
//       code: 11111
//     },
//     {
//       country: 'FRA',
//       name: 'Pomme de terre',
//       code: 7654
//     },
//     {
//       country: 'ESP',
//       name: 'ZARA',
//       code: 7743
//     }
//   ]

//   const disabled = false
//   const sending = ''
//   const i18n = {
//     MUIDSelectableRows: 'none',
//     MUIDNext: 'Siguiente Pagina',
//     MUIDPrevious: 'Pagina Anterior',
//     MUIDRowsPerPage: 'Filas por pagina:',
//     MUIDDisplayRows: 'de',
//     MUIDSearch: 'Buscar',
//     MUIDDownloadCsv: 'Descargar CSV',
//     MUIDPrint: 'Imprimir',
//     MUIDViewColumns: 'Ver Columnas',
//     MUIDFilterTable: 'Filtrar Tabla',
//     MUIDTitle: 'Filtros',
//     MUIDReset: 'Reiniciar',
//     MUIDViewColumnsShow: 'Mostrar Columnas',
//     MUIDText: 'fila(s) eliminadas',
//     MUIDDelete: 'Eliminar',
//     uploadButton: 'Subir archivos',
//     name1ft: 'error',
//     label1ft: ' ',
//     name2ft: 'name',
//     label2ft: 'Nombre',
//     name3ft: 'size',
//     label3ft: 'Tamaño',
//     name4ft: 'type',
//     name5ft: 'message',
//     name6ft: ' ',
//     label4ft: 'Borrar',
//     cardHeaderft: 'Rellene los campos',
//     label5ft: 'Código',
//     typo1ft: 'Confidencialidad',
//     formControlValue1: 'si',
//     formControlLabel1: 'Si',
//     formControlValue2: 'no',
//     formControlLabel2: 'No',
//     typo2ft: 'Generar Alerta:',
//     formControlValue3: 'si',
//     formControlLabel3: 'Si',
//     formControlValue4: 'no',
//     formControlLabel4: 'No',
//     typo3ft: 'Disponible Consolidado:',
//     formControlValue5: 'si',
//     formControlLabel5: 'Si',
//     formControlValue6: 'no',
//     formControlLabel6: 'No',
//     buttonDeleteft: 'Borrar ficheros',
//     buttonSendft: 'Enviar',
//     typo4ft: 'Cerrar Ventana de Busqueda',
//     typo5ft: 'Busque una empresa',
//     label6ft: 'Pais',
//     label7ft: 'Nombre',
//     label8ft: 'NIF',
//     buttonSearchft: 'Buscar'
//   }
//   const wrapper = render(
//     <FilesTableFTP
//       handleChange={handleChange}
//       handleSendFiles={handleSendFiles}
//       handleCancelFiles={handleCancelFiles}
//       handleDeleteFile={handleDeleteFile}
//       disabled={disabled}
//       data={data}
//       sending={sending}
//       inputRef={inputRef}
//       i18n={i18n}
//       country={country}
//       business={business}
//     />
//   )
//   expect(wrapper).not.toBe(null)
// })
export {}
