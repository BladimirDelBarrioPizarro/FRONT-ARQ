import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DirectorySunat } from '../../components/molecules/DirectorySunat/DirectorySunat'
import { dataDirectorySunatFaker } from '../../mocks'
import i18nObj from '../i18n.json'

const DirectorySunatStory: React.FC = () => {
  return (
    <DirectorySunat
      i18n={i18nObj}
      data={dataDirectorySunatFaker}
    />)
}

export { DirectorySunatStory }

storiesOf('Components|Molecules.DirectorySunat', module)
  .addDecorator(withThemeProvider)
  .add('DirectorySunat', () => <DirectorySunatStory />)
