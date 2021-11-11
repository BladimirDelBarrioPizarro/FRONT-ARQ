import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang } from '@cesce/arq'
import { CreatedReports, ModalError } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import {
// actions
  checkReportRequest,
  createReportRequest,
  businessSearchRequest,
  correspondentsSearchRequest,
  closeModalError,
  // selectors
  selectTableBusinessProps,
  selectTableCorrespondondentsProps,
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

const MetaCreateReports: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const i18n = lang.currentLanguage()

  const tableBusinessProps = useSelector(selectTableBusinessProps)
  const tableCorrespondentsProps = useSelector(selectTableCorrespondondentsProps)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)

  const [countries, setCountries] = useState([])
  const [countriesSelect, setCountriesSelect] = useState([])
  const [documentTypes, setDocumentTypes] = useState([])
  const [productCodes, setProductCodes] = useState([])
  const [saleTypes, setSaleTypes] = useState([])

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
    setCountriesSelect(getData({ code: 'value', description: 'label' }, payload))
  }

  const getTiposDocumento: any = async () => {
    const paises = await call.api.tipodocumento.get({})
    const { payload } = paises.data
    setDocumentTypes(getData({ code: 'value', description: 'label' }, payload))
  }

  const getProductos: any = async () => {
    const paises = await call.api.tipoproducto.get({})
    const { payload } = paises.data
    setProductCodes(getData({ code: 'value', description: 'label' }, payload))
  }

  const getTiposVenta: any = async () => {
    const paises = await call.api.tipogastos.get({})
    const { payload } = paises.data
    setSaleTypes(getData({ code: 'value', description: 'label' }, payload))
  }

  const drawerBusinessCodeProps = {
    i18n: i18n,
    countries: countries,
    handleSearch: (companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType) => {
      dispatch(businessSearchRequest(companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType))
    },
    loading: false,
    error: false,
    tableCompanyProps: {
      i18n: i18n,
      data: tableBusinessProps.data,
      rowsPerPage: tableBusinessProps.rowsPerPage,
      page: tableBusinessProps.rowsPerpage
    }
  }
  const handleClose = (): any => {
    dispatch(closeModalError())
  }

  useEffect(() => {
    getPaises()
    getTiposDocumento()
    getProductos()
    getTiposVenta()
  }, [])

  return (
    <>
      {(function () {
        console.log({
          i18n: i18n,
          documentTypes: documentTypes,
          countries: countriesSelect,
          productCodes: productCodes,
          saleTypes: saleTypes,
          loading: false,
          error: false
        })
      })()}
      <CreatedReports
        i18n={i18n}
        documentTypes={documentTypes}
        countries={countriesSelect}
        corresponsals={tableCorrespondentsProps.data}
        productCodes={productCodes}
        saleTypes={saleTypes}
        drawerBusinessCodeProps={drawerBusinessCodeProps}
        handleCheckData={(params) => {
          dispatch(checkReportRequest(params))
        }}
        handleAccept={(params) => {
          dispatch(createReportRequest(params))
        }}
        handleSearchCorresponsal={(country) => {
          dispatch(correspondentsSearchRequest(country))
        }}
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

export { MetaCreateReports }
