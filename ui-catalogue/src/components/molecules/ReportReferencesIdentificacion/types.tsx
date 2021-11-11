interface Ii18nReportReferencesIdentificacion {
  'ReportReferencesIdentificacion:detailTbTitle': string
  'ReportReferencesIdentificacion:denominacion': string
  'ReportReferencesIdentificacion:domicilio': string
  'ReportReferencesIdentificacion:codigoempresa': string
  'ReportReferencesIdentificacion:localidad': string
  'ReportReferencesIdentificacion:provincia': string
  'ReportReferencesIdentificacion:codigopostal': string
  'ReportReferencesIdentificacion:pais': string
  'ReportReferencesIdentificacion:referenciafuente': string
  'ReportReferencesIdentificacion:detailTbTitle2': string
  'ReportReferencesIdentificacion:vat': string
  'ReportReferencesIdentificacion:buttonAlta': string
  'ReportReferencesIdentificacion:buttonRecepcion': string
  'ReportReferencesIdentificacion:buttonEliminar': string
}

interface IReportReferencesIdentificacionRequestFrom {
  denominacion: string
  domicilio: string
  codigoempresa: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  referenciafuente: string
  vat: string
}

export interface IReportReferencesIdentificacion {
  i18n: Ii18nReportReferencesIdentificacion
  data: IReportReferencesIdentificacionRequestFrom
  handleRecepcion: () => void
  handleAlta: () => void
  handleCancel: () => void
}
