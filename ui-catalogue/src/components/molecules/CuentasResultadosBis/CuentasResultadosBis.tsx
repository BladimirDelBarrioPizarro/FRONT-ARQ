import React from 'react'
import { ICuentasResultadosBis } from './types'
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

const CuentasResultadosBis: React.FC<ICuentasResultadosBis> = ({
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
                {i18n['CuentaResultadosBis:title']}
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
                      {i18n['CuentaResultadosBis:labelTbEjercicio1']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['CuentaResultadosBis:labelTbEjercicio2']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['CuentaResultadosBis:labelTbEjercicio3']}
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              {[
                {
                  type: 'number',
                  name: 'ventasMercancias',
                  label: i18n['CuentaResultadosBis:detailTbVentasMercancias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ventasMercancias1 },
                    { value: data.ventasMercancias2 },
                    { value: data.ventasMercancias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ventasBienes',
                  label: i18n['CuentaResultadosBis:detailTbVentasBienes'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ventasBienes1 },
                    { value: data.ventasBienes2 },
                    { value: data.ventasBienes3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio1 },
                    { value: data.prestacionServicio2 },
                    { value: data.prestacionServicio3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio_1',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio_11 },
                    { value: data.prestacionServicio_12 },
                    { value: data.prestacionServicio_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio_2',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio_21 },
                    { value: data.prestacionServicio_22 },
                    { value: data.prestacionServicio_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio_3',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio_31 },
                    { value: data.prestacionServicio_32 },
                    { value: data.prestacionServicio_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio_4',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio_41 },
                    { value: data.prestacionServicio_42 },
                    { value: data.prestacionServicio_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio_5',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio_51 },
                    { value: data.prestacionServicio_52 },
                    { value: data.prestacionServicio_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestacionServicio_6',
                  label: i18n['CuentaResultadosBis:detailTbPrestacionServicio_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.prestacionServicio_61 },
                    { value: data.prestacionServicio_62 },
                    { value: data.prestacionServicio_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.totalIngresos1 },
                    { value: data.totalIngresos2 },
                    { value: data.totalIngresos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_1',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_11 },
                    { value: data.totalIngresos_12 },
                    { value: data.totalIngresos_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_2',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_21 },
                    { value: data.totalIngresos_22 },
                    { value: data.totalIngresos_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_3',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_31 },
                    { value: data.totalIngresos_32 },
                    { value: data.totalIngresos_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_4',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_41 },
                    { value: data.totalIngresos_42 },
                    { value: data.totalIngresos_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_5',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_51 },
                    { value: data.totalIngresos_52 },
                    { value: data.totalIngresos_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_6',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_61 },
                    { value: data.totalIngresos_62 },
                    { value: data.totalIngresos_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_7',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_7'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_71 },
                    { value: data.totalIngresos_72 },
                    { value: data.totalIngresos_73 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_8',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_8'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_81 },
                    { value: data.totalIngresos_82 },
                    { value: data.totalIngresos_83 }
                  ]
                },
                {
                  type: 'number',
                  name: 'dotaciones',
                  label: i18n['CuentaResultadosBis:detailTbDotaciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.dotaciones1 },
                    { value: data.dotaciones2 },
                    { value: data.dotaciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_9',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_9'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_91 },
                    { value: data.totalIngresos_92 },
                    { value: data.totalIngresos_93 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_10',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_10'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_101 },
                    { value: data.totalIngresos_102 },
                    { value: data.totalIngresos_103 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_11',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_11'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_111 },
                    { value: data.totalIngresos_112 },
                    { value: data.totalIngresos_113 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_12',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_12'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_121 },
                    { value: data.totalIngresos_122 },
                    { value: data.totalIngresos_123 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresos_13',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresos_13'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresos_131 },
                    { value: data.totalIngresos_132 },
                    { value: data.totalIngresos_133 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalExplotacion',
                  label: i18n['CuentaResultadosBis:detailTbTotalExplotacion'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.totalExplotacion1 },
                    { value: data.totalExplotacion2 },
                    { value: data.totalExplotacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalExplotacion_1',
                  label: i18n['CuentaResultadosBis:detailTbTotalExplotacion_1'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.totalExplotacion_11 },
                    { value: data.totalExplotacion_12 },
                    { value: data.totalExplotacion_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficio',
                  label: i18n['CuentaResultadosBis:detailTbBeneficio'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.beneficio1 },
                    { value: data.beneficio2 },
                    { value: data.beneficio3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado',
                  label: i18n['CuentaResultadosBis:detailTbResultado'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.resultado1 },
                    { value: data.resultado2 },
                    { value: data.resultado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado_1',
                  label: i18n['CuentaResultadosBis:detailTbResultado_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.resultado_11 },
                    { value: data.resultado_12 },
                    { value: data.resultado_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado_2',
                  label: i18n['CuentaResultadosBis:detailTbResultado_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.resultado_21 },
                    { value: data.resultado_22 },
                    { value: data.resultado_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado_3',
                  label: i18n['CuentaResultadosBis:detailTbResultado_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.resultado_31 },
                    { value: data.resultado_32 },
                    { value: data.resultado_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado_4',
                  label: i18n['CuentaResultadosBis:detailTbResultado_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.resultado_41 },
                    { value: data.resultado_42 },
                    { value: data.resultado_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado_5',
                  label: i18n['CuentaResultadosBis:detailTbResultado_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.resultado_51 },
                    { value: data.resultado_52 },
                    { value: data.resultado_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultado_6',
                  label: i18n['CuentaResultadosBis:detailTbResultado_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.resultado_61 },
                    { value: data.resultado_62 },
                    { value: data.resultado_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresoFinanciero',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresoFinanciero'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.totalIngresoFinanciero1 },
                    { value: data.totalIngresoFinanciero2 },
                    { value: data.totalIngresoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngreso_1',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngreso_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngreso_11 },
                    { value: data.totalIngreso_12 },
                    { value: data.totalIngreso_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngreso_2',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngreso_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngreso_21 },
                    { value: data.totalIngreso_22 },
                    { value: data.totalIngreso_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngreso_3',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngreso_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngreso_31 },
                    { value: data.totalIngreso_32 },
                    { value: data.totalIngreso_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngreso_4',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngreso_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngreso_41 },
                    { value: data.totalIngreso_42 },
                    { value: data.totalIngreso_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalGastoFinanciero',
                  label: i18n['CuentaResultadosBis:detailTbTotalGastoFinanciero'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.totalGastoFinanciero1 },
                    { value: data.totalGastoFinanciero2 },
                    { value: data.totalGastoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultadoFinanciero',
                  label: i18n['CuentaResultadosBis:detailTbResultadoFinanciero'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.resultadoFinanciero1 },
                    { value: data.resultadoFinanciero2 },
                    { value: data.resultadoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultadoOrdinario',
                  label: i18n['CuentaResultadosBis:detailTbResultadoOrdinario'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.resultadoOrdinario1 },
                    { value: data.resultadoOrdinario2 },
                    { value: data.resultadoOrdinario3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresoExcep_1',
                  label: i18n['CuentaResultadosBis:detailTbIngresoExcep_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresoExcep_11 },
                    { value: data.ingresoExcep_12 },
                    { value: data.ingresoExcep_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresoExcep_2',
                  label: i18n['CuentaResultadosBis:detailTbIngresoExcep_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresoExcep_21 },
                    { value: data.ingresoExcep_22 },
                    { value: data.ingresoExcep_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresoExcep_3',
                  label: i18n['CuentaResultadosBis:detailTbIngresoExcep_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ingresoExcep_31 },
                    { value: data.ingresoExcep_32 },
                    { value: data.ingresoExcep_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresoExtra',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresoExtra'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.totalIngresoExtra1 },
                    { value: data.totalIngresoExtra2 },
                    { value: data.totalIngresoExtra3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresoExtra_1',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresoExtra_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresoExtra_11 },
                    { value: data.totalIngresoExtra_12 },
                    { value: data.totalIngresoExtra_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresoExtra_2',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresoExtra_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresoExtra_21 },
                    { value: data.totalIngresoExtra_22 },
                    { value: data.totalIngresoExtra_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngresoExtra_3',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngresoExtra_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngresoExtra_31 },
                    { value: data.totalIngresoExtra_32 },
                    { value: data.totalIngresoExtra_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalGastoExtra_h',
                  label: i18n['CuentaResultadosBis:detailTbTotalGastoExtra_h'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.totalGastoExtra_h1 },
                    { value: data.totalGastoExtra_h2 },
                    { value: data.totalGastoExtra_h3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalGastoExtra_4',
                  label: i18n['CuentaResultadosBis:detailTbTotalGastoExtra_4'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.totalGastoExtra_41 },
                    { value: data.totalGastoExtra_42 },
                    { value: data.totalGastoExtra_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalGastoExtra_41',
                  label: i18n['CuentaResultadosBis:detailTbTotalGastoExtra_41'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalGastoExtra_411 },
                    { value: data.totalGastoExtra_412 },
                    { value: data.totalGastoExtra_413 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalGastoExtra_42',
                  label: i18n['CuentaResultadosBis:detailTbTotalGastoExtra_42'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalGastoExtra_421 },
                    { value: data.totalGastoExtra_422 },
                    { value: data.totalGastoExtra_423 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalIngreso',
                  label: i18n['CuentaResultadosBis:detailTbTotalIngreso'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalIngreso1 },
                    { value: data.totalIngreso2 },
                    { value: data.totalIngreso3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalGasto',
                  label: i18n['CuentaResultadosBis:detailTbTotalGasto'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.totalGasto1 },
                    { value: data.totalGasto2 },
                    { value: data.totalGasto3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'resultadoEjercicio',
                  label: i18n['CuentaResultadosBis:detailTbResultadoEjercicio'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.resultadoEjercicio1 },
                    { value: data.resultadoEjercicio2 },
                    { value: data.resultadoEjercicio3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasCuentas',
                  label: i18n['CuentaResultadosBis:detailTbOtrasCuentas'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.otrasCuentas1 },
                    { value: data.otrasCuentas2 },
                    { value: data.otrasCuentas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ebitda',
                  label: i18n['CuentaResultadosBis:detailTbEbitda'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.ebitda1 },
                    { value: data.ebitda2 },
                    { value: data.ebitda3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastoPersonal',
                  label: i18n['CuentaResultadosBis:detailTbGastoPersonal'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.gastoPersonal1 },
                    { value: data.gastoPersonal2 },
                    { value: data.gastoPersonal3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'compras',
                  label: i18n['CuentaResultadosBis:detailTbCompras'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.compras1 },
                    { value: data.compras2 },
                    { value: data.compras3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cashFlow',
                  label: i18n['CuentaResultadosBis:detailTbCashFlow'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.cashFlow1 },
                    { value: data.cashFlow2 },
                    { value: data.cashFlow3 }
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

export { CuentasResultadosBis }
