import produce from 'immer'
import { call, log } from '@cesce/arq'
import { errorController, ExcepcionFormato } from '../../config/error-config'
import { getSortedData } from '../../config/pageUtilities'
// Actions Types
const REPORTS_CLOSE_MODAL_ERROR = 'cesdata/reportreferences/error/close'
const REPORT_REFERENCES_LOADING = 'cesdata/reportreferences/loading'
const REPORT_REFERENCES_ERROR = 'cesdata/reportreferences/error'
const REPORT_REFERENCES_SEARCH_SUCCESS = 'cesdata/reportreferences/report_references_search_success'
const REPORT_REFERENCES_ALTAINFORME_SUCCESS = 'cesdata/reportreferences/report_references_altainforme_success'
const REPORT_REFERENCES_REPORT_SUCCESS = 'cesdata/reportreferences/report_references_report_success'
const REPORTS_SEARCH_SUCCESS = 'cesdata/reportreferences/report_references_search_success'
const REPORTS_DELETE_SUCCESS = 'cesdata/reportreferences/report_references_delete_success'
const BUSINESS_SEARCH_SUCCESS = 'cesdata/reportreferences/business_search_success'
const CORRESPONDENTS_SEARCH_SUCCESS = 'cesdata/reportreferences/correspondents_search_success'
const REPORTS_CLEAN_TABLE = 'cesdata/reportreferences/reports_clean_table'
const REPORTS_RESTO_PAISES_SUCCESS = 'cesdata/reportreferences/reports_resto_paises_success'
const REPORTS_REFERENCES_ALTA_LOADING = 'cesdata/reportreferences/alta_loading'
const REPORTS_REFERENCES_ALTA_SUCCESS = 'cesdata/reportreferences/alta_success'
const REPORTS_REFERENCIACION_SOLICITUDES_LOADING = 'cesdata/reportreferences/referenciacion_solicitudes_loading'
const REPORTS_REFERENCIACION_SOLICITUDES_SUCCESS = 'cesdata/reportreferences/referenciacion_solicitudes_success'
const MODAL_SEARCH_SUCCESS = 'cesdata/reportreferences/modal_search_success'
const REPORTS_CLOSE_MODAL_SUCCESS = 'cesdata/reportreferences/close_modal_success'
const MANUAL_PETITION_ALTA_LOADING = 'cesdata/reportreferences/manula_petition_loading'
const MANUAL_PETITION_ALTA_SUCCESS = 'cesdata/reportreferences/manula_petition_success'
const UTILIDADES_REF_LOADING = 'cesdata/reportreferences/utilidades_ref_loading'
const UTILIDADES_REF_SUCCESS = 'cesdata/reportreferences/utilidades_ref_success'
const BUSINESS_CLEAN_TABLE = 'cesdata/reportreferences/business_clean_table'

// Actions creators

const modalSearchSuccess = ({ message }): any => {
  return {
    type: MODAL_SEARCH_SUCCESS,
    payload: {
      message
    }
  }
}

export const reportsReferencesSearchRequest = (params): any => {
  return {
    type: REPORT_REFERENCES_SEARCH_SUCCESS,
    payload: {
      date: params.date
    }
  }
}

const reportSearchSuccess = ({
  data,
  totalRows,
  rowsPerPage,
  page
}): any => {
  return {
    type: REPORTS_SEARCH_SUCCESS,
    payload: {
      data,
      totalRows,
      rowsPerPage,
      page
    }
  }
}

const reportSearchError = (error): any => {
  return {
    type: REPORT_REFERENCES_ERROR,
    payload: {
      error: error
    }
  }
}

const referenciacionsolicitudesAltaSuccess = ({
  mensaje,
  data
}): any => {
  return {
    type: REPORTS_REFERENCIACION_SOLICITUDES_SUCCESS,
    payload: {
      mensaje,
      data
    }
  }
}

const paramsRef: any = {}

