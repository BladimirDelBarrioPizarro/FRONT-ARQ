import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BalancesNPGC } from '../../components/organisms/BalancesNPGC/BalancesNPGC'
import i18nObj from '../i18n.json'
import {
  detailPetitionDataFaker,
  detailBalancesNPGCEmpty,
  origenBalancesRows
} from '../../mocks'

const BalancesNPGCStoryEmptyTables: React.FC = () => {
  const handleRefresh = (): void => alert('cancel')

  return <BalancesNPGC
    i18n={i18nObj}
    data={detailBalancesNPGCEmpty}
    origenBalances={origenBalancesRows()}
    handleRefresh={handleRefresh}
  />
}

const BalancesNPGCStoryTablesWithData: React.FC = () => {
  const handleRefresh = (): void => alert('cancel')

  return <BalancesNPGC
    i18n={i18nObj}
    data={detailPetitionDataFaker}
    origenBalances={origenBalancesRows()}
    handleRefresh={handleRefresh}
  />
}

export { BalancesNPGCStoryEmptyTables, BalancesNPGCStoryTablesWithData }

storiesOf('Components|Organisms.BalancesNPGC', module)
  .addDecorator(withThemeProvider)
  .add('Empty tables', () => <BalancesNPGCStoryEmptyTables />)
  .add('Tables with data', () => <BalancesNPGCStoryTablesWithData />)
