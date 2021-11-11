// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { ConsultReports } from './ConsultReports'

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
//   texthelp: 'Aquí ira la ayuda',

//   label1: 'Experian+R',
//   label2: 'Badexcug',
//   label3: 'NIF',
//   button1: 'Buscar últimos',
//   button2: 'Buscar todos',
//   button3: 'Limpiar',
//   button4: 'Ayuda',
//   modalh2: 'Transition modal',
//   modalp: 'react-transition-group animates me.',

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
//   modalTitle: 'Modal Título',
//   modalDescription: 'Descripción modal',

//   label1cr: 'Informa',
//   label2cr: 'Informa+R',
//   label3cr: 'Experian+R',
//   label4cr: 'Busqueda',
//   label5cr: 'Busqueda Avanzada EDI'
// }

// const handleSearchLastReports = (id: number): void => {}
// const handleSearchAllReports = (id: number): void => {}
// const handleSearchLastExperian = (nif: string): void => {}
// const handleSearchAllExperian = (nif: string): void => {}
// const handleSearchBusiness = (pais: string, nombre: string, nif: string): void => {}
// const deleteSearchBusiness = (): void => {}
// const deleteSearchReports = (): void => {}
// const handleRowClickData = (): void => {}

// test('Render Test', () => {
//   const wrapper = render(
//     <ConsultReports
//       i18n={i18n}
//       reports={dataReports}
//       business={dataBussines}
//       country={country}
//       handleSearchLastReports={handleSearchLastReports}
//       handleSearchAllReports={handleSearchAllReports}
//       handleSearchLastExperian={handleSearchLastExperian}
//       handleSearchAllExperian={handleSearchAllExperian}
//       handleSearchBusiness={handleSearchBusiness}
//       deleteSearchReports={deleteSearchReports}
//       deleteSearchBusiness={deleteSearchBusiness}
//       handleRowClickData={handleRowClickData}
//     />
//   )
//   expect(wrapper).not.toBe(null)
// })

// test('Events Test', () => {
//   render(
//     <ConsultReports
//       i18n={i18n}
//       reports={dataReports}
//       business={dataBussines}
//       country={country}
//       handleSearchLastReports={handleSearchLastReports}
//       handleSearchAllReports={handleSearchAllReports}
//       handleSearchLastExperian={handleSearchLastExperian}
//       handleSearchAllExperian={handleSearchAllExperian}
//       handleSearchBusiness={handleSearchBusiness}
//       deleteSearchReports={deleteSearchReports}
//       deleteSearchBusiness={deleteSearchBusiness}
//       handleRowClickData={handleRowClickData}
//     />
//   )
//   expect(screen.getByText('Informa')).not.toBe(null)
//   fireEvent.click(screen.getByText('Informa'))
//   fireEvent.click(screen.getByText('Informa+R'))
//   fireEvent.click(screen.getByText('Busqueda'))
// })
export {}
