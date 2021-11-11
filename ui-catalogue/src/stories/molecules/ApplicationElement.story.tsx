import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ApplicationElement } from '../../components/molecules/ApplicationElement/ApplicationElement'

const ApplicationElementSelectedStory: React.FC = () => {
  const application = {
    icon: 'icon',
    tittle: 'CESDATA'
  }
  return (
    <ApplicationElement
      application={application}
      selected={true}
    />)
}

export { ApplicationElementSelectedStory }

const ApplicationElementStory: React.FC = () => {
  const application = {
    icon: 'icon',
    tittle: 'CESDATA'
  }
  return (
    <ApplicationElement
      application={application}
      selected={false}
    />)
}

export { ApplicationElementStory }

storiesOf('Components|Molecules.ApplicationElement', module)
  .addDecorator(withThemeProvider)
  .add('ApplicationElement', () => <ApplicationElementStory />)
  .add('ApplicationElement selected', () => <ApplicationElementSelectedStory />)
