interface Ii18nDocumentRegistration {
  'DocumentRegistration:title': string
  'DocumentRegistration:tiporegistro': string
  'DocumentRegistration:fecharegistro': string
  'DocumentRegistration:referencia': string
}

export interface IDocumentRegistrationRequestFrom {
  tiporegistro: string
  fecharegistro: string
  referencia: string
}

export interface IDocumentRegistration {
  i18n: Ii18nDocumentRegistration
  data: IDocumentRegistrationRequestFrom
}
