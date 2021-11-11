interface Ii18nNaceSic {
  'NaceSic:title': string
  'NaceSic:codigoSIC': string
  'NaceSic:descripcionSIC': string
  'NaceSic:codigoNACE': string
  'NaceSic:descripcionNACE': string
}

export interface IdataNaceSicRequestForm {
  codigoSIC: string
  descripcionSIC: string
  codigoNACE: string
  descripcionNACE: string
}
export interface INaceSic {
  i18n: Ii18nNaceSic
  data: IdataNaceSicRequestForm
}
