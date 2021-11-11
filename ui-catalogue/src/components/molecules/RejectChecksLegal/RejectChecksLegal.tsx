import React from 'react'
import { IRejectChecksLegal } from './types'
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

const RejectChecksLegal: React.FC<IRejectChecksLegal> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['RejectChecksLegal:title']}
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
                  name: 'cheque1',
                  label: i18n['RejectChecksLegal:cheque'],
                  value: data.cheque1,
                  typeBis: 'text',
                  nameBis: 'fecharech1',
                  labelBis: i18n['RejectChecksLegal:fechaRechazo'],
                  valueBis: data.fecharech1,
                  typeBis2: 'text',
                  nameBis2: 'monto1',
                  labelBis2: i18n['RejectChecksLegal:monto'],
                  valueBis2: data.monto1,
                  typeBis3: 'text',
                  nameBis3: 'causal1',
                  labelBis3: i18n['RejectChecksLegal:causal'],
                  valueBis3: data.causal1,
                  typeBis4: 'text',
                  nameBis4: 'fechapago1',
                  labelBis4: i18n['RejectChecksLegal:fechapago'],
                  valueBis4: data.fechapago1,
                  typeBis5: 'text',
                  nameBis5: 'revision1',
                  labelBis5: i18n['RejectChecksLegal:revision'],
                  valueBis5: data.revision1,
                  typeBis6: 'text',
                  nameBis6: 'pagomulta1',
                  labelBis6: i18n['RejectChecksLegal:pagomulta'],
                  valueBis6: data.pagomulta1
                }
              ].map(({
                type, name, label, value,
                typeBis, nameBis, labelBis, valueBis,
                typeBis2, nameBis2, labelBis2, valueBis2,
                typeBis3, nameBis3, labelBis3, valueBis3,
                typeBis4, nameBis4, labelBis4, valueBis4,
                typeBis5, nameBis5, labelBis5, valueBis5,
                typeBis6, nameBis6, labelBis6, valueBis6
              }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={label}
                      value={value}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={labelBis}
                      value={valueBis}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={labelBis2}
                      value={valueBis2}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis3}
                      name={nameBis3}
                      label={labelBis3}
                      value={valueBis3}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis4}
                      name={nameBis4}
                      label={labelBis4}
                      value={valueBis4}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis5}
                      name={nameBis5}
                      label={labelBis5}
                      value={valueBis5}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis6}
                      name={nameBis6}
                      label={labelBis6}
                      value={valueBis6}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'cheque2',
                  value: data.cheque2,
                  typeBis: 'text',
                  nameBis: 'fecharech2',
                  valueBis: data.fecharech2,
                  typeBis2: 'text',
                  nameBis2: 'monto2',
                  valueBis2: data.monto2,
                  typeBis3: 'text',
                  nameBis3: 'causal2',
                  valueBis3: data.causal2,
                  typeBis4: 'text',
                  nameBis4: 'fechapago2',
                  valueBis4: data.fechapago2,
                  typeBis5: 'text',
                  nameBis5: 'revision2',
                  valueBis5: data.revision2,
                  typeBis6: 'text',
                  nameBis6: 'pagomulta1',
                  valueBis6: data.pagomulta2
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5,
                typeBis6, nameBis6, valueBis6
              }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={''}
                      value={valueBis}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={''}
                      value={valueBis2}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis3}
                      name={nameBis3}
                      label={''}
                      value={valueBis3}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis4}
                      name={nameBis4}
                      label={''}
                      value={valueBis4}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis5}
                      name={nameBis5}
                      label={''}
                      value={valueBis5}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis6}
                      name={nameBis6}
                      label={''}
                      value={valueBis6}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'cheque3',
                  value: data.cheque3,
                  typeBis: 'text',
                  nameBis: 'fecharech3',
                  valueBis: data.fecharech3,
                  typeBis2: 'text',
                  nameBis2: 'monto3',
                  valueBis2: data.monto3,
                  typeBis3: 'text',
                  nameBis3: 'causal3',
                  valueBis3: data.causal3,
                  typeBis4: 'text',
                  nameBis4: 'fechapago3',
                  valueBis4: data.fechapago3,
                  typeBis5: 'text',
                  nameBis5: 'revision3',
                  valueBis5: data.revision3,
                  typeBis6: 'text',
                  nameBis6: 'pagomulta3',
                  valueBis6: data.pagomulta3
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5,
                typeBis6, nameBis6, valueBis6
              }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={''}
                      value={valueBis}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={''}
                      value={valueBis2}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis3}
                      name={nameBis3}
                      label={''}
                      value={valueBis3}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis4}
                      name={nameBis4}
                      label={''}
                      value={valueBis4}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis5}
                      name={nameBis5}
                      label={''}
                      value={valueBis5}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis6}
                      name={nameBis6}
                      label={''}
                      value={valueBis6}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'cheque4',
                  value: data.cheque4,
                  typeBis: 'text',
                  nameBis: 'fecharech4',
                  valueBis: data.fecharech4,
                  typeBis2: 'text',
                  nameBis2: 'monto4',
                  valueBis2: data.monto4,
                  typeBis3: 'text',
                  nameBis3: 'causal4',
                  valueBis3: data.causal4,
                  typeBis4: 'text',
                  nameBis4: 'fechapago4',
                  valueBis4: data.fechapago4,
                  typeBis5: 'text',
                  nameBis5: 'revision4',
                  valueBis5: data.revision4,
                  typeBis6: 'text',
                  nameBis6: 'pagomulta4',
                  valueBis6: data.pagomulta4
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5,
                typeBis6, nameBis6, valueBis6
              }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={''}
                      value={valueBis}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={''}
                      value={valueBis2}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis3}
                      name={nameBis3}
                      label={''}
                      value={valueBis3}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis4}
                      name={nameBis4}
                      label={''}
                      value={valueBis4}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis5}
                      name={nameBis5}
                      label={''}
                      value={valueBis5}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis6}
                      name={nameBis6}
                      label={''}
                      value={valueBis6}
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'cheque5',
                  value: data.cheque5,
                  typeBis: 'text',
                  nameBis: 'fecharech5',
                  valueBis: data.fecharech5,
                  typeBis2: 'text',
                  nameBis2: 'monto5',
                  valueBis2: data.monto5,
                  typeBis3: 'text',
                  nameBis3: 'causal5',
                  valueBis3: data.causal5,
                  typeBis4: 'text',
                  nameBis4: 'fechapago5',
                  valueBis4: data.fechapago5,
                  typeBis5: 'text',
                  nameBis5: 'revision5',
                  valueBis5: data.revision5,
                  typeBis6: 'text',
                  nameBis6: 'pagomulta5',
                  valueBis6: data.pagomulta5
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5,
                typeBis6, nameBis6, valueBis6
              }, index) => (
                <div className={classes.divFlex} key={index}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <ElementInputCol
                      type={type}
                      name={name}
                      label={''}
                      value={value}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis}
                      name={nameBis}
                      label={''}
                      value={valueBis}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis2}
                      name={nameBis2}
                      label={''}
                      value={valueBis2}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis3}
                      name={nameBis3}
                      label={''}
                      value={valueBis3}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis4}
                      name={nameBis4}
                      label={''}
                      value={valueBis4}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis5}
                      name={nameBis5}
                      label={''}
                      value={valueBis5}
                      size='xl'
                    />
                    <ElementInputCol
                      type={typeBis6}
                      name={nameBis6}
                      label={''}
                      value={valueBis6}
                      size='xl'
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

export { RejectChecksLegal }
