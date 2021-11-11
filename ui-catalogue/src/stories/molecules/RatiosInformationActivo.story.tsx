import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RatiosInformationActivo } from '../../components/molecules/RatiosInformation/RatiosInformationActivo'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const RatiosInformationActivoEmptyStory: React.FC = () => {
  return (
    <RatiosInformationActivo
      i18n={i18nObj}
      data={dataBalanceEmpty.ratiosInformacion}
    />)
}

export { RatiosInformationActivoEmptyStory }

const RatiosInformationActivoStory: React.FC = () => {
  return (
    <RatiosInformationActivo
      i18n={i18nObj}
      data={dataBalanceFaker.ratiosInformacion}
    />)
}

export { RatiosInformationActivoStory }

storiesOf('Components|Molecules.RatiosInformationActivo', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <RatiosInformationActivoEmptyStory />)
  .add('Faker', () => <RatiosInformationActivoStory />)
