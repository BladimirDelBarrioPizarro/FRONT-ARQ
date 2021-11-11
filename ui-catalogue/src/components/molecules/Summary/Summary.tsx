import React from 'react'
import { ISummary } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput,
  ElementTextArea
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'

const useStyles = makeStyles({
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderContainerChild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '0rem'
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
    justifyContent: 'flex-start'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%'
  }
})

const Summary: React.FC<ISummary> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Summary:title']}
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
                  name: 'formaJuridica',
                  label: i18n['Summary:formaJuridica'],
                  value: data.formaJuridica,
                  typeBis: 'text',
                  nameBis: 'anteriorFormaJuríd',
                  labelBis: i18n['Summary:anteriorFormaJuríd'],
                  valueBis: data.anteriorFormaJuríd
                },
                {
                  type: 'text',
                  name: 'fechaConstrucción',
                  label: i18n['Summary:fechaConstrucción'],
                  value: data.fechaConstrucción,
                  typeBis: 'text',
                  nameBis: 'fechaFormaJurídica',
                  labelBis: i18n['Summary:fechaFormaJurídica'],
                  valueBis: data.fechaFormaJurídica
                },
                {
                  type: 'text',
                  name: 'estadoActual',
                  label: i18n['Summary:estadoActual'],
                  value: data.estadoActual,
                  typeBis: 'text',
                  nameBis: 'fechaEstadoActual',
                  labelBis: i18n['Summary:fechaEstadoActual'],
                  valueBis: data.fechaEstadoActual
                },
                {
                  type: 'text',
                  name: 'fechaInicioActividad',
                  label: i18n['Summary:fechaInicioActividad'],
                  value: data.fechaInicioActividad,
                  typeBis: 'text',
                  nameBis: 'estadoActualMope',
                  labelBis: i18n['Summary:estadoActualMope'],
                  valueBis: data.estadoActualMope
                }
              ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis }, index) => (
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

              {[
                {
                  name: 'comentarios',
                  label: i18n['Summary:comentarios'],
                  value: data.comentarios
                }
              ].map(({ name, label, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementTextArea
                      cols={50}
                      rows={2}
                      size='xl'
                      name={name}
                      label={label}
                      value={value}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'terminosVenta',
                  label: i18n['Summary:terminosVenta'],
                  value: data.terminosVenta
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

export { Summary }
