import React from 'react'
import { IProtestBulletin } from './types'
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

const ProtestBulletin: React.FC<IProtestBulletin> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>

      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['ProtestBulletin:title']}
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
                  <span className={classes.labelHeader}>
                    {i18n['ProtestBulletin:titleSub1']}
                  </span>
                </div>
              </div>

              {[
                {
                  type: 'text',
                  name: 'ultimoperiodo',
                  label: i18n['ProtestBulletin:ultimoperiodo'],
                  value: data.ultimoperiodoAclarado,
                  typeBis: 'text',
                  nameBis: 'cantidadensoles',
                  labelBis: i18n['ProtestBulletin:cantidadensoles'],
                  valueBis: data.cantidadensolesAclarado
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
                  name: 'montoensoles',
                  label: i18n['ProtestBulletin:montoensoles'],
                  value: data.montoensolesAclarado,
                  typeBis: 'text',
                  nameBis: 'cantidadendolares',
                  labelBis: i18n['ProtestBulletin:cantidadendolares'],
                  valueBis: data.cantidadendolaresAclarado
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
                  name: 'montoendolares',
                  label: i18n['ProtestBulletin:montoendolares'],
                  value: data.montoendolaresAclarado,
                  typeBis: 'text',
                  nameBis: 'fechavencimiento',
                  labelBis: i18n['ProtestBulletin:fechavencimiento'],
                  valueBis: data.fechavencimientoAclarado
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
                  name: 'fechaaclaracion',
                  label: i18n['ProtestBulletin:fechaaclaracion'],
                  value: data.fechaaclaracionAclarado,
                  typeBis: 'text',
                  nameBis: 'montodivisa',
                  labelBis: i18n['ProtestBulletin:montodivisa'],
                  valueBis: data.montodivisaAclarado
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
                  name: 'tipodocumento',
                  label: i18n['ProtestBulletin:tipodocumento'],
                  value: data.tipodocumentoAclarado,
                  typeBis: 'text',
                  nameBis: 'notaría',
                  labelBis: i18n['ProtestBulletin:notaría'],
                  valueBis: data.notaríaAclarado
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
                  name: 'emisordocumento',
                  label: i18n['ProtestBulletin:emisordocumento'],
                  value: data.emisordocumentoAclarado
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
                    {i18n['ProtestBulletin:titleSub2']}
                  </span>
                </div>
              </div>

              {[
                {
                  type: 'text',
                  name: 'ultimoperiodo',
                  label: i18n['ProtestBulletin:ultimoperiodo'],
                  value: data.ultimoperiodoNoAclarado,
                  typeBis: 'text',
                  nameBis: 'cantidadensoles',
                  labelBis: i18n['ProtestBulletin:cantidadensoles'],
                  valueBis: data.cantidadensolesNoAclarado
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
                  name: 'montoensoles',
                  label: i18n['ProtestBulletin:montoensoles'],
                  value: data.montoensolesNoAclarado,
                  typeBis: 'text',
                  nameBis: 'cantidadendolares',
                  labelBis: i18n['ProtestBulletin:cantidadendolares'],
                  valueBis: data.cantidadendolaresNoAclarado
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
                  name: 'montoendolares',
                  label: i18n['ProtestBulletin:montoendolares'],
                  value: data.montoendolaresNoAclarado,
                  typeBis: 'text',
                  nameBis: 'fechavencimiento',
                  labelBis: i18n['ProtestBulletin:fechavencimiento'],
                  valueBis: data.fechavencimientoNoAclarado
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
                  name: 'fechaaclaracion',
                  label: i18n['ProtestBulletin:fechaaclaracion'],
                  value: data.fechaaclaracionNoAclarado,
                  typeBis: 'text',
                  nameBis: 'montodivisa',
                  labelBis: i18n['ProtestBulletin:montodivisa'],
                  valueBis: data.montodivisaNoAclarado
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
                  name: 'tipodocumento',
                  label: i18n['ProtestBulletin:tipodocumento'],
                  value: data.tipodocumentoNoAclarado,
                  typeBis: 'text',
                  nameBis: 'notaría',
                  labelBis: i18n['ProtestBulletin:notaría'],
                  valueBis: data.notaríaNoAclarado
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
                  name: 'emisordocumento',
                  label: i18n['ProtestBulletin:emisordocumento'],
                  value: data.emisordocumentoNoAclarado
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

export { ProtestBulletin }
