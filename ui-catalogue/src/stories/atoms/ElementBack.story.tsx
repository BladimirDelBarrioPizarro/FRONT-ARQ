import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementBack } from '../../components/atoms/ElementBack/ElementBack'

import i18nObj from '../i18n.json'

const ElementRefreshStory: React.FC = () => {
  const handleBack = (): void => {}
  return (
    <ElementBack
      label={i18nObj['ReportReferencesConfirmation:textIcon']}
      size={'l'}
      handleBack={handleBack}
    />
  )
}

export { ElementRefreshStory }

storiesOf('Components|Atoms.ElementBack', module)
  .addDecorator(withThemeProvider)
  .add('ElementBack', () => <ElementRefreshStory />)
