import React, { FunctionComponent } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { AcordeonPage } from '../../organisms/AccordionPage/AccordionPage'
import { IReportDetail } from './types'

const useStyles = makeStyles((theme) => ({
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
}))

const ReportDetail: FunctionComponent<IReportDetail> = ({ report, i18n }) => {
  const classes = useStyles()

  return (
    <Container className={classes.margin}>
      <div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h4">
          {i18n.typo1rd}
        </Typography>
        {report.length !== 0 ? report.map((acordeonElement, index) => (
          <AcordeonPage i18n={i18n} key={index} acordeonBody={acordeonElement} />
        )) : null}
      </div>
    </Container>
  )
}

export { ReportDetail }
export type { IReportDetail }
