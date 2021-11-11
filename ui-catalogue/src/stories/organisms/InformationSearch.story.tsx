import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { select } from '@storybook/addon-knobs'
import { InformationSearch } from '../../components/organisms/InformationSearch/InformationSearch'
import i18nObj from '../i18n.json'
import { tableBusinessDataRows, tableReportsDataRows } from '../../mocks'

const InformationSearchStory: React.FC = () => {
  const countries = [
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

  const colorOptions = {
    default: 'default',
    inherit: 'inherit',
    primary: 'primary',
    secondary: 'secondary'
  }

  const variantOptions = {
    contained: 'contained',
    outlined: 'outlined',
    text: 'text'
  }

  const knobsGroup = 'Props'

  const handleRowClickSearchResult = (rowData: any): void => {}
  const onChangePage = (page: number): void => {}
  const onViewColumnsChange = (column: string): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const [businessTableProps, setBusinessTableProps] = useState({
    i18n: i18nObj,
    data: [],
    handleRowClick: handleRowClickSearchResult,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    totalRows: 0,
    rowsPerPage: 5,
    page: 0
  })

  const [reportTableProps, setreportTableProps] = useState({
    i18n: i18nObj,
    data: [],
    handleRowClick: handleRowClickSearchResult,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    totalRows: 0,
    rowsPerPage: 5,
    page: 0
  })

  const handleLastSearch = (
    code,
    itemsPerPage = 5,
    currentPage = 0
  ): void => {
    console.log({ // eslint-disable-line
      code,
      itemsPerPage,
      currentPage
    })
    setreportTableProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableReportsDataRows(itemsPerPage),
        totalRows: 25,
        rowsPerPage: itemsPerPage
      }
    ))
  }

  const handleAllSearch = (
    code,
    itemsPerPage = 5,
    currentPage = 0
  ): void => {
    console.log({ // eslint-disable-line
      code,
      itemsPerPage,
      currentPage
    })
    setreportTableProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableReportsDataRows(itemsPerPage),
        totalRows: 55,
        rowsPerPage: itemsPerPage
      }
    ))
  }

  const handleSearchCompany = (country, companyName, companyId, rowsPerPage, page, sortedType, sortedBy): void => {
    console.log({ // eslint-disable-line
      country, companyName, companyId, rowsPerPage, page, sortedType, sortedBy
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

  return <InformationSearch
    i18n={i18nObj}
    country={countries}
    businessTableProps={businessTableProps}
    reportsTableProps={reportTableProps}
    handleLastSearch={handleLastSearch}
    handleAllSearch={handleAllSearch}
    handleSearchCompany={handleSearchCompany}
    buttonLastSearchVariant = {select<any>('Variante del botón', variantOptions, variantOptions.contained, knobsGroup)}
    buttonAllSearchColor = {select<any>('Color del botón', colorOptions, colorOptions.primary, knobsGroup)}
    buttonAllSearchVariant ={select<any>('Variante del botón', variantOptions, variantOptions.contained, knobsGroup)}
    buttonCleanColor = {select<any>('Color del botón', colorOptions, colorOptions.primary, knobsGroup)}
    buttonCleanVariant = {select<any>('Variante del botón', variantOptions, variantOptions.contained, knobsGroup)}
    buttonHelpColor = {select<any>('Color del botón', colorOptions, colorOptions.primary, knobsGroup)}
    buttonHelpVariant ={select<any>('Variante del botón', variantOptions, variantOptions.contained, knobsGroup)}
  />
}

export { InformationSearchStory }

storiesOf('Components|Organisms.InformationSearch', module)
  .addDecorator(withThemeProvider)
  .add('InformacionSearch', () => <InformationSearchStory />)
