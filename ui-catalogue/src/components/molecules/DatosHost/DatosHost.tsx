import React from 'react'
import { IDatosHost } from './types'
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

const DatosHost: React.FC<IDatosHost> = ({
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
                {i18n['DatosHost:title']}
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
              {[
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbNumeroPeticion'],
                  name: 'numeroPeticion',
                  value: data.numeroPeticion,
                  typeBis: 'text',
                  labelBis: i18n['DatosHost:detailTbCodProducto'],
                  nameBis: 'codProducto',
                  valueBis: data.codProducto
                },
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbCodEmpresa'],
                  name: 'codEmpresa',
                  value: data.codEmpresa,
                  typeBis: 'text',
                  labelBis: i18n['DatosHost:detailTbTipoCorresponsal'],
                  nameBis: 'tipoCorresponsal',
                  valueBis: data.tipoCorresponsal
                },
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbNumeroDocumento'],
                  name: 'numeroDocumento',
                  value: data.numeroDocumento,
                  typeBis: 'text',
                  labelBis: i18n['DatosHost:detailTbTipoDocumento'],
                  nameBis: 'tipoDocumento',
                  valueBis: data.tipoDocumento
                },
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbNumeroInforme'],
                  name: 'numeroInforme',
                  value: data.numeroInforme,
                  typeBis: 'text',
                  labelBis: i18n['DatosHost:detailTbNumeroMovimiento'],
                  nameBis: 'numeroMovimiento',
                  valueBis: data.numeroMovimiento
                },
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbOrigen'],
                  name: 'origen',
                  value: data.origen,
                  typeBis: 'text',
                  labelBis: i18n['DatosHost:detailTbGravedad'],
                  nameBis: 'gravedad',
                  valueBis: data.gravedad
                },
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbTipoFichero'],
                  name: 'tipoFichero',
                  value: data.tipoFichero,
                  typeBis: 'text',
                  labelBis: i18n['DatosHost:detailTbNombreFichero'],
                  nameBis: 'nombreFichero',
                  valueBis: data.nombreFichero
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
              {[
                {
                  type: 'text',
                  label: i18n['DatosHost:detailTbNomCorresponsal'],
                  name: 'nomCorresponsal',
                  value: data.nomCorresponsal
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

export { DatosHost }
