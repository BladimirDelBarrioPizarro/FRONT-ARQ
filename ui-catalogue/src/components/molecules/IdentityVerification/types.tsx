interface Ii18nIdentityVerification {
  'IdentityVerification:title': string
  'IdentityVerification:nombre': string
  'IdentityVerification:identificacion': string
  'IdentityVerification:numeroDuns': string
  'IdentityVerification:domicilioFiscal': string
  'IdentityVerification:calle': string
  'IdentityVerification:localidad': string
  'IdentityVerification:codigopostal': string
  'IdentityVerification:provincia': string
  'IdentityVerification:profesion': string
  'IdentityVerification:actividadeconomica': string
  'IdentityVerification:domiciliosalternativos': string
  'IdentityVerification:domiciliocompleto': string
  'IdentityVerification:fechaConstitucion': string
  'IdentityVerification:fechaNacimiento': string
  'IdentityVerification:edad': string
  'IdentityVerification:formaJuridica': string
  'IdentityVerification:codigoactividad': string
  'IdentityVerification:actividadPrincipal': string
  'IdentityVerification:codigoactividadsecundaria': string
  'IdentityVerification:actividadSecundaria': string
  'IdentityVerification:empleadosverificados': string
  'IdentityVerification:informacionnegativa': string
  'IdentityVerification:sinactividad': string
  'IdentityVerification:concursopresentado': string
  'IdentityVerification:fechainscripciones': string
  'IdentityVerification:iva': string
  'IdentityVerification:gananciassociedades': string
  'IdentityVerification:gananciaspersonas': string
}
export interface IIdentityVerificationsDataForm {
  nombre: string
  identificacion: string
  numeroduns: string
  calle: string
  localidad: string
  codigopostal: string
  provincia: string
  profesion: string
  actividadeconomica: string
  domicilioCompleto1: string
  domicilioCompleto2: string
  domicilioCompleto3: string
  domicilioCompleto4: string
  fechaconstitucion: string
  fechanacimiento: string
  edad: string
  formajuridica: string
  codigoactividadprincipal: string
  actividadprincipal: string
  codigoactividadsecundaria: string
  actividadsecundaria: string
  empleadosverificados: string
  sinactividad: string
  concursopresentado: string
  iva: string
  ganaciassociedades: string
  ganaciaspersonasfisicas: string
}

export interface IIdentityVerification {
  i18n: Ii18nIdentityVerification
  data: IIdentityVerificationsDataForm
}
