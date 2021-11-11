interface Ii18nRatingForm {
  'RatingForm:title': string
  'RatingForm:fechaasignacion': string
  'RatingForm:formaasignacionrating': string
  'RatingForm:d&brating': string
  'RatingForm:indicador': string
  'RatingForm:observaciones': string
  'RatingForm:evaluacionriesgo': string
  'RatingForm:credito': string
  'RatingForm:formaasignacioncredito': string
  'RatingForm:evaluacioncredito': string
  'RatingForm:otrosratings': string
  'RatingForm:valor': string
}

export interface IRatingFormRequestForm {
  fechaasignacion: string
  formaasignacionrating: string
  dbrating: string
  indicador: string
  observaciones: string
  riesgo1: string
  riesgo2: string
  riesgo3: string
  riesgo4: string
  riesgo5: string
  riesgo6: string
  riesgo7: string
  riesgo8: string
  credito1: string
  credito2: string
  formaasignacioncredito: string
  evaluacioncredito: string
  otrosratings1: string
  otrosratings2: string
  valor1: string
  valor2: string
}

export interface IRatingForm {
  i18n: Ii18nRatingForm
  data: IRatingFormRequestForm[]
}
