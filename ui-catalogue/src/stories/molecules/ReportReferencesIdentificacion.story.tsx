import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ReportReferencesIdentificacion } from '../../components/molecules/ReportReferencesIdentificacion/ReportReferencesIdentificacion'
import i18nObj from '../i18n.json'

const ReportReferencesIdentificacionStory: React.FC = () => {
  const handleRecepcion = (): void => {}
  const handleAlta = (): void => {}
  const handleCancel = (): void => {}
  const data = {
    denominacion: 'denominacion',
    domicilio: 'domicilio',
    codigoempresa: 'codigoempresa',
    localidad: 'localidad',
    provincia: 'provincia',
    codigopostal: 'codigopostal',
    pais: 'pais',
    referenciafuente: 'referenciafuente',
    vat: 'vat'
  }
  return <ReportReferencesIdentificacion
    handleRecepcion={handleRecepcion}
    handleAlta={handleAlta}
    handleCancel={handleCancel}
    i18n={i18nObj}
    data={data}
  />
}

export { ReportReferencesIdentificacionStory }

storiesOf('Components|Molecules.ReportReferencesIdentificacion', module)
  .addDecorator(withThemeProvider)
  .add('ReportReferencesIdentificacion', () => <ReportReferencesIdentificacionStory/>)
