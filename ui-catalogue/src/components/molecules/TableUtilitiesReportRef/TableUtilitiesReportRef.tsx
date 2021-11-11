import React from 'react'
import MUIDataTable from 'mui-datatables'

export interface IdataTableUtilitiesReportRef {
  codProducto: number // Producto ?
  fecPeticion: string // Fecha
  numPeticion: string // Numero
  codCorresponsal: string // Cod.Corresponsal
  // valSigPag: string // Cód.Empresa   //TODO:Verificar campo
  nomEmpresa: string // Nombre ?
  situacion: string // Situacion
}

export interface Ii18nTableUtilitiesReportRef {
  'TableUtilitiesReportRef:requestListTbNoMatch': string
  'TableUtilitiesReportRef:requestListTbNext': string
  'TableUtilitiesReportRef:requestListTbPrevious': string
  'TableUtilitiesReportRef:requestListTbPerPage': string
  'TableUtilitiesReportRef:requestListTbDisplayRows': string
  'TableUtilitiesReportRef:requestListTbSearch': string
  'TableUtilitiesReportRef:requestListTbDownladCsv': string
  'TableUtilitiesReportRef:requestListTbPrint': string
  'TableUtilitiesReportRef:requestListTbViewColumns': string
  'TableUtilitiesReportRef:requestListTbFilterTable': string
  'TableUtilitiesReportRef:requestListTbTitle': string
  'TableUtilitiesReportRef:requestListTbReset': string
  'TableUtilitiesReportRef:requestListTbViewColumnsShow': string
  'TableUtilitiesReportRef:requestListTbText': string
  'TableUtilitiesReportRef:requestListTbDelete': string

  'TableUtilitiesReportRef:requestListTbReportTitle': string
  'TableUtilitiesReportRef:producto': string
  'TableUtilitiesReportRef:fecha': string
  'TableUtilitiesReportRef:numero': string
  'TableUtilitiesReportRef:codCorresponsal': string
  'TableUtilitiesReportRef:codEmpresa': string
  'TableUtilitiesReportRef:nombre': string
  'TableUtilitiesReportRef:situacion': string
}

export interface ITableUtilitiesReportRef {
  i18n: Ii18nTableUtilitiesReportRef
  data: IdataTableUtilitiesReportRef[]
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage: number
  page: number
  handlePressRow: (value: any, tableMeta: any) => any
  onViewColumnsChange: (column: any) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
  handleSendCancel: () => void
}

/*
Petición
--------
itemsPerPage    // elementos por página
currentPage     // número de página
sortBy          // método de ordenación
sortOrder       // orden (ascendente o descendente)

Respuesta
---------
totalCount      // número total de elementos
totalPages      // número total de páginas
currentPage     // número de página (ya está en la petición, pero para diferenciar las respuestas del servicio)
*/

const TableUtilitiesReportRef: React.FC<ITableUtilitiesReportRef> = (
  {
    i18n,
    data,
    onChangePage,
    onChangeRowsPerPage,
    totalRows,
    rowsPerPage = 5,
    page,
    handleSendCancel,
    handlePressRow,
    onViewColumnsChange,
    onColumnSortChange
  }
) => {
  const optionsTbReport = {
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    pagination: true,
    selectableRows: 'none',
    filter: false,
    download: false,
    print: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [5, 10, 25, 100],
    count: totalRows,
    onViewColumnsChange,
    viewColumns: true,
    serverSide: true,
    onColumnSortChange: onColumnSortChange,
    filterType: 'checkbox',
    search: false
  }

  const labelsTbReport = {
    textLabels: {
      body: {
        noMatch: i18n['TableUtilitiesReportRef:requestListTbNoMatch']
      },
      pagination: {
        next: i18n['TableUtilitiesReportRef:requestListTbNext'],
        previous: i18n['TableUtilitiesReportRef:requestListTbPrevious'],
        rowsPerPage: i18n['TableUtilitiesReportRef:requestListTbPerPage'],
        displayRows: i18n['TableUtilitiesReportRef:requestListTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableUtilitiesReportRef:requestListTbSearch'],
        downloadCsv: i18n['TableUtilitiesReportRef:requestListTbDownladCsv'],
        print: i18n['TableUtilitiesReportRef:requestListTbPrint'],
        viewColumns: i18n['TableUtilitiesReportRef:requestListTbViewColumns'],
        filterTable: i18n['TableUtilitiesReportRef:requestListTbFilterTable']
      },
      filter: {
        title: i18n['TableUtilitiesReportRef:requestListTbTitle'],
        reset: i18n['TableUtilitiesReportRef:requestListTbReset']
      },
      viewColumns: {
        title: i18n['TableUtilitiesReportRef:requestListTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableUtilitiesReportRef:requestListTbText'],
        delete: i18n['TableUtilitiesReportRef:requestListTbDelete']
      }
    }
  }

  const columnsReports = [
    {
      name: 'nomProducto',
      label: i18n['TableUtilitiesReportRef:producto'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'fecPeticion',
      label: i18n['TableUtilitiesReportRef:fecha'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'numPeticion',
      label: i18n['TableUtilitiesReportRef:numero'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'codCorresponsal',
      label: i18n['TableUtilitiesReportRef:codCorresponsal'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'nomCorresponsal',
      label: i18n['TableUtilitiesReportRef:nombre'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'situacion',
      label: i18n['TableUtilitiesReportRef:situacion'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    }
  ]

  return (
    <>
      <div style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
        <MUIDataTable
          title = {i18n['TableUtilitiesReportRef:requestListTbReportTitle']}
          data = {data}
          columns = {columnsReports}
          options = {{ ...optionsTbReport, ...labelsTbReport }}
        />
      </div>
    </>
  )
}

export { TableUtilitiesReportRef }
