import React from 'react'
import {
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'

import {
  ElementInput,
  ElementBack
} from '../../atoms'
import { IConfirmation } from './types'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '0.6rem'
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
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '1.6rem',
    marginBottom: '1.6rem'
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
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  typo: {
    color: '#ff9900'
  },
  typography: {
    marginTop: '2rem',
    marginBottom: '0rem'
  }
})

const ReportReferencesConfirmation: React.FC<IConfirmation> = ({
  i18n,
  data,
  handleAccept,
  handleCancel,
  elementBackProps
}) => {
  const classes = useStyles()
  const handleSubmit = (): void => {
    handleAccept(data.codDeudor, data.typeDocument, data.codCorrespondent, data.product, data.typeExpensive, data.dateReception)
  }
  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="flex-start"
        alignItems="center">
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <div className={classes.divHeader}>
            {i18n['ReportReferencesConfirmation:title']}
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ElementBack
            label={i18n['ReportReferencesConfirmation:textIcon']}
            size={'m'}
            handleBack={elementBackProps.handleBack}
          />
        </Grid>
      </Grid>
      <div className={classes.divContainer}>
        {[
          {
            type: 'text',
            name: 'codDeudor',
            label: i18n['ReportReferencesConfirmation:codigoempresa'],
            value: data.codDeudor,
            typeBis: 'text',
            nameBis: 'product',
            labelBis: i18n['ReportReferencesConfirmation:producto'],
            valueBis: data.productString
          },
          {
            type: 'text',
            name: 'tipodocumento',
            label: i18n['ReportReferencesConfirmation:tipodocumento'],
            value: data.typeDocumentString,
            typeBis: 'text',
            nameBis: 'typeExpensive',
            labelBis: i18n['ReportReferencesConfirmation:tipogasto'],
            valueBis: data.typeExpensiveString
          },
          {
            type: 'text',
            name: 'codCorrespondent',
            label: i18n['ReportReferencesConfirmation:corresponsal'],
            value: data.codCorrespondent,
            typeBis: 'text',
            nameBis: 'dateReception',
            labelBis: i18n['ReportReferencesConfirmation:fecharecepcion'],
            valueBis: data.dateReception
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

        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.typography}>
              <Typography className={classes.typo} component="h6">{i18n['ReportReferencesConfirmation:textvalidation']}</Typography>
            </div>
          </Grid>
        </Grid>

        <div className={classes.divFlexButton}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {[
              {
                label: i18n['ReportReferencesConfirmation:buttonAccept'],
                click: handleSubmit,
                align: classes.buttonMiddle
              },
              {
                label: i18n['ReportReferencesConfirmation:buttonCancel'],
                click: handleCancel,
                align: classes.buttonMiddle
              }
            ].map(({ label, click, align }, index) => (
              <Grid item xs={12} sm={4} md={4} lg={2} xl={2}
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
          </Grid>
        </div>
      </div>
    </div>
  )
}

export { ReportReferencesConfirmation }
