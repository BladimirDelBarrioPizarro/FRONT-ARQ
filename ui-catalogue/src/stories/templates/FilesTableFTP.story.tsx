import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { FilesTableFTP } from '../../components/templates/FilesTableFTP/FilesTable'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows
} from '../../mocks'

const FilesTableFTPStory: React.FC = () => {
  const country = [
    {
      value: '1',
      label: 'ESP'
    },
    {
      value: '2',
      label: 'ENG'
    },
    {
      value: '3',
      label: 'POR'
    },
    {
      value: '4',
      label: 'FRA'
    }
  ]

  const sending = ''

  const handleRowClickSearchResult = (rowData: any): void => {}
  const onChangePage = (page: number): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const totalRows = 15
  const rowsPerPage = 5
  const page = 0

  const findCompany = (): void => null

  const handleSend = (
    data
  ): void => {
    console.log({ // eslint-disable-line
      data
    })
  }
  const handleBack = (): void => {}

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: country,
    handleSearch: (): void => { }, // eslint-disable-line
    loading: false,
    error: false,
    handleBack: handleBack,
    tableCompanyProps: {
      i18n: i18nObj,
      data: tableCompanyDataRows(5),
      totalRows: 5,
      rowsPerPage: 5
    }
  }

  return <FilesTableFTP
    sending={sending}
    i18n={i18nObj}
    handleRowClickSearchResult={handleRowClickSearchResult}
    onChangePage={onChangePage}
    onChangeRowsPerPage={onChangeRowsPerPage}
    totalRows={totalRows}
    rowsPerPage={rowsPerPage}
    page={page}
    findCompany={findCompany}
    handleSend={handleSend}
    drawerBusinessCodeProps={drawerBusinessCodeProps}
  />
}

export { FilesTableFTPStory }

storiesOf('Components|Templates.FilesTableFTP', module)
  .addDecorator(withThemeProvider)
  .add('FilesTableFTP', () => <FilesTableFTPStory />)
