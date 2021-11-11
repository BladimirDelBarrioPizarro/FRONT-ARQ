import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RatiosInformationBisActivo } from '../../components/molecules/RatiosInformationBis/RatiosInformationBisActivo'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const RatiosInformationBisActivoEmptyStory: React.FC = () => {
  return (
    <RatiosInformationBisActivo
      i18n={i18nObj}
      data={dataBalanceEmpty.ratiosInformacionBis}
    />)
}

export { RatiosInformationBisActivoEmptyStory }

const RatiosInformationBisActivoStory: React.FC = () => {
  return (
    <RatiosInformationBisActivo
      i18n={i18nObj}
      data={dataBalanceFaker.ratiosInformacionBis}
    />)
}

export { RatiosInformationBisActivoStory }

storiesOf('Components|Molecules.RatiosInformationBisActivo', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <RatiosInformationBisActivoEmptyStory />)
  .add('Faker', () => <RatiosInformationBisActivoStory />)
