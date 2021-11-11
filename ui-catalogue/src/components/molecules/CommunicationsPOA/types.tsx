import { ReportTypes } from '../../templates/BaseReport/types'

interface Ii18nCommunicationsPOA {
  'CommunicationsPOA:title': string
  'CommunicationsPOA:telefonos': string
  'CommunicationsPOA:emails': string
  'CommunicationsPOA:webs': string
}

export interface ICommunicationsPOARequestForm {
  telefonos1: string
  telefonos2: string
  telefonos3: string
  emails1: string
  emails2: string
  emails3: string
  webs1: string
  webs2: string
  webs3: string
}

export interface ICommunicationsPOA {
  i18n: Ii18nCommunicationsPOA
  data: ICommunicationsPOARequestForm
  report: ReportTypes
}
