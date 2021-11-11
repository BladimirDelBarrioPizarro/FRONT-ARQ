interface Ii18nSummary {
  'Summary:title': string
  'Summary:formaJuridica': string
  'Summary:anteriorFormaJuríd': string
  'Summary:fechaConstrucción': string
  'Summary:fechaFormaJurídica': string
  'Summary:estadoActual': string
  'Summary:fechaEstadoActual': string
  'Summary:fechaInicioActividad': string
  'Summary:estadoActualMope': string
  'Summary:comentarios': string
  'Summary:terminosVenta': string
}

export interface IdataSummaryRequestForm {
  formaJuridica: string
  anteriorFormaJuríd: string
  fechaConstrucción: string
  fechaFormaJurídica: string
  estadoActual: string
  fechaEstadoActual: string
  fechaInicioActividad: string
  estadoActualMope: string
  comentarios: string
  terminosVenta: string
}

export interface ISummary {
  i18n: Ii18nSummary
  data: IdataSummaryRequestForm
}
