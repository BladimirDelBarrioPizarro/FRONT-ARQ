import { ITableReportReferences } from '../../molecules/TableReportsReferences/TableReportsReferences'
import { ITableUtilitiesReportRef } from '../../molecules/TableUtilitiesReportRef/TableUtilitiesReportRef'
import { IBaseReportNoRef } from '../../templates/BaseReportNoRef/types'
import { IHighReports } from '../../organisms/HighReports/types'
import { IReceivingReports } from '../../organisms/ReceivingReports/types'
import { IRefReceptionNum } from '../../organisms/RefRecepcionNum/types'
import { IManualReception } from '../../molecules/ManualReception/types'

interface Ii18n {
  'ReportReferences:typo1rr': string
  'ReportReferences:label1rr': string
  'ReportReferences:button1rr': string
}

export interface IDateTimeFormatOptions {
  year: 'numeric'
  month: '2-digit'
  day: '2-digit'
}
export interface IReportReferences {
  i18n: Ii18n
  reportTableProps: ITableReportReferences
  handleSubmit: (dateFrom: any, rowsPerPage: any, page: any, sortedBy: any, sortedType: any) => any
  handleSendDelete: (deleteFiles: any) => any
  tableUtilitiesReportRefProps: ITableUtilitiesReportRef
  handleLoading: (codCreica: any) => any
  handleRecepcionManualPeticion: (codCreica, numPetition, tipoRes, producto, medio, fecha, notas) => any
  baseReportNoRefProps: IBaseReportNoRef
  highReportsProps: IHighReports
  receivingReportsProps: IReceivingReports
  refReceptionNumProps: IRefReceptionNum
  manualReceptionProps: IManualReception
  handleAcceptManualReception: (tiporespuesta, product, medio, date, notas) => any
  handleSearchCorresponsal: (country) => any
  handleUtilidadesRefInformes: (codCreica) => any
  handleDeleteUtilidadesRef: (codCreica) => any
}
