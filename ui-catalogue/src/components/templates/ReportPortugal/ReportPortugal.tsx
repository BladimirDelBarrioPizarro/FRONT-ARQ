import React from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Container
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import { IReportPortugal } from './types'
import {
  ElementInput,
  ElementRadio,
  ElementTextArea,
  ElementSelect,
  ElementRefresh,
  ElementsInput
} from '../../atoms'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee'
  },
  AppBar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  tabStyleActive: {
    backgroundColor: '#ff9900',
    color: '#ffffff',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  },
  tabStyleDefault: {
    color: '#003b64',
    backgroundColor: '#ffffff'
  },
  tabPanelStyle: {
    minWidth: '100%'
  },
  customStyleOnTab: {
    fontWeight: 'bold'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%'
  },
  divFlexTabs: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '20px'
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '40px'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '20px',
    marginLeft: '30px'
  },
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divContent: {
    display: 'contents',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  button: {
    width: '8em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  labelTittleStyle: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    marginTop: '20px'
  },
  labelStyle: {
    width: '7em',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelStyleCenter: {
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
  },
  fieldStyle: {
    width: '10em',
    height: '2em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderColor: '#ff9900'
  },
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  buttonRight: {
    textAlign: 'right'
  },
  buttonLeft: {
    textAlign: 'left'
  }

})

