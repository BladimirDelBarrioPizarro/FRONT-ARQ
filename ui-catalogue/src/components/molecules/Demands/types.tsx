interface Ii18nDemands {
  'Demands:title': string
  'Demands:codigo': string
  'Demands:fechademanda': string
  'Demands:codigodemanda': string
  'Demands:importedemanda': string
  'Demands:demandante': string
}

export interface IDemandsRequestForm {
  codigo: string
  fechademanda: string
  codigodemanda: string
  importedemanda: string
  demandante: string
}

export interface IDemands {
  i18n: Ii18nDemands
  data: IDemandsRequestForm
}
