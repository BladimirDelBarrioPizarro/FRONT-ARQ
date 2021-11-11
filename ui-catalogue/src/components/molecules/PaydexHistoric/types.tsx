interface Ii18nPaydexHistoric {
  'PaydexHistoric:title': string
  'PaydexHistoric:mes': string
  'PaydexHistoric:paydex': string
}

export interface IPaydexHistoricRequestForm {
  mes1: string
  mes2: string
  mes3: string
  mes4: string
  mes5: string
  mes6: string
  mes7: string
  mes8: string
  paidex1: string
  paidex2: string
  paidex3: string
  paidex4: string
  paidex5: string
  paidex6: string
  paidex7: string
  paidex8: string
}

export interface IPaydexHistoric {
  i18n: Ii18nPaydexHistoric
  data: IPaydexHistoricRequestForm
}
