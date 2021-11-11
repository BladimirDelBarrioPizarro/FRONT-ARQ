import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { CuentasResultados } from '../../components/molecules/CuentasResultados/CuentasResultados'
import i18nObj from '../i18n.json'
import {
  dataBalanceFaker,
  dataBalanceEmpty
} from '../../mocks'

const CuentasResultadosEmptyStory: React.FC = () => {
  return (
    <CuentasResultados
      i18n={i18nObj}
      data={dataBalanceEmpty.cuentasResultado}
    />)
}

export { CuentasResultadosEmptyStory }

const CuentasResultadosStory: React.FC = () => {
  return (
    <CuentasResultados
      i18n={i18nObj}
      data={dataBalanceFaker.cuentasResultado}
    />)
}

export { CuentasResultadosStory }

storiesOf('Components|Molecules.CuentasResultados', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <CuentasResultadosEmptyStory />)
  .add('Faker', () => <CuentasResultadosStory />)
