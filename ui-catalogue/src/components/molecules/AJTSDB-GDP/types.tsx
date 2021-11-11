interface Ii18nAjtsDBGDP {
  'AjtsDBGDP:title': string
  'AjtsDBGDP:title2': string
  'AjtsDBGDP:title3': string
  'AjtsDBGDP:ajt': string
  'AjtsDBGDP:formajuridica': string
  'AjtsDBGDP:descripcionformajuridica': string
  'AjtsDBGDP:anteriorformajuridica': string
  'AjtsDBGDP:descripcionanteriorformajuridica': string
  'AjtsDBGDP:fechaconstitucion': string
  'AjtsDBGDP:fechaformajurididica': string
  'AjtsDBGDP:fechacambiocapitalnominal': string
  'AjtsDBGDP:fechadatosresumen': string
  'AjtsDBGDP:estadoactual': string
  'AjtsDBGDP:fechaestadoactual': string
  'AjtsDBGDP:capitalnominal': string
  'AjtsDBGDP:capitaldesembolsado': string
  'AjtsDBGDP:ventas': string
  'AjtsDBGDP:resultadoneto': string
  'AjtsDBGDP:fondospropios': string
  'AjtsDBGDP:capitalcirculante': string
  'AjtsDBGDP:activosfijos': string
  'AjtsDBGDP:existencias': string
  'AjtsDBGDP:fuentedatoseconomicos': string
  'AjtsDBGDP:capitalnominalanterior': string
  'AjtsDBGDP:numeroempleados': string
  'AjtsDBGDP:comentarios': string
}

export interface IAjtsDBGDPRequestForm {
  ajt: string
  formajuridica: string
  descripcionformajuridica: string
  anteriorformajuridica: string
  descripcionanteriorformajuridica: string
  fechaconstitucion: string
  fechaformajurididica: string
  fechacambiocapitalnominal: string
  fechadatosresumen: string
  estadoactual: string
  fechaestadoactual: string
  capitalnominal: string
  capitaldesembolsado: string
  ventas: string
  resultadoneto: string
  fondospropios: string
  capitalcirculante: string
  activosfijos: string
  existencias: string
  fuentedatoseconomicos: string
  capitalnominalanterior: string
  numeroempleados: string
  comentarios: string
}

export interface IAjtsDBGDP {
  i18n: Ii18nAjtsDBGDP
  data: IAjtsDBGDPRequestForm
}
