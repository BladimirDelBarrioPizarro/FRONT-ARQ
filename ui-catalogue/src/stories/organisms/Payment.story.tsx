import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Payments } from '../../components/organisms/Payments/Payments'
import {
  dataPaymentFormFaker,
  dataPaydexHistoricFaker,
  dataPaydexSectorialFaker,
  dataSummaryPaymentsFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const PaymentsStory: React.FC = () => {
  const dataFaker = {
    paymentForm: dataPaymentFormFaker,
    paydexHistoric: dataPaydexHistoricFaker,
    paydexSectorial: dataPaydexSectorialFaker,
    summaryPayments: dataSummaryPaymentsFaker
  }

  return <Payments
    i18n={i18nObj}
    data={dataFaker}
  />
}

export { PaymentsStory }

storiesOf('Components|Organisms.Payments', module)
  .addDecorator(withThemeProvider)
  .add('Payments', () => <PaymentsStory />)
