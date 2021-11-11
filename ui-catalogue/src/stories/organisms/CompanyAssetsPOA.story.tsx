import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CompanyAssetsPOA } from '../../components/organisms/CompanyAssetsPOA/CompanyAssetsPOA'
import {
  dataCompanyAssetsFaker,
  dataExternalFinancingPOAFaker,
  datosSummaryExternalFinancingFaker,
  dataAJTSPOAFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const CompanyAssetsPOAStory: React.FC = () => {
  const dataFaker = {
    companyAssetsPOAForm: dataCompanyAssetsFaker,
    externalFinancingPOA: dataExternalFinancingPOAFaker,
    summaryExternalFinancing: datosSummaryExternalFinancingFaker,
    ajtspoa: dataAJTSPOAFaker
  }
  return <CompanyAssetsPOA
    i18n={i18nObj}
    data={dataFaker}
  />
}

export { CompanyAssetsPOAStory }

storiesOf('Components|Organisms.CompanyAssetsPOA', module)
  .addDecorator(withThemeProvider)
  .add('CompanyAssetsPOA', () => <CompanyAssetsPOAStory />)
