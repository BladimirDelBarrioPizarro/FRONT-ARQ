import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { UserAvatar } from '../../components/organisms/UserAvatar/UserAvatar'
import { userDataFaker } from '../../mocks'

const UserAvatarStory: React.FC = () => {
  const handleSettings = (): void => { }
  const handleNotifications = (): void => { }
  const handleMails = (): void => { }
  return (
    <UserAvatar
      nameUser={userDataFaker.nameUser}
      emailUser={userDataFaker.emailUser}
      avatar={userDataFaker.avatar}
      notifications={userDataFaker.notifications}
      emails={userDataFaker.emails}
      handleSettings= {handleSettings}
      handleNotifications= {handleNotifications}
      handleMails= {handleMails}
    />)
}

export { UserAvatarStory }

storiesOf('Components|Organisms.UserAvatar', module)
  .addDecorator(withThemeProvider)
  .add('UserAvatar', () => <UserAvatarStory />)
