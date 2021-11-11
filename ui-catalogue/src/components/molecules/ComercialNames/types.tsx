interface Ii18nComercialNames {
  'ComercialNames:title': string
  'ComercialNames:nombre': string
}

export interface IComercialNamesRequestForm {
  nombre: string
}

export interface IComercialNames {
  i18n: Ii18nComercialNames
  data: IComercialNamesRequestForm
}
