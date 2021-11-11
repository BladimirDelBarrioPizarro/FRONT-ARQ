import produce from 'immer'
import { call, lang, log } from '@cesce/arq'
import { errorController, ExcepcionFormato } from '../../config/error-config'
import { getSortedData, formatPage } from '../../config/pageUtilities'

// Actions Types
const CONSULTREPORTS_LOADING = 'cesdata/consultreports/loading'
const CONSULTREPORTS_ERROR = 'cesdata/consultreports/error'
const CONSULTREPORTS_CLEAN = 'cesdata/consultreports/clean'
const CONSULTREPORTS_CLOSE_MODAL_ERROR = 'cesdata/consultreports/error/close'
const REPORTS_ADVANCED_SEARCH_SUCCESS = 'cesdata/consultreports/advanced/reports_search_success'
const BUSINESS_INFORMATION_SEARCH_SUCCESS = 'cesdata/consultreports/information/business_search_success'
const CONSULTREPORTS_SEARCH_SUCCESS = 'cesdata/consultreports/cr_search_success'
const BUSINESS_ADVANCED_SEARCH_SUCCESS = 'cesdata/consultreports/advanced/business_search_success'
const BUSINESS_ADVANCED_SEARCH_CLEAN = 'cesdata/consultreports/information/business_search_clean'
const BUSINESS_BASE_REPORT_SUCCESS = 'cesdata/consultreports/basereport/base_report_success'
const BUSINESS_CLEAN_TABLE = 'cesdata/reportreferences/business_clean_table'

// Actions creators
export const consultReportsSearchRequest = (params): any => {
  return {
    type: CONSULTREPORTS_SEARCH_SUCCESS,
    payload: {
      data: params.data
    }
  }
}

const reportsSearchSuccessAdvanced = ({
  data,
  totalRows,
  rowsPerPage,
  page
}): any => {
  return {
    type: REPORTS_ADVANCED_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage,
      page
    }
  }
}

const checkItemsAdvance = (searchFormData): boolean => {
  log.trace(`checkItemsAdvance: ${JSON.stringify(searchFormData)}`)
  if (searchFormData.debtor !== '' && parseInt(searchFormData.debtor, 10) !== 0) {
    return true
  }

  if (searchFormData.agency !== '' && searchFormData.agency !== '0') {
    return true
  }
  if (searchFormData.fiscal !== '' && searchFormData.fiscal !== '0') {
    return true
  }
  if (searchFormData.fromDate !== '') {
    return true
  }
  if (searchFormData.toDate !== '') {
    return true
  }
  const i18n = lang.currentLanguage()
  ExcepcionFormato(i18n['AdvancedInformation:requiredParamsError'])
}
const checkParams = (params): boolean => {
  log.trace(`checkParams: ${JSON.stringify(params)}`)
  if ((params.codDeudor === undefined || parseInt(params.codDeudor, 10) === 0) &&
    (params.agency === undefined || params.agency === '') &&
    (params.codFiscal === undefined || params.codFiscal === '') &&
    (params.fechaDesde === undefined || params.fechaDesde === '') &&
    (params.fechaHasta === undefined || params.fechaHasta === '')
  ) {
    return false
  }
  return true
}

const checkDebtor = (searchFormData, params): any => {
  if (searchFormData.debtor !== '' && parseInt(searchFormData.debtor, 10) !== 0) {
    params.codDeudor = searchFormData.debtor.replace('-', '')
  } else {
    delete params.codDeudor
  }
  return params
}

const checkAgency = (searchFormData, params): any => {
  if (searchFormData.agency !== '' && searchFormData.agency !== '0') {
    params.codAgencia = searchFormData.agency
  } else {
    delete params.agency
  }
  return params
}

const checkCodFiscal = (searchFormData, params): any => {
  if (searchFormData.fiscal !== '' && searchFormData.fiscal !== '0') {
    params.codFiscal = searchFormData.fiscal
  } else {
    delete params.codFiscal
  }
  return params
}

const checkFromDate = (searchFormData, params): any => {
  if (searchFormData.fromDate !== '') {
    params.fechaDesde = searchFormData.fromDate
  } else {
    delete params.fechaDesde
  }
  return params
}

