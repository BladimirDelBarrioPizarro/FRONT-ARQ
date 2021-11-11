import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { SpecificItemsBadexcug } from '../../components/molecules/SpecificItemsBadexcug/SpecificItemsBadexcug'
import i18nObj from '../i18n.json'
import { dataSpecificItemsFaker } from '../../mocks'

const SpecificItemsBadexcugStory: React.FC = () => {
  return (
    <SpecificItemsBadexcug
      i18n={i18nObj}
      data={dataSpecificItemsFaker}
    />)
}

export { SpecificItemsBadexcugStory }

storiesOf('Components|Molecules.SpecificItems', module)
  .addDecorator(withThemeProvider)
  .add('SpecificItems BADEXCUG', () => <SpecificItemsBadexcugStory />)
