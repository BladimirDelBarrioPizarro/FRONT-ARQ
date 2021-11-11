import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { BasicDataBadexcug } from '../../components/molecules/BasicDataBadexcug/BasicDataBadexcug'
import i18nObj from '../i18n.json'
import { dataBasicDataFaker } from '../../mocks'

const BasicDataBadexcugStory: React.FC = () => {
  return (
    <BasicDataBadexcug
      i18n={i18nObj}
      data={dataBasicDataFaker}
    />)
}

export { BasicDataBadexcugStory }

storiesOf('Components|Molecules.BasicData', module)
  .addDecorator(withThemeProvider)
  .add('BasicData BADEXCUG', () => <BasicDataBadexcugStory />)
