import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BankData } from '../../components/molecules/BankData/BankData'
import i18nObj from '../i18n.json'
import {
  bankDataEmpty,
  bankDataFaker
} from '../../mocks'

const BankDataStoryEmpty: React.FC = () => {
  return (
    <BankData
      i18n={i18nObj}
      data={bankDataEmpty}
    />)
}

export { BankDataStoryEmpty }

const BankDataStoryFaker: React.FC = () => {
  return (
    <BankData
      i18n={i18nObj}
      data={bankDataFaker}
    />)
}

export { BankDataStoryFaker }

storiesOf('Components|Molecules.BankData', module)
  .addDecorator(withThemeProvider)
  .add('BankData Empty', () => <BankDataStoryEmpty />)
  .add('BankData Faker', () => <BankDataStoryFaker />)
