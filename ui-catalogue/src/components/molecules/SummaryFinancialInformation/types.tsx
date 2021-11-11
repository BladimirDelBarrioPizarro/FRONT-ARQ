interface Ii18nSummaryFinancialInformation {
  'SummaryFinancialInformation:title': string
  'SummaryFinancialInformation:nombre': string
  'SummaryFinancialInformation:valor': string
  'SummaryFinancialInformation:ratioapalancamiento': string
  'SummaryFinancialInformation:nivelapalancamiento': string
  'SummaryFinancialInformation:ratioacidez': string
  'SummaryFinancialInformation:pctapalancamiento': string
  'SummaryFinancialInformation:desmontante': string
  'SummaryFinancialInformation:montante': string
  'SummaryFinancialInformation:tipofecpropiedades': string
  'SummaryFinancialInformation:fechapropiedades': string
}

export interface ISummaryFinancialInformationRequestForm {
  nombre: string
  valor: string
  ratioapalancamiento: string
  nivelapalancamiento: string
  ratioacidez: string
  pctapalancamiento: string
  desmontante: string
  montante: string
  tipofecpropiedades: string
  fechapropiedades: string
}

export interface ISummaryFinancialInformation {
  i18n: Ii18nSummaryFinancialInformation
  data: ISummaryFinancialInformationRequestForm
}
