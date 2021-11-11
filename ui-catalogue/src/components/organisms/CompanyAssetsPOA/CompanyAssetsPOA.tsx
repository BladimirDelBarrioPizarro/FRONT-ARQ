import React, { Fragment } from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { ICompanyAssetsPOA } from './types'
import { CompanyAssetsPOAForm } from '../../molecules/CompanyAssetsPOAForm/CompanyAssetsPOAForm'
import { ExternalFinancingPOA } from '../../molecules/ExternalFinancingPOA/ExternalFinancingPOA'
import { SummaryExternalFinancing } from '../../molecules/SummaryExternalFinancing/SummaryExternalFinancing'
import { AJTSPOAComponent } from '../../molecules/AJTSPOA/AJSPOA'

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
const CompanyAssetsPOA: React.FC<ICompanyAssetsPOA> = ({
  i18n,
  data
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['CompanyAssetsPOA:title']}
          </span>
        </div>
      </div>
      <CompanyAssetsPOAForm
        i18n={i18n}
        data={data.companyAssetsPOAForm}
      />
      <ExternalFinancingPOA
        i18n={i18n}
        data={data.externalFinancingPOA}
      />
      <SummaryExternalFinancing
        i18n={i18n}
        data={data.summaryExternalFinancing}
      />
      <AJTSPOAComponent
        i18n={i18n}
        data={data.ajtspoa}
      />
    </Fragment>
  )
}

export { CompanyAssetsPOA }
