import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import i18n from '../i18n.json'

import { ReportLatin } from '../../components/templates/ReportLatin/ReportLatin'

const EmptyReportLatin: React.FC = () => {
  const [, handleChangeInputFile] = useState()

  const state = {
    formValues: {
      generalNombre: '',
      generalNit: '',
      generalCalle: '',
      generalProvincia: '',
      generalCp: '',
      generalTelefono: '',
      generalEmail: '',
      generalWeb: '',
      perfilForma: '',
      perfilDivisa: '',
      perfilFecha: '',
      perfilActividad: '',
      perfilEmpleados: '',
      perfilCapital: '',
      perfilCodigo: '',
      comercialActual: '',
      comercialAnterior: '',
      infoDivisa: '',
      infoUnidad: '',
      infoFechaultimo: '',
      infoImporteultimo: '',
      infoPatrimonioultimo: '',
      infoReservasultimo: '',
      infoActivoultimo: '',
      infoResultadoultimo: '',
      infoFechaanterior: '',
      infoImporteanterior: '',
      infoPatrimonioanterior: '',
      infoReservasanterior: '',
      infoActivoanterior: '',
      infoResultadoanterior: '',
      infoOpinion: '',
      infoArchivo: ''
    },
    selectOpts: {
      perfilForma: [],
      perfilDivisa: [],
      infoDivisa: [],
      infoUnidad: [],
      infoOpinion: []
    }
  }
  const formLoading = false
  const formRecoverDataError = false
  const saveSuccess = false
  const saveLoading = false
  const acceptSuccess = false
  const acceptLoading = false
  const handleCancel = (): void => alert('cancel')
  const handleSave = (): void => alert('save')
  const handleAccept = (): void => alert('accept')

  return (
    <ReportLatin
      i18n={i18n}
      formValues={state.formValues}
      selectOpts={state.selectOpts}
      formLoading={formLoading}
      formRecoverDataError={formRecoverDataError}
      saveSuccess={saveSuccess}
      saveLoading={saveLoading}
      acceptSuccess={acceptSuccess}
      acceptLoading={acceptLoading}
      handleCancel={handleCancel}
      handleSave={handleSave}
      handleAccept={handleAccept}
      handleChangeInputFile={handleChangeInputFile}
    />
  )
}

const FilledReportLatin: React.FC = () => {
  const [, handleChangeInputFile] = useState()

  const state = {
    formValues: {
      generalNombre: 'generalNombre',
      generalNit: 'generalNit',
      generalCalle: 'generalCalle',
      generalProvincia: 'generalProvincia',
      generalCp: 'generalCp',
      generalTelefono: 'generalTelefono',
      generalEmail: 'generalEmail',
      generalWeb: 'generalWeb',
      perfilForma: 'perfilForma',
      perfilDivisa: 'perfilDivisa',
      perfilFecha: 'perfilFecha',
      perfilActividad: 'perfilActividad',
      perfilEmpleados: 'perfilEmpleados',
      perfilCapital: 'perfilCapital',
      perfilCodigo: 'perfilCodigo',
      comercialActual: 'comercialActual',
      comercialAnterior: 'comercialAnterior',
      infoDivisa: 'infoDivisa',
      infoUnidad: 'infoUnidad',
      infoFechaultimo: 'infoFechaultimo',
      infoImporteultimo: 'infoImporteultimo',
      infoPatrimonioultimo: 'infoPatrimonioultimo',
      infoReservasultimo: 'infoReservasultimo',
      infoActivoultimo: 'infoActivoultimo',
      infoResultadoultimo: 'infoResultadoultimo',
      infoFechaanterior: 'infoFechaanterior',
      infoImporteanterior: 'infoImporteanterior',
      infoPatrimonioanterior: 'infoPatrimonioanterior',
      infoReservasanterior: 'infoReservasanterior',
      infoActivoanterior: 'infoActivoanterior',
      infoResultadoanterior: 'infoResultadoanterior',
      infoOpinion: 'infoOpinion',
      infoArchivo: 'infoArchivo'
    },
    selectOpts: {
      perfilForma: [
        {
          value: 'value1',
          label: 'label1'
        },
        {
          value: 'value2',
          label: 'label2'
        }
      ],
      perfilDivisa: [
        {
          value: 'value1',
          label: 'label1'
        },
        {
          value: 'value2',
          label: 'label2'
        }
      ],
      infoDivisa: [
        {
          value: 'value1',
          label: 'label1'
        },
        {
          value: 'value2',
          label: 'label2'
        }
      ],
      infoUnidad: [
        {
          value: 'value1',
          label: 'label1'
        },
        {
          value: 'value2',
          label: 'label2'
        }
      ],
      infoOpinion: [
        {
          value: 'value1',
          label: 'label1'
        },
        {
          value: 'value2',
          label: 'label2'
        }
      ]
    }
  }
  const formLoading = false
  const formRecoverDataError = false
  const saveSuccess = false
  const saveLoading = false
  const acceptSuccess = false
  const acceptLoading = false
  const handleCancel = (): void => alert('cancel')
  const handleSave = (): void => alert('save')
  const handleAccept = (): void => alert('accept')

  return (
    <ReportLatin
      i18n={i18n}
      formValues={state.formValues}
      selectOpts={state.selectOpts}
      formLoading={formLoading}
      formRecoverDataError={formRecoverDataError}
      saveSuccess={saveSuccess}
      saveLoading={saveLoading}
      acceptSuccess={acceptSuccess}
      acceptLoading={acceptLoading}
      handleCancel={handleCancel}
      handleSave={handleSave}
      handleAccept={handleAccept}
      handleChangeInputFile={handleChangeInputFile}
    />
  )
}

storiesOf('Components|Templates.ReportLatin', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <EmptyReportLatin />)
  .add('Filled', () => <FilledReportLatin />)
