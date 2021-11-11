import React, { useState } from 'react'
import { IBalancesMoveUrl } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles({
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    padding: '5px',
    width: '100%',
    '&:hover': {
      color: '#ff9900'
    }
  },
  labelStyleIn: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff9900',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    padding: '5px',
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    textAlign: 'center'
  },
  divLink: {
    width: '100%',
    textAlign: 'center'
  }
})

const BalanceMoveUrl: React.FC<IBalancesMoveUrl> = ({
  i18n
}) => {
  const classes = useStyles()

  const [state, setState] = useState('BALANCES_ECONOMICOS_1')

  return (
    <div>
      <div className={classes.divContainer}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <div className={classes.divLink}>
                <a
                  href='#BALANCES_ECONOMICOS_1'
                  className={state !== 'BALANCES_ECONOMICOS_1' ? classes.labelStyle : classes.labelStyleIn}
                  onClick={(e) => setState('BALANCES_ECONOMICOS_1')}
                >
                  {i18n['BalanceMoveUrl:detailTbBalance_1']}
                </a>
              </div>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <div className={classes.divLink}>
                <a
                  href='#RATIOS_1'
                  className={state !== 'RATIOS_1' ? classes.labelStyle : classes.labelStyleIn}
                  onClick={(e) => setState('RATIOS_1')}
                >
                  {i18n['BalanceMoveUrl:detailTbRatios_1']}
                </a>
              </div>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a
                href='#CUENTAS_RESULTADO_1'
                className={state !== 'CUENTAS_RESULTADO_1' ? classes.labelStyle : classes.labelStyleIn}
                onClick={(e) => setState('CUENTAS_RESULTADO_1')}
              >
                {i18n['BalanceMoveUrl:detailTbCuentas_1']}
              </a>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.divContainer}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a
                href='#BALANCES_ECONOMICOS_2'
                className={state !== 'BALANCES_ECONOMICOS_2' ? classes.labelStyle : classes.labelStyleIn}
                onClick={(e) => setState('BALANCES_ECONOMICOS_2')}
              >
                {i18n['BalanceMoveUrl:detailTbBalance_2']}
              </a>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a
                href='#RATIOS_2'
                className={state !== 'RATIOS_2' ? classes.labelStyle : classes.labelStyleIn}
                onClick={(e) => setState('RATIOS_2')}
              >
                {i18n['BalanceMoveUrl:detailTbRatios_2']}
              </a>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <a
                href='#CUENTAS_RESULTADO_2'
                className={state !== 'CUENTAS_RESULTADO_2' ? classes.labelStyle : classes.labelStyleIn}
                onClick={(e) => setState('CUENTAS_RESULTADO_2')}
              >
                {i18n['BalanceMoveUrl:detailTbCuentas_2']}
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export { BalanceMoveUrl }
