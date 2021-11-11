import React from 'react'
import { IBureauCredit } from './types'
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

const BureauCredit: React.FC<IBureauCredit> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['BureauCredit:title']}
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
                  name: 'porcentajesituacion1',
                  label: i18n['BureauCredit:porcentajesituacion'],
                  value: data.porcentajesituacion1,
                  typeBis: 'text',
                  nameBis: 'situacion1',
                  labelBis: i18n['BureauCredit:situacion'],
                  valueBis: data.situacion1,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad1',
                  labelBis2: i18n['BureauCredit:codigoentidad'],
                  valueBis2: data.codigoentidad1,
                  typeBis3: 'text',
                  nameBis3: 'periodo1',
                  labelBis3: i18n['BureauCredit:periodo'],
                  valueBis3: data.periodo1,
                  typeBis4: 'text',
                  nameBis4: 'monto1',
                  labelBis4: i18n['BureauCredit:monto'],
                  valueBis4: data.monto1,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal1',
                  labelBis5: i18n['BureauCredit:porcentajetotal'],
                  valueBis5: data.porcentajetotal1
                }
              ].map(({
                type, name, label, value,
                typeBis, nameBis, labelBis, valueBis,
                typeBis2, nameBis2, labelBis2, valueBis2,
                typeBis3, nameBis3, labelBis3, valueBis3,
                typeBis4, nameBis4, labelBis4, valueBis4,
                typeBis5, nameBis5, labelBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion2',
                  value: data.porcentajesituacion2,
                  typeBis: 'text',
                  nameBis: 'situacion2',
                  valueBis: data.situacion2,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad2',
                  valueBis2: data.codigoentidad2,
                  typeBis3: 'text',
                  nameBis3: 'periodo2',
                  valueBis3: data.periodo2,
                  typeBis4: 'text',
                  nameBis4: 'monto2',
                  valueBis4: data.monto2,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal2',
                  valueBis5: data.porcentajetotal2
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion3',
                  value: data.porcentajesituacion3,
                  typeBis: 'text',
                  nameBis: 'situacion3',
                  valueBis: data.situacion3,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad3',
                  valueBis2: data.codigoentidad3,
                  typeBis3: 'text',
                  nameBis3: 'periodo3',
                  valueBis3: data.periodo3,
                  typeBis4: 'text',
                  nameBis4: 'monto3',
                  valueBis4: data.monto3,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal3',
                  valueBis5: data.porcentajetotal3
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion4',
                  value: data.porcentajesituacion4,
                  typeBis: 'text',
                  nameBis: 'situacion4',
                  valueBis: data.situacion4,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad4',
                  valueBis2: data.codigoentidad4,
                  typeBis3: 'text',
                  nameBis3: 'periodo4',
                  valueBis3: data.periodo4,
                  typeBis4: 'text',
                  nameBis4: 'monto4',
                  valueBis4: data.monto4,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal4',
                  valueBis5: data.porcentajetotal4
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion5',
                  value: data.porcentajesituacion5,
                  typeBis: 'text',
                  nameBis: 'situacion5',
                  valueBis: data.situacion5,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad5',
                  valueBis2: data.codigoentidad5,
                  typeBis3: 'text',
                  nameBis3: 'periodo5',
                  valueBis3: data.periodo5,
                  typeBis4: 'text',
                  nameBis4: 'monto5',
                  valueBis4: data.monto5,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal5',
                  valueBis5: data.porcentajetotal5
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion6',
                  value: data.porcentajesituacion6,
                  typeBis: 'text',
                  nameBis: 'situacion6',
                  valueBis: data.situacion6,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad6',
                  valueBis2: data.codigoentidad6,
                  typeBis3: 'text',
                  nameBis3: 'periodo6',
                  valueBis3: data.periodo6,
                  typeBis4: 'text',
                  nameBis4: 'monto6',
                  valueBis4: data.monto6,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal6',
                  valueBis5: data.porcentajetotal6
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion7',
                  value: data.porcentajesituacion7,
                  typeBis: 'text',
                  nameBis: 'situacion7',
                  valueBis: data.situacion7,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad7',
                  valueBis2: data.codigoentidad7,
                  typeBis3: 'text',
                  nameBis3: 'periodo7',
                  valueBis3: data.periodo7,
                  typeBis4: 'text',
                  nameBis4: 'monto7',
                  valueBis4: data.monto7,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal7',
                  valueBis5: data.porcentajetotal7
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion8',
                  value: data.porcentajesituacion8,
                  typeBis: 'text',
                  nameBis: 'situacion8',
                  valueBis: data.situacion8,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad8',
                  valueBis2: data.codigoentidad8,
                  typeBis3: 'text',
                  nameBis3: 'periodo8',
                  valueBis3: data.periodo8,
                  typeBis4: 'text',
                  nameBis4: 'monto8',
                  valueBis4: data.monto8,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal8',
                  valueBis5: data.porcentajetotal8
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion9',
                  value: data.porcentajesituacion9,
                  typeBis: 'text',
                  nameBis: 'situacion9',
                  valueBis: data.situacion9,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad9',
                  valueBis2: data.codigoentidad9,
                  typeBis3: 'text',
                  nameBis3: 'periodo9',
                  valueBis3: data.periodo9,
                  typeBis4: 'text',
                  nameBis4: 'monto9',
                  valueBis4: data.monto9,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal9',
                  valueBis5: data.porcentajetotal9
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion10',
                  value: data.porcentajesituacion10,
                  typeBis: 'text',
                  nameBis: 'situacion10',
                  valueBis: data.situacion10,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad10',
                  valueBis2: data.codigoentidad10,
                  typeBis3: 'text',
                  nameBis3: 'periodo10',
                  valueBis3: data.periodo10,
                  typeBis4: 'text',
                  nameBis4: 'monto10',
                  valueBis4: data.monto10,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal10',
                  valueBis5: data.porcentajetotal10
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion11',
                  value: data.porcentajesituacion11,
                  typeBis: 'text',
                  nameBis: 'situacion11',
                  valueBis: data.situacion11,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad11',
                  valueBis2: data.codigoentidad11,
                  typeBis3: 'text',
                  nameBis3: 'periodo11',
                  valueBis3: data.periodo11,
                  typeBis4: 'text',
                  nameBis4: 'monto11',
                  valueBis4: data.monto11,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal11',
                  valueBis5: data.porcentajetotal11
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion12',
                  value: data.porcentajesituacion12,
                  typeBis: 'text',
                  nameBis: 'situacion12',
                  valueBis: data.situacion12,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad12',
                  valueBis2: data.codigoentidad12,
                  typeBis3: 'text',
                  nameBis3: 'periodo12',
                  valueBis3: data.periodo12,
                  typeBis4: 'text',
                  nameBis4: 'monto12',
                  valueBis4: data.monto12,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal12',
                  valueBis5: data.porcentajetotal12
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion13',
                  value: data.porcentajesituacion13,
                  typeBis: 'text',
                  nameBis: 'situacion13',
                  valueBis: data.situacion13,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad13',
                  valueBis2: data.codigoentidad13,
                  typeBis3: 'text',
                  nameBis3: 'periodo13',
                  valueBis3: data.periodo13,
                  typeBis4: 'text',
                  nameBis4: 'monto13',
                  valueBis4: data.monto13,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal13',
                  valueBis5: data.porcentajetotal13
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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
                  </Grid>
                </div>
              ))}
              {[
                {
                  type: 'text',
                  name: 'porcentajesituacion14',
                  value: data.porcentajesituacion14,
                  typeBis: 'text',
                  nameBis: 'situacion14',
                  valueBis: data.situacion14,
                  typeBis2: 'text',
                  nameBis2: 'codigoentidad14',
                  valueBis2: data.codigoentidad14,
                  typeBis3: 'text',
                  nameBis3: 'periodo14',
                  valueBis3: data.periodo14,
                  typeBis4: 'text',
                  nameBis4: 'monto14',
                  valueBis4: data.monto14,
                  typeBis5: 'text',
                  nameBis5: 'porcentajetotal14',
                  valueBis5: data.porcentajetotal14
                }
              ].map(({
                type, name, value,
                typeBis, nameBis, valueBis,
                typeBis2, nameBis2, valueBis2,
                typeBis3, nameBis3, valueBis3,
                typeBis4, nameBis4, valueBis4,
                typeBis5, nameBis5, valueBis5
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

export { BureauCredit }
