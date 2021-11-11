import { IElementBack } from '../../atoms/ElementBack/ElementBack'
interface Ii18nConfirmation {
  'ReportReferencesConfirmation:title': string
  'ReportReferencesConfirmation:textIcon': string
  'ReportReferencesConfirmation:codigoempresa': string
  'ReportReferencesConfirmation:producto': string
  'ReportReferencesConfirmation:tipodocumento': string
  'ReportReferencesConfirmation:tipogasto': string
  'ReportReferencesConfirmation:corresponsal': string
  'ReportReferencesConfirmation:fecharecepcion': string
  'ReportReferencesConfirmation:textvalidation': string
  'ReportReferencesConfirmation:buttonAccept': string
  'ReportReferencesConfirmation:buttonCancel': string
}

export interface IConfirmation {
  i18n: Ii18nConfirmation
  data: any
  handleAccept: (codDeudor, tipoDocumento, codCorresponsal, codProducto, tipoGasto, fechaRecepcion) => any
  handleCancel: () => any
  elementBackProps: IElementBack
}
