interface Ii18nExports {
  'Exports:title': string
  'Exports:pais': string
  'Exports:porcentaje': string
}

export interface IExportsRequestForm {
  pais: string
  porcentaje: string

}

export interface IExports {
  i18n: Ii18nExports
  data: IExportsRequestForm
}
