interface Ii18nGeneralDataEUDBP {
  'GeneralData:title': string
  'GeneralData:agencia': string
  'GeneralData:codigo': string
  'GeneralData:razonSocial': string
  'GeneralData:codigoFiscal': string
}

export interface IGeneralDataEUDBPRequestForm {
  agencia: string
  codigo: string
  razonSocial: string
  codigoFiscal: string
}

export interface IGeneralDataEUDBP {
  i18n: Ii18nGeneralDataEUDBP
  data: IGeneralDataEUDBPRequestForm
}
