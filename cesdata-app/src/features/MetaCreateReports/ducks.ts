import produce from 'immer'
import { call, log, lang } from '@cesce/arq'
import { errorController } from '../../config/error-config'
import { getSortedData } from '../../config/pageUtilities'

// Actions Types
const CREATE_REPORT_CLOSE_MODAL_ERROR = 'cesdata/createReport/error/close'
const CREATE_REPORT_LOADING = 'cesdata/createReport/loading'
const CREATE_REPORT_ERROR = 'cesdata/createReport/error'
const CREATE_REPORT_REQUEST_SUCCESS = 'cesdata/createReport/createReport_send_search_success'
const BUSINESS_SEARCH_SUCCESS = 'cesdata/createReport/business_search_success'
const CORRESPONDENTS_SEARCH_SUCCESS = 'cesdata/createReport/correspondents_search_success'
const BUSINESS_CLEAN_TABLE = 'cesdata/reportreferences/business_clean_table'

// Actions creators
const checkItemsCreateReportRequest = (params): boolean => {
  if (params.debtor !== '') {
    return true
  }

  if (params.typeDocument !== '') {
    return true
  }

  if (params.dateRecept !== '') {
    return true
  }

  if (params.petitionNumber !== '') {
    return true
  }

  if (params.codCorrespondent !== '') {
    return true
  }

  if (params.productCode !== '') {
    return true
  }

  if (params.saleType !== '') {
    return true
  }

  return false
}

export const checkReportRequest = (params) => {
  return async (dispatch) => {
    try {
      if (checkItemsCreateReportRequest(params)) {
        const i18n = lang.currentLanguage()
        dispatch(createReportRequestError(i18n['AdvancedInformation:requiredParamsError']))
      }
    } catch (error) {
      log.error(`ERROR before POST check report params empty validation: ${JSON.stringify(params)}`, {
        error: error
      })
    }
  }
}

export const createReportRequest = (params) => {
  return async (dispatch) => {
    try {
      log.trace(`createReportRequest: ${JSON.stringify(params)}`)
      if (!checkItemsCreateReportRequest(params)) { return }
      var FormData = require('form-data')
      const formData = new FormData()
      formData.append('documento', params.file[0], params.file[0].name)

      let formulario = ''

      if (params.debtor !== '') {
        formulario = formulario + `"codDeudor": "${params.debtor.replace('-', '')}",`
      }

      if (params.typeDocument !== '') {
        formulario = formulario + `"tipoDocumento": "${params.typeDocument}",`
      }

      if (params.dateRecept !== '') {
        formulario = formulario + `"fechaRecepcion": "${params.dateRecept}",`
      }

      if (params.petitionNumber !== '') {
        formulario = formulario + `"numPeticion": "${params.petitionNumber}",`
      }

      if (params.codCorrespondent !== '') {
        formulario = formulario + `"codCorresponsal": "${params.codCorrespondent}",`
      }

      if (params.productCode !== '') {
        formulario = formulario + `"codProducto": "${params.productCode}",`
      }

      if (params.saleType !== '') {
        formulario = formulario + `"tipoGasto": "${params.saleType}",`
      }
      formulario = '{' + formulario.substr(0, formulario.length - 1) + '}'

      var blobForm = new Blob([formulario], { type: 'application/json' })

      formData.append('informe', blobForm)
      const config = {
        headers: {
          'Content-type': 'multipart/form-data;'
        }
      }
      dispatch({ type: CREATE_REPORT_LOADING })

      log.info(`REST POST create report with params: ${formulario}`)
      const data = await call.api.reports.post(formData, config)
      log.info(`REST POST create reports response: ${JSON.stringify(data)}`)
      dispatch(createReportRequestSuccess())
      clearForm()
    } catch (error) {
      log.error(`ERROR POST create report with params: ${JSON.stringify(params)}`, {
        error: error
      })
      dispatch(
        createReportRequestError(
          errorController(error)
        )
      )
    }
  }
}

const clearForm = (): void => {
  const debtor = document.getElementById('debtor') as HTMLInputElement
  const documentType = document.getElementById('documentType') as HTMLInputElement
  const productCode = document.getElementById('productCode') as HTMLInputElement
  const saleType = document.getElementById('saleType') as HTMLInputElement
  const petitionNumber = document.getElementById('petitionNumber') as HTMLInputElement
  const corresponsal = document.getElementById('corresponsal') as HTMLInputElement
  const dateRecept = document.getElementById('dateRecept') as HTMLInputElement
  const documentName = document.getElementById('document-name') as HTMLInputElement
  debtor.value = ''
  documentType.value = ''
  productCode.value = ''
  saleType.value = ''
  petitionNumber.value = ''
  corresponsal.value = ''
  dateRecept.value = ''
  documentName.value = ''
  documentName.parentElement.children[1].children[0].children[0].children[1].innerHTML = 'Examinar :'
}

export const createReportRequestSuccess = (): any => {
  return {
    type: CREATE_REPORT_REQUEST_SUCCESS,
    payload: {
    }
  }
}

const createReportRequestError = (error): any => {
  return {
    type: CREATE_REPORT_ERROR,
    payload: {
      error: error
    }
  }
}

const reportCleanDataBusiness = (): any => {
  return {
    type: BUSINESS_CLEAN_TABLE
  }
}

const checkItemsBusinessSearchRequest = (country, companyId, companyName): boolean => {
  if (country !== '') {
    if (companyId !== '') {
      return true
    }
    if (companyName !== '') {
      return true
    }
  }

  return false
}

