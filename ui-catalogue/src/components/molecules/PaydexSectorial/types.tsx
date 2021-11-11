interface Ii18nPaydexSectorial {
  'PaydexSectorial:title': string
  'PaydexSectorial:cuatrilsup': string
  'PaydexSectorial:mediana': string
  'PaydexSectorial:cuatrilinf': string
}

export interface IPaydexSectorialRequestForm {
  cuatrilsup: string
  mediana: string
  cuatrilinf: string
}

export interface IPaydexSectorial {
  i18n: Ii18nPaydexSectorial
  data: IPaydexSectorialRequestForm
}
