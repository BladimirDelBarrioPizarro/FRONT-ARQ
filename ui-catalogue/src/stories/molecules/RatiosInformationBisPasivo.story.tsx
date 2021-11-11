import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RatiosInformationBisPasivo } from '../../components/molecules/RatiosInformationBis/RatiosInformationBisPasivo'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const RatiosInformationBisPasivoEmptyStory: React.FC = () => {
  return (
    <RatiosInformationBisPasivo
      i18n={i18nObj}
      data={dataBalanceEmpty.ratiosInformacionBis}
    />)
}

export { RatiosInformationBisPasivoEmptyStory }

const RatiosInformationBisPasivoStory: React.FC = () => {
  return (
    <RatiosInformationBisPasivo
      i18n={i18nObj}
      data={dataBalanceFaker.ratiosInformacionBis}
    />)
}

export { RatiosInformationBisPasivoStory }

storiesOf('Components|Molecules.RatiosInformationBisPasivo', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <RatiosInformationBisPasivoEmptyStory />)
  .add('Faker', () => <RatiosInformationBisPasivoStory />)
