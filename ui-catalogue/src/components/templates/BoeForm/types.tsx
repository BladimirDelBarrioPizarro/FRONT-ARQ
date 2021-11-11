import { IDrawerBusinessCode } from '../../organisms/DrawerBusinessCode/types'
import { IDrawerCorresponsalCode } from '../../organisms/DrawerCorresponsalCode/types'

interface IComboValues{
  value: string
  result: string
}

interface Ii18n {
  'BoeForm:boeFormlabel1': string
  'BoeForm:boeFormlabel2': string
  'BoeForm:boeFormlabel3': string
  'BoeForm:boeFormlabel4': string
  'BoeForm:boeFormlabel5': string
  'BoeForm:boeFormlabel6': string
  'BoeForm:boeFormlabel7': string
  'BoeForm:boeFormlabel8': string
  'BoeForm:menuTitle': string
  'BoeForm:buttonClean': string
  'BoeForm:buttonHelp': string
  'BoeForm:buttonSend': string
  'BoeForm:iconCloud': string
}

export interface IBoeForm {
  i18n: Ii18n
  documentType: IComboValues[]
  productCode: IComboValues[]
  spendType: IComboValues[]
  handleSearch: (values: any) => void
  drawerBusinessCodeProps: Omit<IDrawerBusinessCode, 'tableCompanyProps.handleRowClickSearchResult'>
  drawerCorresponsalCodeProps: IDrawerCorresponsalCode
}
