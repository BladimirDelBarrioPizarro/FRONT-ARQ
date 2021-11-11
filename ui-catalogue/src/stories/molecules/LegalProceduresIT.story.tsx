import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { LegalProceduresIT } from '../../components/molecules/LegalProceduresIT/LegalProceduresIT'
import i18nObj from '../i18n.json'
import { dataLegalProceduresITFormFaker } from '../../mocks/'

const LegalProceduresITStory: React.FC = () => {
  return (
    <LegalProceduresIT
      i18n={i18nObj}
      data={dataLegalProceduresITFormFaker}
    />)
}

export { LegalProceduresITStory }

storiesOf('Components|Molecules.LegalProceduresIT', module)
  .addDecorator(withThemeProvider)
  .add('LegalProceduresIT', () => <LegalProceduresITStory />)
