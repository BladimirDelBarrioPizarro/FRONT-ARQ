import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementFormSelect } from '../types'

const useStyles = makeStyles({
  labelStyle: {
    marginTop: '3em',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    minWidth: '10em',
    paddingLeft: '15px'
  },
  selectStyleIn: {
    width: '100%',
    height: '2em',
    marginTop: '2.6em',
    marginBottom: '2px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff9900',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  selectStyle: {
    width: '100%',
    height: '2em',
    marginTop: '2.6em',
    marginBottom: '2px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  divError: {
    fontSize: '15px',
    color: 'black'
  }
})

const ElementFormSelect: React.FC<IElementFormSelect> = ({
  name,
  label,
  handleSet,
  values,
  modal = false,
  disabled,
  errorMessage
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (
    <>
      {modal
        ? <>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Typography className={classes.labelStyle}>
              {label}
            </Typography>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <select disabled={disabled}
              className={(stateIn ? classes.selectStyleIn : classes.selectStyle)}
              name={name}
              id={name}
              onChange={handleSet}
              onFocus={() => setStateIn(true)}
              onBlur={() => setStateIn(false)}
            >
              <option></option>
              {values.map((item, index) => (
                item.label === 'INFORME' || item.label === 'INF.ESPONT' ? <option key={index} value={item.value} selected>{item.label}</option>
                  : <option key={index} value={item.value}>{item.label}</option>
              ))}
            </select>
            {errorMessage !== undefined && <div className={classes.divError}>{errorMessage}</div>}
          </Grid>
        </>
        : <>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography className={classes.labelStyle}>
              {label}
            </Typography>
          </Grid>

          <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
            <select disabled={disabled}
              className={(stateIn ? classes.selectStyleIn : classes.selectStyle)}
              name={name}
              id={name}
              onChange={handleSet}
              onFocus={() => setStateIn(true)}
              onBlur={() => setStateIn(false)}
            >
              <option></option>
              {values.map((item, index) => {
                if (item.label === 'INFORME' ||
                item.label === 'INF.ESPONT' ||
                item.label === 'R.COMPLETA' ||
                item.label === 'ON-LINE') {
                  handleSet({
                    preventDefault: () => true,
                    target: {
                      value: item.value
                    }
                  })
                  return <option key={index} value={item.value} selected>{item.label}</option>
                }

                return <option key={index} value={item.value}>{item.label}</option>
              }
              )}
            </select>
          </Grid>
        </>
      }
    </>
  )
}

export { ElementFormSelect }
