import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Capital } from '../../components/molecules/Capital/Capital'
import i18nObj from '../i18n.json'
import { dataCapitalFaker } from '../../mocks/'

const CapitalStory: React.FC = () => {
  return (
    <Capital
      i18n={i18nObj}
      data={dataCapitalFaker}
    />)
}

export { CapitalStory }

storiesOf('Components|Molecules.Capital', module)
  .addDecorator(withThemeProvider)
  .add('Capital', () => <CapitalStory />)
