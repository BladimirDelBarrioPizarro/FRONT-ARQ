interface Ii18nManagers {
  'Managers:title': string
  'Managers:nombre': string
  'Managers:numeroidentificacion': string
  'Managers:cargo': string
  'Managers:domicilio': string
  'Managers:localidad': string
  'Managers:provincia': string
  'Managers:codigopostal': string
  'Managers:pais': string
  'Managers:porcentajeparticipacion': string
}

export interface IManagersRequestForm {
  nombre: string
  numeroidentificacion: string
  cargo: string
  domicilio: string
  localidad: string
  provincia: string
  codigopostal: string
  pais: string
  porcentajeparticipacion: string

}

export interface IManagers {
  i18n: Ii18nManagers
  data: IManagersRequestForm
}
