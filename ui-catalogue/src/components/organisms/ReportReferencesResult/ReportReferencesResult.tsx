import React, { useState } from 'react'
import { IReportReferencesResult } from './types'
import {
  Tab,
  Tabs,
  AppBar,
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'
import {
  ElementInput
} from '../../atoms'
import { TabPanel } from '../TabPanel/TabPanel'
import { Form, Formik, FormikProps } from 'formik'
import { ReportReferencesIdentificacion } from '../../molecules/ReportReferencesIdentificacion/ReportReferencesIdentificacion'
import { HighReports } from '../HighReports/HightReports'
import { ReceivingReports } from '../ReceivingReports/ReceivingReports'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

function a11yProps (index: number): any {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '0.6rem',
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  divFlex2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '0.6rem',
    width: '100%'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    backgroundColor: '#ffffff',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMind-Bold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    marginBottom: '1rem',
    marginTop: '1.6rem'
  },
  divLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '2rem'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'space-between'
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
  AppBar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  button: {
    width: '135px',
    height: '36px',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    background: '#003b64',
    backgroundSize: '30px 25px;',
    backgroundPosition: '0px 6px',
    color: '#fff',
    border: '1px',
    '&:hover': {
      background: '#ff9900',
      backgroundSize: '30px 25px;',
      backgroundPosition: '0px 6px',
      color: '#fff'
    }
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    padding: '5px',
    textAlign: 'right',
    cursor: 'pointer'
  },
  icons: {
    marginTop: '2rem'
  }
})

