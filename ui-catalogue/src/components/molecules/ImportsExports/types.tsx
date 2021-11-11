interface Ii18nImportsExports {
  'ImportsExports:title': string
  'ImportsExports:importaciones': string
  'ImportsExports:paises': string
  'ImportsExports:producto': string
  'ImportsExports:exportaciones': string
}

export interface IImportsExportsRequestForm {
  importaciones: string
  paises: string
  producto: string
  exportaciones: string
  paises2: string
}

export interface IImportsExports {
  i18n: Ii18nImportsExports
  data: IImportsExportsRequestForm
}
