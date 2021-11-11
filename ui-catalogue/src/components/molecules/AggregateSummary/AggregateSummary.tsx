import React from 'react'
import { IAggregateSummary } from './types'
import {
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'

import {
  ElementInput,
  DataElementsInput
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
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
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
    width: '95%',
    marginRight: '6rem'
  },
  divMiddle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    textAlign: 'center',
    width: '100%'
  }
})

const AggregateSummary: React.FC<IAggregateSummary> = ({
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
                {i18n['AggregateSummary:title']}
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

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <ElementInput
                    type={'text'}
                    name={'tipoResposabilidad'}
                    label={i18n['AggregateSummary:detailTbTipoResposabilidad']}
                    value={data.tipoResposabilidad}
                    size='l'
                  />
                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography className={classes.labelStyle}>
                      <b>{i18n['AggregateSummary:detailTbConjunto']}</b>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyle}>
                      {i18n['AggregateSummary:detailTbInstrumento']}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>

                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbTotal']}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbCumplimiento']}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbMontante']}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbProducto']}
                    </div>
                  </Grid>
                </Grid>
              </div>

              {[
                {
                  type: 'text',
                  name: 'planEstado',
                  label: i18n['AggregateSummary:detailTbFactoring'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.factoring1 },
                    { value: data.factoring2 },
                    { value: data.factoring3 },
                    { value: data.factoring4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'planEstado',
                  label: i18n['AggregateSummary:detailTbOtros'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otros1 },
                    { value: data.otros2 },
                    { value: data.otros3 },
                    { value: data.otros2 }
                  ]
                }
              ].map(({ type, name, label, values, subIndex, bold }, counter) => (
                <div className={classes.divFlex} key={counter}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}>
                    <DataElementsInput
                      type={type}
                      name={name}
                      label={label}
                      values={values}
                      bold={bold}
                      subIndex={subIndex}
                    />
                  </Grid>
                </div>
              ))}

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography className={classes.labelStyle}>
                      <b>{i18n['AggregateSummary:detailTbConjunto']}</b>
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyle}>
                      {i18n['AggregateSummary:detailTbInstrumento']}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>

                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbTotal']}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbCumplimiento']}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbMontante']}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                    <div className={classes.divMiddle}>
                      {i18n['AggregateSummary:detailTbProducto']}
                    </div>
                  </Grid>
                </Grid>
              </div>

              {[
                {
                  type: 'text',
                  name: 'descubierto',
                  label: i18n['AggregateSummary:detailTbDescubierto'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.descubierto1 },
                    { value: data.descubierto2 },
                    { value: data.descubierto3 },
                    { value: data.descubierto4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'facilities',
                  label: i18n['AggregateSummary:detailTbFacilities'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.facilities1 },
                    { value: data.facilities2 },
                    { value: data.facilities3 },
                    { value: data.facilities4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'credito',
                  label: i18n['AggregateSummary:detailTbCredito'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.credito1 },
                    { value: data.credito2 },
                    { value: data.credito3 },
                    { value: data.credito4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'freeFloat',
                  label: i18n['AggregateSummary:detailTbFreeFloat'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.freeFloat1 },
                    { value: data.freeFloat2 },
                    { value: data.freeFloat3 },
                    { value: data.freeFloat4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'renovable',
                  label: i18n['AggregateSummary:detailTbRenovable'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.renovable1 },
                    { value: data.renovable2 },
                    { value: data.renovable3 },
                    { value: data.renovable4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'noRenobable',
                  label: i18n['AggregateSummary:detailTbNoRenobable'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.noRenobable1 },
                    { value: data.noRenobable2 },
                    { value: data.noRenobable3 },
                    { value: data.noRenobable4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'factoringBis',
                  label: i18n['AggregateSummary:detailTbFactoringBis'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.factoringBis1 },
                    { value: data.factoringBis2 },
                    { value: data.factoringBis3 },
                    { value: data.factoringBis4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'confirming',
                  label: i18n['AggregateSummary:detailTbConfirming'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.confirming1 },
                    { value: data.confirming2 },
                    { value: data.confirming3 },
                    { value: data.confirming4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'otrosValores',
                  label: i18n['AggregateSummary:detailTbOtrosValores'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrosValores1 },
                    { value: data.otrosValores2 },
                    { value: data.otrosValores3 },
                    { value: data.otrosValores4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'descuentos',
                  label: i18n['AggregateSummary:detailTbDescuentos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.descuentos1 },
                    { value: data.descuentos2 },
                    { value: data.descuentos3 },
                    { value: data.descuentos4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'creditoPersonal',
                  label: i18n['AggregateSummary:detailTbCreditoPersonal'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.creditoPersonal1 },
                    { value: data.creditoPersonal2 },
                    { value: data.creditoPersonal3 },
                    { value: data.creditoPersonal4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'creditoAutomovil',
                  label: i18n['AggregateSummary:detailTbCreditoAutomovil'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.creditoAutomovil1 },
                    { value: data.creditoAutomovil2 },
                    { value: data.creditoAutomovil3 },
                    { value: data.creditoAutomovil4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'avales',
                  label: i18n['AggregateSummary:detailTbAvales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.avales1 },
                    { value: data.avales2 },
                    { value: data.avales3 },
                    { value: data.avales4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'otrosAvales',
                  label: i18n['AggregateSummary:detailTbOtrosAvales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrosAvales1 },
                    { value: data.otrosAvales2 },
                    { value: data.otrosAvales3 },
                    { value: data.otrosAvales4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'financiacion',
                  label: i18n['AggregateSummary:detailTbFinanciacion'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.financiacion1 },
                    { value: data.financiacion2 },
                    { value: data.financiacion3 },
                    { value: data.financiacion4 }
                  ]
                },
                {
                  type: 'text',
                  name: 'otrosBis',
                  label: i18n['AggregateSummary:detailTbOtrosBis'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrosBis1 },
                    { value: data.otrosBis2 },
                    { value: data.otrosBis3 },
                    { value: data.otrosBis4 }
                  ]
                }
              ].map(({ type, name, label, values, subIndex, bold }, counter) => (
                <div className={classes.divFlex} key={counter}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}>
                    <DataElementsInput
                      type={type}
                      name={name}
                      label={label}
                      values={values}
                      bold={bold}
                      subIndex={subIndex}
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

export { AggregateSummary }
