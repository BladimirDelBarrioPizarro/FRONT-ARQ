interface Ii18nInformationMexico {
  'InformationMexico:title': string
  'InformationMexico:fechaconsulta': string
  'InformationMexico:rfc': string
  'InformationMexico:nombre': string
  'InformationMexico:tipo': string
}

export interface IdataInformationMexicoRequestForm {
  fechaconsulta: string
  rfc: string
  nombre: string
  tipo: string
}

export interface IGeneralInformationMexico {
  i18n: Ii18nInformationMexico
  data: IdataInformationMexicoRequestForm
}
