import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { PaydexHistoric } from '../../components/molecules/PaydexHistoric/PaydexHistoric'
import i18nObj from '../i18n.json'
import { dataPaydexHistoricFaker } from '../../mocks/'

const PaydexHistoricStory: React.FC = () => {
  return (
    <PaydexHistoric
      i18n={i18nObj}
      data={dataPaydexHistoricFaker}
    />)
}

export { PaydexHistoricStory }

storiesOf('Components|Molecules.PaydexHistoricStory', module)
  .addDecorator(withThemeProvider)
  .add('PaydexHistoricStory', () => <PaydexHistoricStory />)
