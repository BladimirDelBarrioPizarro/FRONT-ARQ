import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { SummaryPayments } from '../../components/molecules/SummaryPayments/SummaryPayments'
import i18nObj from '../i18n.json'
import { dataSummaryPaymentsFaker } from '../../mocks/'

const SummaryPaymentsStory: React.FC = () => {
  return (
    <SummaryPayments
      i18n={i18nObj}
      data={dataSummaryPaymentsFaker}
    />)
}

export { SummaryPaymentsStory }

storiesOf('Components|Molecules.SummaryPayments', module)
  .addDecorator(withThemeProvider)
  .add('SummaryPayments', () => <SummaryPaymentsStory />)
