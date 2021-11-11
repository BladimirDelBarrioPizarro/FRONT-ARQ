import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { MasiveTableReport } from '../../components/molecules/MasiveTableReport/MasiveTableReport'
import i18nObj from '../i18n.json'
import { masiveTableReportsDataRows } from '../../mocks'

const MasiveTableReporStory: React.FC = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    setData(masiveTableReportsDataRows(5))
    setTotalRows(1000)
  }, [])

  const handleRowClick = (row): void => {
    alert(row)
  }

  const handleOnChangePage = (pageNumber): void => {
    setData(masiveTableReportsDataRows(rowsPerPage))
    setTotalRows(1000)
    setPage(pageNumber)
  }

  const handleRnChangeRowsPerPage = (rowsPerPage): void => {
    setRowsPerPage(rowsPerPage)
    setTotalRows(1000)
    setData(masiveTableReportsDataRows(rowsPerPage))
  }

  const handleDetailRequest = (): void => {
    console.log('show detail') // eslint-disable-line
  }

  const handleCheckPetition = (value: any): void => {
    console.log(value) // eslint-disable-line
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    console.log(changedColumn, direction) // eslint-disable-line
  }

  return <MasiveTableReport
    data={data}
    handleRowClick={handleRowClick}
    i18n={i18nObj}
    onChangePage={handleOnChangePage}
    onChangeRowsPerPage={handleRnChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPage}
    page={page}
    onViewColumnsChange={handleDetailRequest}
    onColumnSortChange={onColumnSortChange}
    handleCheckReport={handleCheckPetition}
  />
}

export { MasiveTableReporStory }

storiesOf('Components|Molecules.MasiveTableRepor', module)
  .addDecorator(withThemeProvider)
  .add('Table MasiveTableReport', () => <MasiveTableReporStory />)
