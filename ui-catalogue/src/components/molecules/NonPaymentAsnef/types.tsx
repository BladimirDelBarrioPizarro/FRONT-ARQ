interface Ii18nNonPaymentAsnef {
  'NonPaymentAsnef:title': string
  'NonPaymentAsnef:nombrerazonsocial': string
  'NonPaymentAsnef:identificadorpersona': string
  'NonPaymentAsnef:fechaalta': string
  'NonPaymentAsnef:fechaultimaact': string
  'NonPaymentAsnef:fechaultimaconsulta': string
  'NonPaymentAsnef:entidadultconsulta': string
  'NonPaymentAsnef:numerooperaciones': string
  'NonPaymentAsnef:importeoperaciones': string
  'NonPaymentAsnef:importemensualcuotas': string
  'NonPaymentAsnef:importependiente': string
  'NonPaymentAsnef:importepagado': string
  'NonPaymentAsnef:numoperacionesincidencias': string
  'NonPaymentAsnef:numcuotasimpagadas': string
  'NonPaymentAsnef:importeimpagado': string
  'NonPaymentAsnef:peorsituacion': string
  'NonPaymentAsnef:fechapeorsituacion': string
  'NonPaymentAsnef:importemaximopagado': string
  'NonPaymentAsnef:fechaimpmaximopagado': string
  'NonPaymentAsnef:codigooperacion': string
  'NonPaymentAsnef:identificacionpersona': string
  'NonPaymentAsnef:entidadcedente': string
  'NonPaymentAsnef:producto': string
  'NonPaymentAsnef:naturaleza': string
  'NonPaymentAsnef:situacion': string
  'NonPaymentAsnef:importeimapgado': string
  'NonPaymentAsnef:fechainicio': string
  'NonPaymentAsnef:fechafinal': string
  'NonPaymentAsnef:numcuotas': string
  'NonPaymentAsnef:importecuotas': string
  'NonPaymentAsnef:fechaprimervencimiento': string
  'NonPaymentAsnef:fechaultimavencimiento': string
}

export interface INonPaymentAsnefFormRequest {
  nombrerazonsocial: string
  identificadorpersona: string
  fechaalta: string
  fechaultimaact: string
  fechaultimaconsulta: string
  entidadultconsulta: string
  numerooperaciones: string
  importeoperaciones: string
  importemensualcuotas: string
  importependiente: string
  importepagado: string
  numoperacionesincidencias: string
  numcuotasimpagadas: string
  importeimpagado: string
  peorsituacion: string
  fechapeorsituacion: string
  importemaximopagado: string
  fechaimpmaximopagado: string
  codigooperacion: string
  identificacionpersona: string
  entidadcedente: string
  producto: string
  naturaleza: string
  situacion: string
  importeimapgado: string
  fechainicio: string
  fechafinal: string
  numcuotas: string
  importecuotas: string
  fechaprimervencimiento: string
  fechaultimavencimiento: string
}

export interface INonPaymentAsnef {
  i18n: Ii18nNonPaymentAsnef
  data: INonPaymentAsnefFormRequest
}
