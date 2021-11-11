import { ILegalConfirmedRequestForm } from '../LegalConfirmed/types'

interface Ii18nLegalProcedures {
  'LegalProcedures:title': string
  'LegalProcedures:entidad': string
  'LegalProcedures:fecha': string
  'LegalProcedures:tipoaccion': string
  'LegalProcedures:claseaccion': string
  'LegalProcedures:fechapublicacion': string
  'LegalProcedures:distrito': string
  'LegalProcedures:duracion': string
  'LegalProcedures:fechafinalizacion': string
  'LegalProcedures:importe': string
  'LegalProcedures:costes': string
  'LegalProcedures:situacion': string
  'LegalProcedures:resolucion': string
  'LegalProcedures:moneda': string
  'LegalProcedures:demandante': string
  'LegalProcedures:comentarios': string
}
export interface ILegalProceduresDataForm {
  entidad: string
  fecha: string
  tipoaccion: string
  claseaccion: string
  fechapublicacion: string
  distrito: string
  duracion: string
  fechafinalizacion: string
  importe: string
  costes: string
  situacion: string
  resolucion: string
  moneda: string
  demandante: string
  comentarios: string
}

export interface ILegalProceduresRequestForm {
  legalProcedures: ILegalProceduresDataForm[]
  legalConfirmed: ILegalConfirmedRequestForm[]
}

export interface ILegalProcedures {
  i18n: Ii18nLegalProcedures
  data: ILegalProceduresRequestForm
}
