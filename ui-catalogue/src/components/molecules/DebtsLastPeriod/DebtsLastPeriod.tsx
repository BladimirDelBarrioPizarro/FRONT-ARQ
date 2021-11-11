import React from 'react'
import { IDebtsLastPeriod } from './types'
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
  divHeaderSubtitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    paddingBottom: '10px'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px'
  },
  labelHeaderBold: {
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
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '0.3rem'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    textAlign: 'start',
    padding: '5px'
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
    width: '100%'
  }
})

const DebtsLastPeriod: React.FC<IDebtsLastPeriod> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['DebtsLastPeriod:title']} {data.titlePeriod}
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
                  title: i18n['DebtsLastPeriod:titlePeorCalificacion'],
                  type: Type.PeorCalificacion,
                  typeInput: 'text'
                },
                {
                  title: i18n['DebtsLastPeriod:titleMayorDeudas'],
                  type: Type.MayorDeudas,
                  typeInput: 'text'
                },
                {
                  title: i18n['DebtsLastPeriod:titleMayorImporte'],
                  type: Type.MayorImporte,
                  typeInput: 'text'
                },
                {
                  title: i18n['DebtsLastPeriod:titleMayorDiasRetraso'],
                  type: Type.MayorDiasRetraso,
                  typeInput: 'text'
                }
              ].map(({ title, type, typeInput }, index) => (
                <div className={classes.divFlex} key={index}>
                  <div className={classes.divHeaderSubtitleContainer}>
                    <div className={classes.divHeaderFlex}>
                      <span className={classes.labelHeader}>
                        {title}
                      </span>
                    </div>
                  </div>
                  <Grid container
                    spacing={0}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={typeInput}
                      name={index + '-entidad'}
                      label={i18n['DebtsLastPeriod:entidad']}
                      value={type === Type.PeorCalificacion ? data.entidadPeorCalificacion
                        : type === Type.MayorDeudas ? data.entidadMayorDeudas
                          : type === Type.MayorImporte ? data.entidadMayorImporte
                            : data.entidadMayorDiasRetraso}
                      size='m'
                    />
                    <ElementInput
                      type={typeInput}
                      name={index + '-sistemafinanciero'}
                      label={type === Type.MayorImporte || type === Type.MayorDiasRetraso ? i18n['DebtsLastPeriod:tipo'] : i18n['DebtsLastPeriod:sistemaFinanciero']}
                      value={type === Type.PeorCalificacion ? data.sistemaFinancieroPeorCalificacion
                        : type === Type.MayorDeudas ? data.sistemaFinancieroMayorDeudas
                          : type === Type.MayorImporte ? data.sistemaFinancieroMayorImporte
                            : data.sistemaFinancieroMayorDiasRetraso}
                      size='m'
                    />
                  </Grid>
                  <Grid container
                    spacing={0}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={typeInput}
                      name={index + '-calificacion'}
                      label={type === Type.MayorImporte || type === Type.MayorDiasRetraso ? i18n['DebtsLastPeriod:importe'] : i18n['DebtsLastPeriod:calificacion']}
                      value={type === Type.PeorCalificacion ? data.calificacionPeorCalificacion
                        : type === Type.MayorDeudas ? data.calificacionMayorDeudas
                          : type === Type.MayorImporte ? data.calificacionMayorImporte
                            : data.calificacionMayorDiasRetraso}
                      size='m'
                    />
                    <ElementInput
                      type={typeInput}
                      name={index + '-totaldeuda'}
                      label={type === Type.MayorImporte || type === Type.MayorDiasRetraso ? i18n['DebtsLastPeriod:diasAtraso'] : i18n['DebtsLastPeriod:totalDeuda']}
                      value={type === Type.PeorCalificacion ? data.totalDeudaPeorCalificacion
                        : type === Type.MayorDeudas ? data.totalDeudaMayorDeudas
                          : type === Type.MayorImporte ? data.totalDeudaMayorImporte
                            : data.totalDeudaMayorDiasRetraso}
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

export { DebtsLastPeriod }

enum Type {
  PeorCalificacion,
  MayorDeudas,
  MayorImporte,
  MayorDiasRetraso,
}
