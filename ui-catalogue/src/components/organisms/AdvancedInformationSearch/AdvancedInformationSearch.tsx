import React, { useState, ChangeEvent, useEffect } from 'react'
import {
  IconButton,
  InputAdornment,
  Dialog,
  Grid
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import ChangeHistoryRoundedIcon from '@material-ui/icons/ChangeHistoryRounded'
import { makeStyles } from '@material-ui/core/styles'
import { TableReport } from '../../molecules/TableReports/TableReports'
import { DrawerBusinessCode } from '../../organisms/DrawerBusinessCode/DrawerBusinessCode'
import { IAdvancedInformationSearch } from './types'
import * as yup from 'yup'
import {
  ElementFormInput
} from '../../atoms/index'

const useStyles = makeStyles((theme) => ({
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: '60px',
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  divFlexModalState: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: '60px',
    width: '100%',
    marginTop: '3rem'
  },
  divButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '5px',
    marginTop: '1rem'
  },
  divAgencyError: {
    color: 'red',
    fontSize: 'x-small',
    marginTop: '4rem'
  },
  divCIFError: {
    color: 'red',
    fontSize: 'x-small',
    marginTop: '4rem'
  },
  divDeudorError: {
    color: 'red',
    fontSize: 'x-small',
    marginTop: '4rem'
  },
  divIconSearch: {
    marginTop: '36px'
  },
  divIconModal: {
    color: '#003b64',
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginTop: '25px'
  },
  icon: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px'
  },
  iconCodDebtor: {
    marginLeft: '20px',
    marginTop: '20px'
  },
  iconSearch: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  iconButtonSearch: {
    color: '#003b64',
    '&:hover': {
      color: '#FF9B00 !important'
    }
  },
  iconButtonSearchHover: {
    color: '#FF9B00 !important'
  },
  iconCaretNormal: {
    fontSize: '0.5em'
  },
  iconCaretRotate: {
    fontSize: '0.5em',
    transform: 'rotate(180deg)'
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%'
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  button: {
    minWidth: '13em',
    height: '3em',
    marginTop: '2.6em',
    marginBottom: '2.6em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  buttonSearch: {
    width: '159px',
    height: '36px',
    margin: '41px 27px 5px 139px',
    padding: '10px 0 4px',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  margen: {
    marginTop: 15
  },
  tabla: {
    marginTop: '2.6rem'
  },
  boton: {
    marginLeft: 10,
    margin: theme.spacing(1)
  },
  drawerContainer: {
    overflow: 'auto'
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4
  },
  formContainer: {
    backgroundColor: '#ffffff'
  },
  dialog: {
    minWidth: '80%',
    maxWidth: 'none'
  }
}))

