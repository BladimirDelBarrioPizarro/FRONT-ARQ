/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { TableReportsReferences } from '../../molecules/TableReportsReferences/TableReportsReferences'
import { IReportReferences } from './types'
import { TableUtilitiesReportRef } from '../../molecules/TableUtilitiesReportRef/TableUtilitiesReportRef'
import { BaseReportNoRef } from '../../templates/BaseReportNoRef/BaseReportNoRef'
import { HighReports } from '../../organisms/HighReports/HightReports'
import { ReceivingReports } from '../../organisms/ReceivingReports/ReceivingReports'
import { RefReceptionNum } from '../../organisms/RefRecepcionNum/RefReceptionNum'
import { ManualReception } from '../../molecules/ManualReception/ManualReception'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f9f9f9'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '1.6rem',
    marginBottom: '1.6rem'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    backgroundColor: '#f9f9f9',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMindBold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    marginBottom: '1rem'
  },
  labelDate: {
    width: '100%',
    fontFamily: 'test',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelCount: {
    width: '140px',
    height: '22px',
    marginTop: '12px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'right'
  },
  fieldDate: {
    width: '10em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff9900',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  fieldDateIn: {
    width: '10em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  fieldDateTo: {
    width: '10em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff9900',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  fieldDateToIn: {
    width: '10em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  button: {
    width: '12em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    background: '#003b64 url(https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-5.jpg) no-repeat;',
    backgroundPosition: '0px 6px',
    backgroundSize: '30px 25px;',
    color: '#fff',
    border: '1px',
    '&:hover': {
      background: '#ff9900 url(https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-5.jpg) no-repeat;',
      backgroundPosition: '0px 6px',
      backgroundSize: '30px 25px;'
    }
  },
  divButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '2rem'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'center'
  },
  buttonDelete: {
    width: '159px',
    height: '36px',
    marginLeft: '1.563rem',
    marginTop: '0.938rem',
    padding: '10px 0 4px',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    backgroundPosition: '0px 6px',
    backgroundSize: '30px 25px;'
  },
  form: {
  },
  tableReports: {
    marginTop: '2.6rem'
  },
  formContainer: {
    backgroundColor: '#ffffff',
    marginBottom: '1.6rem'
  }
}))

