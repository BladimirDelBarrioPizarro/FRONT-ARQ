interface Ii18nCreditResponsability {
  'CreditResponsability:title': string
  'CreditResponsability:detailTbDiaCentralizacion': string
  'CreditResponsability:detailTbEntidades': string
  'CreditResponsability:detailTbIncumplimiento': string
  'CreditResponsability:detailTbProductosFinancieros': string
}

export interface ICreditResponsabilityRequestForm{
  diaCentralizacion: string
  entidades: string
  incumplimiento: string
  productosFinancieros: string
}

export interface ICreditResponsability {
  i18n: Ii18nCreditResponsability
  data: ICreditResponsabilityRequestForm
}
