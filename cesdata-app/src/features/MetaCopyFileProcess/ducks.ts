import produce from 'immer'
import { call, lang, log } from '@cesce/arq'
import { errorController, ExcepcionFormato } from '../../config/error-config'

// Actions Types
const COPYFILEPROCESS_CLOSE_MODAL_ERROR = 'cesdata/copyfileprocess/error/close'
const COPYFILEPROCESS_LOADING = 'cesdata/copyfileprocess/loading'
const COPYFILEPROCESS_ERROR = 'cesdata/copyfileprocess/error'
const COPYFILEPROCESS_CLEAN = 'cesdata/copyfileprocess/clean'
const COPYFILEPROCESS_SEARCH_SUCCESS = 'cesdata/copyfileprocess/copyfileprocess_search_success'
const UPLOAD_FILES_SEARCH_SUCCESS = 'cesdata/copyfileprocess/upload_files_search_success'
const SEND_FILES_SEARCH_SUCCESS = 'cesdata/copyfileprocess/send_files_search_success'
const DOWNLOAD_FILES_SEARCH_SUCCESS = 'cesdata/copyfileprocess/download_files_search_success'

// Actions creators
export const copyFileProcessSearchRequest = (params): any => {
  return {
    type: COPYFILEPROCESS_SEARCH_SUCCESS,
    payload: {
      data: params.data
    }
  }
}

const uploadFilesSuccess = ({
  data,
  files
}): any => {
  return {
    type: UPLOAD_FILES_SEARCH_SUCCESS,
    payload: {
      data,
      files
    }
  }
}

const copyFilesError = (error): any => {
  return {
    type: COPYFILEPROCESS_ERROR,
    payload: {
      error: error
    }
  }
}

export const uploadFilesSearchRequest = (files) => {
  return async (dispatch) => {
    try {
      log.trace(`uploadFilesSearchRequest: ${JSON.stringify(files)}`)
      dispatch({ type: COPYFILEPROCESS_LOADING })
      if (files.filter(file => file.file !== null).length === 0) {
        const i18n = lang.currentLanguage()
        ExcepcionFormato(i18n['SimulationReport:errorFilesEmpty'])
      }
      var FormData = require('form-data')
      const config = {
        headers: {
          'Content-type': 'multipart/form-data;'
        }
      }
      var formData = new FormData()
      files.filter(file => file.file !== null).map((file) => {
        formData.append('listaFicheros', file.file, file.file.name)
      })
      log.info(`REST POST to simulation with params: ${JSON.stringify(files)}`)
      const data = await call.api.simulation.post(formData, config)
      log.info(`REST POST to simulation response: ${JSON.stringify(data)}`)
      dispatch(uploadFilesSuccess({
        data: data.data,
        files: files
      }))
    } catch (error) {
      log.error(`ERROR POST to simulation with params: ${JSON.stringify(files)}`, {
        error: error
      })
      dispatch(
        copyFilesError(
          errorController(error)
        )
      )
    }
  }
}
const downloadFilesSuccess = ({
  data
}): any => {
  return {
    type: DOWNLOAD_FILES_SEARCH_SUCCESS,
    payload: {
      data
    }
  }
}

export const downloadFilesSearchRequest = ({
  files
}) => {
  return async (dispatch) => {
    try {
      log.trace(`downloadFilesSearchRequest: ${JSON.stringify(files)}`)
      dispatch({ type: COPYFILEPROCESS_LOADING })
      log.info(`REST POST to download with params: ${JSON.stringify(files)}`)
      const { data } = await call.api.simulation.get({
        files
      })
      log.info(`REST POST to download response: ${JSON.stringify(data)}`)
      dispatch(downloadFilesSuccess({
        data: data.data
      }))
    } catch (error) {
      log.error(`ERROR POST to download with params: ${JSON.stringify(files)}`, {
        error: error
      })
      dispatch(
        copyFilesError(
          errorController(error)
        )
      )
    }
  }
}

export const closeModalError = () => {
  return async (dispatch) => {
    dispatch({ type: COPYFILEPROCESS_CLOSE_MODAL_ERROR })
  }
}

export const cleanData = () => {
  return async (dispatch) => {
    dispatch({ type: COPYFILEPROCESS_CLEAN })
  }
}

// Initial State
const initialState = {
  loading: false,
  showResult: false,
  error: {
    open: false,
    message: ''
  },
  copyfileprocess: {
    data: []
  }
}

// reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case COPYFILEPROCESS_LOADING:
      draft.loading = true
      break
    case COPYFILEPROCESS_ERROR:
      draft.loading = false
      draft.error.open = true
      draft.error.message = action.payload.error
      break
    case COPYFILEPROCESS_CLOSE_MODAL_ERROR:
      draft.error.open = false
      break
    case UPLOAD_FILES_SEARCH_SUCCESS:
      draft.loading = false
      draft.copyfileprocess.data = mapFiles(action.payload.files)
      draft.showResult = true
      break
    case SEND_FILES_SEARCH_SUCCESS:
    case DOWNLOAD_FILES_SEARCH_SUCCESS:
      draft.loading = false
      draft.copyfileprocess.data = action.payload.data
      break
    case COPYFILEPROCESS_CLEAN:
      draft.copyfileprocess.data = []
      draft.showResult = false
      break
  }
}, initialState)

export const selectLoading = (state): any => {
  return ({
    loading: state.copyfileprocess.loading
  })
}

export const selectError = (state): any => {
  return ({
    error: state.copyfileprocess.error
  })
}

export const selectShowResult = (state): any => {
  return ({
    showResult: state.copyfileprocess.showResult
  })
}

export const selectDataResult = (state): any => {
  return ({
    data: state.copyfileprocess.copyfileprocess.data
  })
}
// mappers

const bytesToSize: (n: number) => string = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
}

const mapFiles = (files): any => {
  return files.map((element) => {
    return {
      name: element.file.name,
      tamano: bytesToSize(element.file.size),
      file: element.file
    }
  })
}

// namespace "copyfileprocess"
export default { copyfileprocess: reducer }
