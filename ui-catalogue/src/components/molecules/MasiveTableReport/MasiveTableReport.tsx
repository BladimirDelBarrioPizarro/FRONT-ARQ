import React from 'react'
import MUIDataTable from 'mui-datatables'
import { TableElementCheckbox } from '../../atoms/index'
import { IMasiveTableReport } from './types'

const MasiveTableReport: React.FC<IMasiveTableReport> = (
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
    onColumnSortChange,
    handleCheckReport
  }
) => {
  const optionsTbReport = {
    onChangePage,
    onChangeRowsPerPage,
    pagination: true,
    selectableRows: 'none',
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
        noMatch: i18n['MasiveTableReport:reportTbNoMatch']
      },
      pagination: {
        next: i18n['MasiveTableReport:reportTbNext'],
        previous: i18n['MasiveTableReport:reportTbPrevious'],
        rowsPerPage: i18n['MasiveTableReport:reportTbPerPage'],
        displayRows: i18n['MasiveTableReport:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['MasiveTableReport:reportTbSearch'],
        downloadCsv: i18n['MasiveTableReport:reportTbDownladCsv'],
        print: i18n['MasiveTableReport:reportTbPrint'],
        viewColumns: i18n['MasiveTableReport:reportTbViewColumns'],
        filterTable: i18n['MasiveTableReport:reportTbFilterTable']
      },
      filter: {
        title: i18n['MasiveTableReport:reportTbTitle'],
        reset: i18n['MasiveTableReport:reportTbReset']
      },
      viewColumns: {
        title: i18n['MasiveTableReport:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['MasiveTableReport:reportTbText'],
        delete: i18n['MasiveTableReport:reportTbDelete']
      }
    }
  }

  const columnsReports = [
    {
      name: 'id',
      label: i18n['TableRequestList:requestListTbEmpty'],
      options: {
        filter: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const icon = <TableElementCheckbox
            value={value}
            tableMeta={tableMeta}
            singelValue={false}
            handleCheckReport={handleCheckReport}
          />
          return icon
        }
      }
    },
    {
      name: 'fecha',
      label: i18n['MasiveTableReport:reportTbColumnsDate'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'tipoDocumento',
      label: i18n['MasiveTableReport:reportTbColumnsDocumentType'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'corresponsal',
      label: i18n['MasiveTableReport:reportTbColumnsCorresponsal'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    },
    {
      name: 'codProducto',
      label: i18n['MasiveTableReport:reportTbColumnsProducto'],
      options: {
        filter: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: React.ReactNode, _tableMeta: any) => <span style={{ cursor: 'pointer' }} onClick={handleRowClick}>{ value }</span>
      }
    }
  ]

  return (
    <MUIDataTable
      title = {i18n['MasiveTableReport:reportTbReportTitle']}
      data = {data}
      columns = {columnsReports}
      options = {{ ...optionsTbReport, ...labelsTbReport }}
    />
  )
}

export { MasiveTableReport }
