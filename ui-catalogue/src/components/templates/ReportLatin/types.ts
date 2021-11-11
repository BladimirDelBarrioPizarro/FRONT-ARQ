interface I18n {
  'form:latin:titulo': string
  'form:latin:general:titulo': string
  'form:latin:general:nombre': string
  'form:latin:general:nit': string
  'form:latin:general:calle': string
  'form:latin:general:provincia': string
  'form:latin:general:cp': string
  'form:latin:general:telefono': string
  'form:latin:general:email': string
  'form:latin:general:web': string
  'form:latin:perfil:titulo': string
  'form:latin:perfil:forma': string
  'form:latin:perfil:divisa': string
  'form:latin:perfil:fecha': string
  'form:latin:perfil:actividad': string
  'form:latin:perfil:empleados': string
  'form:latin:perfil:capital': string
  'form:latin:perfil:codigo': string
  'form:latin:comercial:titulo': string
  'form:latin:comercial:actual': string
  'form:latin:comercial:anterior': string
  'form:latin:info:titulo': string
  'form:latin:info:divisa': string
  'form:latin:info:unidad': string
  'form:latin:info:fechaultimo': string
  'form:latin:info:importeultimo': string
  'form:latin:info:patrimonioultimo': string
  'form:latin:info:reservasultimo': string
  'form:latin:info:activoultimo': string
  'form:latin:info:resultadoultimo': string
  'form:latin:info:fechaanterior': string
  'form:latin:info:importeanterior': string
  'form:latin:info:patrimonioanterior': string
  'form:latin:info:reservasanterior': string
  'form:latin:info:activoanterior': string
  'form:latin:info:resultadoanterior': string
  'form:latin:info:opinion': string
  'form:latin:info:disclaimer1': string
  'form:latin:info:disclaimer2': string
  'form:latin:info:disclaimer3': string
  'form:latin:info:disclaimer4': string
  'form:latin:info:archivo': string
  'form:latin:info:noarchivo': string
}

type Tselect = Array<{
  value: string
  label: string
}>
export interface IReportLatin {
  readonly i18n: I18n
  selectOpts: {
    perfilForma: Tselect
    perfilDivisa: Tselect
    infoDivisa: Tselect
    infoUnidad: Tselect
    infoOpinion: Tselect
  }
  readonly formValues: {
    generalNombre: string
    generalNit: string
    generalCalle: string
    generalProvincia: string
    generalCp: string
    generalTelefono: string
    generalEmail: string
    generalWeb: string
    perfilForma: string
    perfilDivisa: string
    perfilFecha: string
    perfilActividad: string
    perfilEmpleados: string
    perfilCapital: string
    perfilCodigo: string
    comercialActual: string
    comercialAnterior: string
    infoDivisa: string
    infoUnidad: string
    infoFechaultimo: string
    infoImporteultimo: string
    infoPatrimonioultimo: string
    infoReservasultimo: string
    infoActivoultimo: string
    infoResultadoultimo: string
    infoFechaanterior: string
    infoImporteanterior: string
    infoPatrimonioanterior: string
    infoReservasanterior: string
    infoActivoanterior: string
    infoResultadoanterior: string
    infoOpinion: string
    infoArchivo: string
  }
  readonly formLoading: boolean
  readonly formRecoverDataError: boolean
  readonly saveSuccess: boolean
  readonly saveLoading: boolean
  readonly acceptSuccess: boolean
  readonly acceptLoading: boolean
  readonly handleChangeInputFile: (params) => void
  readonly handleCancel: () => void
  readonly handleSave: (params) => void
  readonly handleAccept: (params) => void
}
