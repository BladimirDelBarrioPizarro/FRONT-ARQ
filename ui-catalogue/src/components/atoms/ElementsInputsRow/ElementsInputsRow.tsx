import React, { useState } from 'react'
import {
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'
import { IElementsInputRow } from '../types'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row'
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
    marginRight: '1rem',
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
    marginRight: '1rem',
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

const ElementsInputRow: React.FC<IElementsInputRow> = ({
  type,
  name,
  label,
  values
}) => {
  const classes = useStyles()

  const [stateIn, setStateIn] = useState(false)

  return (
    <div className={classes.container}>
      {
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Typography className={classes.labelStyle}>
            {label}
          </Typography>
        </Grid>
      }
      {values.map(({ value }, counter) => (
        <>
          {
            <>
              <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
                <input
                  type={type}
                  id={name + counter + 1}
                  name={name + (counter + 1)}
                  onFocus={() => setStateIn(true)}
                  onBlur={() => setStateIn(false)}
                  className={(stateIn ? classes.fieldStyleIn : classes.fieldStyle)}
                  defaultValue={value}
                />
              </Grid>
            </>
          }
        </>
      ))
      }
    </div>
  )
}

export { ElementsInputRow }
