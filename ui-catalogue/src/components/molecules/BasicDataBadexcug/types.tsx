import { IdataBasicDataFormRequest } from '../BasicData/types'

interface Ii18nBasicDataBadexcug {
  'BasicDataBadexcug:capitalNominal': string
  'BasicDataBadexcug:capNominalAnterior': string
  'BasicDataBadexcug:capitalDesembolsado': string
  'BasicDataBadexcug:fechaCambioCapital': string
  'BasicDataBadexcug:fechaUltimoBalance': string
  'BasicDataBadexcug:resultados': string
  'BasicDataBadexcug:moneda': string
  'BasicDataBadexcug:cifras': string
  'BasicDataBadexcug:facturación': string
  'BasicDataBadexcug:empleados': string
  'BasicDataBadexcug:comentarios': string
}

export interface IBasicDataBadexcug {
  i18n: Ii18nBasicDataBadexcug
  data: IdataBasicDataFormRequest
}
