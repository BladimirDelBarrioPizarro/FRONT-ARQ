interface Ii18nShareholdersFrancia {
  'Shareholders:title': string
  'Shareholders:numdum': string
  'Shareholders:accionista': string
  'Shareholders:tipo': string
  'Shareholders:porcentajeparticipacion': string
  'Shareholders:importe': string
}

export interface IShareholdersFranciaRequestForm {
  numDum: string
  accionistadesde: string
  tipoparticipacion: string
  porcentajeparticipacion: string
  importe1: string
  importe2: string
}

export interface IShareHoldersFrancia {
  i18n: Ii18nShareholdersFrancia
  data: IShareholdersFranciaRequestForm
}
