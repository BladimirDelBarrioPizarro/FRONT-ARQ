import { IGeneralInformationRequestForm } from '../../organisms/GeneralInformation/types'
import { IBalanceDataRequestForm } from '../../organisms/BalanceInformation/types'

interface i18nBaseReport {
  'BaseReport:title': string
  'BaseReport:labelTab1': string
  'BaseReport:labelTab2': string
  'BaseReport:buttonOut': string
  'BaseReport:buttonPrint': string
  'BaseReport:buttonDownload': string
}

export enum ReportTypes{
  Standard,
  ESPANA_INFORMA,
  EUDBP_FR,
  EUDBP_PT,
  EUDBP_IT,
  EUDBP_PO_A,
  RESTO_PAISES,
  BADEXCUG,
  ARGENTINA_NOSIS,
  NOREF_RESTO_PAISES,
  PERU_EQUIFAX,
  BUREAU_MEJICO,
  FRANCIA,
  BUREAU_MEXICO
}

export interface IBaseReportFormRequest{
  empresa: string
  codigoFiscal: string
  general: IGeneralInformationRequestForm
  balance: IBalanceDataRequestForm
}

export interface IBaseReport {
  i18n: i18nBaseReport
  data: IBaseReportFormRequest
  report: ReportTypes
  showDownload?: boolean
  handleOut: () => void
  handleDownload?: () => void
}
