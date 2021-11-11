import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { AdvancedInformationSearch } from '../../components/organisms/AdvancedInformationSearch/AdvancedInformationSearch'
import i18nObj from '../i18n.json'
import { tableBusinessDataRows, tableReportsDataRows, tableCompanyDataRows } from '../../mocks'

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

const findLast = (): any => null
const findAll = (): any => null
const findLoading = false
const findError = false
const findCompany = (): any => null
const findCompanyLoading = false
const findCompanyError = false
const reportTableProps = {
  i18n: i18nObj,
  data: [],
  handleRowClick: (): any => null,
  onChangePage: (): any => null,
  onChangeRowsPerPage: (): any => null,
  handleRowCodeClick: (): any => null,
  onViewColumnsChange: (): any => null,
  onColumnSortChange: (): any => null,
  totalRows: 0,
  page: 0,
  rowsPerPage: 10
}
const businessTableProps = {
  i18n: i18nObj,
  data: [],
  handleRowClick: (): any => null,
  onChangePage: (): any => null,
  onChangeRowsPerPage: (): any => null,
  onViewColumnsChange: (): any => null,
  onColumnSortChange: (): any => null,
  totalRows: 0,
  rowsPerPage: 5,
  page: 0
}

const drawerBusinessCodeProps = {
  i18n: i18nObj,
  countries: country,
  handleSearch: (): void => { }, // eslint-disable-line
  loading: false,
  error: false,
  handleBack: (): void => { }, // eslint-disable-line
  tableCompanyProps: {
    i18n: i18nObj,
    data: tableCompanyDataRows(5),
    totalRows: 5,
    rowsPerPage: 5
  }
}

const AdvancedInformationSearchStoryEmptyTables: React.FC = () => {
  return <AdvancedInformationSearch
    i18n={i18nObj}
    country={country}
    findLast={findLast}
    findAll={findAll}
    findLoading={findLoading}
    findError={findError}
    findCompany={findCompany}
    findCompanyLoading={findCompanyLoading}
    findCompanyError={findCompanyError}
    reportTableProps={reportTableProps}
    tableBusinessProps={businessTableProps}
    drawerBusinessCodeProps={drawerBusinessCodeProps}
  />
}

const AdvancedInformationSearchStoryTablesWithData: React.FC = () => {
  const [rowsPerPage] = useState(10)
  const [totalRow, setTotalRow] = useState(20)
  const [page, setPage] = useState(0)
  const [reportsData, setReportsData] = useState(tableReportsDataRows(rowsPerPage))

  const findLast = (): any => {
    setPage(0)
    setReportsData(tableReportsDataRows(rowsPerPage))
    setTotalRow(rowsPerPage * 2)
  }
  const findAll = (): any => {
    setPage(0)
    setReportsData(tableReportsDataRows(rowsPerPage))
    setTotalRow(rowsPerPage * 2)
  }
  const findLoading = false
  const findError = false
  const findCompany = (): any => null
  const findCompanyLoading = false
  const findCompanyError = false
  const reportTablePropsWithData = {
    i18n: i18nObj,
    data: reportsData,
    handleRowClick: (): any => null,
    onChangePage: (): any => null,
    onChangeRowsPerPage: (): any => null,
    handleRowCodeClick: (): any => null,
    onViewColumnsChange: (): any => null,
    onColumnSortChange: (): any => null,
    totalRows: totalRow,
    rowsPerPage: rowsPerPage,
    page: page
  }

  const businessTableProps = {
    i18n: i18nObj,
    data: tableBusinessDataRows(5),
    handleRowClick: (): any => null,
    onChangePage: (): any => null,
    onChangeRowsPerPage: (): any => null,
    onViewColumnsChange: (): any => null,
    onColumnSortChange: (): any => null,
    totalRows: 0,
    rowsPerPage: 5,
    page: 0
  }

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: country,
    handleSearch: (): void => { }, // eslint-disable-line
    loading: false,
    error: false,
    handleBack: (): void => { }, // eslint-disable-line
    tableCompanyProps: {
      i18n: i18nObj,
      data: tableCompanyDataRows(5),
      totalRows: 5,
      rowsPerPage: 5
    }
  }

  return <AdvancedInformationSearch
    i18n={i18nObj}
    country={country}
    findLast={findLast}
    findAll={findAll}
    findLoading={findLoading}
    findError={findError}
    findCompany={findCompany}
    findCompanyLoading={findCompanyLoading}
    findCompanyError={findCompanyError}
    reportTableProps={reportTablePropsWithData}
    tableBusinessProps={businessTableProps}
    drawerBusinessCodeProps={drawerBusinessCodeProps}
  />
}

export { AdvancedInformationSearchStoryEmptyTables, AdvancedInformationSearchStoryTablesWithData }

storiesOf('Components|Organisms.AdvancedInformationSearch', module)
  .addDecorator(withThemeProvider)
  .add('Empty tables', () => <AdvancedInformationSearchStoryEmptyTables />)
  .add('Tables with data', () => <AdvancedInformationSearchStoryTablesWithData />)
