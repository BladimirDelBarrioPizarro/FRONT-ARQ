interface Ii18nNonPayments {
  'NonPayments:title': string
  'NonPayments:fechaefecto': string
  'NonPayments:importepagado': string
  'NonPayments:claveprotesta': string
  'NonPayments:librador': string
  'NonPayments:claveestado': string
  'NonPayments:claveaceptado': string
  'NonPayments:tipodocumento': string
  'NonPayments:entidadinformante': string
  'NonPayments:importepagadoactual': string
}

export interface INonPaymentsRequestForm {
  fechaefecto: string
  importepagado: string
  claveprotesta: string
  librador: string
  claveestado: string
  claveaceptado: string
  tipodocumento: string
  entidadinformante: string
  importepagadoactual: string
}

export interface INonPayments {
  i18n: Ii18nNonPayments
  data: INonPaymentsRequestForm
}
