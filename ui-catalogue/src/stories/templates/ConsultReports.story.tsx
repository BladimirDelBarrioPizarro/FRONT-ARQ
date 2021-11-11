import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ConsultReports } from '../../components/templates/ConsultReports/ConsultReports'
import i18nObj from '../i18n.json'
import {
  tableReportsDataRows,
  tableBusinessDataRows,
  tableCompanyDataRows,
  tableCountryDataRows
} from '../../mocks'

const ConsultReportsStory: React.FC = () => {
  const onViewColumnsChange = (colum: string): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const handleSearchExperian = (cif: string, radio: string): void => {
    console.log({ // eslint-disable-line
      cif,
      radio
    })
  }
  const handleRowCodeClick = (rowData: string): void => {}

  const experianR = {
    i18n: i18nObj,
    handleSearchExperian: handleSearchExperian
  }

  const handleSearchCompany = (): void => {}
  const handleOpenBaseReport = (): void => {}
  const cleanConsultReport = (): void => {}

  // AdvancedInformationSearch
  const findLast = (): any => null
  const findAll = (): any => null
  const findLoading = false
  const findError = false
  const findCompany = (): any => null
  const findCompanyLoading = false
  const findCompanyError = false
  const reportTableProps2 = {
    i18n: i18nObj,
    data: tableReportsDataRows(5),
    handleRowClick: (): any => null,
    onChangePage: (): any => null,
    onChangeRowsPerPage: (): any => null,
    totalRows: 0,
    rowsPerPage: 5,
    page: 0,
    handleRowCodeClick: handleRowCodeClick,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange
  }

  const businessTableProps = {
    i18n: i18nObj,
    data: tableBusinessDataRows(5),
    handleRowClick: (): any => null,
    onChangePage: (): any => null,
    onChangeRowsPerPage: (): any => null,
    onViewColumnsChange: (): any => null,
    onColumnSortChange: onColumnSortChange,
    totalRows: 0,
    rowsPerPage: 5,
    page: 0
  }

  const handleLastSearch2 = (e: any, code: any): void => {}
  const handleAllSearch2 = (e: any, code: any): void => {}
  const handleBack = (): void => {}

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(10),
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

  const advancedInformationSearch = {
    i18n: i18nObj,
    country: tableCountryDataRows(10),
    findLast: findLast,
    findAll: findAll,
    findLoading: findLoading,
    findError: findError,
    findCompany: findCompany,
    findCompanyLoading: findCompanyLoading,
    findCompanyError: findCompanyError,
    reportTableProps: reportTableProps2,
    tableBusinessProps: businessTableProps,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    handleLastSearch: handleLastSearch2,
    handleAllSearch: handleAllSearch2,
    handleSearchCompany: handleSearchCompany
  }

  return (
    <ConsultReports
      i18n={i18nObj}
      country={tableCountryDataRows(10)}
      advancedInformationSearch={advancedInformationSearch}
      experianR={experianR}
      handleOpenBaseReport={handleOpenBaseReport}
      cleanConsultReport={cleanConsultReport}
    />
  )
}

const MetaConsultReportsStory: React.FC = () => {
  /** Experian R */
  const handleRowClickSearchResult = (rowData: any): void => {}
  const onChangePage = (page: number): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const onViewColumnsChange = (colum: string): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const handleOpenBaseReport = (): void => {}
  const cleanConsultReport = (): void => {}
  // const handleRowCodeClick = (rowData: string): void => {}

  const [reportTableProps, setreportTableProps] = useState({
    i18n: i18nObj,
    data: [],
    handleRowClick: handleRowClickSearchResult,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: 0,
    rowsPerPage: 5,
    page: 0,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange
  })

  const handleSearchExperian = (
    cif,
    radio
  ): void => {
    console.log({ // eslint-disable-line
      cif,
      radio
    })
  }

  const experianR = {
    i18n: i18nObj,
    handleSearchExperian: handleSearchExperian
  }

  /** Information Search */
  const [businessTableProps, setBusinessTableProps] = useState({
    i18n: i18nObj,
    data: [],
    handleRowClick: handleRowClickSearchResult,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: 0,
    rowsPerPage: 5,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    page: 0
  })

  /* AdvancedInformationSearch */
  const findLoading = false
  const findError = false
  const findCompanyLoading = false
  const findCompanyError = false

  const findLast = (
    override, params, rowsPerPage, page, sortedType, sortedBy
  ): void => {
    console.log({ // eslint-disable-line
      params,
      rowsPerPage,
      page
    })
    setreportTableProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableReportsDataRows(rowsPerPage),
        totalRows: 25,
        rowsPerPage: page
      }
    ))
  }

  const findAll = (
    override, params, rowsPerPage, page, sortedType, sortedBy
  ): void => {
    console.log({ // eslint-disable-line
      params,
      rowsPerPage,
      page
    })
    setreportTableProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableReportsDataRows(rowsPerPage),
        totalRows: 55,
        rowsPerPage: page
      }
    ))
  }

  const findCompany = (
    params, rowsPerPage, page, sortedType, sortedBy
  ): void => {
    console.log({ // eslint-disable-line
      params,
      rowsPerPage,
      page
    })
    setBusinessTableProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableBusinessDataRows(rowsPerPage),
        totalRows: 55,
        rowsPerPage: rowsPerPage
      }
    ))
  }

  const handleBack = (): void => {}

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(10),
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

  const advancedInformationSearch = {
    i18n: i18nObj,
    country: tableCountryDataRows(10),
    findLast: findLast,
    findAll: findAll,
    findLoading: findLoading,
    findError: findError,
    findCompany: findCompany,
    findCompanyLoading: findCompanyLoading,
    findCompanyError: findCompanyError,
    reportTableProps: reportTableProps,
    tableBusinessProps: businessTableProps,
    drawerBusinessCodeProps: drawerBusinessCodeProps
  }

  return (
    <ConsultReports
      i18n={i18nObj}
      country={tableCountryDataRows(10)}
      experianR={experianR}
      advancedInformationSearch={advancedInformationSearch}
      handleOpenBaseReport={handleOpenBaseReport}
      cleanConsultReport={cleanConsultReport}
    />
  )
}

export { ConsultReportsStory, MetaConsultReportsStory }

storiesOf('Components|Templates.ConsultReports', module)
  .addDecorator(withThemeProvider)
  .add('ConsultReports', () => <ConsultReportsStory />)
  .add('Interactive', () => <MetaConsultReportsStory />)
