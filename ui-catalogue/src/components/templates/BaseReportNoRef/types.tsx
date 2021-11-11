import { IGeneralInformationRequestForm } from '../../organisms/GeneralInformationNoRef/types'

interface i18nBaseReport {
  'BaseReport:title': string
  'BaseReport:labelTab1': string
  'BaseReport:labelTab2': string
}

export enum ReportTypes{
  RESTO_PAISES,
  FR_PT_IT,
  NODB
}

export interface IBaseReportFormRequest{
  general: IGeneralInformationRequestForm
}

export interface IBaseReportNoRef {
  i18n: i18nBaseReport
  data: IBaseReportFormRequest
  report: ReportTypes
  showDownload?: boolean
  handleAlta: () => void
  handleRecepcion: () => void
  handleCancel: () => void
}
