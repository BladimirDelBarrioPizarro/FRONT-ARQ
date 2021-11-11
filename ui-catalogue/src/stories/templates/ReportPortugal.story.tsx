import React, { useEffect, useReducer } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import i18n from '../i18n.json'
import produce from 'immer'

import { ReportPortugal } from '../../components/templates/ReportPortugal/ReportPortugal'

const SAVE_LOADING = 'SAVE_LOADING'
const SAVE_SUCCESS = 'SAVE_SUCCESS'
const SAVE_ERROR = 'SAVE_ERROR'
const ACCEPT_LOADING = 'ACCEPT_LOADING'
const ACCEPT_SUCCESS = 'ACCEPT_SUCCESS'
const ACCEPT_ERROR = 'ACCEPT_ERROR'
const RECOVER_DATA_LOADING = 'RECOVER_DATA_LOADING'
const RECOVER_DATA_SUCCESS = 'RECOVER_DATA_SUCCESS'
const RECOVER_DATA_ERROR = 'RECOVER_DATA_ERROR'
const VALIDATE_ACTIVO_NO_CORRIENTE_LOADING = 'VALIDATE_ACTIVO_NO_CORRIENTE_LOADING'
const VALIDATE_ACTIVO_NO_CORRIENTE_SUCCESS = 'VALIDATE_ACTIVO_NO_CORRIENTE_SUCCESS'
const VALIDATE_ACTIVO_NO_CORRIENTE_ERROR = 'VALIDATE_ACTIVO_NO_CORRIENTE_ERROR'
const VALIDATE_PATRIMONIO_NETO_LOADING = 'VALIDATE_PATRIMONIO_NETO_LOADING'
const VALIDATE_PATRIMONIO_NETO_SUCCESS = 'VALIDATE_PATRIMONIO_NETO_SUCCESS'
const VALIDATE_PATRIMONIO_NETO_ERROR = 'VALIDATE_PATRIMONIO_NETO_ERROR'
const VALIDATE_PASIVO_NO_CORRIENTE_LOADING = 'VALIDATE_PASIVO_NO_CORRIENTE_LOADING'
const VALIDATE_PASIVO_NO_CORRIENTE_SUCCESS = 'VALIDATE_PASIVO_NO_CORRIENTE_SUCCESS'
const VALIDATE_PASIVO_NO_CORRIENTE_ERROR = 'VALIDATE_PASIVO_NO_CORRIENTE_ERROR'
const VALIDATE_PASIVO_CORRIENTE_LOADING = 'VALIDATE_PASIVO_CORRIENTE_LOADING'
const VALIDATE_PASIVO_CORRIENTE_SUCCESS = 'VALIDATE_PASIVO_CORRIENTE_SUCCESS'
const VALIDATE_PASIVO_CORRIENTE_ERROR = 'VALIDATE_PASIVO_CORRIENTE_ERROR'
const VALIDATE_TOTAL_PASIVO_LOADING = 'VALIDATE_TOTAL_PASIVO_LOADING'
const VALIDATE_TOTAL_PASIVO_SUCCESS = 'VALIDATE_TOTAL_PASIVO_SUCCESS'
const VALIDATE_TOTAL_PASIVO_ERROR = 'VALIDATE_TOTAL_PASIVO_ERROR'
const VALIDATE_VENTAS_LOADING = 'VALIDATE_VENTAS_LOADING'
const VALIDATE_VENTAS_SUCCESS = 'VALIDATE_VENTAS_SUCCESS'
const VALIDATE_VENTAS_ERROR = 'VALIDATE_VENTAS_ERROR'
const VALIDATE_EBITDA_LOADING = 'VALIDATE_EBITDA_LOADING'
const VALIDATE_EBITDA_SUCCESS = 'VALIDATE_EBITDA_SUCCESS'
const VALIDATE_EBITDA_ERROR = 'VALIDATE_EBITDA_ERROR'
const VALIDATE_EXPLOTACION_LOADING = 'VALIDATE_EXPLOTACION_LOADING'
const VALIDATE_EXPLOTACION_SUCCESS = 'VALIDATE_EXPLOTACION_SUCCESS'
const VALIDATE_EXPLOTACION_ERROR = 'VALIDATE_EXPLOTACION_ERROR'

const reducer = (state, action): any => {
  return produce(state, draft => {
    switch (action.type) {
      case SAVE_LOADING:
        draft.saveLoading = true
        draft.saveSuccess = false
        break
      case SAVE_SUCCESS:
        draft.saveSuccess = true
        draft.saveLoading = false
        break
      case SAVE_ERROR:
        draft.saveError = action.payload.error
        draft.saveSuccess = false
        draft.saveLoading = false
        break
      case ACCEPT_LOADING:
        draft.acceptLoading = true
        draft.acceptSuccess = false
        break
      case ACCEPT_SUCCESS:
        draft.acceptSuccess = true
        draft.acceptLoading = false
        break
      case ACCEPT_ERROR:
        draft.acceptError = action.payload.error
        draft.acceptSuccess = false
        draft.acceptLoading = false
        break
      case RECOVER_DATA_LOADING:
        draft.loading = true
        break
      case RECOVER_DATA_SUCCESS:
        draft.formValues = action.payload.formValues
        draft.loading = false
        break
      case RECOVER_DATA_ERROR:
        draft.formValues = action.payload.error
        draft.loading = false
        break
      case VALIDATE_ACTIVO_NO_CORRIENTE_LOADING:
      case VALIDATE_ACTIVO_NO_CORRIENTE_SUCCESS:
      case VALIDATE_ACTIVO_NO_CORRIENTE_ERROR:
        break
      case VALIDATE_PATRIMONIO_NETO_LOADING:
      case VALIDATE_PATRIMONIO_NETO_SUCCESS:
      case VALIDATE_PATRIMONIO_NETO_ERROR:
        break
      case VALIDATE_PASIVO_NO_CORRIENTE_LOADING:
      case VALIDATE_PASIVO_NO_CORRIENTE_SUCCESS:
      case VALIDATE_PASIVO_NO_CORRIENTE_ERROR:
        break
      case VALIDATE_PASIVO_CORRIENTE_LOADING:
      case VALIDATE_PASIVO_CORRIENTE_SUCCESS:
      case VALIDATE_PASIVO_CORRIENTE_ERROR:
        break
      case VALIDATE_TOTAL_PASIVO_LOADING:
      case VALIDATE_TOTAL_PASIVO_SUCCESS:
      case VALIDATE_TOTAL_PASIVO_ERROR:
        break
      case VALIDATE_VENTAS_LOADING:
      case VALIDATE_VENTAS_SUCCESS:
      case VALIDATE_VENTAS_ERROR:
        break
      case VALIDATE_EBITDA_LOADING:
      case VALIDATE_EBITDA_SUCCESS:
      case VALIDATE_EBITDA_ERROR:
        break
      case VALIDATE_EXPLOTACION_LOADING:
      case VALIDATE_EXPLOTACION_SUCCESS:
      case VALIDATE_EXPLOTACION_ERROR:
        break
    }
  })
}

