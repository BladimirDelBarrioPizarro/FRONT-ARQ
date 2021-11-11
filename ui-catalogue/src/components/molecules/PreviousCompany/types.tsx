interface Ii18nPreviousCompany {
  'PreviousCompany:title': string
  'PreviousCompany:nombre': string
  'PreviousCompany:comentarios': string
  'PreviousCompany:bolsa': string
}

export interface IPreviousCompanyRequestForm {
  nombre: string
  comentarios: string
  bolsa: string
}

export interface IPreviousCompany {
  i18n: Ii18nPreviousCompany
  data: IPreviousCompanyRequestForm
}
