import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { LegalProcedures } from '../../components/molecules/LegalProcedures/LegalProcedures'
import i18nObj from '../i18n.json'
import { dataLegalProceduresFaker, dataLegalConfirmedFaker } from '../../mocks'

const LegalProceduresStory: React.FC = () => {
  const dataFaker = {
    legalProcedures: dataLegalProceduresFaker,
    legalConfirmed: dataLegalConfirmedFaker
  }

  return (
    <LegalProcedures
      i18n={i18nObj}
      data={dataFaker}
    />)
}

export { LegalProceduresStory }

storiesOf('Components|Molecules.LegalProcedures', module)
  .addDecorator(withThemeProvider)
  .add('LegalProcedures', () => <LegalProceduresStory />)
