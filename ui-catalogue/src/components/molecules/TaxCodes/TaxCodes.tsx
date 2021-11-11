import React from 'react'
import { ITaxCodes } from './types'
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

const TaxCodes: React.FC<ITaxCodes> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['TaxCode:title']}
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
                  name: 'numDum',
                  label: i18n['TaxCode:numDum'],
                  value: data.numDum
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
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'fechaAsignacion1',
                  label: i18n['TaxCode:fechaasignacion'],
                  value: data.fechaAsignacion1,
                  typeBis: 'text',
                  nameBis: 'fechaAsignacion12',
                  valueBis: data.fechaAsignacion12,
                  typeBis2: 'text',
                  nameBis2: 'fechaAsignacion13',
                  valueBis2: data.fechaAsignacion13
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
                  name: 'fechaCambio1',
                  label: i18n['TaxCode:fechacambio'],
                  value: data.fechaCambio1,
                  typeBis: 'text',
                  nameBis: 'fechaCambio12',
                  valueBis: data.fechaCambio12,
                  typeBis2: 'text',
                  nameBis2: 'fechaCambio13',
                  valueBis2: data.fechaCambio13
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
                  name: 'fechaAsignacion2',
                  label: i18n['TaxCode:fechaasignacion'],
                  value: data.fechaAsignacion2,
                  typeBis: 'text',
                  nameBis: 'fechaAsignacion22',
                  valueBis: data.fechaAsignacion22,
                  typeBis2: 'text',
                  nameBis2: 'fechaAsignacion23',
                  valueBis2: data.fechaAsignacion23
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
                  name: 'fechaCambio2',
                  label: i18n['TaxCode:fechacambio'],
                  value: data.fechaCambio2,
                  typeBis: 'text',
                  nameBis: 'fechaCambio22',
                  valueBis: data.fechaCambio22,
                  typeBis2: 'text',
                  nameBis2: 'fechaCambio23',
                  valueBis2: data.fechaCambio23
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
                  name: 'fechaAsignacion3',
                  label: i18n['TaxCode:fechaasignacion'],
                  value: data.fechaCambio3,
                  typeBis: 'text',
                  nameBis: 'fechaCambio22',
                  valueBis: data.fechaCambio32,
                  typeBis2: 'text',
                  nameBis2: 'fechaCambio23',
                  valueBis2: data.fechaCambio33
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
                  name: 'fechaCambio3',
                  label: i18n['TaxCode:fechacambio'],
                  value: data.fechaCambio3,
                  typeBis: 'text',
                  nameBis: 'fechaCambio32',
                  valueBis: data.fechaCambio32,
                  typeBis2: 'text',
                  nameBis2: 'fechaCambio33',
                  valueBis2: data.fechaCambio33
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
                  name: 'fechaAsignacion4',
                  label: i18n['TaxCode:fechaasignacion'],
                  value: data.fechaAsignacion4,
                  typeBis: 'text',
                  nameBis: 'fechaAsignacion42',
                  valueBis: data.fechaAsignacion42,
                  typeBis2: 'text',
                  nameBis2: 'fechaAsignacion43',
                  valueBis2: data.fechaAsignacion43
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
                  name: 'fechaCambio4',
                  label: i18n['TaxCode:fechacambio'],
                  value: data.fechaCambio4,
                  typeBis: 'text',
                  nameBis: 'fechaCambio42',
                  valueBis: data.fechaCambio42,
                  typeBis2: 'text',
                  nameBis2: 'fechaCambio43',
                  valueBis2: data.fechaCambio43
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
            </div>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { TaxCodes }
