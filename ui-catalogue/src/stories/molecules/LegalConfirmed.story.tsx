import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { LegalConfirmed } from '../../components/molecules/LegalConfirmed/LegalConfirmed'
import i18nObj from '../i18n.json'
import { dataLegalConfirmedFaker } from '../../mocks/'

const LegalConfirmedStory: React.FC = () => {
  return (
    <LegalConfirmed
      i18n={i18nObj}
      data={dataLegalConfirmedFaker}
    />)
}

export { LegalConfirmedStory }

storiesOf('Components|Molecules.LegalConfirmed', module)
  .addDecorator(withThemeProvider)
  .add('LegalConfirmed', () => <LegalConfirmedStory />)
