interface Ii18nSpecificItemsBadexcug {
  'SpecificItemsBadexcug:title': string
  'SpecificItemsBadexcug:cotationAlfa': string
  'SpecificItemsBadexcug:descCotationalfa': string
  'SpecificItemsBadexcug:motifNote': string
  'SpecificItemsBadexcug:descMotifNote': string
  'SpecificItemsBadexcug:cessationActivite': string
  'SpecificItemsBadexcug:incidents': string
  'SpecificItemsBadexcug:ventasEstimadas': string
}
export interface IdataSpecificItemsBadexcugFormRequest {
  cotationAlfa: string
  descCotationalfa: string
  motifNote: string
  descMotifNote: string
  cessationActivite: string
  incidents: string
  ventasEstimadas: string
}

export interface ISpecificItemsBadexcug {
  i18n: Ii18nSpecificItemsBadexcug
  data: IdataSpecificItemsBadexcugFormRequest
}
