import React from 'react'
import {
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core'
import { IBalanceInformation } from './types'
import { BalancesEconomicos } from '../../molecules/BalancesEconomicos/BalancesEconomicos'
import { RatiosInformationActivo } from '../../molecules/RatiosInformation/RatiosInformationActivo'
import { RatiosInformationPasivo } from '../../molecules/RatiosInformation/RatiosInformationPasivo'
import { CuentasResultados } from '../../molecules/CuentasResultados/CuentasResultados'
import { RatiosInformationBisActivo } from '../../molecules/RatiosInformationBis/RatiosInformationBisActivo'
import { RatiosInformationBisPasivo } from '../../molecules/RatiosInformationBis/RatiosInformationBisPasivo'
import { CuentasResultadosBis } from '../../molecules/CuentasResultadosBis/CuentasResultadosBis'
import { BalanceMoveUrl } from '../../molecules/BalanceMoveUrl/BalanceMoveUrl'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee'
  },
  hrStyle: {
    borderTadius: '5px',
    borderTop: '5px solid #f9f9f9',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none'
  },
  divContentBalance: {
  }
})
const BalanceInformation: React.FC<IBalanceInformation> = ({
  i18n,
  data,
  report
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.margen}>
        <CardContent>
          <p id='BALANCES_URL_1'>
            <BalanceMoveUrl
              i18n={i18n}
            />
          </p>
          <hr className={classes.hrStyle}></hr>
          <div className={classes.divContentBalance}>
            <p id='BALANCES_ECONOMICOS_1'>
              <BalancesEconomicos
                i18n={i18n}
                data={data.balancesEconomicos}
                bis={false}
              />
            </p>

            <p id='RATIOS_1'>
              <RatiosInformationActivo
                i18n={i18n}
                data={data.ratiosInformacion}
              />
              <RatiosInformationPasivo
                i18n={i18n}
                data={data.ratiosInformacion}
              />
            </p>

            <p id='CUENTAS_RESULTADO_1'>
              <CuentasResultados
                i18n={i18n}
                data={data.cuentasResultado}
              />
            </p>

            <p id='BALANCES_ECONOMICOS_2'>
              <BalancesEconomicos
                i18n={i18n}
                data={data.balancesEconomicosBis}
                bis={true}
              />
            </p>
            <p id='RATIOS_2'>
              <RatiosInformationBisActivo
                i18n={i18n}
                data={data.ratiosInformacionBis}
              />
              <RatiosInformationBisPasivo
                i18n={i18n}
                data={data.ratiosInformacionBis}
              />
            </p>
            <p id='CUENTAS_RESULTADO_2'>
              <CuentasResultadosBis
                i18n={i18n}
                data={data.cuentasResultadoBis}
              />
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { BalanceInformation }
