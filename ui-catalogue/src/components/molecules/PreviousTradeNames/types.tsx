interface Ii18nPreviousTradeNames {
  'PreviousTradeNames:title': string
  'PreviousTradeNames:denominacion': string
  'PreviousTradeNames:fechainicio': string
  'PreviousTradeNames:fechacambiodenominacion': string
}

export interface IPreviousTradeNamesRequestForm {
  denominacion: string
  fechainicio: string
  fechacambiodenominacion: string
}

export interface IPreviousTradeNames {
  i18n: Ii18nPreviousTradeNames
  data: IPreviousTradeNamesRequestForm

}
