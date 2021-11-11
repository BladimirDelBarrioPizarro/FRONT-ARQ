import { IRatingFormRequestForm } from '../../molecules/RatingForm/types'

interface Ii18nRatings {
  'Ratings:title': string
}

export interface IRatings {
  i18n: any
  data: IRatingFormRequestForm[]
}
