import produce from 'immer'
import { call } from '@cesce/arq'
import { errorController } from '../../config/error-config'
import { getSortedData } from '../../config/pageUtilities'

// Actions Types
const BOE_SEARCH_LOADING = 'cesdata/boeform/boe_search_loading'
const BOE_SEARCH_ERROR = 'cesdata/boeform/boe_search_error'
const BOE_SEARCH_SUCCESS = 'cesdata/boeform/boe_search_success'
const BUSINESS_SEARCH_LOADING = 'cesdata/boeform/business_search_loading'
const BUSINESS_SEARCH_ERROR = 'cesdata/boeform/business_search_error'
const BUSINESS_SEARCH_SUCCESS = 'cesdata/boeform/business_search_success'
const CORRESPONDENTS_SEARCH_LOADING = 'cesdata/boeform/correspondents_search_loading'
const CORRESPONDENTS_SEARCH_ERROR = 'cesdata/boeform/correspondents_search_error'
const CORRESPONDENTS_SEARCH_SUCCESS = 'cesdata/boeform/correspondents_search_success'

// Actions creators
export const boeSearchRequest = (params): any => {
  return {
    type: BOE_SEARCH_SUCCESS,
    // TODO los nombres de los parametros se corresponden con los IDs de los
    // componentes del formulario BoeForm, habrá que ponerlos en camelCase para
    // que sean mas facil de usar
    payload: {
      codCompanycod: params['cod-company'],
      codCorrespondnet: params['cod-correspondent'],
      codProduct: params['cod-product'],
      documentName: params['document-name'],
      documentType: params['document-type'],
      petitionNum: params['petition-num'],
      receptionDate: params['reception-date'],
      typeExpense: params['type-expense']
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

const businessSearchError = (err): any => {
  return {
    type: BUSINESS_SEARCH_ERROR,
    payload: {
      err: err
    }
  }
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
      dispatch({ type: BUSINESS_SEARCH_LOADING })
      const data = await call.api.business.get({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: page,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })

      dispatch(businessSearchSuccess({
        data: data.data.payload,
        totalRows: data.data.payload.length,
        rowsPerPage: rowsPerPage,
        page: page
      }))
    } catch (error) {
      dispatch(
        businessSearchError(
          errorController(error)
        )
      )
    }
  }
}

const correspondentsSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage,
  page,
  sortedBy,
  sortedType
}): any => {
  return {
    type: CORRESPONDENTS_SEARCH_SUCCESS,
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

const correspondentsSearchError = (err): any => {
  return {
    type: CORRESPONDENTS_SEARCH_ERROR,
    payload: {
      err: err
    }
  }
}

export const correspondentsSearchRequest = (
  country,
  rowsPerPage,
  page,
  sortedType,
  sortedBy
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CORRESPONDENTS_SEARCH_LOADING })
      const { data } = await call.api.correspondents.get({
        codPais: country,
        itemsPorPagina: rowsPerPage,
        paginaActual: page++,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })

      dispatch(correspondentsSearchSuccess({
        data: data.payload,
        totalRows: data.payload.length,
        rowsPerPage: rowsPerPage,
        page: page,
        sortedBy,
        sortedType
      }))
    } catch (error) {
      dispatch(
        correspondentsSearchError(
          errorController(error)
        )
      )
    }
  }
}

// Initial State
const initialState = {
  business: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    orderBy: '',
    orderType: '',
    page: 0,
    loading: false,
    error: null
  },
  correspondents: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    orderBy: '',
    orderType: '',
    page: 0,
    loading: false,
    error: null
  },
  boe: {
    loading: false,
    error: null
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case BOE_SEARCH_LOADING:
      draft.boe.loading = true
      break
    case BOE_SEARCH_ERROR:
      draft.boe.error = action.payload.err
      break
    // case BOE_SEARCH_SUCCESS: // TODO cuando sepamos que hace BoeForm rellenar esta parte
    case BUSINESS_SEARCH_LOADING:
      draft.business.loading = true
      draft.business.error = null
      break
    case BUSINESS_SEARCH_ERROR:
      draft.business.error = action.payload.err
      break
    case BUSINESS_SEARCH_SUCCESS:
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
    case CORRESPONDENTS_SEARCH_LOADING:
      draft.correspondents.loading = true
      draft.correspondents.error = null
      break
    case CORRESPONDENTS_SEARCH_ERROR:
      draft.correspondents.error = action.payload.err
      break
    case CORRESPONDENTS_SEARCH_SUCCESS:
      draft.correspondents.totalRows = action.payload.totalRows
      draft.correspondents.page = action.payload.page
      draft.correspondents.rowsPerPage = action.payload.rowsPerPage
      draft.correspondents.sortedBy = action.payload.sortedBy
      draft.correspondents.sortedType = action.payload.sortedType
      draft.correspondents.data = mapCorrespondentsProprs(
        action.payload.data,
        action.payload.sortedBy,
        action.payload.sortedType,
        action.payload.rowsPerPage,
        action.payload.page) ?? action.payload.data
      break
  }
}, initialState)

// Selectors
export const selectTableCorrespondondentsProps = (state): any => {
  return ({
    data: state.boeform.correspondents.data,
    totalRows: state.boeform.correspondents.totalRows,
    rowsPerPage: state.boeform.correspondents.rowsPerPage,
    page: state.boeform.correspondents.page,
    loading: state.boeform.correspondents.loading,
    error: state.boeform.correspondents.error,
    sortedBy: state.boeform.correspondents.sortedBy,
    sortedType: state.boeform.correspondents.sortedType
  })
}

export const selectTableBusinessProps = (state): any => {
  return ({
    data: state.boeform.business.data,
    totalRows: state.boeform.business.totalRows,
    rowsPerPage: state.boeform.business.rowsPerPage,
    page: state.boeform.business.page,
    loading: state.boeform.business.loading,
    error: state.boeform.business.error,
    sortedBy: state.boeform.correspondents.sortedBy,
    sortedType: state.boeform.correspondents.sortedType
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

const mapCorrespondentsProprs = (
  data,
  sortedBy,
  sortedType,
  rowsPerPage,
  page
): any => {
  return getSortedData(data, sortedBy, sortedType === 'ASC')
    .slice((parseInt(page) * parseInt(rowsPerPage)), (parseInt(page) * parseInt(rowsPerPage)) + parseInt(rowsPerPage))
}
// namespace "boeform"
export default { boeform: reducer }
