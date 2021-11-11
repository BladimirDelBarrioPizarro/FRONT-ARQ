interface Ii18nRatingsDBDP {
  'RatingsDBDP:title': string
  'RatingsDBDP:rating': string
  'RatingsDBDP:fechacambiorating': string
  'RatingsDBDP:importerecomendado': string
  'RatingsDBDP:importemediosolicitado': string
  'RatingsDBDP:importemediorecomendado': string
  'RatingsDBDP:ratinganterior': string
  'RatingsDBDP:conceptocomercial': string
  'RatingsDBDP:evaluacionporcentaje': string
  'RatingsDBDP:limitecredito': string
  'RatingsDBDP:riesgotesoreria': string
  'RatingsDBDP:codigoRTE': string
  'RatingsDBDP:valorRTE': string
}

export interface IRatingsDBDPRequestForm {
  rating: string
  fechacambiorating: string
  importerecomendado: string
  importemediosolicitado: string
  ratinganterior: string
  conceptocomercial: string
  evaluacionporcentaje: string
  limitecredito: string
  riesgotesoreria: string
  codigoRTE: string
  valorRTE: string
}

export interface IRatingsDBDP {
  i18n: Ii18nRatingsDBDP
  data: IRatingsDBDPRequestForm
}
