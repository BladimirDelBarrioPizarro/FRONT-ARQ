import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TaxCodes } from '../../components/molecules/TaxCodes/TaxCodes'
import i18nObj from '../i18n.json'
import { dataTaxCodesFaker } from '../../mocks'

const GeneralStory: React.FC = () => {
  return (
    <TaxCodes
      i18n={i18nObj}
      data={dataTaxCodesFaker}
    />)
}

export { GeneralStory }

storiesOf('Components|Molecules.TaxCodes', module)
  .addDecorator(withThemeProvider)
  .add('Tax Codes', () => <GeneralStory />)
