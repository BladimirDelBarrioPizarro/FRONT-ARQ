interface Ii18nAddressFrancia {
  'AddressFrancia:title': string
  'AddressFrancia:localidad': string
  'AddressFrancia:codigopostal': string
  'AddressFrancia:provincia': string
  'AddressFrancia:fechainicio': string
  'AddressFrancia:fechacambiodomicilio': string
}

export interface IAddressFranciaRequestForm {
  localidad: string
  codigopostal: string
  provincia: string
  fechainicio: string
  fechacambiodomicilio: string
}

export interface IAddressFrancia{
  i18n: Ii18nAddressFrancia
  data: IAddressFranciaRequestForm
}
