import React, { Fragment } from 'react'
import { IRelationsShip } from './types'
import {
  makeStyles
} from '@material-ui/core'
import { ShareHolders } from '../../molecules/ShareHolders/ShareHolders'
import { Administrators } from '../../molecules/Administrators/Administrators'
import { SubsidiaryAffiliates } from '../../molecules/SubsidiaryAffiliates/SubsidiaryAffiliates'
import { BranchOffices } from '../../molecules/BranchOffices/BranchOffices'
import { Banks } from '../../molecules/Banks/Banks'
import { ReportTypes } from '../../templates/BaseReport/types'

const useStyles = makeStyles({
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderContainerChild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '0rem'
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
  }
})

const RelationsShip: React.FC<IRelationsShip> = ({
  report,
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['RelationShip:title1']}
          </span>
        </div>
      </div>
      <ShareHolders
        i18n={i18n}
        data={data.shareHolders}
      />
      {report === ReportTypes.EUDBP_IT
        ? <>
          <SubsidiaryAffiliates
            i18n={i18n}
            data={data.subsidiaryAffiliates}
          />
          <BranchOffices
            i18n={i18n}
            data={data.branchOffices}
          />
          <Banks
            i18n={i18n}
            data={data.banks}
          />
        </>
        : <>
        </>
      }

      <Administrators
        i18n={i18n}
        data={data.administrators}
      />
    </Fragment>
  )
}

export { RelationsShip }
