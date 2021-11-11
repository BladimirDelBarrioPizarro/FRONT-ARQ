interface Ii18nSummaryLegalProceduresFrancia {
  'SummaryLegalProceduresFrancia:title': string
  'SummaryLegalProceduresFrancia:titleSub': string
  'SummaryLegalProceduresFrancia:fechaactualizacion': string
  'SummaryLegalProceduresFrancia:periodoanalizado': string
  'SummaryLegalProceduresFrancia:tipodeacccion': string
  'SummaryLegalProceduresFrancia:clasedeaccion': string
  'SummaryLegalProceduresFrancia:numeroprocedimientos': string
  'SummaryLegalProceduresFrancia:importetotal': string
  'SummaryLegalProceduresFrancia:procedimientolegal': string
  'SummaryLegalProceduresFrancia:situacionactual': string
  'SummaryLegalProceduresFrancia:nprocedimientossituacion': string
}

export interface ISummaryLegalProceduresFranciaRequestForm {
  fechaactualizacion: string
  periodoanalizado: string
  tipodeacccion: string
  clasedeaccion: string
  numeroprocedimientos1: string
  importetotal1: string
  importetotal2: string
  procedimientolegal: string
  situacionactual: string
  numeroprocedimentos2: string
  importetotal3: string
  importetotal4: string
}

export interface ISummaryLegalProceduresFrancia {
  i18n: Ii18nSummaryLegalProceduresFrancia
  data: ISummaryLegalProceduresFranciaRequestForm
}
