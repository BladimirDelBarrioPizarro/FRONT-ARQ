import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang } from '@cesce/arq'
import { FilesTableFTP, ModalError } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import {
  // Actions
  findCompanySearchRequest,
  handleSendSearchRequest,
  businessSearchRequestInformation,
  closeModalError,
  // Selectors
  selectTableBusinessPropsInformation,
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

const MetaFilesTableFTP: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const tableBusinessPropsInformation = useSelector(selectTableBusinessPropsInformation)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)

  const i18n = lang.currentLanguage()

  const [countries, setCountries] = useState([])

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

  const getPaises: any = async () => {
    const paises = await call.api.paises.get({})
    const { payload } = paises.data
    setCountries(getData({ code: 'value', description: 'label' }, payload))
  }

  const handleRowClickSearchResult = (rowData: any): void => {}
  const onChangePage = (page: number): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const totalRows = 15
  const rowsPerPage = 5
  const page = 0

  const drawerBusinessCodeProps = {
    i18n: i18n,
    countries: countries,
    handleSearch: (country, companyName, companyId, rowsPerPage, page, sortedType, sortedBy) => {
      dispatch(businessSearchRequestInformation(companyId, companyName, country, rowsPerPage, page, sortedType, sortedBy))
    },
    loading: false,
    error: false,
    tableCompanyProps: {
      i18n: i18n,
      data: tableBusinessPropsInformation.data,
      totalRows: tableBusinessPropsInformation.totalRows,
      rowsPerPage: tableBusinessPropsInformation.rowsPerPage,
      page: 0,
      sortedBy: tableBusinessPropsInformation.sortedBy,
      sortedType: tableBusinessPropsInformation.sortedType
    }
  }
  const handleClose = (): any => {
    dispatch(closeModalError())
  }

  useEffect(() => {
    getPaises()
  }, [])

  return (
    <>
      <FilesTableFTP
        sending={''}
        i18n={i18n}
        handleRowClickSearchResult={handleRowClickSearchResult}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        findCompany={ (businessForm) => { dispatch(findCompanySearchRequest(businessForm)) }}
        handleSend={(data) => { dispatch(handleSendSearchRequest(data)) }}
        drawerBusinessCodeProps={drawerBusinessCodeProps}
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

export { MetaFilesTableFTP }
