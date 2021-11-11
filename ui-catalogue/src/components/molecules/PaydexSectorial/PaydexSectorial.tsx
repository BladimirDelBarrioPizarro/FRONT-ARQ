import React from 'react'
import { IPaydexSectorial } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInputCol
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

const PaydexSectorial: React.FC<IPaydexSectorial> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['PaydexSectorial:title']}
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
                  name: 'cuatrilsup',
                  label: i18n['PaydexSectorial:cuatrilsup'],
                  value: data.cuatrilsup,
                  typeBis: 'text',
                  nameBis: 'mediana',
                  labelBis: i18n['PaydexSectorial:mediana'],
                  valueBis: data.mediana,
                  typeBis2: 'text',
                  nameBis2: 'cuatrilinf',
                  labelBis2: i18n['PaydexSectorial:cuatrilinf'],
                  valueBis2: data.cuatrilinf
                }
              ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis, typeBis2, nameBis2, labelBis2, valueBis2 }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={label}
                      value={value}
                      size='l'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={labelBis}
                      value={valueBis}
                      size='l'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={labelBis2}
                      value={valueBis2}
                      size='l'
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

export { PaydexSectorial }
