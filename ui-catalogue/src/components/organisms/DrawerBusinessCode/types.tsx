import { ITableCompany } from '../../molecules/TableCompany/TableCompany'
import { ICountries } from '../types'

export interface Ii18n {
  'DrawerBusinessCode:field1': string
  'DrawerBusinessCode:field2': string
  'DrawerBusinessCode:field3': string
  'DrawerBusinessCode:pModal1': string
  'DrawerBusinessCode:pModal2': string
  'DrawerBusinessCode:bModal': string
  'DrawerBusinessCode:pModal3': string
  'DrawerBusinessCode:titleModal': string
  'DrawerBusinessCode:inputLabel': string
  'DrawerBusinessCode:selectCountry': string
  'DrawerBusinessCode:buttonHelp': string
  'DrawerBusinessCode:buttonSearch': string
  'DrawerBusinessCode:invalidCIF': string
  'DrawerBusinessCode:invalidCompanyName': string
  'DrawerBusinessCode:invalidFields': string
  'DrawerBusinessCode:errorCIF': string
  'DrawerBusinessCode:errorName': string
}

export interface IDrawerBusinessCode {
  i18n: Ii18n
  countries: ICountries []
  handleSearch: (companyId: string,
    companyName: string,
    country: string,
    rowsPerPage: number,
    page: number,
    sortedBy: string,
    sortedType: string) => void
  loading: boolean
  error: boolean
  handleBack: () => void
  tableCompanyProps: Pick<ITableCompany,
  'i18n' |
  'data'|
  'handleRowClickSearchResult' |
  'totalRows'
  >
}
