import React, { Fragment } from 'react'
import {
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'
import { IPaymentsLegalProcess } from './types'
import { ElementInputNoLabel } from '../../atoms/ElementInputNoLabel/ElementInputNoLabel'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    maxWidth: '60vw'
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
    width: '100%',
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
    textAlign: 'center',
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: ' center',
    flexDirection: 'row'
  }
})

const PaymentsLegalProcess: React.FC<IPaymentsLegalProcess> = ({
  i18n,
  data
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['PaymentsLegalProcess:title']}
          </span>
        </div>
      </div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['PaymentsLegalProcess:titleIndicadores']}
          </span>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            {[
              {
                label: i18n['PaymentsLegalProcess:detailTbEmpresa']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbHistory']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbFinancial']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbCriminal']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbJudgements']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbClaims']
              }
            ].map(({ label }, index) => (
              <Grid item xs={12} sm={2} md={2} lg={2} xl={2}
                justify="center"
                alignItems="center"
                key={index}>
                <Typography className={classes.labelStyle}>
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>

        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {[
              {
                type: 'text',
                name: 'empresa',
                value: data.empresa,
                size: 's'

              },
              {
                type: 'text',
                name: 'history',
                value: data.history,
                size: 's'
              },
              {
                type: 'text',
                name: 'financial',
                value: data.financial,
                size: 's'
              },
              {
                type: 'text',
                name: 'criminal',
                value: data.criminal,
                size: 's'
              },
              {
                type: 'text',
                name: 'judgements',
                value: data.judgements,
                size: 's'
              },
              {
                type: 'text',
                name: 'claims',
                value: data.claims,
                size: 's'
              }
            ].map(({ type, name, value, size }, index) => (
              <ElementInputNoLabel
                type={type}
                name={name}
                value={value}
                size={size}
                key={index}
              />
            ))}
          </Grid>

        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            {[
              {
                label: i18n['PaymentsLegalProcess:detailTbSecured']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbLegal']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbDisaster']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbOperational']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbOthers']
              },
              {
                label: ''
              }
            ].map(({ label }, index) => (
              <Grid item xs={12} sm={2} md={2} lg={2} xl={2}
                justify="center"
                alignItems="center"
                key={index}>
                <Typography className={classes.labelStyle}>
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>

        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {[
              {
                type: 'text',
                name: 'secured',
                value: data.secured,
                size: 's'

              },
              {
                type: 'text',
                name: 'legal',
                value: data.legal,
                size: 's'
              },
              {
                type: 'text',
                name: 'disaster',
                value: data.disaster,
                size: 's'
              },
              {
                type: 'text',
                name: 'operational',
                value: data.operational,
                size: 's'
              },
              {
                type: 'text',
                name: 'others',
                value: data.others,
                size: 's'
              }
            ].map(({ type, name, value, size }, index) => (
              <ElementInputNoLabel
                type={type}
                name={name}
                value={value}
                size={size}
                key={index}
              />
            ))}
          </Grid>

        </div>
      </div>

      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['PaymentsLegalProcess:titlePaydexIndicadores']}
          </span>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            {[
              {
                label: i18n['PaymentsLegalProcess:detailTbActual']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTb3Months']
              },
              {
                label: i18n['PaymentsLegalProcess:detailTbNorm']
              }
            ].map(({ label }, index) => (
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
                justify="center"
                alignItems="center"
                key={index}>
                <Typography className={classes.labelStyle}>
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>

        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            {[
              {
                type: 'text',
                name: 'actual',
                value: data.actual,
                size: 'm'

              },
              {
                type: 'text',
                name: 'months',
                value: data.months,
                size: 'm'
              },
              {
                type: 'text',
                name: 'norm',
                value: data.norm,
                size: 'm'
              }
            ].map(({ type, name, value, size }, index) => (
              <ElementInputNoLabel
                type={type}
                name={name}
                value={value}
                size={size}
                key={index}
              />
            ))}
          </Grid>

        </div>
      </div>

    </Fragment>
  )
}

export { PaymentsLegalProcess }
