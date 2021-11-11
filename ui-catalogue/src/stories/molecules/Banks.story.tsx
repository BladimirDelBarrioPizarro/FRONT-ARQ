import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Banks } from '../../components/molecules/Banks/Banks'
import i18nObj from '../i18n.json'
import { dataBankFaker } from '../../mocks/'

const BanksStory: React.FC = () => {
  return (
    <Banks
      i18n={i18nObj}
      data={dataBankFaker}
    />)
}

export { BanksStory }

storiesOf('Components|Molecules.Banks', module)
  .addDecorator(withThemeProvider)
  .add('Banks', () => <BanksStory />)
