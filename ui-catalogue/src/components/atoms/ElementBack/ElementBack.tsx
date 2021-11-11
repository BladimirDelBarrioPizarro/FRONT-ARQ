import React from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export interface IElementBack {
  label: string
  size: any
  handleBack: () => any
}

const useStyles = makeStyles((theme) => ({
  divRefresh: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    cursor: 'pointer'
  },
  divContent: {
    display: 'flex',
    flexDirection: 'row'
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

const ElementBack: React.FC<IElementBack> = ({
  label,
  size,
  handleBack
}) => {
  const classes = useStyles()

  return (
    <>
      { size === 'm'
        ? <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          className={classes.divRefresh}>
          <div className={classes.divContent} onClick={handleBack}>
            <ArrowBackIcon/>
            <Typography className={classes.labelStyle}>
              {label}
            </Typography>
          </div>
        </Grid>
        : <Grid item xs={12} sm={2} md={2} lg={2} xl={2}
          className={classes.divRefresh}>
          <div className={classes.divContent}>
            <ArrowBackIcon/>
            <Typography className={classes.labelStyle}>
              {label}
            </Typography>
          </div>
        </Grid>
      }
    </>
  )
}

export { ElementBack }
