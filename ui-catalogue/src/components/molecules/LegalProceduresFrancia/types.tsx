interface Ii18nLegalProceduresFrancia {
  'LegalProceduresFrancia:title': string
  'LegalProceduresFrancia:titleSub': string
  'LegalProceduresFrancia:entidad': string
  'LegalProceduresFrancia:fecha': string
  'LegalProceduresFrancia:tipoaccion': string
  'LegalProceduresFrancia:claseaccion': string
  'LegalProceduresFrancia:fechapublicacion': string
  'LegalProceduresFrancia:distrito': string
  'LegalProceduresFrancia:duracion': string
  'LegalProceduresFrancia:fechafinalizacion': string
  'LegalProceduresFrancia:fechaexpiracion': string
  'LegalProceduresFrancia:importe': string
  'LegalProceduresFrancia:costeslegales': string
  'LegalProceduresFrancia:moneda': string
  'LegalProceduresFrancia:situacionactual': string
  'LegalProceduresFrancia:resolucion': string
  'LegalProceduresFrancia:demandante': string
  'LegalProceduresFrancia:comentarios': string
  'LegalProceduresFrancia:fuenteinformacion': string
}

export interface ILegalProceduresFranciaRequestForm {
  entidad: string
  fecha: string
  tipoaccion: string
  claseaccion: string
  fechapublicacion: string
  distrito: string
  duracion: string
  fechafinalizacion: string
  fechaexpiracion: string
  importe: string
  costeslegales: string
  moneda: string
  situacion: string
  resolucion: string
  demandante1: string
  demandante2: string
  comentarios: string
  tipoaccion2: string
  claseaccion2: string
  fuenteinformacion: string
  input1: string
  input2: string
}

export interface ILegalProceduresFrancia {
  i18n: Ii18nLegalProceduresFrancia
  data: ILegalProceduresFranciaRequestForm
}
