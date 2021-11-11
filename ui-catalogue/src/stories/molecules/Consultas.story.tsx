import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { Consultas } from '../../components/molecules/Consultas/Consultas'
import { dataConsultasFaker } from '../../mocks/ConsultasMock'
import i18nObj from '../i18n.json'

const ConsultasStory: React.FC = () => {
  return <Consultas
    i18n={i18nObj}
    data={dataConsultasFaker}
  />
}

export { ConsultasStory }

storiesOf('Components|Molecules.Consultas', module)
  .addDecorator(withThemeProvider)
  .add('Consultas', () => <ConsultasStory />)
