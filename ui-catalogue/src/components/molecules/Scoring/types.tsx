interface Ii18nScoring {
  'Scoring:title': string
  'Scoring:estadopeticion': string
  'Scoring:ventas': string
  'Scoring:resultado': string
  'Scoring:fondospropios': string
  'Scoring:evolucionventas': string
  'Scoring:evoluciontesoreria': string
  'Scoring:fechaconstitucion': string
  'Scoring:numimpagos18': string
  'Scoring:capitalutil': string
  'Scoring:puntosligados': string
  'Scoring:codigovidaempresa': string
  'Scoring:anoconstitucionestimado': string
  'Scoring:ventasestimadas': string
  'Scoring:fechabalance': string
  'Scoring:importeefectospagados': string
}

export interface IScoringRequestForm {
  estadopeticion: string
  ventas: string
  resultado: string
  fondospropios: string
  evolucionventas: string
  evoluciontesoreria: string
  fechaconstitucion: string
  numimpagos18: string
  capitalutil: string
  puntosligados: string
  codigovidaempresa: string
  anoconstitucionestimado: string
  ventasestimadas: string
  fechabalance: string
  importeefectospagados: string
}

export interface IScoring {
  i18n: Ii18nScoring
  data: IScoringRequestForm
}
