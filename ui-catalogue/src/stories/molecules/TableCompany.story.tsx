import { storiesOf } from '@storybook/react'
import React, { useState, useEffect } from 'react'

import i18n from '../i18n.json'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableCompany } from '../../components/molecules/TableCompany/TableCompany'
import { tableCompanyDataRows } from '../../mocks/TableCompanyMock'

const MetaTableCompany: React.FC = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    setData(tableCompanyDataRows(5))
    setTotalRows(55)
  }, [])

  const handleOnChangePage = (pageNumber): void => {
    setData(tableCompanyDataRows(rowsPerPage))
    setPage(pageNumber)
  }

  const handleRowClickSearchResult = (row): void => {
    alert(row)
  }

  const handleRnChangeRowsPerPage = (rowsPerPage): void => {
    setRowsPerPage(rowsPerPage)
    setData(tableCompanyDataRows(rowsPerPage))
  }

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const onColumnSortChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  return (

    <TableCompany
      i18n={i18n}
      data={data}
      handleRowClickSearchResult={handleRowClickSearchResult}
      onChangePage={handleOnChangePage}
      onChangeRowsPerPage={handleRnChangeRowsPerPage}
      totalRows={totalRows}
      rowsPerPage={rowsPerPage}
      page={page}
      onViewColumnsChange={onViewColumnsChange}
      onColumnSortChange={onColumnSortChange}
    />
  )
}

export { MetaTableCompany }

storiesOf('Components|Molecules.TableCompany', module)
  .addDecorator(withThemeProvider)
  .add('Interactive Example', () => <MetaTableCompany />)
