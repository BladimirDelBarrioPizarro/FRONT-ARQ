import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableUtilitiesReportRef } from '../../components/molecules/TableUtilitiesReportRef/TableUtilitiesReportRef'
import i18nObj from '../i18n.json'
import { tableUtilitiesReportRefDataRows } from '../../mocks'

const TableUtilitiesReportRefStory: React.FC = () => {
  const [data, setData] = useState([])
  const [pageBusiness, setPageBusiness] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPageBusiness, setRowsPerPageBusiness] = useState(10)

  useEffect(() => {
    setData(tableUtilitiesReportRefDataRows(5))
    setTotalRows(55)
  }, [])

  const handlePressRow = (value: any, tableMeta: any): void => {
    // eslint-disable-next-line no-console
    console.log(value)
  }

  const onChangePage = (pageNumber): void => {
    setData(tableUtilitiesReportRefDataRows(rowsPerPageBusiness))
    setPageBusiness(pageNumber)
    // eslint-disable-next-line no-console
    console.log(pageNumber)
  }

  const onChangeRowsPerPage = (pageNumber): void => {
    setRowsPerPageBusiness(pageNumber)
    setData(tableUtilitiesReportRefDataRows(pageNumber))
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    // eslint-disable-next-line no-console
    console.log(changedColumn, direction)
  }

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const handleSendCancel = (): void => {}
  return <TableUtilitiesReportRef
    i18n={i18nObj}
    data={data}
    handlePressRow={handlePressRow}
    onChangePage={onChangePage}
    onChangeRowsPerPage={onChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPageBusiness}
    page={pageBusiness}
    onViewColumnsChange={onViewColumnsChange}
    onColumnSortChange={onColumnSortChange}
    handleSendCancel={handleSendCancel}

  />
}

storiesOf('Components|Molecules.TableUtilitiesReportRef', module)
  .addDecorator(withThemeProvider)
  .add('Table UtilitiesReportRef', () => <TableUtilitiesReportRefStory />)

export { TableUtilitiesReportRefStory }
