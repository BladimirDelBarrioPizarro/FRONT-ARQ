import React, { useState } from 'react'
import { IManualReception, IDateTimeFormatOptions } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import { ElementFormSelect, ElementBack, ElementFormInput } from '../../atoms'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    background: '#ffffff'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'start'
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
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    backgroundColor: '#ffffff',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMind-Bold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    marginBottom: '1rem',
    marginTop: '1.6rem'
  },
  gridContainer: {
    width: '100rem'
  },
  labelDate: {
    width: '100%',
    fontFamily: 'test',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginTop: '2rem'
  },
  divButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5rem'
  },
  button: {
    width: '10em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    },
    marginRight: '2rem'
  },
  fieldDateIn: {
    width: '30rem',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none',
    marginTop: '1.5rem'
  },
  dateAtom: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '1rem',
    width: '23%'
  }
})

const ManualReception: React.FC<IManualReception> = ({
  i18n,
  data,
  tipoRespuesta,
  producto,
  medioRecepcion,
  handleBack,
  handleAlta,
  handleAccept,
  handleCancel
}) => {
  const classes = useStyles()
  const [tiporespuesta, setTipoRespuesta] = useState('')
  const fecha = new Date().toISOString().slice(0, 10)
  const [date, setDate] = useState(fecha)
  const [notas, setNotas] = useState('')
  const [product, setProduct] = useState('')
  const [medio, setMedio] = useState('')

  const handleTipoRespuesta = (e): void => {
    setTipoRespuesta(e.target.value)
  }

  const handleProduct = (e): void => {
    setProduct(e.target.value)
  }

  const handleNotas = (e): void => {
    setNotas(e.target.value)
  }

  const handleMedio = (e): void => {
    setMedio(e.target.value)
  }

  const handleSendAccept = (): void => {
    handleAccept(tiporespuesta, product, medio, formatDate(date), notas)
  }

  const options: IDateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }

  const formatDate: any = (fecha) => {
    const date = (fecha !== null) && (fecha !== null && fecha !== '') ? new Date(fecha) : new Date()
    return date.toLocaleDateString('es-ES', options).toString()
  }

  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}>
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <div className={classes.divHeader}>
            {i18n['ManualReception:title']}
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ElementBack
            label={i18n['ReportReferencesConfirmation:textIcon']}
            size={'m'}
            handleBack={handleBack}
          />
        </Grid>
      </Grid>
      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
                console.log(values) // eslint-disable-line
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className={classes.divContainer}>
              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.gridContainer}>

                  <ElementFormSelect
                    name={'tiporespuesta'}
                    label={i18n['ManualReception:tiporespuesta']}
                    handleSet={handleTipoRespuesta}
                    values={tipoRespuesta}
                  />

                  <ElementFormSelect
                    name={'producto'}
                    label={i18n['ManualReception:producto']}
                    handleSet={handleProduct}
                    values={producto}
                  />

                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.gridContainer}>

                  <ElementFormSelect
                    name={'mediorecepcion'}
                    label={i18n['ManualReception:mediorecepcion']}
                    handleSet={handleMedio}
                    values={medioRecepcion}
                  />

                  <div className={classes.dateAtom}>
                    <div className={classes.labelDate}>
                      {i18n['ManualReception:fecharecepcion']}
                    </div>

                    <input
                      id="date"
                      type="date"
                      className={classes.fieldDateIn}
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                    />
                  </div>
                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.gridContainer}>

                  <ElementFormInput
                    type={'text'}
                    name={'notas'}
                    label={i18n['ManualReception:notas']}
                    handleSet={handleNotas}
                    value={notas}
                    middle={false}
                  />
                </Grid>
              </div>

              <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.gridContainer}>
                  <div className={classes.divButtons}>
                    <button
                      onClick={handleSendAccept}
                      className={classes.button}
                    >
                      {i18n['ManualReception:aceptar']}
                    </button>
                    <button
                      onClick={handleAlta}
                      className={classes.button}
                    >
                      {i18n['ManualReception:alta']}
                    </button>
                    <button
                      onClick={handleCancel}
                      className={classes.button}
                    >
                      {i18n['ManualReception:cancelar']}
                    </button>

                  </div>

                </Grid>
              </div>

            </div>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export { ManualReception }
