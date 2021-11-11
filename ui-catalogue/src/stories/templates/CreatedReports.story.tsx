import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CreatedReports } from '../../components/templates/CreatedReports/CreatedReports'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows,
  selectCorrespondentsDataRows,
  tableCountryDataRows
} from '../../mocks'

const CreatedReportsStory: React.FC = () => {
  let corresponsals = selectCorrespondentsDataRows(5)
  const tipoDocumento = [
    {
      value: '01',
      label: 'Documento 01'
    },
    {
      value: '02',
      label: 'Documento 02'
    },
    {
      value: '03',
      label: 'Documento 03'
    }
  ]

  const productCodes = [
    {
      value: '01',
      label: 'Producto 01'
    },
    {
      value: '02',
      label: 'Producto 02'
    },
    {
      value: '03',
      label: 'Producto 03'
    }
  ]

  const saleTypes = [
    {
      value: '01',
      label: 'Tipo de gasto 01'
    },
    {
      value: '02',
      label: 'Tipo de gasto 02'
    },
    {
      value: '03',
      label: 'Tipo de gasto 03'
    }
  ]

  const handleBack = (): void => {}

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
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

  const handleAccept = (params): void => {

  }

  const handleSearchCorresponsal = (country): void => {
    corresponsals = selectCorrespondentsDataRows(5)
  }

  return (
    <CreatedReports
      i18n={i18nObj}
      documentTypes={tipoDocumento}
      countries={tableCountryDataRows(5)}
      corresponsals={corresponsals}
      productCodes={productCodes}
      saleTypes={saleTypes}
      drawerBusinessCodeProps={drawerBusinessCodeProps}
      handleAccept={handleAccept}
      handleSearchCorresponsal={handleSearchCorresponsal}
    />
  )
}

export { CreatedReportsStory }

storiesOf('Components|Templates.CreatedReports', module)
  .addDecorator(withThemeProvider)
  .add('Interactive', () => <CreatedReportsStory />)
