import React from 'react'
import { IRatiosInformationBis } from './types'
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

const RatiosInformationBisPasivo: React.FC<IRatiosInformationBis> = ({
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
                {i18n['RatiosInformationBis:pasivo:title']}
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
                      {i18n['RatiosInformationBis:labelTbEjercicio1']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['RatiosInformationBis:labelTbEjercicio2']}
                    </Typography>
                  </Grid>

                  <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                    <Typography className={classes.labelStyleBold}>
                      {i18n['RatiosInformationBis:labelTbEjercicio3']}
                    </Typography>
                  </Grid>
                </Grid>
              </div>

              {[
                {
                  type: 'number',
                  name: 'patrimonio',
                  label: i18n['RatiosInformationBis:pasivo:detailTbPatrimonio'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.patrimonio1 },
                    { value: data.pasivo.patrimonio2 },
                    { value: data.pasivo.patrimonio3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios1 },
                    { value: data.pasivo.fondosPropios2 },
                    { value: data.pasivo.fondosPropios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_1',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_11 },
                    { value: data.pasivo.fondosPropios_12 },
                    { value: data.pasivo.fondosPropios_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_2',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_21 },
                    { value: data.pasivo.fondosPropios_22 },
                    { value: data.pasivo.fondosPropios_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_3',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_31 },
                    { value: data.pasivo.fondosPropios_32 },
                    { value: data.pasivo.fondosPropios_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_4',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_41 },
                    { value: data.pasivo.fondosPropios_42 },
                    { value: data.pasivo.fondosPropios_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_5',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_51 },
                    { value: data.pasivo.fondosPropios_52 },
                    { value: data.pasivo.fondosPropios_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_6',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_61 },
                    { value: data.pasivo.fondosPropios_62 },
                    { value: data.pasivo.fondosPropios_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_7',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_7'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_71 },
                    { value: data.pasivo.fondosPropios_72 },
                    { value: data.pasivo.fondosPropios_73 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_8',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_8'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_81 },
                    { value: data.pasivo.fondosPropios_82 },
                    { value: data.pasivo.fondosPropios_83 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_9',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_9'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_91 },
                    { value: data.pasivo.fondosPropios_92 },
                    { value: data.pasivo.fondosPropios_93 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_10',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_10'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_101 },
                    { value: data.pasivo.fondosPropios_102 },
                    { value: data.pasivo.fondosPropios_103 }
                  ]
                },
                {
                  type: 'number',
                  name: 'fondosPropios_11',
                  label: i18n['RatiosInformationBis:pasivo:detailTbFondosPropios_11'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.fondosPropios_111 },
                    { value: data.pasivo.fondosPropios_112 },
                    { value: data.pasivo.fondosPropios_113 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosFondos',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrosFondos'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosFondos1 },
                    { value: data.pasivo.otrosFondos2 },
                    { value: data.pasivo.otrosFondos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosFondos_1',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrosFondos_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosFondos_11 },
                    { value: data.pasivo.otrosFondos_12 },
                    { value: data.pasivo.otrosFondos_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrosFondos_2',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrosFondos_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrosFondos_21 },
                    { value: data.pasivo.otrosFondos_22 },
                    { value: data.pasivo.otrosFondos_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'proviciones',
                  label: i18n['RatiosInformationBis:pasivo:detailTbProviciones'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.pasivo.proviciones1 },
                    { value: data.pasivo.proviciones2 },
                    { value: data.pasivo.proviciones3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'proviciones_1',
                  label: i18n['RatiosInformationBis:pasivo:detailTbProviciones_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.proviciones_11 },
                    { value: data.pasivo.proviciones_12 },
                    { value: data.pasivo.proviciones_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'proviciones_2',
                  label: i18n['RatiosInformationBis:pasivo:detailTbProviciones_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.proviciones_21 },
                    { value: data.pasivo.proviciones_22 },
                    { value: data.pasivo.proviciones_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.totalDeudas1 },
                    { value: data.pasivo.totalDeudas2 },
                    { value: data.pasivo.totalDeudas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_1',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_11 },
                    { value: data.pasivo.totalDeudas_12 },
                    { value: data.pasivo.totalDeudas_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_2',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_21 },
                    { value: data.pasivo.totalDeudas_22 },
                    { value: data.pasivo.totalDeudas_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_3',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_31 },
                    { value: data.pasivo.totalDeudas_32 },
                    { value: data.pasivo.totalDeudas_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_4',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_41 },
                    { value: data.pasivo.totalDeudas_42 },
                    { value: data.pasivo.totalDeudas_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_5',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_51 },
                    { value: data.pasivo.totalDeudas_52 },
                    { value: data.pasivo.totalDeudas_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_6',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_61 },
                    { value: data.pasivo.totalDeudas_62 },
                    { value: data.pasivo.totalDeudas_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_7',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_7'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_71 },
                    { value: data.pasivo.totalDeudas_72 },
                    { value: data.pasivo.totalDeudas_73 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_8',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_8'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_81 },
                    { value: data.pasivo.totalDeudas_82 },
                    { value: data.pasivo.totalDeudas_83 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudas_9',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudas_9'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudas_91 },
                    { value: data.pasivo.totalDeudas_92 },
                    { value: data.pasivo.totalDeudas_93 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentasRegulacion',
                  label: i18n['RatiosInformationBis:pasivo:detailTbCuentasRegulacion'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.cuentasRegulacion1 },
                    { value: data.pasivo.cuentasRegulacion2 },
                    { value: data.pasivo.cuentasRegulacion3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentasRegulacion_10',
                  label: i18n['RatiosInformationBis:pasivo:detailTbCuentasRegulacion_10'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.cuentasRegulacion_101 },
                    { value: data.pasivo.cuentasRegulacion_102 },
                    { value: data.pasivo.cuentasRegulacion_103 }
                  ]
                },
                {
                  type: 'number',
                  name: 'cuentasPasivo',
                  label: i18n['RatiosInformationBis:pasivo:detailTbCuentasPasivo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.cuentasPasivo1 },
                    { value: data.pasivo.cuentasPasivo2 },
                    { value: data.pasivo.cuentasPasivo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalPasivo',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalPasivo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.totalPasivo1 },
                    { value: data.pasivo.totalPasivo2 },
                    { value: data.pasivo.totalPasivo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.referencias1 },
                    { value: data.pasivo.referencias2 },
                    { value: data.pasivo.referencias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_1',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_11 },
                    { value: data.pasivo.referencias_12 },
                    { value: data.pasivo.referencias_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_2',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_21 },
                    { value: data.pasivo.referencias_22 },
                    { value: data.pasivo.referencias_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_3',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_31 },
                    { value: data.pasivo.referencias_32 },
                    { value: data.pasivo.referencias_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_4',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_41 },
                    { value: data.pasivo.referencias_42 },
                    { value: data.pasivo.referencias_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_5',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_51 },
                    { value: data.pasivo.referencias_52 },
                    { value: data.pasivo.referencias_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_6',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_61 },
                    { value: data.pasivo.referencias_62 },
                    { value: data.pasivo.referencias_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'referencias_7',
                  label: i18n['RatiosInformationBis:pasivo:detailTbReferencias_7'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.referencias_71 },
                    { value: data.pasivo.referencias_72 },
                    { value: data.pasivo.referencias_73 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasCuentas',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrasCuentas'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.pasivo.otrasCuentas1 },
                    { value: data.pasivo.otrasCuentas2 },
                    { value: data.pasivo.otrasCuentas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasCuentas_1',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrasCuentas_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasCuentas_11 },
                    { value: data.pasivo.otrasCuentas_12 },
                    { value: data.pasivo.otrasCuentas_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasCuentas_2',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrasCuentas_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasCuentas_21 },
                    { value: data.pasivo.otrasCuentas_22 },
                    { value: data.pasivo.otrasCuentas_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasCuentas_3',
                  label: i18n['RatiosInformationBis:pasivo:detailTbOtrasCuentas_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.otrasCuentas_31 },
                    { value: data.pasivo.otrasCuentas_32 },
                    { value: data.pasivo.otrasCuentas_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'pasivoCirculante',
                  label: i18n['RatiosInformationBis:pasivo:detailTbPasivoCirculante'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.pasivoCirculante1 },
                    { value: data.pasivo.pasivoCirculante2 },
                    { value: data.pasivo.pasivoCirculante3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalDeudasCortoPlazo',
                  label: i18n['RatiosInformationBis:pasivo:detailTbTotalDeudasCortoPlazo'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.pasivo.totalDeudasCortoPlazo1 },
                    { value: data.pasivo.totalDeudasCortoPlazo2 },
                    { value: data.pasivo.totalDeudasCortoPlazo3 }
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

export { RatiosInformationBisPasivo }
