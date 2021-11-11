import produce from 'immer'
import { call, lang, log } from '@cesce/arq'
import { errorController, ExcepcionFormato } from '../../config/error-config'
import { formatPage, getSortedData } from '../../config/pageUtilities'

// Actions Types
const MASIVE_GESTION_CLOSE_MODAL_ERROR = 'cesdata/masiveGestion/error/close'
const MASIVE_GESTION_LOADING = 'cesdata/masiveGestion/loading'
const MASIVE_GESTION_CLEANING = 'cesdata/masiveGestion/cleaning'
const MASIVE_GESTION_BUSINESS_CLEANING = 'cesdata/masiveGestion/business_search_cleaning'
const MASIVE_GESTION_ERROR = 'cesdata/masiveGestion/error'
const MASIVE_GESTION_SEND_SEARCH_SUCCESS = 'cesdata/masiveGestion/masiveGestion_send_search_success'
const MASIVE_GESTION_DELETE_SUCCESS = 'cesdata/masiveGestion/masiveGestion_delete_success'
const MASIVE_GESTION_COPY_SUCCESS = 'cesdata/masiveGestion/masiveGestion_copy_success'
const MASIVE_GESTION_MOVE_SUCCESS = 'cesdata/masiveGestion/masiveGestion_move_success'
const BUSINESS_SEARCH_SUCCESS = 'cesdata/masiveGestion/business_search_success'
const MASIVE_GESTION_CLEANING_REPORTS = 'cesdata/masiveGestion/business_search_cleaning_reports'

let queryData = {
  codDeudorOrigen: '',
  itemsPorPagina: '',
  paginaActual: '',
  ordenarPor: '',
  tipoOrdenacion: ''
}

// Actions creators
export const masiveGestionSendSearchRequest = (debtorFrom, rowsPerPage, page, sortedBy, sortedType) => {
  return async (dispatch) => {
    try {
      log.trace(`masiveGestionSendSearchRequest: ${JSON.stringify(debtorFrom)}`)
      queryData = {
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      }
      dispatch({ type: MASIVE_GESTION_LOADING })
      dispatch({ type: MASIVE_GESTION_CLEANING_REPORTS })
      log.info(`REST GET masive with params: ${JSON.stringify(queryData)}`)
      const { data } = await call.api.masiveGestion.get(queryData)
      log.info(`REST GET masive response: ${JSON.stringify(data)}`)
      if (data.payload.length === 0) {
        const i18n = lang.currentLanguage()
        ExcepcionFormato(i18n['MasiveGestion:notFoundsError'])
      }
      dispatch(masiveGestionSendSearchSuccess({
        data: data.payload,
        totalRows: data.totalRegistros,
        rowsPerPage: rowsPerPage,
        page
      }))
    } catch (error) {
      log.error(`ERROR REST GET masive with params:  ${JSON.stringify(queryData)}`, {
        error: error
      })
      dispatch(
        masiveGestionError(
          errorController(error)
        )
      )
    }
  }
}

// Actions creators
export const masiveGestionReSearchRequest = () => {
  return async (dispatch) => {
    try {
      log.trace(`checkItemsBusinessSearchRequestAdvanced: ${JSON.stringify(queryData)}`)
      dispatch({ type: MASIVE_GESTION_LOADING })
      dispatch({ type: MASIVE_GESTION_CLEANING_REPORTS })
      dispatch({ type: MASIVE_GESTION_CLEANING })
      log.info(`REST GET masive with params: ${JSON.stringify(queryData)}`)
      const { data } = await call.api.masiveGestion.get(queryData)
      log.info(`REST GET masive response: ${JSON.stringify(data)}`)
      if (data.payload.length === 0) {
        const i18n = lang.currentLanguage()
        ExcepcionFormato(i18n['MasiveGestion:notFoundsError'])
      }
      dispatch(masiveGestionSendSearchSuccess({
        data: data.payload,
        totalRows: data.totalRegistros,
        rowsPerPage: queryData.itemsPorPagina,
        page: 0
      }))
    } catch (error) {
      log.error(`REST GET masive with params: ${JSON.stringify(queryData)}`, {
        error: error
      })
      dispatch(
        masiveGestionError(
          errorController(error)
        )
      )
    }
  }
}

const checkReports = (reports): void => {
  log.trace(`checkReports: ${JSON.stringify(reports)}`)
  if (reports.length === 0) {
    const i18n = lang.currentLanguage()
    ExcepcionFormato(i18n['MasiveGestion:requiredParamsError'])
  }
}

