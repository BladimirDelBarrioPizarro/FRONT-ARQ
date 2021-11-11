interface Ii18nLastPeriodDetail {
  'LastPeriodDetail:title': string
  'LastPeriodDetail:ultimoPeriodo': string
  'LastPeriodDetail:nroEntidades': string
  'LastPeriodDetail:totalCreditosVigentes': string
  'LastPeriodDetail:totalCreditosVencidos': string
  'LastPeriodDetail:peorCalificacion': string
  'LastPeriodDetail:totalCreditosRefinanciados': string
  'LastPeriodDetail:totalCreditosJudiciales': string
}

export interface ILastPeriodDetailRequestForm {
  ultimoPeriodo: string
  nroEntidades: string
  totalCreditosVigentes: string
  totalCreditosVencidos: string
  peorCalificacion: string
  totalCreditosRefinanciados: string
  totalCreditosJudiciales: string
}

export interface ILastPeriodDetail {
  i18n: Ii18nLastPeriodDetail
  data: ILastPeriodDetailRequestForm
}
