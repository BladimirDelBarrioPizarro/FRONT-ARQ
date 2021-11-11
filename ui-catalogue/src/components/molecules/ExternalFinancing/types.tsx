interface Ii18nExternalFinancing {
  'ExternalFinancing:title': string
  'ExternalFinancing:titleAJTS': string
  'ExternalFinancing:fechamodificacion': string
  'ExternalFinancing:codigocambio': string
  'ExternalFinancing:comentarios': string
}

export interface IExternalFinancingRequestForm {
  fechamodificacion1: string
  fechamodificacion2: string
  codigocambio: string
  comentarios: string
}

export interface IExternalFinancing {
  i18n: Ii18nExternalFinancing
  data: IExternalFinancingRequestForm
}
