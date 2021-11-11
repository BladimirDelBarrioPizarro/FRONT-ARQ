import React from 'react'
import {
  Typography,
  Grid
} from '@material-ui/core'
import { ElementsInput } from '../index'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
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
    padding: '5px',
    marginTop: '1rem'
  },
  bold: {
    fontWeight: 600
  },
  divFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
  }
}))

interface ITableForm {
  readonly labelHeader1?: string
  readonly labelHeader2?: string
  readonly labelHeader3?: string
  readonly TableActionComponent?: null|React.FC
  readonly rows: Array<{
    column1Label: string
    column1Bold?: boolean
    column2Name: string
    column3Name: string
    column4Name: string
  }>
}
const TableForm: React.FC<ITableForm> = ({
  labelHeader1,
  labelHeader2,
  labelHeader3,
  // TableActionComponent = null,
  rows
}) => {
  const classes = useStyles()
  return (
    <>

      <div className={classes.divFlex}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography className={classes.labelStyle}>

            </Typography>
          </Grid>
          {[
            {
              value: labelHeader1
            },
            {
              value: labelHeader2
            },
            {
              value: labelHeader3
            }
          ].map(({ value }, index) => (
            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
              key={index}>
              <Typography className={classes.labelStyle}>
                {value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>

      {rows.map(({
        column1Label,
        column1Bold = false,
        column2Name,
        column3Name,
        column4Name
      }, counter) => (
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={2}
          key={counter}>
          <ElementsInput
            type={'text'}
            name={column1Label}
            label={column1Label}
            values={[
              { value: column2Name },
              { value: column3Name },
              { value: column4Name }
            ]}
            index={false}
            bold={column1Bold}
          />
        </Grid>

      )

      )}
    </>
  )
}

export { TableForm }
