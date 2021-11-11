interface Ii18nBankData {
  'BankData:title': string
  'BankData:detailTbDenominacion': string
  'BankData:detailTbCodigoIdentificador': string
}

export interface IBankDataFormRequest {
  denominacion: string
  codigoIdentificador: string
}

export interface IBankData {
  i18n: Ii18nBankData
  data: IBankDataFormRequest
}
