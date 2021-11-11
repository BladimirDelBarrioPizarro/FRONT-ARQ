interface Ii18nTaxCode {
  'TaxCode:title': string
  'TaxCode:numDum': string
  'TaxCode:fechaasignacion': string
  'TaxCode:fechacambio': string
}

export interface IdataTaxCodeRequestForm {
  numDum: string
  fechaAsignacion1: string
  fechaAsignacion12: string
  fechaAsignacion13: string
  fechaCambio1: string
  fechaCambio12: string
  fechaCambio13: string
  fechaAsignacion2: string
  fechaAsignacion22: string
  fechaAsignacion23: string
  fechaCambio2: string
  fechaCambio22: string
  fechaCambio23: string
  fechaAsignacion3: string
  fechaAsignacion32: string
  fechaAsignacion33: string
  fechaCambio3: string
  fechaCambio32: string
  fechaCambio33: string
  fechaAsignacion4: string
  fechaAsignacion42: string
  fechaAsignacion43: string
  fechaCambio4: string
  fechaCambio42: string
  fechaCambio43: string
  tipoIdentificacion: string
  numeroIdentificacion: string
}
export interface ITaxCodes {
  i18n: Ii18nTaxCode
  data: IdataTaxCodeRequestForm
}
