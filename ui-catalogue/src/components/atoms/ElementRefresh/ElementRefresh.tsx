import React from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import AutorenewIcon from '@material-ui/icons/Autorenew'

interface IElementRefresh {
  label: string
  size: any
}

const useStyles = makeStyles((theme) => ({
  divRefresh: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    padding: '5px',
    textAlign: 'right'
  },
  refreshStyle: {
    color: '#003b64',
    width: '14px'
  },
  refreshStyleChecked: {
    color: '#ff9900',
    width: '14px'
  }
}))

const ElementRefresh: React.FC<IElementRefresh> = ({
  label,
  size
}) => {
  const classes = useStyles()

  return (
    <>
      { size === 'm'
        ? <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          className={classes.divRefresh}>
          <AutorenewIcon fontSize="small"
            className={classes.refreshStyleChecked}
          />
          <Typography className={classes.labelStyle}>
            <u>{label}</u>
          </Typography>
        </Grid>
        : <Grid item xs={12} sm={2} md={2} lg={2} xl={2}
          className={classes.divRefresh}>
          <AutorenewIcon fontSize="small"
            className={classes.refreshStyleChecked}
          />
          <Typography className={classes.labelStyle}>
            <u>{label}</u>
          </Typography>
        </Grid>
      }
    </>
  )
}

export { ElementRefresh }
