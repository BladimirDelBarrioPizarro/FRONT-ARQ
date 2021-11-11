import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Summary } from '../../components/molecules/Summary/Summary'
import i18nObj from '../i18n.json'
import { dataSummaryFaker } from '../../mo../../mocks'

const SummaryStory: React.FC = () => {
  return (
    <Summary
      i18n={i18nObj}
      data={dataSummaryFaker}
    />)
}

export { SummaryStory }

storiesOf('Components|Molecules.Summary', module)
  .addDecorator(withThemeProvider)
  .add('Summary', () => <SummaryStory />)
