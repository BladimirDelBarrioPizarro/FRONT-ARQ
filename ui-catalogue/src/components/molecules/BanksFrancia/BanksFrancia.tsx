import React from 'react'
import { IBanksFrancia } from './types'
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

const BanksFrancia: React.FC<IBanksFrancia> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Banks:title']}
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
                  name: 'input1',
                  value: data.input1
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'input2',
                  value: data.input2
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'input3',
                  value: data.input3
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'input4',
                  value: data.input4
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'input5',
                  value: data.input5
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'input6',
                  value: data.input6
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'input7',
                  value: data.input7
                }
              ].map(({ type, name, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInput
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
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

export { BanksFrancia }
