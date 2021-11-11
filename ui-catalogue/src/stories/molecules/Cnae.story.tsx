import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Cnae } from '../../components/molecules/Cnaes/Cnaes'
import i18nObj from '../i18n.json'
import { dataCnaeFaker } from '../../mocks/'

const CnaeStory: React.FC = () => {
  return (
    <Cnae
      i18n={i18nObj}
      data={dataCnaeFaker}
    />)
}

export { CnaeStory }

storiesOf('Components|Molecules.Cnae', module)
  .addDecorator(withThemeProvider)
  .add('Cnae', () => <CnaeStory />)
