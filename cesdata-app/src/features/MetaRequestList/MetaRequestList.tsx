import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang } from '@cesce/arq'
import { RequestList, ModalError } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError as logo } from '../../config/constantes'
import {
  // actions
  requestListSendSearchRequest,
  requestListAnulationSearchRequest,
  requestListSearchPetitionRequest,
  requestListAddRequest,
  closeModalError,
  // selectors
  selectTableRequestList,
  selectDetailRequest,
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

const MetaRequestList = (): any => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const tableRequestListProps = useSelector(selectTableRequestList)
  const tableDetailRequestProps = useSelector(selectDetailRequest)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)

  const i18n = lang.currentLanguage()
  const [cancelType, setCancelType] = useState()
  const [origenBalances, setOrigenBalances] = useState()
  const [formasJuridicas, setFormasJuridicas] = useState()
  const [referenciasBancos, setReferenciasBancos] = useState()
  const [commentariosEmpresa, setCommentariosEmpresa] = useState()
  const [dateFrom, setDateFrom] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [sortedType, setSortedType] = useState('ASC')
  const [sortedBy, setSortedBy] = useState('numPeticion')

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

  const getCancelType: any = async () => {
    const result = await call.api.cancelType.get({})
    const { payload } = result.data
    setCancelType(getData({ code: 'value', description: 'label' }, payload))
  }

  const getOrigenBalances: any = async () => {
    const result = await call.api.balance.get({})
    const { payload } = result.data
    setOrigenBalances(getData({ code: 'value', description: 'result' }, payload))
  }

  const getFormasJuridicas: any = async () => {
    const result = await call.api.formJuridic.get({})
    const { payload } = result.data
    setFormasJuridicas(getData({ code: 'value', description: 'result' }, payload))
  }

  const getReferenciasBancos: any = async () => {
    const result = await call.api.refBank.get({})
    const { payload } = result.data
    setReferenciasBancos(getData({ code: 'value', description: 'result' }, payload))
  }

  const getComentariosEmpresa: any = async () => {
    const result = await call.api.commentTester.get({})
    const { payload } = result.data
    setCommentariosEmpresa(getData({ code: 'value', description: 'result' }, payload))
  }

  const handleDetailRequest = (value): void => {}
  const handleCheckPetition = (value): void => {}
  const tableRequestList = {
    i18n: i18n,
    data: tableRequestListProps.data,
    handleRowClick: (): void => {},
    onChangePage: (): void => {},
    onChangeRowsPerPage: (): void => {},
    totalRows: tableRequestListProps.totalRows,
    rowsPerPage: tableRequestListProps.rowsPerPage,
    page: 0,
    handleDetailRequest: handleDetailRequest,
    handleCheckPetition: handleCheckPetition
  }

  const detailRequest = {
    i18n: i18n,
    data: tableDetailRequestProps.data
  }
  const handleOpenReport = (): any => {
  }

  const detailPetitionData = {
    nombreSujeto: '',
    codFiscal: '',
    domicilio: '',
    provincia: '',
    codPostal: '',
    numeroTelefono: '',
    numeroFax: '',
    observaciones: '',
    juridica: '',
    fechaConstitucion: '',
    sucursales: '',
    empleados: '',
    capitalSocial: '',
    capitalDesembolsado: '',
    CNAE: '',
    tipoProducto: '',
    ventasEstimadas: '',
    bancos: '',
    concClientes: '',
    princClientes: '',
    princProveedores: '',
    competidores: '',
    exportacion: '',
    paises: '',
    confidencial: 'false',
    alerta: 'false',
    consolidado: 'false',
    accionistas: '',
    participadas: '',
    refBanco: '',
    opinionEmpresa: '',
    opinionSector: '',
    conclAuditoria: '',
    comenAuditoria: '',
    origenBalances: '',
    fechasCierre1: '',
    fechasCierre2: '',
    fechasCierre3: '',
    mesesBalances1: '',
    mesesBalances2: '',
    mesesBalances3: '',
    accionistas1: '',
    accionistas2: '',
    accionistas3: '',
    Inmovilizado1: '',
    Inmovilizado2: '',
    Inmovilizado3: '',
    establecimiento1: '',
    establecimiento2: '',
    establecimiento3: '',
    materiales1: '',
    materiales2: '',
    materiales3: '',
    inmateriales1: '',
    inmateriales2: '',
    inmateriales3: '',
    financieras1: '',
    financieras2: '',
    financieras3: '',
    accionesPropias1: '',
    accionesPropias2: '',
    accionesPropias3: '',
    deducciones1: '',
    deducciones2: '',
    deducciones3: ''
  }

  const balancesNPGCProps = {
    i18n: i18n,
    data: detailPetitionData,
    origenBalances: origenBalances,
    handleRefresh: (): void => {}
  }

  const petitionFromProps = {
    i18n: i18n,
    data: detailPetitionData,
    formsJuridic: formasJuridicas,
    referencesBank: referenciasBancos,
    commentsFactory: commentariosEmpresa,
    balanceNPGC: balancesNPGCProps,
    handleAccept: (): void => {},
    handleBack: (): void => {},
    handleCancel: (): void => {}
  }

  const handleCancel = async (
    petition,
    motive
  ): Promise<void> => {
    await dispatch(requestListAnulationSearchRequest(petition, motive))
    dispatch(requestListSendSearchRequest(dateFrom, itemsPerPage, currentPage, sortedBy, sortedType))
  }

  const handleSubmit = (dateFrom, itemsPerPage, currentPage, sortedBy, sortedType): void => {
    dispatch(requestListSendSearchRequest(dateFrom, itemsPerPage, currentPage, sortedBy, sortedType))
    setDateFrom(dateFrom)
    setItemsPerPage(itemsPerPage)
    setCurrentPage(currentPage)
    setSortedBy(sortedBy)
    setSortedType(sortedType)
  }

  const handleClose = (): any => {
    dispatch(closeModalError())
  }

  useEffect(() => {
    getCancelType()
    getOrigenBalances()
    getFormasJuridicas()
    getReferenciasBancos()
    getComentariosEmpresa()
  }, [])

  return (
    <>
      {(function () {
        console.log({
          tableRequestListProps: tableRequestList,
          i18n: i18n,
          handleSubmit: handleSubmit,
          handleSubmitDetail: (petition) => {
            dispatch(requestListSearchPetitionRequest(petition))
          },
          detailRequestProps: detailRequest,
          handleOpenReport: handleOpenReport,
          cancelType: cancelType,
          handleSendCancel: handleCancel,
          petitionFromProps: petitionFromProps,
          handlePetitionPost: (params) => {
            dispatch(requestListAddRequest(params))
          },
          origenBalances: origenBalances,
          formsJuridic: formasJuridicas,
          referencesBank: referenciasBancos,
          commentsFactory: commentariosEmpresa,
          balanceNPGC: balancesNPGCProps
        })
      })()}
      <RequestList
        tableRequestListProps={tableRequestList}
        i18n={i18n}
        handleSubmit={handleSubmit}
        handleSubmitDetail={(petition) => {
          dispatch(requestListSearchPetitionRequest(petition))
        }}
        detailRequestProps={detailRequest}
        handleOpenReport={handleOpenReport}
        cancelType={cancelType}
        handleSendCancel={handleCancel}
        petitionFromProps={petitionFromProps}
        handlePetitionPost={(params) => {
          dispatch(requestListAddRequest(params))
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

export { MetaRequestList }
