import React from 'react'
import { IConsultas } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  // ElementInputCol
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
    justifyContent: 'center',
    width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginRight: '6rem'
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
  },
  span1: {
    marginLeft: '2rem'
  },
  span2: {
    marginRight: '5rem'
  },
  span3: {
    marginRight: '5rem'
  }
})

const Consultas: React.FC<IConsultas> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Consultas:title']}
          </span>
        </div>
      </div>

      <div className={classes.divLabels}>
        <div className={classes.span1}>
          <span className={classes.labelStyle}>{i18n['Consultas:temporales']}</span>
        </div>
        <div className={classes.span2}>
          <span className={classes.labelStyle}>{i18n['Consultas:permanentes']}</span>
        </div>
        <div className={classes.span3}>
          <span className={classes.labelStyle}>{i18n['Consultas:total']}</span>
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
                  name: 'temporales',
                  label: i18n['Consultas:totalconsultas'],
                  value: data.temporales,
                  typeBis: 'text',
                  nameBis: 'permanentes',
                  valueBis: data.permanentes,
                  typeBis2: 'text',
                  nameBis2: 'total',
                  valueBis2: data.total
                }
              ].map(({
                type, name, label, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2
              }, index) => (
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
                      size='s'
                    />
                    <ElementInput
                      type={typeBis}
                      name={nameBis}
                      label={''}
                      value={valueBis}
                      size='s'
                    />
                    <ElementInput
                      type={typeBis2}
                      name={nameBis2}
                      label={''}
                      value={valueBis2}
                      size='s'
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

export { Consultas }
