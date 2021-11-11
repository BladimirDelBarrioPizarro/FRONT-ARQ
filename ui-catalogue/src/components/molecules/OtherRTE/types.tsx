interface Ii18nOtherRTE {
  'OtherRTE:title': string
  'OtherRTE:codigoRTE': string
  'OtherRTE:valorRTE': string
}

export interface IOtherRTERequestForm {
  codigoRTE: string
  valorRTE: string
}

export interface IOtherRTE {
  i18n: Ii18nOtherRTE
  data: IOtherRTERequestForm
}
