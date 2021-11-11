import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableRequestList } from '../../components/molecules/TableRequestList/TableRequestList'
import i18nObj from '../i18n.json'
import { tableRequestListDataRows } from '../../mocks'

const TableRequestListStory: React.FC = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const itemChecked = ''
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    setData(tableRequestListDataRows(5))
    setTotalRows(55)
  }, [])

  const handleOnChangePage = (pageNumber): void => {
    setData(tableRequestListDataRows(rowsPerPage))
    setPage(pageNumber)
  }

  const handlePressRow = (value: any, tableMeta: any): void => {
  }

  const handleRnChangeRowsPerPage = (rowsPerPage): void => {
    setRowsPerPage(rowsPerPage)
    setData(tableRequestListDataRows(rowsPerPage))
  }

  const handleDetailRequest = (): void => {
  }

  const handleCheckPetition = (value: any): void => {
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
  }

  const onViewColumnsChange = (column: any): void => {
  }

  return <TableRequestList
    i18n={i18nObj}
    data={data}
    onChangePage={handleOnChangePage}
    onChangeRowsPerPage={handleRnChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPage}
    page={page}
    itemChecked={itemChecked}
    handleDetailRequest={handleDetailRequest}
    handleCheckPetition={handleCheckPetition}
    onColumnSortChange={onColumnSortChange}
    handlePressRow={handlePressRow}
    onViewColumnsChange={onViewColumnsChange}
  />
}

export { TableRequestListStory }

storiesOf('Components|Molecules.TableRequestList', module)
  .addDecorator(withThemeProvider)
  .add('Table RequestList', () => <TableRequestListStory />)
