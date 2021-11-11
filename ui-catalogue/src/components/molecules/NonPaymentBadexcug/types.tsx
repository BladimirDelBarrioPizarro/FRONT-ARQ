interface Ii18nNonPaymentBadexcug {
  'NonPaymentBadexcug:title': string
  'NonPaymentBadexcug:nombreRazonSocial': string
  'NonPaymentBadexcug:identificadorPersona': string
  'NonPaymentBadexcug:fechaAlta': string
  'NonPaymentBadexcug:fechaUltimaAct': string
  'NonPaymentBadexcug:fechaUltimaConsulta': string
  'NonPaymentBadexcug:entidadUltConsulta': string
  'NonPaymentBadexcug:numeroOperaciones': string
  'NonPaymentBadexcug:importeOperaciones': string
  'NonPaymentBadexcug:operIncidencias': string
  'NonPaymentBadexcug:cuotasImpagadas': string
  'NonPaymentBadexcug:importeImpagado': string
  'NonPaymentBadexcug:peorSituacion': string
  'NonPaymentBadexcug:fechaPeorSituacion': string
  'NonPaymentBadexcug:importeAnotacionMax': string
  'NonPaymentBadexcug:fechaAnotacionMax': string
}
export interface IdataNonPaymentBadexcugFormRequest {
  nombreRazonSocial: string
  identificadorPersona: string
  fechaAlta: string
  fechaUltimaAct: string
  fechaUltimaConsulta: string
  entidadUltConsulta: string
  numeroOperaciones: string
  importeOperaciones: string
  operIncidencias: string
  cuotasImpagadas: string
  importeImpagado: string
  peorSituacion: string
  fechaPeorSituacion: string
  importeAnotacionMax: string
  fechaAnotacionMax: string
}

export interface INonPaymentBadexcug {
  i18n: Ii18nNonPaymentBadexcug
  data: IdataNonPaymentBadexcugFormRequest
}
