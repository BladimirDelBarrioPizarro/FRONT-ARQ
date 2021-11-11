
export interface IPetitionBalacesNPGCForm {
  origenBalances: string
  fechasCierre1: string
  fechasCierre2: string
  fechasCierre3: string
  mesesBalances1: string
  mesesBalances2: string
  mesesBalances3: string
  accionistas1: string
  accionistas2: string
  accionistas3: string
  Inmovilizado1: string
  Inmovilizado2: string
  Inmovilizado3: string
  establecimiento1: string
  establecimiento2: string
  establecimiento3: string
  materiales1: string
  materiales2: string
  materiales3: string
  inmateriales1: string
  inmateriales2: string
  inmateriales3: string
  financieras1: string
  financieras2: string
  financieras3: string
  accionesPropias1: string
  accionesPropias2: string
  accionesPropias3: string
  deducciones1: string
  deducciones2: string
  deducciones3: string
}

export interface I18nBalancesNPGC {
  'BalancesNPGC:detailTbOrigenBalances': string
  'BalancesNPGC:detailTbFechasCierre': string
  'BalancesNPGC:detailTbMesesBalance': string
  'BalancesNPGC:detailTbTittleBalances': string
  'BalancesNPGC:detailTbBlank': string
  'BalancesNPGC:detailTbAccionistas': string
  'BalancesNPGC:detailTbInmovilizado': string
  'BalancesNPGC:detailTbEstablecimiento': string
  'BalancesNPGC:detailTbMateriales': string
  'BalancesNPGC:detailTbInmateriales': string
  'BalancesNPGC:detailTbFinancieras': string
  'BalancesNPGC:detailTbAccionesPropias': string
  'BalancesNPGC:detailTbDeducciones': string
}

interface ISelectElements {
  value: string
  result: string
}

export interface IBalancesNPGC {
  i18n: I18nBalancesNPGC
  data: IPetitionBalacesNPGCForm
  origenBalances: ISelectElements[]
  handleRefresh: () => void
}
