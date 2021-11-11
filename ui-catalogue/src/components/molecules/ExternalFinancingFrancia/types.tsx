interface Ii18nExternalFinancingFrancia {
  'ExternalFinancingFrancia:title': string
  'ExternalFinancingFrancia:fechaobtencionfinancacion': string
  'ExternalFinancingFrancia:fechacancelacion': string
  'ExternalFinancingFrancia:tipofinanciacion': string
  'ExternalFinancingFrancia:proveedorFondos': string
  'ExternalFinancingFrancia:importe': string
  'ExternalFinancingFrancia:bienesusados': string
  'ExternalFinancingFrancia:comentarios': string
}

export interface IExternalFinancingFranciaRequestForm {
  fechaobtencionfinancacion: string
  fechacancelacion: string
  tipofinanciacion1: string
  tipofinanciacion2: string
  proveedorFondos: string
  importe1: string
  importe2: string
  bienesusados: string
  comentarios1: string
  comentarios2: string
}

export interface IExternalFinancingFrancia {
  i18n: Ii18nExternalFinancingFrancia
  data: IExternalFinancingFranciaRequestForm
}