export const businessSearchRequest = (
  companyId,
  companyName,
  country,
  rowsPerPage,
  page,
  sortedType,
  sortedBy
) => {
  return async (dispatch) => {
    try {
      log.trace(`businessSearchRequest: ${JSON.stringify(companyId, companyName, country)}`)
      dispatch(reportCleanDataBusiness())
      if (!checkItemsBusinessSearchRequest(country, companyId, companyName)) { return }
      dispatch({ type: CREATE_REPORT_LOADING })
      log.info(`REST GET to company with params: ${JSON.stringify({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: page,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })}`)
      const data = await call.api.business.get({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: page,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })
      log.info(`REST GET company response: ${JSON.stringify(data)}`)
      dispatch(businessSearchSuccess({
        data: data.data.payload,
        totalRows: data.data.payload.length,
        rowsPerPage: rowsPerPage,
        page: page
      }))
    } catch (error) {
      log.error(`ERROR GET company response with params: ${JSON.stringify(companyId, companyName, country)}`, {
        error: error
      })
      dispatch(
        createReportRequestError(
          errorController(error)
        )
      )
    }
  }
}

const businessSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage,
  page
}): any => {
  return {
    type: BUSINESS_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage,
      page
    }
  }
}

const checkItemsCorrespondentsSearchRequest = (country): boolean => {
  if (country !== '') {
    return true
  }

  return false
}

export const correspondentsSearchRequest = (
  country
) => {
  return async (dispatch) => {
    try {
      log.trace(`correspondentsSearchRequest: ${JSON.stringify(country)}`)
      if (!checkItemsCorrespondentsSearchRequest(country)) { return }
      dispatch({ type: CREATE_REPORT_LOADING })
      log.info(`REST GET to correspondents with params: ${JSON.stringify({
        codPais: country,
        itemsPorPagina: 50,
        paginaActual: 0,
        ordenarPor: 'ASC',
        tipoOrdenacion: 'ASC'
      })}`)
      const { data } = await call.api.correspondents.get({
        codPais: country,
        itemsPorPagina: 50,
        paginaActual: 0,
        ordenarPor: 'ASC',
        tipoOrdenacion: 'ASC'
      })
      log.info(`REST GET correspondents response: ${JSON.stringify(data)}`)
      dispatch(correspondentsSearchSuccess({
        data: data.payload
      }))
    } catch (error) {
      log.error(`ERROR GET correspondents with params: ${JSON.stringify(country)}`, {
        error: error
      })
      dispatch(
        createReportRequestError(
          errorController(error)
        )
      )
    }
  }
}

const correspondentsSearchSuccess = ({
  data
}): any => {
  return {
    type: CORRESPONDENTS_SEARCH_SUCCESS,
    payload: {
      data
    }
  }
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: CREATE_REPORT_CLOSE_MODAL_ERROR })
  }
}

// Initial State
const initialState = {
  loading: false,
  error: {
    open: false,
    message: ''
  },
  business: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    sortedBy: '',
    sortedType: '',
    page: 0
  },
  correspondents: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    orderBy: '',
    orderType: '',
    page: 0
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case CREATE_REPORT_LOADING:
      draft.loading = true
      break
    case CREATE_REPORT_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.error
      break
    case CREATE_REPORT_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case CREATE_REPORT_REQUEST_SUCCESS:
      draft.loading = false
      break
    case BUSINESS_CLEAN_TABLE:
      draft.business.data = []
      break
    case BUSINESS_SEARCH_SUCCESS:
      draft.loading = false
      draft.business.totalRows = action.payload.totalRows
      draft.business.page = action.payload.page
      draft.business.rowsPerPage = action.payload.rowsPerPage
      draft.business.sortedBy = action.payload.sortedBy
      draft.business.sortedType = action.payload.sortedType
      draft.business.data = mapBussinesProprs(action.payload.data,
        action.payload.sortedBy,
        action.payload.sortedType,
        action.payload.rowsPerPage,
        action.payload.page) ?? action.payload.data
      break
    case CORRESPONDENTS_SEARCH_SUCCESS:
      draft.loading = false
      draft.correspondents.data = getData({ codCorresponsal: 'value', nombreCorresponsal: 'label' }, action.payload.data)
      break
  }
}, initialState)

// Selectors
export const selectTableBusinessProps = (state): any => {
  return ({
    data: state.createReports.business.data,
    totalRows: state.createReports.business.totalRows,
    rowsPerPage: state.createReports.business.rowsPerPage,
    page: state.createReports.business.page,
    sortedBy: state.createReports.business.sortedBy,
    sortedType: state.createReports.business.sortedType
  })
}

// Selectors
export const selectTableCorrespondondentsProps = (state): any => {
  return ({
    data: state.createReports.correspondents.data,
    rowsPerPage: state.createReports.correspondents.rowsPerPage,
    page: state.createReports.correspondents.page,
    sortedBy: state.createReports.correspondents.sortedBy,
    sortedType: state.createReports.correspondents.sortedType
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.createReports.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.createReports.error
  })
}

const mapBussinesProprs = (
  data,
  sortedBy,
  sortedType,
  rowsPerPage,
  page
): any => {
  return getSortedData(data, sortedBy, sortedType === 'ASC')
    .slice((parseInt(page) * parseInt(rowsPerPage)), (parseInt(page) * parseInt(rowsPerPage)) + parseInt(rowsPerPage))
}

const getData = (keysMap, arr): any => arr.map(obj => changeKeys(keysMap, obj))
const changeKeys = (keysMap, obj): any =>
  Object.keys(obj).reduce((acc, key) => {
    const renamedObject = {
      [keysMap[key] || key]: obj[key]
    }
    return {
      ...acc,
      ...renamedObject
    }
  }, {})

// namespace "createReports"
export default { createReports: reducer }
