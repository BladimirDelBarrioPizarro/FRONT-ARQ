import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IDashboardFooter } from './types'
import { logoCesce as logo } from '../../config/constantes'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    background: '#ffffff',
    height: '112px',
    marginLeft: '38px',
    marginRight: '38px',
    borderRadius: '4.6px'
  },
  menuLabelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b66',
    padding: '5px',
    textDecoration: 'none',
    '&:hover': {
      color: '#ff9900 !important'
    }
  },
  divImagen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%'
  },
  imagen: {
    width: '218px',
    objectFit: 'contain'
  },
  divADS: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%',
    width: '5%'
  },
  child: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e62d39',
    color: '#ffffff',
    width: '65px',
    height: '24px'
  },
  footerStyle: {
    fontFamily: 'NeverMind',
    fontSize: '12.2px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'italic',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff'
  }
}))

const DashboardFooter: React.FC<IDashboardFooter> = ({
  i18n
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.divImagen}>
        <img
          className={classes.imagen}
          alt="Logo"
          src={logo}
        />
      </div>
      <div id="ads" className={classes.divADS}>
        <div className={classes.child}>
          <div className={classes.footerStyle}>
            {i18n['DashboardFooter:ADS']}
          </div>
        </div>
      </div>
    </div>
  )
}

export { DashboardFooter }

export type { IDashboardFooter }
