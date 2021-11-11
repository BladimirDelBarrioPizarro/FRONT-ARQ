import React from 'react'
import { IInformaDataBadexcug } from './types'
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

const InformaDataBadexcug: React.FC<IInformaDataBadexcug> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['InformaDataBadexcug:title']}
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
                  name: 'numeroPeticion',
                  label: i18n['InformaDataBadexcug:numeroPeticion'],
                  value: data.numeroPeticion,
                  typeBis: 'text',
                  nameBis: 'codigoProducto',
                  labelBis: i18n['InformaDataBadexcug:codigoProducto'],
                  valueBis: data.codigoProducto
                },
                {
                  type: 'text',
                  name: 'motifNocodNomEmpresate',
                  label: i18n['InformaDataBadexcug:codNomEmpresa'],
                  value: data.codNomEmpresa,
                  typeBis: 'text',
                  nameBis: 'tipoCorresponsal',
                  labelBis: i18n['InformaDataBadexcug:tipoCorresponsal'],
                  valueBis: data.tipoCorresponsal
                },
                {
                  type: 'text',
                  name: 'numeroDocumento',
                  label: i18n['InformaDataBadexcug:numeroDocumento'],
                  value: data.numeroDocumento,
                  typeBis: 'text',
                  nameBis: 'tipoDocumento',
                  labelBis: i18n['InformaDataBadexcug:tipoDocumento'],
                  valueBis: data.tipoDocumento
                },
                {
                  type: 'text',
                  name: 'numeroInforme',
                  label: i18n['InformaDataBadexcug:numeroInforme'],
                  value: data.numeroInforme,
                  typeBis: 'text',
                  nameBis: 'numeroMovimiento',
                  labelBis: i18n['InformaDataBadexcug:numeroMovimiento'],
                  valueBis: data.numeroMovimiento
                },
                {
                  type: 'text',
                  name: 'origen',
                  label: i18n['InformaDataBadexcug:origen'],
                  value: data.origen,
                  typeBis: 'text',
                  nameBis: 'gravedadAjt',
                  labelBis: i18n['InformaDataBadexcug:gravedadAjt'],
                  valueBis: data.gravedadAjt
                },
                {
                  type: 'text',
                  name: 'tipoFichero',
                  label: i18n['InformaDataBadexcug:tipoFichero'],
                  value: data.tipoFichero,
                  typeBis: 'text',
                  nameBis: 'nombreFichero',
                  labelBis: i18n['InformaDataBadexcug:nombreFichero'],
                  valueBis: data.nombreFichero
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

export { InformaDataBadexcug }
