import React from 'react'
import { IApplicationDetails } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import { ElementInput } from '../../atoms'

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
  },
  divMiddle: {
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
  }
})

const ApplicationDetails: React.FC<IApplicationDetails> = ({
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
                {i18n['ApplicationDetails:title']}
              </span>
            </div>
          </div>
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
              {[
                {
                  type: 'text',
                  label: i18n['ApplicationDetails:npeticion'],
                  name: 'npeticion',
                  value: data.npeticion,
                  typeBis: 'text',
                  labelBis: i18n['ApplicationDetails:plazapago'],
                  nameBis: 'plazapago',
                  valueBis: data.plazapago
                },
                {
                  type: 'text',
                  label: i18n['ApplicationDetails:fpeticion'],
                  name: 'fpeticion',
                  value: data.fpeticion,
                  typeBis: 'text',
                  labelBis: i18n['ApplicationDetails:modelo'],
                  nameBis: 'modelo',
                  valueBis: data.modelo
                },
                {
                  type: 'text',
                  label: i18n['ApplicationDetails:productoobtener'],
                  name: 'productoobtener',
                  value: data.productoobtener,
                  typeBis: 'text',
                  labelBis: i18n['ApplicationDetails:importeoperacion'],
                  nameBis: 'modelo',
                  valueBis: data.importeoperacion
                },
                {
                  type: 'text',
                  label: i18n['ApplicationDetails:divoperacion'],
                  name: 'divoperacion',
                  value: data.divoperacion,
                  typeBis: 'text',
                  labelBis: i18n['ApplicationDetails:importeoperacioncre'],
                  nameBis: 'importeoperacioncre',
                  valueBis: data.importeoperacioncre
                }

              ].map(({ type, label, name, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
                    />
                    <ElementInput
                      type={typeBis}
                      name={nameBis}
                      label={labelBis}
                      value={valueBis}
                      size='m'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  label: i18n['ApplicationDetails:divoperacioncre'],
                  name: 'divoperacioncre',
                  value: data.divoperacioncre
                }
              ].map(({ type, label, name, value }, index) => (
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

export { ApplicationDetails }
