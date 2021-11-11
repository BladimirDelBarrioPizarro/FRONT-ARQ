import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementFormInput } from '../types'

const useStyles = makeStyles({
  labelStyle: {
    margin: '3em 0',
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
  inputStyleIn: {
    width: '100%',
    height: '2em',
    margin: '2.6em 0',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff9900',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  inputStyleError: {
    width: '100%',
    height: '2em',
    margin: '2.6em 0',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff0000',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  inputStyle: {
    width: '100%',
    height: '2em',
    margin: '2.6em 0',
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
  },
  divIconSearch: {
    marginTop: '36px'
  },
  iconSearch: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  }
})

const ElementFormInput: React.FC<IElementFormInput> = ({
  type,
  name,
  label,
  handleSet,
  value,
  errorMessage = '',
  placeholder,
  maxLength,
  middle = true,
  modal = false,
  onBlur,
  disabled
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (
    <>
      {modal
        ? <>
          <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
            <Typography className={classes.labelStyle}>
              {label}
            </Typography>
          </Grid>

          <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
            <input
              disabled={disabled}
              id={name}
              type={type}
              className={errorMessage !== '' ? (classes.inputStyleError) : (stateIn ? (classes.inputStyleIn) : (classes.inputStyle))}
              onChange={handleSet}
              onFocus={() => setStateIn(true)}
              onBlur={() => setStateIn(false)}
              defaultValue={value}
              placeholder={placeholder}
              maxLength={maxLength}
              onBlurCapture={onBlur}
            />
            <div className={classes.divError}>{errorMessage}</div>
          </Grid>
        </>
        : <>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography className={classes.labelStyle}>
              {label}
            </Typography>
          </Grid>
          { middle
            ? <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
              <input
                disabled={disabled}
                id={name}
                type={type}
                className={errorMessage !== '' ? (classes.inputStyleError) : (stateIn ? (classes.inputStyleIn) : (classes.inputStyle))}
                onChange={handleSet}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                defaultValue={value}
                placeholder={placeholder}
                maxLength={maxLength}
                onBlurCapture={onBlur}
              />
              <div className={classes.divError}>{errorMessage}</div>
            </Grid>
            : <Grid item xs={1} sm={2} md={2} lg={7} xl={7}>
              <input
                disabled={disabled}
                id={name}
                type={type}
                className={errorMessage !== '' ? (classes.inputStyleError) : (stateIn ? (classes.inputStyleIn) : (classes.inputStyle))}
                onChange={handleSet}
                onFocus={() => setStateIn(true)}
                onBlur={() => setStateIn(false)}
                defaultValue={value}
                onBlurCapture={onBlur}
              />
              <div className={classes.divError}>{errorMessage}</div>
            </Grid>
          }
        </>
      }
    </>
  )
}

export { ElementFormInput }
