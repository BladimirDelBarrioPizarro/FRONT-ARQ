interface Ii18nNaceCnae {
  'NaceCnae:title': string
  'NaceCnae:codigo': string
}

export interface INaceCnaeRequestForm {
  codigo: string
}

export interface INaceCnae {
  i18n: Ii18nNaceCnae
  data: INaceCnaeRequestForm
}
