import React from 'react'
import { IExternalFinancingPOA } from './types'
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

const ExternalFinancingPOA: React.FC<IExternalFinancingPOA> = ({
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
                        {i18n['ExternalFinancingPOA:title']}
                      </span>
                    </div>
                  </div>
                  {[
                    {
                      type: 'text',
                      name: 'fechamodificacion' + index,
                      label: i18n['ExternalFinancingPOA:fechamodificacion'],
                      value: items.fechamodificacion,
                      typeBis: 'text',
                      nameBis: 'fechacancelacion' + index,
                      labelBis: i18n['ExternalFinancingPOA:fechacancelacion'],
                      valueBis: items.fechacancelacion
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
                      name: 'tipofinanciacion' + index,
                      label: i18n['ExternalFinancingPOA:tipofinanciacion'],
                      value: items.tipofinanciacion,
                      typeBis: 'text',
                      nameBis: 'proveedor' + index,
                      labelBis: i18n['ExternalFinancingPOA:proveedor'],
                      valueBis: items.proveedor
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
                      name: 'importe' + index,
                      label: i18n['ExternalFinancingPOA:importe'],
                      value: items.importe,
                      typeBis: 'text',
                      nameBis: 'bienesgarantia' + index,
                      labelBis: i18n['ExternalFinancingPOA:bienesgarantia'],
                      valueBis: items.bienesgarantia
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
                      label: i18n['ExternalFinancingPOA:comentarios'],
                      value: items.comentarios
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

export { ExternalFinancingPOA }
