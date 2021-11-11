import { IDrawerBusinessCode } from '../../organisms/DrawerBusinessCode/types'
import { IElementSelectValue } from '../../atoms/types'

export interface i18nCreatedReports{
  'CreatedReports:tittleLabel': string
  'CreatedReports:empresaLabel': string
  'CreatedReports:tipoDcoumentoLabel': string
  'CreatedReports:nombreDcoumentoLabel': string
  'CreatedReports:nombreDcoumentoEspecifications': string
  'CreatedReports:fechaRecepcionDcoumentoLabel': string
  'CreatedReports:numeroPeticionLabel': string
  'CreatedReports:codigoPaisLabel': string
  'CreatedReports:corresponsalLabel': string
  'CreatedReports:codigoProductoLabel': string
  'CreatedReports:tipoGastoLabel': string
  'CreatedReports:acceptBtLabel': string
  'CreatedReports:debtorErrorLabel': string
  'CreatedReports:examinarLabel': string
}

export interface IDateTimeFormatOptions {
  year: 'numeric'
  month: '2-digit'
  day: '2-digit'
}

export interface ICreatedReports {
  i18n: i18nCreatedReports
  documentTypes: IElementSelectValue[]
  countries: IElementSelectValue[]
  corresponsals: IElementSelectValue[]
  productCodes: IElementSelectValue[]
  saleTypes: IElementSelectValue[]
  drawerBusinessCodeProps: Omit<IDrawerBusinessCode, 'tableCompanyProps.handleRowClickSearchResult'>
  handleCheckData: (params: any) => void
  handleAccept: (params: any) => void
  handleSearchCorresponsal: (country: string) => void
}
