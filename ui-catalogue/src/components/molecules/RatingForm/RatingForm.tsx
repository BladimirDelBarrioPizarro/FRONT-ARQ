import React from 'react'
import { IRatingForm } from './types'
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

const RatingForm: React.FC<IRatingForm> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
          console.log(values) // eslint-disable-line
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className={classes.divContainer}>
              {data.map((items, index) => (
                <>
                  <div className={classes.divHeaderContainer}>
                    <div className={classes.divHeaderFlex}>
                      <span className={classes.labelHeader}>
                        {i18n['RatingForm:title']}
                      </span>
                    </div>
                  </div>
                  {[
                    {
                      type: 'text',
                      name: 'fechaasignacion' + index,
                      label: i18n['RatingForm:fechaasignacion'],
                      value: items.fechaasignacion,
                      typeBis: 'text',
                      nameBis: 'formaasignacionrating' + index,
                      labelBis: i18n['RatingForm:formaasignacionrating'],
                      valueBis: items.formaasignacionrating
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
                      name: 'dbrating' + index,
                      label: i18n['RatingForm:d&brating'],
                      value: items.dbrating,
                      typeBis: 'text',
                      nameBis: 'indicador' + index,
                      labelBis: i18n['RatingForm:indicador'],
                      valueBis: items.indicador
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
                      name: 'observaciones' + index,
                      label: i18n['RatingForm:observaciones'],
                      value: items.observaciones
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
                      name: 'riesgo1' + index,
                      label: i18n['RatingForm:evaluacionriesgo'],
                      value: items.riesgo1,
                      typeBis: 'text',
                      nameBis: 'riesgo2' + index,
                      valueBis: items.riesgo2
                    }
                  ].map(({
                    type, name, value, label,
                    typeBis, nameBis, valueBis
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
                          size='m'
                        />
                        <ElementInput
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      type: 'text',
                      name: 'riesgo3' + index,
                      value: items.riesgo3,
                      typeBis: 'text',
                      nameBis: 'riesgo4' + index,
                      valueBis: items.riesgo4
                    }
                  ].map(({
                    type, name, value,
                    typeBis, nameBis, valueBis
                  }, index) => (
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
                          size='m'
                        />
                        <ElementInput
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      type: 'text',
                      name: 'riesgo5' + index,
                      value: items.riesgo5,
                      typeBis: 'text',
                      nameBis: 'riesgo6' + index,
                      valueBis: items.riesgo6
                    }
                  ].map(({
                    type, name, value,
                    typeBis, nameBis, valueBis
                  }, index) => (
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
                          size='m'
                        />
                        <ElementInput
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      type: 'text',
                      name: 'riesgo7' + index,
                      value: items.riesgo7,
                      typeBis: 'text',
                      nameBis: 'riesgo8' + index,
                      valueBis: items.riesgo8
                    }
                  ].map(({
                    type, name, value,
                    typeBis, nameBis, valueBis
                  }, index) => (
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
                          size='m'
                        />
                        <ElementInput
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      type: 'text',
                      name: 'credito1' + index,
                      label: i18n['RatingForm:credito'],
                      value: items.credito1,
                      typeBis: 'text',
                      nameBis: 'credito2' + index,
                      valueBis: items.credito2
                    }
                  ].map(({ type, name, label, value, typeBis, nameBis, valueBis }, index) => (
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
                          label={''}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      type: 'text',
                      name: 'formaasignacioncredito' + index,
                      label: i18n['RatingForm:formaasignacioncredito'],
                      value: items.credito1,
                      typeBis: 'text',
                      labelBis: i18n['RatingForm:evaluacioncredito'],
                      nameBis: 'evaluacioncredito' + index,
                      valueBis: items.evaluacioncredito
                    }
                  ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
                      name: 'otrosratings1' + index,
                      label: i18n['RatingForm:otrosratings'],
                      value: items.otrosratings1,
                      typeBis: 'text',
                      labelBis: i18n['RatingForm:valor'],
                      nameBis: 'valor1' + index,
                      valueBis: items.valor1
                    }
                  ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
                      name: 'otrosratings2' + index,
                      label: i18n['RatingForm:otrosratings'],
                      value: items.otrosratings2,
                      typeBis: 'text',
                      labelBis: i18n['RatingForm:valor'],
                      nameBis: 'valor2' + index,
                      valueBis: items.valor2
                    }
                  ].map(({ type, name, label, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
                  <br></br>
                </>
              ))}

            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { RatingForm }
