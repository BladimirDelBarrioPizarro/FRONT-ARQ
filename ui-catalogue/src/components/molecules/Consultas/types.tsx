interface Ii18nConsultas {
  'Consultas:title': string
  'Consultas:temporales': string
  'Consultas:permanentes': string
  'Consultas:total': string
  'Consultas:totalconsultas': string
}

export interface IConsultasRequestForm {
  temporales: string
  permanentes: string
  total: string
}

export interface IConsultas {
  i18n: Ii18nConsultas
  data: IConsultasRequestForm
}
