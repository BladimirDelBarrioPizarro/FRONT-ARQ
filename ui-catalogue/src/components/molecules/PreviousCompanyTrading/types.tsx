interface Ii18nPreviousCompanyTrading {
  'PreviousCompanyTrading:title': string
  'PreviousCompanyTrading:nombre': string
  'PreviousCompanyTrading:comentarios': string
  'PreviousCompanyTrading:bolsa': string
}

export interface IPreviousCompanyTradingRequestForm {
  nombre: string
  comentarios: string
  bolsa: string
}

export interface IPreviousCompanyTrading {
  i18n: Ii18nPreviousCompanyTrading
  data: IPreviousCompanyTradingRequestForm
}
