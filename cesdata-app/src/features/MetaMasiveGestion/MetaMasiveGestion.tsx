import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang, log } from '@cesce/arq'
import { MasiveGestion, ModalError } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import {
  // actions
  masiveGestionSendSearchRequest,
  masiveGestionDeleteRequest,
  masiveGestionMoveRequest,
  masiveGestionCopyRequest,
  businessSearchRequest,
  closeModalError,
  businessSearchCleaning,
  // selectors
  selectTableMasiveGestion,
  selectTableBusinessProps,
  selectReports,
  selectLoading,
  selectError
} from './ducks'

const useStyles = makeStyles((theme) => ({
  divContainer: {
    width: '100%',
    Height: '100%'
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

const MetaMasiveGestion = (): any => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const i18n = lang.currentLanguage()
  const tableMasiveGestionProps = useSelector(selectTableMasiveGestion)
  const tableBusinessProps = useSelector(selectTableBusinessProps)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)
  const stateReports = useSelector(selectReports)

  const onChangePage = (page: number): void => {}
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const onViewColumnsChange = (column: any): void => {}
  const handleCheckReport = (value: any, tableMeta: any): void => {}
  const handleRowClick = (rowData: any): void => {}

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
    log.info('REST GET countries')
    const paises = await call.api.paises.get({})
    log.info(`REST GET countries response: ${JSON.stringify(paises)}`)
    const { payload } = paises.data
    setCountries(getData({ code: 'value', description: 'label' }, payload))
  }

  const masiveTableReportProps = {
    i18n: i18n,
    data: tableMasiveGestionProps.data,
    handleRowClick: handleRowClick,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    totalRows: tableMasiveGestionProps.totalRows,
    rowsPerPage: tableMasiveGestionProps.rowsPerPage,
    page: 0,
    itemChecked: tableMasiveGestionProps.itemChecked,
    handleCheckReport: handleCheckReport
  }

  const handleClose = (): any => {
    dispatch(closeModalError())
  }

  useEffect(() => {
    getPaises()
  }, [])

  return (
    <>
      {(function () {
        console.log({
          masiveTableReportProps: masiveTableReportProps,
          i18n: i18n,
          countries: countries,
          handleSearch: (debtorFrom, debtorTo, rowsPerPage, page, sortedBy, sortedType) => {
            dispatch(masiveGestionSendSearchRequest(debtorFrom, rowsPerPage, page, sortedBy, sortedType))
          },
          drawerBusinessCodeProps:
            {
              i18n: i18n,
              countries,
              handleSearch: (companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType) => {
                dispatch(businessSearchRequest(companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType))
              },
              loading: false,
              error: false,
              tableCompanyProps: {
                i18n: i18n,
                data: tableBusinessProps.data,
                handleRowClickSearchResult: (rowData: any) => {},
                totalRows: tableBusinessProps.totalRows,
                onChangePage: (page: number) => {},
                onChangeRowsPerPage: (pageNumber: number) => {},
                onViewColumnsChange: (column: any) => {},
                onColumnSortChange: (changedColumn: string, direction: string) => {},
                rowsPerPage: tableBusinessProps.rowsPerPage,
                page: tableBusinessProps.rowsPerpage
              }
            },
          handleDelete: (debtorFrom, reports) => {
            dispatch(masiveGestionDeleteRequest(debtorFrom, reports))
          },
          handleMove: (debtorFrom, debtorTo, reports) => {
            dispatch(masiveGestionMoveRequest(debtorFrom, debtorTo, reports))
          },
          handleCopy: (debtorFrom, debtorTo, reports) => {
            dispatch(masiveGestionCopyRequest(debtorFrom, debtorTo, reports))
          }
        })
      })()}
      <div className={classes.divContainer}>
        <MasiveGestion
          masiveTableReportProps={masiveTableReportProps}
          i18n={i18n}
          handleSearch={(debtorFrom, itemsPerPage, currentPage, sortedBy, sortedType) => {
            dispatch(masiveGestionSendSearchRequest(debtorFrom, itemsPerPage, currentPage, sortedBy, sortedType))
          }}
          drawerBusinessCodeProps={
            {
              i18n: i18n,
              countries,
              handleSearch: (companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType) => {
                dispatch(businessSearchRequest(companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType))
              },
              loading: false,
              error: false,
              tableCompanyProps: {
                i18n: i18n,
                data: tableBusinessProps.data,
                handleRowClickSearchResult: (rowData: any) => {},
                totalRows: tableBusinessProps.totalRows,
                onChangePage: (page: number) => {},
                onChangeRowsPerPage: (pageNumber: number) => {},
                onViewColumnsChange: (column: any) => {},
                onColumnSortChange: (changedColumn: string, direction: string) => {},
                rowsPerPage: tableBusinessProps.rowsPerPage,
                page: tableBusinessProps.rowsPerpage
              }
            }
          }
          handleDelete={(debtorFrom, reports) => {
            dispatch(masiveGestionDeleteRequest(debtorFrom, reports))
          }}
          handleMove={(debtorFrom, debtorTo, reports) => {
            dispatch(masiveGestionMoveRequest(debtorFrom, debtorTo, reports))
          }}
          handleCopy={(debtorFrom, debtorTo, reports) => {
            dispatch(masiveGestionCopyRequest(debtorFrom, debtorTo, reports))
          }}
          cleanReports={stateReports.reports}
          cleanDrawerBusiness={() => {
            dispatch(businessSearchCleaning())
          }}
        />
      </div>
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

export { MetaMasiveGestion }
