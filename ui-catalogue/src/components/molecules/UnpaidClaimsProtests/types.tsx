interface Ii18nUnpaidClaimsProtests {
  'UnpaidClaimsProtests:title': string
  'UnpaidClaimsProtests:codigoincidencia': string
  'UnpaidClaimsProtests:tipoincidencia': string
  'UnpaidClaimsProtests:fechaincidencia': string
  'UnpaidClaimsProtests:numeroincidencias': string
  'UnpaidClaimsProtests:importeincidencias': string
}

export interface IUnpaidClaimsProtestsRequestForm {
  codigoincidencia: string
  tipoincidencia: string
  fechaincidencia: string
  numeroincidencias: string
  importeincidencias: string
}

export interface IUnpaidClaimsProtests {
  i18n: Ii18nUnpaidClaimsProtests
  data: IUnpaidClaimsProtestsRequestForm
}
