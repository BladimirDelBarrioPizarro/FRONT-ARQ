import React from 'react'
import MUIDataTable from 'mui-datatables'
import { TableElementCheckbox } from '../../atoms/index'

export interface IRequestList {
  numPeticion: number
  productoCesce: string
  codDeudor: string
  codFiscal: string
  situacion: string
  fechaAlta: string
}

export interface Ii18n {
  'TableRequestList:requestListTbNoMatch': string
  'TableRequestList:requestListTbNext': string
  'TableRequestList:requestListTbPrevious': string
  'TableRequestList:requestListTbPerPage': string
  'TableRequestList:requestListTbDisplayRows': string
  'TableRequestList:requestListTbSearch': string
  'TableRequestList:requestListTbDownladCsv': string
  'TableRequestList:requestListTbPrint': string
  'TableRequestList:requestListTbViewColumns': string
  'TableRequestList:requestListTbFilterTable': string
  'TableRequestList:requestListTbTitle': string
  'TableRequestList:requestListTbReset': string
  'TableRequestList:requestListTbViewColumnsShow': string
  'TableRequestList:requestListTbText': string
  'TableRequestList:requestListTbDelete': string
  'TableRequestList:requestListTbReportTitle': string
  'TableRequestList:requestListTbColumnsPetitionNumber': string
  'TableRequestList:requestListTbColumnsProductCESCE': string
  'TableRequestList:requestListTbColumnsCompanyCode': string
  'TableRequestList:requestListTbColumnsCIF': string
  'TableRequestList:requestListTbColumnsSituation': string
  'TableRequestList:requestListTbColumnsHighDate': string
  'TableRequestList:requestListTbColumnsHighClaimed': string
  'TableRequestList:requestListTbColumnsUrgency': string
  'TableRequestList:requestListTbEmpty': string
}

export interface ITableRequestList {
  i18n: Ii18n
  data: IRequestList[]
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage: number
  page: number
  itemChecked: string
  handleDetailRequest: (value) => void
  handleCheckPetition: (value: any, tableMeta: any) => any
  handlePressRow: (value: any, tableMeta: any) => any
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

const TableRequestList: React.FC<ITableRequestList> = (
  {
    i18n,
    data,
    onChangePage,
    onChangeRowsPerPage,
    totalRows,
    rowsPerPage = 10,
    page,
    itemChecked,
    handleDetailRequest,
    handleCheckPetition,
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
    handleDetailRequest: handleDetailRequest,
    filter: false,
    download: false,
    print: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [5, 10, 25],
    count: totalRows,
    page,
    onViewColumnsChange,
    viewColumns: true,
    serverSide: true,
    onColumnSortChange: onColumnSortChange,
    filterType: 'checkbox'
  }

  const labelsTbReport = {
    textLabels: {
      body: {
        noMatch: i18n['TableRequestList:requestListTbNoMatch']
      },
      pagination: {
        next: i18n['TableRequestList:requestListTbNext'],
        previous: i18n['TableRequestList:requestListTbPrevious'],
        rowsPerPage: i18n['TableRequestList:requestListTbPerPage'],
        displayRows: i18n['TableRequestList:requestListTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableRequestList:requestListTbSearch'],
        downloadCsv: i18n['TableRequestList:requestListTbDownladCsv'],
        print: i18n['TableRequestList:requestListTbPrint'],
        viewColumns: i18n['TableRequestList:requestListTbViewColumns'],
        filterTable: i18n['TableRequestList:requestListTbFilterTable']
      },
      filter: {
        title: i18n['TableRequestList:requestListTbTitle'],
        reset: i18n['TableRequestList:requestListTbReset']
      },
      viewColumns: {
        title: i18n['TableRequestList:requestListTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableRequestList:requestListTbText'],
        delete: i18n['TableRequestList:requestListTbDelete']
      }
    }
  }

  const columnsReports = [
    {
      name: 'numPeticion',
      label: i18n['TableRequestList:requestListTbEmpty'],
      options: {
        filter: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const icon = <TableElementCheckbox
            value={value}
            tableMeta={tableMeta}
            itemChecked={itemChecked}
            singelValue={true}
            handleCheckReport={handleCheckPetition}
          />
          return icon
        }
      }
    },
    {
      name: 'numPeticion',
      label: i18n['TableRequestList:requestListTbColumnsPetitionNumber'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'productoCesce',
      label: i18n['TableRequestList:requestListTbColumnsProductCESCE'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'codDeudor',
      label: i18n['TableRequestList:requestListTbColumnsCompanyCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'codFiscal',
      label: i18n['TableRequestList:requestListTbColumnsCIF'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'situacion',
      label: i18n['TableRequestList:requestListTbColumnsSituation'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'fechaAlta',
      label: i18n['TableRequestList:requestListTbColumnsHighDate'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'reclamada',
      label: i18n['TableRequestList:requestListTbColumnsHighClaimed'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'urgencia',
      label: i18n['TableRequestList:requestListTbColumnsUrgency'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    }
  ]

  return (
    <div style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
      <MUIDataTable
        // title = {i18n.requestListTbTitle}
        data = {data}
        columns = {columnsReports}
        options = {{ ...optionsTbReport, ...labelsTbReport }}
      />
    </div>
  )
}

export { TableRequestList }
