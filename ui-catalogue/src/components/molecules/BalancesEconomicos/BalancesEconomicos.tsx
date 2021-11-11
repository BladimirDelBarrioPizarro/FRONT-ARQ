import React from 'react'
import { IBalancesEconomicos } from './types'
import {
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'

import {
  BalancesElementsInput
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
  labelStyleBold: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    padding: '5px'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '95%',
    marginRight: '6rem'
  },
  divTittleFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '95%',
    marginRight: '6rem',
    textAlign: 'center'
  }
})

const BalancesEconomicos: React.FC<IBalancesEconomicos> = ({
  i18n,
  data,
  bis
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
                {i18n['BalancesEconomicos:title']} {bis ? ' 2' : ''}
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
              <div className={classes.divTittleFlex}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}>
                  <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>

                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['BalancesEconomicos:labelTbEjercicio1']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['BalancesEconomicos:labelTbEjercicio2']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['BalancesEconomicos:labelTbEjercicio3']}
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              {[
                {
                  type: 'number',
                  name: 'planEstado',
                  label: i18n['BalancesEconomicos:detailTbPlanEstado'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.planEstado1 },
                    { value: data.planEstado2 },
                    { value: data.planEstado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fechaFinEstado',
                  label: i18n['BalancesEconomicos:detailTbFechaFinEstado'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.fechaFinEstado1 },
                    { value: data.fechaFinEstado2 },
                    { value: data.fechaFinEstado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'numMeses',
                  label: i18n['BalancesEconomicos:detailTbNumMeses'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.numMeses1 },
                    { value: data.numMeses2 },
                    { value: data.numMeses3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'indAudit',
                  label: i18n['BalancesEconomicos:detailTbIndAudit'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.indAudit1 },
                    { value: data.indAudit2 },
                    { value: data.indAudit3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'indCalifAudit',
                  label: i18n['BalancesEconomicos:detailTbIndCalifAudit'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.indCalifAudit1 },
                    { value: data.indCalifAudit2 },
                    { value: data.indCalifAudit3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ambInfo',
                  label: i18n['BalancesEconomicos:detailTbAmbInfo'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.ambInfo1 },
                    { value: data.ambInfo2 },
                    { value: data.ambInfo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'codigoFiabilidad',
                  label: i18n['BalancesEconomicos:detailTbCodigoFiabilidad'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.codigoFiabilidad1 },
                    { value: data.codigoFiabilidad2 },
                    { value: data.codigoFiabilidad3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'indFinal',
                  label: i18n['BalancesEconomicos:detailTbIndFinal'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.indFinal1 },
                    { value: data.indFinal2 },
                    { value: data.indFinal3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'indFirma',
                  label: i18n['BalancesEconomicos:detailTbIndFirma'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.indFirma1 },
                    { value: data.indFirma2 },
                    { value: data.indFirma3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'indDeseq',
                  label: i18n['BalancesEconomicos:detailTbIndDeseq'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.indDeseq1 },
                    { value: data.indDeseq2 },
                    { value: data.indDeseq3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'numEmpleado',
                  label: i18n['BalancesEconomicos:detailTbNumEmpleado'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.numEmpleado1 },
                    { value: data.numEmpleado2 },
                    { value: data.numEmpleado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'codDivisaFinanciero',
                  label: i18n['BalancesEconomicos:detailTbCodDivisaFinanciero'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.codDivisaFinanciero1 },
                    { value: data.codDivisaFinanciero2 },
                    { value: data.codDivisaFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'unidadFinanciero',
                  label: i18n['BalancesEconomicos:detailTbUnidadFinanciero'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.unidadFinanciero1 },
                    { value: data.unidadFinanciero2 },
                    { value: data.unidadFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'razon',
                  label: i18n['BalancesEconomicos:detailTbRazon'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.razon1 },
                    { value: data.razon2 },
                    { value: data.razon3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmobilizadoNeto',
                  label: i18n['BalancesEconomicos:detailTbInmobilizadoNeto'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.inmobilizadoNeto1 },
                    { value: data.inmobilizadoNeto2 },
                    { value: data.inmobilizadoNeto3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'activoCirculante',
                  label: i18n['BalancesEconomicos:detailTbActivoCirculante'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.activoCirculante1 },
                    { value: data.activoCirculante2 },
                    { value: data.activoCirculante3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios',
                  label: i18n['BalancesEconomicos:detailTbFondosPropios'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.fondosPropios1 },
                    { value: data.fondosPropios2 },
                    { value: data.fondosPropios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'capital',
                  label: i18n['BalancesEconomicos:detailTbCapital'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.capital1 },
                    { value: data.capital2 },
                    { value: data.capital3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreeLargoPlazo',
                  label: i18n['BalancesEconomicos:detailTbAcreeLargoPlazo'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.acreeLargoPlazo1 },
                    { value: data.acreeLargoPlazo2 },
                    { value: data.acreeLargoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreeCortoPlazo',
                  label: i18n['BalancesEconomicos:detailTbAcreeCortoPlazo'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.acreeCortoPlazo1 },
                    { value: data.acreeCortoPlazo2 },
                    { value: data.acreeCortoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totDeudas',
                  label: i18n['BalancesEconomicos:detailTbTotDeudas'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.totDeudas1 },
                    { value: data.totDeudas2 },
                    { value: data.totDeudas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totActivoPasivo',
                  label: i18n['BalancesEconomicos:detailTbTotActivoPasivo'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.totActivoPasivo1 },
                    { value: data.totActivoPasivo2 },
                    { value: data.totActivoPasivo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'calProduccion',
                  label: i18n['BalancesEconomicos:detailTbCalProduccion'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.calProduccion1 },
                    { value: data.calProduccion2 },
                    { value: data.calProduccion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ventasNetas',
                  label: i18n['BalancesEconomicos:detailTbVentasNetas'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.ventasNetas1 },
                    { value: data.ventasNetas2 },
                    { value: data.ventasNetas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'netoExplotacion',
                  label: i18n['BalancesEconomicos:detailTbNetoExplotacion'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.netoExplotacion1 },
                    { value: data.netoExplotacion2 },
                    { value: data.netoExplotacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'activOrdinarias',
                  label: i18n['BalancesEconomicos:detailTbActivOrdinarias'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.activOrdinarias1 },
                    { value: data.activOrdinarias2 },
                    { value: data.activOrdinarias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidas',
                  label: i18n['BalancesEconomicos:detailTbPerdidas'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.perdidas1 },
                    { value: data.perdidas2 },
                    { value: data.perdidas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficios',
                  label: i18n['BalancesEconomicos:detailTbBeneficios'],
                  subIndex: bis,
                  bold: false,
                  values: [
                    { value: data.beneficios1 },
                    { value: data.beneficios2 },
                    { value: data.beneficios3 }
                  ]
                }
              ].map(({ type, name, label, values, subIndex, bold }, counter) => (
                <div className={classes.divFlex} key={counter}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}>
                    <BalancesElementsInput
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

export { BalancesEconomicos }
