interface Ii18nBanksFrancia {
  'Banks:title': string
}

export interface IBanksFranciaRequestForm {
  input1: string
  input2: string
  input3: string
  input4: string
  input5: string
  input6: string
  input7: string
}

export interface IBanksFrancia {
  i18n: Ii18nBanksFrancia
  data: IBanksFranciaRequestForm
}
