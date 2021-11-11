interface Ii18nBanks {
  'Banks:title': string
}

export interface IBanksForm {
  input1: string
  input2: string
}

export interface IBanks {
  i18n: Ii18nBanks
  data: IBanksForm
}
