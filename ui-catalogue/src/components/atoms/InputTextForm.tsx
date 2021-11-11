import React from 'react'
import {
  Typography,
  TextField,
  Grid
} from '@material-ui/core'
import { FastField } from 'formik'

interface IInputTextForm {
  readonly label: string
  readonly name: string
  onChange?: any
}
const InputTextForm: React.FC<IInputTextForm> = ({ label, name }) => (
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
          ({ field }) => {
            field.defaultValue = field.value
            delete field.value
            delete field.onChange
            return <TextField {...field} variant="outlined"/>
          }
        }
      />
    </Grid>
  </>
)

export { InputTextForm }
