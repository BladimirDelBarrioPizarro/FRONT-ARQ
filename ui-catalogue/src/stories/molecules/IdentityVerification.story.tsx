import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { IdentityVerification } from '../../components/molecules/IdentityVerification/IdentityVerification'
import i18nObj from '../i18n.json'
import { dataIdentityVerificationFaker } from '../../mocks/IdentityVerificationMock'

const IdentityVerificationStory: React.FC = () => {
  return (
    <IdentityVerification
      i18n={i18nObj}
      data={dataIdentityVerificationFaker}
    />)
}

export { IdentityVerificationStory }

storiesOf('Components|Molecules.IdentityVerification', module)
  .addDecorator(withThemeProvider)
  .add('IdentityVerification', () => <IdentityVerificationStory />)
