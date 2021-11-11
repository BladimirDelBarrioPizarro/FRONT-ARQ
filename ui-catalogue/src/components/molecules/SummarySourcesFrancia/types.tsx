interface Ii18nSummarySourcesFrancia {
  'SummarySourcesFrancia:title': string
  'SummarySourcesFrancia:fechaactualizacion': string
  'SummarySourcesFrancia:periodoanalizado': string
  'SummarySourcesFrancia:tipofinanciacion': string
  'SummarySourcesFrancia:numerototal': string
  'SummarySourcesFrancia:importetotal': string
  'SummarySourcesFrancia:financiacionreciente': string
  'SummarySourcesFrancia:situacionactual': string
  'SummarySourcesFrancia:numeroeventossituacion': string
}

export interface ISummarySourcesFranciaRequestForm {
  fechaactualizacion: string
  periodoanalizado: string
  tipofinanciacion: string
  numerototal: string
  importetotal1: string
  financiacionreciente: string
  situacionactual: string
  numeroeventossituacion: string
  importetotal2: string
}

export interface ISummarySourcesFrancia {
  i18n: Ii18nSummarySourcesFrancia
  data: ISummarySourcesFranciaRequestForm
}
