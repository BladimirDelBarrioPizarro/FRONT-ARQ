import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ProtestsDemandsBadexcug } from '../../components/molecules/ProtestsDemandsBadexcug/ProtestsDemandsBadexcug'
import i18nObj from '../i18n.json'
import { dataProtestsDemandsFaker } from '../../mocks'

const ProtestsDemandsBadexcugStory: React.FC = () => {
  return (
    <ProtestsDemandsBadexcug
      i18n={i18nObj}
      data={dataProtestsDemandsFaker}
    />)
}

export { ProtestsDemandsBadexcugStory }

storiesOf('Components|Molecules.ProtestsDemands', module)
  .addDecorator(withThemeProvider)
  .add('ProtestsDemands BADEXCUG', () => <ProtestsDemandsBadexcugStory />)
