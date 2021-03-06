interface Ii18nAggregateSummary {
  'AggregateSummary:title': string
  'AggregateSummary:detailTbTipoResposabilidad': string
  'AggregateSummary:detailTbFactoring': string
  'AggregateSummary:detailTbOtros': string
  'AggregateSummary:detailTbDescubierto': string
  'AggregateSummary:detailTbFacilities': string
  'AggregateSummary:detailTbCredito': string
  'AggregateSummary:detailTbFreeFloat': string
  'AggregateSummary:detailTbRenovable': string
  'AggregateSummary:detailTbNoRenobable': string
  'AggregateSummary:detailTbFactoringBis': string
  'AggregateSummary:detailTbConfirming': string
  'AggregateSummary:detailTbOtrosValores': string
  'AggregateSummary:detailTbDescuentos': string
  'AggregateSummary:detailTbCreditoPersonal': string
  'AggregateSummary:detailTbCreditoAutomovil': string
  'AggregateSummary:detailTbAvales': string
  'AggregateSummary:detailTbOtrosAvales': string
  'AggregateSummary:detailTbFinanciacion': string
  'AggregateSummary:detailTbOtrosBis': string
}

export interface IAggregateSummaryRequestForm {
  tipoResposabilidad: string
  factoring1: string
  factoring2: string
  factoring3: string
  factoring4: string
  otros1: string
  otros2: string
  otros3: string
  otros4: string
  descubierto1: string
  descubierto2: string
  descubierto3: string
  descubierto4: string
  facilities1: string
  facilities2: string
  facilities3: string
  facilities4: string
  credito1: string
  credito2: string
  credito3: string
  credito4: string
  freeFloat1: string
  freeFloat2: string
  freeFloat3: string
  freeFloat4: string
  renovable1: string
  renovable2: string
  renovable3: string
  renovable4: string
  noRenobable1: string
  noRenobable2: string
  noRenobable3: string
  noRenobable4: string
  factoringBis1: string
  factoringBis2: string
  factoringBis3: string
  factoringBis4: string
  confirming1: string
  confirming2: string
  confirming3: string
  confirming4: string
  otrosValores1: string
  otrosValores2: string
  otrosValores3: string
  otrosValores4: string
  descuentos1: string
  descuentos2: string
  descuentos3: string
  descuentos4: string
  creditoPersonal1: string
  creditoPersonal2: string
  creditoPersonal3: string
  creditoPersonal4: string
  creditoAutomovil1: string
  creditoAutomovil2: string
  creditoAutomovil3: string
  creditoAutomovil4: string
  avales1: string
  avales2: string
  avales3: string
  avales4: string
  otrosAvales1: string
  otrosAvales2: string
  otrosAvales3: string
  otrosAvales4: string
  financiacion1: string
  financiacion2: string
  financiacion3: string
  financiacion4: string
  otrosBis1: string
  otrosBis2: string
  otrosBis3: string
  otrosBis4: string
}

export interface IAggregateSummary {
  i18n: Ii18nAggregateSummary
  data: IAggregateSummaryRequestForm
}
