import produce from 'immer'
import { call, log } from '@cesce/arq'
import { errorController } from '../../config/error-config'
import { getSortedData, formatPage } from '../../config/pageUtilities'

// Actions Types
const FILESTABLEFTP_CLOSE_MODAL_ERROR = 'cesdata/filestableftp/error/close'
const FILESTABLEFTP_LOADING = 'cesdata/filestableftp/loading'
const FILESTABLEFTP_ERROR = 'cesdata/filestableftp/error'
const FILESTABLEFTP_SEARCH_SUCCESS = 'cesdata/filestableftp/ft_search_success'
const BUSINESS_FILESTABLEFTP_SEARCH_SUCCESS = 'cesdata/filestableftp/business_search_success'
const SEND_FILESTABLEFTP_SEARCH_SUCCESS = 'cesdata/filestableftp/send_search_success'
const BUSINESS_INFORMATION_SEARCH_SUCCESS = 'cesdata/filestableftp/information/business_search_success'

// Actions creators
export const filestableFTPSearchRequest = (params): any => {
  return {
    type: FILESTABLEFTP_SEARCH_SUCCESS,
    payload: {
      data: params.data
    }
  }
}

const findCompanySearchSuccessAdvanced = ({
  data,
  totalRows,
  rowsPerPage
}): any => {
  return {
    type: BUSINESS_FILESTABLEFTP_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage
    }
  }
}

const filesFTPError = (err): any => {
  return {
    type: FILESTABLEFTP_ERROR,
    payload: {
      err: err
    }
  }
}

const checkCompanySearchRequest = (businessForm): boolean => {
  if (businessForm.name !== '') {
    return true
  }
  if (businessForm.cif !== '') {
    return true
  }
  if (businessForm.country !== '') {
    return true
  }

  return false
}

export const findCompanySearchRequest = (
  businessForm,
  itemsPerPage = 5,
  currentPage = 0
) => {
  return async (dispatch) => {
    try {
      log.trace(`findCompanySearchRequest: ${JSON.stringify(businessForm)}`)
      if (!checkCompanySearchRequest(businessForm)) { return }
      dispatch({ type: FILESTABLEFTP_LOADING })
      log.info(`REST GET to company with params: ${JSON.stringify({
        nombre: businessForm.name,
        codFiscal: businessForm.cif,
        codPais: businessForm.country,
        itemsPerPage,
        currentPage
      })}`)
      const { data } = await call.api.business.get({
        nombre: businessForm.name,
        codFiscal: businessForm.cif,
        codPais: businessForm.country,
        itemsPerPage,
        currentPage
      })
      log.info(`REST GET to company response: ${JSON.stringify(data)}`)
      dispatch(findCompanySearchSuccessAdvanced({
        data: data.data,
        totalRows: data.totalRows,
        rowsPerPage: itemsPerPage
      }))
    } catch (error) {
      log.error(`ERROR REST GET to company with params: ${JSON.stringify(businessForm)}`, {
        error: error
      })
      dispatch(
        filesFTPError(
          errorController(error)
        )
      )
    }
  }
}

const handleSendSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage
}): any => {
  return {
    type: SEND_FILESTABLEFTP_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage
    }
  }
}

const checkItemsSendSearchRequest = (args): boolean => {
  if (args.code !== '') {
    return true
  }
  if (args.alertGenerate !== '') {
    return true
  }
  if (args.consolidation !== '') {
    return true
  }
  if (args.conf !== '') {
    return true
  }

  return false
}

// TODO: Incluir log
export const handleSendSearchRequest = (
  args,
  itemsPerPage = 5,
  currentPage = 0
) => {
  return async (dispatch) => {
    try {
      if (!checkItemsSendSearchRequest(args)) { return }
      dispatch({ type: FILESTABLEFTP_LOADING })
      // TODO: Llamar al servicio correspondiente
      const { data } = await call.api.dessert.get({
        code: args.code,
        arrayFile: args.arrayFile,
        conf: args.conf,
        alertGenerate: args.alertGenerate,
        consolidation: args.consolidation,
        itemsPerPage,
        currentPage
      })
      dispatch(handleSendSearchSuccess({
        data: data.data,
        totalRows: data.totalRows,
        rowsPerPage: itemsPerPage
      }))
    } catch (error) {
      dispatch(
        filesFTPError(
          errorController(error)
        )
      )
    }
  }
}

const checkItemsBusinessSearchRequestInformation = (country, companyName, companyId): boolean => {
  if (country !== '') {
    return true
  }
  if (companyName !== '') {
    return true
  }
  if (companyId !== '') {
    return true
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
    try {
      log.trace(`businessSearchRequestInformation: ${JSON.stringify({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId
      })}`)
      if (!checkItemsBusinessSearchRequestInformation(country, companyName, companyId)) { return }
      dispatch({ type: FILESTABLEFTP_LOADING })
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
      log.info(`REST GET to company response: ${JSON.stringify(data)}`)
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
        filesFTPError('Data not found')
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
        filesFTPError(
          errorController(error)
        )
      )
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

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: FILESTABLEFTP_CLOSE_MODAL_ERROR })
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
    rowsPerPage: 5
  },
  businessInformation: {
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
    case FILESTABLEFTP_LOADING:
      draft.loading = true
      break
    case FILESTABLEFTP_ERROR:
      draft.loading = false
      draft.error = action.payload.err
      break
    case FILESTABLEFTP_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case BUSINESS_FILESTABLEFTP_SEARCH_SUCCESS:
      draft.loading = false
      draft.business.data = action.payload.data
      draft.business.totalRows = action.payload.totalRows
      draft.business.currentPage = action.payload.currentPage
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
  }
}, initialState)

// Selectors
export const selectTableBusinessProps = (state): any => {
  return ({
    data: state.filestableftp.business.data,
    totalRows: state.filestableftp.business.totalRows,
    rowsPerPage: state.filestableftp.business.rowsPerPage
  })
}

export const selectTableBusinessPropsInformation = (state): any => {
  return ({
    data: state.filestableftp.businessInformation.data,
    totalRows: state.filestableftp.businessInformation.rowsPerPage * 2,
    rowsPerPage: state.filestableftp.businessInformation.rowsPerPage,
    page: state.filestableftp.businessInformation.page,
    sortedBy: state.filestableftp.businessInformation.sortedBy,
    sortedType: state.filestableftp.businessInformation.sortedType
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.filestableftp.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.filestableftp.error
  })
}

// mapeos y formatos
const mapBussinesProprs = (data, sortedBy, sortedType, rowsPerPage, page): any => {
  return getSortedData(data, sortedBy, sortedType === 'ASC')
    .slice((parseInt(page) * parseInt(rowsPerPage)), (parseInt(page) * parseInt(rowsPerPage)) + parseInt(rowsPerPage))
}

// namespace "filestableftp"
export default { filestableftp: reducer }
