interface Ii18nObservationsDBGDP {
  'ObservationsDBGDP:title': string
  'ObservationsDBGDP:condicionesadicionales': string
  'ObservationsDBGDP:terminosventa': string
  'ObservationsDBGDP:procedimientoslegales': string
  'ObservationsDBGDP:comentariogeneral': string
}

export interface IObservationsDBGDPRequestForm {
  condicionesadicionales: string
  terminosventa: string
  procedimientoslegales: string
  comentariogeneral: string
}

export interface IObservationsDBGDP {
  i18n: Ii18nObservationsDBGDP
  data: IObservationsDBGDPRequestForm
}
