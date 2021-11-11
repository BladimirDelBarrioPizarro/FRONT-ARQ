import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementInputCol } from '../types'

const useStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  divLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
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

const ElementInputCol: React.FC<IElementInputCol> = ({
  type,
  name,
  label,
  value,
  size
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (
    <div className={classes.column}>
      <div className={classes.divLabel}>
        { size === 'm'
          ? (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
              justify="center"
              alignItems="center">
              <Typography className={classes.labelStyle}>
                {label}
              </Typography>
            </Grid>
          )
          : (
            (size === 's')
              ? <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.labelStyle}>
                  {label}
                </Typography>
              </Grid>
              : <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
                <Typography className={classes.labelStyle}>
                  {label}
                </Typography>
              </Grid>
          )}
      </div>
      { size === 'm'
        ? (
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <input
              type={type}
              id={name}
              name={name}
              onFocus={() => setStateIn(true)}
              onBlur={() => setStateIn(false)}
              className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
              defaultValue={value}
            />
          </Grid>
        )
        : (
          (size === 's')
            ? <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
              <input
                type={type}
                id={name}
                name={name}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                defaultValue={value}
              />
            </Grid>
            : <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <input
                type={type}
                id={name}
                name={name}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                defaultValue={value}
              />
            </Grid>
        )
      }
    </div>
  )
}

export { ElementInputCol }
