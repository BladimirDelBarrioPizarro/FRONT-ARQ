interface Ii18nCompanyData {
  'CompanyData:title': string
  'CompanyData:empresa': string
  'CompanyData:cif': string
  'CompanyData:nombre': string
  'CompanyData:codigoPostal': string
  'CompanyData:direccion': string
}

export interface ICompanyDataRequestForm {
  empresa: string
  cif: string
  nombre: string
  codigopostal: string
  direccion: string
}

export interface ICompanyData {
  i18n: Ii18nCompanyData
  data: ICompanyDataRequestForm
}