const checkToDate = (searchFormData, params): any => {
  if (searchFormData.toDate !== '') {
    params.fechaHasta = searchFormData.toDate
  } else {
    delete params.fechaHasta
  }
  return params
}

const reportCleanDataBusiness = (): any => {
  return {
    type: BUSINESS_CLEAN_TABLE
  }
}

interface IDateTimeFormatOptions {
  year: 'numeric'
  month: '2-digit'
  day: '2-digit'
}

const options: IDateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}

const formatDate: any = (fecha) => {
  var value = fecha.replace(/^(0+)/g, '')
  if (value.length >= 10) {
    const date = (value !== null && value !== '') ? new Date(value) : new Date()
    return date.toLocaleDateString('es-ES', options).toString()
  } else {
    return ''
  }
}

const checkDataRange = (searchFormData): any => {
  return (Date.parse(searchFormData.fromDate) > Date.parse(searchFormData.toDate))
}

const buildParams = (
  override,
  searchFormData,
  last,
  rowsPerPage,
  page,
  sortedType,
  sortedBy
): any => {
  var params: any = {}
  params.ultimoInforme = last
  params.itemsPorPagina = rowsPerPage
  params.paginaActual = formatPage(page)
  params.tipoOrdenacion = sortedType
  params.ordenarPor = sortedBy
  if (override) {
    if (!checkItemsAdvance(searchFormData)) {
      return
    }
    params = checkDebtor(searchFormData, params)
    params = checkAgency(searchFormData, params)
    params = checkCodFiscal(searchFormData, params)
    params = checkFromDate(searchFormData, params)
    params = checkToDate(searchFormData, params)
  }
  return params
}

export const reportsSearchRequestAdvanced = (
  override,
  searchFormData,
  last,
  rowsPerPage,
  page,
  sortedType,
  sortedBy
) => {
  return async (dispatch) => {
    const i18n = lang.currentLanguage()
    const params = buildParams(override, searchFormData, last, rowsPerPage, page, sortedType, sortedBy)
    if (checkDataRange(searchFormData)) {
      dispatch(
        consultReportErrorAdvanced(
          errorController(i18n['AdvancedInformation:errorDataRange'])
        )
      )
    } else {
      try {
        log.trace(`reportsSearchRequestAdvanced: ${JSON.stringify(params)}`)
        if (checkParams(params)) {
          searchFormData.fromDate = formatDate(searchFormData.fromDate)
          searchFormData.toDate = formatDate(searchFormData.toDate)
          dispatch({ type: CONSULTREPORTS_LOADING })
          log.info(`REST GET reports with params: ${JSON.stringify(params)}`)
          const { data } = await call.api.reports.get(params)
          log.info(`REST GET reports response: ${JSON.stringify(data)}`)
          dispatch(reportsSearchSuccessAdvanced({
            data: data.payload,
            totalRows: data.totalRegistros,
            rowsPerPage: rowsPerPage,
            page: page
          }))
        }
      } catch (error) {
        log.error(`ERROR REST GET reports with params: ${JSON.stringify(params)}`, {
          error: error
        })
        dispatch(
          consultReportErrorAdvanced(
            errorController(error)
          )
        )
      }
    }
  }
}

const businessSearchSuccessInformation = ({
  data,
  totalRows,
  rowsPerPage,
  page,
  sortedBy,
  sortedType
}): any => {
  return {
    type: BUSINESS_INFORMATION_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage,
      page,
      sortedBy,
      sortedType
    }
  }
}

const checkItemsBusinessSearchRequestInformation = (country, companyName, companyId): boolean => {
  log.trace(`checkItemsBusinessSearchRequestInformation: ${country}, ${companyName}, ${companyId}`)
  if (country !== '') {
    if (companyName !== '') {
      return true
    }
    if (companyId !== '') {
      return true
    }
  }
  return false
}

