import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementInput } from '../types'

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
    fontSize: '13px',
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
    fontSize: '13px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #ff9900'
  }
})

const ElementInput: React.FC<IElementInput> = ({
  type,
  name,
  label,
  value,
  size,
  onChange,
  readonly,
  valueVisible = true
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (

    (valueVisible
      ? <>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <Typography className={classes.labelStyle}>
            {label}
          </Typography>
        </Grid>
        { size === 'm'
          ? (
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <input
                data-testid="elementInput"
                type={type}
                id={name}
                name={name}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                defaultValue={value}
                onChange={onChange}
                readOnly={readonly}
              />
            </Grid>
          )
          : (
            (size === 's')
              ? <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <input
                  data-testid="elementInput"
                  type={type}
                  id={name}
                  name={name}
                  onFocus={() => setStateIn(true)}
                  onBlur={() => setStateIn(false)}
                  className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                  defaultValue={value}
                  onChange={onChange}
                  readOnly={readonly}
                />
              </Grid>
              : <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <input
                  data-testid="elementInput"
                  type={type}
                  id={name}
                  name={name}
                  onFocus={() => setStateIn(true)}
                  onBlur={() => setStateIn(false)}
                  className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                  defaultValue={value}
                  onChange={onChange}
                  readOnly={readonly}
                />
              </Grid>
          )
        }

      </>
      : <></>)

  )
}

export { ElementInput }
