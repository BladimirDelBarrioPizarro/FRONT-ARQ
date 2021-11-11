
export interface I18nDetailRequest {
  'DetailRequest:detailTbTitle': string
  'DetailRequest:detailTbSubject': string
  'DetailRequest:detailTbCorresponsal': string
  'DetailRequest:detailTbComercial': string
  'DetailRequest:detailTbFiscal': string
  'DetailRequest:detailTbSector': string
  'DetailRequest:detailTbProduct': string
  'DetailRequest:detailTbMotive': string
  'DetailRequest:detailTbNotes': string
  'DetailRequest:detailTbSituation': string
  'DetailRequest:detailTbAddress': string
  'DetailRequest:detailTbPhone': string
  'DetailRequest:detailTbFax': string
  'DetailRequest:detailTbAnula': string
  'DetailRequest:detailTbCancel': string
  'DetailRequest:detailTbSended': string
  'DetailRequest:detailTbArrivePrev': string
  'DetailRequest:detailTbArriveReal': string
  'DetailRequest:detailTbReclama1': string
  'DetailRequest:detailTbReclama2': string
  'DetailRequest:detailTbUrgency': string
  'DetailRequest:detailTbObservations': string
  'DetailRequest:detailBtReturn': string
}

export interface IDetailRequest {
  nombreSujeto: string
  nombreCorresponsal: string
  nombreComercial: string
  codFiscal: string
  codSector: string
  codProducto: string
  motivoPeticion: string
  notasEnvio: string
  domicilio: string
  numeroTelefono: string
  numeroFax: string
  fechaNotaAnulacion: string
  fechaEnvioPeticion: string
  fechaRecepcionPrevista: string
  urgenciaPeticion: string
  observaciones: string
  situacionPeticion: string
  fechaCancelacion: string
  fechaRecepcionReal: string
  fechaReclamacion1: string
  fechaReclamacion2: string
}

export interface IDetailRequestList {
  i18n: I18nDetailRequest
  data: IDetailRequest
}
