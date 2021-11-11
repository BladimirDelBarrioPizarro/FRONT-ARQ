import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BalanceInformation } from '../../components/organisms/BalanceInformation/BalanceInformation'
import {
  dataBalanceFaker
} from '../../mocks'
import i18nObj from '../i18n.json'
import { ReportTypes } from '../../components/templates/BaseReport/types'

const BalanceInformationStory: React.FC = () => {
  return <BalanceInformation
    i18n= {i18nObj}
    data={dataBalanceFaker}
    report={ReportTypes.Standard}
  />
}

export { BalanceInformationStory }

storiesOf('Components|Organisms.BalanceInformation', module)
  .addDecorator(withThemeProvider)
  .add('Balance Information', () => <BalanceInformationStory />)
