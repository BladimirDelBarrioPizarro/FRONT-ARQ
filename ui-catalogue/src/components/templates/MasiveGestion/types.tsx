import { IMasiveTableReport } from '../../molecules/MasiveTableReport/types'
import { IDrawerBusinessCode } from '../../organisms/DrawerBusinessCode/types'

export interface i18nMasiveGestion{
  'MasiveGestion:tittleLabel': string
  'MasiveGestion:debtorFromLabel': string
  'MasiveGestion:debtorToLabel': string
  'MasiveGestion:debtorErrorLabel': string
  'MasiveGestion:buttonSendrl': string
  'MasiveGestion:buttonDeleterl': string
  'MasiveGestion:buttonMoverl': string
  'MasiveGestion:buttonCopyrl': string
}

export interface IMasiveGestion {
  masiveTableReportProps: IMasiveTableReport
  i18n: i18nMasiveGestion
  handleSearch: (debtorFrom: string, itemsPerPage: number, currentPage: number, sortedBy: string, sortedType: string) => void
  drawerBusinessCodeProps: Omit<IDrawerBusinessCode, 'tableCompanyProps.handleRowClickSearchResult'>
  handleDelete: (debtorFrom: string, reports: string[]) => void
  handleMove: (debtorFrom: string, debtorTo: string, reports: string[]) => void
  handleCopy: (debtorFrom: string, debtorTo: string, reports: string[]) => void
  cleanReports: any
  cleanDrawerBusiness: () => void
}
