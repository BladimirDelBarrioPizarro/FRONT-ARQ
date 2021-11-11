import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { JudicialSourcesAlerts } from '../../components/molecules/JudicialSourcesAlerts/JudicialSourcesAlerts'
import i18nObj from '../i18n.json'
import { dataJudicialSourcesAlertsFaker } from '../../mocks/JudicialSourcesAlertsMock'

const JudicialSourcesAlertsStory: React.FC = () => {
  return (
    <JudicialSourcesAlerts
      i18n={i18nObj}
      data={dataJudicialSourcesAlertsFaker}
    />)
}

export { JudicialSourcesAlertsStory }

storiesOf('Components|Molecules.JudicialSourcesAlerts', module)
  .addDecorator(withThemeProvider)
  .add('JudicialSourcesAlerts', () => <JudicialSourcesAlertsStory />)
