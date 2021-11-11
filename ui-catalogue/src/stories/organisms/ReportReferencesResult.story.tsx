import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ReportReferencesResult } from '../../components/organisms/ReportReferencesResult/ReportReferencesResult'
import i18nObj from '../i18n.json'
import {
  tableCompanyDataRows,
  selectCorrespondentsDataRows,
  tableCountryDataRows,
  dataproductsMock
} from '../../mocks'

const ReportReferencesResultStory: React.FC = () => {
  const data = {
    referencia: 'referencia',
    nombredoc: 'nombre documento',
    tipodocumento: 'tipo documento',
    fechamensaje: '10/02/2021',
    fecha: '10/02/2021',
    fechaultimabus: '10/02/2021',
    ndocumento: 'número docuemnto',
    codigoempresa: 'código empresa',
    moneda: 'moneda',
    nombrefichero: 'nombre fichero',
    remitente: 'remnitente',
    npeticion: 'npeticion',
    vat: 'vat'
  }

  const dataIdentificaion = {
    denominacion: 'denominacion',
    domicilio: 'domicilio',
    codigoempresa: 'codigoempresa',
    localidad: 'localidad',
    provincia: 'provincia',
    codigopostal: 'codigopostal',
    pais: 'pais',
    referenciafuente: 'referenciafuente',
    vat: 'vat'
  }

  const handleRecepcion = (): void => {}
  const handleAlta = (): void => {}
  const handleCancel = (): void => {}
  const identificacionProps = {
    data: dataIdentificaion,
    i18n: i18nObj,
    handleRecepcion: handleRecepcion,
    handleAlta: handleAlta,
    handleCancel: handleCancel
  }

  const documentType = [
    { value: '1', label: '4IP - 94 IMPUESTO SOCIEDADES' },
    { value: '2', label: '91E - INFORMACION SUP. A 3 AÑOS' },
    { value: '3', label: '93B - 93 BALANCE' },
    { value: '4', label: '94D - 94DICTAMEN AUDITORIA' },
    { value: '5', label: '96M - 96 MEMORIA GENERAL' }
  ]

  const spendType = [
    { value: '1', label: '1 - GAST.TELEX' },
    { value: '2', label: '2 - GAST.TELEX' },
    { value: '3', label: '3 - GEIS' },
    { value: '4', label: '4 - LEGITIMAC' },
    { value: '5', label: '5 - INTERVENC' }
  ]

  const handleSubmit = (codDeudor, codCorrespondent, typeDocument, typeExpensive, product, dateReception): void => {}
  const handleAccept = (): void => {}
  const handleBack = (): void => {}
  const handleSubmitReceiving = (petitionNum, codCompany, countrie, codCorrespondent): void => {}
  const handleCancelSubmit = (): void => {}
  const handleDelete = (): void => {}
  const handleExit = (): void => {}
  const handleImpr = (): void => {}
  const handleDownload = (): void => {}

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

  const dataConfirm = {
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
    data: dataConfirm,
    handleAccept: handleAccept,
    handleCancel: handleCancel,
    elementBackProps: elementBackProps
  }

  let corresponsals = selectCorrespondentsDataRows(5)
  const handleSearchCorresponsal = (country): void => {
    corresponsals = selectCorrespondentsDataRows(5)
  }

  const highReportsProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    corresponsals: corresponsals,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    documentType: documentType,
    spendType: spendType,
    products: dataproductsMock,
    handleSubmit: handleSubmit,
    handleCancel: handleCancel,
    handleAccept: handleAccept,
    handleSearchCorresponsal: handleSearchCorresponsal,
    confirmationProps: confirmationProps
  }
  const elementBackProps2 = {
    label: 'TEST',
    size: 'm',
    handleBack: handleBack
  }

  const receivingReportsProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    corresponsals: corresponsals,
    elementBackProps: elementBackProps2,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    products: dataproductsMock,
    handleSubmit: handleSubmitReceiving,
    handleCancel: handleCancelSubmit,
    handleSearchCorresponsal: handleSearchCorresponsal
  }

  const handleSubmitReivingReports = (petitionNum, codCompany, product, codCorrespondent): void => {}

  return <ReportReferencesResult
    creica={false}
    i18n={i18nObj}
    data={data}
    identificacionProps={identificacionProps}
    highReportsProps={highReportsProps}
    receivingReportsProps={receivingReportsProps}
    handleSubmitReivingReports={handleSubmitReivingReports}
    handleDelete={handleDelete}
    handleExit={handleExit}
    handleImpr={handleImpr}
    handleDownload={handleDownload}
    handleBack={handleBack}
  />
}

export { ReportReferencesResultStory }

storiesOf('Components|Organisms.ReportReferencesResult', module)
  .addDecorator(withThemeProvider)
  .add('ReportReferencesResult', () => <ReportReferencesResultStory />)
