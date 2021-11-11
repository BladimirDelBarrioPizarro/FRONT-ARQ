interface Ii18nScorePeru {
  'ScorePeru:title': string
  'ScorePeru:puntaje': string
  'ScorePeru:nivelRiesgo': string
  'ScorePeru:conclusion': string
  'ScorePeru:title2': string
  'ScorePeru:scoreEmpresasNoPrico': string
  'ScorePeru:scoreAutonomos': string
  'ScorePeru:tipoEmpresa': string
}

export interface IScorePeruRequestForm {
  score: string
  puntaje: string
  nivelRiesgo: string
  conclusion: string
  scoreEmpresasNoPrico: string
  scoreAutonomos: string
  tipoEmpresa: string
}

export interface IScorePeru {
  i18n: Ii18nScorePeru
  data: IScorePeruRequestForm
}
