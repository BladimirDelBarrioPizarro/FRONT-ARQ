import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { OperationCodeBadexcug } from '../../components/molecules/OperationCodeBadexcug/OperationCodeBadexcug'
import i18nObj from '../i18n.json'
import { dataOperationCodeBadexcugFaker } from '../../mocks'

const OperationCodeBadexcugStory: React.FC = () => {
  return (
    <OperationCodeBadexcug
      i18n={i18nObj}
      data={dataOperationCodeBadexcugFaker}
    />)
}

export { OperationCodeBadexcugStory }

storiesOf('Components|Molecules.OperationCode', module)
  .addDecorator(withThemeProvider)
  .add('OperationCode BADEXCUG', () => <OperationCodeBadexcugStory />)
