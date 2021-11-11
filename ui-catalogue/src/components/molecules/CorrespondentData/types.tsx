interface Ii18nCorrespondentData {
  'CorrespondentData:title': string
  'CorrespondentData:corresponsal': string
  'CorrespondentData:nombre': string
  'CorrespondentData:sucursal': string
}

export interface ICorrespondentDataRequestForm{
  corresponsal: string
  nombre: string
  sucursal: string
}

export interface ICorrespondentData {
  i18n: Ii18nCorrespondentData
  data: ICorrespondentDataRequestForm
}
