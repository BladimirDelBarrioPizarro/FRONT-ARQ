interface Ii18nLegalAgents {
  'LegalAgents:title': string
  'LegalAgents:representateDe': string
  'LegalAgents:representatePor': string
  'LegalAgents:name': string
  'LegalAgents:name2': string
  'LegalAgents:tipoDocumento': string
  'LegalAgents:tipoDocumento2': string
  'LegalAgents:nDocumento': string
  'LegalAgents:nDocumento2': string
  'LegalAgents:cargo': string
  'LegalAgents:cargo2': string
  'LegalAgents:fecha': string
  'LegalAgents:fecha2': string
}

export interface ILegalAgentsRequestForm {
  name: string
  name2: string
  tipoDocumento: string
  tipoDocumento2: string
  nDocumento: string
  nDocumento2: string
  cargo: string
  cargo2: string
  fecha: string
  fecha2: string
}

export interface ILegalAgents {
  i18n: Ii18nLegalAgents
  data: ILegalAgentsRequestForm
}
