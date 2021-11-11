import React from 'react'
import { IBasicDataBadexcug } from './types'
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

const BasicDataBadexcug: React.FC<IBasicDataBadexcug> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['BasicData:title']}
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
                  name: 'capitalNominal',
                  label: i18n['BasicDataBadexcug:capitalNominal'],
                  value: data.capitalNominal,
                  typeBis: 'text',
                  nameBis: 'capNominalAnterior',
                  labelBis: i18n['BasicDataBadexcug:capNominalAnterior'],
                  valueBis: data.capNominalAnterior
                },
                {
                  type: 'text',
                  name: 'capitalDesembolsado',
                  label: i18n['BasicDataBadexcug:capitalDesembolsado'],
                  value: data.capitalDesembolsado,
                  typeBis: 'text',
                  nameBis: 'fechaCambioCapital',
                  labelBis: i18n['BasicDataBadexcug:fechaCambioCapital'],
                  valueBis: data.fechaCambioCapital
                },
                {
                  type: 'text',
                  name: 'fechaUltimoBalance',
                  label: i18n['BasicDataBadexcug:fechaUltimoBalance'],
                  value: data.fechaUltimoBalance,
                  typeBis: 'text',
                  nameBis: 'resultados',
                  labelBis: i18n['BasicDataBadexcug:resultados'],
                  valueBis: data.resultados
                },
                {
                  type: 'text',
                  name: 'moneda',
                  label: i18n['BasicDataBadexcug:moneda'],
                  value: data.moneda,
                  typeBis: 'text',
                  nameBis: 'cifras',
                  labelBis: i18n['BasicDataBadexcug:cifras'],
                  valueBis: data.cifras
                },
                {
                  type: 'text',
                  name: 'facturación',
                  label: i18n['BasicDataBadexcug:facturación'],
                  value: data.facturación,
                  typeBis: 'text',
                  nameBis: 'empleados',
                  labelBis: i18n['BasicDataBadexcug:empleados'],
                  valueBis: data.empleados
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
                  name: 'comentarios',
                  label: i18n['BasicDataBadexcug:comentarios'],
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

export { BasicDataBadexcug }
