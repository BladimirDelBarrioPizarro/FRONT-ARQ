import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang, log } from '@cesce/arq'
import { ConsultReports, ModalError } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import {
  // actions
  reportsSearchRequestAdvanced,
  businessSearchRequestInformation,
  businessSearchRequestAdvanced,
  closeModalError,
  businessSearchRequestCleanDrawerInformation,
  cleanData,
  // selectors
  selectTableReportsPropsAdvanced,
  selectTableBusinessPropsInformation,
  selectTableBusinessPropsAdvanced,
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

const MetaConsultReports: React.FC<any> = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const tableReportsPropsAdvanced = useSelector(selectTableReportsPropsAdvanced)
  const tableBusinessPropsInformation = useSelector(selectTableBusinessPropsInformation)
  const tableBusinessPropsAdvanced = useSelector(selectTableBusinessPropsAdvanced)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)
  const i18n = lang.currentLanguage()

  const [countries, setCountries] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [reQuery, setReQuery] = useState(true)

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
    log.info('REST GET countries')
    const paises = await call.api.paises.get({})
    log.info(`REST GET countries response: ${JSON.stringify(paises)}`)
    const { payload } = paises.data
    setCountries(getData({ code: 'value', description: 'label' }, payload))
  }

  const handleRowClick = (): void => {}

  const tableReportsAdvanced = {
    i18n: i18n,
    data: tableReportsPropsAdvanced.data,
    handleRowClick: handleRowClick,
    onChangePage: (): void => { },
    onChangeRowsPerPage: (): void => { },
    totalRows: tableReportsPropsAdvanced.totalRows,
    rowsPerPage: tableReportsPropsAdvanced.rowsPerPage,
    page: 0
  }

  const tableBusinessAdvanced = {
    i18n: i18n,
    data: tableBusinessPropsAdvanced.data,
    handleRowClick: (): void => { },
    onChangePage: (): void => { },
    onChangeRowsPerPage: (): void => { },
    totalRows: tableBusinessPropsAdvanced.totalRows,
    rowsPerPage: tableBusinessPropsAdvanced.rowsPerPage,
    page: 0,
    sortedBy: tableBusinessPropsAdvanced.sortedBy,
    sortedType: tableBusinessPropsAdvanced.sortedType
  }

  const drawerBusinessCodeProps = {
    i18n: i18n,
    countries: countries,
    handleSearch: (country, companyName, companyId, rowsPerPage, page, sortedType, sortedBy) => {
      if (loaded) {
        dispatch(businessSearchRequestInformation(companyId, companyName, country, rowsPerPage, page, sortedType, sortedBy))
      }
    },
    loading: false,
    error: false,
    cleanDrawerBusinessCodeProps: () => {
      if (loaded) {
        dispatch(businessSearchRequestCleanDrawerInformation())
      }
    },
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

  const advancedInformationSearch = {
    country: countries,
    i18n: i18n,
    findCompanyError: true,
    reportTableProps: tableReportsAdvanced,
    tableBusinessProps: tableBusinessAdvanced,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    findCompany: (companyFormData, rowsPerPage, page, sortedType, sortedBy) => {
      if (loaded) {
        if (reQuery) {
          dispatch(businessSearchRequestAdvanced(companyFormData, rowsPerPage, page))
        } else {
          setReQuery(true)
        }
      }
    },
    findAll: (override, params, rowsPerPage, page, sortedType, sortedBy) => {
      if (loaded) {
        if (reQuery) {
          dispatch(reportsSearchRequestAdvanced(override, params, false, rowsPerPage, page, sortedType, sortedBy))
        } else {
          setReQuery(true)
        }
      }
    },
    findLast: (override, params, rowsPerPage, page, sortedType, sortedBy) => {
      if (loaded) {
        if (reQuery) {
          dispatch(reportsSearchRequestAdvanced(override, params, true, rowsPerPage, page, sortedType, sortedBy))
        } else {
          setReQuery(true)
        }
      }
    }
  }

  const experianR = {
    i18n: i18n,
    handleSearchExperian: (cif, radio) => {
      if (loaded) {
        openBaseReportCIF(cif, radio)
      }
    }
  }

  const openBaseReportCIF = (cif, radio): void => {
    openUrl(window.location.origin + `/basereport/${cif}/${radio}`)
  }

  const handleClose = (): void => {
    dispatch(closeModalError())
  }

  const cleanConsultReport = (): void => {
    if (tableReportsAdvanced.data.length >= 1) {
      dispatch(cleanData())
      setReQuery(false)
    }
  }

  useEffect(() => {
    getPaises()
    dispatch(cleanData())
    setLoaded(true)
  }, [])

  const openBaseReport = (rowData): void => {
    openUrl(window.location.origin + `/basereport/${rowData[0].props.children}`)
  }

  const openUrl = (url): void => {
    window.open(url)
  }

  return (
    <>
      {(function () {
        setTimeout(() => document.querySelectorAll('td').forEach(el => {
          el.style.cursor = 'pointer'
        }), 500)

        console.log({
          i18n: i18n,
          experianR: experianR,
          advancedInformationSearch: advancedInformationSearch,
          stateLoading: stateLoading,
          stateError: stateError
        })
      })()}
      <ConsultReports
        i18n={i18n}
        experianR={experianR}
        advancedInformationSearch={advancedInformationSearch}
        handleOpenBaseReport={(rowData) => openBaseReport(rowData)}
        cleanConsultReport={ () => {
          if (loaded) {
            cleanConsultReport()
          }
        }
        }
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

export { MetaConsultReports }
