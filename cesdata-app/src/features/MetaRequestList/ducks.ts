import produce from 'immer'
import { call, lang, log } from '@cesce/arq'
import { errorController } from '../../config/error-config'

// Actions Types
const REQUESTLIST_CLOSE_MODAL_ERROR = 'cesdata/requestlist/error/close'
const REQUESTLIST_LOADING = 'cesdata/requestlist/loading'
const REQUESTLIST_ERROR = 'cesdata/requestlist/error'
const REQUESTLIST_SEARCH_SUCCESS = 'cesdata/requestlist/requestlist_search_success'
const REQUESTLIST_SEND_SEARCH_SUCCESS = 'cesdata/requestlist/requestlist_send_search_success'
const REQUESTLIST_ANULATION_SEARCH_SUCCESS = 'cesdata/requestlist/requestlist_anulation_search_success'
const REQUESTLIST_SEARCH_PETITION_SUCCESS = 'cesdata/requestlist/requestlist_search_petition_success'
const REQUESTLIST_INSERT_PETITION_SUCCESS = 'cesdata/requestlist/requestlist_insert_petition_success'

// Actions creators
export const requestListSearchRequest = (params): any => {
  return {
    type: REQUESTLIST_SEARCH_SUCCESS,
    payload: {
      data: params.data
    }
  }
}

export const requestListSendSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage,
  page
}): any => {
  return {
    type: REQUESTLIST_SEND_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage,
      page
    }
  }
}

export const requestListSearchPetitionSuccess = ({
  data
}): any => {
  return {
    type: REQUESTLIST_SEARCH_PETITION_SUCCESS,
    payload: {
      data
    }
  }
}

export const requestListError = (err): any => {
  return {
    type: REQUESTLIST_ERROR,
    payload: {
      err: err
    }
  }
}

const checkItemsPetitionsSearchRequest = (dateFrom): boolean => {
  if (dateFrom !== '' && dateFrom !== 'Invalid Date') {
    return true
  }

  return false
}

export const requestListSendSearchRequest = (
  dateFrom,
  rowsPerPage,
  page,
  sortedBy,
  sortedType
) => {
  return async (dispatch) => {
    try {
      log.trace(`requestListSendSearchRequest: ${JSON.stringify(dateFrom)}`)
      if (!checkItemsPetitionsSearchRequest(dateFrom)) { return }
      const called = Object.assign({}, call.api.petitions)
      dispatch({ type: REQUESTLIST_LOADING })
      called.get.requestConfig.url = ''
      log.info(`REST GET request list with params: ${JSON.stringify({
        fechaAlta: dateFrom,
        // fechaHasta: dateTo, //TODO falta fecha hasta en el endpoint
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })}`)
      const { data } = await call.api.petitions.get({
        fechaAlta: dateFrom,
        // fechaHasta: dateTo, //TODO falta fecha hasta en el endpoint
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })
      log.info(`REST GET request list response: ${JSON.stringify(data)}`)
      dispatch(requestListSendSearchSuccess({
        data: data.payload,
        totalRows: data.totalRegistros,
        rowsPerPage: rowsPerPage,
        page
      }))
    } catch (error) {
      log.error(`ERROR GET request list with params: ${JSON.stringify({
        // fechaHasta: dateTo, //TODO falta fecha hasta en el endpoint
        itemsPorPagina: rowsPerPage,
        paginaActual: formatPage(page),
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })}`, {
        error: error
      })
      dispatch(
        requestListError(
          errorController(error)
        )
      )
    }
  }
}

const checkItemsPetitionSearchRequest = (petition): boolean => {
  if (petition !== '') {
    return true
  }

  return false
}

export const requestListSearchPetitionRequest = (
  petition
) => {
  return async (dispatch) => {
    log.trace(`requestListSearchPetitionRequest: ${JSON.stringify(petition)}`)
    const called = Object.assign({}, call.api.petitions)
    if (!checkItemsPetitionSearchRequest(petition)) { return }
    try {
      dispatch({ type: REQUESTLIST_LOADING })
      called.get.requestConfig.url = `/${petition}`
      log.info(`REST GET petition with url: ${called.get.requestConfig.url}`)
      const { data } = await call.api.petitions.get()
      log.info(`REST GET petition response: ${JSON.stringify(data)}`)
      dispatch(requestListSearchPetitionSuccess({
        data: data.payload[0]
      }))
    } catch (error) {
      log.error(`ERROR REST GET petition with params: ${JSON.stringify(petition)}`, {
        error: error
      })
      dispatch(
        requestListError(
          errorController(error)
        )
      )
    }
  }
}

