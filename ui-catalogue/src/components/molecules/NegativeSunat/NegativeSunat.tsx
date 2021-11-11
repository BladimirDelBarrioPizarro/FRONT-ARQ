import React from 'react'
import { INegativeSunat } from './types'
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
    width: '100%',
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

const NegativeSunat: React.FC<INegativeSunat> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['NegativeSunat:title']}
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
              {[
                {
                  type: 'text',
                  name: 'fechacobranzareciente',
                  label: i18n['NegativeSunat:fechacobranzareciente'],
                  value: data.fechacobranzareciente
                },
                {
                  type: 'text',
                  name: 'cantidadtotal',
                  label: i18n['NegativeSunat:cantidadtotal'],
                  value: data.cantidadtotal
                },
                {
                  type: 'text',
                  name: 'montototal',
                  label: i18n['NegativeSunat:montototal'],
                  value: data.montototal
                },
                {
                  type: 'text',
                  name: 'fechacobranza',
                  label: i18n['NegativeSunat:fechacobranza'],
                  value: data.fechacobranza
                },
                {
                  type: 'text',
                  name: 'fechaproceso',
                  label: i18n['NegativeSunat:fechaproceso'],
                  value: data.fechaproceso
                },
                {
                  type: 'text',
                  name: 'monto',
                  label: i18n['NegativeSunat:monto'],
                  value: data.monto
                },
                {
                  type: 'text',
                  name: 'tipo',
                  label: i18n['NegativeSunat:tipo'],
                  value: data.tipo
                },
                {
                  type: 'text',
                  name: 'dependencia',
                  label: i18n['NegativeSunat:dependencia'],
                  value: data.dependencia
                }
              ].map(({ type, name, label, value }, index) => (
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

export { NegativeSunat }
