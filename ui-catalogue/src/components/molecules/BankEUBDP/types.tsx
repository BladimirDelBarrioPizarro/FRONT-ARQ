interface Ii18nBankEUDBP {
  'BankEUDBP:title': string
  'BankEUDBP:nombre': string
  'BankEUDBP:domicilio': string
  'BankEUDBP:localidad': string
  'BankEUDBP:provincia': string
  'BankEUDBP:codigopostal': string
  'BankEUDBP:pais': string
  'BankEUDBP:fechaapertura': string
  'BankEUDBP:credito': string
  'BankEUDBP:saldo': string
  'BankEUDBP:fechasaldo': string
  'BankEUDBP:limitedescubrimiento': string
  'BankEUDBP:creditogarantizado': string
}

export interface IBankEUDBPRequestForm {
  nombre: string
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  fechaapertura: string
  credito: string
  saldo: string
  fechasaldo: string
  limitedescubrimiento: string
  creditogarantizado: string
}

export interface IBankEUDBP {
  i18n: Ii18nBankEUDBP
  data: IBankEUDBPRequestForm
}