export const requestListAnulationSearchSuccess = ({
  data
}): any => {
  return {
    type: REQUESTLIST_ANULATION_SEARCH_SUCCESS,
    payload: {
      data
    }
  }
}

const checkItemsAnulationSearchRequest = (petition, motive): boolean => {
  return (petition === '' || motive === '')
}

export const requestListAnulationSearchRequest = (
  petition,
  motive
) => {
  return async (dispatch) => {
    const i18n = lang.currentLanguage()
    log.trace(`requestListAnulationSearchRequest: ${JSON.stringify(petition, motive)}`)
    if (checkItemsAnulationSearchRequest(petition, motive)) {
      dispatch(
        requestListError(
          errorController(i18n['RequestList:anulationMotive'])
        )
      )
    } else {
      const called = Object.assign({}, call.api.petitions)
      try {
        dispatch({ type: REQUESTLIST_LOADING })
        called.delete.requestConfig.url = `/${petition}/${motive}`
        log.info(`REST GET petition anulation with url: ${called.delete.requestConfig.url}`)
        await call.api.petitions.delete()
        log.info('REST GET petition anulation response: Ok')
        // dispatch(requestListAnulationSearchSuccess({
        //   data: result.payload[0]
        // }))
      } catch (error) {
        log.error(`ERROR GET petition anulation with params: ${JSON.stringify(petition, motive)}`, {
          error: error
        })
        dispatch(
          requestListError(
            errorController(error)
          )
        )
      }
    }
  }
}

export const requestListAddRequest = (
  params
) => {
  return async (dispatch) => {
    try {
      log.trace(`requestListAddRequest: ${JSON.stringify(params)}`)
      dispatch({ type: REQUESTLIST_LOADING })
      const called = Object.assign({}, call.api.petitions)
      called.post.requestConfig.url = ''
      log.info(`REST POST petition with params: ${JSON.stringify(params)}`)
      const { result } = await call.api.petitions.post(params)
      log.info(`REST POST petition response: ${JSON.stringify(result)}`)
      dispatch(requestListAddRequestSuccess({
        data: result.payload[0]
      }))
    } catch (error) {
      log.error(`REST POST petition with params: ${JSON.stringify(params)}`, {
        error: error
      })
      dispatch(
        requestListError(
          errorController(error)
        )
      )
    }
  }
}

export const requestListAddRequestSuccess = ({
  data
}): any => {
  return {
    type: REQUESTLIST_INSERT_PETITION_SUCCESS,
    payload: {
      data
    }
  }
}

// maps & formats
function formatPage (page): any {
  return (page++)
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: REQUESTLIST_CLOSE_MODAL_ERROR })
  }
}

// Initial State
const initialState = {
  loading: false,
  error: {
    open: false,
    message: ''
  },
  anulation: {
    loading: false,
    error: null
  },
  tablerequestList: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    page: 0,
    sortedBy: '',
    sortedType: '',
    loading: false,
    error: null
  },
  petitionDetail: {
    data: {},
    loading: false,
    error: null
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case REQUESTLIST_LOADING:
      draft.loading = true
      break
    case REQUESTLIST_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.err
      break
    case REQUESTLIST_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case REQUESTLIST_SEND_SEARCH_SUCCESS:
      draft.loading = false
      draft.tablerequestList.data = action.payload.data
      draft.tablerequestList.totalRows = action.payload.totalRows
      draft.tablerequestList.rowsPerPage = action.payload.currentrowsPerPagePage
      draft.tablerequestList.page = action.payload.page
      break
    case REQUESTLIST_ANULATION_SEARCH_SUCCESS:
      draft.loading = false
      draft.tablerequestList.data = action.payload.data
      break
    case REQUESTLIST_SEARCH_PETITION_SUCCESS:
      draft.loading = false
      draft.petitionDetail.data = action.payload.data
      break
  }
}, initialState)

// Selectors
export const selectTableRequestList = (state): any => {
  return ({
    data: state.requestlist.tablerequestList.data,
    totalRows: state.requestlist.tablerequestList.totalRows,
    rowsPerPage: state.requestlist.tablerequestList.rowsPerPage,
    page: state.requestlist.tablerequestList.page,
    loading: state.requestlist.tablerequestList.loading,
    error: state.requestlist.tablerequestList.error
  })
}

// Selectors
export const selectDetailRequest = (state): any => {
  return ({
    data: state.requestlist.petitionDetail.data
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.requestlist.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.requestlist.error
  })
}

// namespace "requestlist"
export default { requestlist: reducer }
