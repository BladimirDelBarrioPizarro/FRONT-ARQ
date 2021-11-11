interface Ii18nDefaultsAsnef {
  'DefaultsAsnef:title': string
  'DefaultsAsnef:nombrerazonsocial': string
  'DefaultsAsnef:identificadorpersona': string
  'DefaultsAsnef:fechaalta': string
  'DefaultsAsnef:fechaultimaactualizacion': string
  'DefaultsAsnef:fechaultimaconsulta': string
  'DefaultsAsnef:entidadultimaconsulta': string
  'DefaultsAsnef:numoperaciones': string
  'DefaultsAsnef:importeoperaciones': string
  'DefaultsAsnef:importemensualcuotas': string
  'DefaultsAsnef:importependiente': string
  'DefaultsAsnef:numoperacionesincidencias': string
  'DefaultsAsnef:numcuotasimpagadas': string
  'DefaultsAsnef:importeimpagado': string
  'DefaultsAsnef:peorsituacion': string
  'DefaultsAsnef:fechapeorsituacion': string
  'DefaultsAsnef:importemaximopagado': string
  'DefaultsAsnef:fechaimpmaximopagado': string
  'DefaultsAsnef:codigooperacion': string
  'DefaultsAsnef:identificacionpersona': string
  'DefaultsAsnef:entidadcedente': string
  'DefaultsAsnef:producto': string
  'DefaultsAsnef:naturaleza': string
  'DefaultsAsnef:situacion': string
  'DefaultsAsnef:fechainicio': string
  'DefaultsAsnef:fechafinal': string
  'DefaultsAsnef:numcuotas': string
  'DefaultsAsnef:importecuotas': string
  'DefaultsAsnef:importepagado': string
  'DefaultsAsnef:fechaprimervencimiento': string
  'DefaultsAsnef:fechaultimovencimiento': string
}

export interface IDefaultsAsnefRequestForm {
  nombrerazonsocial: string
  identificadorpersona: string
  fechaalta: string
  fechaultimaactualizacion: string
  fechaultimaconsulta: string
  entidadultimaconsulta: string
  numoperaciones: string
  importeoperaciones: string
  importemensualcuotas: string
  importependiente: string
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
  fechainicio: string
  fechafinal: string
  numcuotas: string
  importecuotas: string
  importepagado: string
  fechaprimervencimiento: string
  fechaultimovencimiento: string
}

export interface IDefaultsAsnef {
  i18n: Ii18nDefaultsAsnef
  data: IDefaultsAsnefRequestForm
}
