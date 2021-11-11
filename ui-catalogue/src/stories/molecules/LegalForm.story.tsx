import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { LegalForm } from '../../components/molecules/LegalForm/LegalForm'
import i18nObj from '../i18n.json'
import { dataLegalFormFaker } from '../../mocks/'

const LegalFormStory: React.FC = () => {
  return (
    <LegalForm
      i18n={i18nObj}
      data={dataLegalFormFaker}
    />)
}

export { LegalFormStory }

storiesOf('Components|Molecules.LegalForm', module)
  .addDecorator(withThemeProvider)
  .add('LegalForm', () => <LegalFormStory />)
