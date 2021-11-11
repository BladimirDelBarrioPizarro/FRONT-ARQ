import React from 'react'
import { IDatosGeneralesNoRef } from './types'
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

const DatosGeneralesNoRef: React.FC<IDatosGeneralesNoRef> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['GeneralDataNoRef:title']}
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
                  name: 'remitente',
                  label: i18n['GeneralDataNoRef:remitente'],
                  value: data.remitente,
                  valueVisible: !(data.remitente === undefined || data.remitente === '' || data.remitente === null)
                },
                {
                  type: 'text',
                  name: 'nombredocumento',
                  label: i18n['GeneralDataNoRef:nombreDocumento'],
                  value: data.nombredocumento,
                  valueVisible: !(data.nombredocumento === undefined || data.nombredocumento === '' || data.nombredocumento === null)
                }
              ].map(({ type, name, label, value, valueVisible }, index) => (
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
                      valueVisible={valueVisible}
                      readonly={true}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'tipodocumento',
                  label: i18n['GeneralDataNoRef:tipoDocumento'],
                  value: data.tipodocumento,
                  valueVisible: !(data.tipodocumento === undefined || data.tipodocumento === '' || data.tipodocumento === null),
                  typeBis: 'text',
                  nameBis: 'fechamensaje',
                  labelBis: i18n['GeneralDataNoRef:fechaMensaje'],
                  valueBis: data.fechamensaje,
                  valueVisibleBis: !(data.fechamensaje === undefined || data.fechamensaje === '' || data.fechamensaje === null)
                },
                {
                  type: 'text',
                  name: 'fecha',
                  label: i18n['GeneralDataNoRef:fecha'],
                  value: data.fecha,
                  valueVisible: !(data.fecha === undefined || data.fecha === '' || data.fecha === null),
                  typeBis: 'text',
                  nameBis: 'fechaultimabusqueda',
                  labelBis: i18n['GeneralDataNoRef:fechaultimabusqueda'],
                  valueBis: data.fechaultimabusqueda,
                  valueVisibleBis: !(data.fechaultimabusqueda === undefined || data.fechaultimabusqueda === '' || data.fechaultimabusqueda === null)
                },
                {
                  type: 'text',
                  name: 'numerodocumento',
                  label: i18n['GeneralDataNoRef:numeroDocumento'],
                  value: data.numerodocumento,
                  valueVisible: !(data.numerodocumento === undefined || data.numerodocumento === '' || data.numerodocumento === null),
                  typeBis: 'text',
                  nameBis: 'codigoempresa',
                  labelBis: i18n['GeneralDataNoRef:codigoempresa'],
                  valueBis: data.codigoempresa,
                  valueVisibleBis: !(data.codigoempresa === undefined || data.codigoempresa === '' || data.codigoempresa === null)
                },
                {
                  type: 'text',
                  name: 'numeropeticion',
                  label: i18n['GeneralDataNoRef:numeroPeticion'],
                  value: data.numeropeticion,
                  valueVisible: !(data.numeropeticion === undefined || data.numeropeticion === '' || data.numeropeticion === null),
                  typeBis: 'text',
                  nameBis: 'moneda',
                  labelBis: i18n['GeneralDataNoRef:moneda'],
                  valueBis: data.moneda,
                  valueVisibleBis: !(data.moneda === undefined || data.moneda === '' || data.moneda === null)
                },
                {
                  type: 'text',
                  name: 'nombrefichero',
                  label: i18n['GeneralDataNoRef:nombrefichero'],
                  value: data.nombrefichero
                }
              ].map(({ type, name, label, value, valueVisible, typeBis, nameBis, labelBis, valueBis, valueVisibleBis }, index) => (
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
                      valueVisible={valueVisible}
                      readonly={true}
                    />
                    <ElementInput
                      type={typeBis}
                      name={nameBis}
                      label={labelBis}
                      value={valueBis}
                      size='m'
                      valueVisible={valueVisibleBis}
                      readonly={true}
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

export { DatosGeneralesNoRef }