export const masiveGestionDeleteRequest = (debtorFrom, reports) => {
  return async (dispatch) => {
    try {
      log.trace(`masiveGestionDeleteRequest: ${JSON.stringify(debtorFrom, reports)}`)
      checkReports(reports)
      const called = Object.assign({}, call.api.reportsDelete)
      called.delete.requestConfig.url = `?codDeudor=${debtorFrom.replace('-', '').padStart(9, '0')}&creicas=${reports}`
      dispatch({ type: MASIVE_GESTION_LOADING })
      log.info(`REST DELETE masive with params: ${called.delete.requestConfig.url}`)
      const { data } = await call.api.reportsDelete.delete({ })
      log.info(`REST DELETE masive response: ${JSON.stringify(data)}`)
      called.delete.requestConfig.url = ''
      dispatch(masiveGestionSuccess(MASIVE_GESTION_DELETE_SUCCESS))
      dispatch(masiveGestionReSearchRequest())
    } catch (error) {
      log.error(`ERROR DELETE masive with params:  ${JSON.stringify(debtorFrom, reports)}`, {
        error: error
      })
      dispatch(
        masiveGestionError(
          errorController(error)
        )
      )
    }
  }
}

export const masiveGestionMoveRequest = (debtorFrom, debtorTo, reports) => {
  return async (dispatch) => {
    try {
      log.trace(`masiveGestionMoveRequest: ${JSON.stringify(debtorFrom, debtorTo, reports)}`)
      checkReports(reports)
      dispatch({ type: MASIVE_GESTION_LOADING })
      log.info(`REST PUT(move) masive with params: ${JSON.stringify({
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        codDeudorDestino: debtorTo.replace('-', '').padStart(9, '0'),
        accion: 'MOVE',
        creicas: reports
      })}`)
      const { data } = await call.api.reports.put({
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        codDeudorDestino: debtorTo.replace('-', '').padStart(9, '0'),
        accion: 'MOVE',
        creicas: reports
      })
      log.info(`REST PUT(move) masive response: ${JSON.stringify(data)}`)
      dispatch(masiveGestionSuccess(MASIVE_GESTION_DELETE_SUCCESS))
      dispatch(masiveGestionReSearchRequest())
    } catch (error) {
      log.error(`ERROR REST PUT(move) masive with params: ${JSON.stringify({
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        codDeudorDestino: debtorTo.replace('-', '').padStart(9, '0'),
        accion: 'MOVE',
        creicas: reports
      })}`, {
        error: error
      })
      dispatch(
        masiveGestionError(
          errorController(error)
        )
      )
    }
  }
}
export const masiveGestionCopyRequest = (debtorFrom, debtorTo, reports) => {
  return async (dispatch) => {
    try {
      log.trace(`masiveGestionCopyRequest: ${JSON.stringify(debtorFrom, debtorTo, reports)}`)
      checkReports(reports)
      dispatch({ type: MASIVE_GESTION_LOADING })
      log.info(`REST PUT(copy) masive with params: ${JSON.stringify({
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        codDeudorDestino: debtorTo.replace('-', '').padStart(9, '0'),
        accion: 'COPY',
        creicas: reports
      })}`)
      const { data } = await call.api.reports.put({
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        codDeudorDestino: debtorTo.replace('-', '').padStart(9, '0'),
        accion: 'COPY',
        creicas: reports
      })
      log.info(`REST PUT(copy) masive response: ${JSON.stringify(data)}`)
      dispatch(masiveGestionSuccess(MASIVE_GESTION_DELETE_SUCCESS))
      dispatch(masiveGestionReSearchRequest())
    } catch (error) {
      log.error(`REST PUT(copy) masive with params: ${JSON.stringify({
        codDeudorOrigen: debtorFrom.replace('-', '').padStart(9, '0'),
        codDeudorDestino: debtorTo.replace('-', '').padStart(9, '0'),
        accion: 'COPY',
        creicas: reports
      })}`, {
        error: error
      })
      dispatch(
        masiveGestionError(
          errorController(error)
        )
      )
    }
  }
}

export const masiveGestionSendSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage,
  page
}): any => {
  return {
    type: MASIVE_GESTION_SEND_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage,
      page
    }
  }
}

export const masiveGestionSuccess = (type): any => {
  return {
    type: type,
    payload: {
    }
  }
}

