interface Ii18nDebtsAFP {
  'DebtsAFP:title': string
  'DebtsAFP:titleSub': string
  'DebtsAFP:monto6meses': string
  'DebtsAFP:monto12meses': string
  'DebtsAFP:monto18meses': string
  'DebtsAFP:montototal': string
  'DebtsAFP:presuntaNoDeclarada': string
  'DebtsAFP:presuntaDeclarada': string
  'DebtsAFP:ciertaNoDeclarada': string
  'DebtsAFP:ciertaDeclarada': string
  'DebtsAFP:fraccionada': string
}

export interface IDebtsAFPRequestForm {
  presuntaNoDeclaradaMonto6: string
  presuntaNoDeclaradaMonto12: string
  presuntaNoDeclaradaMonto18: string
  presuntaNoDeclaradaMontoTotal: string

  presuntaDeclaradaMonto6: string
  presuntaDeclaradaMonto12: string
  presuntaDeclaradaMonto18: string
  presuntaDeclaradaMontoTotal: string

  ciertaNoDeclaradaMonto6: string
  ciertaNoDeclaradaMonto12: string
  ciertaNoDeclaradaMonto18: string
  ciertaNoDeclaradaMontoTotal: string

  // TODO: FALTA IMPLEMENTACIÓN
  // DEUDAS AFP
  // https://docs.google.com/spreadsheets/d/1l41gvsE_lMwaGegZULvG3TlSDY1_wBwh/edit#gid=1752162131

  /*  ciertaDeclaradaMonto6: string
    ciertaDeclaradaMonto6: string
    ciertaDeclaradaMonto6: string
    ciertaDeclaradaMonto6: string
 */
}

export interface IDebtsAFP {
  i18n: Ii18nDebtsAFP
  data: IDebtsAFPRequestForm
}
