export interface IGeneralDataRestoPaises2RequestForm {
  remitente: string
  nombredoc: string
  tipodoc: string
  fechamensaje: string
  fecha: string
  fechaultima: string
  numerodoc: string
  codigoempresa: string
  moneda: string
  nombrefichero: string
}

interface Ii18nGeneralDataRestoPaises2 {
  'GeneralDataRestoPaises2:title': string
  'GeneralDataRestoPaises2:remitente': string
  'GeneralDataRestoPaises2:nombreDocumento': string
  'GeneralDataRestoPaises2:tipoDocumento': string
  'GeneralDataRestoPaises2:fechaMensaje': string
  'GeneralDataRestoPaises2:fecha': string
  'GeneralDataRestoPaises2:fechaBusqueda': string
  'GeneralDataRestoPaises2:numeroDocumento': string
  'GeneralDataRestoPaises2:codigoempresa': string
  'GeneralDataRestoPaises2:moneda': string
  'GeneralDataRestoPaises2:nombreFichero': string
}

export interface IGeneralDataRestoPaises2 {
  i18n: Ii18nGeneralDataRestoPaises2
  data: IGeneralDataRestoPaises2RequestForm
}
