import {
  IdataIdentificationRequestForm
} from '../Identification/types'
interface Ii18nIdentificationNoRef {
  'Identification:title': string
  'Identification:domicilio': string
  'Identification:localidad': string
  'Identification:provincia': string
  'Identification:codigoPostal': string
  'Identification:pais': string
  'Identification:referenciaInforme': string
  'Identification:referenciaFuente': string
  'Identification:codigoEmpresa': string
  'Identification:denominacion': string
  'Identification:registrationNumber': string
  'Identification:bolsa': string
}

export interface IIdentificationNoRef {
  i18n: Ii18nIdentificationNoRef
  data: IdataIdentificationRequestForm
}
