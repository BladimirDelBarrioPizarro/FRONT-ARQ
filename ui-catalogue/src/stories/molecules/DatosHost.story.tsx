import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DatosHost } from '../../components/molecules/DatosHost/DatosHost'
import {
  datosHostDataEmpty,
  datosHostDataFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const DatosHostStory: React.FC = () => {
  return <DatosHost
    i18n={i18nObj}
    data={datosHostDataFaker}
  />
}

const DatosHostEmptyStory: React.FC = () => {
  return <DatosHost
    i18n={i18nObj}
    data={datosHostDataEmpty}
  />
}

export { DatosHostEmptyStory }

storiesOf('Components|Molecules.DatosHost', module)
  .addDecorator(withThemeProvider)
  .add('DatosHost Faker', () => <DatosHostStory />)
  .add('DatosHost Empty', () => <DatosHostEmptyStory />)
