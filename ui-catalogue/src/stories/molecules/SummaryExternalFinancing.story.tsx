import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { SummaryExternalFinancing } from '../../components/molecules/SummaryExternalFinancing/SummaryExternalFinancing'
import i18nObj from '../i18n.json'
import { datosSummaryExternalFinancingFaker } from '../../mocks/'

const SummaryExternalFinancingStory: React.FC = () => {
  return (
    <SummaryExternalFinancing
      i18n={i18nObj}
      data={datosSummaryExternalFinancingFaker}
    />)
}

export { SummaryExternalFinancingStory }

storiesOf('Components|Molecules.SummaryExternalFinancing', module)
  .addDecorator(withThemeProvider)
  .add('SummaryExternalFinancing', () => <SummaryExternalFinancingStory />)
