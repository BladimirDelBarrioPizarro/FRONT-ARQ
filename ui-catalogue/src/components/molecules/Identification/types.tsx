interface Ii18nIdentification {
  'Identification:title': string
  'Identification:razonSocial': string
  'Identification:denominacionComercial': string
  'Identification:primaryAddress': string
  'Identification:domicilio': string
  'Identification:addressLine': string
  'Identification:localidad': string
  'Identification:provincia': string
  'Identification:codigoPostal': string
  'Identification:descripcion': string
}

export interface IdataIdentificationRequestForm {
  razonSocial: string
  denominacion: string
  primaryAddress: string
  domicilio: string
  addressLine: string
  localidad: string
  provincia: string
  codigoPostal: string
  descripcion: string
  pais: string
  anteriorRazonSocial: string
  referenciaInforme: string
  referenciaFuente: string
  codigoEmpresa: string
  registrationNumber: string
  bolsa: string
}

export interface IIdentification {
  i18n: Ii18nIdentification
  data: IdataIdentificationRequestForm
}
