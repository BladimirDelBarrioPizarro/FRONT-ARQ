import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ManualReception } from '../../components/molecules/ManualReception/ManualReception'
import i18nObj from '../i18n.json'
import { dataManualReceptionFaker } from '../../mocks/'

const ManualReceptionStory: React.FC = () => {
  const tipoRespuesta = [{
    value: 'value label1',
    label: 'label 1'
  }]
  const producto = [{
    value: 'value label2',
    label: 'label 2'
  }]
  const medioRecepcion = [{
    value: 'value label 3',
    label: 'label'
  }]

  const handleBack = (): void => {}
  const handleAlta = (): void => {}
  const handleAccept = (): void => {}
  const handleCancel = (): void => {}
  return (
    <ManualReception
      i18n={i18nObj}
      data={dataManualReceptionFaker}
      tipoRespuesta={tipoRespuesta}
      producto={producto}
      medioRecepcion={medioRecepcion}
      handleBack={handleBack}
      handleAlta={handleAlta}
      handleAccept={handleAccept}
      handleCancel={handleCancel}
    />)
}

export { ManualReceptionStory }

storiesOf('Components|Molecules.ManualReception', module)
  .addDecorator(withThemeProvider)
  .add('ManualReception', () => <ManualReceptionStory />)
