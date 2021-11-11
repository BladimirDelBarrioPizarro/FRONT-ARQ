interface Ii18nGuarators {
  'Guarantors:title': string
  'Guarantors:tipodocumento': string
  'Guarantors:ndocumento': string
  'Guarantors:nombreavalado': string
  'Guarantors:entidad': string
  'Guarantors:calificacion': string
  'Guarantors:saldo': string
}

export interface IGuaratorsRequestForm {
  tipodocumento: string
  ndocumento: string
  nombreavalado: string
  entidad: string
  calificacion: string
  saldo: string
}

export interface IGuarators {
  i18n: Ii18nGuarators
  data: IGuaratorsRequestForm
}
