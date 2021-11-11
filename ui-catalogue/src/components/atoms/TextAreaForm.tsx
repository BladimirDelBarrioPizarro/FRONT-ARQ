import React from 'react'
import {
  Typography,
  Grid,
  TextareaAutosize
} from '@material-ui/core'
import { FastField } from 'formik'

interface ITextAreaForm {
  readonly label: string
  readonly name: string
}
const TextAreaForm: React.FC<ITextAreaForm> = ({
  label,
  name
}) => (
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
            <TextareaAutosize
              {...field}
              rowsMax={4}
            />
          )
        }
      />
    </Grid>
  </>
)

export { TextAreaForm }
