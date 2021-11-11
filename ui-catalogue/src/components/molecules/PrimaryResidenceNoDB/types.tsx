interface Ii18nPrimaryResidenceNoDB {
  'PrimaryResidenceNoDB:title': string
  'PrimaryResidenceNoDB:domicilio': string
  'PrimaryResidenceNoDB:localidad': string
  'PrimaryResidenceNoDB:provincia': string
  'PrimaryResidenceNoDB:codigopostal': string
  'PrimaryResidenceNoDB:pais': string
  'PrimaryResidenceNoDB:comentarios': string
  'PrimaryResidenceNoDB:bolsa': string
  'PrimaryResidenceNoDB:numeropeticion': string
  'PrimaryResidenceNoDB:codnomcorresponsal': string
  'PrimaryResidenceNoDB:codproducto': string
  'PrimaryResidenceNoDB:codnomempresa': string
  'PrimaryResidenceNoDB:tipocorresponsal': string
  'PrimaryResidenceNoDB:numerodocumento': string
  'PrimaryResidenceNoDB:tipodocumento': string
  'PrimaryResidenceNoDB:numeroinforme': string
  'PrimaryResidenceNoDB:numeromovimiento': string
  'PrimaryResidenceNoDB:origen': string
  'PrimaryResidenceNoDB:gravedadajt': string
  'PrimaryResidenceNoDB:tipofichero': string
  'PrimaryResidenceNoDB:nombrefichero': string
}

export interface IPrimaryResidenceNoDBRequestForm {
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  comentarios: string
  bolsa: string
  numeropeticion: string
  codnomcorresponsal: string
  codproducto: string
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

export interface IPrimaryResidenceNoDB {
  i18n: Ii18nPrimaryResidenceNoDB
  data: IPrimaryResidenceNoDBRequestForm
}
