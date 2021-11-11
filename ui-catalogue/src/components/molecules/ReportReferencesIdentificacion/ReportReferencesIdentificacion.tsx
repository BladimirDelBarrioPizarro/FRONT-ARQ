import React from 'react'
import { IReportReferencesIdentificacion } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '0.6rem'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    backgroundColor: '#ffffff',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMind-Bold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    marginBottom: '1rem',
    marginTop: '1.6rem'
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '40px'
  },
  button: {
    width: '8em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  tabStyleActive: {
    backgroundColor: '#ff9900',
    color: '#ffffff',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  },
  tabStyleDefault: {
    color: '#003b64',
    backgroundColor: '#ffffff'
  },
  AppBar: {
    background: 'transparent',
    boxShadow: 'none'
  }
})

const ReportReferencesIdentificacion: React.FC<IReportReferencesIdentificacion> = ({
  i18n,
  data,
  handleAlta,
  handleRecepcion,
  handleCancel
}) => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.divHeader}>
              {i18n['ReportReferencesIdentificacion:detailTbTitle']}
            </div>
          </Grid>
        </Grid>
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
                  name: 'denominacion',
                  label: i18n['ReportReferencesIdentificacion:denominacion'],
                  value: data.denominacion
                },
                {
                  type: 'text',
                  name: 'domicilio',
                  label: i18n['ReportReferencesIdentificacion:domicilio'],
                  value: data.domicilio
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
                  name: 'codigoempresa',
                  label: i18n['ReportReferencesIdentificacion:codigoempresa'],
                  value: data.codigoempresa,
                  typeBis: 'text',
                  nameBis: 'localidad',
                  labelBis: i18n['ReportReferencesIdentificacion:localidad'],
                  valueBis: data.localidad
                },
                {
                  type: 'text',
                  name: 'provincia',
                  label: i18n['ReportReferencesIdentificacion:provincia'],
                  value: data.provincia,
                  typeBis: 'text',
                  nameBis: 'codigopostal',
                  labelBis: i18n['ReportReferencesIdentificacion:codigopostal'],
                  valueBis: data.codigopostal
                },
                {
                  type: 'text',
                  name: 'pais',
                  label: i18n['ReportReferencesIdentificacion:pais'],
                  value: data.pais,
                  typeBis: 'text',
                  nameBis: 'referenciafuente',
                  labelBis: i18n['ReportReferencesIdentificacion:referenciafuente'],
                  valueBis: data.referenciafuente
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
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className={classes.divHeader}>
                    {i18n['ReportReferencesIdentificacion:detailTbTitle2']}
                  </div>
                </Grid>
              </Grid>
              {[
                {
                  type: 'text',
                  name: 'vat',
                  label: i18n['ReportReferencesIdentificacion:vat'],
                  value: data.vat
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
              <div className={classes.divFlexButton}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {[
                    {
                      label: i18n['ReportReferencesIdentificacion:buttonAlta'],
                      click: handleAlta,
                      align: classes.buttonMiddle
                    },
                    {
                      label: i18n['ReportReferencesIdentificacion:buttonRecepcion'],
                      click: handleRecepcion,
                      align: classes.buttonMiddle
                    },
                    {
                      label: i18n['ReportReferencesIdentificacion:buttonEliminar'],
                      click: handleCancel,
                      align: classes.buttonMiddle
                    }
                  ].map(({ label, click, align }, index) => (
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
                      key={index}>
                      <div className={align}>
                        <button
                          onClick={click}
                          className={classes.button}
                        >
                          {label}
                        </button>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { ReportReferencesIdentificacion }
