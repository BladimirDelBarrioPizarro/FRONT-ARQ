import React from 'react'
import { IGeneralDataRestoPaises2 } from './types'
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

const GeneralDataRestoPaises2: React.FC<IGeneralDataRestoPaises2> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['GeneralDataRestoPaises2:title']}
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
                  label: i18n['GeneralDataRestoPaises2:remitente'],
                  value: data.remitente
                },
                {
                  type: 'text',
                  name: 'nombredoc',
                  label: i18n['GeneralDataRestoPaises2:nombreDocumento'],
                  value: data.nombredoc
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
                  name: 'tipodoc',
                  label: i18n['GeneralDataRestoPaises2:tipoDocumento'],
                  value: data.tipodoc,
                  typeBis: 'text',
                  nameBis: 'fechamensaje',
                  labelBis: i18n['GeneralDataRestoPaises2:fechaMensaje'],
                  valueBis: data.fechamensaje
                },
                {
                  type: 'text',
                  name: 'fecha',
                  label: i18n['GeneralDataRestoPaises2:fecha'],
                  value: data.fecha,
                  typeBis: 'text',
                  nameBis: 'fechaultima',
                  labelBis: i18n['GeneralDataRestoPaises2:fechaBusqueda'],
                  valueBis: data.fechaultima
                },
                {
                  type: 'text',
                  name: 'numerodoc',
                  label: i18n['GeneralDataRestoPaises2:numeroDocumento'],
                  value: data.numerodoc,
                  typeBis: 'text',
                  nameBis: 'codigoempresa',
                  labelBis: i18n['GeneralDataRestoPaises2:codigoempresa'],
                  valueBis: data.codigoempresa
                },
                {
                  type: 'text',
                  name: 'moneda',
                  label: i18n['GeneralDataRestoPaises2:moneda'],
                  value: data.moneda,
                  typeBis: 'text',
                  nameBis: 'nombrefichero',
                  labelBis: i18n['GeneralDataRestoPaises2:nombreFichero'],
                  valueBis: data.nombrefichero
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

export { GeneralDataRestoPaises2 }
