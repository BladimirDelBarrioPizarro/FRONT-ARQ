interface Ii18nRejectChecksLegal {
  'RejectChecksLegal:title': string
  'RejectChecksLegal:cheque': string
  'RejectChecksLegal:fechaRechazo': string
  'RejectChecksLegal:monto': string
  'RejectChecksLegal:causal': string
  'RejectChecksLegal:fechapago': string
  'RejectChecksLegal:revision': string
  'RejectChecksLegal:pagomulta': string
}

export interface IRejectChecksLegalRequestForm {
  cheque1: string
  cheque2: string
  cheque3: string
  cheque4: string
  cheque5: string
  fecharech1: string
  fecharech2: string
  fecharech3: string
  fecharech4: string
  fecharech5: string
  monto1: string
  monto2: string
  monto3: string
  monto4: string
  monto5: string
  causal1: string
  causal2: string
  causal3: string
  causal4: string
  causal5: string
  fechapago1: string
  fechapago2: string
  fechapago3: string
  fechapago4: string
  fechapago5: string
  revision1: string
  revision2: string
  revision3: string
  revision4: string
  revision5: string
  pagomulta1: string
  pagomulta2: string
  pagomulta3: string
  pagomulta4: string
  pagomulta5: string

}

export interface IRejectChecksLegal {
  i18n: Ii18nRejectChecksLegal
  data: IRejectChecksLegalRequestForm
}
