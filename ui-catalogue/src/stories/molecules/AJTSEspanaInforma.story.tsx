import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { AjtsEspanaInforma } from '../../components/molecules/AJTSEspanaInforma/AJTSEspanaInforma'
import i18nObj from '../i18n.json'
import { dataAJTSEspanaInformaFaker } from '../../mocks/AJTSEspanaInformaMock'

const AJTSEspanaInformaStory: React.FC = () => {
  return (
    <AjtsEspanaInforma
      i18n={i18nObj}
      data={dataAJTSEspanaInformaFaker}
    />)
}

export { AJTSEspanaInformaStory }

storiesOf('Components|Molecules.AJTSEspanaInforma', module)
  .addDecorator(withThemeProvider)
  .add('AJTS Espana Informa', () => <AJTSEspanaInformaStory />)
