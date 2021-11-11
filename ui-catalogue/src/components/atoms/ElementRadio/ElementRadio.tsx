import React from 'react'
import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles
} from '@material-ui/core'
import { FastField } from 'formik'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import { IRadioForm } from '../types'

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
    paddingLeft: '5px',
    paddingTop: '28px',
    marginBottom: '0.5rem'
  },
  labelStylelarge: {
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    paddingLeft: '5px',
    paddingTop: '28px',
    marginBottom: '0.5rem'
  },
  labelRadioStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    alignSelf: 'flex-end',
    padding: '5px',
    height: '50px',
    position: 'relative',
    width: '80px',
    textAlign: 'center'
  },
  labelRadioLeftStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    alignSelf: 'flex-end',
    paddingRight: '12px',
    paddingTop: '4px',
    height: '50px',
    position: 'relative',
    width: '80px',
    textAlign: 'right'
  },
  checkboxStyle: {
    color: '#003b64',
    width: '14px'
  },
  checkboxStyleChecked: {
    color: '#ff9900',
    width: '14px'
  },
  divTest: {
    background: 'coral',
    borderRadius: '4px',
    height: '100px',
    position: 'relative',
    width: '100px'
  },
  divRadioLeft: {
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    position: 'absolute',
    height: '20px',
    width: '50px'
  },
  divRadioRight: {
    borderRadius: '4px',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    position: 'absolute',
    height: '20px',
    width: '50px'
  },
  fieldStyle: {
    width: '76%',
    height: '1.3em',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    border: 'solid 1px #eeeeee',
    color: '#666666'
  },
  fieldStyle50: {
    width: '52%',
    height: '1.3em',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    border: 'solid 1px #eeeeee',
    color: '#666666'
  }
})

const ElementRadio: React.FC<IRadioForm> = ({
  label,
  name,
  value,
  labelOpt1,
  labelOpt2,
  onChange,
  large = false
}) => {
  const classes = useStyles()

  return (
    <>
      {large
        ? <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <div className={classes.labelStylelarge}>
            {label}
          </div>
        </Grid>
        : <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <div className={classes.labelStyle}>
            {label}
          </div>
        </Grid>
      }

      <Grid item xs={10} sm={10} md={4} lg={4} xl={2}>
        <FastField
          name={name}
          id={name}
          /* onChange={onChange} */
          component={
            ({ field }) => (
              <RadioGroup aria-label="gender" name="gender1" defaultValue={value}
                row
                {...field}
              >

                <div className={classes.labelRadioStyle}>
                  {labelOpt1}
                  <div className={classes.divRadioLeft}>
                    <FormControlLabel value="true"
                      control={
                        <Radio
                          icon={
                            <RadioButtonUncheckedRoundedIcon fontSize="small"
                              className={classes.checkboxStyle}/>}
                          checkedIcon={
                            <RadioButtonCheckedRoundedIcon fontSize="small"
                              className={classes.checkboxStyleChecked}/>}
                        />
                      }
                      label=""/>
                  </div>
                </div>
                <div className={classes.labelRadioLeftStyle}>
                  {labelOpt2}
                  <div className={classes.divRadioRight}>
                    <FormControlLabel value="false"
                      control={
                        <Radio
                          icon={
                            <RadioButtonUncheckedRoundedIcon fontSize="small"
                              className={classes.checkboxStyle}/>}
                          checkedIcon={
                            <RadioButtonCheckedRoundedIcon fontSize="small"
                              className={classes.checkboxStyleChecked}/>}
                        />
                      }
                      labelPlacement="start"
                      label=""/>
                  </div>
                </div>
              </RadioGroup>
            )
          }
        />
      </Grid>
    </>
  )
}

export { ElementRadio }
