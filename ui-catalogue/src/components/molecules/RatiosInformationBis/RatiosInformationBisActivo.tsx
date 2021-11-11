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

const RatiosInformationBisActivo: React.FC<IRatiosInformationBis> = ({
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
                {i18n['RatiosInformationBis:activo:title']}
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
                  name: 'capital',
                  label: i18n['RatiosInformationBis:activo:detailTbCapital'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.capital1 },
                    { value: data.activo.capital2 },
                    { value: data.activo.capital3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'activoFijo',
                  label: i18n['RatiosInformationBis:activo:detailTbActivoFijo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.activoFijo1 },
                    { value: data.activo.activoFijo2 },
                    { value: data.activo.activoFijo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible1 },
                    { value: data.activo.inmovilizadoIntangible2 },
                    { value: data.activo.inmovilizadoIntangible3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible_1',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible_11 },
                    { value: data.activo.inmovilizadoIntangible_12 },
                    { value: data.activo.inmovilizadoIntangible_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible_2',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible_21 },
                    { value: data.activo.inmovilizadoIntangible_22 },
                    { value: data.activo.inmovilizadoIntangible_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible_3',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible_31 },
                    { value: data.activo.inmovilizadoIntangible_32 },
                    { value: data.activo.inmovilizadoIntangible_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible_4',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible_41 },
                    { value: data.activo.inmovilizadoIntangible_42 },
                    { value: data.activo.inmovilizadoIntangible_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible_5',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible_51 },
                    { value: data.activo.inmovilizadoIntangible_52 },
                    { value: data.activo.inmovilizadoIntangible_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoIntangible_6',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoIntangible_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoIntangible_61 },
                    { value: data.activo.inmovilizadoIntangible_62 },
                    { value: data.activo.inmovilizadoIntangible_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial1 },
                    { value: data.activo.inmovilizadoMaterial2 },
                    { value: data.activo.inmovilizadoMaterial3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial_1',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial_11 },
                    { value: data.activo.inmovilizadoMaterial_12 },
                    { value: data.activo.inmovilizadoMaterial_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial_2',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial_21 },
                    { value: data.activo.inmovilizadoMaterial_22 },
                    { value: data.activo.inmovilizadoMaterial_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial_3',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial_31 },
                    { value: data.activo.inmovilizadoMaterial_32 },
                    { value: data.activo.inmovilizadoMaterial_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial_4',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial_41 },
                    { value: data.activo.inmovilizadoMaterial_42 },
                    { value: data.activo.inmovilizadoMaterial_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial_5',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial_51 },
                    { value: data.activo.inmovilizadoMaterial_52 },
                    { value: data.activo.inmovilizadoMaterial_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoMaterial_6',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoMaterial_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoMaterial_61 },
                    { value: data.activo.inmovilizadoMaterial_62 },
                    { value: data.activo.inmovilizadoMaterial_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero1 },
                    { value: data.activo.inmovilizadoFinanciero2 },
                    { value: data.activo.inmovilizadoFinanciero3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero_1',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero_11 },
                    { value: data.activo.inmovilizadoFinanciero_12 },
                    { value: data.activo.inmovilizadoFinanciero_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero_2',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero_21 },
                    { value: data.activo.inmovilizadoFinanciero_22 },
                    { value: data.activo.inmovilizadoFinanciero_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero_3',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero_31 },
                    { value: data.activo.inmovilizadoFinanciero_32 },
                    { value: data.activo.inmovilizadoFinanciero_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero_4',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero_41 },
                    { value: data.activo.inmovilizadoFinanciero_42 },
                    { value: data.activo.inmovilizadoFinanciero_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero_5',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero_51 },
                    { value: data.activo.inmovilizadoFinanciero_52 },
                    { value: data.activo.inmovilizadoFinanciero_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'inmovilizadoFinanciero_6',
                  label: i18n['RatiosInformationBis:activo:detailTbInmovilizadoFinanciero_6'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.inmovilizadoFinanciero_61 },
                    { value: data.activo.inmovilizadoFinanciero_62 },
                    { value: data.activo.inmovilizadoFinanciero_63 }
                  ]
                },
                {
                  type: 'number',
                  name: 'activoCirculante',
                  label: i18n['RatiosInformationBis:activo:detailTbActivoCirculante'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.activoCirculante1 },
                    { value: data.activo.activoCirculante2 },
                    { value: data.activo.activoCirculante3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias',
                  label: i18n['RatiosInformationBis:activo:detailTbExistencias'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.existencias1 },
                    { value: data.activo.existencias2 },
                    { value: data.activo.existencias3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias_1',
                  label: i18n['RatiosInformationBis:activo:detailTbExistencias_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.existencias_11 },
                    { value: data.activo.existencias_12 },
                    { value: data.activo.existencias_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias_2',
                  label: i18n['RatiosInformationBis:activo:detailTbExistencias_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.existencias_21 },
                    { value: data.activo.existencias_22 },
                    { value: data.activo.existencias_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias_3',
                  label: i18n['RatiosInformationBis:activo:detailTbExistencias_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.existencias_31 },
                    { value: data.activo.existencias_32 },
                    { value: data.activo.existencias_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias_4',
                  label: i18n['RatiosInformationBis:activo:detailTbExistencias_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.existencias_41 },
                    { value: data.activo.existencias_42 },
                    { value: data.activo.existencias_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'existencias_5',
                  label: i18n['RatiosInformationBis:activo:detailTbExistencias_5'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.existencias_51 },
                    { value: data.activo.existencias_52 },
                    { value: data.activo.existencias_53 }
                  ]
                },
                {
                  type: 'number',
                  name: 'anticipos',
                  label: i18n['RatiosInformationBis:activo:detailTbAnticipos'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.anticipos1 },
                    { value: data.activo.anticipos2 },
                    { value: data.activo.anticipos3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudores',
                  label: i18n['RatiosInformationBis:activo:detailTbDeudores'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.deudores1 },
                    { value: data.activo.deudores2 },
                    { value: data.activo.deudores3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudores_1',
                  label: i18n['RatiosInformationBis:activo:detailTbDeudores_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.deudores_11 },
                    { value: data.activo.deudores_12 },
                    { value: data.activo.deudores_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudores_2',
                  label: i18n['RatiosInformationBis:activo:detailTbDeudores_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.deudores_21 },
                    { value: data.activo.deudores_22 },
                    { value: data.activo.deudores_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'deudores_3',
                  label: i18n['RatiosInformationBis:activo:detailTbDeudores_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.deudores_31 },
                    { value: data.activo.deudores_32 },
                    { value: data.activo.deudores_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'varios',
                  label: i18n['RatiosInformationBis:activo:detailTbVarios'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.varios1 },
                    { value: data.activo.varios2 },
                    { value: data.activo.varios3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'varios_1',
                  label: i18n['RatiosInformationBis:activo:detailTbVarios_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.varios_11 },
                    { value: data.activo.varios_12 },
                    { value: data.activo.varios_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'varios_2',
                  label: i18n['RatiosInformationBis:activo:detailTbVarios_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.varios_21 },
                    { value: data.activo.varios_22 },
                    { value: data.activo.varios_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otros',
                  label: i18n['RatiosInformationBis:activo:detailTbOtros'],
                  subIndex: false,
                  bold: false,
                  values: [
                    { value: data.activo.otros1 },
                    { value: data.activo.otros2 },
                    { value: data.activo.otros3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otros_1',
                  label: i18n['RatiosInformationBis:activo:detailTbOtros_1'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otros_11 },
                    { value: data.activo.otros_12 },
                    { value: data.activo.otros_13 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otros_2',
                  label: i18n['RatiosInformationBis:activo:detailTbOtros_2'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otros_21 },
                    { value: data.activo.otros_22 },
                    { value: data.activo.otros_23 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otros_3',
                  label: i18n['RatiosInformationBis:activo:detailTbOtros_3'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otros_31 },
                    { value: data.activo.otros_32 },
                    { value: data.activo.otros_33 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otros_4',
                  label: i18n['RatiosInformationBis:activo:detailTbOtros_4'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.otros_41 },
                    { value: data.activo.otros_42 },
                    { value: data.activo.otros_43 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalActivo',
                  label: i18n['RatiosInformationBis:activo:detailTbTotalActivo'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.totalActivo1 },
                    { value: data.activo.totalActivo2 },
                    { value: data.activo.totalActivo3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'otrasCuentas',
                  label: i18n['RatiosInformationBis:activo:detailTbOtrasCuentas'],
                  subIndex: false,
                  bold: true,
                  values: [
                    { value: data.activo.otrasCuentas1 },
                    { value: data.activo.otrasCuentas2 },
                    { value: data.activo.otrasCuentas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'totalCuentas',
                  label: i18n['RatiosInformationBis:activo:detailTbTotalCuentas'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.totalCuentas1 },
                    { value: data.activo.totalCuentas2 },
                    { value: data.activo.totalCuentas3 }
                  ]
                },
                {
                  type: 'number',
                  name: 'prestamosFamiliares',
                  label: i18n['RatiosInformationBis:activo:detailTbPrestamosFamiliares'],
                  subIndex: true,
                  bold: false,
                  values: [
                    { value: data.activo.prestamosFamiliares1 },
                    { value: data.activo.prestamosFamiliares2 },
                    { value: data.activo.prestamosFamiliares3 }
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

export { RatiosInformationBisActivo }
