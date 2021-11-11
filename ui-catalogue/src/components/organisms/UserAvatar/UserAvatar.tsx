import React from 'react'
import {
  makeStyles,
  IconButton,
  Typography
} from '@material-ui/core'
import { IUserAvatar } from './types'
import SettingsIcon from '@material-ui/icons/Settings'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'

const useStyles = makeStyles((theme) => ({
  divUser: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%'
  },
  divContainer: {
    marginTop: '24px'
  },
  divDescription: {
    marginTop: '24px'
  },
  divDirectAccess: {
    display: 'flex',
    marginTop: '24px',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  avatar: {
    width: '60px',
    height: '60px'
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
    minWidth: '10em'
  },
  icon: {
    primary: '#003b64',
    secondary: '#ff9900',
    padding: '3px'
  },
  iconButtonSettings: {
    width: '18px',
    height: '18px',
    color: '#003b64',
    '&:hover': {
      color: '#FF9B00 !important'
    }
  },
  iconButtonApps: {
    width: '36px',
    height: '36px',
    marginRight: '9px',
    background: '#003b64',
    color: '#ffffff',
    '&:hover': {
      background: '#FF9B00 !important',
      color: '#ffffff'
    }
  },
  customBadge: {
    backgroundColor: '#FF9B00',
    color: 'white'
  }
}))

const UserAvatar: React.FC<IUserAvatar> = ({
  nameUser,
  emailUser,
  avatar,
  notifications,
  emails,
  handleSettings,
  handleNotifications,
  handleMails
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.divUser}>
        <div className={classes.divContainer}>
          <Badge
            overlap="circle"
            badgeContent={<IconButton
              className={classes.iconButtonSettings}
              onClick={handleSettings}
            >
              <Badge>
                <SettingsIcon/>
              </Badge>
            </IconButton>}
          >
            <Avatar alt={nameUser} src={avatar} className={classes.avatar}/>
          </Badge>
        </div>
        <div className={classes.divDescription}>
          <Typography className={classes.labelStyle}>
            {nameUser}
          </Typography>

          <Typography className={classes.labelStyle}>
            {emailUser}
          </Typography>
        </div>
        <div className={classes.divDirectAccess}>

          <IconButton
            className={classes.iconButtonApps}
            onClick={handleNotifications}
          >
            {notifications
              ? <Badge
                classes={{ badge: classes.customBadge }}
                variant="dot">
                <NotificationsIcon/>
              </Badge>
              : <Badge
                classes={{ badge: classes.customBadge }}>
                <NotificationsIcon/>
              </Badge>
            }
          </IconButton>
          <IconButton
            className={classes.iconButtonApps}
            onClick={handleMails}
          >
            {emails
              ? <Badge
                classes={{ badge: classes.customBadge }}
                variant="dot">
                <MailIcon/>
              </Badge>
              : <Badge
                classes={{ badge: classes.customBadge }}>
                <MailIcon/>
              </Badge>
            }

          </IconButton>
        </div>
      </div>
    </>
  )
}

export { UserAvatar }
