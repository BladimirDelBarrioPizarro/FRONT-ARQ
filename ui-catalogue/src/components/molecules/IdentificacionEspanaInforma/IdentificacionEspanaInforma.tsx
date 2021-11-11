import React from 'react'
import { IIdentificacionEspanaInforma } from './types'
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

const IdentificacionEspanaInforma: React.FC<IIdentificacionEspanaInforma> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['IdenEspanaInforma:title']}
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
                  name: 'denominacion',
                  label: i18n['IdenEspanaInforma:denominacion'],
                  value: data.denominacion
                },
                {
                  type: 'text',
                  name: 'domicilio',
                  label: i18n['IdenEspanaInforma:domicilio'],
                  value: data.domicilio
                },
                {
                  type: 'text',
                  name: 'localidad',
                  label: i18n['IdenEspanaInforma:localidad'],
                  value: data.localidad
                },
                {
                  type: 'text',
                  name: 'provincia',
                  label: i18n['IdenEspanaInforma:provincia'],
                  value: data.provincia
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
                  name: 'codigopostal',
                  label: i18n['IdenEspanaInforma:codpostal'],
                  value: data.codigopostal,
                  typeBis: 'text',
                  nameBis: 'pais',
                  labelBis: i18n['IdenEspanaInforma:pais'],
                  valueBis: data.pais
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
                  type: 'text',
                  name: 'tipoidenfiscal',
                  label: i18n['IdenEspanaInforma:tipoidenfiscal'],
                  value: data.tipoidenfiscal
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
                  name: 'codidenfiscal',
                  label: i18n['IdenEspanaInforma:codidenfiscal'],
                  value: data.codidenfiscal,
                  typeBis: 'text',
                  nameBis: 'fechultbalance',
                  labelBis: i18n['IdeEspanaInforma:fechaultbalance'],
                  valueBis: data.fechultbalance
                },
                {
                  type: 'text',
                  name: 'comentariosbalances',
                  label: i18n['IdenEspanaInforma:comentariosbalances'],
                  value: data.comentariosbalances,
                  typeBis: 'text',
                  nameBis: 'incidenciasdep',
                  labelBis: i18n['IdenEspanaInforma:incidenciasDep'],
                  valueBis: data.incidenciasdep
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
                  type: 'text',
                  name: 'comentariogen',
                  label: i18n['IdenEspanaInforma:comentariogeneral'],
                  value: data.comentariogen
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
                  name: 'comentarios',
                  label: i18n['IdenEspanaInforma:comentarios'],
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
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { IdentificacionEspanaInforma }
