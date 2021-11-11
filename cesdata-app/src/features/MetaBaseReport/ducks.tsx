import produce from 'immer'
import { call, log } from '@cesce/arq'
import { errorController } from '../../config/error-config'
import { mapperBaseReport, getReportTypes } from './mapperBaseReport'
import { dataEmpty } from './dataEmpty'
import { ReportTypes, dataBaseReport } from '@cesce/ui-catalogue'

// Actions Types
const BASEREPORT_SEARCH_LOADING = 'cesdata/basereport/basereport_search_loading'
const BASEREPORT_SEARCH_ERROR = 'cesdata/basereport/basereport_search_error'
const BASEREPORT_SEARCH_SUCCESS = 'cesdata/basereport/basereport_search_success'
const BASEREPORT_CLOSE_MODAL_ERROR = 'cesdata/consultreports/error/close'

// Actions creators
const baseReportSearchError = (error): any => {
  return {
    type: BASEREPORT_SEARCH_ERROR,
    payload: {
      error: error
    }
  }
}

const baseReportSearchSuccess = ({
  data
}): any => {
  return {
    type: BASEREPORT_SEARCH_SUCCESS,
    payload: {
      data
    }
  }
}

export const baseReportSearchRequest = (
  informe
) => {
  return async (dispatch) => {
    log.trace(`baseReportSearchRequest: ${JSON.stringify(informe)}`)
    const called = Object.assign({}, call.api.reportGetInfo)
    try {
      dispatch({ type: BASEREPORT_SEARCH_LOADING })
      called.get.requestConfig.url = `/${informe}`
      log.info(`REST GET to reports with params: ${JSON.stringify(informe)}`)
      const { data } = await call.api.reportGetInfo.get()
      log.info(`REST GET to reports response: ${JSON.stringify(data)}`)
      dispatch(baseReportSearchSuccess({
        data: data
      }))
    } catch (error) {
      log.error(`ERROR REST GET to reports with params: ${JSON.stringify(informe)}`, {
        error: error
      })
      dispatch(
        baseReportSearchError(
          errorController(error)
        )
      )
    } finally {
      called.get.requestConfig.url = ''
    }
  }
}

const checkItemsSearchRequestExperian = (cif): boolean => {
  if (cif !== '') {
    return true
  }
  return false
}

export const baseReportSearchRequestByCIF = (
  cif,
  radio
) => {
  return async (dispatch) => {
    try {
      log.trace(`baseReportSearchRequestByCIF: ${JSON.stringify(cif, radio)}`)
      if (!checkItemsSearchRequestExperian(cif)) { return }
      dispatch({ type: BASEREPORT_SEARCH_LOADING })
      log.info(`REST GET to ExperianR with params: ${JSON.stringify(cif, radio)}`)
      const { data } = await call.api.experianR.get({
        codFiscal: cif,
        origen: radio
      })
      log.info(`REST GET to ExperianR  response: ${JSON.stringify(cif, radio)}`)
      dispatch(baseReportSearchSuccess({
        data: data
      }))
    } catch (error) {
      log.error(`ERROR REST GET to ExperianR with params: ${JSON.stringify(cif, radio)}`, {
        error: error
      })
      dispatch(
        baseReportSearchError(
          errorController(error)
        )
      )
    }
  }
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: BASEREPORT_CLOSE_MODAL_ERROR })
  }
}

const isShowDownload = (data): boolean => {
  return (data.informeExterno !== null || isFile(data.informeCreica?.CREICA?.NOMDOC) || isFile(data.informeCreica?.CREICA?.DATOSHOST?.NOMBREFICHERO))
}

const isFile = (stringCheck): boolean => {
  return ['pdf', 'txt', 'docx', 'doc'].some(word => String(stringCheck).toLowerCase().includes(word.toLowerCase()))
}

const initialState = {
  loading: false,
  error: {
    open: false,
    message: ''
  },
  showDownload: false,
  downloadFunction: null,
  report: ReportTypes.Standard,
  baseReport: {
    data: dataEmpty
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case BASEREPORT_SEARCH_LOADING:
      draft.loading = true
      break
    case BASEREPORT_SEARCH_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.error
      break
    case BASEREPORT_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case BASEREPORT_SEARCH_SUCCESS:
      draft.loading = false
      draft.report = getReportTypes(action.payload.data.payload[0].template)
      draft.showDownload = isShowDownload(action.payload.data.payload[0])
      draft.baseReport.data = mapperBaseReport(dataBaseReport, draft.report, action.payload.data.payload[0])
      break
  }
}, initialState)

export const selectData = (state): any => {
  return ({
    data: state.basereport.baseReport.data
  })
}

export const selectReport = (state): any => {
  return ({
    report: state.basereport.report
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.basereport.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.basereport.error
  })
}

export const selectShowDownload = (state): any => {
  return ({
    show: state.basereport.showDownload
  })
}

// namespace "basereport"
export default { basereport: reducer }
