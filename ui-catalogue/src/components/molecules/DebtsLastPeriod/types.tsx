interface Ii18nDebtsLastPeriod {
  'DebtsLastPeriod:title': string
  'DebtsLastPeriod:titlePeorCalificacion': string
  'DebtsLastPeriod:titleMayorDeudas': string
  'DebtsLastPeriod:titleMayorImporte': string
  'DebtsLastPeriod:titleMayorDiasRetraso': string
  'DebtsLastPeriod:entidad': string
  'DebtsLastPeriod:calificacion': string
  'DebtsLastPeriod:sistemaFinanciero': string
  'DebtsLastPeriod:totalDeuda': string
}

export interface IDebtsLastPeriodRequestForm {
  titlePeriod: string
  entidadPeorCalificacion: string
  entidadMayorDeudas: string
  entidadMayorImporte: string
  entidadMayorDiasRetraso: string
  calificacionPeorCalificacion: string
  calificacionMayorDeudas: string
  calificacionMayorImporte: string
  calificacionMayorDiasRetraso: string
  sistemaFinancieroPeorCalificacion: string
  sistemaFinancieroMayorDeudas: string
  sistemaFinancieroMayorImporte: string
  sistemaFinancieroMayorDiasRetraso: string
  totalDeudaPeorCalificacion: string
  totalDeudaMayorDeudas: string
  totalDeudaMayorImporte: string
  totalDeudaMayorDiasRetraso: string
}

export interface IDebtsLastPeriod {
  i18n: Ii18nDebtsLastPeriod
  data: IDebtsLastPeriodRequestForm
}
