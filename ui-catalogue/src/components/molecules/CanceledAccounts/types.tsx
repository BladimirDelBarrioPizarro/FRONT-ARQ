interface Ii18nICanceledAccounts {
  'CanceledAccounts:fechafin': string
  'CanceledAccounts:fechainicio': string
  'CanceledAccounts:numerototal': string
}

export interface ICanceledAccountsRequestForm {
  fechafin: string
  fechainicio: string
  numerototal: string
}

export interface ICanceledAccounts {
  i18n: Ii18nICanceledAccounts
  data: ICanceledAccountsRequestForm
}
