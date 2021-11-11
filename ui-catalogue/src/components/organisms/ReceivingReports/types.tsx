import { IElementBack } from '../../atoms/ElementBack/ElementBack'
import { IDrawerBusinessCode } from '../DrawerBusinessCode/types'
import { IElementSelectValue } from '../../atoms/types'

interface i18nReceivingReports {
  'ReceivingReports:title': string
  'ReceivingReports:textIcon': string
  'ReceivingReports:numeropeticion': string
  'ReceivingReports:empresa': string
  'ReceivingReports:producto': string
  'ReceivingReports:menuTitle': string
  'ReceivingReports:corresponsal': string
  'ReceivingReports:codigoPaisLabel': string
  'ReceivingReports:buttonAceptar': string
  'ReceivingReports:buttonCancelar': string
}

interface IProduct {
  value: string
  result: string
}

export interface IReceivingReports {
  i18n: i18nReceivingReports
  countries: IElementSelectValue[]
  corresponsals: IElementSelectValue[]
  elementBackProps: IElementBack
  drawerBusinessCodeProps: IDrawerBusinessCode
  products: any
  handleSubmit: (petitionNum, codCompany, product, codCorrespondent) => void
  handleCancel: () => void
  handleSearchCorresponsal: (country: string) => void
}
