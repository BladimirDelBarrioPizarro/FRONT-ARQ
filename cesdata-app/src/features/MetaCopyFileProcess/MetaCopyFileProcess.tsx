import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { lang } from '@cesce/arq'
import { SimulationReport, ModalError } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import {
  // actions
  uploadFilesSearchRequest,
  downloadFilesSearchRequest,
  closeModalError,
  cleanData,
  // selectors,
  selectDataResult,
  selectShowResult,
  selectLoading,
  selectError
} from './ducks'

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    overflow: 'hidden'
  },
  spiner: {
    color: '#ff9900',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
}))

const MetaCopyFileProcess: React.FC = () => {
  const classes = useStyles()
  const i18n = lang.currentLanguage()
  const dispatch = useDispatch()

  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)
  const stateShowResult = useSelector(selectShowResult)
  const stateDataResult = useSelector(selectDataResult)

  const handleClose = (): any => {
    dispatch(closeModalError())
  }
  return (
    <>
      {(function () {
        console.log({
          i18n: i18n,
          handleSendFiles: (params) => { dispatch(uploadFilesSearchRequest(params)) },
          handleDownloadFiles: (params) => { dispatch(downloadFilesSearchRequest(params)) },
          showResult: stateShowResult.showResult,
          loading: false,
          error: false
        })
      })()}
      <SimulationReport
        i18n={i18n}
        handleSendFiles={(params) => { dispatch(uploadFilesSearchRequest(params)) }}
        showResult={stateShowResult.showResult}
        data={stateDataResult.data}
        handleCleanFiles={() => { dispatch(cleanData()) }}
      />
      <Dialog
        open={stateLoading.loading}
        disableBackdropClick={true}
        PaperProps ={{
          classes: {
            root: classes.dialog
          }
        }}
      >
        <DialogContent>
          <CircularProgress
            className={classes.spiner}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        open={stateError.error.open}
        disableBackdropClick={true}
        PaperProps ={{
          classes: {
            root: classes.dialog
          }
        }}
      >
        <ModalError
          logo ={logo}
          i18n={i18n}
          message={stateError.error.message}
          open={stateError.error.open}
          handleClose={ handleClose }
        />
      </Dialog>
    </>
  )
}

export { MetaCopyFileProcess }
