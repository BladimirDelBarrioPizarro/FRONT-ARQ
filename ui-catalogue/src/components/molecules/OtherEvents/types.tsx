interface Ii18nOtherEvents {
  'OtherEvents:title': string
  'OtherEvents:evento': string
  'OtherEvents:fecha': string
  'OtherEvents:efecto': string
  'OtherEvents:importe': string
  'OtherEvents:localizacion': string
}

export interface IOtherEventsRequestForm {
  evento: string
  fecha: string
  efecto: string
  importe: string
  localizacion: string
}

export interface IOtherEvents {
  i18n: Ii18nOtherEvents
  data: IOtherEventsRequestForm[]
}
