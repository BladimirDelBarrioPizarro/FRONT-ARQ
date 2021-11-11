interface Ii18nAjtsPOA {
  'AJTSPOA:title': string
  'AJTSPOA:fechamodificacion': string
  'AJTSPOA:codigocambio': string
  'AJTSPOA:nombre': string
  'AJTSPOA:direccion': string
  'AJTSPOA:codigofiscal': string
  'AJTSPOA:formajuridica': string
  'AJTSPOA:comentarios': string
}

export interface IAjtsPOARequestForm {
  fechamodificacion: string
  codigocambio: string
  nombre: string
  direccion: string
  codigofiscal: string
  formajuridica: string
  comentarios: string
}

export interface IAjtsPOA {
  i18n: Ii18nAjtsPOA
  data: IAjtsPOARequestForm
}
