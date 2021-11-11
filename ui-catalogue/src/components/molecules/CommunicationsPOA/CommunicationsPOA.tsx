import React from 'react'
import { ICommunicationsPOA } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'
import { ReportTypes } from '../../templates/BaseReport/types'

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

const CommunicationsPOA: React.FC<ICommunicationsPOA> = ({
  i18n,
  data,
  report
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['CommunicationsPOA:title']}
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
                  name: 'telefonos1',
                  label: i18n['CommunicationsPOA:telefonos'],
                  value: data.telefonos1,
                  typeBis: 'text',
                  nameBis: 'telefonos2',
                  valueBis: data.telefonos2,
                  typeBis2: 'text',
                  nameBis2: 'telefonos3',
                  valueBis2: data.telefonos3
                }
              ].map(({ type, name, label, value, typeBis, nameBis, valueBis, typeBis2, nameBis2, valueBis2 }, index) => (
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
              {[
                {
                  type: 'text',
                  name: 'emails1',
                  label: i18n['CommunicationsPOA:emails'],
                  value: data.emails1,
                  typeBis: 'text',
                  nameBis: 'emails2',
                  valueBis: data.emails2,
                  typeBis2: 'text',
                  nameBis2: 'emails3',
                  valueBis2: data.emails3
                }
              ].map(({ type, name, label, value, typeBis, nameBis, valueBis, typeBis2, nameBis2, valueBis2 }, index) => (
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
              { report !== ReportTypes.NOREF_RESTO_PAISES
                ? (<>
                  {[
                    {
                      type: 'text',
                      name: 'emails1',
                      label: i18n['CommunicationsPOA:webs'],
                      value: data.webs1,
                      typeBis: 'text',
                      nameBis: 'webs2',
                      valueBis: data.webs2,
                      typeBis2: 'text',
                      nameBis2: 'webs3',
                      valueBis2: data.webs3
                    }
                  ].map(({ type, name, label, value, typeBis, nameBis, valueBis, typeBis2, nameBis2, valueBis2 }, index) => (
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
                </>)
                : (<></>)
              }
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { CommunicationsPOA }
