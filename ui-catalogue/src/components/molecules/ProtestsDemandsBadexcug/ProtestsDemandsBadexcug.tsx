import React, { useState } from 'react'
import { IProtestsDemandsBadexcug } from './types'
import {
  makeStyles,
  Typography,
  Grid
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import { NonPaymentBadexcug } from '../NonPaymentBadexcug/NonPaymentBadexcug'
import { OperationCodeBadexcug } from '../OperationCodeBadexcug/OperationCodeBadexcug'

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
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    display: 'inline-block',
    width: '100%',
    textAlign: 'center'
  },
  fieldStyle: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontSize: '13px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #eeeeee'
  },
  fieldStyleIn: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontSize: '13px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #ff9900'
  }
})

const ProtestsDemandsBadexcug: React.FC<IProtestsDemandsBadexcug> = ({
  i18n,
  data
}) => {
  const classes = useStyles()
  const [stateIn, setStateIn] = useState(false)

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['ProtestsDemandsBadexcug:title']}
          </span>
        </div>
      </div>

      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
          console.log(values) // eslint-disable-line
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className={classes.divContainer}>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>
                  {[
                    {
                      label: i18n['ProtestsDemandsBadexcug:incidencia']
                    },
                    {
                      label: i18n['ProtestsDemandsBadexcug:tipo']
                    },
                    {
                      label: i18n['ProtestsDemandsBadexcug:fecha']
                    },
                    {
                      label: i18n['ProtestsDemandsBadexcug:incidencias']
                    },
                    {
                      label: i18n['ProtestsDemandsBadexcug:importeIncidencias']
                    }
                  ].map(({ label }, index) => (
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} key={index}>
                      <Typography className={classes.labelStyle}>
                        {label}
                      </Typography>
                    </Grid>
                  ))}
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>
                  {[
                    {
                      type: 'text',
                      name: 'incidencia',
                      value: data.incidencia
                    },
                    {
                      type: 'text',
                      name: 'tipo',
                      value: data.tipo
                    },
                    {
                      type: 'text',
                      name: 'fecha',
                      value: data.fecha
                    },
                    {
                      type: 'text',
                      name: 'incidencias',
                      value: data.incidencias
                    },
                    {
                      type: 'text',
                      name: 'importeIncidencias',
                      value: data.importeIncidencias
                    }
                  ].map(({ type, name, value }, index) => (
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} key={index}>
                      <input
                        data-testid="elementInput"
                        type={type}
                        id={name}
                        name={name}
                        onFocus={() => setStateIn(true)}
                        onBlur={() => setStateIn(false)}
                        className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                        defaultValue={value}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>
                </Grid>
              </div>

              <NonPaymentBadexcug
                i18n={i18n}
                data={data.nonPayment}
              />

              <OperationCodeBadexcug
                i18n={i18n}
                data={data.operationsCode}
              />
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { ProtestsDemandsBadexcug }