export const referenciacionsolicitudesRequest = (
  petitionNum, codCompany, product, codCorrespondent
) => {
  return async (dispatch) => {
    const called = Object.assign({}, call.api.referenciacionsolicitudes)
    try {
      paramsRef.numPeticion = petitionNum
      paramsRef.codDeudor = codCompany
      paramsRef.codProducto = product
      paramsRef.codCorresponsal = codCorrespondent
      log.trace(`referenciacionsolicitudesRequest: ${JSON.stringify(paramsRef)}`)
      dispatch({ type: REPORTS_REFERENCIACION_SOLICITUDES_LOADING })
      log.info(`REST GET referenciación with params: ${JSON.stringify(paramsRef)}`)
      const { data } = await call.api.referenciacionsolicitudes.get({
        itemsPorPagina: 5,
        tipoOrdenacion: 'ASC',
        ordenarPor: 'producto',
        paginaActual: 1,
        numPeticion: petitionNum,
        codDeudor: codCompany.replace('-', ''),
        codCorresponsal: codCorrespondent,
        codProducto: product
      })
      log.info(`REST GET referenciación response: ${JSON.stringify(data)}`)
      dispatch(
        referenciacionsolicitudesAltaSuccess({
          mensaje: data.mensaje,
          data: data.payload
        })
      )
    } catch (error) {
      log.error(`ERROR REST GET referenciación with params: ${JSON.stringify(paramsRef)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
          errorController(error)
        )
      )
    } finally {
      called.get.requestConfig.url = ''
    }
  }
}

const reportAltaSuccess = ({
  mensaje
}): any => {
  return {
    type: REPORTS_REFERENCES_ALTA_SUCCESS,
    payload: {
      mensaje
    }
  }
}

let paramsAlta = {
  codDeudor: '',
  tipoDocumento: '',
  codCorresponsal: 0,
  codProducto: 0,
  tipoGasto: 0,
  fechaRecepcion: '',
  fechaAlta: '',
  codCreica: 0,
  numDocumento: '',
  tipoFichero: ''
}

export const reportsAltaRequest = (
  codDeudor, product, typeDocument, typeExpensive, codCorrespondent, actualDate, fecReception, codCreica, codInforme, fileType
) => {
  return async (dispatch) => {
    try {
      log.trace(`reportsAltaRequest: ${JSON.stringify(paramsAlta)}`)
      dispatch({ type: REPORTS_REFERENCES_ALTA_LOADING })
      const codigo = codDeudor.slice(0, 3)
      const deudor = codDeudor.substring(4, codDeudor.lenght)
      const codigoDeudor = `${codigo}${deudor}`

      paramsAlta = {
        codDeudor: codigoDeudor,
        tipoDocumento: typeDocument,
        codCorresponsal: parseInt(codCorrespondent),
        codProducto: parseInt(product),
        tipoGasto: parseInt(typeExpensive),
        fechaRecepcion: fecReception,
        fechaAlta: actualDate,
        codCreica: parseInt(codCreica),
        numDocumento: codInforme.toString(),
        tipoFichero: fileType
      }
      log.info(`REST POST High reports with params: ${JSON.stringify(paramsAlta)}`)
      const { data } = await call.api.references.post(paramsAlta)
      log.info(`REST POST High reports : ${JSON.stringify(data)}`)
      dispatch(
        reportAltaSuccess({
          mensaje: data.mensaje
        })
      )
      dispatch(modalSearchSuccess({
        message: data.mensaje
      }))
    } catch (error) {
      log.error(`ERROR REST POST Alta reports: ${JSON.stringify(paramsAlta)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
          errorController(error)
        )
      )
    }
  }
}

let params = {
  fechaDesde: '',
  itemsPorPagina: '',
  paginaActual: 0,
  ordenarPor: '',
  tipoOrdenacion: ''
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
  const date = (fecha !== null) && (fecha !== null && fecha !== '') ? new Date(fecha) : new Date()
  return date.toLocaleDateString('es-ES', options).toString()
}

export const reportsSearchRequest = (
  dateFrom,
  rowsPerPage,
  page,
  sortedBy,
  sortedType
) => {
  return async (dispatch) => {
    try {
      let date
      if (dateFrom === '') {
        dateFrom = '01/01/1900'
      } else {
        date = formatDate(dateFrom)
      }
      log.trace(`reportsSearchRequest: ${JSON.stringify(params)}`)
      dispatch({ type: REPORT_REFERENCES_LOADING })
      if (sortedBy === 'nif') {
        sortedBy = 'codFiscal'
      }
      params = {
        fechaDesde: date,
        itemsPorPagina: rowsPerPage,
        paginaActual: parseInt(page) + 1,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      }
      log.info(`REST GET reports width params: ${JSON.stringify(params)}`)
      const { data } = await call.api.references.get(params)
      log.info(`REST GET reports response: ${JSON.stringify(data)}`)
      dispatch(reportSearchSuccess({
        data: data.payload,
        totalRows: data.totalRegistros,
        rowsPerPage: rowsPerPage,
        page
      }))
      if (data.payload.length <= 0 && (dateFrom !== '01/01/1900' || dateFrom !== '')) {
        ExcepcionFormato('No se han encontrado datos')
      }
    } catch (error) {
      log.error(`ERROR REST GET reports: ${JSON.stringify(params)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
          errorController(error)
        )
      )
    }
  }
}

const reportLoadingSuccess = ({
  data,
  fechaRecepcion,
  tipoFichero,
  codCreica,
  codInforme
}): any => {
  return {
    type: REPORT_REFERENCES_REPORT_SUCCESS,
    payload: {
      data,
      fechaRecepcion,
      tipoFichero,
      codCreica,
      codInforme
    }
  }
}

const utilidadesRefSuccess = (data): any => {
  return {
    type: UTILIDADES_REF_SUCCESS,
    payload: {
      data
    }
  }
}
export const utilidadesRefRequest = (codCreica) => {
  return async (dispatch) => {
    const called = Object.assign({}, call.api.referenciacionsolicitudes)
    try {
      log.trace(`utilidadesRefRequest: ${JSON.stringify(codCreica)}`)
      dispatch({ type: UTILIDADES_REF_LOADING })
      called.get.requestConfig.url = `/${codCreica}`
      log.info(`REST GET referenciación solicitudes width params: ${JSON.stringify(codCreica)}`)
      const { data } = await called.get()
      log.info(`REST GET referenciación solicitudes response: ${JSON.stringify(data)}`)
      dispatch(utilidadesRefSuccess({
        data: data
      }))
    } catch (error) {
      log.error(`ERROR REST GET referenciación solicitudes: ${JSON.stringify(codCreica)}`, {
        error: error
      })
      reportSearchError(
        errorController(error)
      )
    }
  }
}

const reportLoadingError = (err): any => {
  return {
    type: REPORT_REFERENCES_ERROR,
    payload: {
      err: err
    }
  }
}

const reportTipoInformeSuccess = (data): any => {
  return {
    type: REPORTS_RESTO_PAISES_SUCCESS,
    payload: {
      data
    }
  }
}

export enum ReportTypes{
  RESTO_PAISES,
  FR_PT_IT,
  NODB
}

export const reportsLoadingIdentificacionRequest = (
  codCreica
) => {
  return async (dispatch) => {
    const called = Object.assign({}, call.api.reports)
    try {
      log.trace(`reportsLoadingIdentificacionRequest: ${JSON.stringify(codCreica)}`)
      dispatch({ type: REPORT_REFERENCES_LOADING })
      called.get.requestConfig.url = `/informes/${codCreica}`
      log.info(`REST GET identificación width params: ${JSON.stringify(codCreica)}`)
      const { data } = await called.get()
      log.info(`REST GET identificación response: ${JSON.stringify(data)}`)
      dispatch(reportLoadingSuccess({
        data: data,
        fechaRecepcion: data.payload[0].informeCreica.CREICA.FEC,
        tipoFichero: data.payload[0].informeCreica.CREICA.DATOSHOST.TIPFICHERO,
        codCreica: codCreica,
        codInforme: data.payload[0].informeCreica.CREICA.DATOSHOST.NUMDOCUMENTO
      }))
      if (data.payload.lenght === 0) {
        ExcepcionFormato('No se han encontrado datos')
      }
      switch (data.payload[0].template) {
        case 'Informes_no_referenciados-DB_Resto_de_paises':
          dispatch(reportTipoInformeSuccess({
            data: ReportTypes.RESTO_PAISES
          }))
          break
        case 'Informes_no_referenciados-DB-FR_PT_IT':
          dispatch(reportTipoInformeSuccess({
            data: ReportTypes.FR_PT_IT
          }))
          break
        case 'Informes_no_referenciados-noDB':
          dispatch(reportTipoInformeSuccess({
            data: ReportTypes.NODB
          }))
          break
      }
    } catch (error) {
      log.error(`ERROR REST GET reports identification: ${JSON.stringify(codCreica)}`, {
        error: error
      })
      dispatch(
        reportLoadingError(
          errorController(error)
        )
      )
    } finally {
      called.get.requestConfig.url = ''
    }
  }
}

const manualPetitionSuccess = ({
  mensaje
}): any => {
  return {
    type: MANUAL_PETITION_ALTA_SUCCESS,
    payload: {
      mensaje
    }
  }
}

const paramsManual: any = {}
export const manualPetitionReceptionRequest = (codCreica, numPetition, tiporespuesta, product, medio, date, notas) => {
  return async (dispatch) => {
    try {
      paramsManual.codCreica = codCreica
      paramsManual.numSolicitud = numPetition
      paramsManual.tipoRespuesta = tiporespuesta
      paramsManual.medioRecepcion = medio
      paramsManual.codProducto = product
      paramsManual.fechaRecepcion = date
      paramsManual.notas = notas
      log.trace(`manualPetitionReceptionRequest: ${JSON.stringify(paramsManual)}`)
      dispatch({ type: MANUAL_PETITION_ALTA_LOADING })
      log.info(`REST POST manual petition width params: ${JSON.stringify(paramsManual)}`)
      const { data } = await call.api.informemanual.post({
        codCreica: codCreica,
        numSolicitud: numPetition,
        tipoRespuesta: parseInt(tiporespuesta),
        medioRecepcion: parseInt(medio),
        codProducto: parseInt(product),
        fechaRecepcion: date,
        notas: notas
      })
      log.info(`REST POST manual petition response: ${JSON.stringify(data)}`)
      dispatch(modalSearchSuccess({
        message: data.mensaje
      }))
      dispatch(
        manualPetitionSuccess({
          mensaje: data
        })
      )
    } catch (error) {
      log.error(`ERROR REST POST manual petition: ${JSON.stringify(paramsManual)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
          errorController(error)
        )
      )
    }
  }
}

