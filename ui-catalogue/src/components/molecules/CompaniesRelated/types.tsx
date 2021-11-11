interface Ii18nCompaniesRelated {
  'CompaniesRelated:title': string
  'CompaniesRelated:nombre': string
  'CompaniesRelated:tiporelacion': string
  'CompaniesRelated:numeroidentificacion': string
  'CompaniesRelated:tipoidentificacion': string
  'CompaniesRelated:domicilio': string
  'CompaniesRelated:localidad': string
  'CompaniesRelated:provincia': string
  'CompaniesRelated:codigopostal': string
  'CompaniesRelated:pais': string
  'CompaniesRelated:comentarios': string
  'CompaniesRelated:bolsa': string
}

export interface ICompaniesRelatedRequestForm {
  nombre: string
  tiporelacion: string
  numeroidentificacion: string
  tipoidentificacion: string
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  comentarios: string
  bolsa: string
}

export interface ICompaniesRelated {
  i18n: Ii18nCompaniesRelated
  data: ICompaniesRelatedRequestForm
}
