import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { AggregateSummary } from '../../components/molecules/AggregateSummary/AggregateSummary'
import {
  aggregateSummaryDataEmpty,
  aggregateSummaryDataFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const AggregateSummaryStory: React.FC = () => {
  return <AggregateSummary
    i18n={i18nObj}
    data={aggregateSummaryDataEmpty}
  />
}

export { AggregateSummaryStory }

const AggregateSummaryEmptyStory: React.FC = () => {
  return <AggregateSummary
    i18n={i18nObj}
    data={aggregateSummaryDataFaker}
  />
}

export { AggregateSummaryEmptyStory }

storiesOf('Components|Molecules.AggregateSummary', module)
  .addDecorator(withThemeProvider)
  .add('AggregateSummary Faker', () => <AggregateSummaryStory />)
  .add('AggregateSummary Empty', () => <AggregateSummaryEmptyStory />)
