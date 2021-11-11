import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TableCorrespondents } from '../../components/molecules/TableCorrespondents/TableCorrespondents'
import i18nObj from '../i18n.json'
import { tableCorrespondentsDataRows } from '../../mocks'

const TableCorrespondentsStory: React.FC = () => {
  const [data, setData] = useState([])
  const [pageBusiness, setPageBusiness] = useState(0)
  const [totalRows, setTotalRows] = useState(0)
  const [rowsPerPageBusiness, setRowsPerPageBusiness] = useState(10)

  useEffect(() => {
    setData(tableCorrespondentsDataRows(5))
    setTotalRows(55)
  }, [])

  const handleOnChangePageCorrespondent = (pageNumber): void => {
    setData(tableCorrespondentsDataRows(rowsPerPageBusiness))
    setPageBusiness(pageNumber)
    // eslint-disable-next-line no-console
    console.log(pageNumber)
  }

  const handleRowClickSearchResult = (rowData): void => {
    // eslint-disable-next-line no-console
    console.log(rowData)
  }

  const handleRnChangeRowsPerPageBusiness = (pageNumber): void => {
    setRowsPerPageBusiness(pageNumber)
    setData(tableCorrespondentsDataRows(pageNumber))
  }

  const onColumnSortChangeCorrespondent = (changedColumn: string, direction: string): void => {
    // eslint-disable-next-line no-console
    console.log(changedColumn, direction)
  }

  return <TableCorrespondents
    data={data}
    handleRowClickSearchResult={handleRowClickSearchResult}
    i18n={i18nObj}
    onChangePage={handleOnChangePageCorrespondent}
    onChangeRowsPerPage={handleRnChangeRowsPerPageBusiness}
    onColumnSortChange={onColumnSortChangeCorrespondent}
    totalRows={totalRows}
    rowsPerPage={rowsPerPageBusiness}
    page={pageBusiness}
  />
}

storiesOf('Components|Molecules.TableCorrespondents', module)
  .addDecorator(withThemeProvider)
  .add('Table Correspondents', () => <TableCorrespondentsStory />)

export { TableCorrespondentsStory }
