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
  'TableReport:reportTbNoMatch': string
  'TableReport:reportTbNext': string
  'TableReport:reportTbPrevious': string
  'TableReport:reportTbPerPage': string
  'TableReport:reportTbDisplayRows': string
  'TableReport:reportTbSearch': string
  'TableReport:reportTbDownladCsv': string
  'TableReport:reportTbPrint': string
  'TableReport:reportTbViewColumns': string
  'TableReport:reportTbFilterTable': string
  'TableReport:reportTbTitle': string
  'TableReport:reportTbReset': string
  'TableReport:reportTbViewColumnsShow': string
  'TableReport:reportTbText': string
  'TableReport:reportTbDelete': string
  'TableReport:reportTbReportTitle': string
  'TableReport:reportTbColumnsCode': string
  'TableReport:reportTbColumnsDenomination': string
  'TableReport:reportTbColumnsCif': string
  'TableReport:reportTbColumnsAgency': string
  'TableReport:reportTbColumnsDate': string
  'TableReport:reportTbColumnsType': string
}

export interface ITableReport {
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

const TableReport: React.FC<ITableReport> = (
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
    rowsPerPageOptions: [5, 10, 50],
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
        noMatch: i18n['TableReport:reportTbNoMatch']
      },
      pagination: {
        next: i18n['TableReport:reportTbNext'],
        previous: i18n['TableReport:reportTbPrevious'],
        rowsPerPage: i18n['TableReport:reportTbPerPage'],
        displayRows: i18n['TableReport:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableReport:reportTbSearch'],
        downloadCsv: i18n['TableReport:reportTbDownladCsv'],
        print: i18n['TableReport:reportTbPrint'],
        viewColumns: i18n['TableReport:reportTbViewColumns'],
        filterTable: i18n['TableReport:reportTbFilterTable']
      },
      filter: {
        title: i18n['TableReport:reportTbTitle'],
        reset: i18n['TableReport:reportTbReset']
      },
      viewColumns: {
        title: i18n['TableReport:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableReport:reportTbText'],
        delete: i18n['TableReport:reportTbDelete']
      }
    }
  }

  const columnsReports = [
    {
      name: 'id',
      label: i18n['TableReport:reportTbColumnsCode'],
      options: {
        display: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'codDeudor',
      label: i18n['TableReport:reportTbColumnsCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'denominacionSocial',
      label: i18n['TableReport:reportTbColumnsDenomination'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'codFiscal',
      label: i18n['TableReport:reportTbColumnsCif'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'agenciaInformacion',
      label: i18n['TableReport:reportTbColumnsAgency'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'fecha',
      label: i18n['TableReport:reportTbColumnsDate'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    },
    {
      name: 'tipoFichero',
      label: i18n['TableReport:reportTbColumnsType'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} >{ value }</span>
      }
    }
  ]

  return (
    <MUIDataTable
      title = {i18n['TableReport:reportTbReportTitle']}
      data = {data}
      columns = {columnsReports}
      options = {{ ...optionsTbReport, ...labelsTbReport }}
    />
  )
}

export { TableReport }
