import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableReport } from '../../components/molecules/TableReports/TableReports'
import i18nObj from '../i18n.json'
import { tableReportsDataRows } from '../../mocks'

const TableReportsStory: React.FC = () => {
  const numRows = 5
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(numRows)

  useEffect(() => {
    setData(tableReportsDataRows(numRows))
    setTotalRows(numRows * (page + 2))
  }, [])

  const handleOnChangePage = (pageNumber): void => {
    setData(tableReportsDataRows(rowsPerPage))
    setPage(pageNumber)
    setTotalRows(rowsPerPage * (pageNumber + 2))
  }

  const handleRowClickSearchResult = (row): void => {
    alert(row)
  }

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const onColumnSortChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const handleRnChangeRowsPerPage = (rowsPerPage): void => {
    setPage(0)
    setRowsPerPage(rowsPerPage)
    setData(tableReportsDataRows(rowsPerPage))
    setTotalRows(rowsPerPage * (2))
    // eslint-disable-next-line no-console
    console.log(rowsPerPage)
  }

  return <TableReport
    data={data}
    handleRowClick={handleRowClickSearchResult}
    i18n={i18nObj}
    onChangePage={handleOnChangePage}
    onChangeRowsPerPage={handleRnChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPage}
    page={page}
    onViewColumnsChange={onViewColumnsChange}
    onColumnSortChange={onColumnSortChange}
  />
}

export { TableReportsStory }

storiesOf('Components|Molecules.TableReports', module)
  .addDecorator(withThemeProvider)
  .add('Table Reports', () => <TableReportsStory />)
