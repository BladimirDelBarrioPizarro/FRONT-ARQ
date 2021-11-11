import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

type TrowData = Array<{
  name: string
  value: number
}>
interface TacordeonBody {
  data: Array<{
    subheader?: boolean
    data: TrowData
  }>
}
export interface AcordeonPageProps {
  acordeonBody: TacordeonBody
  i18n: {
    header: string
  }
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

const boxBorderTop = 1
const boxBgcolor = 'background.paper'
const boxStyle = { width: '100%', height: 'auto' }
const boxBorderColor = 'grey.500'

const TableElement: React.FC<{rowData: TrowData}> = ({ rowData }) => (
  <Table>
    <TableBody>
      {rowData.map((data, index) => {
        return (
          <TableRow key={index}>
            <TableCell align='left'>{data.name}</TableCell>
            <TableCell align='right'>{data.value}</TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  </Table>
)

const GridItem: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid item lg={12} md={12} xs={12} sm={12} className={classes.control}>
      {children}
    </Grid>
  )
}

const AccordionItem: React.FC<{header?: string}> = ({ children, header }) => {
  const classes = useStyles()
  return (
    <Accordion defaultExpanded={true} className={classes.root}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {Boolean(header) && (
          <Typography className={classes.heading}>
            {header}
          </Typography>
        )}
      </AccordionSummary>

      <Box
        borderTop={boxBorderTop}
        bgcolor= {boxBgcolor}
        style= { boxStyle }
        borderColor= {boxBorderColor}
      >
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Box>
    </Accordion>
  )
}

const AcordeonPage: React.FC<AcordeonPageProps> = (
  { acordeonBody, i18n }
) => (
  <AccordionItem header={i18n.header}>
    {acordeonBody.data.map((data, index) => {
      const leftTableData = data.data.filter((data, index) => index % 2 === 0)
      const rightTableData = data.data.filter((data, index) => index % 2 !== 0)

      return (
        <>
          {data.subheader && (
            <Grid container>
              <AccordionItem>
                <Grid container>
                  <GridItem>
                    {TableElement({ rowData: leftTableData })}
                  </GridItem>
                </Grid>
                <Grid container>
                  <GridItem>
                    {TableElement({ rowData: rightTableData })}
                  </GridItem>
                </Grid>
              </AccordionItem>
            </Grid>
          )}
          {!data.subheader && (
            <Box
              bgcolor= {boxBgcolor}
              style= { boxStyle }
            >
              <GridItem>
                <AccordionDetails>
                  <Grid container>
                    <GridItem>
                      {TableElement({ rowData: leftTableData })}
                    </GridItem>
                  </Grid>
                  <Grid container>
                    <GridItem>
                      {TableElement({ rowData: rightTableData })}
                    </GridItem>
                  </Grid>
                </AccordionDetails>
              </GridItem>
            </Box>
          )}
        </>
      )
    })}
  </AccordionItem>
)

export { AcordeonPage }
