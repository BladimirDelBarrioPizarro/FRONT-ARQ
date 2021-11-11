import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import {
  paymentsLegalProcessEmpty,
  paymentsLegalProcessFaker
} from '../../mocks'
import i18nObj from '../i18n.json'
import { PaymentsLegalProcess } from '../../components/molecules/PaymentsLegalProcess/PaymentsLegalProcess'

const PaymentsLegalProcessStory: React.FC = () => {
  return <PaymentsLegalProcess
    i18n={i18nObj}
    data={paymentsLegalProcessFaker}
  />
}

export { PaymentsLegalProcessStory }

const PaymentsLegalProcessEmptyStory: React.FC = () => {
  return <PaymentsLegalProcess
    i18n={i18nObj}
    data={paymentsLegalProcessEmpty}
  />
}

export { PaymentsLegalProcessEmptyStory }

storiesOf('Components|Molecules.PaymentsLegalProcess', module)
  .addDecorator(withThemeProvider)
  .add('PaymentsLegalProcess Faker', () => <PaymentsLegalProcessStory />)
  .add('PaymentsLegalProcess Empty', () => <PaymentsLegalProcessEmptyStory />)
