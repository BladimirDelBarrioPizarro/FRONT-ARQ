interface Ii18nDatosHost {
  'DatosHost:title': string
  'DatosHost:detailTbNumeroPeticion': string
  'DatosHost:detailTbCodProducto': string
  'DatosHost:detailTbCodEmpresa': string
  'DatosHost:detailTbTipoCorresponsal': string
  'DatosHost:detailTbNumeroDocumento': string
  'DatosHost:detailTbNumeroInforme': string
  'DatosHost:detailTbOrigen': string
  'DatosHost:detailTbTipoFichero': string
  'DatosHost:detailTbTipoDocumento': string
  'DatosHost:detailTbNumeroMovimiento': string
  'DatosHost:detailTbGravedad': string
  'DatosHost:detailTbNombreFichero': string
}

export interface IDatosHostRequestForm {
  numeroPeticion: string
  nomCorresponsal: string
  codProducto: string
  codEmpresa: string
  tipoCorresponsal: string
  numeroDocumento: string
  numeroInforme: string
  origen: string
  tipoFichero: string
  tipoDocumento: string
  numeroMovimiento: string
  gravedad: string
  nombreFichero: string
}

export interface IDatosHost {
  i18n: Ii18nDatosHost
  data: IDatosHostRequestForm
}
