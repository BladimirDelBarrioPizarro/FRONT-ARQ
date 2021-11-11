interface Ii18nPreviousCompanyFrancia {
  'PreviousCompanyFrancia:title': string
  'PreviousCompanyFrancia:denominacion': string
  'PreviousCompanyFrancia:fechainicio': string
  'PreviousCompanyFrancia:fechacambiodenominacion': string
  'PreviousCompanyFrancia:endindicator': string
}

export interface IPreviousCompanyFranciaRequestForm {
  denominacion: string
  fechainicio: string
  fechacambiodenominacion: string
  endindicator: string
}

export interface IPreviousCompanyFrancia {
  i18n: Ii18nPreviousCompanyFrancia
  data: IPreviousCompanyFranciaRequestForm
}
