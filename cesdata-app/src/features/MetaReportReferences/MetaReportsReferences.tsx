import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { call, lang } from '@cesce/arq'
import { ReportReferences, ModalError, ModalSuccess } from '@cesce/ui-catalogue'
import {
  makeStyles,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import { logoError, logoSuccess } from '../../config/constantes'
import { mapperRestoPaises, mapperFrPtIt, mapperNODB, dataBaseReport, mapperUtilidadesRef, dataRefReceptionNumFaker } from './mappers/index'
import {
  // actions
  reportsSearchRequest,
  reportsDeleteRequest,
  businessSearchRequest,
  correspondentsSearchRequest,
  reportsLoadingIdentificacionRequest,
  closeModalError,
  closeModalSuccess,
  reportsAltaRequest,
  referenciacionsolicitudesRequest,
  manualPetitionReceptionRequest,
  utilidadesRefRequest,
  reportsDeleteRefRequest,
  // selectors
  selectTableReportsProps,
  selectTableBusinessProps,
  selectLoading,
  selectError,
  selectReport,
  selectDataReport,
  selectAltaInforme,
  selectCorrespondent,
  selectSolicitudes,
  selectSuccess,
  selectUtilitiesRef,
  // enum
  ReportTypes
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

const MetaReportReferences: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const i18n = lang.currentLanguage()

  const tableReportsProps = useSelector(selectTableReportsProps)
  const tableBusinessProps = useSelector(selectTableBusinessProps)
  const stateLoading = useSelector(selectLoading)
  const stateError = useSelector(selectError)
  const stateSuccess = useSelector(selectSuccess)
  const dataInforme = useSelector(selectDataReport)
  const reportData = useSelector(selectReport)
  const dataAltaInformes = useSelector(selectAltaInforme)
  const corresponsales = useSelector(selectCorrespondent)
  const tableSolicitudes = useSelector(selectSolicitudes)
  const utilidadesRef = useSelector(selectUtilitiesRef)
  const [countries, setCountries] = useState()
  const [documentType, setDocumentType] = useState([])
  const [productCode, setProductCode] = useState([])
  const [spendType, setSpendType] = useState()
  const [tipoRespuesta, setTipoRespuesta] = useState()
  const [medioRecepcion, setMedioRecepcion] = useState()

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

  const getTipoRespuesta: any = async () => {
    const tiporespuesta = await call.api.tiporespuesta.get({})
    const { payload } = tiporespuesta.data
    setTipoRespuesta(getData({ code: 'value', description: 'label' }, payload))
  }

  const getMedioRecepcion: any = async () => {
    const medioRecepcion = await call.api.mediorecepcion.get({})
    const { payload } = medioRecepcion.data
    setMedioRecepcion(getData({ code: 'value', description: 'label' }, payload))
  }

  const getTipoDocumento: any = async () => {
    const documentos = await call.api.tipodocumento.get({})
    const { payload } = documentos.data
    setDocumentType(getData({ code: 'value', description: 'label' }, payload))
  }

  const getTipoProducto: any = async () => {
    const productos = await call.api.tipoproducto.get({})
    const { payload } = productos.data
    setProductCode(getData({ code: 'value', description: 'label' }, payload))
  }

  const getTipoGasto: any = async () => {
    const tipoGasto = await call.api.tipogastos.get({})
    const { payload } = tipoGasto.data
    setSpendType(getData({ code: 'value', description: 'label' }, payload))
  }

  const getPaises: any = async () => {
    const paises = await call.api.paises.get({})
    const { payload } = paises.data
    setCountries(getData({ code: 'value', description: 'label' }, payload))
  }

  const onChangePage = (page: number): void => { }
  const onChangeRowsPerPage = (pageNumber: number): void => {}
  const handleOnViewColumnsChange = (column: string): void => {}
  const onColumnSortChange = (changedColumn: string, direction: string): void => {}
  const handlePressRow2 = (value: any, tableRow: any): void => console.log('handlePressRow: ', tableRow, value)
  const handleCheckPetition = (value: any, tableMeta: any): any => {}

  const reportTableProps = {
    i18n: i18n,
    data: tableReportsProps.data,
    handlePressRow: handlePressRow2,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: tableReportsProps.totalRows,
    rowsPerPage: tableReportsProps.rowsPerPage,
    page: tableReportsProps.page,
    onViewColumnsChange: handleOnViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    handleCheckPetition: handleCheckPetition
  }

  const drawerBusinessCodeProps = {
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

  const handleSubmitReceiving = (petitionNum, codCompany, product, codCorrespondent): void => {
    dispatch(referenciacionsolicitudesRequest(petitionNum, codCompany, product, codCorrespondent))
  }

  const handleBack = (): void => {}
  const elementBackProps = {
    label: '',
    size: '',
    handleBack: handleBack
  }
  const handleCancelReceiving = (): void => {}
  const receivingReportsProps = {
    i18n: i18n,
    countries: countries,
    corresponsals: corresponsales.data,
    elementBackProps: elementBackProps,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    products: productCode,
    handleSubmit: handleSubmitReceiving,
    handleCancel: handleCancelReceiving,
    handleSearchCorresponsal: (country) => {
      dispatch(correspondentsSearchRequest(country))
    }
  }

  const handleClose = (): void => {
    dispatch(closeModalError())
  }

  const handleRecepcion = (): void => {}
  const handleAlta = (): void => {}
  const handleCancel = (): void => {}

  const handlePressRow = (value: any, tableMeta: any): void => { console.log('handlePressRow') }
  const onViewColumnsChange = (column: any): void => {}
  const handleSendCancel = (): void => {}

  const tableUtilitiesReportRefProps = {
    i18n: i18n,
    data: tableSolicitudes.data,
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    totalRows: 15,
    rowsPerPage: 5,
    page: 1,
    handlePressRow: handlePressRow,
    onViewColumnsChange: onViewColumnsChange,
    onColumnSortChange: onColumnSortChange,
    handleSendCancel: handleSendCancel
  }

  let report = null
  if (reportData.report?.data !== undefined) {
    report = reportData.report.data
    switch (report) {
      case ReportTypes.RESTO_PAISES:
        mapperRestoPaises(dataInforme.data.payload)
        break
      case ReportTypes.FR_PT_IT:
        mapperFrPtIt(dataInforme.data.payload)
        break
      case ReportTypes.NODB:
        mapperNODB(dataInforme.data.payload)
        break
    }
  }

  const handleCancelConfirmationProps = (): void => {}
  const handleAltaInformeSinExpediente = (codDeudor, typeDocument, codCorrespondent, product, typeExpensive, actualDate, codCreica, codInforme): void => {
    dispatch(reportsAltaRequest(codDeudor, typeDocument, codCorrespondent, product, typeExpensive, actualDate, formatDate(dataAltaInformes.fechaRecepcion), dataAltaInformes.codCreica, dataAltaInformes.codInforme, dataAltaInformes.tipoFichero))
  }

  const dataConfirm = {}
  const confirmationProps = {
    i18n: i18n,
    data: dataConfirm,
    handleAccept: handleAltaInformeSinExpediente,
    handleCancel: handleCancelConfirmationProps,
    elementBackProps: elementBackProps
  }

  const highReportsProps = {
    i18n: i18n,
    countries: countries,
    products: productCode,
    corresponsals: corresponsales.data,
    drawerBusinessCodeProps: drawerBusinessCodeProps,
    documentType: documentType,
    spendType: spendType,
    handleCancel: handleCancel,
    handleSearchCorresponsal: (country) => {
      dispatch(correspondentsSearchRequest(country))
    },
    confirmationProps: confirmationProps,
    handleAccept: handleAltaInformeSinExpediente
  }
  const baseReportNoRefProps = {
    i18n: i18n,
    data: dataBaseReport,
    report: report,
    showDownload: true,
    highReportsProps: highReportsProps,
    receivingReportsProps: receivingReportsProps,
    handleAlta: handleAlta,
    handleRecepcion: handleRecepcion,
    handleCancel: handleCancel
  }

  if (utilidadesRef?.data?.data?.payload[0]) {
    mapperUtilidadesRef(utilidadesRef.data.data.payload[0])
  }

  const handleAltaRef = (): void => {}
  const handleReceptionRef = (): void => {}
  const handleCancelRefReceptionNum = (codCreica): void => {
    dispatch(reportsDeleteRefRequest(codCreica))
  }
  const refReceptionNumProps = {
    i18n: i18n,
    data: dataRefReceptionNumFaker,
    handleAta: handleAltaRef,
    handleReception: handleReceptionRef,
    handleCancel: handleCancelRefReceptionNum
  }

  const dataManualReceptionFaker = {
    tiporespuesta: 'tiporespuesta',
    producto: 'producto',
    mediorecepcion: 'mediorecepcion',
    fecharecepcion: 'fecharecepcion',
    notas: 'notas'
  }

  const handleAcceptRecepcionManual = (codCreica, numPetition, tiporespuesta, product, medio, date, notas): void => {
    dispatch(manualPetitionReceptionRequest(codCreica, numPetition, tiporespuesta, product, medio, date, notas))
  }
  const manualReceptionProps = {
    i18n: i18n,
    data: dataManualReceptionFaker,
    tipoRespuesta: tipoRespuesta,
    producto: productCode,
    medioRecepcion: medioRecepcion,
    handleBack: handleBack,
    handleAlta: handleAlta,
    handleAccept: handleAcceptRecepcionManual,
    handleCancel: handleCancel
  }

  const handleCloseSuccess = (): any => {
    dispatch(closeModalSuccess())
  }
  const handleAcceptManualReception = (tiporespuesta, product, medio, date, notas): void => {}

  const formatDate: any = (fecha) => {
    var year = fecha.substring(0, 4)
    var month = fecha.substring(4, 6)
    var day = fecha.substring(6, fecha.lenght)
    return `${day}/${month}/${year}`
  }

  const handleUtilidadesRefInformes = (codCreica): void => {
    dispatch(utilidadesRefRequest(codCreica))
  }

  const handleDeleteUtilidadesRef = (codCreica): void => {
    // dispatch(reportsDeleteRefRequest(codCreica))
  }

  useEffect(() => {
    getPaises()
    getTipoDocumento()
    getTipoProducto()
    getTipoGasto()
    getTipoRespuesta()
    getMedioRecepcion()
  }, [])

  return (
    <>
      {(function () {
        setTimeout(() => document.querySelectorAll('td').forEach(el => {
          el.style.cursor = 'pointer'
        }), 500)
      })()}
      <ReportReferences
        i18n={i18n}
        reportTableProps={reportTableProps}
        handleSubmit={(dateFrom, rowsPerPage, page, sortedBy, sortedType) => {
          dispatch(reportsSearchRequest(dateFrom, rowsPerPage, page, sortedBy, sortedType))
        }}
        handleSendDelete={(deleteFiles: any) => {
          dispatch(reportsDeleteRequest(deleteFiles))
        }}
        tableUtilitiesReportRefProps={tableUtilitiesReportRefProps}
        handleLoading={(codCreica) => {
          dispatch(reportsLoadingIdentificacionRequest(codCreica))
        }}
        handleRecepcionManualPeticion={handleAcceptRecepcionManual}
        baseReportNoRefProps={baseReportNoRefProps}
        highReportsProps={highReportsProps}
        receivingReportsProps={receivingReportsProps}
        refReceptionNumProps={refReceptionNumProps}
        manualReceptionProps={manualReceptionProps}
        handleAcceptManualReception={handleAcceptManualReception}
        handleSearchCorresponsal={(country) => {
          dispatch((correspondentsSearchRequest(country)))
        }}
        handleUtilidadesRefInformes={handleUtilidadesRefInformes}
        handleDeleteUtilidadesRef={handleDeleteUtilidadesRef}
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
          logo ={logoError}
          i18n={i18n}
          message={stateError.error.message}
          open={stateError.error.open}
          handleClose={ handleClose }
        />
      </Dialog>

      <Dialog
        open={stateSuccess.success.open}
        disableBackdropClick={true}
        PaperProps ={{
          classes: {
            root: classes.dialog
          }
        }}
      >
        <ModalSuccess
          i18n={i18n}
          logo ={logoSuccess}
          message={stateSuccess.success.message}
          open={stateSuccess.success.open}
          handleClose={ handleCloseSuccess }
        />
      </Dialog>
    </>
  )
}

export { MetaReportReferences, ReportTypes }
