import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ReportReferences } from '../../components/templates/ReportReferences/ReportReferences'
import i18nObj from '../i18n.json'
import { ReportTypes } from '../../components/templates/BaseReportNoRef/types'
import {
  tableCompanyDataRows,
  selectCorrespondentsDataRows,
  tableReportsRefDataRows,
  tableCountryDataRows,
  tableUtilitiesReportRefDataRows,
  dataproductsMock,
  dataGeneralDataNoRefFaker,
  dataIdentificationNoRefFaker,
  dataIdentificationFRPTITFaker,
  dataGeneralDataRestoPaises2Faker,
  dataGeneralDataFaker,
  dataIdentificationnoDBFaker,
  dataRefReceptionNumFaker,
  dataManualReceptionFaker,
  dataTradeNamesFaker,
  datosHostDataFaker,
  dataAJTSDBGDPFaker,
  dataAveragePaymentFaker,
  dataSummaryFinancialInformationFaker,
  dataPrimaryResidenceFaker,
  dataManagersFaker,
  dataExportsFaker,
  dataScoringFaker,
  dataUnpaisClaimsProtestsFaker,
  dataDefaultsAsnefFaker,
  dataIncidentsAsnefFaker,
  dataNonPaymentsFaker,
  dataDemandsFaker,
  dataRatingsDBGDPFaker,
  dataOtherRTEFaker,
  dataObservationsFaker,
  dataTaxCodesEUDBPFaker,
  dataOtherDataFaker,
  dataComercialNamesFaker,
  dataAJTEUDBPFaker,
  dataResumeFaker,
  dataPreviousCompanyFaker,
  dataCompaniesRelatedFaker,
  dataProtestDemandsEUDBPFaker,
  dataNonPaymentsAsnefFaker,
  dataBankEUDBPFaker,
  dataPrimaryResidenceNoDBFaker
} from '../../mocks'

