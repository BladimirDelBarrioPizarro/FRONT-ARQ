interface Ii18nCompanyAssetsEUDBPFR {
  'CompanyAssetsEUDBPFR:title': string
  'CompanyAssetsEUDBPFR:clase': string
  'CompanyAssetsEUDBPFR:tipoactivo': string
  'CompanyAssetsEUDBPFR:unidades': string
  'CompanyAssetsEUDBPFR:comentarios': string
  'CompanyAssetsEUDBPFR:titleAJTS': string
  'CompanyAssetsEUDBPFR:AJTS1': string
  'CompanyAssetsEUDBPFR:AJTS2': string
  'CompanyAssetsEUDBPFR:fechamod': string
  'CompanyAssetsEUDBPFR:codcambio': string
}

export interface ICompanyAssetsEUDBPFRRequestForm {
  clase: string
  tipoactivo: string
  unidades: string
  comentarios: string
  ajt1: string
  ajt2: string
  fechamod: string
  codigocambio: string
  comentariosajts: string
}

export interface ICompanyAssetsEUDBPFR {
  i18n: Ii18nCompanyAssetsEUDBPFR
  data: ICompanyAssetsEUDBPFRRequestForm
}
