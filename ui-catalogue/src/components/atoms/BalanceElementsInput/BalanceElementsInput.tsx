import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IBalanceElementsInput } from '../types'

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
  labelStyleSub: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#666666',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px'
  },
  labelStyleBold: {
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
    alignSelf: 'flex-end',
    padding: '5px'
  },
  fieldStyle: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontSize: '11px',
    textAlign: 'right',
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
    textAlign: 'right',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none',
    border: 'solid 1px #ff9900'
  },
  divSpace: {
    width: '15px'
  }
})

const BalancesElementsInput: React.FC<IBalanceElementsInput> = ({
  type,
  name,
  label,
  values,
  bold,
  subIndex = false,
  onChange
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  const onChangeFormat = (e): void => {
    if (type === 'number') {
      e.target.value = parseFloat(e.target.value).toFixed(2)
    }
    onChange(e)
  }

  const formatValue = (value): any => {
    if (type === 'number') {
      value = parseFloat(value).toFixed(2)
    }

    return value
  }

  return (
    <>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
        {subIndex
          ? <Typography className={classes.labelStyleSub}>
            {label}
          </Typography>
          : <Typography className={(bold ? classes.labelStyleBold : classes.labelStyle)}>
            {label}
          </Typography>
        }
      </Grid>
      {values.map(({ value }, counter) => (
        <>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <input
              type={type}
              id={name + (counter + 1)}
              name={name + (counter + 1)}
              onFocus={() => setStateIn(true)}
              onBlur={() => setStateIn(false)}
              className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
              defaultValue={formatValue(value)}
              onChange={onChange}
              onBlurCapture={onChangeFormat}
            />
          </Grid>
        </>
      ))
      }

    </>
  )
}

export { BalancesElementsInput }
