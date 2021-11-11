interface i18nIdentificationnoDB {
  'IdentificationnoDB:title': string
  'IdentificationnoDB:codigoempresa': string
  'IdentificationnoDB:denominacion': string
  'IdentificationnoDB:domicilio': string
  'IdentificationnoDB:localidad': string
  'IdentificationnoDB:provincia': string
  'IdentificationnoDB:codigopostal': string
  'IdentificationnoDB:pais': string
  'IdentificationnoDB:referenciafuente': string
}

export interface IIdentificationNoDBRequestForm {
  codigoempresa: string
  denominacion: string
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  referenciafuente: string
}

export interface IIdentificationnoDB {
  data: IIdentificationNoDBRequestForm
  i18n: i18nIdentificationnoDB
}
