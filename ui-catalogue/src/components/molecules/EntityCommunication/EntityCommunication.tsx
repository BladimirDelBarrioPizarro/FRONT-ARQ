import React from 'react'
import { IEntityCommunication } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import { ElementInput } from '../../atoms'

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
    fontWeight: 'normal',
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
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  },
  divMiddle: {
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
    padding: '5px',
    textAlign: 'center',
    width: '100%'
  }
})

const EntityCommunication: React.FC<IEntityCommunication> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={classes.divHeaderContainer}>
            <div className={classes.divHeaderFlex}>
              <span className={classes.labelHeader}>
                {i18n['EntityCommunication:title']}
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

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
              {[
                {
                  type: 'text',
                  label: i18n['EntityCommunication:detailTbDeuda'],
                  name: 'deuda',
                  value: data.deuda,
                  typeBis: 'text',
                  labelBis: i18n['EntityCommunication:detailTbDeudaDeudor'],
                  nameBis: 'deudaDeudor',
                  valueBis: data.deudaDeudor
                },
                {
                  type: 'text',
                  label: i18n['EntityCommunication:detailTbIncumplimiento'],
                  name: 'incumplimiento',
                  value: data.incumplimiento,
                  typeBis: 'text',
                  labelBis: i18n['EntityCommunication:detailTbIncumplimientoDeudor'],
                  nameBis: 'incumplimientoDeudor',
                  valueBis: data.incumplimientoDeudor
                },
                {
                  type: 'text',
                  label: i18n['EntityCommunication:detailTbPotencial'],
                  name: 'potencial',
                  value: data.potencial,
                  typeBis: 'text',
                  labelBis: i18n['EntityCommunication:detailTbPotencialDeudor'],
                  nameBis: 'potencialDeudor',
                  valueBis: data.potencialDeudor
                }
              ].map(({ type, label, name, value, typeBis, labelBis, nameBis, valueBis }, index) => (
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { EntityCommunication }
