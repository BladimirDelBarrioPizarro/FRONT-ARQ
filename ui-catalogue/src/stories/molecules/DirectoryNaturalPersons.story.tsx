import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DirectoryNaturalPersons } from '../../components/molecules/DirectoryNaturalPersons/DirectoryNaturalPersons'
import { dataDirectoryNaturalPersonsFaker } from '../../mocks'
import i18nObj from '../i18n.json'

const DirectoryNaturalPersonsStory: React.FC = () => {
  return (
    <DirectoryNaturalPersons
      i18n={i18nObj}
      data={dataDirectoryNaturalPersonsFaker}
    />)
}

export { DirectoryNaturalPersonsStory }

storiesOf('Components|Molecules.DirectoryNaturalPersons', module)
  .addDecorator(withThemeProvider)
  .add('DirectoryNaturalPersons', () => <DirectoryNaturalPersonsStory />)
