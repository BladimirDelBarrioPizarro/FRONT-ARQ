import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { IdentificacionEspanaInforma } from '../../components/molecules/IdentificacionEspanaInforma/IdentificacionEspanaInforma'
import i18nObj from '../i18n.json'
import { dataIdentificacionEspanaInformaFaker } from '../../mocks/IdentificacionEspanaInformaMock'

const IdentificacionEspanaInformaStory: React.FC = () => {
  return (
    <IdentificacionEspanaInforma
      i18n={i18nObj}
      data={dataIdentificacionEspanaInformaFaker}
    />)
}

export { IdentificacionEspanaInformaStory }

storiesOf('Components|Molecules.IdentificacionEspanaInformaStory', module)
  .addDecorator(withThemeProvider)
  .add('Identificación España Informa', () => <IdentificacionEspanaInformaStory />)
