interface Ii18nLegalFormFrancia {
  'LegalFormFrancia:title': string
  'LegalFormFrancia:situacionesConcursales': string
  'LegalFormFrancia:formajuridica': string
  'LegalFormFrancia:fecharegistroformajuridica': string
  'LegalFormFrancia:formajuridicainicial': string
  'LegalFormFrancia:fechainicialincorporacion': string
  'LegalFormFrancia:tipoEmpresa': string
  'LegalFormFrancia:statusActual': string
  'LegalFormFrancia:fechacambioformajuridica': string
}

export interface ILegalFormFranciaRequestForm {
  situacionesConcursales: string
  formajuridica1: string
  formajuridica2: string
  fecharegistroformajuridica: string
  formajuridicainicial: string
  fechainicialincorporacion1: string
  fechainicialincorporacion2: string
  tipoEmpresa1: string
  tipoEmpresa2: string
  statusActual1: string
  statusActual2: string
  fechacambioformajuridica1: string
  fechacambioformajuridica2: string
}

export interface ILegalFormFrancia {
  i18n: Ii18nLegalFormFrancia
  data: ILegalFormFranciaRequestForm
}
