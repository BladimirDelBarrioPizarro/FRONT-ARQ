import React from 'react'
import { ILastAddresses } from './types'
import {
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import { ElementInputNoLabel } from '../../atoms/ElementInputNoLabel/ElementInputNoLabel'

const useStyles = makeStyles({
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderSubtitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    paddingBottom: '10px'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px'
  },
  labelHeaderBold: {
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
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '0.3rem'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    textAlign: 'start',
    padding: '5px'
  },
  verticalContainer: {
    '& .MuiGrid-item': {
      maxWidth: '100%',
      marginRight: '16px'
    }
  },
  verticalContainerCleanMargin: {
    '& .MuiGrid-item': {
      maxWidth: '100%',
      marginRight: '0px'
    }
  },
  forceWrap: {
    flexWrap: 'wrap'
  }
})

const LastAddresses: React.FC<ILastAddresses> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['LastAddresses:title']}
          </span>
        </div>
      </div>
      <div className={classes.divHeaderSubtitleContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['LastAddresses:subtitle']}
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
            <Grid container
              spacing={0}
              className={classes.forceWrap}>
              <Grid xs={2} className={classes.verticalContainer}>
                <Typography className={classes.labelStyle}>
                  {i18n['LastAddresses:fecha']}
                </Typography>
              </Grid>
              <Grid xs={6} className={classes.verticalContainer}>
                <Typography className={classes.labelStyle}>
                  {i18n['LastAddresses:direccion']}
                </Typography>
              </Grid>
              <Grid xs={2} className={classes.verticalContainer}>
                <Typography className={classes.labelStyle}>
                  {i18n['LastAddresses:telefono']}
                </Typography>
              </Grid>
              <Grid xs={2} className={classes.verticalContainerCleanMargin}>
                <Typography className={classes.labelStyle}>
                  {i18n['LastAddresses:fuente']}
                </Typography>
              </Grid>
              <Grid xs={2} className={classes.verticalContainer}>
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="fecha"
                  value={data.fecha}
                />
              </Grid>
              <Grid xs={6} spacing={0} className={classes.verticalContainer} >
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="direccion"
                  value={data.direccion}
                />
              </Grid>
              <Grid xs={2} className={classes.verticalContainer} >
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="telefono"
                  value={data.telefono}
                />
              </Grid>
              <Grid xs={2} className={classes.verticalContainerCleanMargin} >
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="fuente"
                  value={data.fuente}
                />
              </Grid>
              <Grid xs={2} className={classes.verticalContainer}>
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="fecha2"
                  value={data.fecha2}
                />
              </Grid>
              <Grid xs={6} spacing={0} className={classes.verticalContainer} >
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="direccion2"
                  value={data.direccion2}
                />
              </Grid>
              <Grid xs={2} className={classes.verticalContainer}>
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="telefono2"
                  value={data.telefono2}
                />
              </Grid>
              <Grid xs={2} className={classes.verticalContainerCleanMargin}>
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="fuente2"
                  value={data.fuente2}
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { LastAddresses }
