import React, { Fragment, useState } from 'react'
import {
  Tab,
  Tabs,
  AppBar,
  makeStyles,
  Grid
} from '@material-ui/core'
import { IRequesForm } from './types'
import {
  ElementInput,
  ElementTextArea,
  ElementRadio,
  ElementSelect
} from '../../atoms'
import { TabPanel } from '../TabPanel/TabPanel'
import { BalancesNPGC } from '../BalancesNPGC/BalancesNPGC'
import { Form, Formik, FormikProps } from 'formik'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    maxWidth: '60vw'
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
  customStyleOnTab: {
    fontWeight: 'bold'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
    alignItems: 'center',
    marginBottom: '2.6rem'
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

const PetitionForm: React.FC<IRequesForm> = ({
  i18n,
  data,
  formsJuridic,
  referencesBank,
  commentsFactory,
  balanceNPGC,
  handleAccept,
  handleBack,
  handleCancel
}) => {
  function a11yProps (index: number): any {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [tabSelected, setTabSelected] = useState(0)

  const [formValues, setFormValues] = useState(data)

  const handleSubmitAccept = (formValues): void => {
    handleAccept(formValues)
  }

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

  const formatDate = (obj): string => {
    var arrayDate = obj.split('/')

    return arrayDate[2] + '-' + arrayDate[1] + '-' + arrayDate[0]
  }

  return (
    <>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['PetitionRequestForm:detailTbTitle']}
          </span>
        </div>
      </div>

      <Formik
        initialValues={formValues}
        onSubmit={(values, actions) => {
          handleSubmitAccept(formValues)
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className={classes.divContainer}>

              {[
                {
                  type: 'text',
                  name: 'codFiscal',
                  label: i18n['PetitionRequestForm:detailTbFiscal'],
                  value: data.codFiscal
                },
                {
                  type: 'text',
                  name: 'nombreSujeto',
                  label: i18n['PetitionRequestForm:detailTbName'],
                  value: data.nombreSujeto
                },
                {
                  type: 'text',
                  name: 'domicilio',
                  label: i18n['PetitionRequestForm:detailTbAddress'],
                  value: data.domicilio
                }
              ].map(({ type, name, label, value }, index) => (
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
                      size='xl'
                      onChange={handleChangeFormValues}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'provincia',
                  label: i18n['PetitionRequestForm:detailTbProvince'],
                  value: data.provincia,
                  typeBis: 'text',
                  nameBis: 'codPostal',
                  labelBis: i18n['PetitionRequestForm:detailTbPostalCode'],
                  valueBis: data.codPostal
                },
                {
                  type: 'text',
                  name: 'numeroTelefono',
                  label: i18n['PetitionRequestForm:detailTbPhone'],
                  value: data.numeroTelefono,
                  typeBis: 'text',
                  nameBis: 'numeroFax',
                  labelBis: i18n['PetitionRequestForm:detailTbFax'],
                  valueBis: data.numeroFax
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

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <ElementSelect
                    label={i18n['PetitionRequestForm:detailTbJuridica']}
                    name= 'formaJuridica'
                    value={formatDate(data.fechaConstitucion)}
                    options={formsJuridic}
                    size='m'
                    onChange={handleChangeFormValues}
                  />
                  <ElementInput
                    type={'date'}
                    name={'fechaConstitucion'}
                    label={i18n['PetitionRequestForm:detailTbFechaConstitucion']}
                    value={formatDate(data.fechaConstitucion)}
                    size='m'
                    onChange={handleChangeFormValues}
                  />
                </Grid>
              </div>

              {[
                {
                  label: i18n['PetitionRequestForm:detailTbSucursales'],
                  name: 'sucursales',
                  value: data.sucursales
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
                      onChange={handleChangeFormValues}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'empleados',
                  label: i18n['PetitionRequestForm:detailTbEmpleados'],
                  value: data.empleados,
                  typeBis: 'text',
                  nameBis: 'capitalSocial',
                  labelBis: i18n['PetitionRequestForm:detailTbCapitalSocial'],
                  valueBis: data.capitalSocial
                },
                {
                  type: 'text',
                  name: 'capitalDesembolsado',
                  label: i18n['PetitionRequestForm:detailTbCapitalDesem'],
                  value: data.capitalDesembolsado,
                  typeBis: 'text',
                  nameBis: 'CNAE',
                  labelBis: i18n['PetitionRequestForm:detailTbCNAE'],
                  valueBis: data.CNAE
                },
                {
                  type: 'text',
                  name: 'tipoProducto',
                  label: i18n['PetitionRequestForm:detailTbTipoProducto'],
                  value: data.tipoProducto,
                  typeBis: 'text',
                  nameBis: 'ventasEstimadas',
                  labelBis: i18n['PetitionRequestForm:detailTbVentasEstimadas'],
                  valueBis: data.ventasEstimadas
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

              {[
                {
                  label: i18n['PetitionRequestForm:detailTbBancos'],
                  name: 'bancos',
                  value: data.bancos
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
                      onChange={handleChangeFormValues}
                    />
                  </Grid>
                </div>
              ))}

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <ElementSelect
                    label={i18n['PetitionRequestForm:detailTbRefBanco']}
                    name='refBanco'
                    value={data.refBanco}
                    options={referencesBank}
                    size='m'
                    onChange={handleChangeFormValues}
                  />
                  <ElementInput
                    type={'text'}
                    name={'concClientes'}
                    label={i18n['PetitionRequestForm:detailTbConcClientes']}
                    value={data.concClientes}
                    size='m'
                    onChange={handleChangeFormValues}
                  />
                </Grid>
              </div>

              {[
                {
                  type: 'text',
                  name: 'princClientes',
                  label: i18n['PetitionRequestForm:detailTbPrinClientes'],
                  value: data.princClientes,
                  typeBis: 'text',
                  nameBis: 'princProveedores',
                  labelBis: i18n['PetitionRequestForm:detailTbPrinProveedores'],
                  valueBis: data.princProveedores
                },
                {
                  type: 'text',
                  name: 'competidores',
                  label: i18n['PetitionRequestForm:detailTbCompetidores'],
                  value: data.competidores,
                  typeBis: 'text',
                  nameBis: 'exportacion',
                  labelBis: i18n['PetitionRequestForm:detailTbExportación'],
                  valueBis: data.exportacion
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

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <ElementInput
                    type='text'
                    name='paises'
                    label={i18n['PetitionRequestForm:detailTbPaisesExp']}
                    value={data.paises}
                    size='xl'
                    onChange={handleChangeFormValues}
                  />
                </Grid>
              </div>

              {[
                {
                  label: i18n['PetitionRequestForm:detailTbAccionistas'],
                  name: 'accionistas',
                  value: data.accionistas
                },
                {
                  label: i18n['PetitionRequestForm:detailTbParticipadas'],
                  name: 'participadas',
                  value: data.participadas
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
                      onChange={handleChangeFormValues}
                    />
                  </Grid>
                </div>
              ))}

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <ElementSelect
                    label={i18n['PetitionRequestForm:detailTbOpinionEmpresa']}
                    name='opinionEmpresa'
                    value={data.opinionEmpresa}
                    options={commentsFactory}
                    size='m'
                    onChange={handleChangeFormValues}
                  />
                  <ElementInput
                    type={'text'}
                    name={'opinionSector'}
                    label={i18n['PetitionRequestForm:detailTbOpinionSector']}
                    value={data.opinionSector}
                    size='m'
                    onChange={handleChangeFormValues}
                  />
                </Grid>
              </div>

              {[
                {
                  label: i18n['PetitionRequestForm:detailTbObservations'],
                  name: 'observaciones',
                  value: data.observaciones
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
                      onChange={handleChangeFormValues}
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
                      label: i18n['PetitionRequestForm:detailTbConfidencial'],
                      name: 'confidencial',
                      value: data.confidencial
                    },
                    {
                      label: i18n['PetitionRequestForm:detailTbAlerta'],
                      name: 'alerta',
                      value: data.alerta
                    },
                    {
                      label: i18n['PetitionRequestForm:detailTbConsolidado'],
                      name: 'consolidado',
                      value: data.consolidado
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementRadio
                      label={label}
                      name={name}
                      value={value}
                      labelOpt1={i18n['PetitionRequestForm:detailRbYes']}
                      labelOpt2={i18n['PetitionRequestForm:detailRbNo']}
                      key={index}
                      onChange={handleChangeFormValues}
                    />
                  ))}
                </Grid>
              </div>

              <div className={classes.divFlexTabs}>
                <AppBar position='static' className={classes.AppBar}>
                  <Tabs value={value} onChange={handleChange} aria-label='pestaña de navegacion'>
                    <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={6} className={ tabSelected === 0 ? classes.tabStyleActive : classes.tabStyleDefault}>
                        <Tab
                          onClick={(e) => handleChange(e, 0)}
                          label={<span className={classes.customStyleOnTab}> {i18n['PetitionRequestForm:detailTbBalancesNPGC']} </span>}
                          {...a11yProps(0)}
                        />
                      </Grid>
                      <Grid item xs={6} className={ tabSelected === 1 ? classes.tabStyleActive : classes.tabStyleDefault}>
                        {/* <Tab
                              onClick={(e) => handleChange(e, 0)}
                              label={<span className={classes.customStyleOnTab}> {i18n['PetitionRequestForm:detailTbBalances']} </span>}
                              {...a11yProps(1)}
                            /> */}
                      </Grid>
                    </Grid>
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <BalancesNPGC
                    i18n={balanceNPGC.i18n}
                    data={formValues}
                    origenBalances={balanceNPGC.origenBalances}
                    handleRefresh={balanceNPGC.handleRefresh}
                  />
                </TabPanel>
                <TabPanel value={value} index={1}>
                </TabPanel>
              </div>
              {[
                {
                  type: 'text',
                  name: 'conclAuditoria',
                  label: i18n['PetitionRequestForm:detailTbConclusionAudit'],
                  value: data.conclAuditoria
                },
                {
                  type: 'text',
                  name: 'comenAuditoria',
                  label: i18n['PetitionRequestForm:detailTbComentarioAudit'],
                  value: data.comenAuditoria
                }
              ].map(({ type, name, label, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <ElementInput
                      type={type}
                      name={name}
                      label={label}
                      value={value}
                      size='xl'
                      onChange={handleChangeFormValues}
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
                      label: i18n['PetitionRequestForm:detailBtReturn'],
                      click: handleBack,
                      align: classes.buttonMiddle
                    },
                    {
                      label: i18n['PetitionRequestForm:detailBtAcept'],
                      isSubmit: true,
                      align: classes.buttonMiddle
                    },
                    {
                      label: i18n['PetitionRequestForm:detailBtCancel'],
                      click: handleCancel,
                      align: classes.buttonMiddle
                    }
                  ].map(({ label, click, align, isSubmit }, index) => (
                    <Grid item xs={12} sm={2} md={2} lg={2} xl={2}
                      key={index}>
                      <div className={align}>
                        {isSubmit
                          ? <button
                            type="submit"
                            className={classes.button}
                          >
                            {label}
                          </button>
                          : <button
                            onClick={click}
                            className={classes.button}
                          >
                            {label}
                          </button>
                        }
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export { PetitionForm }
