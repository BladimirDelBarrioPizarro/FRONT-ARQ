import MUIDataTable from 'mui-datatables'
import React from 'react'

export interface ICorrespondents {
  codCorresponsal: number
  nombreCorresponsal: string
}

export interface Ii18n {
  'TableCorrespondents:correspondentsTbNoMatch': string
  'TableCorrespondents:correspondentsTbNext': string
  'TableCorrespondents:correspondentsTbPrevious': string
  'TableCorrespondents:correspondentsTbPerPage': string
  'TableCorrespondents:correspondentsTbDisplayRows': string
  'TableCorrespondents:correspondentsTbSearch': string
  'TableCorrespondents:correspondentsTbDownladCsv': string
  'TableCorrespondents:correspondentsTbPrint': string
  'TableCorrespondents:correspondentsTbViewColumns': string
  'TableCorrespondents:correspondentsTbFilterTable': string
  'TableCorrespondents:correspondentsTbTitle': string
  'TableCorrespondents:correspondentsTbReset': string
  'TableCorrespondents:correspondentsTbViewColumnsShow': string
  'TableCorrespondents:correspondentsTbText': string
  'TableCorrespondents:correspondentsTbDelete': string
  'TableCorrespondents:correspondentsTbCorrespondentsTitle': string
  'TableCorrespondents:correspondentsTbColumnsCode': string
  'TableCorrespondents:correspondentsTbColumnsDescription': string
}

export interface ITableCorrespondents {
  i18n: Ii18n
  data: ICorrespondents[]
  handleRowClickSearchResult?: (rowData: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
  totalRows: number
  rowsPerPage?: number
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

const TableCorrespondents: React.FC<ITableCorrespondents> = (
  {
    i18n,
    data,
    handleRowClickSearchResult,
    onChangePage,
    onChangeRowsPerPage,
    totalRows,
    rowsPerPage = 10,
    page,
    onColumnSortChange
  }
) => {
  const optionsTbCorrespondents = {
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    pagination: true,
    selectableRows: 'none',
    onRowClick: handleRowClickSearchResult,
    filter: false,
    download: false,
    print: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [5, 10, 25, 100],
    count: totalRows,
    page: page,
    serverSide: true,
    onColumnSortChange: onColumnSortChange,
    search: false
  }

  const labelsTbCorrespondents = {
    textLabels: {
      body: {
        noMatch: i18n['TableCorrespondents:correspondentsTbNoMatch']
      },
      pagination: {
        next: i18n['TableCorrespondents:correspondentsTbNext'],
        previous: i18n['TableCorrespondents:correspondentsTbPrevious'],
        rowsPerPage: i18n['TableCorrespondents:correspondentsTbPerPage'],
        displayRows: i18n['TableCorrespondents:correspondentsTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableCorrespondents:correspondentsTbSearch'],
        downloadCsv: i18n['TableCorrespondents:correspondentsTbDownladCsv'],
        print: i18n['TableCorrespondents:correspondentsTbPrint'],
        viewColumns: i18n['TableCorrespondents:correspondentsTbViewColumns'],
        filterTable: i18n['TableCorrespondents:correspondentsTbFilterTable']
      },
      filter: {
        title: i18n['TableCorrespondents:correspondentsTbTitle'],
        reset: i18n['TableCorrespondents:correspondentsTbReset']
      },
      viewColumns: {
        title: i18n['TableCorrespondents:correspondentsTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableCorrespondents:correspondentsTbText'],
        delete: i18n['TableCorrespondents:correspondentsTbDelete']
      }
    }
  }

  const columnsCorrespondents = [
    {
      name: 'codCorresponsal',
      label: i18n['TableCorrespondents:correspondentsTbColumnsCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }}>{ value }</span>
      }
    },
    {
      name: 'nombreCorresponsal',
      label: i18n['TableCorrespondents:correspondentsTbColumnsDescription'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    }
  ]

  return (
    <MUIDataTable
      title = {i18n['TableCorrespondents:correspondentsTbTitle']}
      data = {data}
      columns = {columnsCorrespondents}
      options = {{ ...optionsTbCorrespondents, ...labelsTbCorrespondents }}
    />
  )
}

export { TableCorrespondents }
