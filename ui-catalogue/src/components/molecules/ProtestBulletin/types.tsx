interface Ii18nProtestBulletin {
  'ProtestBulletin:title': string
  'ProtestBulletin:titleSub1': string
  'ProtestBulletin:ultimoperiodo': string
  'ProtestBulletin:cantidadensoles': string
  'ProtestBulletin:montoensoles': string
  'ProtestBulletin:cantidadendolares': string
  'ProtestBulletin:montoendolares': string
  'ProtestBulletin:fechavencimiento': string
  'ProtestBulletin:fechaaclaracion': string
  'ProtestBulletin:montodivisa': string
  'ProtestBulletin:tipodocumento': string
  'ProtestBulletin:notaría': string
  'ProtestBulletin:emisordocumento': string
  'ProtestBulletin:titleSub2': string
}

export interface IProtestBulletinRequestForm {
  ultimoperiodoAclarado: string
  cantidadensolesAclarado: string
  montoensolesAclarado: string
  cantidadendolaresAclarado: string
  montoendolaresAclarado: string
  fechavencimientoAclarado: string
  fechaaclaracionAclarado: string
  montodivisaAclarado: string
  tipodocumentoAclarado: string
  notaríaAclarado: string
  emisordocumentoAclarado: string

  ultimoperiodoNoAclarado: string
  cantidadensolesNoAclarado: string
  montoensolesNoAclarado: string
  cantidadendolaresNoAclarado: string
  montoendolaresNoAclarado: string
  fechavencimientoNoAclarado: string
  fechaaclaracionNoAclarado: string
  montodivisaNoAclarado: string
  tipodocumentoNoAclarado: string
  notaríaNoAclarado: string
  emisordocumentoNoAclarado: string

}

export interface IProtestBulletin {
  i18n: Ii18nProtestBulletin
  data: IProtestBulletinRequestForm
}
