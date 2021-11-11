import React from 'react'
import { makeStyles } from '@material-ui/core'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

export interface Ii18nHistoricTable {
  'HistoricTable:reportTbNoMatch': string
  'HistoricTable:reportTbNext': string
  'HistoricTable:reportTbPrevious': string
  'HistoricTable:reportTbPerPage': string
  'HistoricTable:reportTbDisplayRows': string
  'HistoricTable:reportTbSearch': string
  'HistoricTable:reportTbDownladCsv': string
  'HistoricTable:reportTbPrint': string
  'HistoricTable:reportTbViewColumns': string
  'HistoricTable:reportTbFilterTable': string
  'HistoricTable:reportTbTitle': string
  'HistoricTable:reportTbReset': string
  'HistoricTable:reportTbViewColumnsShow': string
  'HistoricTable:reportTbText': string
  'HistoricTable:reportTbDelete': string
  'HistoricTable:label1ht': string
  'HistoricTable:label2ht': string
  'HistoricTable:label3ht': string
  'HistoricTable:cardTitleht': string
}

export interface IHistoricTable {
  i18n: Ii18nHistoricTable
  data: Array<object | number[] | string[]>
  handleRowClick: (rowData: any) => void
  onChangePage: (page: number) => void
  onChangeRowsPerPage: (pageNumber: number) => void
  handleDownloadFile: () => void
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
const useStyles = makeStyles({
  tableContainer: {
    width: '100%',
    height: '100%',
    marginTop: 20,
    marginBottom: 20
  }
})

const HistoricTable: React.FC<IHistoricTable> = ({
  i18n,
  data,
  handleRowClick,
  onChangePage,
  onChangeRowsPerPage,
  totalRows,
  rowsPerPage = 5,
  page,
  handleDownloadFile

}) => {
  const bytesToSize: (n: number) => string = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
  }

  const optionsTbHistoric = {
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    pagination: true,
    selectableRows: 'none',
    onRowClick: handleRowClick,
    filter: false,
    download: false,
    print: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [5, 10, 25, 100],
    count: totalRows,
    page: page,
    serverSide: true,
    search: false
  }
  const labelsTbHistoric = {
    textLabels: {
      body: {
        noMatch: i18n['HistoricTable:reportTbNoMatch']
      },
      pagination: {
        next: i18n['HistoricTable:reportTbNext'],
        previous: i18n['HistoricTable:reportTbPrevious'],
        rowsPerPage: i18n['HistoricTable:reportTbPerPage'],
        displayRows: i18n['HistoricTable:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['HistoricTable:reportTbSearch'],
        downloadCsv: i18n['HistoricTable:reportTbDownladCsv'],
        print: i18n['HistoricTable:reportTbPrint'],
        viewColumns: i18n['HistoricTable:reportTbViewColumns'],
        filterTable: i18n['HistoricTable:reportTbFilterTable']
      },
      filter: {
        title: i18n['HistoricTable:reportTbTitle'],
        reset: i18n['HistoricTable:reportTbReset']
      },
      viewColumns: {
        title: i18n['HistoricTable:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['HistoricTable:reportTbText'],
        delete: i18n['HistoricTable:reportTbDelete']
      }
    }
  }

  const columnsHistoric: MUIDataTableColumn[] = [
    {
      name: 'name',
      label: i18n['HistoricTable:label1ht']
    },
    {
      name: 'size',
      label: i18n['HistoricTable:label2ht'],
      options: {
        filter: false,
        customBodyRender: (value) => {
          return bytesToSize(value)
        }
      }
    },
    {
      name: 'download',
      label: i18n['HistoricTable:label3ht'],
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => {
          const icon = <CloudDownloadIcon onClick={handleDownloadFile}></CloudDownloadIcon>
          return icon
        }
      }
    }
  ]

  const classes = useStyles()
  return (
    <div className={classes.tableContainer}>
      <MUIDataTable
        title={i18n['HistoricTable:cardTitleht']}
        columns={columnsHistoric}
        data={data}
        options={{ ...labelsTbHistoric, ...optionsTbHistoric }}/>
    </div>
  )
}

export { HistoricTable }
