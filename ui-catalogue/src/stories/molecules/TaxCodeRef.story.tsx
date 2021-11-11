import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TaxCodesRef } from '../../components/molecules/TaxCodesRef/TaxCodesRef'
import i18nObj from '../i18n.json'
import { dataTaxCodesFaker } from '../../mocks'

const TaxesCodesRefStory: React.FC = () => {
  return (
    <TaxCodesRef
      i18n={i18nObj}
      data={dataTaxCodesFaker}
    />)
}

export { TaxesCodesRefStory }

storiesOf('Components|Molecules.TaxCodes', module)
  .addDecorator(withThemeProvider)
  .add('Tax Codes', () => <TaxesCodesRefStory />)
