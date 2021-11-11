import React from 'react'
import { IResume } from './types'
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
  labelHeaderSubtitle: {
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

const Resume: React.FC<IResume> = ({
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
                {i18n['Resume:title']}
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
              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSubtitle}>
                    {i18n['Resume:subtitle1']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  label: i18n['Resume:formajuridica'],
                  name: 'formajuridica',
                  value: data.formajuridica,
                  typeBis: 'text',
                  labelBis: i18n['Resume:anteriorformajuridica'],
                  nameBis: 'anteriorformajuridica',
                  valueBis: data.anteriorformajuridica
                },
                {
                  type: 'text',
                  label: i18n['Resume:descripcionformajuridica'],
                  name: 'descripcionformajuridica',
                  value: data.descripcionformajuridica,
                  typeBis: 'text',
                  labelBis: i18n['Resume:descripcionanteriorformajuridica'],
                  nameBis: 'descripcionanteriorformajuridica',
                  valueBis: data.descripcionanteriorformajuridica
                },
                {
                  type: 'text',
                  label: i18n['Resume:fechaconstitucion'],
                  name: 'fechaconstitucion',
                  value: data.fechaconstitucion,
                  typeBis: 'text',
                  labelBis: i18n['Resume:fechaformajuridica'],
                  nameBis: 'fechaformajuridica',
                  valueBis: data.fechaformajuridica
                },
                {
                  type: 'text',
                  label: i18n['Resume:fechacambiocapitalnominal'],
                  name: 'fechacambiocapitalnominal',
                  value: data.fechacambiocapitalnominal,
                  typeBis: 'text',
                  labelBis: i18n['Resume:fechadatosresumen'],
                  nameBis: 'fechadatosresumen',
                  valueBis: data.fechadatosresumen
                },
                {
                  type: 'text',
                  label: i18n['Resume:estadoactual'],
                  name: 'estadoactual',
                  value: data.estadoactual,
                  typeBis: 'text',
                  labelBis: i18n['Resume:fechaestadoactual'],
                  nameBis: 'fechaestadoactual',
                  valueBis: data.fechaestadoactual
                },
                {
                  type: 'text',
                  label: i18n['Resume:capitalnominal'],
                  name: 'capitalnominal',
                  value: data.capitalnominal,
                  typeBis: 'text',
                  labelBis: i18n['Resume:capitaldesembolsado'],
                  nameBis: 'capitaldesembolsado',
                  valueBis: data.capitaldesembolsado
                },
                {
                  type: 'text',
                  label: i18n['Resume:ventas'],
                  name: 'ventas',
                  value: data.ventas,
                  typeBis: 'text',
                  labelBis: i18n['Resume:resultadoneto'],
                  nameBis: 'resultadoneto',
                  valueBis: data.resultadoneto
                },
                {
                  type: 'text',
                  label: i18n['Resume:fondospropios'],
                  name: 'fondospropios',
                  value: data.fondospropios,
                  typeBis: 'text',
                  labelBis: i18n['Resume:capitalcirculante'],
                  nameBis: 'capitalcirculante',
                  valueBis: data.capitalcirculante
                },
                {
                  type: 'text',
                  label: i18n['Resume:activosfijos'],
                  name: 'activosfijos',
                  value: data.activosfijos,
                  typeBis: 'text',
                  labelBis: i18n['Resume:existencias'],
                  nameBis: 'existencias',
                  valueBis: data.existencias
                },
                {
                  type: 'text',
                  label: i18n['Resume:fuentedatoseconomicos'],
                  name: 'fuentedatoseconomicos',
                  value: data.fuentedatoseconomicos,
                  typeBis: 'text',
                  labelBis: i18n['Resume:capitalnominalanterior'],
                  nameBis: 'capitalnominalanterior',
                  valueBis: data.capitalnominalanterior
                },
                {
                  type: 'text',
                  label: i18n['Resume:numeroempleados'],
                  name: 'numeroempleados',
                  value: data.numeroempleados,
                  typeBis: 'text',
                  labelBis: i18n['Resume:comentarios'],
                  nameBis: 'comentarios',
                  valueBis: data.comentarios
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
              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSubtitle}>
                    {i18n['Resume:subtitle2']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  label: i18n['Resume:nombre'],
                  name: 'nombre1',
                  value: data.nombre1,
                  typeBis: 'text',
                  labelBis: i18n['Resume:domicilio'],
                  nameBis: 'domicilio',
                  valueBis: data.domicilio1
                },
                {
                  type: 'text',
                  label: i18n['Resume:localidad'],
                  name: 'localidad1',
                  value: data.localidad1,
                  typeBis: 'text',
                  labelBis: i18n['Resume:provincia'],
                  nameBis: 'provincia1',
                  valueBis: data.provincia1
                },
                {
                  type: 'text',
                  label: i18n['Resume:codigopostal'],
                  name: 'codigopostal1',
                  value: data.codigopostal1,
                  typeBis: 'text',
                  labelBis: i18n['Resume:pais'],
                  nameBis: 'pais1',
                  valueBis: data.pais1
                },
                {
                  type: 'text',
                  label: i18n['Resume:porcentajeparticipacion'],
                  name: 'porcentajeparticipacion',
                  value: data.porcentajeparticipacion1,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'porcentajeparticipacion2',
                  valueBis: data.porcentajeparticipacion2
                },
                {
                  type: 'text',
                  label: '',
                  name: 'porcentajeparticipacion3',
                  value: data.porcentajeparticipacion3,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'porcentajeparticipacion4',
                  valueBis: data.porcentajeparticipacion4
                },
                {
                  type: 'text',
                  label: '',
                  name: 'porcentajeparticipacion5',
                  value: data.porcentajeparticipacion5,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'porcentajeparticipacion6',
                  valueBis: data.porcentajeparticipacion6
                },
                {
                  type: 'text',
                  label: '',
                  name: 'porcentajeparticipacion7',
                  value: data.porcentajeparticipacion7,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'porcentajeparticipacion8',
                  valueBis: data.porcentajeparticipacion8
                },
                {
                  type: 'text',
                  label: '',
                  name: 'porcentajeparticipacion9',
                  value: data.porcentajeparticipacion9,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'porcentajeparticipacion10',
                  valueBis: data.porcentajeparticipacion10
                },
                {
                  type: 'text',
                  label: '',
                  name: 'porcentajeparticipacion11',
                  value: data.porcentajeparticipacion11,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'porcentajeparticipacion12',
                  valueBis: data.porcentajeparticipacion12
                },
                {
                  type: 'text',
                  label: '',
                  name: 'porcentajeparticipacion13',
                  value: data.porcentajeparticipacion13
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

              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSubtitle}>
                    {i18n['Resume:subtitle3']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  label: i18n['Resume:nombre'],
                  name: 'nombre2',
                  value: data.nombre2,
                  typeBis: 'text',
                  labelBis: i18n['Resume:domicilio'],
                  nameBis: 'domicilio2',
                  valueBis: data.domicilio2
                },
                {
                  type: 'text',
                  label: i18n['Resume:localidad'],
                  name: 'localidad2',
                  value: data.localidad2,
                  typeBis: 'text',
                  labelBis: i18n['Resume:provincia'],
                  nameBis: 'provincia2',
                  valueBis: data.provincia2
                },
                {
                  type: 'text',
                  label: i18n['Resume:codigopostal'],
                  name: 'codigopostal2',
                  value: data.codigopostal2,
                  typeBis: 'text',
                  labelBis: i18n['Resume:pais'],
                  nameBis: 'pais2',
                  valueBis: data.pais2
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
              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSubtitle}>
                    {i18n['Resume:subtitle4']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  label: i18n['Resume:nombre'],
                  name: 'nombre3',
                  value: data.nombre3,
                  typeBis: 'text',
                  labelBis: i18n['Resume:domicilio'],
                  nameBis: 'domicilio3',
                  valueBis: data.domicilio3
                },
                {
                  type: 'text',
                  label: i18n['Resume:localidad'],
                  name: 'localidad3',
                  value: data.localidad3,
                  typeBis: 'text',
                  labelBis: i18n['Resume:provincia'],
                  nameBis: 'provincia3',
                  valueBis: data.provincia3
                },
                {
                  type: 'text',
                  label: i18n['Resume:codigopostal'],
                  name: 'codigopostal4',
                  value: data.codigopostal3,
                  typeBis: 'text',
                  labelBis: i18n['Resume:pais'],
                  nameBis: 'pais3',
                  valueBis: data.pais3
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
              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSubtitle}>
                    {i18n['Resume:subtitle5']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  label: i18n['Resume:deudoresdias'],
                  name: 'deudoresdias',
                  value: data.deudores
                }
              ].map(({ type, label, name, value }, index) => (
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

export { Resume }
