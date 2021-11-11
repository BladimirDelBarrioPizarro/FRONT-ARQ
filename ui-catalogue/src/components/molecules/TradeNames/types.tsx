interface Ii18nTradeNames {
  'TradeNames:title': string
  'TradeNames:nombrecomercial': string
}

export interface ITradeNamesRequestForm {
  nombreComercial: string
}

export interface ITradeNames {
  i18n: Ii18nTradeNames
  data: ITradeNamesRequestForm
}