export const businessSearchRequestInformation = (
  country,
  companyName,
  companyId,
  rowsPerPage,
  page,
  sortedType,
  sortedBy
) => {
  return async (dispatch) => {
    dispatch(reportCleanDataBusiness())
    try {
      const i18n = lang.currentLanguage()
      if (!checkItemsBusinessSearchRequestInformation(country, companyName, companyId)) { return }

      log.trace(`businessSearchRequestInformation: ${country}, ${companyName}, ${companyId}`)
      dispatch({ type: CONSULTREPORTS_LOADING })
      log.info(`REST GET to company with params: ${JSON.stringify({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })}`)
      const data = await call.api.business.get({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })
      log.info(`REST GET company response: ${JSON.stringify(data)}`)
      if (data.data.payload.length > (page * rowsPerPage)) {
        dispatch(businessSearchSuccessInformation({
          data: data.data.payload,
          totalRows: rowsPerPage * 2,
          rowsPerPage: rowsPerPage,
          page: page,
          sortedBy: sortedBy,
          sortedType: sortedType
        }))
      } else {
        dispatch(
          consultReportErrorAdvanced(
            errorController(i18n['AdvancedInformation:errorDataNotFound'])
          )
        )
      }
    } catch (error) {
      log.error(`ERROR REST GET to company with params: ${JSON.stringify({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })}`, {
        error: error
      })
      dispatch(
        consultReportErrorAdvanced(
          errorController(error)
        )
      )
    }
  }
}

const businessSearchSuccessAdvanced = ({
  data,
  rowsPerPage,
  page
}): any => {
  return {
    type: BUSINESS_ADVANCED_SEARCH_SUCCESS,
    payload: {
      data,
      rowsPerPage,
      page
    }
  }
}

const consultReportErrorAdvanced = (error): any => {
  return {
    type: CONSULTREPORTS_ERROR,
    payload: {
      error: error
    }
  }
}

const checkItemsBusinessSearchRequestAdvanced = (companyFormData): boolean => {
  log.trace(`checkItemsBusinessSearchRequestAdvanced: ${JSON.stringify(companyFormData)}`)
  if (companyFormData.country !== '') {
    if (companyFormData.name !== '') {
      return true
    }
    if (companyFormData.cif !== '') {
      return true
    }
  }

  return false
}

export const businessSearchRequestAdvanced = (
  companyFormData,
  rowsPerPage,
  page
) => {
  return async (dispatch) => {
    try {
      log.trace(`businessSearchRequestAdvanced: ${JSON.stringify(companyFormData)}`)
      if (!checkItemsBusinessSearchRequestAdvanced) { return }
      dispatch({ type: CONSULTREPORTS_LOADING })
      log.info(`REST GET to company with params: ${JSON.stringify({
        codPais: companyFormData.country,
        nombre: companyFormData.name,
        cif: companyFormData.cif,
        rowsPerPage,
        page
      })}`)
      const { data } = await call.api.business.get({
        codPais: companyFormData.country,
        nombre: companyFormData.name,
        cif: companyFormData.cif,
        rowsPerPage,
        page
      })
      log.info(`REST GET company response: ${JSON.stringify(data)}`)
      dispatch(businessSearchSuccessAdvanced({
        data: data.payload,
        rowsPerPage: rowsPerPage,
        page: page
      }))
    } catch (error) {
      dispatch(
        log.error(`ERROR REST GET company with params: ${JSON.stringify(companyFormData)}`, {
          error: error
        }),
        consultReportErrorAdvanced(
          errorController(error)
        )
      )
    }
  }
}

export const baseReportsSearchSuccess = (
  data
): any => {
  return {
    type: BUSINESS_BASE_REPORT_SUCCESS,
    payload: {
      data
    }
  }
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: CONSULTREPORTS_CLOSE_MODAL_ERROR })
  }
}

export const cleanData = () => {
  return async (dispatch) => {
    dispatch({ type: CONSULTREPORTS_CLEAN })
  }
}

export const businessSearchRequestCleanDrawerInformation = () => {
  return async (dispatch) => {
    dispatch({ type: BUSINESS_ADVANCED_SEARCH_CLEAN })
  }
}

