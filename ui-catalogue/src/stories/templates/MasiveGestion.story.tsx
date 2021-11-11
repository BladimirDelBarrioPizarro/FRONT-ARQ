import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { MasiveGestion } from '../../components/templates/MasiveGestion/MasiveGestion'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows,
  masiveTableReportsDataRows,
  tableCountryDataRows
} from '../../mocks'

const MasiveGestionsStoryEmpty: React.FC = () => {
  const data = [
    {
      fecha: '',
      idReport: '',
      tipoDocumento: '',
      corresponsal: '',
      codProducto: ''
    }
  ]
  const handleSearch = (): void => { console.log('send') } // eslint-disable-line
  const handleDelete = (): void => { }
  const handleMove = (): void => { }
  const handleCopy = (): void => { }
  const handleBack = (): void => {}
  const cleanDrawerBusiness = (): void => {}

  const onChangePage = (page: number): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const onViewColumnsChange = (column: any): void => {}
  const handleCheckReport = (value: any, tableMeta: any): void => {}
  const handleRowClick = (rowData: any): void => {}

  const masiveTableReportProps = {
    i18n: i18nObj,
    data: data,
    handleRowClick: handleRowClick,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: 25,
    rowsPerPage: 5,
    page: 0,
    itemChecked: '',
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    handleCheckReport: handleCheckReport
  }

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    handleSearch: (): void => { console.log('send') }, // eslint-disable-line
    loading: false,
    error: false,
    handleBack: handleBack,
    tableCompanyProps: {
      i18n: i18nObj,
      data: tableCompanyDataRows(5),
      totalRows: 25,
      rowsPerPage: 5
    }
  }

  return (
    <MasiveGestion
      masiveTableReportProps={masiveTableReportProps}
      i18n={i18nObj}
      handleSearch={handleSearch}
      drawerBusinessCodeProps={drawerBusinessCodeProps}
      handleDelete={handleDelete}
      handleMove={handleMove}
      handleCopy={handleCopy}
      cleanReports={0}
      cleanDrawerBusiness={cleanDrawerBusiness}
    />
  )
}

const MasiveGestionsStory: React.FC = () => {
  const handleSearch = (): void => { console.log('send')  } // eslint-disable-line
  const handleDelete = (): void => { }
  const handleMove = (): void => { }
  const handleCopy = (): void => { }
  const handleBack = (): void => {}
  const cleanDrawerBusiness = (): void => {}

  const onChangePage = (page: number): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const onViewColumnsChange = (column: any): void => {}
  const handleCheckReport = (value: any, tableMeta: any): void => {}
  const handleRowClick = (rowData: any): void => {}

  const masiveTableReportProps = {
    i18n: i18nObj,
    data: masiveTableReportsDataRows(10),
    handleRowClick: handleRowClick,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: 25,
    rowsPerPage: 5,
    page: 0,
    itemChecked: '',
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    handleCheckReport: handleCheckReport
  }

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    handleSearch: (): void => { console.log('send') }, // eslint-disable-line
    loading: false,
    error: false,
    handleBack: handleBack,
    tableCompanyProps: {
      i18n: i18nObj,
      data: tableCompanyDataRows(10),
      totalRows: 30,
      rowsPerPage: 10
    }
  }

  return (
    <MasiveGestion
      masiveTableReportProps={masiveTableReportProps}
      i18n={i18nObj}
      handleSearch={handleSearch}
      drawerBusinessCodeProps={drawerBusinessCodeProps}
      handleDelete={handleDelete}
      handleMove={handleMove}
      handleCopy={handleCopy}
      cleanReports={0}
      cleanDrawerBusiness={cleanDrawerBusiness}
    />
  )
}

export { MasiveGestionsStoryEmpty, MasiveGestionsStory }

storiesOf('Components|Templates.MasiveGestions', module)
  .addDecorator(withThemeProvider)
  .add('MasiveGestions', () => <MasiveGestionsStoryEmpty />)
  .add('Interactive', () => <MasiveGestionsStory />)
