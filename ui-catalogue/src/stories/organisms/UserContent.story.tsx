import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { UserContent } from '../../components/organisms/UserContent/UserContent'
import i18nObj from '../i18n.json'
import { applicationsFaker } from '../../mocks'

const UserContentSelectedStory: React.FC = () => {
  const handleApplication = (): void => { }
  return (
    <UserContent
      i18n={i18nObj}
      applications={applicationsFaker}
      handleApplication= {handleApplication}
    />)
}

export { UserContentSelectedStory }

const UserContentStory: React.FC = () => {
  const handleApplication = (): void => { }
  return (
    <UserContent
      i18n={i18nObj}
      applications={applicationsFaker}
      handleApplication= {handleApplication}
    />)
}

export { UserContentStory }

storiesOf('Components|Organisms.UserContent', module)
  .addDecorator(withThemeProvider)
  .add('UserContent', () => <UserContentStory />)
  .add('UserContent selected', () => <UserContentSelectedStory />)
