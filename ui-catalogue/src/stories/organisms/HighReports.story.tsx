import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { HighReports } from '../../components/organisms/HighReports/HightReports'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows,
  selectCorrespondentsDataRows,
  tableCountryDataRows,
  dataproductsMock
} from '../../mocks'

const HighReportsStory: React.FC = () => {
  let corresponsals = selectCorrespondentsDataRows(5)
  const documentType = [
    { value: '1', label: 'VALUE 1' },
    { value: '2', label: 'INFORME' },
    { value: '3', label: 'VALUE 2' },
    { value: '4', label: 'VALUE 3' },
    { value: '5', label: 'VALUE 4' }
  ]

  const spendType = [
    { value: '1', label: 'VALUE 1' },
    { value: '2', label: 'INF.ESPONT' },
    { value: '3', label: 'VALUE 2' },
    { value: '4', label: 'VALUE 3' },
    { value: '5', label: 'VALUE 4' }
  ]

  const handleCancel = (): void => {}
  const handleAccept = (): void => {}
  const handleBack = (): void => {}

  const drawerBusinessCodeProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    handleSearch: (): void => {}, // eslint-disable-line
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

  const data = {
    codDeudor: 'codDeudor',
    codCorrespondent: 'codCorrespondents',
    typeDocument: 'typeDocument',
    typeExpensive: 'typeExpensive',
    product: 'product',
    dateReception: '11/02/2021'
  }
  const elementBackProps = {
    label: 'TEST',
    size: 'm',
    handleBack: handleBack
  }
  const confirmationProps = {
    i18n: i18nObj,
    data: data,
    handleCancel: handleCancel,
    handleAccept: handleAccept,
    elementBackProps: elementBackProps
  }

  const handleSearchCorresponsal = (country): void => {
    corresponsals = selectCorrespondentsDataRows(5)
  }

  const handleSendAccept = (codDeudor, typeDocument, codCorrespondent, product, dateReception): void => {
    console.log(codDeudor, typeDocument, codCorrespondent, product, dateReception)  // eslint-disable-line
  }

  return <HighReports
    i18n={i18nObj}
    countries={tableCountryDataRows(5)}
    corresponsals={corresponsals}
    drawerBusinessCodeProps={drawerBusinessCodeProps}
    spendType={spendType}
    documentType={documentType}
    products={dataproductsMock}
    handleCancel={handleCancel}
    handleSearchCorresponsal={handleSearchCorresponsal}
    handleAccept={handleSendAccept}
    confirmationProps={confirmationProps}
  />
}

export { HighReportsStory }

storiesOf('Components|Organisms.HighReports', module)
  .addDecorator(withThemeProvider)
  .add('HighReports', () => <HighReportsStory />)
