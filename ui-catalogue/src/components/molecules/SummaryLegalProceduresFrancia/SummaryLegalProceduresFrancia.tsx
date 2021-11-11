import React from 'react'
import { ISummaryLegalProceduresFrancia } from './types'
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
  labelHeaderSub: {
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

const SummaryLegalProceduresFrancia: React.FC<ISummaryLegalProceduresFrancia> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['SummaryLegalProceduresFrancia:title']}
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
                  label: i18n['SummaryLegalProceduresFrancia:fechaactualizacion'],
                  value: data.fechaactualizacion
                },
                {
                  type: 'text',
                  name: 'periodoanalizado',
                  label: i18n['SummaryLegalProceduresFrancia:periodoanalizado'],
                  value: data.periodoanalizado
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
                  name: 'tipodeacccion',
                  label: i18n['SummaryLegalProceduresFrancia:tipodeacccion'],
                  value: data.tipodeacccion
                },
                {
                  type: 'text',
                  name: 'clasedeaccion',
                  label: i18n['SummaryLegalProceduresFrancia:clasedeaccion'],
                  value: data.clasedeaccion
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
                  name: 'numeroprocedimientos1',
                  label: i18n['SummaryLegalProceduresFrancia:numeroprocedimientos'],
                  value: data.numeroprocedimientos1
                },
                {
                  type: 'text',
                  name: 'importetotal1',
                  label: i18n['SummaryLegalProceduresFrancia:importetotal'],
                  value: data.importetotal1
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
                  name: 'importetotal2',
                  label: '',
                  value: data.importetotal2
                },
                {
                  type: 'text',
                  name: 'procedimientolegal',
                  label: i18n['SummaryLegalProceduresFrancia:procedimientolegal'],
                  value: data.procedimientolegal
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

              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSub}>
                    {i18n['SummaryLegalProceduresFrancia:titleSub']}
                  </span>
                </div>
              </div>

              {[
                {
                  type: 'text',
                  name: 'situacionactual',
                  label: i18n['SummaryLegalProceduresFrancia:situacionactual'],
                  value: data.situacionactual
                },
                {
                  type: 'text',
                  name: 'nprocedimientossituacion',
                  label: i18n['SummaryLegalProceduresFrancia:nprocedimientossituacion'],
                  value: data.numeroprocedimentos2
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
                  name: 'importetotal3',
                  label: i18n['SummaryLegalProceduresFrancia:importetotal'],
                  value: data.importetotal3
                },
                {
                  type: 'text',
                  name: 'importetotal4',
                  label: '',
                  value: data.importetotal4
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

            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { SummaryLegalProceduresFrancia }