interface IactionCreator {
  type: string
  payload?: any
}
const saveDataSuccess = (params): IactionCreator => {
  return {
    type: SAVE_SUCCESS,
    payload: params
  }
}
const saveDataLoading = (): IactionCreator => {
  return {
    type: SAVE_LOADING
  }
}
const saveDataError = (e): IactionCreator => {
  return {
    type: SAVE_ERROR,
    payload: e
  }
}
const acceptDataSuccess = (params): IactionCreator => {
  return {
    type: ACCEPT_SUCCESS,
    payload: params
  }
}
const acceptDataLoading = (): IactionCreator => {
  return {
    type: ACCEPT_LOADING
  }
}
const acceptDataError = (e): IactionCreator => {
  return {
    type: ACCEPT_ERROR,
    payload: e
  }
}
const recoverDataSuccess = (params): IactionCreator => { // eslint-disable-line
  return {
    type: RECOVER_DATA_SUCCESS,
    payload: params
  }
}
const recoverDataLoading = (): IactionCreator => {
  return {
    type: RECOVER_DATA_LOADING
  }
}
const recoverDataError = (e): IactionCreator => {
  return {
    type: RECOVER_DATA_ERROR,
    payload: e
  }
}

const validateActivoNoCorrienteSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_ACTIVO_NO_CORRIENTE_SUCCESS,
    payload: params
  }
}
const validateActivoNoCorrienteLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_ACTIVO_NO_CORRIENTE_LOADING
  }
}
const validateActivoNoCorrienteError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_ACTIVO_NO_CORRIENTE_ERROR,
    payload: e
  }
}

const validatePatrimonioNetoSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_PATRIMONIO_NETO_SUCCESS,
    payload: params
  }
}
const validatePatrimonioNetoLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_PATRIMONIO_NETO_LOADING
  }
}
const validatePatrimonioNetoError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_PATRIMONIO_NETO_ERROR,
    payload: e
  }
}

const validatePasivoNoCorrienteSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_PASIVO_NO_CORRIENTE_SUCCESS,
    payload: params
  }
}
const validatePasivoNoCorrienteLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_PASIVO_NO_CORRIENTE_LOADING
  }
}
const validatePasivoNoCorrienteError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_PASIVO_NO_CORRIENTE_ERROR,
    payload: e
  }
}

const validatePasivoCorrienteSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_PASIVO_CORRIENTE_SUCCESS,
    payload: params
  }
}
const validatePasivoCorrienteLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_PASIVO_CORRIENTE_LOADING
  }
}
const validatePasivoCorrienteError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_PASIVO_CORRIENTE_ERROR,
    payload: e
  }
}

const validateTotalPasivoSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_TOTAL_PASIVO_SUCCESS,
    payload: params
  }
}
const validateTotalPasivoLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_TOTAL_PASIVO_LOADING
  }
}
const validateTotalPasivoError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_TOTAL_PASIVO_ERROR,
    payload: e
  }
}

const validateVentasSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_VENTAS_SUCCESS,
    payload: params
  }
}
const validateVentasLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_VENTAS_LOADING
  }
}
const validateVentasError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_VENTAS_ERROR,
    payload: e
  }
}

const validateEbitdaSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_EBITDA_SUCCESS,
    payload: params
  }
}
const validateEbitdaLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_EBITDA_LOADING
  }
}
const validateEbitdaError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_EBITDA_ERROR,
    payload: e
  }
}

const validateExplotacionSuccess = (params): IactionCreator => {
  return {
    type: VALIDATE_EXPLOTACION_SUCCESS,
    payload: params
  }
}
const validateExplotacionLoading = (): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_EXPLOTACION_LOADING
  }
}
const validateExplotacionError = (e): IactionCreator => { // eslint-disable-line
  return {
    type: VALIDATE_EXPLOTACION_ERROR,
    payload: e
  }
}

