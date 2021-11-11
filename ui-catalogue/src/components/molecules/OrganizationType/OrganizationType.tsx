import React from 'react'
import { IOrganizationType } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput
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
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  labelHeaderSub: {
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
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  }
})

const OrganizationType: React.FC<IOrganizationType> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['OrganizationType:title']}
          </span>
        </div>
      </div>

      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
          console.log(values) // eslint-disable-line
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className={classes.divContainer}>

              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeaderSub}>
                    {i18n['OrganizationType:titleSub']}
                  </span>
                </div>
              </div>

              {[
                {
                  type: 'text',
                  name: 'statusActual',
                  label: i18n['OrganizationType:statusActual'],
                  value: data.statusActual
                },
                {
                  type: 'text',
                  name: 'fechaStatusActual',
                  label: i18n['OrganizationType:fechaStatusActual'],
                  value: data.fechaStatusActual
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
                      size='l'
                      readonly={true}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'tipoOrganizacion',
                  label: i18n['OrganizationType:tipoOrganizacion'],
                  value: data.tipoOrganizacion
                },
                {
                  type: 'text',
                  name: 'fechaTomaControl',
                  label: i18n['OrganizationType:fechaTomaControl'],
                  value: data.fechaTomaControl
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
                      size='l'
                      readonly={true}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'anoConstitucion',
                  label: i18n['OrganizationType:anoConstitucion'],
                  value: data.anoConstitucion
                },
                {
                  type: 'text',
                  name: 'mes',
                  label: i18n['OrganizationType:mes'],
                  value: data.mes
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
                      size='l'
                      readonly={true}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'tipoempresa',
                  label: i18n['OrganizationType:tipoempresa'],
                  value: data.tipoempresa
                },
                {
                  type: 'text',
                  name: 'tipofirma',
                  label: i18n['OrganizationType:tipofirma'],
                  value: data.tipofirma
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
                      size='l'
                      readonly={true}
                    />
                  </Grid>
                </div>
              ))}

              {[
                {
                  type: 'text',
                  name: 'statusActual',
                  label: i18n['OrganizationType:statusActual'],
                  value: data.statusActual
                },
                {
                  type: 'text',
                  name: 'fechaStatusActual',
                  label: i18n['OrganizationType:fechaStatusActual'],
                  value: data.fechaStatusActual
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
                      size='l'
                      readonly={true}
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

export { OrganizationType }
