import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CreditResponsability } from '../../components/molecules/CreditResponsability/CreditResponsability'
import {
  creditResponsabilityDataEmpty,
  creditResponsabilityDataFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const CreditResponsabilityStory: React.FC = () => {
  return <CreditResponsability
    i18n={i18nObj}
    data={creditResponsabilityDataEmpty}
  />
}

export { CreditResponsabilityStory }

const CreditResponsabilityEmptyStory: React.FC = () => {
  return <CreditResponsability
    i18n={i18nObj}
    data={creditResponsabilityDataFaker}
  />
}

export { CreditResponsabilityEmptyStory }

storiesOf('Components|Molecules.CreditResponsability', module)
  .addDecorator(withThemeProvider)
  .add('CreditResponsability Faker', () => <CreditResponsabilityStory />)
  .add('CreditResponsability Empty', () => <CreditResponsabilityEmptyStory />)
