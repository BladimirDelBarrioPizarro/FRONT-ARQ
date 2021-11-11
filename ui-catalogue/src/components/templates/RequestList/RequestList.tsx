import React, { useState, useEffect } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import { TableRequestList } from '../../molecules/TableRequestList/TableRequestList'
import { Grid } from '@material-ui/core'
import { DetailRequest } from '../../organisms/DetailRequest/DetailRequest'
import { IRequestList, IDateTimeFormatOptions } from './types'
import { PetitionForm } from '../../organisms/PetitionForm/PetitionForm'
import {
  ElementFormSelect
} from '../../atoms/index'

const useStyles = makeStyles((theme) => ({
  margen: {
    marginTop: 15
  },
  divContainer: {
    width: '100%',
    Height: '100%'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMindBold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    marginBottom: '1rem'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divElements: {
    backgroundColor: '#ffffff',
    width: '100%'
  },
  divContent: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginTop: '2.6rem',
    marginBottom: '2.6rem'
  },
  divButons: {
    marginBottom: '2.6rem',
    backgroundColor: '#ffffff',
    width: '100%'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'center'
  },
  divMarginBottom: {
    marginTop: '1.6rem',
    marginBottom: '1.6rem'
  },
  divMarginAnulationItem: {
    marginBottom: '1.6rem'
  },
  labelDate: {
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    minWidth: '10em'
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
  fieldAnulation: {
    width: '243px',
    height: '20px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
  },
  button: {
    width: '12em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const RequestList: React.FC<IRequestList> = ({
  tableRequestListProps,
  i18n,
  handleSubmit,
  handleSubmitDetail,
  detailRequestProps,
  handleOpenReport,
  cancelType,
  handleSendCancel,
  petitionFromProps,
  handlePetitionPost
}) => {
  const [anulationPetition, setAnulationPetition] = useState('')
  const [open, setOpen] = useState(false)
  const [dateFrom, setDateFrom] = useState('')
  const [, setData] = useState(null)
  const [anulation, setAnulation] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [totalRows, setTotalRows] = useState(20)
  const [page, setPage] = useState(0)
  const [sortedType, setSortedType] = useState('ASC')
  const [sortedBy, setSortedBy] = useState('numPeticion')
  const [addReport, setAddReport] = useState(false)
  const [cancelReport, setCancelReport] = useState(false)

  const handleAnulation = (e): void => {
    setAnulation(e.target.value)
  }

  const handleDate: () => void = () => {
    executeQuery()
  }

  useEffect(() => {
    executeQuery()
  }, [sortedType, sortedBy, page, rowsPerPage])

  const executeQuery: () => void = () => {
    if (dateFrom !== '') {
      setOpen(false)
      setAddReport(false)
      setCancelReport(false)
      handleSubmit(formatDate(dateFrom), rowsPerPage, page, sortedBy, sortedType)
    }
  }

  useEffect(() => {
    executeTotal()
  }, [tableRequestListProps.data])

  const executeTotal = (): void => {
    if (tableRequestListProps.data.length < rowsPerPage) {
      setTotalRows((page * rowsPerPage) + tableRequestListProps.data.length)
    } else {
      if (tableRequestListProps.data.length > 0 && totalRows === 0) {
        setTotalRows(2 * rowsPerPage)
      }
    }
  }

  const handleCancelReport: () => void = () => {
    if (anulationPetition !== '') {
      setCancelReport(true)
      handleSubmitDetail(anulationPetition)
    }
  }

  const handleAddPetitionPost = (datos): void => {
    setOpen(false)
    setAddReport(false)
    setCancelReport(false)
    handlePetitionPost(datos)
  }

  const handleAddReport: () => void = () => {
    setOpen(false)
    setAddReport(true)
    setCancelReport(false)
  }

  const handlePetitonBack: () => void = () => {
    setAddReport(false)
  }

  const handleSendCancelRequest: () => void = () => {
    handleSendCancel(anulationPetition, anulation)
    if (anulation === null || anulation === '') {
      setCancelReport(true)
    } else {
      executeQuery()
    }
  }

  tableRequestListProps.handleDetailRequest = (value) => {
    setData(value)
    setOpen(true)
  }

  const handlePressRow = (value: any, tableRow: any): void => {
    handleSubmitDetail(tableRow.rowData[1])

    setOpen(true)
  }

  const handleCheckPetition = (e: any, tableRow: any): void => {
    if (tableRow.rowData[5] === 'EMITIDA' || tableRow.rowData[5] === 'CONFIRMADA') {
      setAnulationPetition(tableRow.rowData[1])
    }
  }

  const handleBack = (): void => {
    setOpen(false)
    setCancelReport(false)
  }

  const handleOnChangePage = (page): void => {
    setPage(page)
    setTotalRows((page + 2) * rowsPerPage)
  }

  const handleOnChangeRowsPerPage = (pageNumber): void => {
    setPage(0)
    setRowsPerPage(pageNumber)
    setTotalRows(2 * pageNumber)
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    setPage(0)
    setTotalRows(2 * rowsPerPage)
    setSortedBy(changedColumn)
    setSortedType(direction.toUpperCase())
  }

  const [dateFromIn, setDateFromIn] = useState(false)
  const changeDateFromIn = (): void => {
    setDateFromIn(true)
  }

  const changeDateFromOut = (): void => {
    setDateFromIn(false)
  }

  tableRequestListProps.handleCheckPetition = ({ rowIndex }): void => {
    // eslint-disable-next-line no-return-assign
    document.querySelectorAll("input[type='checkbox']").forEach((el: any, i: number) => {
      if (i === rowIndex && el.checked === true) el.checked = true
      else el.checked = false
    })
  }

  const classes = useStyles()

  const options: IDateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
  const formatDate: any = (fecha) => {
    if (fecha.length >= 10) {
      const date = (fecha !== null && fecha !== '') ? new Date(fecha) : new Date()
      return date.toLocaleDateString('es-ES', options).toString()
    } else {
      return ''
    }
  }

  return (
    <div className={classes.divContainer}>

      <div className={classes.divHeader}>
        {i18n['RequestList:titlerl']}
      </div>

      <div className={classes.divFlex}>
        <div className={classes.divElements}>
          <div className={classes.divMarginBottom}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center">

              <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                <div className={classes.labelDate}>
                  {i18n['RequestList:labelDaterl']}
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
                    onClick={handleDate}
                    className={classes.button}
                  >
                    {i18n['RequestList:buttonSendrl']}
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      {!open && !cancelReport && addReport && (
        <div className={classes.divFlex}>
          <div className={classes.divContent}>
            <PetitionForm
              i18n={petitionFromProps.i18n}
              data={petitionFromProps.data}
              balanceNPGC={petitionFromProps.balanceNPGC}
              formsJuridic = {petitionFromProps.formsJuridic}
              referencesBank = {petitionFromProps.referencesBank}
              commentsFactory = {petitionFromProps.commentsFactory}
              handleAccept={handleAddPetitionPost}
              handleBack={handlePetitonBack}
              handleCancel={handlePetitonBack}
            />
          </div>
        </div>
      )}

      {!addReport && !cancelReport && open && (
        <>
          <div className={classes.divFlex}>
            <div className={classes.divContent}>
              <DetailRequest
                i18n={detailRequestProps.i18n}
                data={detailRequestProps.data}
              />
            </div>
          </div>
          <div className={classes.divFlex}>
            <div className={classes.divButons}>
              <div className={classes.divMarginBottom}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Grid xs={2} sm={2} md={1} lg={1} xl={1}>

                  </Grid>
                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <button
                      onClick={handleAddReport}
                      className={classes.button}
                    >
                      {i18n['RequestList:setReportrl']}
                    </button>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>

                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <button
                      onClick={handleBack}
                      className={classes.button}
                    >
                      {i18n['DetailRequest:detailBtReturn']}
                    </button>
                  </Grid>
                  <Grid xs={2} sm={2} md={1} lg={1} xl={1}>

                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </>
      )}

      {!addReport && !open && !cancelReport && tableRequestListProps.data.length > 0 && (
        <>
          <div className={classes.divFlex}>
            <div className={classes.divContent}>
              <TableRequestList
                i18n={tableRequestListProps.i18n}
                data={tableRequestListProps.data}
                handleCheckPetition={handleCheckPetition}
                handleDetailRequest={tableRequestListProps.handleDetailRequest}
                handlePressRow={handlePressRow}
                onChangePage={handleOnChangePage}
                onChangeRowsPerPage={handleOnChangeRowsPerPage}
                onViewColumnsChange={tableRequestListProps.onViewColumnsChange}
                onColumnSortChange={onColumnSortChange}
                page={page}
                itemChecked={anulationPetition}
                rowsPerPage={rowsPerPage}
                totalRows={totalRows}
              />
            </div>
          </div>
          <div className={classes.divFlex}>
            <div className={classes.divButons}>
              <div className={classes.divMarginBottom}>
                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Grid xs={2} sm={2} md={1} lg={1} xl={1}>

                  </Grid>
                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <button
                      onClick={handleAddReport}
                      className={classes.button}
                    >
                      {i18n['RequestList:setReportrl']}
                    </button>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>

                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <button
                      onClick={handleCancelReport}
                      className={classes.button}
                    >
                      {i18n['RequestList:acceptrl']}
                    </button>
                  </Grid>
                  <Grid xs={2} sm={2} md={1} lg={1} xl={1}>

                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </>
      )}

      {!addReport && !open && cancelReport && (
        <>
          <div className={classes.divFlex}>
            <div className={classes.divContent}>
              <DetailRequest
                i18n={detailRequestProps.i18n}
                data={detailRequestProps.data}
              />
            </div>
          </div>
          <div className={classes.divFlex}>
            <div className={classes.divButons}>
              <div className={classes.divMarginBottom}>
                <div className={classes.divMarginAnulationItem}>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <ElementFormSelect
                      name={'cancelType'}
                      label={i18n['RequestList:cancelReasonrl']}
                      handleSet={handleAnulation}
                      values={cancelType}
                    />
                  </Grid>
                </div>

                <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
                  <Grid xs={2} sm={2} md={1} lg={1} xl={1}>

                  </Grid>
                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <button
                      onClick={handleSendCancelRequest}
                      className={classes.button}
                    >
                      {i18n['RequestList:acceptrl']}
                    </button>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>

                  <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <button
                      onClick={handleBack}
                      className={classes.button}
                    >
                      {i18n['DetailRequest:detailBtReturn']}
                    </button>
                  </Grid>
                  <Grid xs={2} sm={2} md={1} lg={1} xl={1}>

                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { RequestList }
export type { IRequestList }
