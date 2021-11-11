import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { UserMenu } from '../../components/templates/UserMenu/UserMenu'
import i18nObj from '../i18n.json'
import {
  userDataFaker,
  applicationsFaker
} from '../../mocks'
import logo from '../../assets/img/logo-cesce.png'

const UserMenuStory: React.FC = () => {
  return (
    <UserMenu
      i18n={i18nObj}
      userData={userDataFaker}
      applications= {applicationsFaker}
      logo={logo}
    />)
}

export { UserMenuStory }

storiesOf('Components|Templates.UserMenu', module)
  .addDecorator(withThemeProvider)
  .add('UserMenu', () => <UserMenuStory />)
