interface Ii18nDirectoryNaturalPersons {
  'DirectoryNaturalPersons:title': string
  'DirectoryNaturalPersons:codigoFiscal': string
  'DirectoryNaturalPersons:tipoDocumento': string
  'DirectoryNaturalPersons:denominacion': string
  'DirectoryNaturalPersons:fechaDeNacimiento': string
  'DirectoryNaturalPersons:estadoCivil': string
  'DirectoryNaturalPersons:nacionalidad': string
  'DirectoryNaturalPersons:gradoInstruccion': string
  'DirectoryNaturalPersons:telefono': string
  'DirectoryNaturalPersons:ocupacion': string
}

export interface IDirectoryNaturalPersonsRequestForm {
  codigoFiscal: string
  tipoDocumento: string
  denominacion: string
  fechaDeNacimiento: string
  estadoCivil: string
  nacionalidad: string
  gradoInstruccion: string
  telefono: string
  ocupacion: string
}

export interface IDirectoryNaturalPersons {
  i18n: Ii18nDirectoryNaturalPersons
  data: IDirectoryNaturalPersonsRequestForm
}
