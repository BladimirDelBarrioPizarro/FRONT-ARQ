interface Ii18nAdministrators {
  'Administrators:title': string
  'Administrators:relaciones': string
  'Administrators:asociacion': string
  'Administrators:numeroDum': string
  'Administrators:estatus': string
  'Administrators:desde': string
  'Administrators:fecha': string
}

interface IdataAdministrators {
  relaciones1: string
  relaciones2: string
  asociacion: string
  numeroDun: string
  estatus1: string
  estatus2: string
  administrador: string
  fecha: string
}

export interface IdataAdministratorsRequestForm {
  input1: string
  input2: string
  input3: string
  form: IdataAdministrators[]
}

export interface IAdministrators {
  i18n: Ii18nAdministrators
  data: IdataAdministratorsRequestForm
}
