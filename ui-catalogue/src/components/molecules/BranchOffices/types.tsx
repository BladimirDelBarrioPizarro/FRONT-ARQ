interface Ii18nBranchOffices {
  'BranchOffice:title': string
  'BranchOffice:numdum': string
  'BranchOffice:participada': string
  'BranchOffice:participacion': string
  'BranchOffice:importe': string
}

export interface IBranchOfficesRequestForm {
  input1: string
  input2: string
  numDum: string
  participada: string
  participacion: string
  importe: string
}

export interface IBranchOffices {
  i18n: Ii18nBranchOffices
  data: IBranchOfficesRequestForm
}
