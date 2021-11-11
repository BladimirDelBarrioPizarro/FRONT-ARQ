interface Ii18nPrimaryResidence {
  'PrimaryResidence:title': string
  'PrimaryResidence:domicilio': string
  'PrimaryResidence:localidad': string
  'PrimaryResidence:provincia': string
  'PrimaryResidence:codigopostal': string
  'PrimaryResidence:pais': string
  'PrimaryResidence:comentarios': string
  'PrimaryResidence:bolsa': string
}

export interface IPrimaryResidenceRequestForm {
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  comentarios: string
  bolsa: string

}

export interface IPrimaryResidence {
  i18n: Ii18nPrimaryResidence
  data: IPrimaryResidenceRequestForm
}
