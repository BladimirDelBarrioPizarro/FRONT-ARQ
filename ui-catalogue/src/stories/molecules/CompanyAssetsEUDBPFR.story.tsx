import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CompanyAssetsEUDBPFR } from '../../components/molecules/CompanyAssetsEUDBPFR/CompanyAssetsEUDBPFR'
import i18nObj from '../i18n.json'
import { dataCompanyAssetsEUDBFRFaker } from '../../mocks/CompanyAssetsEUDBFRMock'

const CompanyAssetsEUDBPFRStory: React.FC = () => {
  return (
    <CompanyAssetsEUDBPFR
      i18n={i18nObj}
      data={dataCompanyAssetsEUDBFRFaker}
    />)
}

export { CompanyAssetsEUDBPFRStory }

storiesOf('Components|Molecules.CompanyAssetsEUDBPFR', module)
  .addDecorator(withThemeProvider)
  .add('CompanyAssetsEUDBPFR', () => <CompanyAssetsEUDBPFRStory />)
