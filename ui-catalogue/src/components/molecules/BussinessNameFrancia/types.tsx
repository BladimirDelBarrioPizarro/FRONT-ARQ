interface Ii18nBussinessNameFrancia {
  'BussinessNameFrancia:title': string
  'BussinessNameFrancia:title2': string
  'BussinessNameFrancia:denominacion': string
  'BussinessNameFrancia:fechainicio': string
}

export interface IBussinessNameFranciaRequestForm {
  denominacion: string
  fechainicio: string
}

export interface IBussinessNameFrancia {
  i18n: Ii18nBussinessNameFrancia
  data: IBussinessNameFranciaRequestForm
}
