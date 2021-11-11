import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Communications } from '../../components/molecules/Communications/Communications'
import i18nObj from '../i18n.json'
import { dataCommunicationsFaker } from '../../mocks/'

const CommunicationsStory: React.FC = () => {
  return (
    <Communications
      i18n={i18nObj}
      data={dataCommunicationsFaker}
    />)
}

export { CommunicationsStory }

storiesOf('Components|Molecules.Communications', module)
  .addDecorator(withThemeProvider)
  .add('Communications', () => <CommunicationsStory />)