const ReportReferencesResult: React.FC<IReportReferencesResult> = ({
  i18n,
  data,
  identificacionProps,
  highReportsProps,
  receivingReportsProps,
  handleSubmitReivingReports,
  handleDelete,
  creica,
  handleExit,
  handleImpr,
  handleDownload,
  handleBack
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [tabSelected, setTabSelected] = useState(0)
  const [openAlta, setOpenAlta] = useState(false)
  const [openRecepcion, setOpenRecepcion] = useState(false)
  const [formValues, setFormValues] = useState(data)

  const handleChangeFormValues: (e) => void = e => {
    e.preventDefault()
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue)
    setTabSelected(newValue)
  }

  const handleAlta = (): void => {
    setOpenAlta(true)
  }
  const handleRecepcion = (): void => {
    setOpenRecepcion(true)
  }

  receivingReportsProps.elementBackProps.handleBack = () => {
    setOpenAlta(false)
    setOpenRecepcion(false)
  }

  highReportsProps.handleCancel = () => {
    setOpenAlta(false)
    setOpenRecepcion(false)
  }

  receivingReportsProps.handleSubmit = (petitionNum, codCompany, product, codCorrespondent) => {
    handleSubmitReivingReports(petitionNum, codCompany, product, codCorrespondent)
  }

  return (
    <div>
      {!openAlta && !openRecepcion
        ? <div className={classes.root}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className={classes.divHeader}>
                {i18n['ReportReferencesResult:detailTbTitle']}
              </div>
              <div className={classes.divLinks}>

                <ArrowBackIcon className={classes.icons}/>
                <Typography className={classes.labelStyle} onClick={handleBack}>
                  <u>{i18n['ReportReferencesResult:atras']}</u>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Formik
            initialValues={formValues}
            onSubmit={(values, actions) => {
              console.log(formValues) // eslint-disable-line
            }}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <div className={classes.divContainer}>
                  { creica
                    ? <>
                      {[
                        {
                          type: 'text',
                          name: 'referencia',
                          label: i18n['ReportReferencesResult:referencia'],
                          value: data.referencia,
                          typeBis: 'text',
                          nameBis: 'nombredoc',
                          labelBis: i18n['ReportReferencesResult:nombredoc'],
                          valueBis: data.nombredoc
                        },
                        {
                          type: 'text',
                          name: 'tipodocumento',
                          label: i18n['ReportReferencesResult:tipodocumento'],
                          value: data.tipodocumento,
                          typeBis: 'text',
                          nameBis: 'fechamensaje',
                          labelBis: i18n['ReportReferencesResult:fechamensaje'],
                          valueBis: data.fechamensaje
                        },
                        {
                          type: 'text',
                          name: 'fecha',
                          label: i18n['ReportReferencesResult:fecha'],
                          value: data.fecha,
                          typeBis: 'text',
                          nameBis: 'fechaultimabus',
                          labelBis: i18n['ReportReferencesResult:fechaultimabus'],
                          valueBis: data.fechaultimabus
                        },
                        {
                          type: 'text',
                          name: 'ndocumento',
                          label: i18n['ReportReferencesResult:ndocumento'],
                          value: data.ndocumento,
                          typeBis: 'text',
                          nameBis: 'codigoempresa',
                          labelBis: i18n['ReportReferencesResult:codigoempresa'],
                          valueBis: data.codigoempresa
                        },
                        {
                          type: 'text',
                          name: 'moneda',
                          label: i18n['ReportReferencesResult:moneda'],
                          value: data.moneda,
                          typeBis: 'text',
                          nameBis: 'nombrefichero',
                          labelBis: i18n['ReportReferencesResult:nombrefichero'],
                          valueBis: data.nombrefichero
                        }
                      ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis }, index) => (
                        <div className={classes.divFlex} key={index}>
                          <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <ElementInput
                              type={type}
                              name={name}
                              label={label}
                              value={value}
                              size='m'
                              onChange={handleChangeFormValues}
                            />
                            <ElementInput
                              type={typeBis}
                              name={nameBis}
                              label={labelBis}
                              value={valueBis}
                              size='m'
                              onChange={handleChangeFormValues}
                            />
                          </Grid>
                        </div>
                      ))}
                      <AppBar position='static' className={classes.AppBar}>
                        <Tabs value={value} onChange={handleChange} aria-label='pestaña de navegacion'>
                          <Tab className={ tabSelected === 0 ? classes.tabStyleActive : classes.tabStyleDefault} label={i18n['ReportReferencesResult:Tab:identificacion']} {...a11yProps(0)}/>
                        </Tabs>
                      </AppBar>
                      <TabPanel value={value} index={0}>
                        <ReportReferencesIdentificacion
                          i18n={identificacionProps.i18n}
                          data={identificacionProps.data}
                          handleRecepcion={handleRecepcion}
                          handleCancel={handleDelete}
                          handleAlta={handleAlta}
                        />
                      </TabPanel>
                    </>
                    : <div className={classes.root}>
                      {[
                        {
                          type: 'text',
                          name: 'remitente',
                          label: i18n['ReportReferencesResult:Tab:remitente'],
                          value: data.remitente
                        },
                        {
                          type: 'text',
                          name: 'nombredoc',
                          label: i18n['ReportReferencesResult:Tab:nombredocumento'],
                          value: data.nombredoc
                        }
                      ].map(({ type, name, label, value }, index) => (
                        <div className={classes.divFlex2} key={index}>
                          <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <ElementInput
                              type={type}
                              name={name}
                              label={label}
                              value={value}
                              size='l'
                              onChange={handleChangeFormValues}
                            />
                          </Grid>
                        </div>
                      ))}
                      {[
                        {
                          type: 'text',
                          name: 'tipodocumento',
                          label: i18n['ReportReferencesResult:tipodocumento'],
                          value: data.tipodocumento,
                          typeBis: 'text',
                          nameBis: 'fechamensaje',
                          labelBis: i18n['ReportReferencesResult:fechamensaje'],
                          valueBis: data.fechamensaje
                        },
                        {
                          type: 'text',
                          name: 'fecha',
                          label: i18n['ReportReferencesResult:fecha'],
                          value: data.fecha,
                          typeBis: 'text',
                          nameBis: 'fechaultimabus',
                          labelBis: i18n['ReportReferencesResult:fechaultimabus'],
                          valueBis: data.fechaultimabus
                        },
                        {
                          type: 'text',
                          name: 'ndocumento',
                          label: i18n['ReportReferencesResult:ndocumento'],
                          value: data.ndocumento,
                          typeBis: 'text',
                          nameBis: 'npeticion',
                          labelBis: i18n['ReportReferencesResult:Tab:numeropeticion'],
                          valueBis: data.npeticion
                        },
                        {
                          type: 'text',
                          name: 'moneda',
                          label: i18n['ReportReferencesResult:moneda'],
                          value: data.moneda,
                          typeBis: 'text',
                          nameBis: 'nombrefichero',
                          labelBis: i18n['ReportReferencesResult:nombrefichero'],
                          valueBis: data.nombrefichero
                        }
                      ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis }, index) => (
                        <div className={classes.divFlex2} key={index}>
                          <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <ElementInput
                              type={type}
                              name={name}
                              label={label}
                              value={value}
                              size='m'
                              onChange={handleChangeFormValues}
                            />
                            <ElementInput
                              type={typeBis}
                              name={nameBis}
                              label={labelBis}
                              value={valueBis}
                              size='m'
                              onChange={handleChangeFormValues}
                            />
                          </Grid>
                        </div>
                      ))}
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <div className={classes.divHeader}>
                            {i18n['ReportReferencesResult:detailTbTitleBis']}
                          </div>
                        </Grid>
                      </Grid>
                      {[
                        {
                          type: 'text',
                          name: 'referencia',
                          label: i18n['ReportReferencesResult:referencia'],
                          value: data.referencia
                        },
                        {
                          type: 'text',
                          name: 'vat',
                          label: i18n['ReportReferencesResult:vat'],
                          value: data.vat
                        }
                      ].map(({ type, name, label, value }, index) => (
                        <div className={classes.divFlex2} key={index}>
                          <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                            <ElementInput
                              type={type}
                              name={name}
                              label={label}
                              value={value}
                              size='l'
                              onChange={handleChangeFormValues}
                            />
                          </Grid>
                        </div>
                      ))}
                      <div className={classes.divButtons}>
                        <button
                          onClick={handleExit}
                          className={classes.button}
                        >
                        SALIR
                        </button>
                        <button
                          onClick={handleImpr}
                          className={classes.button}
                        >
                        IMPRIMIR
                        </button>
                        <button
                          onClick={handleDownload}
                          className={classes.button}
                        >
                        DESCARGAR
                        </button>
                      </div>
                    </div>
                  }

                </div>
              </Form>
            )}
          </Formik>

        </div>
        : <> </>}
      {openAlta
        ? <HighReports
          i18n={highReportsProps.i18n}
          countries={highReportsProps.countries}
          products={highReportsProps.products}
          corresponsals={highReportsProps.corresponsals}
          drawerBusinessCodeProps={highReportsProps.drawerBusinessCodeProps}
          documentType={highReportsProps.documentType}
          spendType={highReportsProps.spendType}
          handleCancel={highReportsProps.handleCancel}
          handleSearchCorresponsal={highReportsProps.handleSearchCorresponsal}
          handleAccept={highReportsProps.handleAccept}
          confirmationProps={highReportsProps.confirmationProps}
        />

        : <> </>}
      {openRecepcion
        ? <ReceivingReports
          i18n={receivingReportsProps.i18n}
          countries={receivingReportsProps.countries}
          corresponsals={receivingReportsProps.corresponsals}
          elementBackProps={receivingReportsProps.elementBackProps}
          drawerBusinessCodeProps={receivingReportsProps.drawerBusinessCodeProps}
          products={receivingReportsProps.products}
          handleSubmit={receivingReportsProps.handleSubmit}
          handleCancel={receivingReportsProps.handleCancel}
          handleSearchCorresponsal={receivingReportsProps.handleSearchCorresponsal}
        />
        : <> </>}
    </div>
  )
}

export { ReportReferencesResult }