const AdvancedInformationSearch: React.FC<IAdvancedInformationSearch> = (
  {
    country, i18n,
    findLast, findAll, findLoading, findError,
    findCompany, findCompanyLoading, findCompanyError,
    reportTableProps,
    tableBusinessProps,
    drawerBusinessCodeProps
  }
) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [searchFormData, setSearchFormData] = useState({
    debtor: '',
    agency: '0',
    fiscal: '0',
    fromDate: '',
    toDate: ''
  })

  const [errorAgencyMessage, setErrorAgencyMessage] = useState('')
  const [errorDeudorMessage, setErrorDeudorMessage] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [totalRows, setTotalRows] = useState(20)
  const [page, setPage] = useState(0)
  const [searchType, setSearchType] = useState('')
  const [sortedType, setSortedType] = useState('DESC')
  const [sortedBy, setSortedBy] = useState('fecha')

  const [modalState, setModalState] = useState(false)
  const debtorInput = (document.getElementById('debtor') as HTMLInputElement)

  const handleModalStatus = (e): void => {
    e.preventDefault()
    setModalState(!modalState)
    if (!modalState) {
      handleClickCleanFormSearch(e)
    }
  }

  const deudorRegExp = /^[0-9]{3}-[0-9]{6}$/
  const schemaCodDeudor = yup.object().shape({
    deudor: yup.string().matches(deudorRegExp)
  })

  const agencyRegExp = /^[0-9]{5}$/
  const schemaAgency = yup.object().shape({
    agency: yup.string().min(5).matches(agencyRegExp)
  })

  const handleSearchLast = (e): void => {
    e.preventDefault()
    setSearchType('last')
    executeQuery(true)
  }

  const handleSearchAll = (e): void => {
    e.preventDefault()
    setSearchType('all')
    executeQuery(true)
  }

  useEffect(() => {
    executeQuery(false)
  }, [sortedType, sortedBy, rowsPerPage, page])

  const executeQuery = (override): void => {
    if (searchFormData.debtor <= '0' &&
      searchFormData.fiscal === '' &&
      searchFormData.agency === '' &&
      searchFormData.fromDate === '') {
      ExcepcionFormato(`${i18n['AdvancedInformation:requiredParamsError']}`)
    }

    if (searchType === 'all') {
      findAll(override, searchFormData, rowsPerPage, page, sortedType, sortedBy)
    } else {
      findLast(override, searchFormData, rowsPerPage, page, sortedType, sortedBy)
    }
  }

  const ExcepcionFormato = (msg, value?): any => {
    const error = new Error()

    if (value !== undefined) {
      error.message = `${value}: `
    }
    if (msg !== undefined) {
      error.message += msg
    }
    if (error.message === undefined || error.message === null) {
      error.message = 'Undefined error'
    }

    throw error
  }

  useEffect(() => {
    executeTotal()
  }, [reportTableProps.data])

  const executeTotal = (): void => {
    if (reportTableProps.data.length < rowsPerPage) {
      setTotalRows((page * rowsPerPage) + reportTableProps.data.length)
    } else {
      if (reportTableProps.data.length > 0 && totalRows === 0) {
        setTotalRows(2 * rowsPerPage)
      }
    }
  }

  const handleDrawerOpen = (pattern): void => {
    setDestination({
      pattern: pattern
    })
    setOpenDrawer((prevState) => !prevState)
  }

  const handleDrawerClose = (): void => {
    setOpenDrawer(false)
  }

  const handleFindFormChangeAgency = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist()
    setSearchFormData((prevState) => Object.assign(
      {},
      prevState,
      { agency: e.target.value })
    )
    if (e.target.value !== '') {
      schemaAgency.isValid({ agency: e.target.value })
        .then(resp => {
          if (!resp) {
            setErrorAgencyMessage(i18n['AdvancedInformation:errorAgency'])
            setSearchFormData((prevState) => Object.assign(
              {},
              prevState,
              { agency: '' })
            )
          } else {
            setErrorAgencyMessage('')
          }
        })
      .catch(err => console.log(err)) // eslint-disable-line
    } else {
      setErrorAgencyMessage('')
      setSearchFormData((prevState) => Object.assign(
        {},
        prevState,
        { agency: '' })
      )
    }
  }

  const handleFindFormChangeFiscal = (e: ChangeEvent<HTMLInputElement>): void => {
    e.persist()
    setSearchFormData((prevState) => Object.assign(
      {},
      prevState,
      { fiscal: e.target.value })
    )
  }

  const handleClickCleanFormSearch = (e: React.SyntheticEvent): void => {
    setSearchFormData((prevState) => Object.assign(
      {},
      prevState,
      {
        debtor: '',
        fiscal: '',
        agency: '',
        fromDate: '',
        toDate: ''
      })
    )
    drawerBusinessCodeProps.tableCompanyProps.data = []
  }

  const handleFindFormChangeDateFrom = (e: ChangeEvent<HTMLInputElement>): void => {
    var value = e.target.value

    if (value !== '') {
      setSearchFormData((prevState) => Object.assign(
        {},
        prevState,
        { fromDate: value })
      )
    } else {
      setSearchFormData((prevState) => Object.assign(
        {},
        prevState,
        { fromDate: '' })
      )
    }
  }

  const handleFindFormChangeDateTo = (e: ChangeEvent<HTMLInputElement>): void => {
    var value = e.target.value

    if (value !== '') {
      setSearchFormData((prevState) => Object.assign(
        {},
        prevState,
        { toDate: value })
      )
    } else {
      setSearchFormData((prevState) => Object.assign(
        {},
        prevState,
        { toDate: '' })
      )
    }
  }

  const handleOnChangePage = (page): void => {
    setPage(page)
    setTotalRows((page + 2) * rowsPerPage)
  }

  const handleOnChangeRowsPerPage = (pageNumber): void => {
    setPage(0)
    setRowsPerPage(pageNumber)
    setTotalRows(pageNumber * 2)
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    setPage(0)
    setTotalRows(rowsPerPage * 2)
    setSortedBy(changedColumn)
    setSortedType(direction.toUpperCase())
  }

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const [destination, setDestination] = useState({
    pattern: ''
  })

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

  const handleClickTableBusiness = (rowData): void => {
    handleDrawerClose()
    mask = destination.pattern.split('')

    var value = ''

    rowData[0].props.children.toString().split('').forEach(char => {
      value += char
      value = reapplyMask(value)
    })

    validateDebtor(value.trim(), setErrorDeudorMessage)

    debtorInput.value = value

    setSearchFormData((prevState) => Object.assign(
      {},
      prevState,
      { debtor: value.trim() })
    )
  }

  var mask = []
  const debtorPattern = '   -      '

  const validateDebtor = (value: string, callError: any): void => {
    callError('')
    if (value.includes('*')) {
      if (value.includes('-')) {
        if (value.substr(0, value.indexOf('-')).length > 3) {
          callError(i18n['AdvancedInformation:errorDebtor'])
          setSearchFormData((prevState) => Object.assign(
            {},
            prevState,
            { debtor: '' })
          )
          return
        }
        var checkValueAs = value.substr(0, value.indexOf('-')).padStart(3, '0') + '-' + value.substr(value.indexOf('-') + 1)

        setSearchFormData((prevState) => Object.assign(
          {},
          prevState,
          { debtor: checkValueAs })
        )
        debtorInput.value = checkValueAs
      }
    } else {
      var checkValue = value.substr(0, value.indexOf('-')).padStart(3, '0') + '-' + value.substr(value.indexOf('-') + 1).padStart(6, '0')
      setSearchFormData((prevState) => Object.assign(
        {},
        prevState,
        { debtor: checkValue })
      )
      debtorInput.value = checkValue
      if (checkValue.replace('-', '') !== '') {
        schemaCodDeudor.isValid({ deudor: checkValue })
          .then(resp => {
            if (!resp) {
              setSearchFormData((prevState) => Object.assign(
                {},
                prevState,
                { debtor: '' })
              )
              callError(i18n['AdvancedInformation:errorDebtor'])
            }
          })
        .catch(err => console.log(err)) // eslint-disable-line
      } else {
        callError('')
        setSearchFormData((prevState) => Object.assign(
          {},
          prevState,
          { debtor: '' })
        )
      }
    }
  }

  const handleBlurDebtor = (e): void => {
    e.preventDefault()

    validateDebtor(e.target.value.replaceAll(' ', ''), setErrorDeudorMessage)
  }

  const handleFindFormChangeDebtor = (e): void => {
    e.preventDefault()
    debtorInput.value = e.target.value.replaceAll('.', '-')
  }

  return (
    <>
      <div className={classes.formContainer}>
        <form autoComplete="off">
          <div className={classes.divFlex}>

            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">

              <ElementFormInput
                type={'text'}
                name={'debtor'}
                label={i18n['AdvancedInformation:debtor']}
                handleSet={handleFindFormChangeDebtor}
                value={searchFormData.debtor}
                errorMessage={errorDeudorMessage}
                placeholder={debtorPattern}
                maxLength={10}
                onBlur={handleBlurDebtor}
              />

              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <div className={classes.divIconSearch}>
                  <IconButton onClick={() => handleDrawerOpen(debtorPattern)}>
                    <MoreHorizIcon className={classes.iconSearch}/>
                  </IconButton>
                </div>
              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

              </Grid>

              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <div className={classes.divIconModal}>
                  {!modalState
                    ? (
                      <InputAdornment position="start">
                        <IconButton
                          className={classes.iconButtonSearch}
                          onClick={(e) => handleModalStatus(e)}>
                          <SearchIcon/>
                          <ChangeHistoryRoundedIcon
                            className={classes.iconCaretRotate}/>
                        </IconButton>
                      </InputAdornment>
                    )
                    : (
                      <InputAdornment position="start">
                        <IconButton
                          className={classes.iconButtonSearchHover}
                          onClick={(e) => handleModalStatus(e)}>
                          <SearchIcon/>
                          <ChangeHistoryRoundedIcon
                            className={classes.iconCaretNormal}/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                </div>
              </Grid>
            </Grid>
          </div>

          {modalState ? (
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">

                <ElementFormInput
                  type={'number'}
                  name={'agency'}
                  label={i18n['AdvancedInformation:agency']}
                  handleSet={handleFindFormChangeAgency}
                  value={searchFormData.agency}
                  errorMessage={errorAgencyMessage}
                />

                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

                </Grid>

                <ElementFormInput
                  type={'text'}
                  name={'fiscal'}
                  label={i18n['AdvancedInformation:fiscal']}
                  handleSet={handleFindFormChangeFiscal}
                  value={searchFormData.fiscal}
                />
              </Grid>
            </div>
          ) : (
            <div></div>
          )}

          {modalState ? (
            <div className={classes.divFlex}>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">

                <ElementFormInput
                  type={'date'}
                  name={'dateFrom'}
                  label={i18n['AdvancedInformation:fromDate']}
                  handleSet={handleFindFormChangeDateFrom}
                  value={searchFormData.fromDate}
                />

                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

                </Grid>

                <ElementFormInput
                  type={'date'}
                  name={'dateFrom'}
                  label={i18n['AdvancedInformation:toDate']}
                  handleSet={handleFindFormChangeDateTo}
                  value={searchFormData.toDate}
                />
              </Grid>
            </div>
          ) : (
            <div></div>
          )}

          <div className={classes.divFlexButton}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center"
            >

              <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>

              </Grid>
              {[
                {
                  label: i18n['AdvancedInformation:textButtonLast'],
                  click: handleSearchAll,
                  align: classes.buttonMiddle
                },
                {
                  label: i18n['AdvancedInformation:textButtonAll'],
                  click: handleSearchLast,
                  align: classes.buttonMiddle
                }
              ].map(({ label, click, align }, index) => (
                <>
                  <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>

                  </Grid>

                  <Grid item xs={12} sm={2} md={2} lg={2} xl={2}
                    key={index}>
                    <div className={align}>
                      <button
                        onClick={click}
                        className={classes.button}
                      >
                        {label}
                      </button>
                    </div>

                  </Grid>
                </>
              ))}

              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>

              </Grid>
            </Grid>
          </div>

        </form>
      </div>
      {
        reportTableProps.data.length > 0 && (
          <div className={classes.tabla}>
            <TableReport
              i18n={reportTableProps.i18n}
              data={reportTableProps.data}
              handleRowClick={reportTableProps.handleRowClick}
              totalRows={totalRows}
              onChangePage={handleOnChangePage}
              onChangeRowsPerPage={handleOnChangeRowsPerPage}
              rowsPerPage={rowsPerPage}
              page={page}
              onViewColumnsChange={onViewColumnsChange}
              onColumnSortChange={onColumnSortChange}
            />
          </div>
        )}

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
    </>
  )
}

export { AdvancedInformationSearch }
