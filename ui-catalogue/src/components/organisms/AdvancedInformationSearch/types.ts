import { ITableReport } from '../../molecules/TableReports/TableReports'
import { ITableBusiness } from '../../molecules/TableBusiness/TableBusiness'
import { IDrawerBusinessCode } from '../../organisms/DrawerBusinessCode/types'

export interface IReports {
  code: number
  denomination: string
  nif: string
  agency: string
  date: string
  type: string
}

export interface ICountry {
  value: string
  label: string
}

export interface Ii18n {
  'AdvancedInformation:textTypographyTitle': string
  'AdvancedInformation:textButtonLast': string
  'AdvancedInformation:textButtonAll': string
  'AdvancedInformation:textButtonClean': string
  'AdvancedInformation:textButtonHelp': string
  'AdvancedInformation:textTypographyClose': string
  'AdvancedInformation:textTypographySearchCompany': string
  'AdvancedInformation:textFormSearch': string
  'AdvancedInformation:debtor': string
  'AdvancedInformation:agency': string
  'AdvancedInformation:fiscal': string
  'AdvancedInformation:fromDate': string
  'AdvancedInformation:toDate': string
  'AdvancedInformation:country': string
  'AdvancedInformation:name': string
  'AdvancedInformation:cif': string
  'AdvancedInformation:modalTitle': string
  'AdvancedInformation:modalDescription': string
  'AdvancedInformation:label1rr': string
  'AdvancedInformation:errorName': string
  'AdvancedInformation:errorCIF': string
  'AdvancedInformation:errorAgency': string
  'AdvancedInformation:errorDebtor': string
  'AdvancedInformation:errorFiscal': string
}

interface IsearchParams {
  debtor: string
  agency: string
  fiscal: string
}
interface IsearchCompanyParams {
  country: string
  cif: string
  name: string
}

export interface IAdvancedInformationSearch {
  country: ICountry[]
  i18n: Ii18n
  findLast: (override: boolean, params: IsearchParams, rowsPerPage: number, page: number, sortedType: string, sortedBy: string) => void
  findAll: (override: boolean, params: IsearchParams, rowsPerPage: number, page: number, sortedType: string, sortedBy: string) => void
  findLoading: boolean
  findError: boolean
  findCompany: (params: IsearchCompanyParams, rowsPerPage: number, page: number, sortedType: string, sortedBy: string) => void
  findCompanyLoading: boolean
  findCompanyError: boolean
  reportTableProps: ITableReport
  tableBusinessProps: ITableBusiness
  drawerBusinessCodeProps: Omit<IDrawerBusinessCode, 'tableCompanyProps.handleRowClickSearchResult'>
}
