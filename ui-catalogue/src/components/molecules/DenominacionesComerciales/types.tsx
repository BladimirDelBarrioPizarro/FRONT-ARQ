interface Ii18nDenominacionesComerciales {
  'DenominacionesComerciales:title': string
  'DenominacionesComerciales:codigofiscal': string
  'DenominacionesComerciales:telefono': string
  'DenominacionesComerciales:email': string
  'DenominacionesComerciales:actividades': string
  'DenominacionesComerciales:comentarios': string
  'DenominacionesComerciales:nif': string
  'DenominacionesComerciales:fax': string
  'DenominacionesComerciales:web': string
}

export interface IdataDenominacionesComercialesRequestForm {
  codigoFiscal: string
  telefono: string
  email: string
  actividades: string
  comentarios: string
  nif: string
  fax: string
  web: string
}

export interface IDenominacionesComerciales {
  i18n: Ii18nDenominacionesComerciales
  data: IdataDenominacionesComercialesRequestForm
}
