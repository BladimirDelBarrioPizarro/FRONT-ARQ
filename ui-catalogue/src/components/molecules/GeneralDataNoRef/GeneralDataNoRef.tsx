import React from 'react'
import { IGeneralDataNoRef } from './types'
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

const GeneralDataNoRef: React.FC<IGeneralDataNoRef> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['GeneralData:title']}
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
                  name: 'remitente',
                  label: i18n['GeneralData:remitente'],
                  value: data.remitente
                },
                {
                  type: 'text',
                  name: 'nombreDocumento',
                  label: i18n['GeneralData:nombreDocumento'],
                  value: data.nombreDocumento
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

              {[
                {
                  type: 'text',
                  name: 'fechaMensaje',
                  label: i18n['GeneralData:fechaMensaje'],
                  value: data.fechaMensaje,
                  typeBis: 'text',
                  nameBis: 'fecha',
                  labelBis: i18n['GeneralData:fecha'],
                  valueBis: data.fecha
                },
                {
                  type: 'text',
                  name: 'fechaBusqueda',
                  label: i18n['GeneralData:fechaBusqueda'],
                  value: data.fechaBusqueda,
                  typeBis: 'text',
                  nameBis: 'numeroDocumento',
                  labelBis: i18n['GeneralData:numeroDocumento'],
                  valueBis: data.numeroDocumento
                },
                {
                  type: 'text',
                  name: 'numeroPeticion',
                  label: i18n['GeneralData:numeroPeticion'],
                  value: data.numeroPeticion,
                  typeBis: 'text',
                  nameBis: 'fecha',
                  labelBis: i18n['GeneralData:fecha'],
                  valueBis: data.fecha
                },
                {
                  type: 'text',
                  name: 'moneda',
                  label: i18n['GeneralData:moneda'],
                  value: data.moneda,
                  typeBis: 'text',
                  nameBis: 'nombreFichero',
                  labelBis: i18n['GeneralData:nombreFichero'],
                  valueBis: data.nombreFichero
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
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { GeneralDataNoRef }
