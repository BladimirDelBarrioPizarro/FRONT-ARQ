import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { NonPaymentBadexcug } from '../../components/molecules/NonPaymentBadexcug/NonPaymentBadexcug'
import i18nObj from '../i18n.json'
import { dataNonPaymentBadexcugFaker } from '../../mocks'

const NonPaymentBadexcugStory: React.FC = () => {
  return (
    <NonPaymentBadexcug
      i18n={i18nObj}
      data={dataNonPaymentBadexcugFaker}
    />)
}

export { NonPaymentBadexcugStory }

storiesOf('Components|Molecules.Non-Payment', module)
  .addDecorator(withThemeProvider)
  .add('Non-Payment BADEXCUG', () => <NonPaymentBadexcugStory />)
