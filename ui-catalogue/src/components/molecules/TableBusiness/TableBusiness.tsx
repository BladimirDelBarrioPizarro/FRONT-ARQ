import MUIDataTable from 'mui-datatables'
import React from 'react'

export interface Ii18n {
  'TableBusiness:businessTbNoMatch': string
  'TableBusiness:businessTbNext': string
  'TableBusiness:businessTbPrevious': string
  'TableBusiness:businessTbPerPage': string
  'TableBusiness:businessTbDisplayRows': string
  'TableBusiness:businessTbSearch': string
  'TableBusiness:businessTbDownladCsv': string
  'TableBusiness:businessTbPrint': string
  'TableBusiness:businessTbViewColumns': string
  'TableBusiness:businessTbFilterTable': string
  'TableBusiness:businessTbReset': string
  'TableBusiness:businessTbViewColumnsShow': string
  'TableBusiness:businessTbText': string
  'TableBusiness:businessTbDelete': string
  'TableBusiness:businessTbTitle': string
  'TableBusiness:businessTbColumnsCode': string
  'TableBusiness:businessTbColumnsName': string
  'TableBusiness:businessTbColumnsCountry': string
}

interface IBusiness {
  codDeudor: number
  nombreDeudor: string
}

export interface ITableBusiness {
  i18n: Ii18n
  data: IBusiness[]
  handleRowClick: (rowData: any, rowMeta: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  onViewColumnsChange: (column: any) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
  totalRows: number
  rowsPerPage: number
  page: number
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

const TableBusiness: React.FC<ITableBusiness> = (
  {
    i18n,
    data,
    handleRowClick,
    onChangePage,
    onChangeRowsPerPage,
    totalRows,
    rowsPerPage,
    page,
    onViewColumnsChange,
    onColumnSortChange
  }
) => {
  const optionsTbBusiness = {
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    pagination: true,
    selectableRows: 'none',
    onRowClick: handleRowClick,
    filter: false,
    download: false,
    print: false,
    rowsPerPage,
    rowsPerPageOptions: [5, 10, 25, 100],
    count: totalRows,
    page,
    onViewColumnsChange,
    viewColumns: true,
    serverSide: true,
    onColumnSortChange: onColumnSortChange
  }

  const labelsTbBusiness = {
    textLabels: {
      body: {
        noMatch: i18n['TableBusiness:businessTbNoMatch']
      },
      pagination: {
        next: i18n['TableBusiness:businessTbNext'],
        previous: i18n['TableBusiness:businessTbPrevious'],
        rowsPerPage: i18n['TableBusiness:businessTbPerPage'],
        displayRows: i18n['TableBusiness:businessTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableBusiness:businessTbSearch'],
        downloadCsv: i18n['TableBusiness:businessTbDownladCsv'],
        print: i18n['TableBusiness:businessTbPrint'],
        viewColumns: i18n['TableBusiness:businessTbViewColumns'],
        filterTable: i18n['TableBusiness:businessTbFilterTable']
      },
      filter: {
        title: i18n['TableBusiness:businessTbTitle'],
        reset: i18n['TableBusiness:businessTbReset']
      },
      viewColumns: {
        title: i18n['TableBusiness:businessTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableBusiness:businessTbText'],
        delete: i18n['TableBusiness:businessTbDelete']
      }
    }
  }

  const columnsBusiness = [
    {
      name: 'codDeudor',
      label: i18n['TableBusiness:businessTbColumnsCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'nombreDeudor',
      label: i18n['TableBusiness:businessTbColumnsName'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    }
  ]

  return (
    <MUIDataTable
      title = {i18n['TableBusiness:businessTbTitle']}
      data = {data}
      columns = {columnsBusiness}
      options = {{ ...optionsTbBusiness, ...labelsTbBusiness }}
    />
  )
}

export { TableBusiness }
