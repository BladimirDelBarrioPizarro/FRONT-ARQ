interface Ii18nDebsReportedInfoCorpSicom {
  'DebsReportedInfoCorpSicom:title': string
  'DebsReportedInfoCorpSicom:ultimoperiodo': string
  'DebsReportedInfoCorpSicom:cantidadensoles': string
  'DebsReportedInfoCorpSicom:montoensoles': string
  'DebsReportedInfoCorpSicom:cantidadendolares': string
  'DebsReportedInfoCorpSicom:montoendolares': string
  'DebsReportedInfoCorpSicom:fechavencimiento': string
  'DebsReportedInfoCorpSicom:fechareportada': string
  'DebsReportedInfoCorpSicom:montodivisa': string
  'DebsReportedInfoCorpSicom:acreedor': string
  'DebsReportedInfoCorpSicom:tipodeudor': string
}

export interface IDebsReportedInfoCorpSicomRequestForm {
  ultimoperiodo: string
  cantidadensoles: string
  montoensoles: string
  cantidadendolares: string
  montoendolares: string
  fechavencimiento: string
  fechareportada: string
  montodivisa: string
  acreedor: string
  tipodeudor: string
}

export interface IDebsReportedInfoCorpSicoms {
  i18n: Ii18nDebsReportedInfoCorpSicom
  data: IDebsReportedInfoCorpSicomRequestForm
}
