interface Ii18nVoidedCards {
  'VoidedCards:title': string
  'VoidedCards:fechafin': string
  'VoidedCards:fechainicio': string
  'VoidedCards:numerototal': string
}

export interface IVoidedCardsRequestForm {
  fechafin: string
  fechainicio: string
  numerototal: string
}

export interface IVoidedCards {
  i18n: Ii18nVoidedCards
  data: IVoidedCardsRequestForm
}
