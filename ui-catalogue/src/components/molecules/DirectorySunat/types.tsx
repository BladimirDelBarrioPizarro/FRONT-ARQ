interface Ii18nDirectorySunat {
  'DirectorySunat:title': string
  'DirectorySunat:codigoFiscal': string
  'DirectorySunat:denominacion': string
  'DirectorySunat:nombreComercial': string
  'DirectorySunat:direccion': string
  'DirectorySunat:fechaConstitución': string
  'DirectorySunat:tipoDeContribuyente': string
  'DirectorySunat:estado': string
  'DirectorySunat:condicionContribuyente': string
  'DirectorySunat:dependencia': string
  'DirectorySunat:actividad': string
  'DirectorySunat:actividadComercioExterior': string
  'DirectorySunat:padron': string
}

export interface IDirectorySunatRequestForm {
  codigoFiscal: string
  denominacion: string
  nombreComercial: string
  direccion: string
  fechaConstitución: string
  tipoDeContribuyente: string
  estado: string
  condicionContribuyente: string
  dependencia: string
  actividad: string
  actividadComercioExterior: string
  padron: string
}

export interface IDirectorySunat {
  i18n: Ii18nDirectorySunat
  data: IDirectorySunatRequestForm
}
