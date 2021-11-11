interface Ii18nPaymentForm {
  'PaymentForm:transacciones': string
  'PaymentForm:proveedores': string
  'PaymentForm:paydex': string
}

export interface IPaymentFormRequestForm {
  transacciones: string
  proveedores: string
  paydex: string
}

export interface IPaymentForm {
  i18n: Ii18nPaymentForm
  data: IPaymentFormRequestForm
}
