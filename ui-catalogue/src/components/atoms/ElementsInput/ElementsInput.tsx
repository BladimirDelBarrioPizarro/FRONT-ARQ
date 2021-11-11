import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementsInput } from '../types'

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
  labelStyleIndent: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textIndent: '20px',
    color: '#003b64',
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
  labelItemsStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'right',
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
  },
  divSpace: {
    width: '15px'
  }
})

const ElementsInput: React.FC<IElementsInput> = ({
  type,
  name,
  label,
  values,
  index,
  bold,
  onChange,
  valueVisible = true
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (

    (valueVisible
      ? <>
        {(index)
          ? <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Typography className={(bold ? classes.labelStyleBold : classes.labelStyle)}>
              {label}
            </Typography>
          </Grid>
          : <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography className={(bold ? classes.labelStyleBold : classes.labelStyleIndent)}>
              {label}
            </Typography>
          </Grid>
        }
        {values.map(({ value }, counter) => (
          <>
            {(index)
              ? <>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}
                  direction="row"
                  justify="flex-end"
                  alignItems="center">
                  <Typography className={classes.labelItemsStyle}>
                    {counter + 1}.
                  </Typography>
                </Grid>

                <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>

                  <input
                    type={type}
                    id={name + counter + 1}
                    name={name + (counter + 1)}
                    onFocus={() => setStateIn(true)}
                    onBlur={() => setStateIn(false)}
                    className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                    defaultValue={value}
                    onChange={onChange}
                  />
                </Grid>
              </>
              : <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
                <input
                  type={type}
                  id={name + (counter + 1)}
                  name={name + (counter + 1)}
                  onFocus={() => setStateIn(true)}
                  onBlur={() => setStateIn(false)}
                  className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                  defaultValue={value}
                  onChange={onChange}
                />
              </Grid>
            }
          </>
        ))
        }
      </>
      : <></>)
  )
}

export { ElementsInput }
