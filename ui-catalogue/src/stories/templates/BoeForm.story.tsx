import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'

import { BoeForm } from '../../components/templates/BoeForm/BoeForm'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows,
  tableCorrespondentsDataRows,
  tableCountryDataRows
} from '../../mocks'

const documentType = [
  { value: '1', result: '4IP - 94 IMPUESTO SOCIEDADES' },
  { value: '2', result: '91E - INFORMACION SUP. A 3 AÑOS' },
  { value: '3', result: '93B - 93 BALANCE' },
  { value: '4', result: '94D - 94DICTAMEN AUDITORIA' },
  { value: '5', result: '96M - 96 MEMORIA GENERAL' }
]

const productCode = [
  { value: '1', result: '1 - INFORME O-L INSTANTANEO' },
  { value: '2', result: '2 - NO SELECCION ON-LINE' },
  { value: '3', result: '3 - INFORME PRELIMINAR ON-LINE' },
  { value: '4', result: '4 - ENCARGO INFORME O-L URGENTE' },
  { value: '5', result: '5 - INFORME URGENTE' }
]

const spendType = [
  { value: '1', result: '1 - GAST.TELEX' },
  { value: '2', result: '2 - GAST.TELEX' },
  { value: '3', result: '3 - GEIS' },
  { value: '4', result: '4 - LEGITIMAC' },
  { value: '5', result: '5 - INTERVENC' }
]
const handleBack = (): void => {}

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
    totalRows: 5,
    rowsPerPage: 5
  }
}

const drawerCorresponsalCodeProps = {
  i18n: i18nObj,
  countries: tableCountryDataRows(5),
  handleSearch: (): void => { alert('Botón buscar') },
  loading: false,
  error: false,
  tableCorrespondentsProps: {
    i18n: i18nObj,
    data: tableCorrespondentsDataRows(5),
    totalRows: 5,
    rowsPerPage: 5
  }
}

const MetaBoeFormStory: React.FC = () => {
  const [tableCompanyProps, setTableCompanyProps] = useState({
    data: [],
    totalRows: 0,
    rowsPerPage: 5
  })
  const [tableCorrespondentsProps, setTableCorrespondentsProps] = useState({
    data: [],
    totalRows: 0,
    rowsPerPage: 5
  })

  const handleSearch = (...rest): void => {
    alert(`Valores de busqueda ${JSON.stringify(rest[0], null, 2)}`)
    console.log(rest[0]) // eslint-disable-line
  }

  const drawerBusinessCodeSearch = (
    companyId,
    companyName,
    country,
    rowsPerPage,
    page,
    sortedBy,
    sortedType
  ): void => {
    console.log({ // eslint-disable-line
      companyId,
      companyName,
      country,
      rowsPerPage,
      page,
      sortedBy,
      sortedType
    })
    setTableCompanyProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableCompanyDataRows(rowsPerPage),
        totalRows: 55,
        rowsPerPage: rowsPerPage
      }
    ))
  }

  const drawerCorresponsalCodeSearch = (
    country,
    rowsPerPage,
    page,
    sortedBy,
    sortedType
  ): void => {
    console.log({ // eslint-disable-line
      country,
      rowsPerPage,
      page,
      sortedBy,
      sortedType
    })
    setTableCorrespondentsProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableCorrespondentsDataRows(rowsPerPage),
        totalRows: 30,
        rowsPerPage: rowsPerPage
      }
    ))
  }

  return (
    <BoeForm
      i18n={i18nObj}
      documentType={documentType}
      productCode={productCode}
      spendType={spendType}
      handleSearch={handleSearch}
      drawerBusinessCodeProps={
        {
          i18n: i18nObj,
          countries: tableCountryDataRows(5),
          handleSearch: drawerBusinessCodeSearch,
          loading: false,
          error: false,
          handleBack: handleBack,
          tableCompanyProps: {
            i18n: i18nObj,
            data: tableCompanyProps.data
          }
        }
      }
      drawerCorresponsalCodeProps={
        {
          i18n: i18nObj,
          countries: tableCountryDataRows(5),
          handleSearch: drawerCorresponsalCodeSearch,
          loading: false,
          error: false,
          tableCorrespondentsProps: {
            i18n: i18nObj,
            data: tableCorrespondentsProps.data,
            totalRows: tableCorrespondentsProps.totalRows,
            rowsPerPage: tableCorrespondentsProps.rowsPerPage
          }
        }
      }
    />
  )
}

const BoeFormStory: React.FC = () => (
  <BoeForm
    i18n={i18nObj}
    documentType={documentType}
    productCode={productCode}
    spendType={spendType}
    handleSearch={() => alert('Buscar')}
    drawerBusinessCodeProps={drawerBusinessCodeProps}
    drawerCorresponsalCodeProps={drawerCorresponsalCodeProps}
  />
)

export { BoeFormStory, MetaBoeFormStory }

storiesOf('Components|Templates.BoeForm', module)
  .addDecorator(withThemeProvider)
  .add('BoeForm', () => <BoeFormStory />)
  .add('Interactive', () => <MetaBoeFormStory />)
