interface Ii18nBasicData {
  'BasicData:title': string
  'BasicData:organizacion': string
  'BasicData:fecha': string
  'BasicData:constitucion': string
  'BasicData:mes': string
  'BasicData:tipoempresa': string
  'BasicData:tipofirma': string
  'BasicData:status': string
  'BasicData:fechastatus': string
}

export interface IdataBasicDataFormRequest {
  organizacion: string
  fecha: string
  constitucion: string
  mes: string
  tipoempresa: string
  tipofirma: string
  status: string
  fechastatus: string
  capitalNominal: string
  capNominalAnterior: string
  capitalDesembolsado: string
  fechaCambioCapital: string
  fechaUltimoBalance: string
  resultados: string
  moneda: string
  cifras: string
  facturación: string
  empleados: string
  comentarios: string
}

export interface IBasicData {
  i18n: Ii18nBasicData
  data: IdataBasicDataFormRequest
}
