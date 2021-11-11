import React, { useState } from 'react'
import {
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

const ElementInputTable: React.FC<IElementInput> = ({
  type,
  name,
  label,
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
        )
        : (
          (size === 's')
            ? <input
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

            : <input
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

        )
      }
    </>
  )
}

export { ElementInputTable }
