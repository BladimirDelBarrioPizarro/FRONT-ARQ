interface Ii18nComments{
  'Comments:title': string
  'Comments:titleSub': string
  'Comments:comentarios': string
  'Comments:titularidad': string
  'Comments:tipodelocales': string
  'Comments:superficie': string
}

export interface ICommentsRequestForm {
  comentarios: string
  titularidad: string
  tipodelocales: string
  superficie1: string
  superficie2: string
}

export interface IComments {
  i18n: Ii18nComments
  data: ICommentsRequestForm
}
