import React from 'react'
import { ILegalProcedures } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput,
  ElementTextArea
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'
import { LegalConfirmed } from '../LegalConfirmed/LegalConfirmed'

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

const LegalProcedures: React.FC<ILegalProcedures> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['LegalProcedures:title']}
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

              {data.legalProcedures.map((items, index) => (
                <>
                  {[
                    {
                      type: 'text',
                      name: 'entidad' + index,
                      label: i18n['LegalProcedures:entidad'],
                      value: items.entidad,
                      typeBis: 'text',
                      nameBis: 'fecha' + index,
                      labelBis: i18n['LegalProcedures:fecha'],
                      valueBis: items.fecha
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
                      name: 'tipoaccion' + index,
                      label: i18n['LegalProcedures:tipoaccion'],
                      value: items.tipoaccion,
                      typeBis: 'text',
                      nameBis: 'claseaccion' + index,
                      labelBis: i18n['LegalProcedures:claseaccion'],
                      valueBis: items.claseaccion
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
                      name: 'fechapublicacion' + index,
                      label: i18n['LegalProcedures:fechapublicacion'],
                      value: items.fechapublicacion,
                      typeBis: 'text',
                      nameBis: 'distrito' + index,
                      labelBis: i18n['LegalProcedures:distrito'],
                      valueBis: items.distrito
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
                      name: 'duracion' + index,
                      label: i18n['LegalProcedures:duracion'],
                      value: items.duracion,
                      typeBis: 'text',
                      nameBis: 'fechafinalizacion' + index,
                      labelBis: i18n['LegalProcedures:fechafinalizacion'],
                      valueBis: items.fechafinalizacion
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
                      label: i18n['LegalProcedures:importe'],
                      value: items.importe,
                      typeBis: 'text',
                      nameBis: 'costes' + index,
                      labelBis: i18n['LegalProcedures:costes'],
                      valueBis: items.costes
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
                      name: 'situacion' + index,
                      label: i18n['LegalProcedures:situacion'],
                      value: items.situacion,
                      typeBis: 'text',
                      nameBis: 'resolucion' + index,
                      labelBis: i18n['LegalProcedures:resolucion'],
                      valueBis: items.resolucion
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
                      name: 'moneda' + index,
                      label: i18n['LegalProcedures:moneda'],
                      value: items.moneda,
                      typeBis: 'text',
                      nameBis: 'demandante' + index,
                      labelBis: i18n['LegalProcedures:demandante'],
                      valueBis: items.demandante
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
                      name: 'comentarios' + index,
                      label: i18n['LegalProcedures:comentarios'],
                      value: items.comentarios
                    }
                  ].map(({ name, label, value }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementTextArea
                          label={label}
                          name={name}
                          value={value}
                          cols={50}
                          rows={2}
                          size='xl'
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
      <LegalConfirmed
        i18n={i18n}
        data={data.legalConfirmed}
      />
    </div>
  )
}

export { LegalProcedures }