const ReportPortugal: React.FC<IReportPortugal> = ({
  i18n,
  balanceOrigenOpt,
  validateActivoNoCorriente,
  validatePatrimonioNeto,
  validatePasivoNoCorriente,
  validatePasivoCorriente,
  validateTotalPasivo,
  validateVentas,
  validateEbitda,
  validateExplotacion,
  formValues,
  formLoading,
  formRecoverDataError,
  handleCancel,
  handleSave,
  saveSuccess,
  saveLoading,
  handleAccept,
  acceptSuccess,
  acceptLoading,
  handleSubmit
}) => {
  const classes = useStyles()

  const objectKeysToString = (obj): any => {
    const objToString = {}
    Object
      .keys(obj)
      .forEach(ele => {
        objToString[ele] = ele
      })

    return objToString
  }

  const formValuesNames = objectKeysToString(formValues)

  return (
    <Container>
      <Formik
        initialValues={formValues}
        onSubmit={(values, actions) => {
          handleAccept(values)
        }}
      >
        {/* {(props: FormikProps<any>) => ( */}
        <Form>
          {/* {(() => {
                console.log(props) // eslint-disable-line
              })()} */}
          <Grid container spacing={1}>

            <div className={classes.divHeaderContainer}>
              <div className={classes.divHeaderFlex}>
                <span className={classes.labelHeader}>
                  {i18n['form:portugal:titulo']}
                </span>
              </div>
            </div>
          </Grid>
          <Grid container spacing={1}>
            <div className={classes.divHeaderContainer}>
              <div className={classes.divHeaderFlex}>
                <span className={classes.labelHeader}>
                  {i18n['form:portugal:concepto:titulo']}
                </span>
              </div>
            </div>
          </Grid>

          {[
            {
              label: i18n['form:portugal:concepto:nregistro'],
              name: 'conceptoRegistro',
              value: formValuesNames.conceptoRegistro
            },
            {
              label: i18n['form:portugal:concepto:nombre'],
              name: 'conceptoNombre',
              value: formValuesNames.conceptoNombre
            },
            {
              label: i18n['form:portugal:concepto:direccion'],
              name: 'conceptoDireccion',
              value: formValuesNames.conceptoDireccion
            },
            {
              label: i18n['form:portugal:concepto:localidad'],
              name: 'conceptoLocalidad',
              value: formValuesNames.conceptoLocalidad
            },
            {
              label: i18n['form:portugal:concepto:provincia'],
              name: 'conceptoProvincia',
              value: formValuesNames.conceptoProvincia
            },
            {
              label: i18n['form:portugal:concepto:codigopostal'],
              name: 'conceptoCodigoPostal',
              value: formValuesNames.conceptoCodigoPostal
            },
            {
              label: i18n['form:portugal:concepto:telefono'],
              name: 'conceptoTelefono',
              value: formValuesNames.conceptoTelefono
            },
            {
              label: i18n['form:portugal:concepto:fax'],
              name: 'conceptoFax',
              value: formValuesNames.conceptoFax
            }
          ].map(({ label, name, value }, index) => (
            <div className={classes.divFlex} key={index}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <ElementInput
                  type={'text'}
                  name={name}
                  label={label}
                  value={value}
                  size='xl'
                />
              </Grid>
            </div>
          ))}
          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="flex-end">
              {[
                {
                  label: i18n['form:portugal:concepto:confidencialidad'],
                  name: 'conceptoConfidencialidad',
                  value: formValuesNames.conceptoConfidencialidad,
                  labelOpt1: i18n['form:portugal:concepto:si'],
                  labelOpt2: i18n['form:portugal:concepto:no']
                },
                {
                  label: i18n['form:portugal:concepto:alerta'],
                  name: 'conceptoAlerta',
                  value: formValuesNames.conceptoAlerta,
                  labelOpt1: i18n['form:portugal:concepto:si'],
                  labelOpt2: i18n['form:portugal:concepto:no']
                },
                {
                  label: i18n['form:portugal:concepto:consolidado'],
                  name: 'conceptoConsolidado',
                  value: formValuesNames.conceptoConsolidado,
                  labelOpt1: i18n['form:portugal:concepto:si'],
                  labelOpt2: i18n['form:portugal:concepto:no']
                }
              ].map(({ label, name, value, labelOpt1, labelOpt2 }, index) => (
                <ElementRadio
                  label={label}
                  name={name}
                  value={value}
                  labelOpt1={labelOpt1}
                  labelOpt2={labelOpt2}
                  key={index}
                />
              ))}
            </Grid>
          </div>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                  <Typography className={classes.labelTittleStyle}>
                    {i18n['form:portugal:balance:titulo']}
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                  <Typography className={classes.labelTittleStyle}>
                    {i18n['form:portugal:balance:cifra']}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <ElementSelect
                  label={i18n['form:portugal:balance:origen']}
                  name='opinionEmpresa'
                  value={formValuesNames.balanceOrigen}
                  options={balanceOrigenOpt}
                  size='m'
                />
              </Grid>
            </div>
            {[
              {
                type: 'text',
                name: 'fechasCierre',
                label: i18n['form:portugal:balance:fechascierre'],
                values: [
                  { value: formValuesNames.fechasCierre1 },
                  { value: formValuesNames.fechasCierre2 },
                  { value: formValuesNames.fechasCierre3 }]
              }
            ].map(({ type, name, label, values }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <ElementsInput
                    type={type}
                    name={name}
                    label={label}
                    values={values}
                    index={true}
                    bold={false}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                  <Typography className={classes.labelTittleStyle}>
                    {i18n['form:portugal:table:disclaimer']}
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                </Grid>
              </Grid>
            </div>

            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validateActivoNoCorriente}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:activonocorriente:1'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_balance1 },
                  { value: formValuesNames.activonocorriente1_balance2 },
                  { value: formValuesNames.activonocorriente1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.1'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_1_balance1 },
                  { value: formValuesNames.activonocorriente1_1_balance2 },
                  { value: formValuesNames.activonocorriente1_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.2'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_2_balance1 },
                  { value: formValuesNames.activonocorriente1_2_balance2 },
                  { value: formValuesNames.activonocorriente1_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.3'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_3_balance1 },
                  { value: formValuesNames.activonocorriente1_3_balance2 },
                  { value: formValuesNames.activonocorriente1_3_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.4'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_4_balance1 },
                  { value: formValuesNames.activonocorriente1_4_balance2 },
                  { value: formValuesNames.activonocorriente1_4_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.5'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_5_balance1 },
                  { value: formValuesNames.activonocorriente1_5_balance2 },
                  { value: formValuesNames.activonocorriente1_5_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.6'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_6_balance1 },
                  { value: formValuesNames.activonocorriente1_6_balance2 },
                  { value: formValuesNames.activonocorriente1_6_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.6.1'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_6_1_balance1 },
                  { value: formValuesNames.activonocorriente1_6_1_balance2 },
                  { value: formValuesNames.activonocorriente1_6_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.6.2'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_6_2_balance1 },
                  { value: formValuesNames.activonocorriente1_6_2_balance2 },
                  { value: formValuesNames.activonocorriente1_6_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.7'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_7_balance1 },
                  { value: formValuesNames.activonocorriente1_7_balance2 },
                  { value: formValuesNames.activonocorriente1_7_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.8'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_8_balance1 },
                  { value: formValuesNames.activonocorriente1_8_balance2 },
                  { value: formValuesNames.activonocorriente1_8_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:activonocorriente:1.9'],
                name: '',
                values: [
                  { value: formValuesNames.activonocorriente1_9_balance1 },
                  { value: formValuesNames.activonocorriente1_9_balance2 },
                  { value: formValuesNames.activonocorriente1_9_balance3 }
                ]
              }
            ].map(({ name, label, values, bold = false }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))
            }

            {[
              {
                label: i18n['form:portugal:totalactivo'],
                name: 'totalactivo',
                values: [
                  { value: formValuesNames.totalActivo_balance1 },
                  { value: formValuesNames.totalActivo_balance2 },
                  { value: formValuesNames.totalActivo_balance3 }
                ]
              }
            ].map(({ name, label, values }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={true}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validatePatrimonioNeto}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:patrimonioneto:4'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_balance1 },
                  { value: formValuesNames.patrimonioneto_4_balance2 },
                  { value: formValuesNames.patrimonioneto_4_balance3 }
                ]
              },
              {
                bold: true,
                label: i18n['form:portugal:patrimonioneto:4.1'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_1_balance1 },
                  { value: formValuesNames.patrimonioneto_4_1_balance2 },
                  { value: formValuesNames.patrimonioneto_4_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.2'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_2_balance1 },
                  { value: formValuesNames.patrimonioneto_4_2_balance2 },
                  { value: formValuesNames.patrimonioneto_4_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.3'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_3_balance1 },
                  { value: formValuesNames.patrimonioneto_4_3_balance2 },
                  { value: formValuesNames.patrimonioneto_4_3_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.4'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_4_balance1 },
                  { value: formValuesNames.patrimonioneto_4_4_balance2 },
                  { value: formValuesNames.patrimonioneto_4_4_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.5'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_5_balance1 },
                  { value: formValuesNames.patrimonioneto_4_5_balance2 },
                  { value: formValuesNames.patrimonioneto_4_5_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.6'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_6_balance1 },
                  { value: formValuesNames.patrimonioneto_4_6_balance2 },
                  { value: formValuesNames.patrimonioneto_4_6_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.7'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_7_balance1 },
                  { value: formValuesNames.patrimonioneto_4_7_balance2 },
                  { value: formValuesNames.patrimonioneto_4_7_balance3 }
                ]
              },
              {
                bold: true,
                label: i18n['form:portugal:patrimonioneto:4.8'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_8_balance1 },
                  { value: formValuesNames.patrimonioneto_4_8_balance2 },
                  { value: formValuesNames.patrimonioneto_4_8_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.9'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_9_balance1 },
                  { value: formValuesNames.patrimonioneto_4_9_balance2 },
                  { value: formValuesNames.patrimonioneto_4_9_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.10'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_10_balance1 },
                  { value: formValuesNames.patrimonioneto_4_10_balance2 },
                  { value: formValuesNames.patrimonioneto_4_10_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.11'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_11_balance1 },
                  { value: formValuesNames.patrimonioneto_4_11_balance2 },
                  { value: formValuesNames.patrimonioneto_4_11_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:patrimonioneto:4.12'],
                name: '',
                values: [
                  { value: formValuesNames.patrimonioneto_4_12_balance1 },
                  { value: formValuesNames.patrimonioneto_4_12_balance2 },
                  { value: formValuesNames.patrimonioneto_4_12_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validatePasivoNoCorriente}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:pasivonocorriente:5'],
                name: '',
                values: [
                  { value: formValuesNames.pasivonocorriente_5_balance1 },
                  { value: formValuesNames.pasivonocorriente_5_balance2 },
                  { value: formValuesNames.pasivonocorriente_5_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivonocorriente:5.1'],
                name: '',
                values: [
                  { value: formValuesNames.pasivonocorriente_5_1_balance1 },
                  { value: formValuesNames.pasivonocorriente_5_1_balance2 },
                  { value: formValuesNames.pasivonocorriente_5_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivonocorriente:5.2'],
                name: '',
                values: [
                  { value: formValuesNames.pasivonocorriente_5_2_balance1 },
                  { value: formValuesNames.pasivonocorriente_5_2_balance2 },
                  { value: formValuesNames.pasivonocorriente_5_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivonocorriente:5.3'],
                name: '',
                values: [
                  { value: formValuesNames.pasivonocorriente_5_3_balance1 },
                  { value: formValuesNames.pasivonocorriente_5_3_balance2 },
                  { value: formValuesNames.pasivonocorriente_5_3_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivonocorriente:5.4'],
                name: '',
                values: [
                  { value: formValuesNames.pasivonocorriente_5_4_balance1 },
                  { value: formValuesNames.pasivonocorriente_5_4_balance2 },
                  { value: formValuesNames.pasivonocorriente_5_4_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivonocorriente:5.5'],
                name: '',
                values: [
                  { value: formValuesNames.pasivonocorriente_5_5_balance1 },
                  { value: formValuesNames.pasivonocorriente_5_5_balance2 },
                  { value: formValuesNames.pasivonocorriente_5_5_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validatePasivoCorriente}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:pasivocorriente:6'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_balance1 },
                  { value: formValuesNames.pasivocorriente_6_balance2 },
                  { value: formValuesNames.pasivocorriente_6_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.1'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_1_balance1 },
                  { value: formValuesNames.pasivocorriente_6_1_balance2 },
                  { value: formValuesNames.pasivocorriente_6_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.2'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_2_balance1 },
                  { value: formValuesNames.pasivocorriente_6_2_balance2 },
                  { value: formValuesNames.pasivocorriente_6_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.3'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_3_balance1 },
                  { value: formValuesNames.pasivocorriente_6_3_balance2 },
                  { value: formValuesNames.pasivocorriente_6_3_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.3.1'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_3_1_balance1 },
                  { value: formValuesNames.pasivocorriente_6_3_1_balance2 },
                  { value: formValuesNames.pasivocorriente_6_3_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.3.2'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_3_2_balance1 },
                  { value: formValuesNames.pasivocorriente_6_3_2_balance2 },
                  { value: formValuesNames.pasivocorriente_6_3_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.1'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_1_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_1_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_1_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.2'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_2_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_2_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_2_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.3'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_3_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_3_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_3_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.4'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_4_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_4_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_4_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.5'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_5_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_5_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_5_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.6'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_6_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_6_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_6_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.7'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_7_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_7_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_7_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:pasivocorriente:6.4.8'],
                name: '',
                values: [
                  { value: formValuesNames.pasivocorriente_6_4_8_balance1 },
                  { value: formValuesNames.pasivocorriente_6_4_8_balance2 },
                  { value: formValuesNames.pasivocorriente_6_4_8_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validateTotalPasivo}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:totalpasivo'],
                name: '',
                values: [
                  { value: formValuesNames.totalPasivo_balance1 },
                  { value: formValuesNames.totalPasivo_balance2 },
                  { value: formValuesNames.totalPasivo_balance3 }
                ]
              },
              {
                bold: true,
                label: i18n['form:portugal:totalpatrimonio'],
                name: '',
                values: [
                  { value: formValuesNames.totalPatrimonio_balance1 },
                  { value: formValuesNames.totalPatrimonio_balance2 },
                  { value: formValuesNames.totalPatrimonio_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validateVentas}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:ventas:01'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_01_balance1 },
                  { value: formValuesNames.ventas_01_balance2 },
                  { value: formValuesNames.ventas_01_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:02'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_02_balance1 },
                  { value: formValuesNames.ventas_02_balance2 },
                  { value: formValuesNames.ventas_02_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:03'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_03_balance1 },
                  { value: formValuesNames.ventas_03_balance2 },
                  { value: formValuesNames.ventas_03_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:04'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_04_balance1 },
                  { value: formValuesNames.ventas_04_balance2 },
                  { value: formValuesNames.ventas_04_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:05'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_05_balance1 },
                  { value: formValuesNames.ventas_05_balance2 },
                  { value: formValuesNames.ventas_05_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:06'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_06_balance1 },
                  { value: formValuesNames.ventas_06_balance2 },
                  { value: formValuesNames.ventas_06_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:07'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_07_balance1 },
                  { value: formValuesNames.ventas_07_balance2 },
                  { value: formValuesNames.ventas_07_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:08'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_08_balance1 },
                  { value: formValuesNames.ventas_08_balance2 },
                  { value: formValuesNames.ventas_08_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:14'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_14_balance1 },
                  { value: formValuesNames.ventas_14_balance2 },
                  { value: formValuesNames.ventas_14_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ventas:15'],
                name: '',
                values: [
                  { value: formValuesNames.ventas_15_balance1 },
                  { value: formValuesNames.ventas_15_balance2 },
                  { value: formValuesNames.ventas_15_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validateEbitda}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:ebitda:27'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_27_balance1 },
                  { value: formValuesNames.ebitda_27_balance2 },
                  { value: formValuesNames.ebitda_27_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ebitda:17'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_17_balance1 },
                  { value: formValuesNames.ebitda_17_balance2 },
                  { value: formValuesNames.ebitda_17_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ebitda:09'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_09_balance1 },
                  { value: formValuesNames.ebitda_09_balance2 },
                  { value: formValuesNames.ebitda_09_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ebitda:10'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_10_balance1 },
                  { value: formValuesNames.ebitda_10_balance2 },
                  { value: formValuesNames.ebitda_10_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ebitda:11'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_11_balance1 },
                  { value: formValuesNames.ebitda_11_balance2 },
                  { value: formValuesNames.ebitda_11_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ebitda:16'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_16_balance1 },
                  { value: formValuesNames.ebitda_16_balance2 },
                  { value: formValuesNames.ebitda_16_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:ebitda:12'],
                name: '',
                values: [
                  { value: formValuesNames.ebitda_12_balance1 },
                  { value: formValuesNames.ebitda_12_balance2 },
                  { value: formValuesNames.ebitda_12_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          <Grid container spacing={1}>
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <div className={classes.divContent} onClick={validateExplotacion}>
                  <ElementRefresh
                    label={i18n['form:portugal:table:actualizar']}
                    size={'m'}
                  />
                </div>
                {[
                  {
                    value: '1.'
                  },
                  {
                    value: '2.'
                  },
                  {
                    value: '3.'
                  }
                ].map(({ value }, index) => (
                  <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                    key={index}>
                    <Typography className={classes.labelStyleCenter}>
                      {value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>

            {[
              {
                bold: true,
                label: i18n['form:portugal:explotacion:25'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_25_balance1 },
                  { value: formValuesNames.explotacion_25_balance2 },
                  { value: formValuesNames.explotacion_25_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:explotacion:18'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_18_balance1 },
                  { value: formValuesNames.explotacion_18_balance2 },
                  { value: formValuesNames.explotacion_18_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:explotacion:13'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_13_balance1 },
                  { value: formValuesNames.explotacion_13_balance2 },
                  { value: formValuesNames.explotacion_13_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:explotacion:19'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_19_balance1 },
                  { value: formValuesNames.explotacion_19_balance2 },
                  { value: formValuesNames.explotacion_19_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:explotacion:20'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_20_balance1 },
                  { value: formValuesNames.explotacion_20_balance2 },
                  { value: formValuesNames.explotacion_20_balance3 }
                ]
              },
              {
                column1Bold: true,
                label: i18n['form:portugal:explotacion:26'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_26_balance1 },
                  { value: formValuesNames.explotacion_26_balance2 },
                  { value: formValuesNames.explotacion_26_balance3 }
                ]
              },
              {
                label: i18n['form:portugal:explotacion:21'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_21_balance1 },
                  { value: formValuesNames.explotacion_21_balance2 },
                  { value: formValuesNames.explotacion_21_balance3 }
                ]
              },
              {
                column1Bold: true,
                label: i18n['form:portugal:explotacion:22'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_22_balance1 },
                  { value: formValuesNames.explotacion_22_balance2 },
                  { value: formValuesNames.explotacion_22_balance3 }
                ]

              },
              {
                column1Bold: true,
                label: i18n['form:portugal:explotacion:23'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_23_balance1 },
                  { value: formValuesNames.explotacion_23_balance2 },
                  { value: formValuesNames.explotacion_23_balance3 }
                ]
              },
              {
                column1Bold: true,
                label: i18n['form:portugal:explotacion:24'],
                name: '',
                values: [
                  { value: formValuesNames.explotacion_24_balance1 },
                  { value: formValuesNames.explotacion_24_balance2 },
                  { value: formValuesNames.explotacion_24_balance3 }
                ]
              }
            ].map(({ name, label, values, bold }, index) => (
              <div className={classes.divFlex} key={index}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <ElementsInput
                    type={'text'}
                    name={name}
                    label={label}
                    values={values}
                    index={false}
                    bold={bold}
                  />
                </Grid>
              </div>
            ))}
          </Grid>

          {[
            {
              label: i18n['form:portugal:auditoria'],
              name: 'auditoria',
              value: formValuesNames.auditoria
            }
          ].map(({ label, name, value }, index) => (
            <div className={classes.divFlex} key={index}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <ElementTextArea
                  label={label}
                  name={name}
                  value={value}
                  cols={50}
                  rows={2}
                  size='xl'
                />
              </Grid>
            </div>
          ))}

          <div className={classes.divFlexButton}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {[
                {
                  label: i18n['form:portugal:guardar'],
                  click: handleSave,
                  align: classes.buttonMiddle
                },
                {
                  label: i18n['form:portugal:aceptar'],
                  click: handleAccept,
                  align: classes.buttonMiddle
                },
                {
                  label: i18n['form:portugal:cancelar'],
                  click: handleCancel,
                  align: classes.buttonMiddle
                }
              ].map(({ label, click, align }, index) => (
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
                  key={index}>
                  <div className={align}>
                    <button
                      onClick={click}
                      className={classes.button}
                    >
                      {label}
                    </button>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Form>
        {/* )} */}
      </Formik>

    </Container>
  )
}

export { ReportPortugal }
export type { IReportPortugal }
