import React from 'react'
import { IBankEUDBP } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput
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
  }
})

const BankEUDBP: React.FC<IBankEUDBP> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={classes.divHeaderContainer}>
            <div className={classes.divHeaderFlex}>
              <span className={classes.labelHeader}>
                {i18n['BankEUDBP:title']}
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

        </Grid>
      </Grid>

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
                  label: i18n['BankEUDBP:nombre'],
                  name: 'nombre',
                  value: data.nombre,
                  typeBis: 'text',
                  labelBis: i18n['BankEUDBP:domicilio'],
                  nameBis: 'domicilio',
                  valueBis: data.domicilio
                },
                {
                  type: 'text',
                  label: i18n['BankEUDBP:localidad'],
                  name: 'localidad',
                  value: data.localidad,
                  typeBis: 'text',
                  labelBis: i18n['BankEUDBP:provincia'],
                  nameBis: 'provincia',
                  valueBis: data.provincia
                },
                {
                  type: 'text',
                  label: i18n['BankEUDBP:codigopostal'],
                  name: 'codigopostal',
                  value: data.codigopostal,
                  typeBis: 'text',
                  labelBis: i18n['BankEUDBP:pais'],
                  nameBis: 'pais',
                  valueBis: data.pais
                },
                {
                  type: 'text',
                  label: i18n['BankEUDBP:fechaapertura'],
                  name: 'fechaapertura',
                  value: data.fechaapertura,
                  typeBis: 'text',
                  labelBis: i18n['BankEUDBP:credito'],
                  nameBis: 'credito',
                  valueBis: data.credito
                },
                {
                  type: 'text',
                  label: i18n['BankEUDBP:saldo'],
                  name: 'saldo',
                  value: data.saldo,
                  typeBis: 'text',
                  labelBis: i18n['BankEUDBP:fechasaldo'],
                  nameBis: 'fechasaldo',
                  valueBis: data.fechasaldo
                },
                {
                  type: 'text',
                  label: i18n['BankEUDBP:limitedescubrimiento'],
                  name: 'limitedescubrimiento',
                  value: data.limitedescubrimiento,
                  typeBis: 'text',
                  labelBis: i18n['BankEUDBP:creditogarantizado'],
                  nameBis: 'creditogarantizado',
                  valueBis: data.creditogarantizado
                }
              ].map(({ type, label, name, value, typeBis, labelBis, nameBis, valueBis }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={label}
                      value={value}
                      size='m'
                    />
                    <ElementInput
                      type={typeBis}
                      name={nameBis}
                      label={labelBis}
                      value={valueBis}
                      size='m'
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

export { BankEUDBP }
