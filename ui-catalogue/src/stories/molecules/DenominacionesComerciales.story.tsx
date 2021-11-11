import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { DenominacionesComerciales } from '../../components/molecules/DenominacionesComerciales/DenominacionesComerciales'
import i18nObj from '../i18n.json'
import { dataDenominacionesComercialesFaker } from '../../mocks'

const DenominacionesComercialesStory: React.FC = () => {
  return (
    <DenominacionesComerciales
      i18n={i18nObj}
      data={dataDenominacionesComercialesFaker}
    />)
}

export { DenominacionesComercialesStory }

storiesOf('Components|Molecules.DenominacionesComerciales', module)
  .addDecorator(withThemeProvider)
  .add('DenominacionesComerciales', () => <DenominacionesComercialesStory />)
