import React from 'react'
import { IRequestNumber } from './types'
import {
  makeStyles,
  Grid,
  Card,
  CardContent
} from '@material-ui/core'

import {
  ElementInput
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '20px'
  },
  labelHeader1: {
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
  labelHeader2: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '0.2rem'
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
    width: '85%',
    marginRight: '6rem'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '1rem'
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  button: {
    width: '8em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  }
})

const RequestNumber: React.FC<IRequestNumber> = ({
  i18n,
  data,
  handleAlta,
  handleRecepcion,
  handleCancel
}) => {
  const classes = useStyles()

  return (
    <div>
      <Card className={classes.margen}>
        <div className={classes.divHeaderContainer}>
          <div className={classes.divHeaderFlex}>
            <span className={classes.labelHeader1}>
              {i18n['RequestNumber:corresponsal:title']}
            </span>
          </div>
        </div>

        <CardContent>
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
                      name: 'corresponsal',
                      label: i18n['RequestNumber:corresponsal:corresponsal'],
                      value: data.corresponsal,
                      typeBis: 'text',
                      nameBis: 'nombre',
                      labelBis: i18n['RequestNumber:corresponsal:nombre'],
                      valueBis: data.nombreCorresponsal
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
                      name: 'sucursal',
                      label: i18n['RequestNumber:corresponsal:sucursal'],
                      value: data.sucursal
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
                  <div className={classes.divHeaderContainer}>
                    <div className={classes.divHeaderFlex}>
                      <span className={classes.labelHeader2}>
                        {i18n['RequestNumber:empresa:title']}
                      </span>
                    </div>
                  </div>

                  {[
                    {
                      type: 'text',
                      name: 'empresa',
                      label: i18n['RequestNumber:empresa:empresa'],
                      value: data.empresa,
                      typeBis: 'text',
                      nameBis: 'cif',
                      labelBis: i18n['RequestNumber:empresa:cif'],
                      valueBis: data.cif
                    },
                    {
                      type: 'text',
                      name: 'nombreEmpresa',
                      label: i18n['RequestNumber:empresa:nombre'],
                      value: data.nombreEmpresa,
                      typeBis: 'text',
                      nameBis: 'codigopostal',
                      labelBis: i18n['RequestNumber:empresa:codigopostal'],
                      valueBis: data.codigopostal
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
                      name: 'direccion',
                      label: i18n['RequestNumber:empresa:direccion'],
                      value: data.direccion
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
                  <div className={classes.divHeaderContainer}>
                    <div className={classes.divHeaderFlex}>
                      <span className={classes.labelHeader2}>
                        {i18n['RequestNumber:solicitud:title']}
                      </span>
                    </div>
                  </div>
                  {[
                    {
                      type: 'text',
                      name: 'npeticion',
                      label: i18n['RequestNumber:solicitud:peticion'],
                      value: data.npeticion,
                      typeBis: 'text',
                      nameBis: 'plazapago',
                      labelBis: i18n['RequestNumber:solicitud:plaza'],
                      valueBis: data.plazapago
                    },
                    {
                      type: 'text',
                      name: 'fechapeticion',
                      label: i18n['RequestNumber:solicitud:fechapeticion'],
                      value: data.fechapeticion,
                      typeBis: 'text',
                      nameBis: 'modelo',
                      labelBis: i18n['RequestNumber:solicitud:modelo'],
                      valueBis: data.modelo
                    },
                    {
                      type: 'text',
                      name: 'fechapeticion',
                      label: i18n['RequestNumber:solicitud:fechapeticion'],
                      value: data.fechapeticion,
                      typeBis: 'text',
                      nameBis: 'modelo',
                      labelBis: i18n['RequestNumber:solicitud:modelo'],
                      valueBis: data.modelo
                    },
                    {
                      type: 'text',
                      name: 'producto',
                      label: i18n['RequestNumber:solicitud:producto'],
                      value: data.producto,
                      typeBis: 'text',
                      nameBis: 'importeoperacion',
                      labelBis: i18n['RequestNumber:solicitud:importeoperacion'],
                      valueBis: data.importeoperacion
                    },
                    {
                      type: 'text',
                      name: 'divoperacion',
                      label: i18n['RequestNumber:solicitud:divoperacion'],
                      value: data.divoperacion,
                      typeBis: 'text',
                      nameBis: 'importeoperacioncre',
                      labelBis: i18n['RequestNumber:solicitud:importeoperacioncre'],
                      valueBis: data.importeoperacioncre
                    },
                    {
                      type: 'text',
                      name: 'divoperacioncre',
                      label: i18n['RequestNumber:solicitud:divoperacioncre'],
                      value: data.divoperacioncre
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
                  <div className={classes.divButtons}>
                    {[
                      {
                        label: i18n['RequestNumber:button:alta'],
                        click: handleAlta,
                        align: classes.buttonMiddle
                      },
                      {
                        label: i18n['RequestNumber:button:recepcion'],
                        click: handleRecepcion,
                        align: classes.buttonMiddle
                      },
                      {
                        label: i18n['RequestNumber:button:cancelar'],
                        click: handleCancel,
                        align: classes.buttonMiddle
                      }
                    ].map(({ label, click, align }, index) => (
                      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
                        key={index}>
                        <div className={align}>
                          <button
                            onClick={click}
                            className={classes.button}
                          >
                            {label}
                          </button>
                        </div>
                      </Grid>
                    ))}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>

      </Card>

    </div>
  )
}

export { RequestNumber }
