import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableReportsReferences } from '../../components/molecules/TableReportsReferences/TableReportsReferences'
import i18nObj from '../i18n.json'
import { tableReportsRefDataRows } from '../../mocks'

const TableReportReferencesStory: React.FC = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    setData(tableReportsRefDataRows(5))
    setTotalRows(55)
  }, [])

  const handleOnChangePage = (pageNumber): void => {
    setData(tableReportsRefDataRows(rowsPerPage))
    setPage(pageNumber)
    // eslint-disable-next-line no-console
    console.log(pageNumber)
  }

  const handlePressRow = (value: any, tableMeta: any): void => {
    // eslint-disable-next-line no-console
    console.log(value, tableMeta)
  }

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const onColumnSortChange = (changedColumn: any, direction: any): void => {
    // eslint-disable-next-line no-console
    console.log(changedColumn, direction)
  }

  const handleRnChangeRowsPerPage = (rowsPerPage): void => {
    setRowsPerPage(rowsPerPage)
    setData(tableReportsRefDataRows(rowsPerPage))
    // eslint-disable-next-line no-console
    console.log(rowsPerPage)
  }

  const handleCheckPetition = (value: any, tableMeta: any): void => {
    // eslint-disable-next-line no-console
    console.log(value, tableMeta)
  }

  return <TableReportsReferences
    i18n={i18nObj}
    data={data}
    handlePressRow={handlePressRow}
    onChangePage={handleOnChangePage}
    onChangeRowsPerPage={handleRnChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPage}
    page={page}
    onViewColumnsChange={onViewColumnsChange}
    onColumnSortChange={onColumnSortChange}
    handleCheckPetition={handleCheckPetition}
  >
  </TableReportsReferences>
}

export { TableReportReferencesStory }

storiesOf('Components|Molecules.TableReportsReferences', module)
  .addDecorator(withThemeProvider)
  .add('Table Reports References', () => <TableReportReferencesStory />)
