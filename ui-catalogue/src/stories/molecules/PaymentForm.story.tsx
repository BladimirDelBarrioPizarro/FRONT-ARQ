import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { PaymentForm } from '../../components/molecules/PaymentForm/PaymentForm'
import i18nObj from '../i18n.json'
import { dataPaymentFormFaker } from '../../mocks/'

const PaymentFormStory: React.FC = () => {
  return (
    <PaymentForm
      i18n={i18nObj}
      data={dataPaymentFormFaker}
    />)
}

export { PaymentFormStory }

storiesOf('Components|Molecules.PaymentForm', module)
  .addDecorator(withThemeProvider)
  .add('PaymentForm', () => <PaymentFormStory />)