const initialState = {
  balanceOrigenOpt: [],
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
    balanceCifra: '',
    balanceOrigen: '',
    balanceFechacierre1Dia: '',
    balanceFechacierre1Mes: '',
    balanceFechacierre1Ano: '',
    balanceFechacierre2Dia: '',
    balanceFechacierre2Mes: '',
    balanceFechacierre2Ano: '',
    balanceFechacierre3Dia: '',
    balanceFechacierre3Mes: '',
    activonocorriente1_balance1: '',
    activonocorriente1_balance2: '',
    activonocorriente1_balance3: '',
    activonocorriente1_1_balance1: '',
    activonocorriente1_1_balance2: '',
    activonocorriente1_1_balance3: '',
    activonocorriente1_2_balance1: '',
    activonocorriente1_2_balance2: '',
    activonocorriente1_2_balance3: '',
    activonocorriente1_3_balance1: '',
    activonocorriente1_3_balance2: '',
    activonocorriente1_3_balance3: '',
    activonocorriente1_4_balance1: '',
    activonocorriente1_4_balance2: '',
    activonocorriente1_4_balance3: '',
    activonocorriente1_5_balance1: '',
    activonocorriente1_5_balance2: '',
    activonocorriente1_5_balance3: '',
    activonocorriente1_6_balance1: '',
    activonocorriente1_6_balance2: '',
    activonocorriente1_6_balance3: '',
    activonocorriente1_6_1_balance1: '',
    activonocorriente1_6_1_balance2: '',
    activonocorriente1_6_1_balance3: '',
    activonocorriente1_6_2_balance1: '',
    activonocorriente1_6_2_balance2: '',
    activonocorriente1_6_2_balance3: '',
    activonocorriente1_7_balance1: '',
    activonocorriente1_7_balance2: '',
    activonocorriente1_7_balance3: '',
    activonocorriente1_8_balance1: '',
    activonocorriente1_8_balance2: '',
    activonocorriente1_8_balance3: '',
    activonocorriente1_9_balance1: '',
    activonocorriente1_9_balance2: '',
    activonocorriente1_9_balance3: '',
    totalActivo_balance1: '',
    totalActivo_balance2: '',
    totalActivo_balance3: '',
    patrimonioneto_4_balance1: '',
    patrimonioneto_4_balance2: '',
    patrimonioneto_4_balance3: '',
    patrimonioneto_4_1_balance1: '',
    patrimonioneto_4_1_balance2: '',
    patrimonioneto_4_1_balance3: '',
    patrimonioneto_4_2_balance1: '',
    patrimonioneto_4_2_balance2: '',
    patrimonioneto_4_2_balance3: '',
    patrimonioneto_4_3_balance1: '',
    patrimonioneto_4_3_balance2: '',
    patrimonioneto_4_3_balance3: '',
    patrimonioneto_4_4_balance1: '',
    patrimonioneto_4_4_balance2: '',
    patrimonioneto_4_4_balance3: '',
    patrimonioneto_4_5_balance1: '',
    patrimonioneto_4_5_balance2: '',
    patrimonioneto_4_5_balance3: '',
    patrimonioneto_4_6_balance1: '',
    patrimonioneto_4_6_balance2: '',
    patrimonioneto_4_6_balance3: '',
    patrimonioneto_4_7_balance1: '',
    patrimonioneto_4_7_balance2: '',
    patrimonioneto_4_7_balance3: '',
    patrimonioneto_4_8_balance1: '',
    patrimonioneto_4_8_balance2: '',
    patrimonioneto_4_8_balance3: '',
    patrimonioneto_4_9_balance1: '',
    patrimonioneto_4_9_balance2: '',
    patrimonioneto_4_9_balance3: '',
    patrimonioneto_4_10_balance1: '',
    patrimonioneto_4_10_balance2: '',
    patrimonioneto_4_10_balance3: '',
    patrimonioneto_4_11_balance1: '',
    patrimonioneto_4_11_balance2: '',
    patrimonioneto_4_11_balance3: '',
    patrimonioneto_4_12_balance1: '',
    patrimonioneto_4_12_balance2: '',
    patrimonioneto_4_12_balance3: '',
    pasivonocorriente_5_balance1: '',
    pasivonocorriente_5_balance2: '',
    pasivonocorriente_5_balance3: '',
    pasivonocorriente_5_1_balance1: '',
    pasivonocorriente_5_1_balance2: '',
    pasivonocorriente_5_1_balance3: '',
    pasivonocorriente_5_2_balance1: '',
    pasivonocorriente_5_2_balance2: '',
    pasivonocorriente_5_2_balance3: '',
    pasivonocorriente_5_3_balance1: '',
    pasivonocorriente_5_3_balance2: '',
    pasivonocorriente_5_3_balance3: '',
    pasivonocorriente_5_4_balance1: '',
    pasivonocorriente_5_4_balance2: '',
    pasivonocorriente_5_4_balance3: '',
    pasivonocorriente_5_5_balance1: '',
    pasivonocorriente_5_5_balance2: '',
    pasivonocorriente_5_5_balance3: '',
    pasivocorriente_6_balance1: '',
    pasivocorriente_6_balance2: '',
    pasivocorriente_6_balance3: '',
    pasivocorriente_6_1_balance1: '',
    pasivocorriente_6_1_balance2: '',
    pasivocorriente_6_1_balance3: '',
    pasivocorriente_6_2_balance1: '',
    pasivocorriente_6_2_balance2: '',
    pasivocorriente_6_2_balance3: '',
    pasivocorriente_6_3_balance1: '',
    pasivocorriente_6_3_balance2: '',
    pasivocorriente_6_3_balance3: '',
    pasivocorriente_6_3_1_balance1: '',
    pasivocorriente_6_3_1_balance2: '',
    pasivocorriente_6_3_1_balance3: '',
    pasivocorriente_6_3_2_balance1: '',
    pasivocorriente_6_3_2_balance2: '',
    pasivocorriente_6_3_2_balance3: '',
    pasivocorriente_6_4_balance1: '',
    pasivocorriente_6_4_balance2: '',
    pasivocorriente_6_4_balance3: '',
    pasivocorriente_6_4_1_balance1: '',
    pasivocorriente_6_4_1_balance2: '',
    pasivocorriente_6_4_1_balance3: '',
    pasivocorriente_6_4_2_balance1: '',
    pasivocorriente_6_4_2_balance2: '',
    pasivocorriente_6_4_2_balance3: '',
    pasivocorriente_6_4_3_balance1: '',
    pasivocorriente_6_4_3_balance2: '',
    pasivocorriente_6_4_3_balance3: '',
    pasivocorriente_6_4_4_balance1: '',
    pasivocorriente_6_4_4_balance2: '',
    pasivocorriente_6_4_4_balance3: '',
    pasivocorriente_6_4_5_balance1: '',
    pasivocorriente_6_4_5_balance2: '',
    pasivocorriente_6_4_5_balance3: '',
    pasivocorriente_6_4_6_balance1: '',
    pasivocorriente_6_4_6_balance2: '',
    pasivocorriente_6_4_6_balance3: '',
    pasivocorriente_6_4_7_balance1: '',
    pasivocorriente_6_4_7_balance2: '',
    pasivocorriente_6_4_7_balance3: '',
    pasivocorriente_6_4_8_balance1: '',
    pasivocorriente_6_4_8_balance2: '',
    pasivocorriente_6_4_8_balance3: '',
    totalpasivo_balance1: '',
    totalpasivo_balance2: '',
    totalpasivo_balance3: '',
    totalpatrimonio_balance1: '',
    totalpatrimonio_balance2: '',
    totalpatrimonio_balance3: '',
    ventas_01_balance1: '',
    ventas_01_balance2: '',
    ventas_01_balance3: '',
    ventas_02_balance1: '',
    ventas_02_balance2: '',
    ventas_02_balance3: '',
    ventas_03_balance1: '',
    ventas_03_balance2: '',
    ventas_03_balance3: '',
    ventas_04_balance1: '',
    ventas_04_balance2: '',
    ventas_04_balance3: '',
    ventas_05_balance1: '',
    ventas_05_balance2: '',
    ventas_05_balance3: '',
    ventas_06_balance1: '',
    ventas_06_balance2: '',
    ventas_06_balance3: '',
    ventas_07_balance1: '',
    ventas_07_balance2: '',
    ventas_07_balance3: '',
    ventas_08_balance1: '',
    ventas_08_balance2: '',
    ventas_08_balance3: '',
    ventas_14_balance1: '',
    ventas_14_balance2: '',
    ventas_14_balance3: '',
    ventas_15_balance1: '',
    ventas_15_balance2: '',
    ventas_15_balance3: '',
    ebitda_27_balance1: '',
    ebitda_27_balance2: '',
    ebitda_27_balance3: '',
    ebitda_17_balance1: '',
    ebitda_17_balance2: '',
    ebitda_17_balance3: '',
    ebitda_09_balance1: '',
    ebitda_09_balance2: '',
    ebitda_09_balance3: '',
    ebitda_10_balance1: '',
    ebitda_10_balance2: '',
    ebitda_10_balance3: '',
    ebitda_11_balance1: '',
    ebitda_11_balance2: '',
    ebitda_11_balance3: '',
    ebitda_16_balance1: '',
    ebitda_16_balance2: '',
    ebitda_16_balance3: '',
    ebitda_12_balance1: '',
    ebitda_12_balance2: '',
    ebitda_12_balance3: '',
    explotacion_13_balance1: '',
    explotacion_13_balance2: '',
    explotacion_13_balance3: '',
    explotacion_18_balance1: '',
    explotacion_18_balance2: '',
    explotacion_18_balance3: '',
    explotacion_19_balance1: '',
    explotacion_19_balance2: '',
    explotacion_19_balance3: '',
    explotacion_20_balance1: '',
    explotacion_20_balance2: '',
    explotacion_20_balance3: '',
    explotacion_21_balance1: '',
    explotacion_21_balance2: '',
    explotacion_21_balance3: '',
    explotacion_22_balance1: '',
    explotacion_22_balance2: '',
    explotacion_22_balance3: '',
    explotacion_23_balance1: '',
    explotacion_23_balance2: '',
    explotacion_23_balance3: '',
    explotacion_24_balance1: '',
    explotacion_24_balance2: '',
    explotacion_24_balance3: '',
    explotacion_25_balance1: '',
    explotacion_25_balance2: '',
    explotacion_25_balance3: '',
    explotacion_26_balance1: '',
    explotacion_26_balance2: '',
    explotacion_26_balance3: '',
    auditoria: ''
  },
  loading: false,
  error: false,
  saveSuccess: false,
  saveLoading: false,
  saveError: null,
  acceptSuccess: false,
  acceptLoading: false,
  acceptError: null
}

