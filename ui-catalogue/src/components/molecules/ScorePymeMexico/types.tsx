interface Ii18nScorePymeMexico {
  'ScorePymeMexico:title': string
  'ScorePymeMexico:valor': string
  'ScorePymeMexico:error': string
  'ScorePymeMexico:motivos': string
}

export interface IScorePymeMexicoRequestForm {
  valorscore: string
  error: string
  motivos: string
}

export interface IScorePymeMexico {
  i18n: Ii18nScorePymeMexico
  data: IScorePymeMexicoRequestForm
}