// Initial State
const initialState = {
  loading: false,
  error: {
    open: false,
    message: ''
  },
  businessInformation: {
    data: [],
    totalRows: 20,
    rowsPerPage: 10,
    orderBy: '',
    orderType: '',
    page: 0
  },
  reportsAdvanced: {
    data: [],
    totalRows: 20,
    rowsPerPage: 10
  },
  businessAdvanced: {
    data: [],
    totalRows: 20,
    rowsPerPage: 10,
    orderBy: '',
    orderType: '',
    page: 0
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case CONSULTREPORTS_LOADING:
      draft.loading = true
      break
    case CONSULTREPORTS_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.error
      break
    case BUSINESS_CLEAN_TABLE:
      draft.businessInformation.data = []
      break
    case CONSULTREPORTS_CLEAN:
      draft.businessAdvanced.data = []
      draft.businessInformation.data = []
      draft.reportsAdvanced.data = []
      break
    case BUSINESS_ADVANCED_SEARCH_CLEAN:
      draft.businessInformation.data = []
      break
    case CONSULTREPORTS_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case BUSINESS_INFORMATION_SEARCH_SUCCESS:
      draft.loading = false
      draft.businessInformation.totalRows = action.payload.totalRows
      draft.businessInformation.rowsPerPage = action.payload.rowsPerPage
      draft.businessInformation.page = action.payload.page
      draft.businessInformation.sortedType = action.payload.sortedType
      draft.businessInformation.data = mapBussinesProprs(action.payload.data,
        action.payload.sortedBy,
        action.payload.sortedType,
        action.payload.rowsPerPage,
        action.payload.page) ?? action.payload.data
      break
    case REPORTS_ADVANCED_SEARCH_SUCCESS:
      draft.loading = false
      draft.reportsAdvanced.data = action.payload.data
      draft.reportsAdvanced.totalRows = action.payload.totalRows
      draft.reportsAdvanced.rowsPerPage = action.payload.rowsPerPage
      draft.reportsAdvanced.page = action.payload.page
      break
    case BUSINESS_ADVANCED_SEARCH_SUCCESS:
      draft.loading = false
      draft.businessAdvanced.rowsPerPage = action.payload.rowsPerPage
      draft.businessAdvanced.page = action.payload.page
      draft.businessAdvanced.sortedType = action.payload.sortedType
      draft.businessAdvanced.data = mapBussinesProprs(action.payload.data,
        action.payload.sortedBy,
        action.payload.sortedType,
        action.payload.rowsPerPage,
        action.payload.page) ?? action.payload.data
      break
  }
}, initialState)
// Selectors
export const selectTableReportsPropsAdvanced = (state): any => {
  return ({
    data: state.consultreports.reportsAdvanced.data,
    totalRows: state.consultreports.reportsAdvanced.totalRows,
    rowsPerPage: state.consultreports.reportsAdvanced.rowsPerPage
  })
}

export const selectTableBusinessPropsInformation = (state): any => {
  return ({
    data: state.consultreports.businessInformation.data,
    totalRows: state.consultreports.businessInformation.rowsPerPage * 2,
    rowsPerPage: state.consultreports.businessInformation.rowsPerPage,
    page: state.consultreports.businessInformation.page,
    sortedBy: state.consultreports.businessInformation.sortedBy,
    sortedType: state.consultreports.businessInformation.sortedType
  })
}

export const selectTableBusinessPropsAdvanced = (state): any => {
  return ({
    data: state.consultreports.businessAdvanced.data,
    totalRows: state.consultreports.businessAdvanced.rowsPerPage * 2,
    rowsPerPage: state.consultreports.businessAdvanced.rowsPerPage,
    sortedBy: state.consultreports.businessAdvanced.sortedBy,
    sortedType: state.consultreports.businessAdvanced.sortedType
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.consultreports.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.consultreports.error
  })
}

// mapeos y formatos
const mapBussinesProprs = (data, sortedBy, sortedType, rowsPerPage, page): any => {
  log.trace(`Order response by: ${sortedBy}, ${sortedType}, ${rowsPerPage}, ${page}`)
  return getSortedData(data, sortedBy, sortedType === 'ASC')
    .slice((parseInt(page) * parseInt(rowsPerPage)), (parseInt(page) * parseInt(rowsPerPage)) + parseInt(rowsPerPage))
}

// namespace "consultreports"
export default { consultreports: reducer }
