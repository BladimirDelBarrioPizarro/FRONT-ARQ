interface Ii18nIncidentsAsnef {
  'IncidentsAsnef:title': string
  'IncidentsAsnef:reclamacion': string
  'IncidentsAsnef:importereclamaciones': string
  'IncidentsAsnef:incidenciasjudiciales': string
  'IncidentsAsnef:importeincidencias': string
}

export interface IIncidentsAsnefRequestForm {
  reclamacion: string
  importereclamaciones: string
  incidenciasjudiciales: string
  importeincidencias: string
}

export interface IIncidentsAsnef {
  i18n: Ii18nIncidentsAsnef
  data: IIncidentsAsnefRequestForm
}
