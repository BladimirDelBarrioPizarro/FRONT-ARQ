import React from 'react'
import {
  makeStyles,
  IconButton,
  Typography
} from '@material-ui/core'
import { IUserAppElementList } from './types'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import LockIcon from '@material-ui/icons/Lock'

const useStyles = makeStyles((theme) => ({
  divDescription: {
    paddingBottom: '14px',
    paddingTop: '10px'
  },
  avatar: {
    marginTop: '5px',
    width: '30px',
    height: '30px'
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
  labelStyleSelected: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#FFFFFF',
    minWidth: '10em'
  },
  iconButtonLock: {
    width: '10px',
    height: '10px',
    color: '#003b64'
  },
  iconButtonLockSelected: {
    width: '10px',
    height: '10px',
    color: '#FFFFFF'
  },
  elementContinerSelected: {
    background: '#ff9e00',
    borderRadius: '5px',
    height: '100%'
  },
  elementContiner: {
    background: '#f9f9f9',
    borderRadius: '5px',
    height: '100%'
  }
}))

const ApplicationElement: React.FC<IUserAppElementList> = ({
  application,
  selected
}) => {
  const classes = useStyles()

  return (
    <>
      { selected
        ? <div className={classes.elementContinerSelected}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent={<IconButton
              className={classes.iconButtonLockSelected}
            >
              <Badge>
                <LockIcon/>
              </Badge>
            </IconButton>}
          >
            <Avatar alt={application.tittle} src={application.icon} className={classes.avatar}/>
          </Badge>
          <div className={classes.divDescription}>
            <Typography className={classes.labelStyleSelected}>
              {application.tittle}
            </Typography>
          </div>
        </div>
        : <div className={classes.elementContiner}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent={<IconButton
              className={classes.iconButtonLock}
            >
              <Badge>
                <LockIcon/>
              </Badge>
            </IconButton>}
          >
            <Avatar alt={application.tittle} src={application.icon} className={classes.avatar}/>
          </Badge>
          <div className={classes.divDescription}>
            <Typography className={classes.labelStyle}>
              {application.tittle}
            </Typography>
          </div>
        </div>
      }
    </>
  )
}

export { ApplicationElement }
