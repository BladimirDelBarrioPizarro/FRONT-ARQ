import React from 'react'
import { ICompanyAssetsPOAForm } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput,
  ElementTextArea
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    width: '1024px'
  },
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
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  }
})

const CompanyAssetsPOAForm: React.FC<ICompanyAssetsPOAForm> = ({
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

              {[
                {
                  type: 'text',
                  name: 'clase',
                  label: i18n['CompanyAssets:clase'],
                  value: data.clase
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
                  name: 'tipoactivo',
                  label: i18n['CompanyAssets:tipoactivo'],
                  value: data.tipoactivo,
                  typeBis: 'text',
                  nameBis: 'mes',
                  labelBis: i18n['CompanyAssets:unidades'],
                  valueBis: data.unidades
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
                  name: 'comentarios',
                  label: i18n['CompanyAssets:comentarios'],
                  value: data.comentarios
                }
              ].map(({ name, label, value }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <ElementTextArea
                      cols={50}
                      rows={2}
                      size='xl'
                      name={name}
                      label={label}
                      value={value}
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

export { CompanyAssetsPOAForm }
