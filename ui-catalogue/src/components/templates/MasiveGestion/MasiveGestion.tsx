import React, { useState, useEffect } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Grid,
  Dialog,
  IconButton
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { IMasiveGestion } from './types'
import { MasiveTableReport } from '../../molecules/MasiveTableReport/MasiveTableReport'
import { DrawerBusinessCode } from '../../organisms/DrawerBusinessCode/DrawerBusinessCode'
import * as yup from 'yup'
import {
  ElementFormInput
} from '../../atoms/index'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
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
  divContent: {
    backgroundColor: '#ffffff',
    width: '100%',
    marginTop: '2.6rem'
  },
  divElements: {
    backgroundColor: '#ffffff',
    width: '100%'
  },
  divButons: {
    marginBottom: '2.6rem',
    backgroundColor: '#ffffff',
    width: '100%'
  },
  tabStyleActive: {
    color: '#ffffff',
    width: '100%'
  },
  tabStyleDefault: {
    color: '#003b64',
    backgroundColor: '#ffffff'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  inputStyle: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff9900',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  inputStyleIn: {
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  divError: {
    fontSize: '8px',
    color: 'red'
  },
  divIconSearch: {

  },
  divButtonSearch: {
    marginTop: '25px',
    float: 'right',
    marginBottom: '2.6rem'
  },
  buttonSearch: {
    color: '#fff',
    width: '8em',
    height: '3em',
    boxShadow: '1px 1px 4px 0 rgb(0 0 0 / 30%)',
    borderRadius: '6px',
    backgroundColor: '#003b64'
  },
  iconSearch: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  button: {
    width: '8em',
    height: '3em',
    marginTop: '2.6em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  dialog: {
    minWidth: '80%',
    maxWidth: 'none',
    overflow: 'hidden'
  }
}))

