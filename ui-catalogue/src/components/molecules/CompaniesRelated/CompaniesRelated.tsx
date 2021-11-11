import React from 'react'
import { ICompaniesRelated } from './types'
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

const CompaniesRelated: React.FC<ICompaniesRelated> = ({
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
                {i18n['CompaniesRelated:title']}
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
                  label: i18n['CompaniesRelated:nombre'],
                  name: 'nombre',
                  value: data.nombre,
                  typeBis: 'text',
                  labelBis: i18n['CompaniesRelated:tiporelacion'],
                  nameBis: 'tiporelacion',
                  valueBis: data.tiporelacion
                },
                {
                  type: 'text',
                  label: i18n['CompaniesRelated:numeroidentificacion'],
                  name: 'numeroidentificacion',
                  value: data.numeroidentificacion,
                  typeBis: 'text',
                  labelBis: i18n['CompaniesRelated:tipoidentificacion'],
                  nameBis: 'tipoidentificacion',
                  valueBis: data.tipoidentificacion
                },
                {
                  type: 'text',
                  label: i18n['CompaniesRelated:domicilio'],
                  name: 'domicilio',
                  value: data.domicilio,
                  typeBis: 'text',
                  labelBis: i18n['CompaniesRelated:localidad'],
                  nameBis: 'localidad',
                  valueBis: data.localidad
                },
                {
                  type: 'text',
                  label: i18n['CompaniesRelated:provincia'],
                  name: 'provincia',
                  value: data.provincia,
                  typeBis: 'text',
                  labelBis: i18n['CompaniesRelated:codigopostal'],
                  nameBis: 'codigopostal',
                  valueBis: data.codigopostal
                },
                {
                  type: 'text',
                  label: i18n['CompaniesRelated:pais'],
                  name: 'pais',
                  value: data.pais,
                  typeBis: 'text',
                  labelBis: i18n['CompaniesRelated:comentarios'],
                  nameBis: 'comentarios',
                  valueBis: data.comentarios
                },
                {
                  type: 'text',
                  label: i18n['CompaniesRelated:bolsa'],
                  name: 'bolsa',
                  value: data.bolsa
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { CompaniesRelated }
