import React from 'react'
import { IDatosInforma } from './types'
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

const DatosInforma: React.FC<IDatosInforma> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['DatosInforma:title']}
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
                  name: 'numeropeticion',
                  label: i18n['DatosInforma:numeropeticion'],
                  value: data.numeropeticion,
                  typeBis: 'text',
                  nameBis: 'codigoproducto',
                  labelBis: i18n['DatosInforma:codigoproducto'],
                  valueBis: data.codigoproducto
                },
                {
                  type: 'text',
                  name: 'codnomempresa',
                  label: i18n['DatosInforma:codnomempresa'],
                  value: data.codnomempresa,
                  typeBis: 'text',
                  nameBis: 'tipocorresponsal',
                  labelBis: i18n['DatosInforma:tipocorresponsal'],
                  valueBis: data.tipocorresponsal
                },
                {
                  type: 'text',
                  name: 'numerodocumento',
                  label: i18n['DatosInforma:numerodocumento'],
                  value: data.numerodocumento,
                  typeBis: 'text',
                  nameBis: 'tipodocumento',
                  labelBis: i18n['DatosInforma:tipodocumento'],
                  valueBis: data.tipodocumento
                },
                {
                  type: 'text',
                  name: 'numeroinforme',
                  label: i18n['DatosInforma:numeroinforme'],
                  value: data.numeroinforme,
                  typeBis: 'text',
                  nameBis: 'numeromovimiento',
                  labelBis: i18n['DatosInforma:numeromovimiento'],
                  valueBis: data.numeromovimiento
                },
                {
                  type: 'text',
                  name: 'origen',
                  label: i18n['DatosInforma:origen'],
                  value: data.origen,
                  typeBis: 'text',
                  nameBis: 'gravedadajt',
                  labelBis: i18n['DatosInforma:gravedadajt'],
                  valueBis: data.gravedadajt
                },
                {
                  type: 'text',
                  name: 'tipofichero',
                  label: i18n['DatosInforma:tipofichero'],
                  value: data.tipofichero,
                  typeBis: 'text',
                  nameBis: 'nombrefichero',
                  labelBis: i18n['DatosInforma:nombrefichero'],
                  valueBis: data.nombrefichero
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

export { DatosInforma }