const MasiveGestion: React.FC<IMasiveGestion> = ({
  masiveTableReportProps,
  i18n,
  handleSearch,
  drawerBusinessCodeProps,
  handleDelete,
  handleMove,
  handleCopy,
  cleanReports,
  cleanDrawerBusiness
}) => {
  const classes = useStyles()
  const [destination, setDestination] = useState({
    from: false,
    pattern: ''
  })
  const [openDrawer, setOpenDrawer] = useState(false)

  const [debtorTo, setDebtorTo] = useState('')
  const [debtorFrom, setDebtorFrom] = useState('')
  const [masiveReport, setMasiveReport] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const [sortedType, setSortedType] = useState('ASC')
  const [sortedBy, setSortedBy] = useState('numPeticion')
  const [errorDeudorFromMessage, setErrorDeudorFromMessage] = useState('')
  const [errorDeudorToMessage, setErrorDeudorToMessage] = useState('')

  const handleExecuteSearch: () => void = () => {
    executeQuery()
  }

  useEffect(() => {
    executeQuery()
  }, [sortedType, sortedBy, page, rowsPerPage])

  const deudorRegExp = /^[0-9]{3}(-[0-9]{6})?$/

  const schemaCodDeudor = yup.object().shape({
    deudor: yup.string()
      .trim()
      .matches(deudorRegExp)
      .length(10)
      .required()
  })

  var mask = []
  const debtorPattern = '   -      '

  const applyMask = (data): string => {
    return mask.map(function (char) {
      if (char !== ' ') return char
      if (data.length === 0) return char
      return data.shift()
    }).join('')
  }

  const reapplyMask = (data): string => {
    return applyMask(stripMask(data))
  }

  const isDigit = (char): boolean => {
    return /\d/.test(char)
  }

  const stripMask = (maskedData): string => {
    return maskedData.split('').filter(isDigit)
  }

  const debtorInput = (document.getElementById('debtor') as HTMLInputElement)
  const debtorInputTo = (document.getElementById('debtorTo') as HTMLInputElement)

  const handleSetDebtorFrom = (e): void => {
    e.preventDefault()
    debtorInput.value = e.target.value.replaceAll('.', '-')
  }

  const handleSetDebtorTo = (e): void => {
    e.preventDefault()
    debtorInputTo.value = e.target.value.replaceAll('.', '-')
  }

  const validateDebtor = (item: string, value: string, callError: any): void => {
    callError('')
    if (value.includes('*')) {
      if (value.includes('-')) {
        if (value.substr(0, value.indexOf('-')).length > 3) {
          callError(i18n['MasiveGestion:debtorErrorLabel'])

          if (item === 'from') {
            setDebtorFrom('')
          } else {
            setDebtorTo('')
          }
          return
        }
        var checkValueAs = value.substr(0, value.indexOf('-')).padStart(3, '0') + '-' + value.substr(value.indexOf('-') + 1)

        if (item === 'from') {
          setDebtorFrom(checkValueAs)
          debtorInput.value = checkValueAs
        } else {
          setDebtorTo(checkValueAs)
          debtorInputTo.value = checkValueAs
        }
      }
    } else {
      var checkValue = value.substr(0, value.indexOf('-')).padStart(3, '0') + '-' + value.substr(value.indexOf('-') + 1).padStart(6, '0')

      if (item === 'from') {
        setDebtorFrom(checkValue)
        debtorInput.value = checkValue
      } else {
        setDebtorTo(checkValue)
        debtorInputTo.value = checkValue
      }
      if (checkValue.replace('-', '') !== '') {
        schemaCodDeudor.isValid({ deudor: checkValue })
          .then(resp => {
            if (!resp) {
              if (item === 'from') {
                setDebtorFrom('')
              } else {
                setDebtorTo('')
              }
              callError(i18n['MasiveGestion:debtorErrorLabel'])
            }
          })
        .catch(err => console.log(err)) // eslint-disable-line
      } else {
        callError('')
        if (item === 'from') {
          setDebtorFrom('')
        } else {
          setDebtorTo('')
        }
      }
    }
  }

  const executeQuery = (): void => {
    if (debtorFrom !== '') {
      handleSearch(debtorFrom, rowsPerPage, page, sortedBy, sortedType)
    }
  }

  const handleCheckReport = (e: any, tableRow: any): void => {
    if (e.target.checked === true) {
      setMasiveReport(oldArray => [...oldArray, e.target.id])
    } else {
      setMasiveReport(masiveReport.filter(item => item !== e.target.id))
    }
  }

  const handleOnChangePage = (page): void => {
    setPage(page)
  }

  const handleOnChangeRowsPerPage = (pageNumber): void => {
    setPage(0)
    setRowsPerPage(pageNumber)
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    setPage(0)
    setSortedBy(changedColumn)
    setSortedType(direction.toUpperCase())
  }

  const handleDrawerOpen = (from, pattern: string): void => {
    setDestination({
      from: from,
      pattern: pattern
    })
    setOpenDrawer((prevState) => !prevState)
  }

  const handleDrawerClose = (): void => {
    setOpenDrawer(false)
  }

  const handleClickTableBusiness = (rowData): void => {
    handleDrawerClose()
    mask = destination.pattern.split('')

    var value = ''

    rowData[0].props.children.toString().split('').forEach(char => {
      value += char
      value = reapplyMask(value)
    })

    if (destination.from) {
      validateDebtor('from', value.trim(), setErrorDeudorFromMessage)
      setDebtorFrom(value.trim())
    } else {
      validateDebtor('to', value.trim(), setErrorDeudorToMessage)
      setDebtorTo(value.trim())
    }
    cleanDrawerBusiness()
  }

  useEffect(() => {
    cleanMasiveReports()
  }, [cleanReports])

  const cleanMasiveReports = (): void => {
    setMasiveReport([])
  }

  const handleBlurDebtor = (e): void => {
    e.preventDefault()

    validateDebtor('from', e.target.value.replaceAll(' ', ''), setErrorDeudorFromMessage)
  }

  const handleBlurDebtorTo = (e): void => {
    e.preventDefault()

    validateDebtor('to', e.target.value.replaceAll(' ', ''), setErrorDeudorToMessage)
  }

  return (
    <div className={classes.divContainer}>
      <Dialog
        open={openDrawer}
        onClose={handleDrawerClose}
        disableBackdropClick={true}
        className={classes.dialog}
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DrawerBusinessCode
          tableCompanyProps={
            Object.assign(
              {},
              drawerBusinessCodeProps.tableCompanyProps,
              { handleRowClickSearchResult: handleClickTableBusiness }
            )
          }
          i18n={drawerBusinessCodeProps.i18n}
          countries={drawerBusinessCodeProps.countries}
          handleSearch={drawerBusinessCodeProps.handleSearch}
          loading={drawerBusinessCodeProps.loading}
          error={drawerBusinessCodeProps.error}
          handleBack={handleDrawerClose}
        />
      </Dialog>

      <div className={classes.divHeader}>
        {i18n['MasiveGestion:tittleLabel']}
      </div>

      <div className={classes.divFlex}>
        <div className={classes.divElements}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">

            <ElementFormInput
              type={'text'}
              name={'debtor'}
              label={i18n['MasiveGestion:debtorFromLabel']}
              handleSet={handleSetDebtorFrom}
              value={debtorFrom}
              errorMessage={errorDeudorFromMessage}
              placeholder={debtorPattern}
              maxLength={10}
              onBlur={handleBlurDebtor}
            />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div className={classes.divIconSearch}>
                <IconButton onClick={() => handleDrawerOpen(true, debtorPattern)}>
                  <MoreHorizIcon className={classes.iconSearch}/>
                </IconButton>
              </div>
            </Grid>

            <ElementFormInput
              type={'text'}
              name={'debtorTo'}
              label={i18n['MasiveGestion:debtorToLabel']}
              handleSet={handleSetDebtorTo}
              value={debtorTo}
              errorMessage={errorDeudorToMessage}
              placeholder={debtorPattern}
              maxLength={10}
              onBlur={handleBlurDebtorTo}
            />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div className={classes.divIconSearch}>
                <IconButton onClick={() => handleDrawerOpen(false, debtorPattern)}>
                  <MoreHorizIcon className={classes.iconSearch}/>
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div className={classes.divButtonSearch}>
                <button
                  onClick={handleExecuteSearch}
                  className={classes.button}
                >
                  {i18n['MasiveGestion:buttonSendrl']}
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {masiveTableReportProps.data.length > 0 && (
        <>
          <div className={classes.divFlex}>
            <div className={classes.divContent}>
              <MasiveTableReport
                i18n={masiveTableReportProps.i18n}
                data={masiveTableReportProps.data}
                handleRowClick={masiveTableReportProps.handleRowClick}
                handleCheckReport={handleCheckReport}
                onChangePage={handleOnChangePage}
                onChangeRowsPerPage={handleOnChangeRowsPerPage}
                onViewColumnsChange={masiveTableReportProps.onViewColumnsChange}
                onColumnSortChange={onColumnSortChange}
                page={page}
                rowsPerPage={rowsPerPage}
                totalRows={masiveTableReportProps.totalRows}
              />
            </div>
          </div>

          <div className={classes.divFlex}>
            <div className={classes.divButons}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={10} sm={9} md={1} lg={1} xl={1}>
                  <button
                    onClick={() => {
                      handleDelete(debtorFrom, masiveReport)
                    }
                    }
                    className={classes.button}
                  >
                    {i18n['MasiveGestion:buttonDeleterl']}
                  </button>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
                <Grid item xs={10} sm={9} md={1} lg={1} xl={1}>
                  <button
                    onClick={() => {
                      handleMove(debtorFrom, debtorTo, masiveReport)
                    }
                    }
                    className={classes.button}
                  >
                    {i18n['MasiveGestion:buttonMoverl']}
                  </button>
                </Grid>
                <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                </Grid>
                <Grid item xs={10} sm={9} md={1} lg={1} xl={1}>
                  <button
                    onClick={() => {
                      handleCopy(debtorFrom, debtorTo, masiveReport)
                    }}
                    className={classes.button}
                  >
                    {i18n['MasiveGestion:buttonCopyrl']}
                  </button>
                </Grid>
              </Grid>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { MasiveGestion }
export type { IMasiveGestion }
