import { IdataIdentificationRequestForm } from '../Identification/types'

interface Ii18nIdentification {
  'Identification:title': string
  'Identification:razonSocial': string
  'Identification:denominacion': string
  'Identification:nif': string
  'Identification:primaryAddress': string
  'Identification:domicilio': string
  'Identification:addressLine': string
  'Identification:localidad': string
  'Identification:provincia': string
  'Identification:codigoPostal': string
  'Identification:descripcion': string
  'Identification:pais': string
  'Identification:anteriorRazonSocial': string
}

export interface IIdentificationBadexcug {
  i18n: Ii18nIdentification
  data: IdataIdentificationRequestForm
}
