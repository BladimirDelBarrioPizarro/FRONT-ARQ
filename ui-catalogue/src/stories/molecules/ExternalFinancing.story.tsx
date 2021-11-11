import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ExternalFinancing } from '../../components/molecules/ExternalFinancing/ExternalFinancing'
import i18nObj from '../i18n.json'
import { dataExternalFinancingFaker } from '../../mocks/'

const ExternalFinancingStory: React.FC = () => {
  return (
    <ExternalFinancing
      i18n={i18nObj}
      data={dataExternalFinancingFaker}
    />)
}

export { ExternalFinancingStory }

storiesOf('Components|Molecules.ExternalFinancing', module)
  .addDecorator(withThemeProvider)
  .add('ExternalFinancing', () => <ExternalFinancingStory />)
