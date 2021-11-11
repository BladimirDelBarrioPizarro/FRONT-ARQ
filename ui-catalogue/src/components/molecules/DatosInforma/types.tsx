interface Ii18nDatosInforma {
  'DatosInforma:title': string
  'DatosInforma:numeropeticion': string
  'DatosInforma:codigoproducto': string
  'DatosInforma:codnomempresa': string
  'DatosInforma:tipocorresponsal': string
  'DatosInforma:numerodocumento': string
  'DatosInforma:tipodocumento': string
  'DatosInforma:numeroinforme': string
  'DatosInforma:numeromovimiento': string
  'DatosInforma:origen': string
  'DatosInforma:gravedadajt': string
  'DatosInforma:tipofichero': string
  'DatosInforma:nombrefichero': string
}

export interface IDatosInformaRequestForm {
  numeropeticion: string
  codigoproducto: string
  codnomempresa: string
  tipocorresponsal: string
  numerodocumento: string
  tipodocumento: string
  numeroinforme: string
  numeromovimiento: string
  origen: string
  gravedadajt: string
  tipofichero: string
  nombrefichero: string
}

export interface IDatosInforma {
  i18n: Ii18nDatosInforma
  data: IDatosInformaRequestForm
}
