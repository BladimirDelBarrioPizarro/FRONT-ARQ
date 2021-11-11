import React from 'react'
import { IBouncedChecks } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementTableLabel
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
    justifyContent: 'flex-start'
    // marginRight: '6rem'
  },
  divLabels: {
    display: 'flex',
    flexDirection: 'row'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
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
    marginLeft: '20rem'
  }
})

const BouncedChecks: React.FC<IBouncedChecks> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['BouncedChecks:title']}
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

              {[
                {
                  type: 'text',
                  name: 'mes'
                }
              ].map(({ type, name }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementTableLabel
                      label1={i18n['BouncedChecks:cantidad']}
                      label2={i18n['BouncedChecks:monto']}
                      label3={i18n['BouncedChecks:6meses']}
                      label4={i18n['BouncedChecks:7-12meses']}
                      label5={i18n['BouncedChecks:13-24meses']}
                      label6={i18n['BouncedChecks:+24meses']}
                      label7={i18n['BouncedChecks:6meses']}
                      label8={i18n['BouncedChecks:7-12meses']}
                      label9={i18n['BouncedChecks:13-24meses']}
                      label10={i18n['BouncedChecks:+24meses']}
                      label11={i18n['BouncedChecks:sinfondo']}
                      label12={i18n['BouncedChecks:defectosFormales']}
                      label13={i18n['BouncedChecks:totalRechazados']}
                      label14={i18n['BouncedChecks:totalAbonados']}
                      label15={i18n['BouncedChecks:porcentajeAbonados']}
                      values={data}
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

export { BouncedChecks }
