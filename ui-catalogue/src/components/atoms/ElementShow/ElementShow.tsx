import React from 'react'
import {
  makeStyles,
  Grid,
  Typography
} from '@material-ui/core'
import { IElementShow } from '../types'

const useStyles = makeStyles({
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px'
  },
  fieldStyle: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    marginBottom: '3px',
    marginleft: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#f9f9f9',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #eeeeee'
  }
})

const ElementShow: React.FC<IElementShow> = ({
  label,
  value,
  middle
}) => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <Typography className={classes.labelStyle}>
          {label}
        </Typography>
      </Grid>

      {middle
        ? <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
          <input
            type="text"
            id={label}
            name={label}
            className={classes.fieldStyle}
            value={value}
          />
        </Grid>
        : <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <input
            type="text"
            id={label}
            name={label}
            className={classes.fieldStyle}
            value={value}
          />
        </Grid>
      }
    </>
  )
}

export { ElementShow }
