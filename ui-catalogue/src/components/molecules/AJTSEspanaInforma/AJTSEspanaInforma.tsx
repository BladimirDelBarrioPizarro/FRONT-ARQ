import React from 'react'
import { IAjtsEspanaInforma } from './types'
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

const AjtsEspanaInforma: React.FC<IAjtsEspanaInforma> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['AjtsEspanaInforma:title']}
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
              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeader}>
                    {i18n['AjtsEspanaInforma:titleDatosCualitativos']}
                  </span>
                </div>
              </div>
              {[
                {
                  type: 'text',
                  name: 'tipoderespuesta',
                  label: i18n['AjtsEspanaInforma:tipoderespuesta'],
                  value: data.tipoderespuesta,
                  typeBis: 'text',
                  nameBis: 'escort',
                  labelBis: i18n['AjtsEspanaInforma:escort'],
                  valueBis: data.escort
                },
                {
                  type: 'text',
                  name: 'fechaconstitucion',
                  label: i18n['AjtsEspanaInforma:fechaconstitucion'],
                  value: data.fechaconstitucion,
                  typeBis: 'text',
                  nameBis: 'balance',
                  labelBis: i18n['AjtsEspanaInforma:balance'],
                  valueBis: data.balance
                },
                {
                  type: 'text',
                  name: 'deposito',
                  label: i18n['AjtsEspanaInforma:deposito'],
                  value: data.deposito,
                  typeBis: 'text',
                  nameBis: 'negativa',
                  labelBis: i18n['AjtsEspanaInforma:negativa'],
                  valueBis: data.negativa
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

              <div className={classes.divHeaderContainer}>
                <div className={classes.divHeaderFlex}>
                  <span className={classes.labelHeader}>
                    {i18n['AjtsEspanaInforma:titleFormasJuridicas']}
                  </span>
                </div>
              </div>

              {[
                {
                  type: 'text',
                  name: 'nombre',
                  label: i18n['AjtsEspanaInforma:compromiso'],
                  value: data.compromiso,
                  typeBis: 'text',
                  nameBis: 'incidentes',
                  labelBis: i18n['AjtsEspanaInforma:incidentes'],
                  valueBis: data.incidentes
                },
                {
                  type: 'text',
                  name: 'pagos',
                  label: i18n['AjtsEspanaInforma:pagos'],
                  value: data.pagos,
                  typeBis: 'text',
                  nameBis: 'incidentes',
                  labelBis: i18n['AjtsEspanaInforma:experiencia'],
                  valueBis: data.experiencia
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
                  name: 'documentos',
                  label: i18n['AjtsEspanaInforma:documentos'],
                  value: data.documentos
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

export { AjtsEspanaInforma }
