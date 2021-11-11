interface Ii18nCompanyAssets {
  'CompanyAssets:clase': string
  'CompanyAssets:tipoactivo': string
  'CompanyAssets:unidades': string
  'CompanyAssets:comentarios': string
}

export interface ICompanyAssetsRequestForm {
  clase: string
  tipoactivo: string
  unidades: string
  comentarios: string
}

export interface ICompanyAssetsPOAForm {
  i18n: Ii18nCompanyAssets
  data: ICompanyAssetsRequestForm
}
