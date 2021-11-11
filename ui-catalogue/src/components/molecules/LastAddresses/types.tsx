interface Ii18nLastAddresses {
  'LastAddresses:title': string
  'LastAddresses:subtitle': string
  'LastAddresses:fecha': string
  'LastAddresses:direccion': string
  'LastAddresses:telefono': string
  'LastAddresses:fuente': string
}

export interface ILastAddressesRequestForm {
  fecha: string
  direccion: string
  telefono: string
  fuente: string
  fecha2: string
  direccion2: string
  telefono2: string
  fuente2: string
}

export interface ILastAddresses {
  i18n: Ii18nLastAddresses
  data: ILastAddressesRequestForm
}
