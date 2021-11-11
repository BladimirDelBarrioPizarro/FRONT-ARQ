import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DrawerBusinessCode } from '../../components/organisms/DrawerBusinessCode/DrawerBusinessCode'
import i18nObj from '../i18n.json'
import { tableBusinessDataRows, tableCountryDataRows } from '../../mocks'

const loading = false
const error = false

const handleRowClickSearchResult = (): any => null
const handleSearch = (): any => null
const handleBack = (): any => null
const totalRows = 10
const tableCompanyProps = {
  i18n: i18nObj,
  data: tableBusinessDataRows(50),
  handleRowClickSearchResult: handleRowClickSearchResult,
  totalRows: totalRows,
  rowsPerPage: 5
}

const DrawerBusinessCodeStoryAll: React.FC = () => (
  <DrawerBusinessCode
    tableCompanyProps={tableCompanyProps}
    i18n={i18nObj}
    countries={tableCountryDataRows(10)}
    handleSearch={handleSearch}
    loading={loading}
    error={error}
    handleBack={handleBack}
  />
)

const DrawerBusinessCodeStoryEmpty: React.FC = () => (
  <DrawerBusinessCode
    tableCompanyProps={
      Object.assign(
        {},
        tableCompanyProps,
        { companyDataRows: [] }
      )
    }
    i18n={i18nObj}
    countries={tableCountryDataRows(10)}
    handleSearch={handleSearch}
    loading={loading}
    error={error}
    handleBack={handleBack}
  />
)

export { DrawerBusinessCodeStoryAll, DrawerBusinessCodeStoryEmpty }

storiesOf('Components|Organisms.DrawerBusinessCode', module)
  .addDecorator(withThemeProvider)
  .add('DrawerBusinessCode All', () => <DrawerBusinessCodeStoryAll />)
  .add('DrawerBusinessCode Empty', () => <DrawerBusinessCodeStoryEmpty />)
