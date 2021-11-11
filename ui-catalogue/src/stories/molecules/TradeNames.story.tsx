import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { TradeNames } from '../../components/molecules/TradeNames/TradeNames'
import i18nObj from '../i18n.json'
import { dataTradeNamesFaker } from '../../mocks'

const TradeNamesStory: React.FC = () => {
  return (
    <TradeNames
      i18n={i18nObj}
      data={dataTradeNamesFaker}
    />)
}

export { TradeNamesStory }

storiesOf('Components|Molecules.TradeNames', module)
  .addDecorator(withThemeProvider)
  .add('TradeNames', () => <TradeNamesStory />)
