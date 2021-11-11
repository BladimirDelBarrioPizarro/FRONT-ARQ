interface Ii18nSummaryPayments {
  'SummaryPayments:title': string
  'SummaryPayments:fechacalculo': string
  'SummaryPayments:periodoconsiderado': string
  'SummaryPayments:numproveedores': string
  'SummaryPayments:transacciones': string
  'SummaryPayments:importetransacciones': string
  'SummaryPayments:importeretrasado': string
  'SummaryPayments:moneda': string
  'SummaryPayments:comportamiento': string
  'SummaryPayments:promediominimo': string
  'SummaryPayments:promediomaximo': string
  'SummaryPayments:importe': string
}

export interface ISummaryPaymentsRequestForm {
  fechacalculo: string
  periodoconsiderado: string
  numproveedores: string
  transacciones: string
  importetransacciones: string
  importeretrasado: string
  moneda: string
  comportamiento1: string
  comportamiento2: string
  comportamiento3: string
  comportamiento4: string
  transaccionescomerciales1: string
  transaccionescomerciales2: string
  transaccionescomerciales3: string
  transaccionescomerciales4: string
  promediominimo1: string
  promediominimo2: string
  promediominimo3: string
  promediominimo4: string
  promediomaximo1: string
  promediomaximo2: string
  promediomaximo3: string
  promediomaximo4: string
  importe1: string
  importe2: string
  importe3: string
  importe4: string
  monedacol1: string
  monedacol2: string
  monedacol3: string
  monedacol4: string
}

export interface ISummaryPayments {
  i18n: Ii18nSummaryPayments
  data: ISummaryPaymentsRequestForm[]
}
