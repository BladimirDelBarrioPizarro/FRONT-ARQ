interface Ii18nFacilitiesDescription {
  'FacilitiesDescription:title': string
  'FacilitiesDescription:titularidad': string
}

export interface IFacilitiesDescriptionRequestForm {
  titularidad: string
}

export interface IFacilitiesDescription {
  i18n: Ii18nFacilitiesDescription
  data: IFacilitiesDescriptionRequestForm
}
