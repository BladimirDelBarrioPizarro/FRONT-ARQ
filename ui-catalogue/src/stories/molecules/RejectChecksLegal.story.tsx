import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { RejectChecksLegal } from '../../components/molecules/RejectChecksLegal/RejectChecksLegal'
import i18nObj from '../i18n.json'
import { dataRejectChecksLegalFaker } from '../../mocks/RejectChecksLegalMock'

const RejectChecksLegalStory: React.FC = () => {
  return (
    <RejectChecksLegal
      i18n={i18nObj}
      data={dataRejectChecksLegalFaker}
    />)
}

export { RejectChecksLegalStory }

storiesOf('Components|Molecules.RejectChecksLegal', module)
  .addDecorator(withThemeProvider)
  .add('RejectChecksLegal', () => <RejectChecksLegalStory />)
