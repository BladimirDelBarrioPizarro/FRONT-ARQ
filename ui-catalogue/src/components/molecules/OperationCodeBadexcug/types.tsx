interface Ii18nOperationCodeBadexcug {
  'OperationCodeBadexcug:title': string
  'OperationCodeBadexcug:identificadorPersona': string
  'OperationCodeBadexcug:fechaAlta': string
  'OperationCodeBadexcug:entidadCedente': string
  'OperationCodeBadexcug:producto': string
  'OperationCodeBadexcug:naturaleza': string
  'OperationCodeBadexcug:situacion': string
  'OperationCodeBadexcug:fechaInicio': string
  'OperationCodeBadexcug:fechaFinal': string
  'OperationCodeBadexcug:numeroCuotas': string
  'OperationCodeBadexcug:importeCuotas': string
  'OperationCodeBadexcug:importePendiente': string
  'OperationCodeBadexcug:importeImpagado': string
  'OperationCodeBadexcug:numCuotasImpagadas': string
  'OperationCodeBadexcug:fechaPrimerVencimiento': string
  'OperationCodeBadexcug:fechaUltimoVencimiento': string
  'OperationCodeBadexcug:informacionAdicional': string
}
export interface IdataOperationCodeBadexcugFormRequest {
  codigoOperacion: string
  identificadorPersona: string
  fechaAlta: string
  entidadCedente: string
  producto: string
  naturaleza: string
  situacion: string
  fechaInicio: string
  fechaFinal: string
  numeroCuotas: string
  importeCuotas: string
  importePendiente: string
  importeImpagado: string
  numCuotasImpagadas: string
  fechaPrimerVencimiento: string
  fechaUltimoVencimiento: string
  informacionAdicional: string
}

export interface IOperationCodeBadexcug {
  i18n: Ii18nOperationCodeBadexcug
  data: IdataOperationCodeBadexcugFormRequest[]
}