const ReportReferencesStory: React.FC = () => {
  const handlePressRow = (value: any, tableMeta: any): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const handleOnViewColumnsChange = (column: string): void => {}
  const handleSendDelete = (deleteFiles: any): void => {}
  const handleCheckPetition = (value: any, tableMeta: any): void => {}
  const [totalRows, setTotalRows] = useState(20)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const [, setSortedBy] = useState('codDeudor')
  const [, setSortedType] = useState('ASC')

  const handleOnChangePage = (page): void => {
    setPage(page)
    setTotalRows((page + 2) * rowsPerPage)
  }

  const handleOnChangeRowsPerPage = (rowsPerPage): void => {
    setPage(0)
    setRowsPerPage(rowsPerPage)
    setTotalRows(2 * rowsPerPage)
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    setSortedBy(changedColumn)
    setSortedType(direction.toUpperCase())
    cleanPage()
  }

  const [reportTableProps, setreportTableProps] = useState({
    i18n: i18nObj,
    data: [],
    handlePressRow: handlePressRow,
    onChangePage: handleOnChangePage,
    onChangeRowsPerPage: handleOnChangeRowsPerPage,
    totalRows: totalRows,
    rowsPerPage: rowsPerPage,
    page: page,
    onViewColumnsChange: handleOnViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    handleCheckPetition: handleCheckPetition
  })

  const cleanPage = (): void => {
    setPage(0)
  }

  const executeTotal = (): void => {
    if (reportTableProps.data.length < rowsPerPage) {
      setTotalRows((page * rowsPerPage) + reportTableProps.data.length)
    } else {
      if (reportTableProps.data.length > 0 && totalRows === 0) {
        setTotalRows(2 * rowsPerPage)
      }
    }
  }

  useEffect(() => {
    executeTotal()
  }, [reportTableProps.data])

  const handleSubmit = (
    dateFrom,
    itemsPerPage,
    currentPage,
    sortedBy,
    sortedType
  ): void => {
    console.log({ // eslint-disable-line
      dateFrom,
      itemsPerPage,
      currentPage,
      sortedBy,
      sortedType
    })
    setreportTableProps(prevState => Object.assign(
      {},
      prevState,
      {
        data: tableReportsRefDataRows(50),
        totalRows: 55,
        rowsPerPage: itemsPerPage,
        sortedBy,
        sortedType
      }
    ))
  }

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

  const handleBack = (): void => {}
  const handleAccept = (): void => {}

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

  const handleCancelConfirmation = (): void => {}
  const handleAcceptConfirm = (codDeudor, tipoDocumento, codCorresponsal, codProducto, tipoGasto, fechaRecepcion): void => {
    console.log(codDeudor, tipoDocumento, codCorresponsal, codProducto, tipoGasto, fechaRecepcion) // eslint-disable-line
  }

  const confirmationProps = {
    i18n: i18nObj,
    data: dataConfirm,
    handleAccept: handleAcceptConfirm,
    handleCancel: handleCancelConfirmation,
    elementBackProps: elementBackProps
  }

  let corresponsals = selectCorrespondentsDataRows(5)
  const handleSearchCorresponsal = (country): void => {
    corresponsals = selectCorrespondentsDataRows(5)
  }

  const handleCancelHighReports = (): void => {}

  const handleSendAccept = (codDeudor, product, typeDocument, typeExpensive, codCorrespondent, dateReception): void => {
    console.log('codDeudor:', codDeudor, 'product:', product, 'typeDocument:', typeDocument, 'typeExpensive:', typeExpensive, 'codCorrespondent:', codCorrespondent, 'dateReception:', dateReception)// eslint-disable-line
  }
  const highReportsProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    corresponsals: corresponsals,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    documentType: documentType,
    spendType: spendType,
    products: dataproductsMock,
    handleCancel: handleCancelHighReports,
    handleSearchCorresponsal: handleSearchCorresponsal,
    confirmationProps: confirmationProps,
    handleAccept: handleSendAccept
  }

  const handleSubmitReceiving = (petitionNum, codCompany, countrie, codCorrespondent): void => {}
  const handleBack2 = (): void => {}
  const elementBackProps2 = {
    label: 'TEST',
    size: 'm',
    handleBack: handleBack2
  }

  const handleCancelReceivingReports = (): void => {}
  const receivingReportsProps = {
    i18n: i18nObj,
    countries: tableCountryDataRows(5),
    corresponsals: corresponsals,
    elementBackProps: elementBackProps2,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    products: dataproductsMock,
    handleSubmit: handleSubmitReceiving,
    handleCancel: handleCancelReceivingReports,
    handleSearchCorresponsal: handleSearchCorresponsal
  }

  const handleSendCancel = (): void => {}
  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const tableUtilitiesReportRefProps = {
    i18n: i18nObj,
    data: tableUtilitiesReportRefDataRows(15),
    onChangePage: handleOnChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: 25,
    rowsPerPage: 5,
    page: 1,
    handlePressRow: handlePressRow,
    onViewColumnsChange: onViewColumnsChange,
    handleSendCancel: handleSendCancel,
    onColumnSortChange: onColumnSortChange
  }
  const handleLoading = (numero): any => {}

  const generalInformationRequestForm = {
    generalData: dataGeneralDataNoRefFaker,
    generalDataRestoPaises2: dataGeneralDataRestoPaises2Faker,
    generalDatanoDB: dataGeneralDataFaker,
    identification: dataIdentificationNoRefFaker,
    identificationFRPTIT: dataIdentificationFRPTITFaker,
    identificationnoDB: dataIdentificationnoDBFaker,
    tradeNames: dataTradeNamesFaker,
    datosHost: datosHostDataFaker,
    ajtsDBGDP: dataAJTSDBGDPFaker,
    averagePaymentDays: dataAveragePaymentFaker,
    summaryFinancialInformation: dataSummaryFinancialInformationFaker,
    primaryResidence: dataPrimaryResidenceFaker,
    managers: dataManagersFaker,
    exports: dataExportsFaker,
    scoring: dataScoringFaker,
    unpaidClaimsProtests: dataUnpaisClaimsProtestsFaker,
    defaultsAsnef: dataDefaultsAsnefFaker,
    incidentsAsnef: dataIncidentsAsnefFaker,
    nonPayments: dataNonPaymentsFaker,
    demands: dataDemandsFaker,
    ratingDBDP: dataRatingsDBGDPFaker,
    otherRTE: dataOtherRTEFaker,
    observations: dataObservationsFaker,
    taxcodesEUDBP: dataTaxCodesEUDBPFaker,
    naceCnae: dataTaxCodesEUDBPFaker,
    otherData: dataOtherDataFaker,
    comercialNames: dataComercialNamesFaker,
    ajtEUDBP: dataAJTEUDBPFaker,
    resume: dataResumeFaker,
    previousCompany: dataPreviousCompanyFaker,
    previousCompanyTrading: dataPreviousCompanyFaker,
    companiesRelated: dataCompaniesRelatedFaker,
    protestsDemandsEUDBP: dataProtestDemandsEUDBPFaker,
    nonPaymentsAsnef: dataNonPaymentsAsnefFaker,
    bankEUDBP: dataBankEUDBPFaker,
    primaryResidenceNoDB: dataPrimaryResidenceNoDBFaker
  }

  const dataBaseReportFormRequest = {
    general: generalInformationRequestForm
  }

  const handleAlta = (): void => {}
  const handleRecepcion = (): void => {}
  const handleCancel = (): void => {}

  const report = ReportTypes.FR_PT_IT

  const baseReportNoRefProps = {
    i18n: i18nObj,
    data: dataBaseReportFormRequest,
    report: report,
    showDownload: true,
    highReportsProps: highReportsProps,
    receivingReportsProps: receivingReportsProps,
    handleAlta: handleAlta,
    handleRecepcion: handleRecepcion,
    handleCancel: handleCancel
  }

  const handleAta = (): void => {}
  const handleReception = (): void => {}

  const refReceptionNumProps = {
    i18n: i18nObj,
    data: dataRefReceptionNumFaker,
    handleAlta: handleAta,
    handleReception: handleReception,
    handleCancel: handleCancel
  }

  const tipoRespuesta = [
    {
      value: 'value ejemplo label1',
      label: 'label 1'
    },
    {
      value: 'value ejemplo label2',
      label: 'R.COMPLETA'
    }
  ]
  const producto = [{
    value: 'value ejemplo label2',
    label: 'label 2'
  }]
  const medioRecepcion = [
    {
      value: 'value ejemplo label1',
      label: 'label 1'
    },
    {
      value: 'value ejemplo label2',
      label: 'ON-LINE'
    }
  ]

  const manualReceptionProps = {
    i18n: i18nObj,
    data: dataManualReceptionFaker,
    tipoRespuesta: tipoRespuesta,
    producto: producto,
    medioRecepcion: medioRecepcion,
    handleBack: handleBack,
    handleAlta: handleAlta,
    handleAccept: handleAccept,
    handleCancel: handleCancel
  }

  const handleAcceptManualReception = (tiporespuesta, product, medio, date, notas): void => {}
  const handleSearchCorresponsalReportReferences = (country): void => {}
  const handleRecepcionManualPeticion = (codCreica, numPetition, tipoRes, producto, medio, fecha, notas): any => {
    // eslint-disable-next-line no-console
    console.log(codCreica, numPetition, tipoRes, producto, medio, fecha, notas)
  }

  const handleUtilidadesRefInformes = (codCreica): any => {
    // eslint-disable-next-line no-console
    console.log(codCreica)
  }

  const handleDeleteUtilidadesRef = (codCreica): any => {
    // eslint-disable-next-line no-console
    console.log(codCreica)
  }

  return <ReportReferences
    i18n={i18nObj}
    reportTableProps={reportTableProps}
    handleSubmit={handleSubmit}
    handleSendDelete={handleSendDelete}
    tableUtilitiesReportRefProps={tableUtilitiesReportRefProps}
    handleLoading={handleLoading}
    baseReportNoRefProps={baseReportNoRefProps}
    highReportsProps={highReportsProps}
    receivingReportsProps={receivingReportsProps}
    refReceptionNumProps={refReceptionNumProps}
    manualReceptionProps={manualReceptionProps}
    handleAcceptManualReception={handleAcceptManualReception}
    handleSearchCorresponsal={handleSearchCorresponsalReportReferences}
    handleRecepcionManualPeticion={handleRecepcionManualPeticion}
    handleUtilidadesRefInformes={handleUtilidadesRefInformes}
    handleDeleteUtilidadesRef={handleDeleteUtilidadesRef}
  />
}

export { ReportReferencesStory }

storiesOf('Components|Templates.ReportReferences', module)
  .addDecorator(withThemeProvider)
  .add('ReportReferences', () => <ReportReferencesStory />)
