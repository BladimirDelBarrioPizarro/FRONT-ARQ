import React from 'react'
import { IAjtsDBGDP } from './types'
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
  labelHeader2: {
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

const AjtsDBGDP: React.FC<IAjtsDBGDP> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['AjtsDBGDP:title']}
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
              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeader2}>
                    {i18n['AjtsDBGDP:title2']}
                  </span>
                </div>
              </div>
            </div>
            {[
              {
                type: 'text',
                name: 'ajt',
                label: i18n['AjtsDBGDP:ajt'],
                value: data.ajt
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

            <div className={classes.divHeaderContainer}>
              <div className={classes.divHeaderFlex}>
                <span className={classes.labelHeader2}>
                  {i18n['AjtsDBGDP:title3']}
                </span>
              </div>
            </div>

            {[
              {
                type: 'text',
                name: 'formajuridica',
                label: i18n['AjtsDBGDP:formajuridica'],
                value: data.formajuridica,
                typeBis: 'text',
                nameBis: 'anteriorformajuridica',
                labelBis: i18n['AjtsDBGDP:anteriorformajuridica'],
                valueBis: data.anteriorformajuridica
              },
              {
                type: 'text',
                name: 'descripcionformajuridica',
                label: i18n['AjtsDBGDP:descripcionformajuridica'],
                value: data.descripcionformajuridica,
                typeBis: 'text',
                nameBis: 'fechaconstitucion',
                labelBis: i18n['AjtsDBGDP:fechaconstitucion'],
                valueBis: data.fechaconstitucion
              },
              {
                type: 'text',
                name: 'fechaformajurididica',
                label: i18n['AjtsDBGDP:fechaformajurididica'],
                value: data.fechaformajurididica,
                typeBis: 'text',
                nameBis: 'fechacambiocapitalnominal',
                labelBis: i18n['AjtsDBGDP:fechacambiocapitalnominal'],
                valueBis: data.fechacambiocapitalnominal
              },
              {
                type: 'text',
                name: 'fechadatosresumen',
                label: i18n['AjtsDBGDP:fechadatosresumen'],
                value: data.fechadatosresumen,
                typeBis: 'text',
                nameBis: 'estadoactual',
                labelBis: i18n['AjtsDBGDP:estadoactual'],
                valueBis: data.estadoactual
              },
              {
                type: 'text',
                name: 'fechaestadoactual',
                label: i18n['AjtsDBGDP:fechaestadoactual'],
                value: data.fechaestadoactual,
                typeBis: 'text',
                nameBis: 'capitalnominal',
                labelBis: i18n['AjtsDBGDP:capitalnominal'],
                valueBis: data.capitalnominal
              },
              {
                type: 'text',
                name: 'capitaldesembolsado',
                label: i18n['AjtsDBGDP:capitaldesembolsado'],
                value: data.capitaldesembolsado,
                typeBis: 'text',
                nameBis: 'ventas',
                labelBis: i18n['AjtsDBGDP:ventas'],
                valueBis: data.ventas
              },
              {
                type: 'text',
                name: 'resultadoneto',
                label: i18n['AjtsDBGDP:resultadoneto'],
                value: data.resultadoneto,
                typeBis: 'text',
                nameBis: 'fondospropios',
                labelBis: i18n['AjtsDBGDP:fondospropios'],
                valueBis: data.fondospropios
              },
              {
                type: 'text',
                name: 'capitalcirculante',
                label: i18n['AjtsDBGDP:capitalcirculante'],
                value: data.capitalcirculante,
                typeBis: 'text',
                nameBis: 'activosfijos',
                labelBis: i18n['AjtsDBGDP:activosfijos'],
                valueBis: data.activosfijos
              },
              {
                type: 'text',
                name: 'existencias',
                label: i18n['AjtsDBGDP:existencias'],
                value: data.existencias,
                typeBis: 'text',
                nameBis: 'fuentedatoseconomicos',
                labelBis: i18n['AjtsDBGDP:fuentedatoseconomicos'],
                valueBis: data.fuentedatoseconomicos
              },
              {
                type: 'text',
                name: 'capitalnominalanterior',
                label: i18n['AjtsDBGDP:capitalnominalanterior'],
                value: data.capitalnominalanterior,
                typeBis: 'text',
                nameBis: 'numeroempleados',
                labelBis: i18n['AjtsDBGDP:numeroempleados'],
                valueBis: data.numeroempleados
              },
              {
                type: 'text',
                name: 'comentarios',
                label: i18n['AjtsDBGDP:comentarios'],
                value: data.comentarios
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

          </Form>
        )}
      </Formik>

    </div>
  )
}

export { AjtsDBGDP }
