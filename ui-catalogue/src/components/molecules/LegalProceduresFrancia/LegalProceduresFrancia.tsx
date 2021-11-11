import React from 'react'
import { ILegalProceduresFrancia } from './types'
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

const LegalProceduresFrancia: React.FC<ILegalProceduresFrancia> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['LegalProceduresFrancia:title']}
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
                  name: 'entidad',
                  label: i18n['LegalProceduresFrancia:entidad'],
                  value: data.entidad,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:fecha'],
                  nameBis: 'fecha',
                  valueBis: data.fecha
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
                  name: 'tipoaccion',
                  label: i18n['LegalProceduresFrancia:tipoaccion'],
                  value: data.tipoaccion,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:claseaccion'],
                  nameBis: 'fecclaseaccionha',
                  valueBis: data.claseaccion
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
                  name: 'fechapublicacion',
                  label: i18n['LegalProceduresFrancia:fechapublicacion'],
                  value: data.fechapublicacion,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:distrito'],
                  nameBis: 'distrito',
                  valueBis: data.distrito
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
                  name: 'duracion',
                  label: i18n['LegalProceduresFrancia:duracion'],
                  value: data.duracion,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:fechafinalizacion'],
                  nameBis: 'fechafinalizacion',
                  valueBis: data.fechafinalizacion
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
                  name: 'fechaexpiracion',
                  label: i18n['LegalProceduresFrancia:fechaexpiracion'],
                  value: data.fechaexpiracion,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:importe'],
                  nameBis: 'fechafinalizacion',
                  valueBis: data.importe
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
                  name: 'costeslegales',
                  label: i18n['LegalProceduresFrancia:costeslegales'],
                  value: data.costeslegales,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:moneda'],
                  nameBis: 'moneda',
                  valueBis: data.moneda
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
                  name: 'costeslegales',
                  label: i18n['LegalProceduresFrancia:situacionactual'],
                  value: data.situacion,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:resolucion'],
                  nameBis: 'resolucion',
                  valueBis: data.resolucion
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
                  name: 'demandante',
                  label: i18n['LegalProceduresFrancia:demandante'],
                  value: data.demandante1,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'resolucion',
                  valueBis: data.demandante2
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
                  name: 'comentarios',
                  label: i18n['LegalProceduresFrancia:comentarios'],
                  value: data.comentarios

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

              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeader}>
                    {i18n['LegalProceduresFrancia:titleSub']}
                  </span>
                </div>
              </div>

              {[
                {
                  type: 'text',
                  name: 'tipoaccion2',
                  label: i18n['LegalProceduresFrancia:tipoaccion'],
                  value: data.tipoaccion2,
                  typeBis: 'text',
                  labelBis: i18n['LegalProceduresFrancia:claseaccion'],
                  nameBis: 'claseaccion2',
                  valueBis: data.claseaccion2
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
                  name: 'fuenteinformacion',
                  label: i18n['LegalProceduresFrancia:fuenteinformacion'],
                  value: data.fuenteinformacion

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

              {[
                {
                  type: 'text',
                  name: 'input1',
                  label: '',
                  value: data.input1,
                  typeBis: 'text',
                  labelBis: '',
                  nameBis: 'input2',
                  valueBis: data.input2
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

            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { LegalProceduresFrancia }
