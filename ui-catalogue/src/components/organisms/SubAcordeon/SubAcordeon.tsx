import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'

export interface SubAcordeonProps {
  subAcordeon: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      marginTop: 20
    },
    root: {
      width: '100%'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    control: {
      padding: theme.spacing(2)
    },
    typography: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      align: 'center'
    }
  })
)

const SubAcordeon: React.FC<SubAcordeonProps> = (props: SubAcordeonProps) => {
  const { subAcordeon } = props
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item lg={12} md={12} xs={12} sm={12} className={classes.control}>
        <Accordion className={classes.root} defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel21a-content"
            id="panel21a-header"
          >
            <Typography className={classes.typography}>{subAcordeon.subheader}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item lg={6} md={6} xs={12} sm={12} className={classes.control}>
                <Table aria-label="simple table">
                  <TableBody>
                    {subAcordeon.data.map((data, index) => {
                      if (index % 2 === 0) {
                        return (
                          <TableRow key={index}>
                            <TableCell align="left">{data.name}</TableCell>
                            <TableCell align="right">{data.value}</TableCell>
                          </TableRow>
                        )
                      }
                      return null
                    })}
                  </TableBody>
                </Table>
              </Grid>
              <Grid item lg={6} md={6} xs={12} sm={12} className={classes.control}>
                <Table aria-label="simple table">
                  <TableBody>
                    {subAcordeon.data.map((data, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <TableRow key={index}>
                            <TableCell align="left">{data.name}</TableCell>
                            <TableCell align="right">{data.value}</TableCell>
                          </TableRow>
                        )
                      }
                      return null
                    })}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}

export { SubAcordeon }
