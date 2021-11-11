import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BureauCredit } from '../../components/molecules/BureauCredit/BureauCredit'
import i18nObj from '../i18n.json'
import { dataBureauCreditFaker } from '../../mocks/BureauCreditMock'

const BureauCreditStory: React.FC = () => {
  return (
    <BureauCredit
      i18n={i18nObj}
      data={dataBureauCreditFaker}
    />)
}

export { BureauCreditStory }

storiesOf('Components|Molecules.BureauCredit', module)
  .addDecorator(withThemeProvider)
  .add('BureauCredit', () => <BureauCreditStory />)
