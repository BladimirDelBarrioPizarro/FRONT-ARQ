import { IReportReferencesIdentificacion } from '../../molecules/ReportReferencesIdentificacion/types'
import { IHighReports } from '../HighReports/types'
import { IReceivingReports } from '../ReceivingReports/types'

interface i18nReportReferencesResult {
  'ReportReferencesResult:detailTbTitle': string
  'ReportReferencesResult:atras': string
  'ReportReferencesResult:referencia': string
  'ReportReferencesResult:nombredoc': string
  'ReportReferencesResult:tipodocumento': string
  'ReportReferencesResult:fechamensaje': string
  'ReportReferencesResult:fecha': string
  'ReportReferencesResult:fechaultimabus': string
  'ReportReferencesResult:ndocumento': string
  'ReportReferencesResult:codigoempresa': string
  'ReportReferencesResult:moneda': string
  'ReportReferencesResult:nombrefichero': string
  'ReportReferencesResult:Tab:identificacion': string

  'ReportReferencesResult:detailTbTitleBis': string
  'ReportReferencesResult:Tab:remitente': string
  'ReportReferencesResult:Tab:nombredocumento': string
  'ReportReferencesResult:Tab:numerodocumento': string
  'ReportReferencesResult:Tab:numeropeticion': string
  'ReportReferencesResult:vat': string
}

interface IReportReferencesResultRequestFrom {
  referencia: string
  nombredoc: string
  tipodocumento: string
  fechamensaje: string
  fecha: string
  fechaultimabus: string
  ndocumento: string
  codigoempresa: string
  moneda: string
  nombrefichero: string

  remitente: string
  npeticion: string
  vat: string
}

export interface IReportReferencesResult {
  i18n: i18nReportReferencesResult
  data: IReportReferencesResultRequestFrom
  identificacionProps: IReportReferencesIdentificacion
  highReportsProps: IHighReports
  receivingReportsProps: IReceivingReports
  handleSubmitReivingReports: (petitionNum, codCompany, product, codCorrespondent) => void
  handleDelete: () => any
  creica: boolean
  handleExit: () => void
  handleImpr: () => void
  handleDownload: () => void
  handleBack: () => void
}
