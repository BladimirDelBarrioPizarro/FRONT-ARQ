import React, { Fragment } from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { IPayments } from './types'
import { PaymentForm } from '../../molecules/PaymentForm/PaymentForm'
import { PaydexHistoric } from '../../molecules/PaydexHistoric/PaydexHistoric'
import { PaydexSectorial } from '../../molecules/PaydexSectorial/PaydexSectorial'
import { SummaryPayments } from '../../molecules/SummaryPayments/SummaryPayments'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    maxWidth: '60vw'
  },
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
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: ' center',
    flexDirection: 'row'
  }
})

const Payments: React.FC<IPayments> = ({
  i18n,
  data
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Payments:title']}
          </span>
        </div>
      </div>
      <div className={classes.container}>
        <PaymentForm
          i18n={i18n}
          data={data.paymentForm}
        />
      </div>
      <PaydexHistoric
        i18n={i18n}
        data={data.paydexHistoric}
      />
      <div className={classes.container}>
        <PaydexSectorial
          i18n={i18n}
          data={data.paydexSectorial}
        />
      </div>
      <SummaryPayments
        i18n={i18n}
        data={data.summaryPayments}
      />
    </Fragment>
  )
}

export { Payments }
