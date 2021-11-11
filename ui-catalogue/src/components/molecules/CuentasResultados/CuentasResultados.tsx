import React from 'react'
import { ICuentasResultados } from './types'
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

const CuentasResultados: React.FC<ICuentasResultados> = ({
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
                {i18n['CuentaResultados:title']}
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
                  name: 'ventasNetas',
                  label: i18n['CuentaResultados:detailTbVentasNetas'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.ventasNetas1 },
                    { value: data.ventasNetas2 },
                    { value: data.ventasNetas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'variacionExistencias',
                  label: i18n['CuentaResultados:detailTbVariacionExistencias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.variacionExistencias1 },
                    { value: data.variacionExistencias2 },
                    { value: data.variacionExistencias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'trabajosInmovilizado',
                  label: i18n['CuentaResultados:detailTbTrabajosInmovilizado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.trabajosInmovilizado1 },
                    { value: data.trabajosInmovilizado2 },
                    { value: data.trabajosInmovilizado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosIngresos',
                  label: i18n['CuentaResultados:detailTbOtrosIngresos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrosIngresos1 },
                    { value: data.otrosIngresos2 },
                    { value: data.otrosIngresos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'valorProducción',
                  label: i18n['CuentaResultados:detailTbValorProducción'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.valorProducción1 },
                    { value: data.valorProducción2 },
                    { value: data.valorProducción3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'aprovisionamientos',
                  label: i18n['CuentaResultados:detailTbAprovisionamientos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.aprovisionamientos1 },
                    { value: data.aprovisionamientos2 },
                    { value: data.aprovisionamientos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'materiasPrimas',
                  label: i18n['CuentaResultados:detailTbMateriasPrimas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.materiasPrimas1 },
                    { value: data.materiasPrimas2 },
                    { value: data.materiasPrimas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'subcontragos',
                  label: i18n['CuentaResultados:detailTbSubcontragos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.subcontragos1 },
                    { value: data.subcontragos2 },
                    { value: data.subcontragos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'brutoExplotación',
                  label: i18n['CuentaResultados:detailTbBrutoExplotación'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.brutoExplotación1 },
                    { value: data.brutoExplotación2 },
                    { value: data.brutoExplotación3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastosOperativos',
                  label: i18n['CuentaResultados:detailTbGastosOperativos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.gastosOperativos1 },
                    { value: data.gastosOperativos2 },
                    { value: data.gastosOperativos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'dotaciónInmovilizado',
                  label: i18n['CuentaResultados:detailTbDotaciónInmovilizado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.dotaciónInmovilizado1 },
                    { value: data.dotaciónInmovilizado2 },
                    { value: data.dotaciónInmovilizado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provTrafico',
                  label: i18n['CuentaResultados:detailTbProvTrafico'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.provTrafico1 },
                    { value: data.provTrafico2 },
                    { value: data.provTrafico3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosGastos',
                  label: i18n['CuentaResultados:detailTbOtrosGastos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrosGastos1 },
                    { value: data.otrosGastos2 },
                    { value: data.otrosGastos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'costesReorganiczacion',
                  label: i18n['CuentaResultados:detailTbCostesReorganiczacion'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.costesReorganiczacion1 },
                    { value: data.costesReorganiczacion2 },
                    { value: data.costesReorganiczacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'netoExplotación',
                  label: i18n['CuentaResultados:detailTbNetoExplotación'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.netoExplotación1 },
                    { value: data.netoExplotación2 },
                    { value: data.netoExplotación3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastosFinancieros',
                  label: i18n['CuentaResultados:detailTbGastosFinancieros'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.gastosFinancieros1 },
                    { value: data.gastosFinancieros2 },
                    { value: data.gastosFinancieros3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'interesesSimilares',
                  label: i18n['CuentaResultados:detailTbInteresesSimilares'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.interesesSimilares1 },
                    { value: data.interesesSimilares2 },
                    { value: data.interesesSimilares3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidasInversiones',
                  label: i18n['CuentaResultados:detailTbPerdidasInversiones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.perdidasInversiones1 },
                    { value: data.perdidasInversiones2 },
                    { value: data.perdidasInversiones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosGastosFinancieros',
                  label: i18n['CuentaResultados:detailTbOtrosGastosFinancieros'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrosGastosFinancieros1 },
                    { value: data.otrosGastosFinancieros2 },
                    { value: data.otrosGastosFinancieros3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosFinancieros',
                  label: i18n['CuentaResultados:detailTbIngresosFinancieros'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresosFinancieros1 },
                    { value: data.ingresosFinancieros2 },
                    { value: data.ingresosFinancieros3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosInmoFinanciero',
                  label: i18n['CuentaResultados:detailTbIngresosInmoFinanciero'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresosInmoFinanciero1 },
                    { value: data.ingresosInmoFinanciero2 },
                    { value: data.ingresosInmoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosGrupo',
                  label: i18n['CuentaResultados:detailTbIngresosGrupo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresosGrupo1 },
                    { value: data.ingresosGrupo2 },
                    { value: data.ingresosGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosInversores',
                  label: i18n['CuentaResultados:detailTbIngresosInversores'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresosInversores1 },
                    { value: data.ingresosInversores2 },
                    { value: data.ingresosInversores3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ordinario',
                  label: i18n['CuentaResultados:detailTbOrdinario'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.ordinario1 },
                    { value: data.ordinario2 },
                    { value: data.ordinario3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'impuestos',
                  label: i18n['CuentaResultados:detailTbImpuestos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.impuestos1 },
                    { value: data.impuestos2 },
                    { value: data.impuestos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'impuestosAntex',
                  label: i18n['CuentaResultados:detailTbImpuestosAntex'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.impuestosAntex1 },
                    { value: data.impuestosAntex2 },
                    { value: data.impuestosAntex3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosExtraordinarios',
                  label: i18n['CuentaResultados:detailTbIngresosExtraordinarios'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresosExtraordinarios1 },
                    { value: data.ingresosExtraordinarios2 },
                    { value: data.ingresosExtraordinarios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastosExtraordinarios',
                  label: i18n['CuentaResultados:detailTbGastosExtraordinarios'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.gastosExtraordinarios1 },
                    { value: data.gastosExtraordinarios2 },
                    { value: data.gastosExtraordinarios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'extraordinarios',
                  label: i18n['CuentaResultados:detailTbExtraordinarios'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.extraordinarios1 },
                    { value: data.extraordinarios2 },
                    { value: data.extraordinarios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'impuestoExtraordinarios',
                  label: i18n['CuentaResultados:detailTbImpuestoExtraordinarios'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.impuestoExtraordinarios1 },
                    { value: data.impuestoExtraordinarios2 },
                    { value: data.impuestoExtraordinarios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficios',
                  label: i18n['CuentaResultados:detailTbBeneficios'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.beneficios1 },
                    { value: data.beneficios2 },
                    { value: data.beneficios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'participacionAccionistas',
                  label: i18n['CuentaResultados:detailTbParticipacionAccionistas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.participacionAccionistas1 },
                    { value: data.participacionAccionistas2 },
                    { value: data.participacionAccionistas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'participacionEmpleados',
                  label: i18n['CuentaResultados:detailTbParticipacionEmpleados'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.participacionEmpleados1 },
                    { value: data.participacionEmpleados2 },
                    { value: data.participacionEmpleados3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ajusteIngresos',
                  label: i18n['CuentaResultados:detailTbAjusteIngresos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ajusteIngresos1 },
                    { value: data.ajusteIngresos2 },
                    { value: data.ajusteIngresos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'tercerasPartes',
                  label: i18n['CuentaResultados:detailTbTercerasPartes'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.tercerasPartes1 },
                    { value: data.tercerasPartes2 },
                    { value: data.tercerasPartes3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficioNeto',
                  label: i18n['CuentaResultados:detailTbBeneficioNeto'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.beneficioNeto1 },
                    { value: data.beneficioNeto2 },
                    { value: data.beneficioNeto3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidasNetas',
                  label: i18n['CuentaResultados:detailTbPerdidasNetas'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.perdidasNetas1 },
                    { value: data.perdidasNetas2 },
                    { value: data.perdidasNetas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'exportaciones',
                  label: i18n['CuentaResultados:detailTbExportaciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.exportaciones1 },
                    { value: data.exportaciones2 },
                    { value: data.exportaciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'distribIniciales',
                  label: i18n['CuentaResultados:detailTbDistribIniciales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.distribIniciales1 },
                    { value: data.distribIniciales2 },
                    { value: data.distribIniciales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosNetos',
                  label: i18n['CuentaResultados:detailTbIngresosNetos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresosNetos1 },
                    { value: data.ingresosNetos2 },
                    { value: data.ingresosNetos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasAcciones',
                  label: i18n['CuentaResultados:detailTbOtrasAcciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrasAcciones1 },
                    { value: data.otrasAcciones2 },
                    { value: data.otrasAcciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidasNetasBis',
                  label: i18n['CuentaResultados:detailTbPerdidasNetasBis'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.perdidasNetasBis1 },
                    { value: data.perdidasNetasBis2 },
                    { value: data.perdidasNetasBis3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'dividendos',
                  label: i18n['CuentaResultados:detailTbDividendos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.dividendos1 },
                    { value: data.dividendos2 },
                    { value: data.dividendos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'retenciones',
                  label: i18n['CuentaResultados:detailTbRetenciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.retenciones1 },
                    { value: data.retenciones2 },
                    { value: data.retenciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasDeducciones',
                  label: i18n['CuentaResultados:detailTbOtrasDeducciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.otrasDeducciones1 },
                    { value: data.otrasDeducciones2 },
                    { value: data.otrasDeducciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficiosDistribuidos',
                  label: i18n['CuentaResultados:detailTbBeneficiosDistribuidos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.beneficiosDistribuidos1 },
                    { value: data.beneficiosDistribuidos2 },
                    { value: data.beneficiosDistribuidos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'salariosDirectores',
                  label: i18n['CuentaResultados:detailTbSalariosDirectores'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.salariosDirectores1 },
                    { value: data.salariosDirectores2 },
                    { value: data.salariosDirectores3 }
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

export { CuentasResultados }
