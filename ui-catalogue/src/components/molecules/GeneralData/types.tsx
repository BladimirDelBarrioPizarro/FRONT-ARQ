interface Ii18nGeneralData {
  'GeneralData:title': string
  'GeneralData:agencia': string
  'GeneralData:codigo': string
  'GeneralData:razonSocial': string
  'GeneralData:codigoFiscal': string
  'GeneralData:ajt1': string
  'GeneralData:ajt2': string
}

export interface IGeneralDataRequestForm {
  agencia: string
  codigo: string
  razonSocial: string
  codigoFiscal: string
  ajt1: string
  ajt2: string
  remitente: string
  nombreDocumento: string
  tipoDocumento: string
  fechaMensaje: string
  fecha: string
  fechaBusqueda: string
  numeroDocumento: string
  numeroPeticion: string
  moneda: string
  nombreFichero: string
}

export interface IGeneralData {
  i18n: Ii18nGeneralData
  data: IGeneralDataRequestForm
}
