interface Ii18nScore {
  'Score:title': string
  'Score:label': string
}

export interface IScoreRequestForm {
  score: string
}

export interface IScore {
  i18n: Ii18nScore
  data: IScoreRequestForm
}
