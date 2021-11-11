interface Ii18nShareholders {
  'Shareholders:title': string
  'Shareholders:numdum': string
  'Shareholders:accionista': string
  'Shareholders:tipo': string
  'Shareholders:porcentajeparticipacion': string
  'Shareholders:importe': string
}

export interface IShareholdersRequestForm {
  input1: string
  input2: string
  numDum: string
  accionista: string
  tipo: string
  porcentaje: string
  importe1: string
  importe2: string
}

export interface IShareHolders {
  i18n: Ii18nShareholders
  data: IShareholdersRequestForm[]
}
