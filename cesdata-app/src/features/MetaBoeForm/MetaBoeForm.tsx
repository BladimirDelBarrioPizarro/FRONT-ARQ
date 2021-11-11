import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang } from '@cesce/arq'
import { BoeForm, ThemeCatalogueProvider } from '@cesce/ui-catalogue'

import {
  // actions
  boeSearchRequest,
  businessSearchRequest,
  correspondentsSearchRequest,
  // selectors
  selectTableCorrespondondentsProps,
  selectTableBusinessProps
} from './ducks'

const MetaBoeForm: any = () => {
  const dispatch = useDispatch()
  const tableCorrespondentsProps = useSelector(selectTableCorrespondondentsProps)
  const tableBusinessProps = useSelector(selectTableBusinessProps)

  const i18n = lang.currentLanguage()
  const [countries, setCountries] = useState()
  const [documentType, setDocumentType] = useState([])
  const [spendType, setSpendType] = useState([])
  const [productCode, setProductCode] = useState([])

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

  const getTipoDocumento: any = async () => {
    const documentos = await call.api.tipodocumento.get({})
    const { payload } = documentos.data
    setDocumentType(getData({ code: 'value', description: 'result' }, payload))
  }

  const getTipoProducto: any = async () => {
    const productos = await call.api.tipoproducto.get({})
    const { payload } = productos.data
    setProductCode(getData({ code: 'value', description: 'result' }, payload))
  }

  const getTipoGasto: any = async () => {
    const tipoGasto = await call.api.tipogasto.get({})
    const { payload } = tipoGasto.data
    setSpendType(getData({ code: 'value', description: 'result' }, payload))
  }

  useEffect(() => {
    getPaises()
    getTipoDocumento()
    getTipoProducto()
    getTipoGasto()
  }, [])

  return (

    <ThemeCatalogueProvider>
      <BoeForm
        i18n={i18n}
        documentType={documentType}
        productCode={productCode}
        spendType={spendType}
        handleSearch={(params) => { dispatch(boeSearchRequest(params)) }}
        drawerBusinessCodeProps={
          {
            i18n: i18n,
            countries,
            // handleSearch: (params) => {
            //   dispatch(businessSearchRequest(params))
            // },
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
        drawerCorresponsalCodeProps={
          {
            i18n: i18n,
            countries,
            handleSearch: (country, rowsPerPage, page, sortedType, sortedBy) => {
              dispatch(correspondentsSearchRequest(country, rowsPerPage, page, sortedType, sortedBy))
            },
            loading: false,
            error: false,
            tableCorrespondentsProps: {
              i18n: i18n,
              data: tableCorrespondentsProps.data,
              handleRowClickSearchResult: (rowData: any) => {},
              onChangePage: (page: number) => {},
              onChangeRowsPerPage: (pageNumber: number) => {},
              onColumnSortChange: (changedColumn: string, direction: string) => {},
              totalRows: tableCorrespondentsProps.totalRows,
              rowsPerPage: tableCorrespondentsProps.rowsPerPage,
              page: tableCorrespondentsProps.page
            }
          }
        }
      />
    </ThemeCatalogueProvider>
  )
}

export { MetaBoeForm }
