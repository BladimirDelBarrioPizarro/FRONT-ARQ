interface Ii18nIdentificacionEspanaInforma {
  'IdenEspanaInforma:title': string
  'IdenEspanaInforma:denominacion': string
  'IdenEspanaInforma:domicilio': string
  'IdenEspanaInforma:localidad': string
  'IdenEspanaInforma:provincia': string
  'IdenEspanaInforma:codpostal': string
  'IdenEspanaInforma:pais': string
  'IdenEspanaInforma:tipoidenfiscal': string
  'IdenEspanaInforma:codidenfiscal': string
  'IdenEspanaInforma:fechaultbalance': string
  'IdenEspanaInforma:comentariosbalances': string
  'IdenEspanaInforma:incidenciasDep': string
  'IdenEspanaInforma:comentariogeneral': string
  'IdenEspanaInforma:comentarios': string
}

export interface IIdentificacionEspanaInformaRequestForm {
  denominacion: string
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  tipoidenfiscal: string
  codidenfiscal: string
  fechultbalance: string
  comentariosbalances: string
  incidenciasdep: string
  comentariogen: string
  comentarios: string
}

export interface IIdentificacionEspanaInforma {
  i18n: Ii18nIdentificacionEspanaInforma
  data: IIdentificacionEspanaInformaRequestForm
}
