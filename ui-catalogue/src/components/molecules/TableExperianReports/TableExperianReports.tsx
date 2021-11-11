import React from 'react'
import MUIDataTable from 'mui-datatables'
export interface IReports {
  code: number
  denomination: string
  cif: string
  agency: string
  date: string
  type: string
}

export interface Ii18n {
  'TableExperianReport:reportTbNoMatch': string
  'TableExperianReport:reportTbNext': string
  'TableExperianReport:reportTbPrevious': string
  'TableExperianReport:reportTbPerPage': string
  'TableExperianReport:reportTbDisplayRows': string
  'TableExperianReport:reportTbSearch': string
  'TableExperianReport:reportTbDownladCsv': string
  'TableExperianReport:reportTbPrint': string
  'TableExperianReport:reportTbViewColumns': string
  'TableExperianReport:reportTbFilterTable': string
  'TableExperianReport:reportTbTitle': string
  'TableExperianReport:reportTbReset': string
  'TableExperianReport:reportTbViewColumnsShow': string
  'TableExperianReport:reportTbText': string
  'TableExperianReport:reportTbDelete': string
  'TableExperianReport:reportTbReportTitle': string
  'TableExperianReport:reportTbColumnsCode': string
  'TableExperianReport:reportTbColumnsDenomination': string
  'TableExperianReport:reportTbColumnsCif': string
  'TableExperianReport:reportTbColumnsAgency': string
  'TableExperianReport:reportTbColumnsDate': string
  'TableExperianReport:reportTbColumnsType': string
}

export interface ITableExperianReport {
  i18n: Ii18n
  data: IReports[]
  handleRowClick: (rowData: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage: number
  page: number
  onViewColumnsChange: (column: any) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
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

const TableExperianReport: React.FC<ITableExperianReport> = (
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
  const optionsTbReport = {
    onChangePage,
    onChangeRowsPerPage,
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
    onColumnSortChange: onColumnSortChange,
    search: false
  }

  const labelsTbReport = {
    textLabels: {
      body: {
        noMatch: i18n['TableExperianReport:reportTbNoMatch']
      },
      pagination: {
        next: i18n['TableExperianReport:reportTbNext'],
        previous: i18n['TableExperianReport:reportTbPrevious'],
        rowsPerPage: i18n['TableExperianReport:reportTbPerPage'],
        displayRows: i18n['TableExperianReport:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableExperianReport:reportTbSearch'],
        downloadCsv: i18n['TableExperianReport:reportTbDownladCsv'],
        print: i18n['TableExperianReport:reportTbPrint'],
        viewColumns: i18n['TableExperianReport:reportTbViewColumns'],
        filterTable: i18n['TableExperianReport:reportTbFilterTable']
      },
      filter: {
        title: i18n['TableExperianReport:reportTbTitle'],
        reset: i18n['TableExperianReport:reportTbReset']
      },
      viewColumns: {
        title: i18n['TableExperianReport:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableExperianReport:reportTbText'],
        delete: i18n['TableExperianReport:reportTbDelete']
      }
    }
  }

  const columnsReports = [
    {
      name: 'code',
      label: i18n['TableExperianReport:reportTbColumnsCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'denomination',
      label: i18n['TableExperianReport:reportTbColumnsDenomination'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'cif',
      label: i18n['TableExperianReport:reportTbColumnsCif'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'agency',
      label: i18n['TableExperianReport:reportTbColumnsAgency'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'date',
      label: i18n['TableExperianReport:reportTbColumnsDate'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'type',
      label: i18n['TableExperianReport:reportTbColumnsType'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    }
  ]

  return (
    <MUIDataTable
      title = {i18n['TableExperianReport:reportTbReportTitle']}
      data = {data}
      columns = {columnsReports}
      options = {{ ...optionsTbReport, ...labelsTbReport }}
    />
  )
}

export { TableExperianReport }
