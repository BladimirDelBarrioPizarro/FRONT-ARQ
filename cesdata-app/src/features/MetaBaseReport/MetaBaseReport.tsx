import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import { lang } from '@cesce/arq'
import {
  BaseReport,
  ThemeCatalogueProvider,
  ModalError
} from '@cesce/ui-catalogue'

import {
  // actions
  baseReportSearchRequest,
  baseReportSearchRequestByCIF,
  closeModalError,
  // selectors
  selectData,
  selectReport,
  selectShowDownload,
  selectLoading,
  selectError
} from './ducks'

const useStyles = makeStyles((theme) => ({
  divContainer: {
    width: '100%',
    Height: '100%',
    backgroundColor: '#f9f9f9'
  },
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

const MetaBaseReport: any = (props) => {
  const classes = useStyles()
  const i18n = lang.currentLanguage()
  const dispatch = useDispatch()
  const stateData = useSelector(selectData)
  const stateReport = useSelector(selectReport)
  const stateShowDownload = useSelector(selectShowDownload)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)

  const handleClose = (): void => {
    dispatch(closeModalError())
  }

  const handleOut = (): void => {}
  const openReport = (): void => dispatch(baseReportSearchRequest(props.match.params.informe))
  const openReportCIF = (radio): void => dispatch(baseReportSearchRequestByCIF(props.match.params.informe, radio))

  useEffect(() => {
    if (props.match.params.radio === undefined) {
      openReport()
    } else {
      openReportCIF(props.match.params.radio)
    }
  }, [])

  return (
    <>
      {(function () {
        console.log({
          i18n: i18n,
          data: stateData.data,
          report: stateReport.report,
          showDownload: stateShowDownload.show,
          informe: props.match.params.informe
        })
      })()}
      <ThemeCatalogueProvider>
        <BaseReport
          i18n={i18n}
          data={stateData.data}
          report={stateReport.report}
          showDownload={stateShowDownload.show}
          handleOut={handleOut}
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
      </ThemeCatalogueProvider>
    </>
  )
}

export { MetaBaseReport }
