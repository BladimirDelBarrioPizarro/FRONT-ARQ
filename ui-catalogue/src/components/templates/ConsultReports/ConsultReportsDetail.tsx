import React from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { I18nConsultReportsDetail, IConsultReportsDetailData } from './types'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#003B64',
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 1000
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createData (name: string, detail: string) {
  return { name, detail }
}

export interface IConsultReportsDetail {
  i18n: I18nConsultReportsDetail
  data: IConsultReportsDetailData
  handleBack: () => void
}

const ConsultReportsDetail: React.FC<IConsultReportsDetail> = ({
  handleBack,
  i18n,
  data
}) => {
  const classes = useStyles()

  const rows = [
    createData(i18n.agencyDatescr, 'data.agencyDatescr'),
    createData(i18n.codecr, data.codecr),
    createData(i18n.socialNamecr, data.socialNamecr),
    createData(i18n.fiscalCodecr, data.fiscalCodecr),
    createData(i18n.ajtr1cr, data.ajtr1cr),
    createData(i18n.ajtr2cr, data.ajtr2cr),
    createData(i18n.socialNameComparexcr, data.socialNameComparexcr),
    createData(i18n.fiscalCodeComparex, data.fiscalCodeComparex),
    createData(i18n.pendingRequestcr, data.pendingRequestcr),
    createData(i18n.topcr, data.topcr),
    createData(i18n.topSituation, data.topSituation),
    createData(i18n.riskFactorcr, data.riskFactorcr),
    createData(i18n.eurosSalescr, data.eurosSalescr),
    createData(i18n.umpaiedcr, data.umpaiedcr),
    createData(i18n.delayscr, data.delayscr),
    createData(i18n.groupcr, data.groupcr),
    createData(i18n.addresscr, data.addresscr),
    createData(i18n.loaclitycr, data.loaclitycr),
    createData(i18n.provencecr, data.provencecr),
    createData(i18n.postalCodecr, data.postalCodecr),
    createData(i18n.countrycr, data.countrycr),
    createData(i18n.sourceReferencecr, data.sourceReferencecr),
    createData(i18n.emailcr, data.emailcr),
    createData(i18n.webcr, data.webcr),
    createData(i18n.activitiescr, data.activitiescr)
  ]
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{i18n.generalDatacr}</StyledTableCell>
              <StyledTableCell align="center">{i18n.comparexcr}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.detail}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleBack}
        variant="contained"
        color="primary">{i18n.btnReturncr}</Button>
    </div >
  )
}

export { ConsultReportsDetail }
