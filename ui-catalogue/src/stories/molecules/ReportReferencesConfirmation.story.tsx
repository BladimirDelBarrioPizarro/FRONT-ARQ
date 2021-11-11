import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ReportReferencesConfirmation } from '../../components/molecules/ReportReferencesConfirmation/Confirmation'
import i18nObj from '../i18n.json'

const ReportReferencesConfirmationStory: React.FC = () => {
  const data = {
    codDeudor: 'codDeudor',
    codCorrespondent: 'codCorrespondents',
    typeDocument: 'typeDocument',
    typeExpensive: 'typeExpensive',
    product: 'product',
    dateReception: '11/02/2021'
  }

  const handleAccept = (): void => {}
  const handleCancel = (): void => {}

  const handleBack = (): void => {}
  const elementBackProps = {
    label: 'TEST',
    size: 'm',
    handleBack: handleBack
  }

  return <ReportReferencesConfirmation
    i18n={i18nObj}
    data={data}
    handleAccept={handleAccept}
    handleCancel={handleCancel}
    elementBackProps={elementBackProps}
  />
}

export { ReportReferencesConfirmationStory }

storiesOf('Components|Molecules.ReportReferencesConfirmation', module)
  .addDecorator(withThemeProvider)
  .add('ReportReferencesConfirmation', () => <ReportReferencesConfirmationStory/>)
