interface Ii18nDealForm {
  'DealForm:title': string
  'DealForm:clientes': string
  'DealForm:comentarios': string
  'DealForm:tipomercado': string
  'DealForm:tipomercado2': string
}

export interface IDealFormRequestForm {
  clientes: string
  comentarios: string
  tipomercado1: string
  tipomercado2: string
}

export interface IDealForm {
  i18n: Ii18nDealForm
  data: IDealFormRequestForm
}
