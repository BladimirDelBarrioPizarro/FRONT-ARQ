import {
  IBalancesEconomicosRequestForm
} from '../../molecules/BalancesEconomicos/types'
import {
  ICuentasResultadosRequestForm
} from '../../molecules/CuentasResultados/types'
import {
  IRatiosInformationRequestForm
} from '../../molecules/RatiosInformation/types'
import {
  IRatiosInformationBisRequestForm
} from '../../molecules/RatiosInformationBis/types'
import {
  ICuentasResultadosBisRequestForm
} from '../../molecules/CuentasResultadosBis/types'
import { ReportTypes } from '../../templates/BaseReport/types'

interface Ii18nBalanceInformation{
  Ii18nBalancesEconomicos
}

export interface IBalanceDataRequestForm {
  balancesEconomicos: IBalancesEconomicosRequestForm
  ratiosInformacion: IRatiosInformationRequestForm
  cuentasResultado: ICuentasResultadosRequestForm
  balancesEconomicosBis: IBalancesEconomicosRequestForm
  ratiosInformacionBis: IRatiosInformationBisRequestForm
  cuentasResultadoBis: ICuentasResultadosBisRequestForm
}

export interface IBalanceInformation {
  i18n: any
  data: IBalanceDataRequestForm
  report: ReportTypes
}
