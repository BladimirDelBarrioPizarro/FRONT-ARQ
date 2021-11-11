import React from 'react'
import { IRefReceptionNum } from './types'
import {
  makeStyles
} from '@material-ui/core'
import { CorrespondentData } from '../../molecules/CorrespondentData/CorrespondentData'
import { CompanyData } from '../../molecules/CompanyData/CompanyData'
import { ApplicationDetails } from '../../molecules/ApplicationDetails/ApplicationDetails'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: '#ffffff'
  },
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderContainerChild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '0rem'
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
  divButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

const RefReceptionNum: React.FC<IRefReceptionNum> = ({
  i18n,
  data,
  handleAlta,
  handleReception,
  handleCancel
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['RefReceptionNum:title']}
          </span>
        </div>
      </div>
      <CorrespondentData
        i18n={i18n}
        data={data.correspondentData}
      />
      <CompanyData
        i18n={i18n}
        data={data.companyData}
      />
      <ApplicationDetails
        i18n={i18n}
        data={data.applicationDetails}
      />

      <div className={classes.divButtons}>
        <button
          onClick={handleAlta}
          className={classes.button}
        >
          {i18n['RefReceptionNum:buttonAlta']}
        </button>
        <button
          onClick={handleReception}
          className={classes.button}
        >
          {i18n['RefReceptionNum:buttonRecepcion']}
        </button>
        <button
          onClick={handleCancel}
          className={classes.button}
        >
          {i18n['RefReceptionNum:buttonEliminar']}
        </button>

      </div>

    </div>
  )
}

export { RefReceptionNum }
