import React from 'react'
import { ISummaryExternalFinancing } from './types'
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
    marginLeft: '0.2rem'
  },
  divHeaderContainerTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'

  },
  labelHeaderTitle: {
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

const SummaryExternalFinancing: React.FC<ISummaryExternalFinancing> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['SummaryExternalFinancing:title']}
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
                  name: 'fechaactualizacion',
                  label: i18n['SummaryExternalFinancing:fechaactualizacion'],
                  value: data.fechaactualizacion,
                  typeBis: 'text',
                  nameBis: 'periodo',
                  labelBis: i18n['SummaryExternalFinancing:periodo'],
                  valueBis: data.periodo
                },
                {
                  type: 'text',
                  name: 'tipofinanciacion',
                  label: i18n['SummaryExternalFinancing:tipofinanciacion'],
                  value: data.tipofinanciacion,
                  typeBis: 'text',
                  nameBis: 'numerototal',
                  labelBis: i18n['SummaryExternalFinancing:numerototal'],
                  valueBis: data.numerototal
                },
                {
                  type: 'text',
                  name: 'importetotal1',
                  label: i18n['SummaryExternalFinancing:importetotal'],
                  value: data.importetotal1,
                  typeBis: 'text',
                  nameBis: 'financiacionreciente',
                  labelBis: i18n['SummaryExternalFinancing:financiacionreciente'],
                  valueBis: data.financiacionreciente
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
              <div className={classes.divHeaderContainerTitle}>
                <div>
                  <span className={classes.labelHeaderTitle}>
                    {i18n['SummaryExternalFinancing:situacionactual']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  name: 'numeroeventos',
                  label: i18n['SummaryExternalFinancing:numeroeventos'],
                  value: data.numeroeventos,
                  typeBis: 'text',
                  nameBis: 'importetotal2',
                  labelBis: i18n['SummaryExternalFinancing:importetotal'],
                  valueBis: data.importetotal2
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

export { SummaryExternalFinancing }
