interface Ii18nSummaryExternalFinancing {
  'SummaryExternalFinancing:title': string
  'SummaryExternalFinancing:fechaactualizacion': string
  'SummaryExternalFinancing:periodo': string
  'SummaryExternalFinancing:tipofinanciacion': string
  'SummaryExternalFinancing:numerototal': string
  'SummaryExternalFinancing:importetotal': string
  'SummaryExternalFinancing:financiacionreciente': string
  'SummaryExternalFinancing:situacionactual': string
  'SummaryExternalFinancing:numeroeventos': string
}

export interface ISummaryExternalFinancingRequestForm {
  fechaactualizacion: string
  periodo: string
  tipofinanciacion: string
  numerototal: string
  importetotal1: string
  financiacionreciente: string
  numeroeventos: string
  importetotal2: string
}

export interface ISummaryExternalFinancing {
  i18n: Ii18nSummaryExternalFinancing
  data: ISummaryExternalFinancingRequestForm
}