const ReportReferences: React.FunctionComponent<IReportReferences> = ({
  i18n,
  reportTableProps,
  handleSubmit,
  handleSendDelete,
  tableUtilitiesReportRefProps,
  handleLoading,
  baseReportNoRefProps,
  highReportsProps,
  receivingReportsProps,
  refReceptionNumProps,
  manualReceptionProps,
  handleAcceptManualReception,
  handleSearchCorresponsal,
  handleRecepcionManualPeticion,
  handleUtilidadesRefInformes,
  handleDeleteUtilidadesRef
}) => {
  const classes = useStyles()
  const [openTableReportRef, setOpenTableReportRef] = useState<boolean>(false)
  const [openBaseReport, setOpenBaseReport] = useState<boolean>(false)
  const [openAlta, setOpenAlta] = useState<boolean>(false)
  const [openReception, setOpenReception] = useState<boolean>(false)
  const [openTableReportReferences, setOpenTableReportReferences] = useState<boolean>(false)
  const [reportReferences, setReportReferences] = useState<boolean>(true)
  const [openRefReceptionNum, setOpenRefReceptionNum] = useState<boolean>(false)
  const [openManualReception, setOpenManualReception] = useState<boolean>(false)
  const [dateFrom, setDateFrom] = useState('')
  const [codCreica, setCodCreica] = useState('')
  const [totalRows, setTotalRows] = useState(20)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const [sortedBy, setSortedBy] = useState('codDeudor')
  const [sortedType, setSortedType] = useState('ASC')
  const [deleteFiles, setDeleteFiles] = useState([])
  const [totalRowsRepRef, setTotalRowsRepRef] = useState(20)
  const [rowsPerPageRepRef, setRowsPerPageRepRef] = useState(10)
  const [pageRepRef, setPageRepRef] = useState(0)
  const [sortedByRepRef, setSortedByRepRef] = useState('codDeudor')
  const [sortedTypeRepRef, setSortedTypeRepRef] = useState('ASC')
  const [numPetition, setNumPetition] = useState(0)

  useEffect(() => {
    if (dateFrom !== '') {
      executeQuery()
    }
  }, [sortedBy, sortedType, page, rowsPerPage])

  useEffect(() => {
    // TODO when reciving data
    // reportReferencesResult.handleSubmitReivingReports('', '', '', '') // TODO when reciving data
    console.log('call to report references')
  }, [sortedByRepRef, sortedTypeRepRef, pageRepRef, rowsPerPageRepRef])

  const handleOnChangePage = (page): void => {
    setPage(page)
    setTotalRows((page + 2) * rowsPerPage)
  }

  const handleOnChangePageRepRef = (page): void => {
    setPageRepRef(page)
    setTotalRowsRepRef((page + 2) * rowsPerPageRepRef)
  }

  const handleOnChangeRowsPerPage = (rowsPerPage): void => {
    setPage(0)
    setRowsPerPage(rowsPerPage)
    setTotalRows(2 * rowsPerPage)
  }

  const handleOnChangeRowsPerPageRepRef = (rowsPerPage): void => {
    setPageRepRef(0)
    setRowsPerPageRepRef(rowsPerPage)
    setTotalRowsRepRef(2 * rowsPerPage)
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    setPage(0)
    setTotalRows(rowsPerPage * 2)
    setSortedBy(changedColumn)
    setSortedType(direction.toUpperCase())
  }

  const onColumnSortChangeRepRef = (changedColumn: string, direction: string): void => {
    setPageRepRef(0)
    setTotalRowsRepRef(rowsPerPageRepRef * 2)
    setSortedByRepRef(changedColumn)
    setSortedTypeRepRef(direction.toUpperCase())
  }

  const handleSubmitReferences = (e): void => {
    e.preventDefault()
    setOpenTableReportReferences(true)
    setOpenAlta(false)
    setOpenReception(false)
    setOpenBaseReport(false)
    setReportReferences(true)
    setOpenManualReception(false)
    setOpenRefReceptionNum(false)
    setOpenTableReportRef(false)
    executeQuery()
  }

  useEffect(() => {
    executeTotal()
  }, [reportTableProps.data])

  useEffect(() => {
    executeTotalRepRef()
  }, [tableUtilitiesReportRefProps.data])

  const executeTotal = (): void => {
    if (reportTableProps.data.length < rowsPerPage) {
      setTotalRows((page * rowsPerPage) + reportTableProps.data.length)
    } else {
      if (reportTableProps.data.length > 0 && totalRows === 0) {
        setTotalRows(2 * rowsPerPage)
      }
    }
  }

  const executeTotalRepRef = (): void => {
    if (tableUtilitiesReportRefProps.data.length < rowsPerPageRepRef) {
      setTotalRowsRepRef((pageRepRef * rowsPerPageRepRef) + tableUtilitiesReportRefProps.data.length)
    } else {
      if (tableUtilitiesReportRefProps.data.length > 0 && totalRowsRepRef === 0) {
        setTotalRowsRepRef(2 * rowsPerPageRepRef)
      }
    }
  }

  const executeQuery = (): void => {
    handleSubmit(dateFrom, rowsPerPage, page, sortedBy, sortedType)
  }

  const handleCheckPetition = (e: any, tableRow: any): void => {
    if (e.target.checked === true) {
      setDeleteFiles(oldArray => [...oldArray, tableRow.rowData[3]])
    } else {
      setDeleteFiles(deleteFiles.filter(item => item !== tableRow.rowData[3]))
    }
  }
  const handleDelete = (): void => {
    handleSendDelete(deleteFiles)
    setDeleteFiles([])
  }

  const handlePressRow = (value: any, tableRow: any): void => {
    setCodCreica(tableRow.rowData[3])
    handleLoading(tableRow.rowData[3])
    setOpenTableReportReferences(false)
    setOpenBaseReport(true)
    setReportReferences(true)
  }

  const [dateFromIn, setDateFromIn] = useState(false)
  const changeDateFromIn = (): void => {
    setDateFromIn(true)
  }

  const changeDateFromOut = (): void => {
    setDateFromIn(false)
  }

  const handleAlta = (): void => {
    setOpenAlta(true)
    setOpenBaseReport(false)
  }

  const handleRecepcion = (): void => {
    setOpenBaseReport(false)
    setOpenReception(true)
  }

  const handleCancelHighReports = (): void => {
    setOpenAlta(false)
    setOpenBaseReport(true)
  }

  const handleCancelReceiving = (): void => {
    setOpenReception(false)
    setOpenRefReceptionNum(false)
    setOpenTableReportRef(false)
    setReportReferences(true)
  }

  const handleSubmitReceiving = (petitionNum, codCompany, product, codCorrespondent): void => {
    setOpenTableReportRef(true)
    receivingReportsProps.handleSubmit(petitionNum, codCompany, product, codCorrespondent)
  }

  const handlePressRowTableUtilities = (value: any, tableMeta: any): void => {
    handleUtilidadesRefInformes(tableMeta.rowData[2])
    setNumPetition(tableMeta.rowData[2])
    setOpenTableReportRef(false)
    setOpenReception(false)
    setOpenRefReceptionNum(true)
  }

  const handleReception = (): void => {
    setOpenManualReception(true)
    setOpenRefReceptionNum(false)
  }

  const handleBackManualReception = (): void => {
    setOpenManualReception(false)
    setOpenRefReceptionNum(true)
  }

  const handleAltaManualReception = (): void => {
    setOpenAlta(true)
    setOpenManualReception(false)
    setOpenRefReceptionNum(false)
  }

  const handleCancelManualReception = (): void => {
    setOpenAlta(false)
    setOpenManualReception(false)
    setOpenRefReceptionNum(false)
    setOpenBaseReport(true)
  }

  manualReceptionProps.handleAccept = (tiporespuesta, product, medio, date, notas) => {
    handleRecepcionManualPeticion(codCreica, numPetition, tiporespuesta, product, medio, date, notas)
  }

  highReportsProps.handleSearchCorresponsal = (country) => {
    handleSearchCorresponsal(country)
  }

  const handleCancelBaseReportNoRef = (): any => {
    setOpenBaseReport(false)
    setReportReferences(true)
    handleDeleteUtilidadesRef(codCreica)
  }

  const handleCancelRefReceptionNum = (): any => {
    handleDeleteUtilidadesRef(codCreica)
    setOpenManualReception(false)
    setOpenRefReceptionNum(false)
    setOpenAlta(false)
    setReportReferences(true)
  }

  const handleAltaRefReceptionNum = (): any => {
    setOpenAlta(true)
    setOpenManualReception(false)
    setOpenRefReceptionNum(false)
  }

  return (
    <div className={classes.root}>
      <div className={classes.divHeader}>
        {i18n['ReportReferences:typo1rr']}
      </div>
      {reportReferences
        ? <div className={classes.formContainer}>
          <form className={classes.form}>
            <div className={classes.divFlex}>
              <div className={classes.divContainer}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">

                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <div className={classes.labelDate}>
                      {i18n['ReportReferences:label1rr']}
                    </div>
                  </Grid>
                  <Grid item xs={10} sm={10} md={2} lg={2} xl={2}>
                    <input
                      id="date"
                      type="date"
                      className={(dateFromIn ? classes.fieldDate : classes.fieldDateIn)}
                      onChange={(e) => setDateFrom(e.target.value)}
                      value={dateFrom}
                      onFocus={changeDateFromIn}
                      onBlur={changeDateFromOut}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                  </Grid>
                  <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                    <div className={classes.divButtons}>
                      <button
                        onClick={handleSubmitReferences}
                        className={classes.button}
                      >
                        {i18n['ReportReferences:button1rr']}
                      </button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </form>
        </div>
        : <></>}
      {openTableReportReferences
        ? reportTableProps.data.length === 0 || reportTableProps.data.length > 100 ? null : (
          <div className={classes.tableReports}>
            <TableReportsReferences
              i18n={reportTableProps.i18n}
              data={reportTableProps.data}
              handlePressRow={handlePressRow}
              onChangePage={handleOnChangePage}
              onChangeRowsPerPage={handleOnChangeRowsPerPage}
              onColumnSortChange={onColumnSortChange}
              onViewColumnsChange={reportTableProps.onViewColumnsChange}
              handleCheckPetition={handleCheckPetition}
              page={page}
              rowsPerPage={rowsPerPage}
              totalRows={totalRows}
            />
            <div>
              <div className={classes.divButton}>
                <button
                  className={classes.buttonDelete}
                  onClick={handleDelete}
                >
                  {i18n['ReportReferences:button2rr']}
                </button>
              </div>
            </div>
          </div>
        ) : <></>}
      {openBaseReport
        ? (<BaseReportNoRef
          i18n={baseReportNoRefProps.i18n}
          data={baseReportNoRefProps.data}
          report={baseReportNoRefProps.report}
          showDownload={baseReportNoRefProps.showDownload}
          handleAlta={handleAlta}
          handleRecepcion={handleRecepcion}
          handleCancel={handleCancelBaseReportNoRef}
        />)
        : <></>}

      {openAlta
        ? <HighReports
          i18n={highReportsProps.i18n}
          countries={highReportsProps.countries}
          products={highReportsProps.products}
          corresponsals={highReportsProps.corresponsals}
          drawerBusinessCodeProps={highReportsProps.drawerBusinessCodeProps}
          documentType={highReportsProps.documentType}
          spendType={highReportsProps.spendType}
          handleCancel={handleCancelHighReports}
          handleSearchCorresponsal={highReportsProps.handleSearchCorresponsal}
          confirmationProps={highReportsProps.confirmationProps}
          handleAccept={highReportsProps.handleAccept}
        />
        : <> </>}
      {openReception
        ? <ReceivingReports
          i18n={receivingReportsProps.i18n}
          countries={receivingReportsProps.countries}
          corresponsals={receivingReportsProps.corresponsals}
          elementBackProps={receivingReportsProps.elementBackProps}
          drawerBusinessCodeProps={receivingReportsProps.drawerBusinessCodeProps}
          products={receivingReportsProps.products}
          handleSubmit={handleSubmitReceiving}
          handleCancel={handleCancelReceiving}
          handleSearchCorresponsal={receivingReportsProps.handleSearchCorresponsal}
        />
        : <> </>}
      {
        openTableReportRef
          ? <TableUtilitiesReportRef
            data={tableUtilitiesReportRefProps.data}
            handlePressRow={handlePressRowTableUtilities}
            handleSendCancel={tableUtilitiesReportRefProps.handleSendCancel}
            i18n={tableUtilitiesReportRefProps.i18n}
            onChangePage={handleOnChangePageRepRef}
            onChangeRowsPerPage={handleOnChangeRowsPerPageRepRef}
            onColumnSortChange={onColumnSortChangeRepRef}
            onViewColumnsChange={tableUtilitiesReportRefProps.onViewColumnsChange}
            page={pageRepRef}
            rowsPerPage={rowsPerPageRepRef}
            totalRows={totalRowsRepRef}
          /> : <></>

      }
      {openRefReceptionNum
        ? <RefReceptionNum
          i18n={refReceptionNumProps.i18n}
          data={refReceptionNumProps.data}
          handleAlta={handleAltaRefReceptionNum}
          handleCancel={handleCancelRefReceptionNum}
          handleReception={handleReception}
        /> : <></>}
      {openManualReception
        ? <ManualReception
          i18n={manualReceptionProps.i18n}
          data={manualReceptionProps.data}
          tipoRespuesta={manualReceptionProps.tipoRespuesta}
          producto={manualReceptionProps.producto}
          medioRecepcion={manualReceptionProps.medioRecepcion}
          handleBack={handleBackManualReception}
          handleAlta={handleAltaManualReception}
          handleAccept={manualReceptionProps.handleAccept}
          handleCancel={handleCancelManualReception}
        />
        : <></>}
    </div>
  )
}

export { ReportReferences }
export type { IReportReferences }
