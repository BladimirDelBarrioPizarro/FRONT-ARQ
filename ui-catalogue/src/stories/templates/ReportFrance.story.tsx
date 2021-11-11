import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import i18n from '../i18n.json'

import { ReportFrance } from '../../components/templates/ReportFrance/ReportFrance'

const EmptyReportFrance: React.FC = () => {
  const state = {
    formValues: {
      conceptoRegistro: '',
      conceptoNombre: '',
      conceptoDireccion: '',
      conceptoLocalidad: '',
      conceptoProvincia: '',
      conceptoCodigoPostal: '',
      conceptoTelefono: '',
      conceptoFax: '',
      conceptoConfidencialidad: 'true',
      conceptoAlerta: 'true',
      conceptoConsolidado: 'true',
      balanceOrigen: '',
      balanceFechacierre1Dia: '',
      balanceFechacierre1Mes: '',
      balanceFechacierre1Ano: '',
      balanceFechacierre2Dia: '',
      balanceFechacierre2Mes: '',
      balanceFechacierre2Ano: '',
      balanceFechacierre3Dia: '',
      balanceFechacierre3Mes: '',
      balanceFechacierre3Ano: '',
      activo_1_balance1: '',
      activo_1_balance2: '',
      activo_1_balance3: '',
      activo_1_1_balance1: '',
      activo_1_1_balance2: '',
      activo_1_1_balance3: '',
      activo_1_2_balance1: '',
      activo_1_2_balance2: '',
      activo_1_2_balance3: '',
      activo_1_3_balance1: '',
      activo_1_3_balance2: '',
      activo_1_3_balance3: '',
      activo_2_balance1: '',
      activo_2_balance2: '',
      activo_2_balance3: '',
      activo_2_1_balance1: '',
      activo_2_1_balance2: '',
      activo_2_1_balance3: '',
      activo_2_2_balance1: '',
      activo_2_2_balance2: '',
      activo_2_2_balance3: '',
      activo_2_3_balance1: '',
      activo_2_3_balance2: '',
      activo_2_3_balance3: '',
      activo_2_4_balance1: '',
      activo_2_4_balance2: '',
      activo_2_4_balance3: '',
      activo_3_balance1: '',
      activo_3_balance2: '',
      activo_3_balance3: '',
      activo_total_balance1: '',
      activo_total_balance2: '',
      activo_total_balance3: '',

      pasivo_1_1_balance1: '',
      pasivo_1_1_balance2: '',
      pasivo_1_1_balance3: '',
      pasivo_1_2_balance1: '',
      pasivo_1_2_balance2: '',
      pasivo_1_2_balance3: '',
      pasivo_1_3_balance1: '',
      pasivo_1_3_balance2: '',
      pasivo_1_3_balance3: '',
      pasivo_1_4_balance1: '',
      pasivo_1_4_balance2: '',
      pasivo_1_4_balance3: '',
      pasivo_1_5_balance1: '',
      pasivo_1_5_balance2: '',
      pasivo_1_5_balance3: '',
      pasivo_1_balance1: '',
      pasivo_1_balance2: '',
      pasivo_1_balance3: '',
      pasivo_2_balance1: '',
      pasivo_2_balance2: '',
      pasivo_2_balance3: '',
      pasivo_3_balance1: '',
      pasivo_3_balance2: '',
      pasivo_3_balance3: '',
      pasivo_4_1_1_balance1: '',
      pasivo_4_1_1_balance2: '',
      pasivo_4_1_1_balance3: '',
      pasivo_4_1_2_balance1: '',
      pasivo_4_1_2_balance2: '',
      pasivo_4_1_2_balance3: '',
      pasivo_4_1_3_balance1: '',
      pasivo_4_1_3_balance2: '',
      pasivo_4_1_3_balance3: '',
      pasivo_4_1_4_balance1: '',
      pasivo_4_1_4_balance2: '',
      pasivo_4_1_4_balance3: '',
      pasivo_4_1_5_balance1: '',
      pasivo_4_1_5_balance2: '',
      pasivo_4_1_5_balance3: '',
      pasivo_4_1_balance1: '',
      pasivo_4_1_balance2: '',
      pasivo_4_1_balance3: '',
      pasivo_4_2_1_balance1: '',
      pasivo_4_2_1_balance2: '',
      pasivo_4_2_1_balance3: '',
      pasivo_4_2_2_balance1: '',
      pasivo_4_2_2_balance2: '',
      pasivo_4_2_2_balance3: '',
      pasivo_4_2_3_balance1: '',
      pasivo_4_2_3_balance2: '',
      pasivo_4_2_3_balance3: '',
      pasivo_4_2_4_balance1: '',
      pasivo_4_2_4_balance2: '',
      pasivo_4_2_4_balance3: '',
      pasivo_4_2_balance1: '',
      pasivo_4_2_balance2: '',
      pasivo_4_2_balance3: '',
      pasivo_4_balance1: '',
      pasivo_4_balance2: '',
      pasivo_4_balance3: '',
      pasivo_5_balance1: '',
      pasivo_5_balance2: '',
      pasivo_5_balance3: '',
      pasivo_total_balance1: '',
      pasivo_total_balance2: '',
      pasivo_total_balance3: '',
      cuentas_1_balance1: '',
      cuentas_1_balance2: '',
      cuentas_1_balance3: '',
      cuentas_1_ingresos_balance1: '',
      cuentas_1_ingresos_balance2: '',
      cuentas_1_ingresos_balance3: '',
      cuentas_1_prestaciones_balance1: '',
      cuentas_1_prestaciones_balance2: '',
      cuentas_1_prestaciones_balance3: '',
      cuentas_1_ventas_balance1: '',
      cuentas_1_ventas_balance2: '',
      cuentas_1_ventas_balance3: '',
      cuentas_2_balance1: '',
      cuentas_2_balance2: '',
      cuentas_2_balance3: '',
      cuentas_2_gastos_balance1: '',
      cuentas_2_gastos_balance2: '',
      cuentas_2_gastos_balance3: '',
      cuentas_2_ingresos_balance1: '',
      cuentas_2_ingresos_balance2: '',
      cuentas_2_ingresos_balance3: '',
      cuentas_3_balance1: '',
      cuentas_3_balance2: '',
      cuentas_3_balance3: '',
      cuentas_4_balance1: '',
      cuentas_4_balance2: '',
      cuentas_4_balance3: '',
      cuentas_5_balance1: '',
      cuentas_5_balance2: '',
      cuentas_5_balance3: '',
      cuentas_6_balance1: '',
      cuentas_6_balance2: '',
      cuentas_6_balance3: '',
      cuentas_7_balance1: '',
      cuentas_7_balance2: '',
      cuentas_7_balance3: '',
      cuentas_total_balance1: '',
      cuentas_total_balance2: '',
      cuentas_total_balance3: '',
      auditoriaConclusion: '',
      auditoriaComentario: ''
    },
    selectOpts: {
      balanceOrigen: [],
      auditoriaConclusion: []
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
  const validateActivo = (): void => alert('accept')
  const validatePasivo = (): void => alert('accept')
  const validateCuentas = (): void => alert('accept')

  return (
    <ReportFrance
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
      validateActivo={validateActivo}
      validatePasivo={validatePasivo}
      validateCuentas={validateCuentas}
    />
  )
}

const FilledReportFrance: React.FC = () => {
  const state = {
    formValues: {
      conceptoRegistro: 'conceptoRegistro',
      conceptoNombre: 'conceptoNombre',
      conceptoDireccion: 'conceptoDireccion',
      conceptoLocalidad: 'conceptoLocalidad',
      conceptoProvincia: 'conceptoProvincia',
      conceptoCodigoPostal: 'conceptoCodigoPostal',
      conceptoTelefono: 'conceptoTelefono',
      conceptoFax: 'conceptoFax',
      conceptoConfidencialidad: 'true',
      conceptoAlerta: 'true',
      conceptoConsolidado: 'true',
      balanceOrigen: 'balanceOrigen',
      balanceFechacierre1Dia: 'balanceFechacierre1Dia',
      balanceFechacierre1Mes: 'balanceFechacierre1Mes',
      balanceFechacierre1Ano: 'balanceFechacierre1Ano',
      balanceFechacierre2Dia: 'balanceFechacierre2Dia',
      balanceFechacierre2Mes: 'balanceFechacierre2Mes',
      balanceFechacierre2Ano: 'balanceFechacierre2Ano',
      balanceFechacierre3Dia: 'balanceFechacierre3Dia',
      balanceFechacierre3Mes: 'balanceFechacierre3Mes',
      balanceFechacierre3Ano: 'balanceFechacierre3Ano',
      activo_1_balance1: 'activo_1_balance1',
      activo_1_balance2: 'activo_1_balance2',
      activo_1_balance3: 'activo_1_balance3',
      activo_1_1_balance1: 'activo_1_1_balance1',
      activo_1_1_balance2: 'activo_1_1_balance2',
      activo_1_1_balance3: 'activo_1_1_balance3',
      activo_1_2_balance1: 'activo_1_2_balance1',
      activo_1_2_balance2: 'activo_1_2_balance2',
      activo_1_2_balance3: 'activo_1_2_balance3',
      activo_1_3_balance1: 'activo_1_3_balance1',
      activo_1_3_balance2: 'activo_1_3_balance2',
      activo_1_3_balance3: 'activo_1_3_balance3',
      activo_2_balance1: 'activo_2_balance1',
      activo_2_balance2: 'activo_2_balance2',
      activo_2_balance3: 'activo_2_balance3',
      activo_2_1_balance1: 'activo_2_1_balance1',
      activo_2_1_balance2: 'activo_2_1_balance2',
      activo_2_1_balance3: 'activo_2_1_balance3',
      activo_2_2_balance1: 'activo_2_2_balance1',
      activo_2_2_balance2: 'activo_2_2_balance2',
      activo_2_2_balance3: 'activo_2_2_balance3',
      activo_2_3_balance1: 'activo_2_3_balance1',
      activo_2_3_balance2: 'activo_2_3_balance2',
      activo_2_3_balance3: 'activo_2_3_balance3',
      activo_2_4_balance1: 'activo_2_4_balance1',
      activo_2_4_balance2: 'activo_2_4_balance2',
      activo_2_4_balance3: 'activo_2_4_balance3',
      activo_3_balance1: 'activo_3_balance1',
      activo_3_balance2: 'activo_3_balance2',
      activo_3_balance3: 'activo_3_balance3',
      activo_total_balance1: 'activo_total_balance1',
      activo_total_balance2: 'activo_total_balance2',
      activo_total_balance3: 'activo_total_balance3',
      pasivo_1_1_balance1: 'pasivo_1_1_balance1',
      pasivo_1_1_balance2: 'pasivo_1_1_balance2',
      pasivo_1_1_balance3: 'pasivo_1_1_balance3',
      pasivo_1_2_balance1: 'pasivo_1_2_balance1',
      pasivo_1_2_balance2: 'pasivo_1_2_balance2',
      pasivo_1_2_balance3: 'pasivo_1_2_balance3',
      pasivo_1_3_balance1: 'pasivo_1_3_balance1',
      pasivo_1_3_balance2: 'pasivo_1_3_balance2',
      pasivo_1_3_balance3: 'pasivo_1_3_balance3',
      pasivo_1_4_balance1: 'pasivo_1_4_balance1',
      pasivo_1_4_balance2: 'pasivo_1_4_balance2',
      pasivo_1_4_balance3: 'pasivo_1_4_balance3',
      pasivo_1_5_balance1: 'pasivo_1_5_balance1',
      pasivo_1_5_balance2: 'pasivo_1_5_balance2',
      pasivo_1_5_balance3: 'pasivo_1_5_balance3',
      pasivo_1_balance1: 'pasivo_1_balance1',
      pasivo_1_balance2: 'pasivo_1_balance2',
      pasivo_1_balance3: 'pasivo_1_balance3',
      pasivo_2_balance1: 'pasivo_2_balance1',
      pasivo_2_balance2: 'pasivo_2_balance2',
      pasivo_2_balance3: 'pasivo_2_balance3',
      pasivo_3_balance1: 'pasivo_3_balance1',
      pasivo_3_balance2: 'pasivo_3_balance2',
      pasivo_3_balance3: 'pasivo_3_balance3',
      pasivo_4_1_1_balance1: 'pasivo_4_1_1_balance1',
      pasivo_4_1_1_balance2: 'pasivo_4_1_1_balance2',
      pasivo_4_1_1_balance3: 'pasivo_4_1_1_balance3',
      pasivo_4_1_2_balance1: 'pasivo_4_1_2_balance1',
      pasivo_4_1_2_balance2: 'pasivo_4_1_2_balance2',
      pasivo_4_1_2_balance3: 'pasivo_4_1_2_balance3',
      pasivo_4_1_3_balance1: 'pasivo_4_1_3_balance1',
      pasivo_4_1_3_balance2: 'pasivo_4_1_3_balance2',
      pasivo_4_1_3_balance3: 'pasivo_4_1_3_balance3',
      pasivo_4_1_4_balance1: 'pasivo_4_1_4_balance1',
      pasivo_4_1_4_balance2: 'pasivo_4_1_4_balance2',
      pasivo_4_1_4_balance3: 'pasivo_4_1_4_balance3',
      pasivo_4_1_5_balance1: 'pasivo_4_1_5_balance1',
      pasivo_4_1_5_balance2: 'pasivo_4_1_5_balance2',
      pasivo_4_1_5_balance3: 'pasivo_4_1_5_balance3',
      pasivo_4_1_balance1: 'pasivo_4_1_balance1',
      pasivo_4_1_balance2: 'pasivo_4_1_balance2',
      pasivo_4_1_balance3: 'pasivo_4_1_balance3',
      pasivo_4_2_1_balance1: 'pasivo_4_2_1_balance1',
      pasivo_4_2_1_balance2: 'pasivo_4_2_1_balance2',
      pasivo_4_2_1_balance3: 'pasivo_4_2_1_balance3',
      pasivo_4_2_2_balance1: 'pasivo_4_2_2_balance1',
      pasivo_4_2_2_balance2: 'pasivo_4_2_2_balance2',
      pasivo_4_2_2_balance3: 'pasivo_4_2_2_balance3',
      pasivo_4_2_3_balance1: 'pasivo_4_2_3_balance1',
      pasivo_4_2_3_balance2: 'pasivo_4_2_3_balance2',
      pasivo_4_2_3_balance3: 'pasivo_4_2_3_balance3',
      pasivo_4_2_4_balance1: 'pasivo_4_2_4_balance1',
      pasivo_4_2_4_balance2: 'pasivo_4_2_4_balance2',
      pasivo_4_2_4_balance3: 'pasivo_4_2_4_balance3',
      pasivo_4_2_balance1: 'pasivo_4_2_balance1',
      pasivo_4_2_balance2: 'pasivo_4_2_balance2',
      pasivo_4_2_balance3: 'pasivo_4_2_balance3',
      pasivo_4_balance1: 'pasivo_4_balance1',
      pasivo_4_balance2: 'pasivo_4_balance2',
      pasivo_4_balance3: 'pasivo_4_balance3',
      pasivo_5_balance1: 'pasivo_5_balance1',
      pasivo_5_balance2: 'pasivo_5_balance2',
      pasivo_5_balance3: 'pasivo_5_balance3',
      pasivo_total_balance1: 'pasivo_total_balance1',
      pasivo_total_balance2: 'pasivo_total_balance2',
      pasivo_total_balance3: 'pasivo_total_balance3',
      cuentas_1_balance1: 'cuentas_1_balance1',
      cuentas_1_balance2: 'cuentas_1_balance2',
      cuentas_1_balance3: 'cuentas_1_balance3',
      cuentas_1_ingresos_balance1: 'cuentas_1_ingresos_balance1',
      cuentas_1_ingresos_balance2: 'cuentas_1_ingresos_balance2',
      cuentas_1_ingresos_balance3: 'cuentas_1_ingresos_balance3',
      cuentas_1_prestaciones_balance1: 'cuentas_1_prestaciones_balance1',
      cuentas_1_prestaciones_balance2: 'cuentas_1_prestaciones_balance2',
      cuentas_1_prestaciones_balance3: 'cuentas_1_prestaciones_balance3',
      cuentas_1_ventas_balance1: 'cuentas_1_ventas_balance1',
      cuentas_1_ventas_balance2: 'cuentas_1_ventas_balance2',
      cuentas_1_ventas_balance3: 'cuentas_1_ventas_balance3',
      cuentas_2_balance1: 'cuentas_2_balance1',
      cuentas_2_balance2: 'cuentas_2_balance2',
      cuentas_2_balance3: 'cuentas_2_balance3',
      cuentas_2_gastos_balance1: 'cuentas_2_gastos_balance1',
      cuentas_2_gastos_balance2: 'cuentas_2_gastos_balance2',
      cuentas_2_gastos_balance3: 'cuentas_2_gastos_balance3',
      cuentas_2_ingresos_balance1: 'cuentas_2_ingresos_balance1',
      cuentas_2_ingresos_balance2: 'cuentas_2_ingresos_balance2',
      cuentas_2_ingresos_balance3: 'cuentas_2_ingresos_balance3',
      cuentas_3_balance1: 'cuentas_3_balance1',
      cuentas_3_balance2: 'cuentas_3_balance2',
      cuentas_3_balance3: 'cuentas_3_balance3',
      cuentas_4_balance1: 'cuentas_4_balance1',
      cuentas_4_balance2: 'cuentas_4_balance2',
      cuentas_4_balance3: 'cuentas_4_balance3',
      cuentas_5_balance1: 'cuentas_5_balance1',
      cuentas_5_balance2: 'cuentas_5_balance2',
      cuentas_5_balance3: 'cuentas_5_balance3',
      cuentas_6_balance1: 'cuentas_6_balance1',
      cuentas_6_balance2: 'cuentas_6_balance2',
      cuentas_6_balance3: 'cuentas_6_balance3',
      cuentas_7_balance1: 'cuentas_7_balance1',
      cuentas_7_balance2: 'cuentas_7_balance2',
      cuentas_7_balance3: 'cuentas_7_balance3',
      cuentas_total_balance1: 'cuentas_total_balance1',
      cuentas_total_balance2: 'cuentas_total_balance2',
      cuentas_total_balance3: 'cuentas_total_balance3',
      auditoriaConclusion: 'auditoriaConclusion',
      auditoriaComentario: 'auditoriaComentario'
    },
    selectOpts: {
      balanceOrigen: [
        {
          value: 'value1',
          label: 'label1'
        },
        {
          value: 'value2',
          label: 'label2'
        }
      ],
      auditoriaConclusion: [
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
  const validateActivo = (): void => alert('accept')
  const validatePasivo = (): void => alert('accept')
  const validateCuentas = (): void => alert('accept')

  return (
    <ReportFrance
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
      validateActivo={validateActivo}
      validatePasivo={validatePasivo}
      validateCuentas={validateCuentas}
    />
  )
}

storiesOf('Components|Templates.ReportFrance', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <EmptyReportFrance />)
  .add('Filled', () => <FilledReportFrance />)
