import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ImportsExports } from '../../components/molecules/ImportsExports/ImportsExports'
import i18nObj from '../i18n.json'
import { dataImportsExportsFaker } from '../../mocks/'

const ImportsExportsStory: React.FC = () => {
  return (
    <ImportsExports
      i18n={i18nObj}
      data={dataImportsExportsFaker}
    />)
}

export { ImportsExportsStory }

storiesOf('Components|Molecules.ImportsExports', module)
  .addDecorator(withThemeProvider)
  .add('ImportsExports', () => <ImportsExportsStory />)
