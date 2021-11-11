import { IExperianR } from '../../organisms/ExperianR/types'
import { IAdvancedInformationSearch } from '../../organisms/AdvancedInformationSearch/types'

interface Ii18nConsultReports {
  'ConsultReports:title': string
  'ConsultReports:label1': string
  'ConsultReports:label2': string
}

interface ICountry {
  value: string
  label: string
}

export interface IConsultReportsDetailData {
  agencyDatescr: string
  codecr: string
  socialNamecr: string
  fiscalCodecr: string
  ajtr1cr: string
  ajtr2cr: string
  socialNameComparexcr: string
  fiscalCodeComparex: string
  pendingRequestcr: string
  topcr: string
  topSituation: string
  riskFactorcr: string
  eurosSalescr: string
  umpaiedcr: string
  delayscr: string
  groupcr: string
  addresscr: string
  loaclitycr: string
  provencecr: string
  postalCodecr: string
  countrycr: string
  sourceReferencecr: string
  nifcr: string
  emailcr: string
  webcr: string
  activitiescr: string
}
export interface I18nConsultReportsDetail {
  agencyDatescr: string
  codecr: string
  socialNamecr: string
  fiscalCodecr: string
  ajtr1cr: string
  ajtr2cr: string
  socialNameComparexcr: string
  fiscalCodeComparex: string
  pendingRequestcr: string
  topcr: string
  topSituation: string
  riskFactorcr: string
  eurosSalescr: string
  umpaiedcr: string
  delayscr: string
  groupcr: string
  addresscr: string
  loaclitycr: string
  provencecr: string
  postalCodecr: string
  countrycr: string
  sourceReferencecr: string
  nifcr: string
  emailcr: string
  webcr: string
  activitiescr: string
  generalDatacr: string
  comparexcr: string
  btnReturncr: string
}
export interface IConsultsReports {
  i18n: Ii18nConsultReports
  country: ICountry[]
  experianR: IExperianR
  advancedInformationSearch: IAdvancedInformationSearch
  data?: IConsultReportsDetailData
  handleOpenBaseReport: (rowData: any) => void
  cleanConsultReport: () => void
}
