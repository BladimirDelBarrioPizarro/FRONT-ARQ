// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'

// import { AdvancedInformationSearch } from './AdvancedInformationSearch'
// import { Simulate } from 'react-dom/test-utils'

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

// const reports = [
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

// const business = [
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
// const columnsBussines = [
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

// const columnsReports = [
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
// const i18n = {
//   textTypographyTitle: 'Introduce los datos para la busqueda',
//   textButtonLast: 'Buscar últimos',
//   textButtonAll: 'Buscar todos',
//   textButtonClean: 'Limpiar',
//   textButtonHelp: 'Ayuda',
//   textTypographyClose: 'Cerrar ventana de busqueda',
//   textTypographySearchCompany: 'Busque una empresa',
//   textFormSearch: 'Buscar',
//   debtor: 'Código deudor',
//   agency: 'Código agencia',
//   fiscal: 'Código fiscal',
//   country: 'Pais',
//   name: 'Nombre',
//   nif: 'NIF',
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
//   columnsBussines: columnsBussines,
//   columnsReport: columnsReports,
//   modalTitle: 'Modal Título',
//   modalDescription: 'Descripción modal'
// }

// const handleRowClickData = jest.fn()
// test('Test de renderizado', () => {
//   const wrapper = render(
//     <AdvancedInformationSearch
//       country={country}
//       reports={reports}
//       business={business}
//       handleRowClickData={handleRowClickData}
//       i18n={i18n}
//     />)
//   expect(wrapper).not.toBe(null)
//   expect(wrapper).toBeDefined()
// })

// test('Events', () => {
//   const wrapper = render(
//     <AdvancedInformationSearch
//       country={country}
//       reports={reports}
//       business={business}
//       handleRowClickData={handleRowClickData}
//       i18n={i18n}
//     />)
//   expect(wrapper).not.toBe(null)
//   const inputDebtor = screen.getByTestId('debtor').querySelector('input')
//   fireEvent.change(inputDebtor, { target: { value: '23' } })
//   expect(inputDebtor.value).toBe('23')

//   const inputAgency = screen.getByTestId('agency').querySelector('input')
//   fireEvent.change(inputAgency, { target: { value: '23' } })
//   expect(inputAgency.value).toBe('23')

//   const inputFiscal = screen.getByTestId('fiscal').querySelector('input')
//   fireEvent.change(inputFiscal, { target: { value: '23' } })
//   expect(inputFiscal.value).toBe('23')

//   const inputName = screen.getByTestId('name').querySelector('input')
//   fireEvent.change(inputName, { target: { value: '23' } })
//   expect(inputName.value).toBe('23')

//   const inputNif = screen.getByTestId('nif').querySelector('input')
//   fireEvent.change(inputNif, { target: { value: '23' } })
//   expect(inputNif.value).toBe('23')

//   const inputPais = screen.getByTestId('country').querySelector('input')
//   fireEvent.change(inputPais, { target: { value: '1' } })
//   expect(inputPais.value).toBe('1')

//   const textFieldDebtor = screen.getByTestId('debtor')
//   const buttonDrawerOpen = screen.getByTestId('...')
//   const textFieldAgency = screen.getByTestId('agency')
//   const textFieldFiscal = screen.getByTestId('fiscal')
//   const searchButton = screen.getByTestId('search')
//   const helpButton = screen.getByTestId('help')
//   const lastSearchButton = screen.getByTestId('lastSearch')
//   const allSearchButton = screen.getByTestId('allSearch')
//   const cleanButton = screen.getByTestId('clean')
//   const buttonSearch = screen.getByTestId('search')
//   const iconClose = screen.getByTestId('iconClose')
//   const textFieldCountry = screen.getByTestId('country')
//   const formName = screen.getByTestId('name')
//   const textFieldNIF = screen.getByTestId('nif')

//   fireEvent.change(screen.getByTestId('debtor'))
//   fireEvent.click(screen.getByTestId('...'))
//   fireEvent.change(screen.getByTestId('agency'))
//   fireEvent.change(screen.getByTestId('fiscal'))
//   fireEvent.click(screen.getByTestId('help'))
//   fireEvent.click(screen.getByTestId('clean'))
//   fireEvent.click(screen.getByTestId('iconClose'))
//   fireEvent.click(screen.getByTestId('search'))
//   fireEvent.click(screen.getByTestId('allSearch'))
//   fireEvent.click(screen.getByTestId('iconClose'))
//   fireEvent.change(screen.getByTestId('name'))
//   fireEvent.change(screen.getByTestId('nif'))

//   Simulate.change(textFieldFiscal)
//   Simulate.click(textFieldAgency)
//   Simulate.click(buttonDrawerOpen)
//   Simulate.change(textFieldDebtor)
//   Simulate.click(searchButton)
//   Simulate.click(helpButton)
//   Simulate.click(lastSearchButton)
//   Simulate.submit(allSearchButton)
//   Simulate.submit(cleanButton)
//   Simulate.click(buttonSearch)
//   Simulate.click(allSearchButton)
//   Simulate.click(iconClose)
//   Simulate.change(textFieldCountry)
//   Simulate.change(formName)
//   Simulate.change(textFieldNIF)
// })
export {}
