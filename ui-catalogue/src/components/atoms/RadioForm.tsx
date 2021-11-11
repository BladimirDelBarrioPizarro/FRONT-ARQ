import React from 'react'
import {
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core'
import { FastField } from 'formik'

interface IRadioForm {
  readonly label: string
  readonly name: string
  readonly labelOpt1: string
  readonly labelOpt2: string
}
const RadioForm: React.FC<IRadioForm> = ({ label, name, labelOpt1, labelOpt2 }) => (
  <>
    <Grid item xs={3}>
      <Typography>
        {label}
      </Typography>
    </Grid>
    <Grid item xs={1}></Grid>
    <Grid item xs={8}>
      <FastField
        name={name}
        component={
          ({ field }) => (
            <RadioGroup
              {...field}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label={labelOpt1}
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label={labelOpt2}
              />
            </RadioGroup>
          )
        }
      />
    </Grid>
  </>
)

export { RadioForm }
