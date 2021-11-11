export interface Ii18nBalancesEconomicos {
  'BalancesEconomicos:title': string
  'BalancesEconomicos:labelTbEjercicio1': string
  'BalancesEconomicos:labelTbEjercicio2': string
  'BalancesEconomicos:labelTbEjercicio3': string
  'BalancesEconomicos:detailTbPlanEstado': string
  'BalancesEconomicos:detailTbFechaFinEstado': string
  'BalancesEconomicos:detailTbNumMeses': string
  'BalancesEconomicos:detailTbIndAudit': string
  'BalancesEconomicos:detailTbIndCalifAudit': string
  'BalancesEconomicos:detailTbAmbInfo': string
  'BalancesEconomicos:detailTbCodigoFiabilidad': string
  'BalancesEconomicos:detailTbIndFinal': string
  'BalancesEconomicos:detailTbIndFirma': string
  'BalancesEconomicos:detailTbIndDeseq': string
  'BalancesEconomicos:detailTbNumEmpleado': string
  'BalancesEconomicos:detailTbCodDivisaFinanciero': string
  'BalancesEconomicos:detailTbUnidadFinanciero': string
  'BalancesEconomicos:detailTbRazon': string
  'BalancesEconomicos:detailTbInmobilizadoNeto': string
  'BalancesEconomicos:detailTbActivoCirculante': string
  'BalancesEconomicos:detailTbFondosPropios': string
  'BalancesEconomicos:detailTbCapital': string
  'BalancesEconomicos:detailTbAcreeLargoPlazo': string
  'BalancesEconomicos:detailTbAcreeCortoPlazo': string
  'BalancesEconomicos:detailTbTotDeudas': string
  'BalancesEconomicos:detailTbTotActivoPasivo': string
  'BalancesEconomicos:detailTbCalProduccion': string
  'BalancesEconomicos:detailTbVentasNetas': string
  'BalancesEconomicos:detailTbNetoExplotacion': string
  'BalancesEconomicos:detailTbActivOrdinarias': string
  'BalancesEconomicos:detailTbPerdidas': string
  'BalancesEconomicos:detailTbBeneficios': string
}

export interface IBalancesEconomicosRequestForm {
  planEstado1: string
  planEstado2: string
  planEstado3: string
  fechaFinEstado1: string
  fechaFinEstado2: string
  fechaFinEstado3: string
  numMeses1: string
  numMeses2: string
  numMeses3: string
  indAudit1: string
  indAudit2: string
  indAudit3: string
  indCalifAudit1: string
  indCalifAudit2: string
  indCalifAudit3: string
  ambInfo1: string
  ambInfo2: string
  ambInfo3: string
  codigoFiabilidad1: string
  codigoFiabilidad2: string
  codigoFiabilidad3: string
  indFinal1: string
  indFinal2: string
  indFinal3: string
  indFirma1: string
  indFirma2: string
  indFirma3: string
  indDeseq1: string
  indDeseq2: string
  indDeseq3: string
  numEmpleado1: string
  numEmpleado2: string
  numEmpleado3: string
  codDivisaFinanciero1: string
  codDivisaFinanciero2: string
  codDivisaFinanciero3: string
  unidadFinanciero1: string
  unidadFinanciero2: string
  unidadFinanciero3: string
  razon1: string
  razon2: string
  razon3: string
  inmobilizadoNeto1: string
  inmobilizadoNeto2: string
  inmobilizadoNeto3: string
  activoCirculante1: string
  activoCirculante2: string
  activoCirculante3: string
  fondosPropios1: string
  fondosPropios2: string
  fondosPropios3: string
  capital1: string
  capital2: string
  capital3: string
  acreeLargoPlazo1: string
  acreeLargoPlazo2: string
  acreeLargoPlazo3: string
  acreeCortoPlazo1: string
  acreeCortoPlazo2: string
  acreeCortoPlazo3: string
  totDeudas1: string
  totDeudas2: string
  totDeudas3: string
  totActivoPasivo1: string
  totActivoPasivo2: string
  totActivoPasivo3: string
  calProduccion1: string
  calProduccion2: string
  calProduccion3: string
  ventasNetas1: string
  ventasNetas2: string
  ventasNetas3: string
  netoExplotacion1: string
  netoExplotacion2: string
  netoExplotacion3: string
  activOrdinarias1: string
  activOrdinarias2: string
  activOrdinarias3: string
  perdidas1: string
  perdidas2: string
  perdidas3: string
  beneficios1: string
  beneficios2: string
  beneficios3: string
}

export interface IBalancesEconomicos {
  i18n: Ii18nBalancesEconomicos
  data: IBalancesEconomicosRequestForm
  bis: boolean
}