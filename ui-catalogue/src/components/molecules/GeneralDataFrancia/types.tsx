interface Ii18nGeneralDataFrancia {
  'GeneralDataFrancia:title': string
  'GeneralDataFrancia:title2': string
  'GeneralDataFrancia:codigo': string
  'GeneralDataFrancia:razonsocial': string
  'GeneralDataFrancia:codigofiscal': string
  'GeneralDataFrancia:ajt1': string
  'GeneralDataFrancia:ajt2': string
}

export interface IGeneralDataFranciaRequestFrom {
  codigo: string
  razonsocial: string
  codigofiscal: string
  ajt1: string
  ajt2: string
}

export interface IGeneralDataFrancia {
  i18n: Ii18nGeneralDataFrancia
  data: IGeneralDataFranciaRequestFrom
}
