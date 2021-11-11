interface Ii18nGeneralDataNoRef {
  'GeneralDataNoRef:title': string
  'GeneralDataNoRef:remitente': string
  'GeneralDataNoRef:nombreDocumento': string
  'GeneralDataNoRef:tipoDocumento': string
  'GeneralDataNoRef:fechaMensaje': string
  'GeneralDataNoRef:fecha': string
  'GeneralDataNoRef:fechaultimabusqueda': string
  'GeneralDataNoRef:numerodocumento': string
  'GeneralDataNoRef:codigoempresa': string
  'GeneralDataNoRef:moneda': string
  'GeneralDataNoRef:nombreFichero': string
}

export interface IDatosGeneralesNoRefRequestFrom {
  remitente: string
  nombredocumento: string
  tipodocumento: string
  fechamensaje: string
  fecha: string
  fechaultimabusqueda: string
  numerodocumento: string
  numeropeticion: string
  codigoempresa: string
  moneda: string
  nombrefichero: string
}

export interface IDatosGeneralesNoRef {
  i18n: Ii18nGeneralDataNoRef
  data: IDatosGeneralesNoRefRequestFrom
}
