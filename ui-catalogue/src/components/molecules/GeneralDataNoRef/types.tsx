import { IGeneralDataRequestForm } from '../GeneralData/types'

interface Ii18nGeneralDataNoRef {
  'GeneralData:title': string
  'GeneralData:remitente': string
  'GeneralData:nombreDocumento': string
  'GeneralData:tipoDocumento': string
  'GeneralData:fechaMensaje': string
  'GeneralData:fecha': string
  'GeneralData:fechaBusqueda': string
  'GeneralData:numeroDocumento': string
  'GeneralData:numeroPeticion': string
  'GeneralData:moneda': string
  'GeneralData:nombreFichero': string
}

export interface IGeneralDataNoRef {
  i18n: Ii18nGeneralDataNoRef
  data: IGeneralDataRequestForm
}
