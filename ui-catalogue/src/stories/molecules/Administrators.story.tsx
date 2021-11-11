import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Administrators } from '../../components/molecules/Administrators/Administrators'
import i18nObj from '../i18n.json'
import { dataAdministratorFaker } from '../../mocks/'

const AdministratorsStory: React.FC = () => {
  return (
    <Administrators
      i18n={i18nObj}
      data={dataAdministratorFaker}
    />)
}

export { AdministratorsStory }

storiesOf('Components|Molecules.Administrators', module)
  .addDecorator(withThemeProvider)
  .add('Administrators', () => <AdministratorsStory />)
