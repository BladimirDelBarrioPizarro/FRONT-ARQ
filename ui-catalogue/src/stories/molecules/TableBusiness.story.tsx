import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableBusiness } from '../../components/molecules/TableBusiness/TableBusiness'
import i18nObj from '../i18n.json'
import { tableBusinessDataRows } from '../../mocks'

const TableBusinessStory: React.FC = () => {
  const [data, setData] = useState([])
  const [pageBusiness, setPageBusiness] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPageBusiness, setRowsPerPageBusiness] = useState(10)

  useEffect(() => {
    setData(tableBusinessDataRows(5))
    setTotalRows(55)
  }, [])

  const handleOnChangePageBusiness = (pageNumber): void => {
    setData(tableBusinessDataRows(rowsPerPageBusiness))
    setPageBusiness(pageNumber)
    // eslint-disable-next-line no-console
    console.log(pageNumber)
  }

  const handleRowClickSearchResult = (row): void => {
    alert(row)
  }

  const handleRnChangeRowsPerPageBusiness = (rowsPerPage): void => {
    setRowsPerPageBusiness(rowsPerPage)
    setData(tableBusinessDataRows(rowsPerPage))
  }

  const onViewColumnsChangeBusiness = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const onColumnSortChangeBusiness = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  return <TableBusiness
    data={data}
    handleRowClick={handleRowClickSearchResult}
    i18n={i18nObj}
    onChangePage={handleOnChangePageBusiness}
    onChangeRowsPerPage={handleRnChangeRowsPerPageBusiness}
    totalRows={totalRows}
    rowsPerPage={rowsPerPageBusiness}
    page={pageBusiness}
    onViewColumnsChange={onViewColumnsChangeBusiness}
    onColumnSortChange={onColumnSortChangeBusiness}
  />
}

storiesOf('Components|Molecules.TableBusiness', module)
  .addDecorator(withThemeProvider)
  .add('Table Business', () => <TableBusinessStory />)

export { TableBusinessStory }
