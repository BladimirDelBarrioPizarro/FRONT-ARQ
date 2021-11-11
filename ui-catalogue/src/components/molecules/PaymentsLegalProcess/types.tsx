export interface IPaymentsLegalProcessFormRequestForm{
  empresa: string
  history: string
  financial: string
  criminal: string
  judgements: string
  claims: string
  secured: string
  legal: string
  disaster: string
  operational: string
  others: string
  actual: string
  months: string
  norm: string
}

export interface Ii18nPaymentsLegalProcess {
  'PaymentsLegalProcess:title': string
  'PaymentsLegalProcess:titleIndicadores': string
  'PaymentsLegalProcess:titlePaydexIndicadores': string
  'PaymentsLegalProcess:detailTbEmpresa': string
  'PaymentsLegalProcess:detailTbHistory': string
  'PaymentsLegalProcess:detailTbFinancial': string
  'PaymentsLegalProcess:detailTbCriminal': string
  'PaymentsLegalProcess:detailTbJudgements': string
  'PaymentsLegalProcess:detailTbClaims': string
  'PaymentsLegalProcess:detailTbSecured': string
  'PaymentsLegalProcess:detailTbLegal': string
  'PaymentsLegalProcess:detailTbDisaster': string
  'PaymentsLegalProcess:detailTbOperational': string
  'PaymentsLegalProcess:detailTbOthers': string
  'PaymentsLegalProcess:detailTbActual': string
  'PaymentsLegalProcess:detailTb3Months': string
  'PaymentsLegalProcess:detailTbNorm': string

}

export interface IPaymentsLegalProcess {
  i18n: Ii18nPaymentsLegalProcess
  data: IPaymentsLegalProcessFormRequestForm
}
