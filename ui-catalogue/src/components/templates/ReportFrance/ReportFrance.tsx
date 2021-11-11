import React from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import { IReportFrance } from './types'
import {
  ElementInput,
  ElementRadio,
  ElementSelect,
  ElementRefresh,
  ElementTextArea,
  TableForm
} from '../../atoms'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 15,
    border: 'solid 1px #eeeeee'
  },
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
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
  labelStyleTitle: {
    fontFamily: 'NeverMind',
    fontSize: '20px',
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
  divContent: {
    display: 'contents',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '40px'
  },
  buttonMiddle: {
    textAlign: 'center'
  }
}))

const ReportFrance: React.FC<IReportFrance> = ({
  i18n,
  formValues,
  selectOpts,
  formLoading,
  formRecoverDataError,
  handleCancel,
  handleSave,
  handleAccept,
  saveSuccess,
  saveLoading,
  acceptSuccess,
  acceptLoading,
  validateActivo,
  validatePasivo,
  validateCuentas
}) => {
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
  const classes = useStyles()

  return (
    <Container>
      <Card className={classes.card}>
        <CardContent>
          <Formik
            initialValues={formValues}
            onSubmit={(values, actions) => {
              handleAccept(values)
            }}
          >
            <Form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h3" className={classes.labelHeader}>
                    {i18n['form:france:titulo']}
                  </Typography>
                </Grid>
                {/* ##################### CONCEPTO ############################# */}
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.labelHeader}>
                    {i18n['form:france:concepto:titulo']}
                  </Typography>
                </Grid>
                {[
                  {
                    label: i18n['form:france:concepto:nregistro'],
                    name: formValuesNames.conceptoRegistro
                  },
                  {
                    label: i18n['form:france:concepto:nombre'],
                    name: formValuesNames.conceptoNombre
                  },
                  {
                    label: i18n['form:france:concepto:direccion'],
                    name: formValuesNames.conceptoDireccion
                  },
                  {
                    label: i18n['form:france:concepto:localidad'],
                    name: formValuesNames.conceptoLocalidad
                  },
                  {
                    label: i18n['form:france:concepto:provincia'],
                    name: formValuesNames.conceptoProvincia
                  },
                  {
                    label: i18n['form:france:concepto:codigopostal'],
                    name: formValuesNames.conceptoCodigoPostal
                  },
                  {
                    label: i18n['form:france:concepto:telefono'],
                    name: formValuesNames.conceptoTelefono
                  },
                  {
                    label: i18n['form:france:concepto:fax'],
                    name: formValuesNames.conceptoFax
                  }
                ].map(({ label, name }, index) => (
                  <ElementInput
                    key={`concepto-${index}`}
                    type={'text'}
                    name={name}
                    label={label}
                    value={name}
                    size={'xl'}
                  />
                ))}
                {[
                  {
                    label: i18n['form:france:concepto:confidencialidad'],
                    name: formValuesNames.conceptoConfidencialidad,
                    labelOpt1: i18n['form:france:concepto:si'],
                    labelOpt2: i18n['form:france:concepto:no']
                  },
                  {
                    label: i18n['form:france:concepto:alerta'],
                    name: formValuesNames.conceptoAlerta,
                    labelOpt1: i18n['form:france:concepto:si'],
                    labelOpt2: i18n['form:france:concepto:no']
                  },
                  {
                    label: i18n['form:france:concepto:consolidado'],
                    name: formValuesNames.conceptoConsolidado,
                    labelOpt1: i18n['form:france:concepto:si'],
                    labelOpt2: i18n['form:france:concepto:no']
                  }
                ].map(({ label, name, labelOpt1, labelOpt2 }, index) => (
                  <ElementRadio
                    key={index}
                    label={label}
                    name={name}
                    value={name}
                    labelOpt1={labelOpt1}
                    labelOpt2={labelOpt2}
                  />
                ))}
                {/* ##################### FIN CONCEPTO ####################### */}

                {/* ###### CAMPOS BALANCE / CUENTA DE RESULTADOS ############# */}
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.labelHeader}>
                    {i18n['form:france:balance:titulo']}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.labelHeader}>
                    {i18n['form:france:balance:cifra']}
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:france:balance:origen']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.balanceOrigen}
                    value={formValuesNames.balanceOrigen}
                    options={selectOpts.balanceOrigen}
                    size={'l'}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:france:balance:fechascierre']}
                  </Typography>
                </Grid>

                <TableForm
                  labelHeader1={i18n['form:france:balance:fechacierreheader1']}
                  labelHeader2={i18n['form:france:balance:fechacierreheader2']}
                  labelHeader3={i18n['form:france:balance:fechacierreheader3']}
                  rows={[
                    {
                      column1Label: i18n['form:france:balance:fechacierre1'],
                      column2Name: formValuesNames.balanceFechacierre1Dia,
                      column3Name: formValuesNames.balanceFechacierre1Mes,
                      column4Name: formValuesNames.balanceFechacierre1Ano
                    },
                    {
                      column1Label: i18n['form:france:balance:fechacierre2'],
                      column2Name: formValuesNames.balanceFechacierre2Dia,
                      column3Name: formValuesNames.balanceFechacierre2Mes,
                      column4Name: formValuesNames.balanceFechacierre2Ano
                    },
                    {
                      column1Label: i18n['form:france:balance:fechacierre3'],
                      column2Name: formValuesNames.balanceFechacierre3Dia,
                      column3Name: formValuesNames.balanceFechacierre3Mes,
                      column4Name: formValuesNames.balanceFechacierre3Ano
                    }
                  ]}
                />
                {/* ######## FIN CAMPOS BALANCE / CUENTA DE RESULTADOS ######### */}

                {/* ################### ACTIVO ################################# */}
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.labelStyleTitle}>
                    {i18n['form:france:activo:titulo']}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" className={classes.labelStyle}>
                    {i18n['form:france:activo:subtitulo']}
                  </Typography>
                </Grid>

                <div className={classes.divContent} onClick={validateActivo}>
                  <ElementRefresh
                    label={i18n['form:spain:balance:upgrade']}
                    size={2}
                  />
                </div>

                <TableForm
                  labelHeader1={i18n['form:france:activo:header1']}
                  labelHeader2={i18n['form:france:activo:header2']}
                  labelHeader3={i18n['form:france:activo:header3']}
                  rows={[
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:activo:1'],
                      column2Name: formValuesNames.activo_1_balance1,
                      column3Name: formValuesNames.activo_1_balance2,
                      column4Name: formValuesNames.activo_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:1.1'],
                      column2Name: formValuesNames.activo_1_1_balance1,
                      column3Name: formValuesNames.activo_1_1_balance2,
                      column4Name: formValuesNames.activo_1_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:1.2'],
                      column2Name: formValuesNames.activo_1_2_balance1,
                      column3Name: formValuesNames.activo_1_2_balance2,
                      column4Name: formValuesNames.activo_1_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:1.3'],
                      column2Name: formValuesNames.activo_1_3_balance1,
                      column3Name: formValuesNames.activo_1_3_balance2,
                      column4Name: formValuesNames.activo_1_3_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:activo:2'],
                      column2Name: formValuesNames.activo_2_balance1,
                      column3Name: formValuesNames.activo_2_balance2,
                      column4Name: formValuesNames.activo_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:2.1'],
                      column2Name: formValuesNames.activo_2_1_balance1,
                      column3Name: formValuesNames.activo_2_1_balance2,
                      column4Name: formValuesNames.activo_2_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:2.2'],
                      column2Name: formValuesNames.activo_2_2_balance1,
                      column3Name: formValuesNames.activo_2_2_balance2,
                      column4Name: formValuesNames.activo_2_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:2.3'],
                      column2Name: formValuesNames.activo_2_3_balance1,
                      column3Name: formValuesNames.activo_2_3_balance2,
                      column4Name: formValuesNames.activo_2_3_balance3
                    },
                    {
                      column1Label: i18n['form:france:activo:2.4'],
                      column2Name: formValuesNames.activo_2_4_balance1,
                      column3Name: formValuesNames.activo_2_4_balance2,
                      column4Name: formValuesNames.activo_2_4_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:activo:3'],
                      column2Name: formValuesNames.activo_3_balance1,
                      column3Name: formValuesNames.activo_3_balance2,
                      column4Name: formValuesNames.activo_3_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:activo:total'],
                      column2Name: formValuesNames.activo_total_balance1,
                      column3Name: formValuesNames.activo_total_balance2,
                      column4Name: formValuesNames.activo_total_balance3
                    }
                  ]}
                />
                {/* ################### FIN ACTIVO ############################# */}

                {/* ################### PASIVO ################################# */}
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.labelStyleTitle}>
                    {i18n['form:france:pasivo:titulo']}
                  </Typography>
                </Grid>

                <div className={classes.divContent} onClick={validatePasivo}>
                  <ElementRefresh
                    label={i18n['form:france:pasivo:accion']}
                    size={2}
                  />
                </div>

                <TableForm
                  labelHeader1={i18n['form:france:pasivo:header1']}
                  labelHeader2={i18n['form:france:pasivo:header2']}
                  labelHeader3={i18n['form:france:pasivo:header3']}
                  rows={[
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:1'],
                      column2Name: formValuesNames.pasivo_1_balance1,
                      column3Name: formValuesNames.pasivo_1_balance2,
                      column4Name: formValuesNames.pasivo_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:1.1'],
                      column2Name: formValuesNames.pasivo_1_1_balance1,
                      column3Name: formValuesNames.pasivo_1_1_balance2,
                      column4Name: formValuesNames.pasivo_1_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:1.2'],
                      column2Name: formValuesNames.pasivo_1_2_balance1,
                      column3Name: formValuesNames.pasivo_1_2_balance2,
                      column4Name: formValuesNames.pasivo_1_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:1.3'],
                      column2Name: formValuesNames.pasivo_1_3_balance1,
                      column3Name: formValuesNames.pasivo_1_3_balance2,
                      column4Name: formValuesNames.pasivo_1_3_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:1.4'],
                      column2Name: formValuesNames.pasivo_1_4_balance1,
                      column3Name: formValuesNames.pasivo_1_4_balance2,
                      column4Name: formValuesNames.pasivo_1_4_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:1.5'],
                      column2Name: formValuesNames.pasivo_1_5_balance1,
                      column3Name: formValuesNames.pasivo_1_5_balance2,
                      column4Name: formValuesNames.pasivo_1_5_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:2'],
                      column2Name: formValuesNames.pasivo_2_balance1,
                      column3Name: formValuesNames.pasivo_2_balance2,
                      column4Name: formValuesNames.pasivo_2_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:3'],
                      column2Name: formValuesNames.pasivo_3_balance1,
                      column3Name: formValuesNames.pasivo_3_balance2,
                      column4Name: formValuesNames.pasivo_3_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:4'],
                      column2Name: formValuesNames.pasivo_4_balance1,
                      column3Name: formValuesNames.pasivo_4_balance2,
                      column4Name: formValuesNames.pasivo_4_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.1'],
                      column2Name: formValuesNames.pasivo_4_1_balance1,
                      column3Name: formValuesNames.pasivo_4_1_balance2,
                      column4Name: formValuesNames.pasivo_4_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.1.2'],
                      column2Name: formValuesNames.pasivo_4_1_2_balance1,
                      column3Name: formValuesNames.pasivo_4_1_2_balance2,
                      column4Name: formValuesNames.pasivo_4_1_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.1.3'],
                      column2Name: formValuesNames.pasivo_4_1_3_balance1,
                      column3Name: formValuesNames.pasivo_4_1_3_balance2,
                      column4Name: formValuesNames.pasivo_4_1_3_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.1.4'],
                      column2Name: formValuesNames.pasivo_4_1_4_balance1,
                      column3Name: formValuesNames.pasivo_4_1_4_balance2,
                      column4Name: formValuesNames.pasivo_4_1_4_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.1.5'],
                      column2Name: formValuesNames.pasivo_4_1_5_balance1,
                      column3Name: formValuesNames.pasivo_4_1_5_balance2,
                      column4Name: formValuesNames.pasivo_4_1_5_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:4.2'],
                      column2Name: formValuesNames.pasivo_4_2_balance1,
                      column3Name: formValuesNames.pasivo_4_2_balance2,
                      column4Name: formValuesNames.pasivo_4_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.2.1'],
                      column2Name: formValuesNames.pasivo_4_2_1_balance1,
                      column3Name: formValuesNames.pasivo_4_2_1_balance2,
                      column4Name: formValuesNames.pasivo_4_2_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.2.2'],
                      column2Name: formValuesNames.pasivo_4_2_2_balance1,
                      column3Name: formValuesNames.pasivo_4_2_2_balance2,
                      column4Name: formValuesNames.pasivo_4_2_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.2.3'],
                      column2Name: formValuesNames.pasivo_4_2_3_balance1,
                      column3Name: formValuesNames.pasivo_4_2_3_balance2,
                      column4Name: formValuesNames.pasivo_4_2_3_balance3
                    },
                    {
                      column1Label: i18n['form:france:pasivo:4.2.4'],
                      column2Name: formValuesNames.pasivo_4_2_4_balance1,
                      column3Name: formValuesNames.pasivo_4_2_4_balance2,
                      column4Name: formValuesNames.pasivo_4_2_4_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:5'],
                      column2Name: formValuesNames.pasivo_5_balance1,
                      column3Name: formValuesNames.pasivo_5_balance2,
                      column4Name: formValuesNames.pasivo_5_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:pasivo:total'],
                      column2Name: formValuesNames.pasivo_total_balance1,
                      column3Name: formValuesNames.pasivo_total_balance2,
                      column4Name: formValuesNames.pasivo_total_balance3
                    }
                  ]}
                />
                {/* ################### FIN PASIVO ############################# */}

                {/* ################### CUENTAS ################################ */}
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.labelStyleTitle}>
                    {i18n['form:france:cuentas:titulo']}
                  </Typography>
                </Grid>

                <div className={classes.divContent} onClick={validateCuentas}>
                  <ElementRefresh
                    label={i18n['form:france:cuentas:accion']}
                    size={2}
                  />
                </div>

                <TableForm
                  labelHeader1={i18n['form:france:cuentas:header1']}
                  labelHeader2={i18n['form:france:cuentas:header2']}
                  labelHeader3={i18n['form:france:cuentas:header3']}
                  rows={[
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:1'],
                      column2Name: formValuesNames.cuentas_1_balance1,
                      column3Name: formValuesNames.cuentas_1_balance2,
                      column4Name: formValuesNames.cuentas_1_balance3
                    },
                    {
                      column1Label: i18n['form:france:cuentas:1.ventas'],
                      column2Name: formValuesNames.cuentas_1_ventas_balance1,
                      column3Name: formValuesNames.cuentas_1_ventas_balance2,
                      column4Name: formValuesNames.cuentas_1_ventas_balance3
                    },
                    {
                      column1Label: i18n['form:france:cuentas:1.prestaciones'],
                      column2Name: formValuesNames.cuentas_1_prestaciones_balance1,
                      column3Name: formValuesNames.cuentas_1_prestaciones_balance2,
                      column4Name: formValuesNames.cuentas_1_prestaciones_balance3
                    },
                    {
                      column1Label: i18n['form:france:cuentas:1.ingresos'],
                      column2Name: formValuesNames.cuentas_1_ingresos_balance1,
                      column3Name: formValuesNames.cuentas_1_ingresos_balance2,
                      column4Name: formValuesNames.cuentas_1_ingresos_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:2'],
                      column2Name: formValuesNames.cuentas_2_balance1,
                      column3Name: formValuesNames.cuentas_2_balance2,
                      column4Name: formValuesNames.cuentas_2_balance3
                    },
                    {
                      column1Label: i18n['form:france:cuentas:2.ingresos'],
                      column2Name: formValuesNames.cuentas_2_ingresos_balance1,
                      column3Name: formValuesNames.cuentas_2_ingresos_balance2,
                      column4Name: formValuesNames.cuentas_2_ingresos_balance3
                    },
                    {
                      column1Label: i18n['form:france:cuentas:2.gastos'],
                      column2Name: formValuesNames.cuentas_2_gastos_balance1,
                      column3Name: formValuesNames.cuentas_2_gastos_balance2,
                      column4Name: formValuesNames.cuentas_2_gastos_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:3'],
                      column2Name: formValuesNames.cuentas_3_balance1,
                      column3Name: formValuesNames.cuentas_3_balance2,
                      column4Name: formValuesNames.cuentas_3_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:4'],
                      column2Name: formValuesNames.cuentas_4_balance1,
                      column3Name: formValuesNames.cuentas_4_balance2,
                      column4Name: formValuesNames.cuentas_4_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:5'],
                      column2Name: formValuesNames.cuentas_5_balance1,
                      column3Name: formValuesNames.cuentas_5_balance2,
                      column4Name: formValuesNames.cuentas_5_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:6'],
                      column2Name: formValuesNames.cuentas_6_balance1,
                      column3Name: formValuesNames.cuentas_6_balance2,
                      column4Name: formValuesNames.cuentas_6_balance3
                    },
                    {
                      column1Bold: true,
                      column1Label: i18n['form:france:cuentas:7'],
                      column2Name: formValuesNames.cuentas_7_balance1,
                      column3Name: formValuesNames.cuentas_7_balance2,
                      column4Name: formValuesNames.cuentas_7_balance3
                    }
                  ]}
                />
                {/* ################### FIN CUENTAS ############################ */}

                {/* <SelectForm
                    label={i18n['form:france:auditoria:conclusion']}
                    name={formValuesNames.auditoriaConclusion}
                    options={selectOpts.auditoriaConclusion}
                  /> */}

                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:france:auditoria:conclusion']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.auditoriaConclusion}
                    value={formValuesNames.auditoriaConclusion}
                    options={selectOpts.auditoriaConclusion}
                    size={'l'}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:france:auditoria:conclusion']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.auditoriaConclusion}
                    value={formValuesNames.auditoriaConclusion}
                    options={selectOpts.auditoriaConclusion}
                    size={'l'}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:france:auditoria:comentario']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementTextArea
                    name={formValuesNames.auditoriaComentario}
                    label={''}
                    value={formValuesNames.auditoriaComentario}
                    cols={50}
                    rows={2}
                    size={'xl'}
                  />
                </Grid>
                <div className={classes.divFlexButton}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {[
                      {
                        label: i18n['form:france:guardar'],
                        click: handleSave,
                        align: classes.buttonMiddle
                      },
                      {
                        label: i18n['form:spain:poll:buttonAccept'],
                        click: handleAccept,
                        align: classes.buttonMiddle
                      },
                      {
                        label: i18n['form:spain:poll:buttonCancel'],
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

              </Grid>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

export { ReportFrance }
export type { IReportFrance }
