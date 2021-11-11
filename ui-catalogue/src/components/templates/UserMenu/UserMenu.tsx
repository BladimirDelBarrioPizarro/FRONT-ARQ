import React, { useState } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Drawer,
  Switch
} from '@material-ui/core'
import { IUserMenu } from './types'
import { UserAvatar } from '../../organisms/UserAvatar/UserAvatar'
import { UserContent } from '../../organisms/UserContent/UserContent'

const drawerWidth = 250
const drawerWidthDisabled = 50

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  drawer: {
    width: drawerWidth,
    height: '100%',
    flexShrink: 0,
    border: 0
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none'
  },
  drawerDisabled: {
    width: drawerWidthDisabled,
    height: '100%',
    flexShrink: 0,
    border: 0
  },
  drawerPaperDisabled: {
    width: drawerWidthDisabled,
    border: 'none',
    overflowX: 'hidden',
    overflowY: 'hidden',
    overflow: 'hidden'
  },
  divSwitch: {
    height: '94vh'
  },
  divSwitchFooter: {
    height: '3vh'
  },
  divHeader: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10vh'
  },
  divUser: {
    display: 'flex',
    width: '100%'
  },
  divSeparator: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  divContent: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60vh'
  },
  divFooter: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    width: '100%',
    height: '5vh',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  hrStyle: {
    borderTadius: '5px',
    borderTop: '5px solid #f9f9f9',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none'
  },
  labelStyleFooter: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    minWidth: '10em'
  },
  logoStyle: {
    width: '180px',
    objectFit: 'contain'
  },
  switch_track: {
    backgroundColor: '#003b64'
  },
  switch_base: {
    color: '#003b64',
    '&.Mui-disabled': {
      color: '#003b64'
    },
    '&.Mui-checked': {
      color: '#ff9e00'
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#ff9e00'
    }
  },
  switch_primary: {
    '&.Mui-checked': {
      color: '#ff9e00'
    },
    '&.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#ff9e00'
    }
  }
}))

const UserMenu: React.FC<IUserMenu> = ({
  i18n,
  applications,
  userData,
  logo
}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(true)

  const handleChange = (): void => {
    setOpen(!open)
  }

  const handleApplication = (): void => { }

  return (
    <>
      {open
        ? <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          open={open}
        >
          <div className={classes.divHeader}>
            <img src={logo} alt="Logo" className={classes.logoStyle}/>
          </div>
          <div className={classes.divUser}>
            <UserAvatar
              nameUser={userData.nameUser}
              emailUser={userData.emailUser}
              avatar={userData.avatar}
              notifications={userData.notifications}
              emails={userData.emails}
              handleSettings={userData.handleSettings}
              handleNotifications={userData.handleNotifications}
              handleMails={userData.handleMails}
            />
          </div>
          <div className={classes.divSeparator}>
            <hr className={classes.hrStyle}></hr>
          </div>
          <div className={classes.divContent}>
            <UserContent
              i18n={i18n}
              applications={applications}
              handleApplication={handleApplication}
            />
          </div>
          <div className={classes.divFooter}>
            <Switch
              classes={{
                track: classes.switch_track,
                switchBase: classes.switch_base,
                colorPrimary: classes.switch_primary
              }}
              checked={open}
              onChange={handleChange}
              name="checkedDrawer"
            />
            <div className={classes.labelStyleFooter}>
              {i18n['MenuUser:Ocultar']}
            </div>
          </div>
        </Drawer>
        : <Drawer
          className={classes.drawerDisabled}
          variant="permanent"
          classes={{
            paper: classes.drawerPaperDisabled
          }}
          anchor="left"
          open={open}
        >
          <div className={classes.divSwitch}>

          </div>
          <div className={classes.divSwitchFooter}>
            <Switch
              classes={{
                track: classes.switch_track,
                switchBase: classes.switch_base,
                colorPrimary: classes.switch_primary
              }}
              checked={open}
              onChange={handleChange}
              name="checkedDrawer"
            />
          </div>
        </Drawer>
      }
    </>
  )
}

export { UserMenu }

export type { IUserMenu }
