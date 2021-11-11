import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CompanyAssets } from '../../components/molecules/CompanyAssets/CompanyAssets'
import i18nObj from '../i18n.json'
import { dataCompanyAssetsFaker } from '../../mocks/'

const CompanyAssetsStory: React.FC = () => {
  return (
    <CompanyAssets
      i18n={i18nObj}
      data={dataCompanyAssetsFaker}
    />)
}

export { CompanyAssetsStory }

storiesOf('Components|Molecules.CompanyAssets', module)
  .addDecorator(withThemeProvider)
  .add('CompanyAssets', () => <CompanyAssetsStory />)
