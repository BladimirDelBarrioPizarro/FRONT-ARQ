interface Ii18nTaxCodesFrancia {
  'TaxCodesFrancia:title': string
  'TaxCodesFrancia:numerodun': string
  'TaxCodesFrancia:fechaasignacion': string
  'TaxCodesFrancia:fechacambio': string
}

export interface ITaxCodesFranciaRequestForm {
  numerodun: string
  fechaasignacion: string
  fechacambio: string
}

export interface ITaxCodesFrancia {
  i18n: Ii18nTaxCodesFrancia
  data: ITaxCodesFranciaRequestForm
}
