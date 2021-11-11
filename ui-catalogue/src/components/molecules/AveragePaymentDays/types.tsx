interface Ii18nAveragePaymentDays {
  'AjtsDBGDP:title': string
  'AjtsDBGDP:periodomediopago': string
  'AjtsDBGDP:periodomediocobro': string
  'AjtsDBGDP:deudores': string
}

export interface IAveragePaymentDaysRequestForm {
  periodomediopago: string
  periodomediocobro: string
  deudores: string
}

export interface IAveragePaymentDays {
  i18n: Ii18nAveragePaymentDays
  data: IAveragePaymentDaysRequestForm
}
