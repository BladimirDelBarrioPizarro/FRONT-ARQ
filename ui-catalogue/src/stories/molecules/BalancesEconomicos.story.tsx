import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BalancesEconomicos } from '../../components/molecules/BalancesEconomicos/BalancesEconomicos'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const BalancesEconomicosEmptyStory: React.FC = () => {
  return (
    <BalancesEconomicos
      i18n={i18nObj}
      data={dataBalanceEmpty.balancesEconomicos}
      bis={false}
    />)
}

export { BalancesEconomicosEmptyStory }

const BalancesEconomicosStory: React.FC = () => {
  return (
    <BalancesEconomicos
      i18n={i18nObj}
      data={dataBalanceFaker.balancesEconomicos}
      bis={false}
    />)
}

const BalancesEconomicosBisStory: React.FC = () => {
  return (
    <BalancesEconomicos
      i18n={i18nObj}
      data={dataBalanceFaker.balancesEconomicosBis}
      bis={true}
    />)
}

export { BalancesEconomicosStory }

storiesOf('Components|Molecules.BalancesEconomicos', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <BalancesEconomicosEmptyStory />)
  .add('Faker', () => <BalancesEconomicosStory />)
  .add('Faker', () => <BalancesEconomicosBisStory />)
