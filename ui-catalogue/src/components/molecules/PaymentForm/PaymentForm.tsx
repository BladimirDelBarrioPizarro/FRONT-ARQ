import React from 'react'
import { IPaymentForm } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInputCol
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'

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
    marginTop: '20px'
  },
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'normal',
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
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  }
})

const PaymentForm: React.FC<IPaymentForm> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
          console.log(values) // eslint-disable-line
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className={classes.divContainer}>

              {[
                {
                  type: 'text',
                  name: 'transacciones',
                  label: i18n['PaymentForm:transacciones'],
                  value: data.transacciones,
                  typeBis: 'text',
                  nameBis: 'proveedores',
                  labelBis: i18n['PaymentForm:proveedores'],
                  valueBis: data.proveedores,
                  typeBis2: 'text',
                  nameBis2: 'paydex',
                  labelBis2: i18n['PaymentForm:paydex'],
                  valueBis2: data.paydex
                }
              ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis, typeBis2, nameBis2, labelBis2, valueBis2 }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={label}
                      value={value}
                      size='l'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={labelBis}
                      value={valueBis}
                      size='l'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={labelBis2}
                      value={valueBis2}
                      size='l'
                    />
                  </Grid>
                </div>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { PaymentForm }
