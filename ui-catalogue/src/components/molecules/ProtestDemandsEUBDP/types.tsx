interface Ii18nProtestsDemandsEUDBP {
  'ProtestsDemandsEUDBP:title': string
  'ProtestsDemandsEUDBP:codigoincidencia': string
  'ProtestsDemandsEUDBP:tipoincidencia': string
  'ProtestsDemandsEUDBP:fechaincidencia': string
  'ProtestsDemandsEUDBP:numeroincidencias': string
  'ProtestsDemandsEUDBP:importeIncidencias': string
}
export interface IProtestsDemandsEUDBPFormRequest {
  codigoincidencia: string
  tipoincidencia: string
  fechaincidencia: string
  numeroincidencias: string
  importeIncidencias: string

}

export interface IProtestsDemandsEUDBP {
  i18n: Ii18nProtestsDemandsEUDBP
  data: IProtestsDemandsEUDBPFormRequest
}
