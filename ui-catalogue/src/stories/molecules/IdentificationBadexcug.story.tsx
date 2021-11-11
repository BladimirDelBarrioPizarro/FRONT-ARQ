import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { IdentificationBadexcug } from '../../components/molecules/IdentificationBadexcug/IdentificationBadexcug'
import i18nObj from '../i18n.json'
import { dataIdentificationFaker } from '../../mocks'

const IdentificationBadexcugStory: React.FC = () => {
  return (
    <IdentificationBadexcug
      i18n={i18nObj}
      data={dataIdentificationFaker}
    />)
}

export { IdentificationBadexcugStory }

storiesOf('Components|Molecules.IdentificationBadexcug', module)
  .addDecorator(withThemeProvider)
  .add('IdentificationBadexcug', () => <IdentificationBadexcugStory />)