const reportDeleteSuccess = ({
  message
}): any => {
  return {
    type: REPORTS_DELETE_SUCCESS,
    payload: {
      message
    }
  }
}

const reportCleanData = (): any => {
  return {
    type: REPORTS_CLEAN_TABLE
  }
}

export const reportsDeleteRefRequest = (
  codCreica
) => {
  return async (dispatch) => {
    const called = Object.assign({}, call.api.referencesDel)
    try {
      log.trace(`reportsDeleteRefRequest: ${JSON.stringify(codCreica)}`)
      dispatch({ type: REPORT_REFERENCES_LOADING })
      called.delete.requestConfig.url = `/${codCreica}`
      log.info(`REST DELETE reports width params: ${JSON.stringify(codCreica)}`)
      const { data } = await called.delete()
      log.info(`REST DELETE reports response: ${JSON.stringify(data)}`)
      dispatch(modalSearchSuccess({
        message: data.mensaje
      }))
      dispatch(reportDeleteSuccess({
        message: data.mensaje
      }))
    } catch (error) {
      log.error(`ERROR REST DELETE reports: ${JSON.stringify(codCreica)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
          errorController(error)
        )
      )
    }
  }
}

export const reportsDeleteRequest = (
  deleteFiles
) => {
  return async (dispatch) => {
    const called = Object.assign({}, call.api.referencesDel)
    try {
      log.trace(`reportsDeleteRequest: ${JSON.stringify(deleteFiles)}`)
      dispatch({ type: REPORT_REFERENCES_LOADING })
      await Promise.all(deleteFiles.map(async (file): Promise<any> => {
        called.delete.requestConfig.url = `/${file}`
        log.info(`REST DELETE reports width params: ${JSON.stringify(deleteFiles)}`)
        const { data } = await call.api.referencesDel.delete()
        log.info(`REST DELETE reports response: ${JSON.stringify(data)}`)
        dispatch(modalSearchSuccess({
          message: data.mensaje
        }))
      }))
      dispatch(reportCleanData())
      log.info(`REST GET reports width params: ${JSON.stringify(params)}`)
      const { data } = await call.api.references.get(params)
      log.info(`REST GET referenciacion response: ${JSON.stringify(data)}`)
      dispatch(reportSearchSuccess({
        data: data.payload,
        totalRows: data.totalRegistros,
        rowsPerPage: params.itemsPorPagina,
        page: params.paginaActual
      }))
    } catch (error) {
      log.error(`ERROR REST DELETE reports: ${JSON.stringify(deleteFiles)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
          errorController(error)
        )
      )
    }
    called.delete.requestConfig.url = ''
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

const checkItemsBusinessSearchRequest = (companyId, companyName, country): boolean => {
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

const reportCleanDataBusiness = (): any => {
  return {
    type: BUSINESS_CLEAN_TABLE
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
      log.trace(`businessSearchRequest: ${JSON.stringify(companyId, companyName, country)}`)
      dispatch(reportCleanDataBusiness())
      if (!checkItemsBusinessSearchRequest(companyId, companyName, country)) { return }
      dispatch({ type: REPORT_REFERENCES_LOADING })
      log.info(`REST GET empresas width params: ${JSON.stringify(companyId, companyName, country)}`)
      const data = await call.api.business.get({
        codPais: country,
        nombre: companyName,
        codFiscal: companyId,
        itemsPorPagina: rowsPerPage,
        paginaActual: page,
        ordenarPor: sortedBy,
        tipoOrdenacion: sortedType
      })
      log.info(`REST GET empresas response: ${JSON.stringify(data)}`)
      dispatch(businessSearchSuccess({
        data: data.data.payload,
        totalRows: data.data.payload.length,
        rowsPerPage: rowsPerPage,
        page: page
      }))
    } catch (error) {
      log.error(`ERROR REST GET empresas: ${JSON.stringify(companyId, companyName, country)}`, {
        error: error
      })
      dispatch(
        reportSearchError(
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

const correspondentsSearchError = (err): any => {
  return {
    type: REPORT_REFERENCES_ERROR,
    payload: {
      error: err
    }
  }
}

export const correspondentsSearchRequest = (
  country
) => {
  return async (dispatch) => {
    const called = Object.assign({}, call.api.corresponsales)
    try {
      log.trace(`correspondentsSearchRequest: ${JSON.stringify(country)}`)
      dispatch({ type: REPORT_REFERENCES_LOADING })
      log.info(`REST GET corresponsales width params: ${JSON.stringify(country)}`)
      const { data } = await call.api.correspondents.get({
        codPais: country,
        itemsPorPagina: 50,
        paginaActual: 0,
        ordenarPor: 'ASC',
        tipoOrdenacion: 'ASC'
      })
      log.info(`REST GET corresponsales response: ${JSON.stringify(data)}`)
      dispatch(correspondentsSearchSuccess({
        data: data.payload
      }))
    } catch (error) {
      log.error(`ERROR  GET corresponsales: ${JSON.stringify(country)}`, {
        error: error
      })
      dispatch(
        correspondentsSearchError(
          errorController(error)
        )
      )
    } finally {
      called.get.requestConfig.url = ''
    }
  }
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: REPORTS_CLOSE_MODAL_ERROR })
  }
}

export const closeModalSuccess = () => {
  return async (dispatch) => {
    dispatch({ type: REPORTS_CLOSE_MODAL_SUCCESS })
  }
}

// Initial State
const initialState = {
  loading: false,
  error: {
    open: false,
    message: ''
  },
  success: {
    open: false,
    message: '',
    title: ''
  },
  reports: {
    data: [],
    totalRows: 0,
    rowsPerPage: 5,
    loading: false,
    error: null
  },
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
  reportreferencesreport: {
    data: []
  },
  altaInformes: {
    fechaRecepcion: null,
    tipoFichero: null,
    codCreica: null,
    codInforme: null
  },
  successAltaMessage: '',
  informe: null,
  solicitudes: {
    loading: null,
    data: []
  },
  utilidadesRef: {
    data: []
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    // case REPORT_REFERENCES_SEARCH_SUCCESS: // TODO cuando sepamos que hace ReBoeFormportReferences rellenar esta parte
    case REPORT_REFERENCES_LOADING:
      draft.loading = true
      break
    case REPORT_REFERENCES_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.error
      draft.success.open = false
      break
    case REPORTS_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case REPORTS_SEARCH_SUCCESS:
      draft.loading = false
      draft.reports.data = action.payload.data
      draft.reports.totalRows = action.payload.totalRows
      draft.reports.currentPage = action.payload.currentPage
      draft.reports.page = action.payload.page
      break
    case REPORT_REFERENCES_ALTAINFORME_SUCCESS:
      draft.loading = false
      draft.success.open = true
      draft.success.message = action.payload.mensaje
      break
    case REPORTS_DELETE_SUCCESS:
      draft.loading = false
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
    case BUSINESS_CLEAN_TABLE:
      draft.business.data = []
      break
    case CORRESPONDENTS_SEARCH_SUCCESS:
      draft.loading = false
      draft.correspondents.data = getData({ codCorresponsal: 'value', nombreCorresponsal: 'label' }, action.payload.data)
      break
    case REPORTS_RESTO_PAISES_SUCCESS:
      draft.informe = action.payload.data
      break
    case REPORT_REFERENCES_REPORT_SUCCESS:
      draft.loading = false
      draft.reportreferencesreport.data = action.payload.data
      draft.altaInformes.fechaRecepcion = action.payload.fechaRecepcion
      draft.altaInformes.tipoFichero = action.payload.tipoFichero
      draft.altaInformes.codCreica = action.payload.codCreica
      draft.altaInformes.codInforme = action.payload.codInforme
      break
    case REPORTS_CLEAN_TABLE:
      draft.reports.data = []
      break
    case REPORTS_REFERENCES_ALTA_LOADING:
      draft.loading = true
      break
    case REPORTS_REFERENCES_ALTA_SUCCESS:
      draft.loading = false
      draft.successAltaMessage = action.payload.mensaje
      break
    case REPORTS_REFERENCIACION_SOLICITUDES_LOADING:
      draft.solicitudes.loading = true
      break
    case REPORTS_REFERENCIACION_SOLICITUDES_SUCCESS:
      draft.solicitudes.data = action.payload.data
      break
    case MODAL_SEARCH_SUCCESS:
      draft.loading = false
      draft.success.open = true
      draft.success.message = action.payload.message
      break
    case REPORTS_CLOSE_MODAL_SUCCESS:
      draft.success.open = false
      break
    case MANUAL_PETITION_ALTA_LOADING:
      draft.loading = true
      break
    case MANUAL_PETITION_ALTA_SUCCESS:
      draft.loading = false
      break
    case UTILIDADES_REF_LOADING:
      draft.loading = true
      break
    case UTILIDADES_REF_SUCCESS:
      draft.loading = false
      draft.utilidadesRef.data = action.payload.data
      break
  }
}, initialState)

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

// Selectors
export const selectUtilitiesRef = (state): any => {
  return ({
    data: state.reportreferences.utilidadesRef.data
  })
}

export const selectTableReportsProps = (state): any => {
  return ({
    data: state.reportreferences.reports.data,
    totalRows: state.reportreferences.reports.totalRows,
    rowsPerPage: state.reportreferences.reports.rowsPerPage,
    page: state.reportreferences.reports.page
  })
}

export const selectTableBusinessProps = (state): any => {
  return ({
    data: state.reportreferences.business.data,
    totalRows: state.reportreferences.business.totalRows,
    rowsPerPage: state.reportreferences.business.rowsPerPage,
    page: state.reportreferences.business.page,
    sortedBy: state.reportreferences.correspondents.sortedBy,
    sortedType: state.reportreferences.correspondents.sortedType
  })
}

export const selectTableCorrespondondentsProps = (state): any => {
  return ({
    data: state.reportreferences.correspondents.data,
    totalRows: state.reportreferences.correspondents.totalRows,
    rowsPerPage: state.reportreferences.correspondents.rowsPerPage,
    page: state.reportreferences.correspondents.page,
    sortedBy: state.reportreferences.correspondents.sortedBy,
    sortedType: state.reportreferences.correspondents.sortedType
  })
}

export const selectLoading = (state): any => {
  return ({
    loading: state.reportreferences.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.reportreferences.error
  })
}

export const selectSuccess = (state): any => {
  return ({
    success: state.reportreferences.success
  })
}

export const selectReport = (state): any => {
  return ({
    report: state.reportreferences.informe
  })
}

export const selectDataReport = (state): any => {
  return ({
    data: state.reportreferences.reportreferencesreport.data
  })
}

export const selectAltaInforme = (state): any => {
  return ({
    fechaRecepcion: state.reportreferences.altaInformes.fechaRecepcion,
    tipoFichero: state.reportreferences.altaInformes.tipoFichero,
    codCreica: state.reportreferences.altaInformes.codCreica,
    codInforme: state.reportreferences.altaInformes.codInforme
  })
}

export const selectCorrespondent = (state): any => {
  return ({
    data: state.reportreferences.correspondents.data
  })
}

export const selectSolicitudes = (state): any => {
  return ({
    data: state.reportreferences.solicitudes.data
  })
}
// namespace "reportreferences"
export default { reportreferences: reducer }
