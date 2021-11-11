interface Ii18nNegativeSunat {
  'NegativeSunat:title': string
  'NegativeSunat:fechacobranzareciente': string
  'NegativeSunat:cantidadtotal': string
  'NegativeSunat:montototal': string
  'NegativeSunat:fechacobranza': string
  'NegativeSunat:fechaproceso': string
  'NegativeSunat:monto': string
  'NegativeSunat:tipo': string
  'NegativeSunat:dependencia': string
}

export interface INegativeSunatRequestForm {
  fechacobranzareciente: string
  cantidadtotal: string
  montototal: string
  fechacobranza: string
  fechaproceso: string
  monto: string
  tipo: string
  dependencia: string
}

export interface INegativeSunat {
  i18n: Ii18nNegativeSunat
  data: INegativeSunatRequestForm
}
