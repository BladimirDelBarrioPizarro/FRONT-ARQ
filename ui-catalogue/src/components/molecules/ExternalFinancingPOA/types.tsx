interface Ii18nExternalFinancingPOA {
  'ExternalFinancingPOA:title': string
  'ExternalFinancingPOA:fechamodificacion': string
  'ExternalFinancingPOA:fechacancelacion': string
  'ExternalFinancingPOA:tipofinanciacion': string
  'ExternalFinancingPOA:proveedor': string
  'ExternalFinancingPOA:importe': string
  'ExternalFinancingPOA:bienesgarantia': string
  'ExternalFinancingPOA:comentarios': string
}

export interface IExternalFinancingPOARequestForm {
  fechamodificacion: string
  fechacancelacion: string
  tipofinanciacion: string
  proveedor: string
  importe: string
  bienesgarantia: string
  comentarios: string
}

export interface IExternalFinancingPOA {
  i18n: Ii18nExternalFinancingPOA
  data: IExternalFinancingPOARequestForm[]
}
