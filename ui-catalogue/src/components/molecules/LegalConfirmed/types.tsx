interface Ii18nLegalConfirmed {
  'LegalConfirmed:title': string
  'LegalConfirmed:fecha': string
  'LegalConfirmed:periodo': string
  'LegalConfirmed:tipoaccion': string
  'LegalConfirmed:claseaccion': string
  'LegalConfirmed:nprocedimientos': string
  'LegalConfirmed:importe': string
  'LegalConfirmed:procedimientoLegal': string
}

export interface ILegalConfirmedRequestForm {
  fecha: string
  periodo: string
  tipoaccion: string
  claseaccion: string
  nprocedimientos: string
  importe: string
  procedimientoLegal: string
}

export interface ILegalConfirmed {
  i18n: any
  data: ILegalConfirmedRequestForm[]
}