const MetaReportPortugal: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch(recoverDataLoading())
    recoverFormData()
      .then(result => {
        // dispatch(recoverDataSuccess(result))
      })
      .catch(e => {
        dispatch(recoverDataError(e))
      })
  }, [])

  const recoverFormData = async (): Promise<any> => ({})

  const saveAction = async (params: any): Promise<any> => ({})
  const save = (formValues): any => {
    saveDataLoading()
    saveAction(formValues)
      .then(result => {
        dispatch(saveDataSuccess(result))
      })
      .catch(e => {
        dispatch(saveDataError(e))
      })
  }

  const acceptAction = async (params: any): Promise<any> => ({})
  const accept = (formValues): any => {
    acceptDataLoading()
    acceptAction(formValues)
      .then(result => {
        dispatch(acceptDataSuccess(result))
      })
      .catch(e => {
        dispatch(acceptDataError(e))
      })
  }

  const cancel = (): void => { alert('cancel') }

  const validateActivoNoCorriente = (params): any => {
    validateActivoNoCorrienteSuccess(params)
  }

  const validatePatrimonioNeto = (params): any => {
    validatePatrimonioNetoSuccess(params)
  }

  const validatePasivoNoCorriente = (params): any => {
    validatePasivoNoCorrienteSuccess(params)
  }

  const validatePasivoCorriente = (params): any => {
    validatePasivoCorrienteSuccess(params)
  }

  const validateTotalPasivo = (params): any => {
    validateTotalPasivoSuccess(params)
  }

  const validateVentas = (params): any => {
    validateVentasSuccess(params)
  }

  const validateEbitda = (params): any => {
    validateEbitdaSuccess(params)
  }

  const validateExplotacion = (params): any => {
    validateExplotacionSuccess(params)
  }

  const handleSubmit = (): void => { alert('submit') }

  return (
    <ReportPortugal
      i18n={i18n}
      balanceOrigenOpt={state.balanceOrigenOpt}
      validateActivoNoCorriente={validateActivoNoCorriente}
      validatePatrimonioNeto={validatePatrimonioNeto}
      validatePasivoNoCorriente={validatePasivoNoCorriente}
      validatePasivoCorriente={validatePasivoCorriente}
      validateTotalPasivo={validateTotalPasivo}
      validateVentas={validateVentas}
      validateEbitda={validateEbitda}
      validateExplotacion={validateExplotacion}
      formValues={state.formValues}
      formLoading={state.loading}
      formRecoverDataError={state.error}
      handleCancel={cancel}
      handleSave={save}
      saveSuccess={state.saveSuccess}
      saveLoading={state.saveLoading}
      handleAccept={accept}
      acceptSuccess={state.acceptSuccess}
      acceptLoading={state.acceptLoading}
      handleSubmit={handleSubmit}
    />
  )
}

