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

const RatiosInformationActivo: React.FC<IRatiosInformation> = ({
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
                {i18n['RatiosInformation:title']}
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
                  name: 'accNoExx',
                  label: i18n['RatiosInformation:detailTbAccNoExx'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.accNoExi1 },
                    { value: data.activo.accNoExi2 },
                    { value: data.activo.accNoExi3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmoNeto',
                  label: i18n['RatiosInformation:detailTbInmoNeto'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.inmoNeto1 },
                    { value: data.activo.inmoNeto2 },
                    { value: data.activo.inmoNeto3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastoEstabl',
                  label: i18n['RatiosInformation:detailTbGastoEstabl'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.gastoEstabl1 },
                    { value: data.activo.gastoEstabl2 },
                    { value: data.activo.gastoEstabl3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'invDesarrollo',
                  label: i18n['RatiosInformation:detailTbInvDesarrollo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.invDesarrollo1 },
                    { value: data.activo.invDesarrollo2 },
                    { value: data.activo.invDesarrollo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'patentes',
                  label: i18n['RatiosInformation:detailTbPatentes'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.patentes1 },
                    { value: data.activo.patentes2 },
                    { value: data.activo.patentes3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondoComertio',
                  label: i18n['RatiosInformation:detailTbFondoComertio'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.fondoComertio1 },
                    { value: data.activo.fondoComertio2 },
                    { value: data.activo.fondoComertio3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otroInmoInma',
                  label: i18n['RatiosInformation:detailTbOtroInmoInma'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otroInmoInma1 },
                    { value: data.activo.otroInmoInma2 },
                    { value: data.activo.otroInmoInma3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'bienesArren',
                  label: i18n['RatiosInformation:detailTbBienesArren'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.bienesArren1 },
                    { value: data.activo.bienesArren2 },
                    { value: data.activo.bienesArren3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'amorInmoMat',
                  label: i18n['RatiosInformation:detailTbAmorInmoMat'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.amorInmoMat1 },
                    { value: data.activo.amorInmoMat2 },
                    { value: data.activo.amorInmoMat3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totInmoInmat',
                  label: i18n['RatiosInformation:detailTbTotInmoInmat'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.totInmoInmat1 },
                    { value: data.activo.totInmoInmat2 },
                    { value: data.activo.totInmoInmat3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'terrenos',
                  label: i18n['RatiosInformation:detailTbTerrenos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.terrenos1 },
                    { value: data.activo.terrenos2 },
                    { value: data.activo.terrenos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'construcciones',
                  label: i18n['RatiosInformation:detailTbConstrucciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.construcciones1 },
                    { value: data.activo.construcciones2 },
                    { value: data.activo.construcciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'terrConstrucciones',
                  label: i18n['RatiosInformation:detailTbTerrConstrucciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.terrConstrucciones1 },
                    { value: data.activo.terrConstrucciones2 },
                    { value: data.activo.terrConstrucciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'maqHerra',
                  label: i18n['RatiosInformation:detailTbMaqHerra'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.maqHerra1 },
                    { value: data.activo.maqHerra2 },
                    { value: data.activo.maqHerra3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'instTecnicas',
                  label: i18n['RatiosInformation:detailTbInstTecnicas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.instTecnicas1 },
                    { value: data.activo.instTecnicas2 },
                    { value: data.activo.instTecnicas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'moviliario',
                  label: i18n['RatiosInformation:detailTbMoviliario'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.moviliario1 },
                    { value: data.activo.moviliario2 },
                    { value: data.activo.moviliario3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmoEnCurso',
                  label: i18n['RatiosInformation:detailTbInmoEnCurso'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmoEnCurso1 },
                    { value: data.activo.inmoEnCurso2 },
                    { value: data.activo.inmoEnCurso3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otroInmoMaterial',
                  label: i18n['RatiosInformation:detailTbOtroInmoMaterial'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otroInmoMaterial1 },
                    { value: data.activo.otroInmoMaterial2 },
                    { value: data.activo.otroInmoMaterial3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmoNoOpe',
                  label: i18n['RatiosInformation:detailTbInmoNoOpe'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmoNoOpe1 },
                    { value: data.activo.inmoNoOpe2 },
                    { value: data.activo.inmoNoOpe3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totInmoMat',
                  label: i18n['RatiosInformation:detailTbTotInmoMat'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.totInmoMat1 },
                    { value: data.activo.totInmoMat2 },
                    { value: data.activo.totInmoMat3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'empGrupo',
                  label: i18n['RatiosInformation:detailTbEmpGrupo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.empGrupo1 },
                    { value: data.activo.empGrupo2 },
                    { value: data.activo.empGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'empAsociada',
                  label: i18n['RatiosInformation:detailTbEmpAsociada'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.empAsociada1 },
                    { value: data.activo.empAsociada2 },
                    { value: data.activo.empAsociada3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acciones',
                  label: i18n['RatiosInformation:detailTbAcciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.acciones1 },
                    { value: data.activo.acciones2 },
                    { value: data.activo.acciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'depositos',
                  label: i18n['RatiosInformation:detailTbDepositos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.depositos1 },
                    { value: data.activo.depositos2 },
                    { value: data.activo.depositos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosDepositos',
                  label: i18n['RatiosInformation:detailTbOtrosDepositos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otrosDepositos1 },
                    { value: data.activo.otrosDepositos2 },
                    { value: data.activo.otrosDepositos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'creditoLargoPlazo',
                  label: i18n['RatiosInformation:detailTbCreditoLargoPlazo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.creditoLargoPlazo1 },
                    { value: data.activo.creditoLargoPlazo2 },
                    { value: data.activo.creditoLargoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'creditoAsociados',
                  label: i18n['RatiosInformation:detailTbCreditoAsociados'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.creditoAsociados1 },
                    { value: data.activo.creditoAsociados2 },
                    { value: data.activo.creditoAsociados3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'creditosGrupo',
                  label: i18n['RatiosInformation:detailTbCreditosGrupo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.creditosGrupo1 },
                    { value: data.activo.creditosGrupo2 },
                    { value: data.activo.creditosGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otroInmoFinanciero',
                  label: i18n['RatiosInformation:detailTbOtroInmoFinanciero'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otroInmoFinanciero1 },
                    { value: data.activo.otroInmoFinanciero2 },
                    { value: data.activo.otroInmoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmoOtros',
                  label: i18n['RatiosInformation:detailTbInmoOtros'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmoOtros1 },
                    { value: data.activo.inmoOtros2 },
                    { value: data.activo.inmoOtros3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totInmoFinanciero',
                  label: i18n['RatiosInformation:detailTbTotInmoFinanciero'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.totInmoFinanciero1 },
                    { value: data.activo.totInmoFinanciero2 },
                    { value: data.activo.totInmoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'amortizacion',
                  label: i18n['RatiosInformation:detailTbAmortizacion'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.amortizacion1 },
                    { value: data.activo.amortizacion2 },
                    { value: data.activo.amortizacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otroInmoLargoPlazo',
                  label: i18n['RatiosInformation:detailTbOtroInmoLargoPlazo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otroInmoLargoPlazo1 },
                    { value: data.activo.otroInmoLargoPlazo2 },
                    { value: data.activo.otroInmoLargoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastosDistribuir',
                  label: i18n['RatiosInformation:detailTbGastosDistribuir'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.gastosDistribuir1 },
                    { value: data.activo.gastosDistribuir2 },
                    { value: data.activo.gastosDistribuir3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'activoCirculante',
                  label: i18n['RatiosInformation:detailTbActivoCirculante'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.ratioActivoCirculante1 },
                    { value: data.activo.ratioActivoCirculante2 },
                    { value: data.activo.ratioActivoCirculante3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existenciasNetas',
                  label: i18n['RatiosInformation:detailTbExistenciasNetas'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.existenciasNetas1 },
                    { value: data.activo.existenciasNetas2 },
                    { value: data.activo.existenciasNetas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'materiasPrimas',
                  label: i18n['RatiosInformation:detailTbMateriasPrimas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.materiasPrimas1 },
                    { value: data.activo.materiasPrimas2 },
                    { value: data.activo.materiasPrimas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'productoCurso',
                  label: i18n['RatiosInformation:detailTbProductoCurso'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.productoCurso1 },
                    { value: data.activo.productoCurso2 },
                    { value: data.activo.productoCurso3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'productoTerminado',
                  label: i18n['RatiosInformation:detailTbProductoTerminado'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.productoTerminado1 },
                    { value: data.activo.productoTerminado2 },
                    { value: data.activo.productoTerminado3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'mercaderias',
                  label: i18n['RatiosInformation:detailTbMercaderias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.mercaderias1 },
                    { value: data.activo.mercaderias2 },
                    { value: data.activo.mercaderias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias',
                  label: i18n['RatiosInformation:detailTbExistencias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.existencias1 },
                    { value: data.activo.existencias2 },
                    { value: data.activo.existencias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'contratos',
                  label: i18n['RatiosInformation:detailTbContratos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.contratos1 },
                    { value: data.activo.contratos2 },
                    { value: data.activo.contratos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmiuebles',
                  label: i18n['RatiosInformation:detailTbInmiuebles'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmiuebles1 },
                    { value: data.activo.inmiuebles2 },
                    { value: data.activo.inmiuebles3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'anticipos',
                  label: i18n['RatiosInformation:detailTbAnticipos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.anticipos1 },
                    { value: data.activo.anticipos2 },
                    { value: data.activo.anticipos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provExistencias',
                  label: i18n['RatiosInformation:detailTbProvExistencias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.provExistencias1 },
                    { value: data.activo.provExistencias2 },
                    { value: data.activo.provExistencias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'realizable',
                  label: i18n['RatiosInformation:detailTbRealizable'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.realizable1 },
                    { value: data.activo.realizable2 },
                    { value: data.activo.realizable3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'clientes',
                  label: i18n['RatiosInformation:detailTbClientes'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.clientes1 },
                    { value: data.activo.clientes2 },
                    { value: data.activo.clientes3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosDeudores',
                  label: i18n['RatiosInformation:detailTbOtrosDeudores'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otrosDeudores1 },
                    { value: data.activo.otrosDeudores2 },
                    { value: data.activo.otrosDeudores3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudoresEspeciales',
                  label: i18n['RatiosInformation:detailTbDeudoresEspeciales'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.deudoresEspeciales1 },
                    { value: data.activo.deudoresEspeciales2 },
                    { value: data.activo.deudoresEspeciales3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'provTrafico',
                  label: i18n['RatiosInformation:detailTbProvTrafico'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.provTrafico1 },
                    { value: data.activo.provTrafico2 },
                    { value: data.activo.provTrafico3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasGrupo',
                  label: i18n['RatiosInformation:detailTbDeudasGrupo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.deudasGrupo1 },
                    { value: data.activo.deudasGrupo2 },
                    { value: data.activo.deudasGrupo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudasAsociados',
                  label: i18n['RatiosInformation:detailTbDeudasAsociados'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.deudasAsociados1 },
                    { value: data.activo.deudasAsociados2 },
                    { value: data.activo.deudasAsociados3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosActCirculantes',
                  label: i18n['RatiosInformation:detailTbOtrosActCirculantes'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otrosActCirculantes1 },
                    { value: data.activo.otrosActCirculantes2 },
                    { value: data.activo.otrosActCirculantes3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'admiPubnlicas',
                  label: i18n['RatiosInformation:detailTbAdmiPubnlicas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.admiPubnlicas1 },
                    { value: data.activo.admiPubnlicas2 },
                    { value: data.activo.admiPubnlicas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'acumulaciones',
                  label: i18n['RatiosInformation:detailTbAcumulaciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.acumulaciones1 },
                    { value: data.activo.acumulaciones2 },
                    { value: data.activo.acumulaciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'capitalDesem',
                  label: i18n['RatiosInformation:detailTbCapitalDesem'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.capitalDesem1 },
                    { value: data.activo.capitalDesem2 },
                    { value: data.activo.capitalDesem3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'gastosAnticipados',
                  label: i18n['RatiosInformation:detailTbGastosAnticipados'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.gastosAnticipados1 },
                    { value: data.activo.gastosAnticipados2 },
                    { value: data.activo.gastosAnticipados3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'invFinancierasTemp',
                  label: i18n['RatiosInformation:detailTbInvFinancierasTemp'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.invFinancierasTemp1 },
                    { value: data.activo.invFinancierasTemp2 },
                    { value: data.activo.invFinancierasTemp3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasInvFinancierasCPlazo',
                  label: i18n['RatiosInformation:detailTbOtrasInvFinancierasCPlazo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otrasInvFinancierasCPlazo1 },
                    { value: data.activo.otrasInvFinancierasCPlazo2 },
                    { value: data.activo.otrasInvFinancierasCPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosCreditos',
                  label: i18n['RatiosInformation:detailTbOtrosCreditos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otrosCreditos1 },
                    { value: data.activo.otrosCreditos2 },
                    { value: data.activo.otrosCreditos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'carteraCortoPlazo',
                  label: i18n['RatiosInformation:detailTbCarteraCortoPlazo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.carteraCortoPlazo1 },
                    { value: data.activo.carteraCortoPlazo2 },
                    { value: data.activo.carteraCortoPlazo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'participaciones',
                  label: i18n['RatiosInformation:detailTbParticipaciones'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.participaciones1 },
                    { value: data.activo.participaciones2 },
                    { value: data.activo.participaciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'accionesPropias',
                  label: i18n['RatiosInformation:detailTbAccionesPropias'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.accionesPropias1 },
                    { value: data.activo.accionesPropias2 },
                    { value: data.activo.accionesPropias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'tesoreria',
                  label: i18n['RatiosInformation:detailTbTesoreria'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.tesoreria1 },
                    { value: data.activo.tesoreria2 },
                    { value: data.activo.tesoreria3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'caja',
                  label: i18n['RatiosInformation:detailTbCaja'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.caja1 },
                    { value: data.activo.caja2 },
                    { value: data.activo.caja3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'bancos',
                  label: i18n['RatiosInformation:detailTbBancos'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.bancos1 },
                    { value: data.activo.bancos2 },
                    { value: data.activo.bancos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totActiv',
                  label: i18n['RatiosInformation:detailTbTotActiv'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.totActiv1 },
                    { value: data.activo.totActiv2 },
                    { value: data.activo.totActiv3 }
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

export { RatiosInformationActivo }
