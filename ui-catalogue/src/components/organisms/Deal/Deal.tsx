import React, { Fragment } from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { IDeal } from './types'
import { Cnae } from '../../molecules/Cnaes/Cnaes'
import { DealForm } from '../../molecules/DealForm/DealForm'
import { ImportsExports } from '../../molecules/ImportsExports/ImportsExports'
import { OtherEvents } from '../../molecules/OtherEvents/OtherEvents'
import { ReportTypes } from '../../templates/BaseReport/types'

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
const Deal: React.FC<IDeal> = ({
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
            {i18n['Deal:title']}
          </span>
        </div>
      </div>
      <Cnae
        i18n={i18n}
        data={data.cnae}
      />
      <DealForm
        i18n={i18n}
        data={data.dealForm}
      />
      <ImportsExports
        i18n={i18n}
        data={data.importsExports}
      />
      { report !== ReportTypes.EUDBP_IT
        ? <OtherEvents
          i18n={i18n}
          data={data.otherEvents}
        />
        : <>
        </>
      }

    </Fragment>
  )
}

export { Deal }
