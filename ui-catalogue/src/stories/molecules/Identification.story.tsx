import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Identification } from '../../components/molecules/Identification/Identification'
import i18nObj from '../i18n.json'
import { dataIdentificationFaker } from '../../mocks'

const IdentificationStory: React.FC = () => {
  return (
    <Identification
      i18n={i18nObj}
      data={dataIdentificationFaker}
    />)
}

export { IdentificationStory }

storiesOf('Components|Molecules.Identification', module)
  .addDecorator(withThemeProvider)
  .add('Identification', () => <IdentificationStory />)
