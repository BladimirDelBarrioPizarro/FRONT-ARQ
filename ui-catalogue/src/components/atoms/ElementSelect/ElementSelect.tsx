import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementSelect } from '../types'

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
    height: '24px',
    fontSize: '11px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #eeeeee'
  },
  fieldStyleIn: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontSize: '11px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #ff9900'
  }
})

const ElementSelect: React.FC<IElementSelect> = ({
  label,
  name,
  value,
  options,
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
      { (size === 'm')
        ? (
          <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
            <select
              id={name}
              name={name}
              onFocus={() => setStateIn(true)}
              onBlur={() => setStateIn(false)}
              onChange={onChange}
              className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
              defaultValue={value}
            >
              <option></option>

              {options.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.result}
                </option>
              ))}
            </select>
          </Grid>
        )
        : (
          (size === 'l')
            ? <Grid item xs={10} sm={6} md={6} lg={6} xl={6}>
              <select
                id={name}
                name={name}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                onChange={onChange}
                className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                defaultValue={value}
              >
                <option></option>
                {options.map((item, index) => (
                  <option key={index} value={item.value}>{item.result}</option>
                ))}
              </select>
            </Grid>
            : <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <select
                id={name}
                name={name}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                // onChange={e => { setTypeExpensive(e.target.value) }}
                className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                defaultValue={value}
              >
                <option></option>
                {options.map((item, index) => (
                  <option key={index} value={item.value}>{item.result}</option>
                ))}
              </select>
            </Grid>
        )
      }
    </>
  )
}

export { ElementSelect }
