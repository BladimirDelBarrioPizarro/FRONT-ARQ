import React from 'react'
import { IIdentityVerification } from './types'
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
  divHeaderContainerForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  divHeaderFlexForm: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '20px'
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

const IdentityVerification: React.FC<IIdentityVerification> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['IdentityVerification:title']}
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
                  name: 'nombre',
                  label: i18n['IdentityVerification:nombre'],
                  value: data.nombre
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
                  name: 'identificacion',
                  label: i18n['IdentityVerification:identificacion'],
                  value: data.identificacion,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:numeroDuns'],
                  nameBis: 'numeroDuns',
                  valueBis: data.numeroduns
                }
              ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
              <div className={classes.divHeaderContainerForm}>
                <div className={classes.divHeaderFlexForm}>
                  <span className={classes.labelHeader}>
                    {i18n['IdentityVerification:domicilioFiscal']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  name: 'calle',
                  label: i18n['IdentityVerification:calle'],
                  value: data.calle,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:localidad'],
                  nameBis: 'localidad',
                  valueBis: data.localidad
                },
                {
                  type: 'text',
                  name: 'codigopostal',
                  label: i18n['IdentityVerification:codigopostal'],
                  value: data.codigopostal,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:provincia'],
                  nameBis: 'provincia',
                  valueBis: data.provincia
                }
              ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
              <div className={classes.divHeaderContainerForm}>
                <div className={classes.divHeaderFlexForm}>
                  <span className={classes.labelHeader}>
                    {i18n['IdentityVerification:domiciliosalternativos']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  name: 'domicilioCompleto1',
                  label: i18n['IdentityVerification:domiciliocompleto'],
                  value: data.domicilioCompleto1
                },
                {
                  type: 'text',
                  name: 'domicilioCompleto2',
                  label: i18n['IdentityVerification:domiciliocompleto'],
                  value: data.domicilioCompleto2
                },
                {
                  type: 'text',
                  name: 'domicilioCompleto3',
                  label: i18n['IdentityVerification:domiciliocompleto'],
                  value: data.domicilioCompleto3
                },
                {
                  type: 'text',
                  name: 'domicilioCompleto4',
                  label: i18n['IdentityVerification:domiciliocompleto'],
                  value: data.domicilioCompleto4
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
                  name: 'fechaconstitucion',
                  label: i18n['IdentityVerification:fechaConstitucion'],
                  value: data.fechaconstitucion,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:fechaNacimiento'],
                  nameBis: 'localidad',
                  valueBis: data.fechanacimiento
                },
                {
                  type: 'text',
                  name: 'edad',
                  label: i18n['IdentityVerification:edad'],
                  value: data.edad,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:formaJuridica'],
                  nameBis: 'formajuridica',
                  valueBis: data.formajuridica
                },
                {
                  type: 'text',
                  name: 'codigoactividadprincipal',
                  label: i18n['IdentityVerification:codigoactividad'],
                  value: data.codigoactividadprincipal,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:actividadPrincipal'],
                  nameBis: 'formajuridica',
                  valueBis: data.actividadprincipal
                },
                {
                  type: 'text',
                  name: 'codigoactividadsecundaria',
                  label: i18n['IdentityVerification:codigoactividadsecundaria'],
                  value: data.codigoactividadsecundaria,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:actividadSecundaria'],
                  nameBis: 'formajuridica',
                  valueBis: data.actividadsecundaria
                }
              ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
                  type: 'text',
                  name: 'empleadosverificados',
                  label: i18n['IdentityVerification:empleadosverificados'],
                  value: data.empleadosverificados
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
                      size='m'
                    />
                  </Grid>
                </div>
              ))}
              <div className={classes.divHeaderContainerForm}>
                <div className={classes.divHeaderFlexForm}>
                  <span className={classes.labelHeader}>
                    {i18n['IdentityVerification:informacionnegativa']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  name: 'sinactividad',
                  label: i18n['IdentityVerification:sinactividad'],
                  value: data.sinactividad,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:concursopresentado'],
                  nameBis: 'concursopresentado',
                  valueBis: data.concursopresentado
                }
              ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
              <div className={classes.divHeaderContainerForm}>
                <div className={classes.divHeaderFlexForm}>
                  <span className={classes.labelHeader}>
                    {i18n['IdentityVerification:fechainscripciones']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  name: 'iva',
                  label: i18n['IdentityVerification:iva'],
                  value: data.iva,
                  typeBis: 'text',
                  labelBis: i18n['IdentityVerification:gananciassociedades'],
                  nameBis: 'gananciassociedades',
                  valueBis: data.ganaciassociedades
                }
              ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
                  type: 'text',
                  name: 'ganaciaspersonasfisicas',
                  label: i18n['IdentityVerification:gananciaspersonas'],
                  value: data.ganaciaspersonasfisicas
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

export { IdentityVerification }
