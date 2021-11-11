interface Ii18nOtherData {
  'OtherData:title': string
  'OtherData:actividades': string
  'OtherData:telefono': string
  'OtherData:telefax': string
  'OtherData:telex': string
}

export interface IOtherDataRequestForm {
  actividades: string
  telefono: string
  telefax: string
  telex: string
}

export interface IOtherData {
  i18n: Ii18nOtherData
  data: IOtherDataRequestForm
}
