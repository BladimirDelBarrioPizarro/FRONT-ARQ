interface Ii18nCnae {
  'Cnaes:title': string
  'Cnaes:tipo': string
  'Cnaes:codigo': string
}

export interface ICnaeRequestForm {
  tipo: string
  actividad: string
  input3: string
  input4: string
  input5: string
  input6: string
  input7: string
  input8: string
}

export interface ICnae {
  i18n: Ii18nCnae
  data: ICnaeRequestForm
}