const EmptyReportPortugal: React.FC = () => {
  const save = (): void => { alert('save') }

  const accept = (): void => { alert('accept') }

  const cancel = (): void => { alert('cancel') }

  const validateActivoNoCorriente = (): void => { alert('validate') }

  const validatePatrimonioNeto = (): void => { alert('validate') }

  const validatePasivoNoCorriente = (): void => { alert('validate') }

  const validatePasivoCorriente = (): void => { alert('validate') }

  const validateTotalPasivo = (): void => { alert('validate') }

  const validateVentas = (): void => { alert('validate') }

  const validateEbitda = (): void => { alert('validate') }

  const validateExplotacion = (): void => { alert('validate') }

  const handleSubmit = (): void => { alert('submit') }

  return (
    <ReportPortugal
      i18n={i18n}
      balanceOrigenOpt={initialState.balanceOrigenOpt}
      validateActivoNoCorriente={validateActivoNoCorriente}
      validatePatrimonioNeto={validatePatrimonioNeto}
      validatePasivoNoCorriente={validatePasivoNoCorriente}
      validatePasivoCorriente={validatePasivoCorriente}
      validateTotalPasivo={validateTotalPasivo}
      validateVentas={validateVentas}
      validateEbitda={validateEbitda}
      validateExplotacion={validateExplotacion}
      formValues={initialState.formValues}
      formLoading={initialState.loading}
      formRecoverDataError={initialState.error}
      handleCancel={cancel}
      handleSave={save}
      saveSuccess={initialState.saveSuccess}
      saveLoading={initialState.saveLoading}
      handleAccept={accept}
      acceptSuccess={initialState.acceptSuccess}
      acceptLoading={initialState.acceptLoading}
      handleSubmit={handleSubmit}
    />
  )
}

