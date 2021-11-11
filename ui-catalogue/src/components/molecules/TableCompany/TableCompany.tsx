import MUIDataTable from 'mui-datatables'
import React from 'react'

export interface ICompanies {
  codDeudor: number
  nombreDeudor: string
}

export interface Ii18n {
  'TableCompany:companiesTbNoMatch': string
  'TableCompany:companiesTbNext': string
  'TableCompany:companiesTbPrevious': string
  'TableCompany:companiesTbPerPage': string
  'TableCompany:companiesTbDisplayRows': string
  'TableCompany:companiesTbSearch': string
  'TableCompany:companiesTbDownladCsv': string
  'TableCompany:companiesTbPrint': string
  'TableCompany:companiesTbViewColumns': string
  'TableCompany:companiesTbFilterTable': string
  'TableCompany:companiesTbTitle': string
  'TableCompany:companiesTbReset': string
  'TableCompany:companiesTbViewColumnsShow': string
  'TableCompany:companiesTbText': string
  'TableCompany:companiesTbDelete': string
  'TableCompany:companiesTbCorrespondentsTitle': string
  'TableCompany:companiesTbColumnsCode': string
  'TableCompany:companiesTbColumnsDescription': string
  'TableCompany:companiesTbColumnsName': string
  'TableCompany:companiesTbColumnsDomicilio': string
  'TableCompany:companiesTbColumnsLocalidad': string
  'TableCompany:companiesTbColumnsProvincia': string
}

export interface ITableCompany {
  i18n: Ii18n
  data: ICompanies[]
  handleRowClickSearchResult?: (rowData: any) => void
  totalRows: number
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  onViewColumnsChange: (column: any) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
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

const TableCompany: React.FC<ITableCompany> = (
  {
    i18n,
    data,
    handleRowClickSearchResult,
    onChangePage,
    onChangeRowsPerPage,
    totalRows,
    rowsPerPage,
    page,
    onViewColumnsChange,
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
    page,
    onViewColumnsChange,
    viewColumns: true,
    serverSide: true,
    onColumnSortChange: onColumnSortChange,
    search: false
  }

  const labelsTbCorrespondents = {
    textLabels: {
      body: {
        noMatch: i18n['TableCompany:companiesTbNoMatch']
      },
      pagination: {
        next: i18n['TableCompany:companiesTbNext'],
        previous: i18n['TableCompany:companiesTbPrevious'],
        rowsPerPage: i18n['TableCompany:companiesTbPerPage'],
        displayRows: i18n['TableCompany:companiesTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableCompany:companiesTbSearch'],
        downloadCsv: i18n['TableCompany:companiesTbDownladCsv'],
        print: i18n['TableCompany:companiesTbPrint'],
        viewColumns: i18n['TableCompany:companiesTbViewColumns'],
        filterTable: i18n['TableCompany:companiesTbFilterTable']
      },
      filter: {
        title: i18n['TableCompany:companiesTbTitle'],
        reset: i18n['TableCompany:companiesTbReset']
      },
      viewColumns: {
        title: i18n['TableCompany:companiesTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableCompany:companiesTbText'],
        delete: i18n['TableCompany:companiesTbDelete']
      }
    }
  }

  const columnsCorrespondents = [
    {
      name: 'codDeudor',
      label: i18n['TableCompany:companiesTbColumnsCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'nombreDeudor',
      label: i18n['TableCompany:companiesTbColumnsName'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'nombreDeudor',
      label: i18n['TableCompany:companiesTbColumnsDomicilio'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'nombreDeudor',
      label: i18n['TableCompany:companiesTbColumnsLocalidad'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'nombreDeudor',
      label: i18n['TableCompany:companiesTbColumnsProvincia'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    }
  ]

  return (
    <>
      <MUIDataTable
        title = {i18n['TableCompany:companiesTbTitle']}
        data = {data}
        columns = {columnsCorrespondents}
        options = {{ ...optionsTbCorrespondents, ...labelsTbCorrespondents }}
      />
    </>
  )
}

export { TableCompany }
