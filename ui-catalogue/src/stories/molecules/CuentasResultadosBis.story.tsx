import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CuentasResultadosBis } from '../../components/molecules/CuentasResultadosBis/CuentasResultadosBis'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const CuentasResultadosBisEmptyStory: React.FC = () => {
  return (
    <CuentasResultadosBis
      i18n={i18nObj}
      data={dataBalanceEmpty.cuentasResultadoBis}
    />)
}

export { CuentasResultadosBisEmptyStory }

const CuentasResultadosBisStory: React.FC = () => {
  return (
    <CuentasResultadosBis
      i18n={i18nObj}
      data={dataBalanceFaker.cuentasResultadoBis}
    />)
}

export { CuentasResultadosBisStory }

storiesOf('Components|Molecules.CuentasResultadosBis', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <CuentasResultadosBisEmptyStory />)
  .add('Faker', () => <CuentasResultadosBisStory />)
