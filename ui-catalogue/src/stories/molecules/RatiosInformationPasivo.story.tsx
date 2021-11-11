import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RatiosInformationPasivo } from '../../components/molecules/RatiosInformation/RatiosInformationPasivo'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const RatiosInformationPasivoEmptyStory: React.FC = () => {
  return (
    <RatiosInformationPasivo
      i18n={i18nObj}
      data={dataBalanceEmpty.ratiosInformacion}
    />)
}

export { RatiosInformationPasivoEmptyStory }

const RatiosInformationPasivoStory: React.FC = () => {
  return (
    <RatiosInformationPasivo
      i18n={i18nObj}
      data={dataBalanceFaker.ratiosInformacion}
    />)
}

export { RatiosInformationPasivoStory }

storiesOf('Components|Molecules.RatiosInformationPasivo', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <RatiosInformationPasivoEmptyStory />)
  .add('Faker', () => <RatiosInformationPasivoStory />)
