import { ITableBusiness } from '../../molecules/TableBusiness/TableBusiness'
import { ITableReport } from '../../molecules/TableReports/TableReports'

interface Ii18n {
  'InformationSearch:typo1': string
  'InformationSearch:button2is': string
  'InformationSearch:button3is': string
  'InformationSearch:typo2': string
  'InformationSearch:typo3': string
  'InformationSearch:label2is': string
  'InformationSearch:label3is': string
  'InformationSearch:label4is': string
  'InformationSearch:button6is': string
  'InformationSearch:h2': string
  'InformationSearch:texthelp': string
  'InformationSearch:option': string
  'InformationSearch:errorNameMessage': string
  'InformationSearch:errorCIFMessage': string
}

interface ICountry {
  value: string
  label: string
}

export interface IInformationSearch {
  reportsTableProps: ITableReport
  businessTableProps: ITableBusiness
  country: ICountry[]
  buttonLastSearchColor?: any
  buttonLastSearchVariant?: 'text' | 'outlined' | 'contained'
  buttonAllSearchColor?: any
  buttonAllSearchVariant?: 'text' | 'outlined' | 'contained'
  buttonCleanColor?: any
  buttonCleanVariant?: 'text' | 'outlined' | 'contained'
  buttonHelpColor?: any
  buttonHelpVariant?: 'text' | 'outlined' | 'contained'
  i18n: Ii18n
  handleLastSearch: (code: any, rowsPerPage: number, page: number, sortedBy: string, sortedType: string) => void
  handleAllSearch: (code: any, rowsPerPage: number, page: number, sortedBy: string, sortedType: string) => void
  handleSearchCompany: (country: string, name: string, cif: string, rowsPerPage: number, page: number, sortedBy: string, sortedType: string) => void
}
