interface Ii18nLegalForm {
  'LegalForm:title': string
  'LegalForm:concursales': string
  'LegalForm:formajuridica': string
  'LegalForm:formajuridicainicial': string
  'LegalForm:fecharegistro': string
  'LegalForm:fechainicial': string
}

export interface ILegalFormRequestForm {
  concursales: string
  formajuridica1: string
  formajuridica2: string
  formajuridicainicial1: string
  formajuridicainicial2: string
  fecharegistro: string
  fechainicial: string
}

export interface ILegalForm {
  i18n: Ii18nLegalForm
  data: ILegalFormRequestForm
}
