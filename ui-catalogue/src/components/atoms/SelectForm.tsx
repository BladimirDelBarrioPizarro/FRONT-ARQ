import React from 'react'
import {
  Typography,
  Grid,
  Select,
  MenuItem
} from '@material-ui/core'
import { FastField } from 'formik'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    select: {
      width: '20rem'
    }
  })
)

interface ISelectForm {
  readonly label: string
  readonly name: string
  readonly options: Array<{
    label: string
    value: string
  }>
}
const SelectForm: React.FC<ISelectForm> = ({
  label,
  name,
  options
}) => {
  const classes = useStyles()
  return (
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

              <Select
                autoWidth={true}
                className={classes.select}
                {...field}
                inputProps={{
                  name: name
                }}
              >
                <MenuItem>
                  <em></em>
                </MenuItem>
                {options.map(({ value, label }, index) => (
                  <MenuItem
                    key={index}
                    value={value}
                  >
                    {label}
                  </MenuItem>
                ))}
              </Select>
            )
          }
        />
      </Grid>
    </>
  )
}

export { SelectForm }
