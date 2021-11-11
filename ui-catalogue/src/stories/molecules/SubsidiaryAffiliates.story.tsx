import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { SubsidiaryAffiliates } from '../../components/molecules/SubsidiaryAffiliates/SubsidiaryAffiliates'
import i18nObj from '../i18n.json'
import { dataSubsidiaryAffiliatesFaker } from '../../mocks/'

const SubsidiaryAffiliatesStory: React.FC = () => {
  return (
    <SubsidiaryAffiliates
      i18n={i18nObj}
      data={dataSubsidiaryAffiliatesFaker}
    />)
}

export { SubsidiaryAffiliatesStory }

storiesOf('Components|Molecules.SubsidiaryAffiliates', module)
  .addDecorator(withThemeProvider)
  .add('SubsidiaryAffiliates', () => <SubsidiaryAffiliatesStory />)
