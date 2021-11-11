interface Ii18nLegalProceduresIT {
  'LegalProceduresIT:title': string
  'LegalProceduresIT:title2': string
}

export interface ILegalProceduresITRequestForm {
  fechaactualizacion: string
}

export interface ILegalProceduresIT {
  i18n: Ii18nLegalProceduresIT
  data: ILegalProceduresITRequestForm
}
