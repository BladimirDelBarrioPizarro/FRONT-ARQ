import React from 'react'
import MUIDataTable from 'mui-datatables'
import { makeStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'

export interface IReports {
  code: number
  denomination: string
  cif: string
  agency: string
  date: string
  type: string
}

export interface Ii18n {
  'TableReportReferences:reportTbNoMatch': string
  'TableReportReferences:reportTbNext': string
  'TableReportReferences:reportTbPrevious': string
  'TableReportReferences:reportTbPerPage': string
  'TableReportReferences:reportTbDisplayRows': string
  'TableReportReferences:reportTbSearch': string
  'TableReportReferences:reportTbDownladCsv': string
  'TableReportReferences:reportTbPrint': string
  'TableReportReferences:reportTbViewColumns': string
  'TableReportReferences:reportTbFilterTable': string
  'TableReportReferences:reportTbTitle': string
  'TableReportReferences:reportTbReset': string
  'TableReportReferences:reportTbViewColumnsShow': string
  'TableReportReferences:reportTbText': string
  'TableReportReferences:reportTbDelete': string
  'TableReportReferences:reportTbReportTitle': string
  'TableReportReferences:reportRefTbColumnsAgency': string
  'TableReportReferences:reportRefTbColumnsCif': string
  'TableReportReferences:reportRefTbColumnsCode': string
  'TableReportReferences:reportRefTbColumnsDate': string
  'TableReportReferences:reportRefTbColumnsType': string
}

export interface ITableReportReferences {
  i18n: Ii18n
  data: IReports[]
  handlePressRow: (value: any, tableMeta: any) => any
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  totalRows: number
  rowsPerPage: number
  page: number
  onViewColumnsChange: (column: any) => void
  onColumnSortChange: (changedColumn: string, direction: string) => void
  handleCheckPetition: (value: any, tableMeta: any) => any
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

const TableReportsReferences: React.FC<ITableReportReferences> = (
  {
    i18n,
    data,
    handlePressRow,
    onChangePage,
    onChangeRowsPerPage,
    totalRows,
    rowsPerPage,
    page,
    onViewColumnsChange,
    onColumnSortChange,
    handleCheckPetition
  }
) => {
  const optionsTbReport = {
    onChangePage,
    onChangeRowsPerPage,
    pagination: true,
    selectableRows: false,
    selectableRowsOnClick: true,
    onRowClick: handlePressRow,
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
    // onRowSelectionChange: onRowSelectionChange
  }

  const labelsTbReport = {
    textLabels: {
      body: {
        noMatch: i18n['TableReportReferences:reportTbNoMatch']
      },
      pagination: {
        next: i18n['TableReportReferences:reportTbNext'],
        previous: i18n['TableReportReferences:reportTbPrevious'],
        rowsPerPage: i18n['TableReportReferences:reportTbPerPage'],
        displayRows: i18n['TableReportReferences:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['TableReportReferences:reportTbSearch'],
        downloadCsv: i18n['TableReportReferences:reportTbDownladCsv'],
        print: i18n['TableReportReferences:reportTbPrint'],
        viewColumns: i18n['TableReportReferences:reportTbViewColumns'],
        filterTable: i18n['TableReportReferences:reportTbFilterTable']
      },
      filter: {
        title: i18n['TableReportReferences:reportTbTitle'],
        reset: i18n['TableReportReferences:reportTbReset']
      },
      viewColumns: {
        title: i18n['TableReportReferences:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['TableReportReferences:reportTbText'],
        delete: i18n['TableReportReferences:reportTbDelete']
      }
    }
  }

  const useStyles = makeStyles((theme) => ({
    checkboxStyle: {
      color: '#ff9900'
    }
  }
  ))

  const classes = useStyles()

  const columnsReports = [
    {
      name: '',
      label: '',
      options: {
        filter: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const icon = <Checkbox
            icon={<RadioButtonUncheckedRoundedIcon />}
            checkedIcon={<RadioButtonCheckedRoundedIcon
              className={classes.checkboxStyle}
            />}
            name="checkedB"
            onClick={(e) => { handleCheckPetition(e, tableMeta) }}
          />
          return icon
        }
      }
    },
    {
      name: 'codInforme',
      label: i18n['TableReportReferences:reportRefTbColumnsCode'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'agenciaInformacion',
      label: i18n['TableReportReferences:reportRefTbColumnsAgency'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'codCreica',
      label: i18n['TableReportReferences:reportRefTbColumnsType'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'fecha',
      label: i18n['TableReportReferences:reportRefTbColumnsDate'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    },
    {
      name: 'nif',
      label: i18n['TableReportReferences:reportRefTbColumnsCif'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={() => { handlePressRow(value, _tableMeta) }}>{ value }</span>
      }
    }
  ]

  return (
    <MUIDataTable
      title = {i18n['TableReportReferences:reportTbReportTitle'] + `: ${data.length} ${i18n['TableReportReferences:reportTbReportTitle2']}`}
      data = {data}
      columns = {columnsReports}
      options = {{ ...optionsTbReport, ...labelsTbReport }}
    />
  )
}

export { TableReportsReferences }
