import React from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import {
  ElementInput,
  ElementSelect,
  ElementTextArea,
  ElementRadio
} from '../../atoms'
import { Balances } from './Balances'
import { IReportsSpain } from './types'

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
    padding: '5px',
    marginTop: '1rem'
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '40px'
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
  buttonMiddle: {
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const ReportSpain: React.FC<IReportsSpain> = ({
  i18n,
  balanceProps,
  formValues,
  legalForm,
  banksReferences,
  opinionsCompany,
  opinionsSector,
  handleCancel,
  handleSave,
  handleAccept
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
        <CardHeader>
          {i18n['form:spain:h1title']}
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={formValues}
            onSubmit={(values, actions) => {
              handleAccept(values)
            }}

          >
            {(props: FormikProps<any>) => (
              <Form>
                {(() => {
                  console.log(props) // eslint-disable-line
                })()}
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h2" className={classes.labelHeader}>
                      {i18n['form:spain:h1title']}
                    </Typography>
                  </Grid>
                  {/* ##################### POLL ############################# */}
                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.labelHeader}>
                      {i18n['form:spain:poll:h2title']}
                    </Typography>
                  </Grid>
                  {[
                    {
                      label: i18n['form:spain:poll:label1rs'],
                      name: formValuesNames.cif,
                      value: formValuesNames.cif
                    },
                    {
                      label: i18n['form:spain:poll:label2rs'],
                      name: formValuesNames.name,
                      value: formValuesNames.name
                    },
                    {
                      label: i18n['form:spain:poll:label3rs'],
                      name: formValuesNames.address,
                      value: formValuesNames.address
                    },
                    {
                      label: i18n['form:spain:poll:label4rs'],
                      name: formValuesNames.province,
                      value: formValuesNames.province
                    },
                    {
                      label: i18n['form:spain:poll:label5rs'],
                      name: formValuesNames.postalcode,
                      value: formValuesNames.postalcode
                    },
                    {
                      label: i18n['form:spain:poll:label6rs'],
                      name: formValuesNames.phone,
                      value: formValuesNames.phone
                    },
                    {
                      label: i18n['form:spain:poll:label7rs'],
                      name: formValuesNames.fax,
                      value: formValuesNames.fax
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementInput
                      key={`${index}`}
                      type={'text'}
                      name={name}
                      label={label}
                      value={value}
                      size={'xl'}
                    />
                  ))}
                  <Grid item xs={3}>
                    <Typography className={classes.labelStyle}>
                      {i18n['form:spain:poll:label8rs']}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={8}>
                    <ElementSelect
                      label={''}
                      name={formValuesNames.legalForm}
                      value={formValuesNames.legalForm}
                      options={legalForm}
                      size={'m'}
                    />
                  </Grid>
                  {[
                    {
                      label: i18n['form:spain:poll:label9rs'],
                      name: formValuesNames.constitutionDateMM,
                      value: formValuesNames.constitutionDateMM
                    },
                    {
                      label: i18n['form:spain:poll:label10rs'],
                      name: formValuesNames.numberBranches,
                      value: formValuesNames.numberBranches
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementInput
                      key={`${index}`}
                      type={'text'}
                      name={name}
                      label={label}
                      value={value}
                      size={'xl'}
                    />
                  ))}
                  {[
                    {
                      label: i18n['form:spain:poll:label11rs'],
                      name: formValuesNames.branches,
                      value: formValuesNames.branches
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementTextArea
                      key={`${index}`}
                      name={name}
                      label={label}
                      value={value}
                      cols={50}
                      rows={2}
                      size={'xl'}
                    />
                  ))}
                  {[
                    {
                      label: i18n['form:spain:poll:label12rs'],
                      name: formValuesNames.employess,
                      value: formValuesNames.employess
                    },
                    {
                      label: i18n['form:spain:poll:label13rs'],
                      name: formValuesNames.socialCapital,
                      value: formValuesNames.socialCapital
                    },
                    {
                      label: i18n['form:spain:poll:label14rs'],
                      name: formValuesNames.disbursedCapital,
                      value: formValuesNames.disbursedCapital
                    },
                    {
                      label: i18n['form:spain:poll:label15rs'],
                      name: formValuesNames.cnae,
                      value: formValuesNames.cnae
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementInput
                      key={`${index}`}
                      type={'text'}
                      name={name}
                      label={label}
                      value={value}
                      size={'xl'}
                    />
                  ))}
                  {[
                    {
                      label: i18n['form:spain:poll:label16rs'],
                      name: formValuesNames.typeProducts,
                      value: formValuesNames.typeProducts
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementTextArea
                      key={`${index}`}
                      label={label}
                      name={name}
                      value={value}
                      cols={50}
                      rows={2}
                      size={'xl'}
                    />
                  ))}
                  {[
                    {
                      label: i18n['form:spain:poll:label17rs'],
                      name: formValuesNames.estimatedSales,
                      value: formValuesNames.estimatedSales
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementInput
                      key={`${index}`}
                      type={'text'}
                      name={name}
                      label={label}
                      value={value}
                      size={'xl'}
                    />
                  ))}
                  {[
                    {
                      label: i18n['form:spain:poll:label18rs'],
                      name: formValuesNames.banksOperates,
                      value: formValuesNames.banksOperates
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementTextArea
                      key={`${index}`}
                      label={label}
                      name={name}
                      value={value}
                      cols={50}
                      rows={2}
                      size={'xl'}
                    />
                  ))}
                  <Grid item xs={3}>
                    <Typography className={classes.labelStyle}>
                      {i18n['form:spain:poll:label19rs']}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={8}>
                    <ElementSelect
                      label={''}
                      name={formValuesNames.banksReference}
                      value={formValuesNames.banksReference}
                      options={banksReferences}
                      size={'m'}
                    />
                  </Grid>
                  {[
                    {
                      label: i18n['form:spain:poll:label20rs'],
                      name: formValuesNames.customerConcentration,
                      value: formValuesNames.customerConcentration
                    },
                    {
                      label: i18n['form:spain:poll:label21rs'],
                      name: formValuesNames.mainCustomers,
                      value: formValuesNames.mainCustomers
                    },
                    {
                      label: i18n['form:spain:poll:label22rs'],
                      name: formValuesNames.mainSuppliers,
                      value: formValuesNames.mainSuppliers
                    },
                    {
                      label: i18n['form:spain:poll:label23rs'],
                      name: formValuesNames.competitors,
                      value: formValuesNames.competitors
                    },
                    {
                      label: i18n['form:spain:poll:label24rs'],
                      name: formValuesNames.exportPercentage,
                      value: formValuesNames.exportPercentage
                    },
                    {
                      label: i18n['form:spain:poll:label25rs'],
                      name: formValuesNames.countriesExports,
                      value: formValuesNames.countriesExports
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementInput
                      key={`${index}`}
                      type={'text'}
                      name={name}
                      label={label}
                      value={value}
                      size={'xl'}
                    />
                  ))}
                  {[
                    {
                      label: i18n['form:spain:poll:label26rs'],
                      name: formValuesNames.shareHolders,
                      value: formValuesNames.shareHolders
                    },
                    {
                      label: i18n['form:spain:poll:label27rs'],
                      name: formValuesNames.participated,
                      value: formValuesNames.participated
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementTextArea
                      key={`${index}`}
                      label={label}
                      value={value}
                      name={name}
                      cols={50}
                      rows={2}
                      size={'xl'}
                    />
                  ))}
                  <Grid item xs={3}>
                    <Typography className={classes.labelStyle}>
                      {i18n['form:spain:poll:label28rs']}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={8}>
                    <ElementSelect
                      label={''}
                      name={formValuesNames.opinionCompany}
                      value={formValuesNames.opinionCompany}
                      options={opinionsCompany}
                      size={'xl'}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.labelStyle}>
                      {i18n['form:spain:poll:label29rs']}
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={8}>
                    <ElementSelect
                      label={''}
                      name={formValuesNames.opinionSector}
                      value={formValuesNames.opinionSector}
                      options={opinionsSector}
                      size={'xl'}
                    />
                  </Grid>
                  {[
                    {
                      label: i18n['form:spain:poll:label30rs'],
                      name: formValuesNames.comments,
                      value: formValuesNames.comments
                    }
                  ].map(({ label, name, value }, index) => (
                    <ElementTextArea
                      key={`${index}`}
                      label={label}
                      name={name}
                      value={value}
                      cols={50}
                      rows={2}
                      size={'xl'}
                    />
                  ))}
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end">
                    {[
                      {
                        label: i18n['form:spain:poll:label31rs'],
                        name: formValuesNames.confidentiality,
                        value: formValuesNames.confidentiality,
                        labelOpt1: i18n['form:spain:poll:label32rs'],
                        labelOpt2: i18n['form:spain:poll:label33rs']
                      },
                      {
                        label: i18n['form:spain:poll:label34rs'],
                        name: formValuesNames.generateAlert,
                        value: formValuesNames.generateAlert,
                        labelOpt1: i18n['form:spain:poll:label32rs'],
                        labelOpt2: i18n['form:spain:poll:label33rs']
                      },
                      {
                        label: i18n['form:spain:poll:label35rs'],
                        name: formValuesNames.consolidated,
                        value: formValuesNames.consolidated,
                        labelOpt1: i18n['form:spain:poll:label32rs'],
                        labelOpt2: i18n['form:spain:poll:label33rs']
                      }
                    ].map(({ label, name, value, labelOpt1, labelOpt2 }, index) => (
                      <ElementRadio
                        key={index}
                        label={label}
                        name={name}
                        value={value}
                        labelOpt1={labelOpt1}
                        labelOpt2={labelOpt2}
                      />
                    ))}
                  </Grid>
                  {/* ##################### FIN POLL ####################### */}
                  {/* ##################### BALANCE ####################### */}
                  <Balances
                    i18n={balanceProps.i18n}
                    validateOriginBalances={balanceProps.validateOriginBalances}
                    validateSituacion={balanceProps.validateSituacion}
                    validatePatrimonio={balanceProps.validatePatrimonio}
                    validatedContinuedOperations={balanceProps.validatedContinuedOperations}
                    formValues={balanceProps.formValues}
                    originsBalances={balanceProps.originsBalances}
                    auditConclusion={balanceProps.auditConclusion}
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
                        label: i18n['form:spain:poll:buttonSave'],
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

              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

export { ReportSpain }
