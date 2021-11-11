interface Ii18nTaxCodesEUDBP {
  'TaxCodesEUDBP:title': string
  'TaxCodesEUDBP:codigo': string
}

export interface ITaxCodesEUDBPRequestForm {
  codigo: string
}

export interface ITaxCodesEUDBP {
  i18n: Ii18nTaxCodesEUDBP
  data: ITaxCodesEUDBPRequestForm
}
