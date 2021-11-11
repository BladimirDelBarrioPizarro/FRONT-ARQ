import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementTextArea } from '../types'

const useStyles = makeStyles({
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
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
    boxSizing: 'border-box',
    fontSize: '11px',
    marginBottom: '3px',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #eeeeee'
  },
  fieldStyleIn: {
    padding: '3px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '11px',
    marginBottom: '3px',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #ff9900'
  }
})

const ElementTextArea: React.FC<IElementTextArea> = ({
  label,
  name,
  value,
  rows,
  cols,
  size,
  onChange
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (
    <>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <Typography className={classes.labelStyle}>
          {label}
        </Typography>
      </Grid>

      { size === 'm'
        ? <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
          <textarea
            id={name}
            name={name}
            cols={cols}
            rows={rows}
            onFocus={() => setStateIn(true)}
            onBlur={() => setStateIn(false)}
            className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
            onChange={onChange}
          >{value}</textarea>
        </Grid>
        : <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <textarea
            id={name}
            name={name}
            cols={cols}
            rows={rows}
            onFocus={() => setStateIn(true)}
            onBlur={() => setStateIn(false)}
            className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
            onChange={onChange}
          >{value}</textarea>
        </Grid>
      }
    </>
  )
}

export { ElementTextArea }
