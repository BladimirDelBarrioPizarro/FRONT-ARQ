import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ExternalFinancingPOA } from '../../components/molecules/ExternalFinancingPOA/ExternalFinancingPOA'
import i18nObj from '../i18n.json'
import { dataExternalFinancingPOAFaker } from '../../mocks/'

const ExternalFinancingPOAStory: React.FC = () => {
  return (
    <ExternalFinancingPOA
      i18n={i18nObj}
      data={dataExternalFinancingPOAFaker}
    />)
}

export { ExternalFinancingPOAStory }

storiesOf('Components|Molecules.ExternalFinancingPOA', module)
  .addDecorator(withThemeProvider)
  .add('ExternalFinancingPOA', () => <ExternalFinancingPOAStory />)
