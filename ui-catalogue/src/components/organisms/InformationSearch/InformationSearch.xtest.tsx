// import { fireEvent, render, screen } from '@testing-library/react'
// import React from 'react'
// import { Simulate } from 'react-dom/test-utils'

// import { InformationSearch } from './InformationSearch'

// /* const colorOptions = {
//   default: 'default',
//   inherit: 'inherit',
//   primary: 'primary',
//   secondary: 'secondary'
// }
// const variantOptions = {
//   contained: 'contained',
//   outlined: 'outlined',
//   text: 'text'
// }
// const knobsGroup = 'Props' */
// const country = [
//   {
//     value: '1',
//     label: 'ESP'
//   },
//   {
//     value: '2',
//     label: 'ENG'
//   },
//   {
//     value: '3',
//     label: 'POR'
//   },
//   {
//     value: '4',
//     label: 'FRA'
//   }
// ]
// const columnsBusiness = [
//   {
//     name: 'country',
//     label: 'Pais'
//   },
//   {
//     name: 'code',
//     label: 'Codigo'
//   },
//   {
//     name: 'name',
//     label: 'Nombre'
//   }

// ]
// const columnsReport = [
//   {
//     name: 'code',
//     label: 'Codigo'
//   },
//   {
//     name: 'denomination',
//     label: 'Denominacion'
//   },
//   {
//     name: 'nif',
//     label: 'NIF'
//   },
//   {
//     name: 'agency',
//     label: 'Agencia'
//   },
//   {
//     name: 'date',
//     label: 'Fecha'
//   },
//   {
//     name: 'type',
//     label: 'Tipo'
//   }
// ]
// const dataBussines = [
//   {
//     country: 'ESP',
//     name: 'Cesce',
//     code: 12134
//   },
//   {
//     country: 'ENG',
//     name: 'IBM',
//     code: 11111
//   },
//   {
//     country: 'FRA',
//     name: 'Pomme de terre',
//     code: 7654
//   },
//   {
//     country: 'ESP',
//     name: 'ZARA',
//     code: 7743
//   }
// ]

// const dataReports = [
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   },
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   },
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   },
//   {
//     code: 1231432423,
//     denomination: 'INFORMATICA EL CORTE INGLES',
//     nif: 'u866HJG',
//     agency: '123/EXPERIAN',
//     date: '30/07/2018',
//     type: 'Informe'
//   }
// ]

// const i18n = {
//   MUIDBussinesTitle: 'Lista de Empresas',
//   MUIDReportTitle: 'Lista de informes',
//   MUIDSelectableRows: 'none',
//   MUIDNoMatch: 'Lo sentimos, no se han encontrado registros',
//   MUIDNext: 'Siguiente Pagina',
//   MUIDPrevious: 'Pagina Anterior',
//   MUIDRowsPerPage: 'Filas por pagina:',
//   MUIDDisplayRows: 'de',
//   MUIDSearch: 'Buscar',
//   MUIDDownladCsv: 'Descargar CSV',
//   MUIDPrint: 'Imprimir',
//   MUIDViewColumns: 'Ver Columnas',
//   MUIDFilterTable: 'Filtrar Tabla',
//   MUIDTitle: 'Filtros',
//   MUIDReset: 'Reiniciar',
//   MUIDViewColumnsShow: 'Mostrar Columnas',
//   MUIDText: 'fila(s) eliminadas',
//   MUIDDelete: 'Eliminar',
//   columnsBussines: columnsBusiness,
//   columnsReport: columnsReport,
//   typo1: 'Introduce el código del deudor',
//   label1is: 'Código',
//   button1is: '...',
//   button2is: 'Buscar últimos',
//   button3is: 'Buscar todos',
//   button4is: 'Limpiar',
//   button5is: 'Ayuda',
//   typo2: 'Cerrar ventana de busqueda',
//   typo3: 'Busque una empresa',
//   label2is: 'País',
//   label3is: 'Nombre',
//   label4is: 'NIF',
//   button6is: 'Buscar',
//   h2: 'Ayuda',
//   texthelp: 'Aquí ira la ayuda'
// }

// const handleRowClickData = jest.fn()
// test('Events test', () => {
//   const wrapper = render(
//     <InformationSearch i18n={i18n} country={country} reports={dataReports} business={dataBussines} handleRowClickData={handleRowClickData}/>
//   )
//   expect(wrapper).not.toBe(null)

//   const inputCodigo = screen.getByTestId('code').querySelector('input')
//   fireEvent.change(inputCodigo, { target: { value: '23' } })
//   expect(inputCodigo.value).toBe('23')

//   fireEvent.click(screen.getByTestId('...'))
//   fireEvent.click(screen.getByTestId('iconClose'))
//   fireEvent.click(screen.getByTestId('help'))

//   fireEvent.click(screen.getByTestId('name'))
//   fireEvent.click(screen.getByTestId('nif'))
//   fireEvent.click(screen.getByTestId('country'))

//   const searchButton = screen.getByTestId('search')
//   const lastSearchButton = screen.getByTestId('lastSearch')
//   const allSearchButton = screen.getByTestId('allSearch')
//   const cleanButton = screen.getByTestId('clean')

//   Simulate.submit(searchButton)
//   Simulate.submit(lastSearchButton)
//   Simulate.submit(allSearchButton)
//   Simulate.submit(cleanButton)
// })

// test('Render test', () => {
//   const wrapper = render(
//     <InformationSearch i18n={i18n} country={country} reports={dataReports} business={dataBussines} handleRowClickData={handleRowClickData}/>
//   )
//   expect(wrapper).not.toBe(null)

//   const inputCodigo = screen.getByTestId('code').querySelector('input')
//   fireEvent.change(inputCodigo, { target: { value: '23' } })
//   expect(inputCodigo.value).toBe('23')

//   const inputName = screen.getByTestId('name').querySelector('input')
//   fireEvent.change(inputName, { target: { value: '23' } })
//   expect(inputName.value).toBe('23')

//   const inputNif = screen.getByTestId('nif').querySelector('input')
//   fireEvent.change(inputNif, { target: { value: '23' } })
//   expect(inputNif.value).toBe('23')

//   const inputPais = screen.getByTestId('country').querySelector('input')
//   fireEvent.change(inputPais, { target: { value: '2' } })
//   expect(inputPais.value).toBe('2')

//   fireEvent.click(screen.getByTestId('search'))

//   const searchButton = screen.getByTestId('search')
//   const lastSearchButton = screen.getByTestId('lastSearch')
//   const allSearchButton = screen.getByTestId('allSearch')
//   const cleanButton = screen.getByTestId('clean')

//   Simulate.submit(searchButton)
//   Simulate.submit(lastSearchButton)
//   Simulate.submit(allSearchButton)
//   Simulate.submit(cleanButton)
// })
export {}
