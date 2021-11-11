import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableExperianReport } from '../../components/molecules/TableExperianReports/TableExperianReports'
import i18nObj from '../i18n.json'
import { tableExperianReportDataRows } from '../../mocks'

const TableExperianReportStory: React.FC = () => {
  const [data, setData] = useState([])
  const [pageBusiness, setPageBusiness] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPageBusiness, setRowsPerPageBusiness] = useState(10)

  useEffect(() => {
    setData(tableExperianReportDataRows(5))
    setTotalRows(55)
  }, [])

  const handleOnChangePageExperianReport = (pageNumber): void => {
    setData(tableExperianReportDataRows(rowsPerPageBusiness))
    setPageBusiness(pageNumber)
    // eslint-disable-next-line no-console
    console.log(pageNumber)
  }

  const handleRowClickSearchResult = (rowData): void => {
    // eslint-disable-next-line no-console
    console.log(rowData)
  }

  const handleRnChangeRowsPerPageExperianReport = (pageNumber): void => {
    setRowsPerPageBusiness(pageNumber)
    setData(tableExperianReportDataRows(pageNumber))
  }

  const onColumnSortChangeExperianReport = (changedColumn: string, direction: string): void => {
    // eslint-disable-next-line no-console
    console.log(changedColumn, direction)
  }

  const onViewColumnsChangeExperianReport = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  return <TableExperianReport
    i18n={i18nObj}
    data={data}
    handleRowClick={handleRowClickSearchResult}
    onChangePage={handleOnChangePageExperianReport}
    onChangeRowsPerPage={handleRnChangeRowsPerPageExperianReport}
    totalRows={totalRows}
    rowsPerPage={rowsPerPageBusiness}
    page={pageBusiness}
    onViewColumnsChange={onViewColumnsChangeExperianReport}
    onColumnSortChange={onColumnSortChangeExperianReport}

  />
}

storiesOf('Components|Molecules.TableExperianReport', module)
  .addDecorator(withThemeProvider)
  .add('Table Experian Report', () => <TableExperianReportStory />)

export { TableExperianReportStory }
