interface Ii18nSummaryPaymentsFrancia {
  'SummaryPaymentsFrancia:title': string
  'SummaryPaymentsFrancia:fechacalculo': string
  'SummaryPaymentsFrancia:periodoconsiderado': string
  'SummaryPaymentsFrancia:numproveedores': string
  'SummaryPaymentsFrancia:numerotransaccionescomerciales': string
  'SummaryPaymentsFrancia:importetotaltransacciones': string
  'SummaryPaymentsFrancia:importeretrasado': string
  'SummaryPaymentsFrancia:moneda': string
  'SummaryPaymentsFrancia:comportamientoenpagos': string
  'SummaryPaymentsFrancia:promediominimo': string
  'SummaryPaymentsFrancia:promediomaximo': string
  'SummaryPaymentsFrancia:importe': string
}

export interface ISummaryPaymentsFranciaRequestForm {
  fechacalculo: string
  periodoconsiderado: string
  numproveedores: string
  numerotransaccionescomerciales: string
  importetotaltransacciones: string
  importeretrasado: string
  moneda: string
  comportamientoenpagos: string
  numerotransaccionescomerciales2: string
  promediominimo: string
  promediomaximo: string
  importe: string
  moneda2: string
}

export interface ISummaryPaymentsFrancia {
  i18n: Ii18nSummaryPaymentsFrancia
  data: ISummaryPaymentsFranciaRequestForm
}
