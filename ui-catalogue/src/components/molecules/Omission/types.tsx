interface Ii18nOmission {
  'Omission:title': string
  'Omission:cantidad': string
  'Omission:fechaomision': string
  'Omission:fechaproceso': string
  'Omission:concepto': string
}

export interface IOmissionRequestForm {
  cantidad: string
  fechaomision: string
  fechaproceso: string
  concepto: string
}

export interface IOmission {
  i18n: Ii18nOmission
  data: IOmissionRequestForm
}
