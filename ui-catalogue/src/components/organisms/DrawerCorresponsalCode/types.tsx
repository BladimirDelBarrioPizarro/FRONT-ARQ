import { ITableCorrespondents } from '../../molecules/TableCorrespondents/TableCorrespondents'
import { ICountries } from '../types'

interface Ii18n {
  'DrawerCorresponsalCode:drcrinputLabelTitle': string
  'DrawerCorresponsalCode:drcrmodalTitle': string
  'DrawerCorresponsalCode:drcrmodalp': string
  'DrawerCorresponsalCode:drcrmodalb': string
  'DrawerCorresponsalCode:drcrmodalp2': string
  'DrawerCorresponsalCode:drcrfieldlabel1': string
  'DrawerCorresponsalCode:drcrselectCountry': string
  'DrawerCorresponsalCode:drcrbuttonHelp': string
  'DrawerCorresponsalCode:drcrbuttonSearch': string
}

export interface IDrawerCorresponsalCode {
  i18n: Ii18n
  countries: ICountries[]
  handleSearch: (country: string,
    rowsPerPage: number,
    page: number,
    sortedBy: string,
    sortedType: string) => void
  loading: boolean
  error: boolean
  tableCorrespondentsProps: Pick<ITableCorrespondents,
  'i18n' |
  'data'|
  'handleRowClickSearchResult' |
  'totalRows' |
  'rowsPerPage'
  >
}
