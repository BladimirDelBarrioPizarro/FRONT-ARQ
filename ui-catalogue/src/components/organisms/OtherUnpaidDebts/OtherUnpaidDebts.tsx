import React, { Fragment } from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { IOtherUnpaidDebts } from './types'
import { DebsReportedInfoCorpSicoms } from '../../molecules/DebtsReportedInfoCorpSicom/DebsReportedInfoCorpSicom'
import { NegativeSunat } from '../../molecules/NegativeSunat/NegativeSunat'
import { Omission } from '../../molecules/Omission/Omission'
import { ProtestBulletin } from '../../molecules/ProtestBulletin/ProtestBulletin'
import { VoidedCards } from '..//../molecules/VoidedCards/VoidedCards'
import { CanceledAccounts } from '../../molecules/CanceledAccounts/CanceledAccounts'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    maxWidth: '60vw'
  },
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  },
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  }
})
const OtherUnpaisDebts: React.FC<IOtherUnpaidDebts> = ({
  i18n,
  data
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['OtherUnpaidDebts:title']}
          </span>
        </div>
      </div>
      <DebsReportedInfoCorpSicoms
        i18n={i18n}
        data={data.debtsReportedInfoCorpSicom}
      />
      <NegativeSunat
        i18n={i18n}
        data={data.negativeSunat}
      />
      <Omission
        i18n={i18n}
        data={data.omission}
      />
      <ProtestBulletin
        i18n={i18n}
        data={data.protestBulletin}
      />
      <VoidedCards
        i18n={i18n}
        data={data.voidedCards}
      />
      <CanceledAccounts
        i18n={i18n}
        data={data.canceledAccounts}
      />
    </Fragment>
  )
}

export { OtherUnpaisDebts }