const checkItemsBusinessSearchRequest = (country, companyId, companyName): boolean => {
  log.trace(`checkItemsBusinessSearchRequest:  ${country}, ${companyId}, ${companyName}`)
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
      log.trace(`businessSearchRequest: ${JSON.stringify(country, companyId, companyName)}`)
      if (!checkItemsBusinessSearchRequest(country, companyId, companyName)) { return }
      dispatch({ type: MASIVE_GESTION_LOADING })
      log.info(`REST GET company with params: ${JSON.stringify({
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
        page: page,
        sortedBy: sortedBy,
        sortedType: sortedType
      }))
    } catch (error) {
      log.error(`ERROR REST GET company with params: ${JSON.stringify({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: page,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })}`, {
        error: error
      })
      dispatch(
        masiveGestionError(
          errorController(error)
        )
      )
    }
  }
}
export const businessSearchCleaning = () => {
  return async (dispatch) => {
    dispatch({ type: MASIVE_GESTION_BUSINESS_CLEANING })
  }
}

const businessSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage,
  page,
  sortedBy,
  sortedType
}): any => {
  return {
    type: BUSINESS_SEARCH_SUCCESS,
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

const masiveGestionError = (error): any => {
  return {
    type: MASIVE_GESTION_ERROR,
    payload: {
      error: error
    }
  }
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: MASIVE_GESTION_CLOSE_MODAL_ERROR })
  }
}
// Initial State
const initialState = {
  loading: false,
  error: {
    open: false,
    message: ''
  },
  reports: 0,
  business: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    sortedBy: '',
    sortedType: '',
    page: 0
  },
  tableMasiveGestion: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    page: 0,
    sortedBy: '',
    sortedType: ''
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case MASIVE_GESTION_LOADING:
      draft.loading = true
      break
    case MASIVE_GESTION_CLEANING:
      draft.tableMasiveGestion.data = []
      draft.loading = true
      break
    case MASIVE_GESTION_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.error
      break
    case MASIVE_GESTION_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case MASIVE_GESTION_SEND_SEARCH_SUCCESS:
      draft.loading = false
      draft.tableMasiveGestion.data = action.payload.data
      draft.tableMasiveGestion.totalRows = action.payload.totalRows
      draft.tableMasiveGestion.rowsPerPage = action.payload.currentrowsPerPagePage
      draft.tableMasiveGestion.page = action.payload.page
      break
    case MASIVE_GESTION_DELETE_SUCCESS:
      draft.loading = false
      break
    case MASIVE_GESTION_COPY_SUCCESS:
      draft.loading = false
      break
    case MASIVE_GESTION_MOVE_SUCCESS:
      draft.loading = false
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
    case MASIVE_GESTION_BUSINESS_CLEANING:
      draft.business.data = []
      break
    case MASIVE_GESTION_CLEANING_REPORTS:
      draft.reports++
      break
  }
}, initialState)

// Selectors
export const selectTableMasiveGestion = (state): any => {
  return ({
    data: state.masiveGestion.tableMasiveGestion.data,
    totalRows: state.masiveGestion.tableMasiveGestion.totalRows,
    rowsPerPage: state.masiveGestion.tableMasiveGestion.rowsPerPage,
    page: state.masiveGestion.tableMasiveGestion.page,
    loading: state.masiveGestion.tableMasiveGestion.loading,
    error: state.masiveGestion.tableMasiveGestion.error,
    sortedBy: state.masiveGestion.tableMasiveGestion.sortedBy,
    sortedType: state.masiveGestion.tableMasiveGestion.sortedType
  })
}

export const selectTableBusinessProps = (state): any => {
  return ({
    data: state.masiveGestion.business.data,
    totalRows: state.masiveGestion.business.totalRows,
    rowsPerPage: state.masiveGestion.business.rowsPerPage,
    page: state.masiveGestion.business.page,
    loading: state.masiveGestion.business.loading,
    error: state.masiveGestion.business.error,
    sortedBy: state.masiveGestion.business.sortedBy,
    sortedType: state.masiveGestion.business.sortedType
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.masiveGestion.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.masiveGestion.error
  })
}

export const selectReports = (state): any => {
  return ({
    reports: state.masiveGestion.reports
  })
}

const mapBussinesProprs = (
  data,
  sortedBy,
  sortedType,
  rowsPerPage,
  page
): any => {
  log.trace(`Order response by: ${sortedBy}, ${sortedType}, ${rowsPerPage}, ${page}`)
  return getSortedData(data, sortedBy, sortedType === 'ASC')
    .slice((parseInt(page) * parseInt(rowsPerPage)), (parseInt(page) * parseInt(rowsPerPage)) + parseInt(rowsPerPage))
}

// namespace "masiveGestion"
export default { masiveGestion: reducer }
