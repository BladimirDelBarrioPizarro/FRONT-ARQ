import React from 'react'
import { ILegalAgents } from './types'
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

const LegalAgents: React.FC<ILegalAgents> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['LegalAgents:title']}
          </span>
        </div>
      </div>
      <div className={classes.divHeaderSubtitleContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['LegalAgents:representateDe']}
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
              <Grid xs={4} className={classes.verticalContainer}>
                <Typography className={classes.labelStyle}>
                  {i18n['LegalAgents:name']}
                </Typography>
              </Grid>
              {[
                {
                  value: 'LegalAgents:tipoDocumento'
                },
                {
                  value: 'LegalAgents:nDocumento'
                },
                {
                  value: 'LegalAgents:cargo'
                },
                {
                  value: 'LegalAgents:fecha'
                }
              ].map(({ value }, index) => (
                <Grid xs={2} className={value === 'LegalAgents:fecha' ? classes.verticalContainerCleanMargin : classes.verticalContainer} key={index}>
                  <Typography className={classes.labelStyle}>
                    {i18n[value]}
                  </Typography>
                </Grid>
              ))}

              <Grid xs={4} className={classes.verticalContainer}>
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="name"
                  value={data.name}
                />
              </Grid>
              {[
                {
                  name: 'tipoDocumento',
                  value: data.tipoDocumento
                },
                {
                  name: 'nDocumento',
                  value: data.nDocumento
                },
                {
                  name: 'cargo',
                  value: data.cargo
                },
                {
                  name: 'fecha',
                  value: data.fecha
                }
              ].map(({ name, value }, index) => (
                <Grid xs={2} className={name === 'fecha' ? classes.verticalContainerCleanMargin : classes.verticalContainer} key={index}>
                  <ElementInputNoLabel
                    type="text"
                    size="l"
                    name={name}
                    value={value}
                  />
                </Grid>
              ))}
            </Grid>

            <div className={classes.divHeaderSubtitleContainer}>
              <div className={classes.divHeaderFlex}>
                <span className={classes.labelHeader}>
                  {i18n['LegalAgents:representatePor']}
                </span>
              </div>
            </div>
            <Grid container
              spacing={0}
              className={classes.forceWrap}>
              <Grid xs={4} className={classes.verticalContainer}>
                <Typography className={classes.labelStyle}>
                  {i18n['LegalAgents:name']}
                </Typography>
              </Grid>
              {[
                {
                  value: 'LegalAgents:tipoDocumento'
                },
                {
                  value: 'LegalAgents:nDocumento'
                },
                {
                  value: 'LegalAgents:cargo'
                },
                {
                  value: 'LegalAgents:fecha'
                }
              ].map(({ value }, index) => (
                <Grid xs={2} className={value === 'LegalAgents:fecha' ? classes.verticalContainerCleanMargin : classes.verticalContainer} key={index}>
                  <Typography className={classes.labelStyle}>
                    {i18n[value]}
                  </Typography>
                </Grid>
              ))}

              <Grid xs={4} className={classes.verticalContainer}>
                <ElementInputNoLabel
                  type="text"
                  size="l"
                  name="name2"
                  value={data.name2}
                />
              </Grid>
              {[
                {
                  name: 'tipoDocumento2',
                  value: data.tipoDocumento2
                },
                {
                  name: 'nDocumento2',
                  value: data.nDocumento2
                },
                {
                  name: 'cargo2',
                  value: data.cargo2
                },
                {
                  name: 'fecha2',
                  value: data.fecha2
                }
              ].map(({ name, value }, index) => (
                <Grid xs={2} className={name === 'fecha2' ? classes.verticalContainerCleanMargin : classes.verticalContainer} key={index}>
                  <ElementInputNoLabel
                    type="text"
                    size="l"
                    name={name}
                    value={value}
                  />
                </Grid>
              ))}
            </Grid>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export { LegalAgents }
