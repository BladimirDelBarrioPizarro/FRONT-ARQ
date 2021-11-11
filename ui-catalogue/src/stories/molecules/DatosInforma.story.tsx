import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DatosInforma } from '../../components/molecules/DatosInforma/DatosInforma'
import { dataDatosInformaFaker } from '../../mocks/DatosInformaMock'
import i18nObj from '../i18n.json'

const DatosInformaStory: React.FC = () => {
  return <DatosInforma
    i18n={i18nObj}
    data={dataDatosInformaFaker}
  />
}

export { DatosInformaStory }
storiesOf('Components|Molecules.DatosInforma', module)
  .addDecorator(withThemeProvider)
  .add('Datos Informa', () => <DatosInformaStory />)
