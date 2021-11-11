interface Ii18nInformaDataBadexcug {
  'InformaDataBadexcug:title': string
  'InformaDataBadexcug:numeroPeticion': string
  'InformaDataBadexcug:codigoProducto': string
  'InformaDataBadexcug:codNomEmpresa': string
  'InformaDataBadexcug:tipoCorresponsal': string
  'InformaDataBadexcug:numeroDocumento': string
  'InformaDataBadexcug:tipoDocumento': string
  'InformaDataBadexcug:numeroInforme': string
  'InformaDataBadexcug:numeroMovimiento': string
  'InformaDataBadexcug:origen': string
  'InformaDataBadexcug:gravedadAjt': string
  'InformaDataBadexcug:tipoFichero': string
  'InformaDataBadexcug:nombreFichero': string
}
export interface IdataInformaDataBadexcugFormRequest {
  numeroPeticion: string
  codigoProducto: string
  codNomEmpresa: string
  tipoCorresponsal: string
  numeroDocumento: string
  tipoDocumento: string
  numeroInforme: string
  numeroMovimiento: string
  origen: string
  gravedadAjt: string
  tipoFichero: string
  nombreFichero: string
}

export interface IInformaDataBadexcug {
  i18n: Ii18nInformaDataBadexcug
  data: IdataInformaDataBadexcugFormRequest
}