const FilledReportPortugal: React.FC = () => {
  const save = (): void => { alert('save') }

  const accept = (): void => { alert('accept') }

  const cancel = (): void => { alert('cancel') }

  const validateActivoNoCorriente = (): void => { alert('validate') }

  const validatePatrimonioNeto = (): void => { alert('validate') }

  const validatePasivoNoCorriente = (): void => { alert('validate') }

  const validatePasivoCorriente = (): void => { alert('validate') }

  const validateTotalPasivo = (): void => { alert('validate') }

  const validateVentas = (): void => { alert('validate') }

  const validateEbitda = (): void => { alert('validate') }

  const validateExplotacion = (): void => { alert('validate') }

  const initialState = {
    balanceOrigenOpt: [
      {
        value: 'value1',
        label: 'label1'
      },
      {
        value: 'value2',
        label: 'label2'
      },
      {
        value: 'value3',
        label: 'label3'
      }
    ],
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
      balanceCifra: 'balanceCifra',
      balanceOrigen: 'balanceOrigen',
      balanceFechacierre1Dia: 'balanceFechacierre1Dia',
      balanceFechacierre1Mes: 'balanceFechacierre1Mes',
      balanceFechacierre1Ano: 'balanceFechacierre1Ano',
      balanceFechacierre2Dia: 'balanceFechacierre2Dia',
      balanceFechacierre2Mes: 'balanceFechacierre2Mes',
      balanceFechacierre2Ano: 'balanceFechacierre2Ano',
      balanceFechacierre3Dia: 'balanceFechacierre3Dia',
      balanceFechacierre3Mes: 'balanceFechacierre3Mes',
      activonocorriente1_balance1: 'activonocorriente1_balance1',
      activonocorriente1_balance2: 'activonocorriente1_balance2',
      activonocorriente1_balance3: 'activonocorriente1_balance3',
      activonocorriente1_1_balance1: 'activonocorriente1_1_balance1',
      activonocorriente1_1_balance2: 'activonocorriente1_1_balance2',
      activonocorriente1_1_balance3: 'activonocorriente1_1_balance3',
      activonocorriente1_2_balance1: 'activonocorriente1_2_balance1',
      activonocorriente1_2_balance2: 'activonocorriente1_2_balance2',
      activonocorriente1_2_balance3: 'activonocorriente1_2_balance3',
      activonocorriente1_3_balance1: 'activonocorriente1_3_balance1',
      activonocorriente1_3_balance2: 'activonocorriente1_3_balance2',
      activonocorriente1_3_balance3: 'activonocorriente1_3_balance3',
      activonocorriente1_4_balance1: 'activonocorriente1_4_balance1',
      activonocorriente1_4_balance2: 'activonocorriente1_4_balance2',
      activonocorriente1_4_balance3: 'activonocorriente1_4_balance3',
      activonocorriente1_5_balance1: 'activonocorriente1_5_balance1',
      activonocorriente1_5_balance2: 'activonocorriente1_5_balance2',
      activonocorriente1_5_balance3: 'activonocorriente1_5_balance3',
      activonocorriente1_6_balance1: 'activonocorriente1_6_balance1',
      activonocorriente1_6_balance2: 'activonocorriente1_6_balance2',
      activonocorriente1_6_balance3: 'activonocorriente1_6_balance3',
      activonocorriente1_6_1_balance1: 'activonocorriente1_6_1_balance1',
      activonocorriente1_6_1_balance2: 'activonocorriente1_6_1_balance2',
      activonocorriente1_6_1_balance3: 'activonocorriente1_6_1_balance3',
      activonocorriente1_6_2_balance1: 'activonocorriente1_6_2_balance1',
      activonocorriente1_6_2_balance2: 'activonocorriente1_6_2_balance2',
      activonocorriente1_6_2_balance3: 'activonocorriente1_6_2_balance3',
      activonocorriente1_7_balance1: 'activonocorriente1_7_balance1',
      activonocorriente1_7_balance2: 'activonocorriente1_7_balance2',
      activonocorriente1_7_balance3: 'activonocorriente1_7_balance3',
      activonocorriente1_8_balance1: 'activonocorriente1_8_balance1',
      activonocorriente1_8_balance2: 'activonocorriente1_8_balance2',
      activonocorriente1_8_balance3: 'activonocorriente1_8_balance3',
      activonocorriente1_9_balance1: 'activonocorriente1_9_balance1',
      activonocorriente1_9_balance2: 'activonocorriente1_9_balance2',
      activonocorriente1_9_balance3: 'activonocorriente1_9_balance3',
      totalActivo_balance1: 'totalActivo_balance1',
      totalActivo_balance2: 'totalActivo_balance2',
      totalActivo_balance3: 'totalActivo_balance3',
      patrimonioneto_4_balance1: 'patrimonioneto_4_balance1',
      patrimonioneto_4_balance2: 'patrimonioneto_4_balance2',
      patrimonioneto_4_balance3: 'patrimonioneto_4_balance3',
      patrimonioneto_4_1_balance1: 'patrimonioneto_4_1_balance1',
      patrimonioneto_4_1_balance2: 'patrimonioneto_4_1_balance2',
      patrimonioneto_4_1_balance3: 'patrimonioneto_4_1_balance3',
      patrimonioneto_4_2_balance1: 'patrimonioneto_4_2_balance1',
      patrimonioneto_4_2_balance2: 'patrimonioneto_4_2_balance2',
      patrimonioneto_4_2_balance3: 'patrimonioneto_4_2_balance3',
      patrimonioneto_4_3_balance1: 'patrimonioneto_4_3_balance1',
      patrimonioneto_4_3_balance2: 'patrimonioneto_4_3_balance2',
      patrimonioneto_4_3_balance3: 'patrimonioneto_4_3_balance3',
      patrimonioneto_4_4_balance1: 'patrimonioneto_4_4_balance1',
      patrimonioneto_4_4_balance2: 'patrimonioneto_4_4_balance2',
      patrimonioneto_4_4_balance3: 'patrimonioneto_4_4_balance3',
      patrimonioneto_4_5_balance1: 'patrimonioneto_4_5_balance1',
      patrimonioneto_4_5_balance2: 'patrimonioneto_4_5_balance2',
      patrimonioneto_4_5_balance3: 'patrimonioneto_4_5_balance3',
      patrimonioneto_4_6_balance1: 'patrimonioneto_4_6_balance1',
      patrimonioneto_4_6_balance2: 'patrimonioneto_4_6_balance2',
      patrimonioneto_4_6_balance3: 'patrimonioneto_4_6_balance3',
      patrimonioneto_4_7_balance1: 'patrimonioneto_4_7_balance1',
      patrimonioneto_4_7_balance2: 'patrimonioneto_4_7_balance2',
      patrimonioneto_4_7_balance3: 'patrimonioneto_4_7_balance3',
      patrimonioneto_4_8_balance1: 'patrimonioneto_4_8_balance1',
      patrimonioneto_4_8_balance2: 'patrimonioneto_4_8_balance2',
      patrimonioneto_4_8_balance3: 'patrimonioneto_4_8_balance3',
      patrimonioneto_4_9_balance1: 'patrimonioneto_4_9_balance1',
      patrimonioneto_4_9_balance2: 'patrimonioneto_4_9_balance2',
      patrimonioneto_4_9_balance3: 'patrimonioneto_4_9_balance3',
      patrimonioneto_4_10_balance1: 'patrimonioneto_4_10_balance1',
      patrimonioneto_4_10_balance2: 'patrimonioneto_4_10_balance2',
      patrimonioneto_4_10_balance3: 'patrimonioneto_4_10_balance3',
      patrimonioneto_4_11_balance1: 'patrimonioneto_4_11_balance1',
      patrimonioneto_4_11_balance2: 'patrimonioneto_4_11_balance2',
      patrimonioneto_4_11_balance3: 'patrimonioneto_4_11_balance3',
      patrimonioneto_4_12_balance1: 'patrimonioneto_4_12_balance1',
      patrimonioneto_4_12_balance2: 'patrimonioneto_4_12_balance2',
      patrimonioneto_4_12_balance3: 'patrimonioneto_4_12_balance3',
      pasivonocorriente_5_balance1: 'pasivonocorriente_5_balance1',
      pasivonocorriente_5_balance2: 'pasivonocorriente_5_balance2',
      pasivonocorriente_5_balance3: 'pasivonocorriente_5_balance3',
      pasivonocorriente_5_1_balance1: 'pasivonocorriente_5_1_balance1',
      pasivonocorriente_5_1_balance2: 'pasivonocorriente_5_1_balance2',
      pasivonocorriente_5_1_balance3: 'pasivonocorriente_5_1_balance3',
      pasivonocorriente_5_2_balance1: 'pasivonocorriente_5_2_balance1',
      pasivonocorriente_5_2_balance2: 'pasivonocorriente_5_2_balance2',
      pasivonocorriente_5_2_balance3: 'pasivonocorriente_5_2_balance3',
      pasivonocorriente_5_3_balance1: 'pasivonocorriente_5_3_balance1',
      pasivonocorriente_5_3_balance2: 'pasivonocorriente_5_3_balance2',
      pasivonocorriente_5_3_balance3: 'pasivonocorriente_5_3_balance3',
      pasivonocorriente_5_4_balance1: 'pasivonocorriente_5_4_balance1',
      pasivonocorriente_5_4_balance2: 'pasivonocorriente_5_4_balance2',
      pasivonocorriente_5_4_balance3: 'pasivonocorriente_5_4_balance3',
      pasivonocorriente_5_5_balance1: 'pasivonocorriente_5_5_balance1',
      pasivonocorriente_5_5_balance2: 'pasivonocorriente_5_5_balance2',
      pasivonocorriente_5_5_balance3: 'pasivonocorriente_5_5_balance3',
      pasivocorriente_6_balance1: 'pasivocorriente_6_balance1',
      pasivocorriente_6_balance2: 'pasivocorriente_6_balance2',
      pasivocorriente_6_balance3: 'pasivocorriente_6_balance3',
      pasivocorriente_6_1_balance1: 'pasivocorriente_6_1_balance1',
      pasivocorriente_6_1_balance2: 'pasivocorriente_6_1_balance2',
      pasivocorriente_6_1_balance3: 'pasivocorriente_6_1_balance3',
      pasivocorriente_6_2_balance1: 'pasivocorriente_6_2_balance1',
      pasivocorriente_6_2_balance2: 'pasivocorriente_6_2_balance2',
      pasivocorriente_6_2_balance3: 'pasivocorriente_6_2_balance3',
      pasivocorriente_6_3_balance1: 'pasivocorriente_6_3_balance1',
      pasivocorriente_6_3_balance2: 'pasivocorriente_6_3_balance2',
      pasivocorriente_6_3_balance3: 'pasivocorriente_6_3_balance3',
      pasivocorriente_6_3_1_balance1: 'pasivocorriente_6_3_1_balance1',
      pasivocorriente_6_3_1_balance2: 'pasivocorriente_6_3_1_balance2',
      pasivocorriente_6_3_1_balance3: 'pasivocorriente_6_3_1_balance3',
      pasivocorriente_6_3_2_balance1: 'pasivocorriente_6_3_2_balance1',
      pasivocorriente_6_3_2_balance2: 'pasivocorriente_6_3_2_balance2',
      pasivocorriente_6_3_2_balance3: 'pasivocorriente_6_3_2_balance3',
      pasivocorriente_6_4_balance1: 'pasivocorriente_6_4_balance1',
      pasivocorriente_6_4_balance2: 'pasivocorriente_6_4_balance2',
      pasivocorriente_6_4_balance3: 'pasivocorriente_6_4_balance3',
      pasivocorriente_6_4_1_balance1: 'pasivocorriente_6_4_1_balance1',
      pasivocorriente_6_4_1_balance2: 'pasivocorriente_6_4_1_balance2',
      pasivocorriente_6_4_1_balance3: 'pasivocorriente_6_4_1_balance3',
      pasivocorriente_6_4_2_balance1: 'pasivocorriente_6_4_2_balance1',
      pasivocorriente_6_4_2_balance2: 'pasivocorriente_6_4_2_balance2',
      pasivocorriente_6_4_2_balance3: 'pasivocorriente_6_4_2_balance3',
      pasivocorriente_6_4_3_balance1: 'pasivocorriente_6_4_3_balance1',
      pasivocorriente_6_4_3_balance2: 'pasivocorriente_6_4_3_balance2',
      pasivocorriente_6_4_3_balance3: 'pasivocorriente_6_4_3_balance3',
      pasivocorriente_6_4_4_balance1: 'pasivocorriente_6_4_4_balance1',
      pasivocorriente_6_4_4_balance2: 'pasivocorriente_6_4_4_balance2',
      pasivocorriente_6_4_4_balance3: 'pasivocorriente_6_4_4_balance3',
      pasivocorriente_6_4_5_balance1: 'pasivocorriente_6_4_5_balance1',
      pasivocorriente_6_4_5_balance2: 'pasivocorriente_6_4_5_balance2',
      pasivocorriente_6_4_5_balance3: 'pasivocorriente_6_4_5_balance3',
      pasivocorriente_6_4_6_balance1: 'pasivocorriente_6_4_6_balance1',
      pasivocorriente_6_4_6_balance2: 'pasivocorriente_6_4_6_balance2',
      pasivocorriente_6_4_6_balance3: 'pasivocorriente_6_4_6_balance3',
      pasivocorriente_6_4_7_balance1: 'pasivocorriente_6_4_7_balance1',
      pasivocorriente_6_4_7_balance2: 'pasivocorriente_6_4_7_balance2',
      pasivocorriente_6_4_7_balance3: 'pasivocorriente_6_4_7_balance3',
      pasivocorriente_6_4_8_balance1: 'pasivocorriente_6_4_8_balance1',
      pasivocorriente_6_4_8_balance2: 'pasivocorriente_6_4_8_balance2',
      pasivocorriente_6_4_8_balance3: 'pasivocorriente_6_4_8_balance3',
      totalpasivo_balance1: 'totalpasivo_balance1',
      totalpasivo_balance2: 'totalpasivo_balance2',
      totalpasivo_balance3: 'totalpasivo_balance3',
      totalpatrimonio_balance1: 'totalpatrimonio_balance1',
      totalpatrimonio_balance2: 'totalpatrimonio_balance2',
      totalpatrimonio_balance3: 'totalpatrimonio_balance3',
      ventas_01_balance1: 'ventas_01_balance1',
      ventas_01_balance2: 'ventas_01_balance2',
      ventas_01_balance3: 'ventas_01_balance3',
      ventas_02_balance1: 'ventas_02_balance1',
      ventas_02_balance2: 'ventas_02_balance2',
      ventas_02_balance3: 'ventas_02_balance3',
      ventas_03_balance1: 'ventas_03_balance1',
      ventas_03_balance2: 'ventas_03_balance2',
      ventas_03_balance3: 'ventas_03_balance3',
      ventas_04_balance1: 'ventas_04_balance1',
      ventas_04_balance2: 'ventas_04_balance2',
      ventas_04_balance3: 'ventas_04_balance3',
      ventas_05_balance1: 'ventas_05_balance1',
      ventas_05_balance2: 'ventas_05_balance2',
      ventas_05_balance3: 'ventas_05_balance3',
      ventas_06_balance1: 'ventas_06_balance1',
      ventas_06_balance2: 'ventas_06_balance2',
      ventas_06_balance3: 'ventas_06_balance3',
      ventas_07_balance1: 'ventas_07_balance1',
      ventas_07_balance2: 'ventas_07_balance2',
      ventas_07_balance3: 'ventas_07_balance3',
      ventas_08_balance1: 'ventas_08_balance1',
      ventas_08_balance2: 'ventas_08_balance2',
      ventas_08_balance3: 'ventas_08_balance3',
      ventas_14_balance1: 'ventas_14_balance1',
      ventas_14_balance2: 'ventas_14_balance2',
      ventas_14_balance3: 'ventas_14_balance3',
      ventas_15_balance1: 'ventas_15_balance1',
      ventas_15_balance2: 'ventas_15_balance2',
      ventas_15_balance3: 'ventas_15_balance3',
      ebitda_27_balance1: 'ebitda_27_balance1',
      ebitda_27_balance2: 'ebitda_27_balance2',
      ebitda_27_balance3: 'ebitda_27_balance3',
      ebitda_17_balance1: 'ebitda_17_balance1',
      ebitda_17_balance2: 'ebitda_17_balance2',
      ebitda_17_balance3: 'ebitda_17_balance3',
      ebitda_09_balance1: 'ebitda_09_balance1',
      ebitda_09_balance2: 'ebitda_09_balance2',
      ebitda_09_balance3: 'ebitda_09_balance3',
      ebitda_10_balance1: 'ebitda_10_balance1',
      ebitda_10_balance2: 'ebitda_10_balance2',
      ebitda_10_balance3: 'ebitda_10_balance3',
      ebitda_11_balance1: 'ebitda_11_balance1',
      ebitda_11_balance2: 'ebitda_11_balance2',
      ebitda_11_balance3: 'ebitda_11_balance3',
      ebitda_16_balance1: 'ebitda_16_balance1',
      ebitda_16_balance2: 'ebitda_16_balance2',
      ebitda_16_balance3: 'ebitda_16_balance3',
      ebitda_12_balance1: 'ebitda_12_balance1',
      ebitda_12_balance2: 'ebitda_12_balance2',
      ebitda_12_balance3: 'ebitda_12_balance3',
      explotacion_13_balance1: 'explotacion_13_balance1',
      explotacion_13_balance2: 'explotacion_13_balance2',
      explotacion_13_balance3: 'explotacion_13_balance3',
      explotacion_18_balance1: 'explotacion_18_balance1',
      explotacion_18_balance2: 'explotacion_18_balance2',
      explotacion_18_balance3: 'explotacion_18_balance3',
      explotacion_19_balance1: 'explotacion_19_balance1',
      explotacion_19_balance2: 'explotacion_19_balance2',
      explotacion_19_balance3: 'explotacion_19_balance3',
      explotacion_20_balance1: 'explotacion_20_balance1',
      explotacion_20_balance2: 'explotacion_20_balance2',
      explotacion_20_balance3: 'explotacion_20_balance3',
      explotacion_21_balance1: 'explotacion_21_balance1',
      explotacion_21_balance2: 'explotacion_21_balance2',
      explotacion_21_balance3: 'explotacion_21_balance3',
      explotacion_22_balance1: 'explotacion_22_balance1',
      explotacion_22_balance2: 'explotacion_22_balance2',
      explotacion_22_balance3: 'explotacion_22_balance3',
      explotacion_23_balance1: 'explotacion_23_balance1',
      explotacion_23_balance2: 'explotacion_23_balance2',
      explotacion_23_balance3: 'explotacion_23_balance3',
      explotacion_24_balance1: 'explotacion_24_balance1',
      explotacion_24_balance2: 'explotacion_24_balance2',
      explotacion_24_balance3: 'explotacion_24_balance3',
      explotacion_25_balance1: 'explotacion_25_balance1',
      explotacion_25_balance2: 'explotacion_25_balance2',
      explotacion_25_balance3: 'explotacion_25_balance3',
      explotacion_26_balance1: 'explotacion_26_balance1',
      explotacion_26_balance2: 'explotacion_26_balance2',
      explotacion_26_balance3: 'explotacion_26_balance3',
      auditoria: 'auditoria'
    },
    loading: false,
    error: false,
    saveSuccess: false,
    saveLoading: false,
    saveError: null,
    acceptSuccess: false,
    acceptLoading: false,
    acceptError: null
  }

  const handleSubmit = (): void => { alert('submit') }

  return (
    <ReportPortugal
      i18n={i18n}
      balanceOrigenOpt={initialState.balanceOrigenOpt}
      validateActivoNoCorriente={validateActivoNoCorriente}
      validatePatrimonioNeto={validatePatrimonioNeto}
      validatePasivoNoCorriente={validatePasivoNoCorriente}
      validatePasivoCorriente={validatePasivoCorriente}
      validateTotalPasivo={validateTotalPasivo}
      validateVentas={validateVentas}
      validateEbitda={validateEbitda}
      validateExplotacion={validateExplotacion}
      formValues={initialState.formValues}
      formLoading={initialState.loading}
      formRecoverDataError={initialState.error}
      handleCancel={cancel}
      handleSave={save}
      saveSuccess={initialState.saveSuccess}
      saveLoading={initialState.saveLoading}
      handleAccept={accept}
      acceptSuccess={initialState.acceptSuccess}
      acceptLoading={initialState.acceptLoading}
      handleSubmit={handleSubmit}
    />
  )
}

storiesOf('Components|Templates.ReportPortugal', module)
  .addDecorator(withThemeProvider)
  .add('Empty', () => <EmptyReportPortugal />)
  .add('Interactive', () => <MetaReportPortugal />)
  .add('Filled', () => <FilledReportPortugal />)
