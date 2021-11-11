interface Ii18nAJTEUDBP{
  'AJTEUDBP:title': string
  'AJTEUDBP:ajtmayorgravedad': string
}

export interface IAJTEUDBPRequestForm {
  ajtmayorgravedad: string
  ajtmayorgravedadbis: string
}

export interface IAJTEUDBP {
  i18n: Ii18nAJTEUDBP
  data: IAJTEUDBPRequestForm
}
