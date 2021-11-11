import { IDrawerBusinessCode } from '../DrawerBusinessCode/types'
import { IConfirmation } from '../../molecules/ReportReferencesConfirmation/types'
import { IElementSelectValue } from '../../atoms/types'

interface i18nHighReports {
  'HighReports:title': string
  'HighReports:deudor': string
  'HighReports:corresponsal': string
  'HighReports:codigoPaisLabel': string
  'HighReports:tipodocumento': string
  'HighReports:tipogasto': string
  'HighReports:producto': string
  'HighReports:fecharecepción': string
  'HighReports:menuTitle': string
  'HighReports:buttonAceptar': string
  'HighReports:buttonCancelar': string
}

export interface IDateTimeFormatOptions {
  year: 'numeric'
  month: '2-digit'
  day: '2-digit'
}

export interface IHighReports {
  i18n: i18nHighReports
  countries: IElementSelectValue[]
  products: IElementSelectValue[]
  corresponsals: IElementSelectValue[]
  drawerBusinessCodeProps: Omit<IDrawerBusinessCode, 'tableCompanyProps.handleRowClickSearchResult'>
  documentType: IElementSelectValue[]
  spendType: IElementSelectValue[]
  handleCancel: () => any
  handleSearchCorresponsal: (country: string) => void
  handleAccept: (codDeudor, product, typeDocument, typeExpensive, codCorrespondent, dateReception) => any
  confirmationProps: IConfirmation
}
