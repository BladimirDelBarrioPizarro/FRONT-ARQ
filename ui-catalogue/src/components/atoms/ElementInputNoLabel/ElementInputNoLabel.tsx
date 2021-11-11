import React, { useState } from 'react'
import {
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementInputNoLabel } from '../types'

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

const ElementInputNoLabel: React.FC<IElementInputNoLabel> = ({
  type,
  name,
  value,
  size,
  onChange
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (
    <>

      { size === 'm'
        ? (
          <Grid item xs={10} sm={4} md={4} lg={4} xl={4}>
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
            />
          </Grid>
        )
        : (
          (size === 's')
            ? <Grid item xs={6} sm={2} md={2} lg={2} xl={2}>
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
              />
            </Grid>
        )
      }
    </>
  )
}

export { ElementInputNoLabel }
