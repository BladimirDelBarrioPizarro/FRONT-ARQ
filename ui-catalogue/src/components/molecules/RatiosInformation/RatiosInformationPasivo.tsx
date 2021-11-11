import React from 'react'
import { IRatiosInformation } from './types'
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

const RatiosInformationPasivo: React.FC<IRatiosInformation> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
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
                      {i18n['RatiosInformation:labelTbEjercicio1']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['RatiosInformation:labelTbEjercicio2']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['RatiosInformation:labelTbEjercicio3']}
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              {[
                {
                  type: 'number',
                  name: 'fondosPropios',
                  label: i18n['RatiosInformation:detailTbFondosPropios'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.ratiosFondosPropios1 },
                    { value: data.pasivo.ratiosFondosPropios2 },
                    { value: data.pasivo.ratiosFondosPropios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totCapital',
                  label: i18n['RatiosInformation:detailTbTotCapital'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.totCapital1 },
                    { value: data.pasivo.totCapital2 },
                    { value: data.pasivo.totCapital3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'capital',
                  label: i18n['RatiosInformation:detailTbCapital'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.ratiosCapital1 },
                    { value: data.pasivo.ratiosCapital2 },
                    { value: data.pasivo.ratiosCapital3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'accionesPref',
                  label: i18n['RatiosInformation:detailTbAccionesPref'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.accionesPref1 },
                    { value: data.pasivo.accionesPref2 },
                    { value: data.pasivo.accionesPref3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'capitalEmitido',
                  label: i18n['RatiosInformation:detailTbCapitalEmitido'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.capitalEmitido1 },
                    { value: data.pasivo.capitalEmitido2 },
                    { value: data.pasivo.capitalEmitido3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'capitalDesembolsado',
                  label: i18n['RatiosInformation:detailTbCapitalDesembolsado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.capitalDesembolsado1 },
                    { value: data.pasivo.capitalDesembolsado2 },
                    { value: data.pasivo.capitalDesembolsado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'primaEmision',
                  label: i18n['RatiosInformation:detailTbPrimaEmision'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.primaEmision1 },
                    { value: data.pasivo.primaEmision2 },
                    { value: data.pasivo.primaEmision3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totReservas',
                  label: i18n['RatiosInformation:detailTbTotReservas'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.totReservas1 },
                    { value: data.pasivo.totReservas2 },
                    { value: data.pasivo.totReservas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservas',
                  label: i18n['RatiosInformation:detailTbReservas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservas1 },
                    { value: data.pasivo.reservas2 },
                    { value: data.pasivo.reservas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'exceCapital',
                  label: i18n['RatiosInformation:detailTbExceCapital'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.exceCapital1 },
                    { value: data.pasivo.exceCapital2 },
                    { value: data.pasivo.exceCapital3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservaLegal',
                  label: i18n['RatiosInformation:detailTbReservaLegal'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservaLegal1 },
                    { value: data.pasivo.reservaLegal2 },
                    { value: data.pasivo.reservaLegal3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservaNoDisp',
                  label: i18n['RatiosInformation:detailTbReservaNoDisp'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservaNoDisp1 },
                    { value: data.pasivo.reservaNoDisp2 },
                    { value: data.pasivo.reservaNoDisp3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservaVolunt',
                  label: i18n['RatiosInformation:detailTbReservaVolunt'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservaVolunt1 },
                    { value: data.pasivo.reservaVolunt2 },
                    { value: data.pasivo.reservaVolunt3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservaAccionesPropias',
                  label: i18n['RatiosInformation:detailTbReservaAccionesPropias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservaAccionesPropias1 },
                    { value: data.pasivo.reservaAccionesPropias2 },
                    { value: data.pasivo.reservaAccionesPropias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservasEstatutarias',
                  label: i18n['RatiosInformation:detailTbReservasEstatutarias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservasEstatutarias1 },
                    { value: data.pasivo.reservasEstatutarias2 },
                    { value: data.pasivo.reservasEstatutarias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservasDisponibles',
                  label: i18n['RatiosInformation:detailTbReservasDisponibles'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservasDisponibles1 },
                    { value: data.pasivo.reservasDisponibles2 },
                    { value: data.pasivo.reservasDisponibles3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasReservas',
                  label: i18n['RatiosInformation:detailTbOtrasReservas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasReservas1 },
                    { value: data.pasivo.otrasReservas2 },
                    { value: data.pasivo.otrasReservas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'reservasRevalorizacion',
                  label: i18n['RatiosInformation:detailTbReservasRevalorizacion'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.reservasRevalorizacion1 },
                    { value: data.pasivo.reservasRevalorizacion2 },
                    { value: data.pasivo.reservasRevalorizacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acumulada',
                  label: i18n['RatiosInformation:detailTbAcumulada'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.acumulada1 },
                    { value: data.pasivo.acumulada2 },
                    { value: data.pasivo.acumulada3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficioEjerAnt',
                  label: i18n['RatiosInformation:detailTbBeneficioEjerAnt'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.beneficioEjerAnt1 },
                    { value: data.pasivo.beneficioEjerAnt2 },
                    { value: data.pasivo.beneficioEjerAnt3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidasEjerAnt',
                  label: i18n['RatiosInformation:detailTbPerdidasEjerAnt'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.perdidasEjerAnt1 },
                    { value: data.pasivo.perdidasEjerAnt2 },
                    { value: data.pasivo.perdidasEjerAnt3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'noDistribuido',
                  label: i18n['RatiosInformation:detailTbNoDistribuido'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.noDistribuido1 },
                    { value: data.pasivo.noDistribuido2 },
                    { value: data.pasivo.noDistribuido3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficiosNoDistribuido',
                  label: i18n['RatiosInformation:detailTbBeneficiosNoDistribuido'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.beneficiosNoDistribuido1 },
                    { value: data.pasivo.beneficiosNoDistribuido2 },
                    { value: data.pasivo.beneficiosNoDistribuido3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidasGanancias',
                  label: i18n['RatiosInformation:detailTbPerdidasGanancias'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.perdidasGanancias1 },
                    { value: data.pasivo.perdidasGanancias2 },
                    { value: data.pasivo.perdidasGanancias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'perdidasEjer',
                  label: i18n['RatiosInformation:detailTbPerdidasEjer'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.perdidasEjer1 },
                    { value: data.pasivo.perdidasEjer2 },
                    { value: data.pasivo.perdidasEjer3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'beneficiosEjer',
                  label: i18n['RatiosInformation:detailTbBeneficiosEjer'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.beneficiosEjer1 },
                    { value: data.pasivo.beneficiosEjer2 },
                    { value: data.pasivo.beneficiosEjer3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'dividendoEjer',
                  label: i18n['RatiosInformation:detailTbDividendoEjer'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.dividendoEjer1 },
                    { value: data.pasivo.dividendoEjer2 },
                    { value: data.pasivo.dividendoEjer3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provReservas',
                  label: i18n['RatiosInformation:detailTbProvReservas'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.provReservas1 },
                    { value: data.pasivo.provReservas2 },
                    { value: data.pasivo.provReservas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'interesMinoritario',
                  label: i18n['RatiosInformation:detailTbInteresMinoritario'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.interesMinoritario1 },
                    { value: data.pasivo.interesMinoritario2 },
                    { value: data.pasivo.interesMinoritario3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosVariosEjer',
                  label: i18n['RatiosInformation:detailTbIngresosVariosEjer'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.ingresosVariosEjer1 },
                    { value: data.pasivo.ingresosVariosEjer2 },
                    { value: data.pasivo.ingresosVariosEjer3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'subvencionesCapital',
                  label: i18n['RatiosInformation:detailTbSubvencionesCapital'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.subvencionesCapital1 },
                    { value: data.pasivo.subvencionesCapital2 },
                    { value: data.pasivo.subvencionesCapital3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'riesgosGastos',
                  label: i18n['RatiosInformation:detailTbRiesgosGastos'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.riesgosGastos1 },
                    { value: data.pasivo.riesgosGastos2 },
                    { value: data.pasivo.riesgosGastos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provRiesgosGastos',
                  label: i18n['RatiosInformation:detailTbProvRiesgosGastos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.provRiesgosGastos1 },
                    { value: data.pasivo.provRiesgosGastos2 },
                    { value: data.pasivo.provRiesgosGastos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provPensiones',
                  label: i18n['RatiosInformation:detailTbProvPensiones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.provPensiones1 },
                    { value: data.pasivo.provPensiones2 },
                    { value: data.pasivo.provPensiones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provImpuesto',
                  label: i18n['RatiosInformation:detailTbProvImpuesto'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.provImpuesto1 },
                    { value: data.pasivo.provImpuesto2 },
                    { value: data.pasivo.provImpuesto3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasProv',
                  label: i18n['RatiosInformation:detailTbOtrasProv'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasProv1 },
                    { value: data.pasivo.otrasProv2 },
                    { value: data.pasivo.otrasProv3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provCompras',
                  label: i18n['RatiosInformation:detailTbProvCompras'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.provCompras1 },
                    { value: data.pasivo.provCompras2 },
                    { value: data.pasivo.provCompras3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deprecInmo',
                  label: i18n['RatiosInformation:detailTbDeprecInmo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deprecInmo1 },
                    { value: data.pasivo.deprecInmo2 },
                    { value: data.pasivo.deprecInmo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deprecIntangible',
                  label: i18n['RatiosInformation:detailTbDeprecIntangible'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deprecIntangible1 },
                    { value: data.pasivo.deprecIntangible2 },
                    { value: data.pasivo.deprecIntangible3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provDeprecExistencias',
                  label: i18n['RatiosInformation:detailTbProvDeprecExistencias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.provDeprecExistencias1 },
                    { value: data.pasivo.provDeprecExistencias2 },
                    { value: data.pasivo.provDeprecExistencias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'creditosIncobrables',
                  label: i18n['RatiosInformation:detailTbCreditosIncobrables'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.creditosIncobrables1 },
                    { value: data.pasivo.creditosIncobrables2 },
                    { value: data.pasivo.creditosIncobrables3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deprecInmovilizado',
                  label: i18n['RatiosInformation:detailTbDeprecInmovilizado'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deprecInmovilizado1 },
                    { value: data.pasivo.deprecInmovilizado2 },
                    { value: data.pasivo.deprecInmovilizado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentaRegularizacion',
                  label: i18n['RatiosInformation:detailTbCuentaRegularizacion'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.cuentaRegularizacion1 },
                    { value: data.pasivo.cuentaRegularizacion2 },
                    { value: data.pasivo.cuentaRegularizacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentaCompensacion',
                  label: i18n['RatiosInformation:detailTbCuentaCompensacion'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.cuentaCompensacion1 },
                    { value: data.pasivo.cuentaCompensacion2 },
                    { value: data.pasivo.cuentaCompensacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedLargoPlazo',
                  label: i18n['RatiosInformation:detailTbAcreedLargoPlazo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.acreedLargoPlazo1 },
                    { value: data.pasivo.acreedLargoPlazo2 },
                    { value: data.pasivo.acreedLargoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasComerciales',
                  label: i18n['RatiosInformation:detailTbDeudasComerciales'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasComerciales1 },
                    { value: data.pasivo.deudasComerciales2 },
                    { value: data.pasivo.deudasComerciales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresComerciales',
                  label: i18n['RatiosInformation:detailTbAcreedoresComerciales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.acreedoresComerciales1 },
                    { value: data.pasivo.acreedoresComerciales2 },
                    { value: data.pasivo.acreedoresComerciales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosAcreedores',
                  label: i18n['RatiosInformation:detailTbOtrosAcreedores'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosAcreedores1 },
                    { value: data.pasivo.otrosAcreedores2 },
                    { value: data.pasivo.otrosAcreedores3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasRepresentadas',
                  label: i18n['RatiosInformation:detailTbDeudasRepresentadas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasRepresentadas1 },
                    { value: data.pasivo.deudasRepresentadas2 },
                    { value: data.pasivo.deudasRepresentadas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ventasPlazo',
                  label: i18n['RatiosInformation:detailTbVentasPlazo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.ventasPlazo1 },
                    { value: data.pasivo.ventasPlazo2 },
                    { value: data.pasivo.ventasPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasEmpGrupo',
                  label: i18n['RatiosInformation:detailTbDeudasEmpGrupo'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasEmpGrupo1 },
                    { value: data.pasivo.deudasEmpGrupo2 },
                    { value: data.pasivo.deudasEmpGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresGrupo',
                  label: i18n['RatiosInformation:detailTbAcreedoresGrupo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.acreedoresGrupo1 },
                    { value: data.pasivo.acreedoresGrupo2 },
                    { value: data.pasivo.acreedoresGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresAsociados',
                  label: i18n['RatiosInformation:detailTbAcreedoresAsociados'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.acreedoresAsociados1 },
                    { value: data.pasivo.acreedoresAsociados2 },
                    { value: data.pasivo.acreedoresAsociados3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasFinancieras',
                  label: i18n['RatiosInformation:detailTbDeudasFinancieras'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasFinancieras1 },
                    { value: data.pasivo.deudasFinancieras2 },
                    { value: data.pasivo.deudasFinancieras3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'obligacionesConvertibles',
                  label: i18n['RatiosInformation:detailTbObligacionesConvertibles'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.obligacionesConvertibles1 },
                    { value: data.pasivo.obligacionesConvertibles2 },
                    { value: data.pasivo.obligacionesConvertibles3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'obligacionesSimilares',
                  label: i18n['RatiosInformation:detailTbObligacionesSimilares'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.obligacionesSimilares1 },
                    { value: data.pasivo.obligacionesSimilares2 },
                    { value: data.pasivo.obligacionesSimilares3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'hipotecasPrestamos',
                  label: i18n['RatiosInformation:detailTbHipotecasPrestamos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.hipotecasPrestamos1 },
                    { value: data.pasivo.hipotecasPrestamos2 },
                    { value: data.pasivo.hipotecasPrestamos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasDeudas',
                  label: i18n['RatiosInformation:detailTbOtrasDeudasNoComerciales'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasDeudasNoComer1 },
                    { value: data.pasivo.otrasDeudasNoComer2 },
                    { value: data.pasivo.otrasDeudasNoComer3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'impuestosSeguridadSocial',
                  label: i18n['RatiosInformation:detailTbImpuestosSeguridadSocial'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.impuestosSeguridadSocial1 },
                    { value: data.pasivo.impuestosSeguridadSocial2 },
                    { value: data.pasivo.impuestosSeguridadSocial3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasPensiones',
                  label: i18n['RatiosInformation:detailTbDeudasPensiones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasPensiones1 },
                    { value: data.pasivo.deudasPensiones2 },
                    { value: data.pasivo.deudasPensiones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cobrosAnticipados',
                  label: i18n['RatiosInformation:detailTbCobrosAnticipados'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.cobrosAnticipados1 },
                    { value: data.pasivo.cobrosAnticipados2 },
                    { value: data.pasivo.cobrosAnticipados3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresCortoPlazo',
                  label: i18n['RatiosInformation:detailTbAcreedoresCortoPlazo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.acreedoresCortoPlazo1 },
                    { value: data.pasivo.acreedoresCortoPlazo2 },
                    { value: data.pasivo.acreedoresCortoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasComerciales',
                  label: i18n['RatiosInformation:detailTbDeudasComerciales'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasComercialesBis1 },
                    { value: data.pasivo.deudasComercialesBis2 },
                    { value: data.pasivo.deudasComercialesBis3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentasPagar',
                  label: i18n['RatiosInformation:detailTbCuentasPagar'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.cuentasPagar1 },
                    { value: data.pasivo.cuentasPagar2 },
                    { value: data.pasivo.cuentasPagar3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'proveedorCP',
                  label: i18n['RatiosInformation:detailTbProveedorCP'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.proveedorCP1 },
                    { value: data.pasivo.proveedorCP2 },
                    { value: data.pasivo.proveedorCP3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosAcreedoresCom',
                  label: i18n['RatiosInformation:detailTbOtrosAcreedoresCom'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosAcreedoresCom1 },
                    { value: data.pasivo.otrosAcreedoresCom2 },
                    { value: data.pasivo.otrosAcreedoresCom3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasRepreAPagar',
                  label: i18n['RatiosInformation:detailTbDeudasRepreAPagar'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasRepreAPagar1 },
                    { value: data.pasivo.deudasRepreAPagar2 },
                    { value: data.pasivo.deudasRepreAPagar3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ventaPlazos',
                  label: i18n['RatiosInformation:detailTbVentaPlazos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.ventaPlazos1 },
                    { value: data.pasivo.ventaPlazos2 },
                    { value: data.pasivo.ventaPlazos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasEmpGrupoAsoc',
                  label: i18n['RatiosInformation:detailTbDeudasEmpGrupoAsoc'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasEmpGrupoAsoc1 },
                    { value: data.pasivo.deudasEmpGrupoAsoc2 },
                    { value: data.pasivo.deudasEmpGrupoAsoc3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresEGrupo',
                  label: i18n['RatiosInformation:detailTbAcreedoresEGrupo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.acreedoresEGrupo1 },
                    { value: data.pasivo.acreedoresEGrupo2 },
                    { value: data.pasivo.acreedoresEGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestamosAdmin',
                  label: i18n['RatiosInformation:detailTbPrestamosAdmin'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.prestamosAdmin1 },
                    { value: data.pasivo.prestamosAdmin2 },
                    { value: data.pasivo.prestamosAdmin3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresEAsoc',
                  label: i18n['RatiosInformation:detailTbAcreedoresEAsoc'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.acreedoresEAsoc1 },
                    { value: data.pasivo.acreedoresEAsoc2 },
                    { value: data.pasivo.acreedoresEAsoc3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasFinancieras',
                  label: i18n['RatiosInformation:detailTbDeudasFinancieras'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasFinancierasBis1 },
                    { value: data.pasivo.deudasFinancierasBis2 },
                    { value: data.pasivo.deudasFinancierasBis3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasFinancierasLower',
                  label: i18n['RatiosInformation:detailTbDeudasFinancierasLower'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasFinancierasLower1 },
                    { value: data.pasivo.deudasFinancierasLower2 },
                    { value: data.pasivo.deudasFinancierasLower3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'pertamosBancarios',
                  label: i18n['RatiosInformation:detailTbPertamosBancarios'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.pertamosBancarios1 },
                    { value: data.pasivo.pertamosBancarios2 },
                    { value: data.pasivo.pertamosBancarios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'parteCorrienteDeuda',
                  label: i18n['RatiosInformation:detailTbParteCorrienteDeuda'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.parteCorrienteDeuda1 },
                    { value: data.pasivo.parteCorrienteDeuda2 },
                    { value: data.pasivo.parteCorrienteDeuda3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosPrestamos',
                  label: i18n['RatiosInformation:detailTbOtrosPrestamos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosPrestamos1 },
                    { value: data.pasivo.otrosPrestamos2 },
                    { value: data.pasivo.otrosPrestamos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasValoresNegociables',
                  label: i18n['RatiosInformation:detailTbDeudasValoresNegociables'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasValoresNegociables1 },
                    { value: data.pasivo.deudasValoresNegociables2 },
                    { value: data.pasivo.deudasValoresNegociables3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosPrestamosCP',
                  label: i18n['RatiosInformation:detailTbOtrosPrestamosCP'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosPrestamosCP1 },
                    { value: data.pasivo.otrosPrestamosCP2 },
                    { value: data.pasivo.otrosPrestamosCP3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasDeudasNoComerciales',
                  label: i18n['RatiosInformation:detailTbOtrasDeudasNoComerciales'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasDeudasNoComerciales1 },
                    { value: data.pasivo.otrasDeudasNoComerciales2 },
                    { value: data.pasivo.otrasDeudasNoComerciales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentasGenerales',
                  label: i18n['RatiosInformation:detailTbCuentasGenerales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.cuentasGenerales1 },
                    { value: data.pasivo.cuentasGenerales2 },
                    { value: data.pasivo.cuentasGenerales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasDeudas',
                  label: i18n['RatiosInformation:detailTbOtrasDeudas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasDeudas1 },
                    { value: data.pasivo.otrasDeudas2 },
                    { value: data.pasivo.otrasDeudas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasInmovilizado',
                  label: i18n['RatiosInformation:detailTbDeudasInmovilizado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.deudasInmovilizado1 },
                    { value: data.pasivo.deudasInmovilizado2 },
                    { value: data.pasivo.deudasInmovilizado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'impuestosSegSocial',
                  label: i18n['RatiosInformation:detailTbImpuestosSegSocial'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.impuestosSegSocial1 },
                    { value: data.pasivo.impuestosSegSocial2 },
                    { value: data.pasivo.impuestosSegSocial3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'impuestos',
                  label: i18n['RatiosInformation:detailTbImpuestos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.impuestos1 },
                    { value: data.pasivo.impuestos2 },
                    { value: data.pasivo.impuestos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'salariosSegSocial',
                  label: i18n['RatiosInformation:detailTbSalariosSegSocial'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.salariosSegSocial1 },
                    { value: data.pasivo.salariosSegSocial2 },
                    { value: data.pasivo.salariosSegSocial3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'dividendo',
                  label: i18n['RatiosInformation:detailTbDividendo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.dividendo1 },
                    { value: data.pasivo.dividendo2 },
                    { value: data.pasivo.dividendo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'declaradoAnticipado',
                  label: i18n['RatiosInformation:detailTbDeclaradoAnticipado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.declaradoAnticipado1 },
                    { value: data.pasivo.declaradoAnticipado2 },
                    { value: data.pasivo.declaradoAnticipado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cobroAnticipado',
                  label: i18n['RatiosInformation:detailTbCobroAnticipado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.cobroAnticipado1 },
                    { value: data.pasivo.cobroAnticipado2 },
                    { value: data.pasivo.cobroAnticipado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acreedoresEspeciales',
                  label: i18n['RatiosInformation:detailTbAcreedoresEspeciales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.acreedoresEspeciales1 },
                    { value: data.pasivo.acreedoresEspeciales2 },
                    { value: data.pasivo.acreedoresEspeciales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'ingresosDiferidos',
                  label: i18n['RatiosInformation:detailTbIngresosDiferidos'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.ingresosDiferidos1 },
                    { value: data.pasivo.ingresosDiferidos2 },
                    { value: data.pasivo.ingresosDiferidos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totAcreedores',
                  label: i18n['RatiosInformation:detailTbTotAcreedores'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.totAcreedores1 },
                    { value: data.pasivo.totAcreedores2 },
                    { value: data.pasivo.totAcreedores3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totPasivo',
                  label: i18n['RatiosInformation:detailTbTotPasivo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.totPasivo1 },
                    { value: data.pasivo.totPasivo2 },
                    { value: data.pasivo.totPasivo3 }
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

export { RatiosInformationPasivo }
