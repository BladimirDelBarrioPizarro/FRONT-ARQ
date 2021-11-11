interface Ii18nSubsidiaryAffiliates {
  'SubsidiaryAffiliates:title': string
  'SubsidiaryAffiliates:numdum': string
  'SubsidiaryAffiliates:participada': string
  'SubsidiaryAffiliates:participacion': string
  'SubsidiaryAffiliates:importe': string
}

export interface ISubsidiaryAffiliatesRequestForm {
  input1: string
  input2: string
  numDum: string
  participada: string
  participacion: string
  importe: string
}

export interface ISubsidiaryAffiliates {
  i18n: Ii18nSubsidiaryAffiliates
  data: ISubsidiaryAffiliatesRequestForm
}
