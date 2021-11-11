import React, { useState, useRef, Fragment, ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  InputAdornment,
  Dialog,
  IconButton
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import ChangeHistoryRoundedIcon from '@material-ui/icons/ChangeHistoryRounded'
import { CloudUpload } from '@material-ui/icons'
import { ICreatedReports, IDateTimeFormatOptions } from './types'
import { DrawerBusinessCode } from '../../organisms/DrawerBusinessCode/DrawerBusinessCode'
import {
  ElementFormInput,
  ElementFormSelect,
  ElementShow
} from '../../atoms/index'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  divColor: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    background: '#ffffff'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divFlexShow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: '1rem'
  },
  tabStyleActive: {
    backgroundColor: '#ff9900',
    color: '#ffffff'
  },
  tabStyleDefault: {
    color: '#003b64',
    backgroundColor: '#ffffff'
  },
  divButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '5px',
    marginTop: '1rem'
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%'
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
    letterSpacing: 'normal'
  },
  divShow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divHidden: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    display: 'none'
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  labelStyle: {
    marginTop: '3em',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    minWidth: '10em',
    paddingLeft: '15px'
  },
  labelStyleValidate: {
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff9900',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    textAlign: 'center',
    width: '100%'
  },
  inputStyle: {
    width: '100%',
    height: '2em',
    marginTop: '2.6em',
    marginBottom: '2px',
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
    height: '2em',
    marginTop: '2.6em',
    marginBottom: '2px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  selectStyle: {
    width: '100%',
    height: '2em',
    marginTop: '2.6em',
    marginBottom: '2px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#ff9900',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
  },
  selectStyleIn: {
    width: '100%',
    height: '2em',
    marginTop: '2.6em',
    marginBottom: '2px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    outline: 'none !important',
    outlineWidth: '0 !important',
    borderColor: '#003b64',
    borderTop: 'none !important',
    borderLeft: 'none',
    borderRight: 'none'
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
  iconCloudUpload: {
    backgroundColor: '#ffffff',
    color: '#003b64',
    borderRadius: '18px',
    '&:hover': {
      color: '#ff9900'
    }
  },
  spanCloudUpload: {
    fontSize: '14px',
    marginLeft: '8px'
  },
  divIconModal: {
    color: '#003b64',
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginTop: '25px'
  },
  divError: {
    fontSize: '8px',
    color: 'red'
  },
  divResumen: {
    color: '#003b64',
    fontSize: '9px',
    textAlign: 'right'
  },
  divIconSearch: {
    marginTop: '36px'
  },
  divIconCloudUpload: {
    marginTop: '34px',
    border: 'dashed 1px #d8d8d8'
  },
  divButtonSearch: {
    marginTop: '25px',
    float: 'right'
  },
  divButons: {
    marginBottom: '36px'
  },
  buttonSearch: {
    color: '#fff',
    width: '8em',
    height: '3em',
    boxShadow: '1px 1px 4px 0 rgb(0 0 0 / 30%)',
    marginRop: '2.6em',
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
  fieldDocumentName: {
    width: '282px',
    height: '36px',
    margin: '21px 25px 4px 142px',
    padding: '10px 78px 4px 10px',
    borderRadius: '2.6px',
    border: 'solid 1px #d8d8d8'
  },
  iconButton: {
    flex: '0 0 auto',
    color: 'rgba(0,0,0,0.54)',
    padding: '0',
    overflow: 'visible',
    fontSize: '1.5rem',
    textAlign: 'center',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '50%'
  },
  gridContainer: {
    maxHeight: '51px'
  },
  gridContainerSmall: {
    maxHeight: '51px'
  },
  dialog: {
    minWidth: '80%',
    maxWidth: 'none'
  }
}))

const CreatedReports: React.FC<ICreatedReports> = ({
  i18n,
  documentTypes,
  countries,
  corresponsals,
  productCodes,
  saleTypes,
  drawerBusinessCodeProps,
  handleCheckData,
  handleAccept,
  handleSearchCorresponsal
}) => {
  const classes = useStyles()

  const dateToday = new Date().toISOString().slice(0, 10)

  const [destination, setDestination] = useState({ pattern: '' })
  const [debtor, setDebtor] = useState('')
  const [typeDocument, setTypeDocument] = useState('')
  const [typeDocumentLabel, setTypeDocumentLabel] = useState('')
  const [dateRecept, setDateRecept] = useState(dateToday)
  const [petitionNumber, setPetitionNumber] = useState('')
  const [codCorrespondent, setCodCorrespondent] = useState('')
  const [productCode, setProductCode] = useState('')
  const [saleType, setSaleType] = useState('')
  const [openDrawer, setOpenDrawer] = useState(false)
  const [modalState, setModalState] = useState(false)
  const [file, setFile] = useState(null)
  const [showResumen, setShowResumen] = useState(false)

  const [errorDeudorMessage, setErrorDeudorMessage] = useState('')
  const [errorPetitionMessage, setErrorPetitionMessage] = useState('')

  const deudorRegExp = /^[0-9]{3}(-[0-9]{6})?$/
  const petitionRegExp = /^\d+$/

  const schemaCodDeudor = yup.object().shape({
    deudor: yup.string()
      .trim()
      .matches(deudorRegExp)
      .length(10)
      .required()
  })

  const schemaCodPetition = yup.object().shape({
    petition: yup.string()
      .matches(petitionRegExp)
  })

  var mask = []
  const debtorPattern = '   -      '

  const handleModalStatus = (e): void => {
    e.preventDefault()
    setModalState(!modalState)
  }

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

  const handleSetDebtor = (e): void => {
    e.preventDefault()

    if (e.target.value.length >= 4) {
      e.target.value = e.target.value.replace('-', '').substr(0, 3) + '-' + e.target.value.replace('-', '').substr(3)
    }

    validateDebtor(e.target.value.replaceAll(' ', ''), setErrorDeudorMessage)

    setDebtor(e.target.value)

    changeDebtor(e.target.value)
  }

  const changeDebtor = (value): void => {
    const inputElement = document.getElementById('debtor') as HTMLInputElement
    inputElement.value = value
  }

  const changeCorresponsal = (value): void => {
    const inputElement = document.getElementById('corresponsal') as HTMLInputElement
    inputElement.value = value
  }

  const handleCountries = (e): void => {
    e.preventDefault()

    setCodCorrespondent('')
    changeCorresponsal('')
    handleSearchCorresponsal(e.target.value)
  }

  const handleTypeDocument = (e): void => {
    e.preventDefault()

    const documentTypeInput = (document.getElementById('documentType') as HTMLSelectElement)

    setTypeDocument(e.target.value)
    setTypeDocumentLabel(documentTypeInput.options[documentTypeInput.selectedIndex].label)
  }

  const handleSetDateRecept = (e): void => {
    e.preventDefault()
    setDateRecept(e.target.value)
  }

  const handleSetPetitionNumber = (e): void => {
    e.preventDefault()

    setPetitionNumber(e.target.value)

    validatePetition(e.target.value, setErrorPetitionMessage)
  }

  const HandleSetCorresponsal = (e): void => {
    e.preventDefault()

    setCodCorrespondent(e.target.value)

    changeCorresponsal(e.target.value)
  }

  const handleProductCode = (e): void => {
    e.preventDefault()

    setProductCode(e.target.value)
  }

  const handleSaleType = (e): void => {
    e.preventDefault()

    setSaleType(e.target.value)
  }

  const validatePetition = (value: string, callError: any): void => {
    schemaCodPetition.isValid({ petition: value })
      .then(resp => {
        if (!resp) {
          callError(i18n['CreatedReports:onlyDigits'])
        } else {
          callError('')
        }
      })
    .catch(err => console.log(err)) // eslint-disable-line
  }

  const validateDebtor = (value: string, callError: any): void => {
    schemaCodDeudor.isValid({ deudor: value })
      .then(resp => {
        if (!resp) {
          callError(i18n['CreatedReports:debtorErrorLabel'])
        } else {
          callError('')
        }
      })
    .catch(err => console.log(err)) // eslint-disable-line
  }

  const handleDrawerOpen = (pattern: string): void => {
    setDestination({
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

    validateDebtor(value.trim(), setErrorDeudorMessage)
    setDebtor(value.trim())

    changeDebtor(value)
  }

  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    setFile(Array.from(e.target.files))
  }

  const handleCheckResumen = (): void => {
    if (debtor !== '' && typeDocument !== '' && dateRecept !== '' && file !== undefined && file !== null) {
      setShowResumen(true)
    } else {
      const params = {
        debtor: debtor,
        typeDocument: typeDocument,
        dateRecept: formatDate(dateRecept),
        petitionNumber: petitionNumber,
        codCorrespondent: codCorrespondent,
        productCode: productCode,
        saleType: saleType,
        file: file
      }
      handleCheckData(params)
    }
  }

  const handleSetAccept = (): void => {
    const params = {
      debtor: debtor,
      typeDocument: typeDocument,
      dateRecept: formatDate(dateRecept),
      petitionNumber: petitionNumber,
      codCorrespondent: codCorrespondent,
      productCode: productCode,
      saleType: saleType,
      file: file
    }
    handleAccept(params)
  }

  const handleSetCancel = (): void => {
    setShowResumen(false)
  }

  const inputFileRef = useRef(null)

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
    <div className={classes.root}>
      <div className={classes.divHeader}>
        {i18n['CreatedReports:tittleLabel']}
      </div>
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
      <div className={classes.divColor}>
        <div className={showResumen ? classes.divHidden : classes.divShow}>
          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={classes.gridContainer}>
              <ElementFormInput
                type={'text'}
                name={'debtor'}
                label={i18n['CreatedReports:empresaLabel']}
                handleSet={handleSetDebtor}
                value={debtor}
                errorMessage={errorDeudorMessage}
                placeholder={debtorPattern}
                maxLength={10}
              />

              <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <div className={classes.divIconSearch}>
                  <IconButton onClick={() => handleDrawerOpen(debtorPattern)} className={classes.iconButton}>
                    <MoreHorizIcon className={classes.iconSearch}/>
                  </IconButton>
                </div>
              </Grid>

              <ElementFormSelect
                name={'documentType'}
                label={i18n['CreatedReports:tipoDcoumentoLabel']}
                handleSet={handleTypeDocument}
                values={documentTypes}
              />
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

            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={classes.gridContainer}>

              <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
                <Typography className={classes.labelStyle}>
                  {i18n['CreatedReports:nombreDcoumentoLabel']}
                </Typography>
              </Grid>

              <Grid item xs={1} sm={3} md={3} lg={3} xl={3}>

                <input
                  name="document-name"
                  id="document-name"
                  accept={'*'}
                  style={{ display: 'none' }}
                  type="file"
                  ref={inputFileRef}
                  onChange={handleInputChange}
                  className={classes.fieldDocumentName}
                />
                <div className={classes.divIconCloudUpload}>
                  <IconButton onClick={() => inputFileRef.current.click()} className={classes.iconButton}>
                    <CloudUpload className={classes.iconCloudUpload}/>
                    <span className={classes.spanCloudUpload}>{!Array.isArray(file) ? i18n['CreatedReports:examinarLabel'] : file[0].name }</span>
                  </IconButton>
                </div>
              </Grid>

              <ElementFormInput
                type={'date'}
                name={'dateRecept'}
                label={i18n['CreatedReports:fechaRecepcionDcoumentoLabel']}
                handleSet={handleSetDateRecept}
                value={dateRecept}
                errorMessage={errorDeudorMessage}
                disabled={true}
              />
              <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>

              </Grid>
            </Grid>

            <Grid container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.gridContainerSmall}>
              <Grid item xs={1} sm={5} md={5} lg={5} xl={5} className={classes.divResumen}>
                <i>{i18n['CreatedReports:nombreDcoumentoEspecifications']}</i>
              </Grid>
              <Grid item xs={1} sm={7} md={7} lg={7} xl={7}>

              </Grid>
            </Grid>
          </div>
          <>
            {modalState
              ? <div className={classes.divFlex}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.gridContainer}>

                  <ElementFormInput
                    type={'text'}
                    name={'petitionNumber'}
                    label={i18n['CreatedReports:numeroPeticionLabel']}
                    handleSet={handleSetPetitionNumber}
                    value={petitionNumber}
                    errorMessage={errorPetitionMessage}
                    middle={false}
                  />
                </Grid>

                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.gridContainer}>

                  <ElementFormSelect
                    name={'countries'}
                    label={i18n['CreatedReports:codigoPaisLabel']}
                    handleSet={handleCountries}
                    values={countries}
                  />

                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                  </Grid>

                  <ElementFormSelect
                    name={'corresponsal'}
                    label={i18n['CreatedReports:corresponsalLabel']}
                    handleSet={HandleSetCorresponsal}
                    values={corresponsals}
                  />

                </Grid>

                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.gridContainer}>

                  {[
                    {
                      label: i18n['CreatedReports:codigoProductoLabel'],
                      name: 'productCode',
                      values: productCodes,
                      handle: handleProductCode
                    },
                    {
                      label: i18n['CreatedReports:tipoGastoLabel'],
                      name: 'saleType',
                      values: saleTypes,
                      handle: handleSaleType
                    }
                  ]
                    .map(({ label, name, values, handle }, index) => (
                      <>
                        <ElementFormSelect
                          name={name}
                          label={label}
                          handleSet={handle}
                          values={values}
                          key={index}
                        />

                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                        </Grid>
                      </>
                    ))}

                </Grid>
              </div>
              : (
                <></>
              )}
          </>
          <div className={classes.divFlex}>
            <div className={classes.divFlexButton}>
              <Grid container
                direction="row"
                justify="center"
                alignItems="center"
              >

                {[
                  {
                    label: i18n['CreatedReports:acceptBtLabel'],
                    click: handleCheckResumen,
                    align: classes.buttonMiddle
                  }
                ].map(({ label, click, align }, index) => (
                  <Grid item xs={12} sm={3} md={3} lg={3} xl={3}
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
                ))}

                <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>

                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        <div className={showResumen ? classes.divShow : classes.divHidden}>
          <div className={classes.divFlexShow}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={classes.gridContainer}>
              <ElementShow
                label={i18n['CreatedReports:empresaLabel']}
                value={debtor}
                middle={true}
              />
              <ElementShow
                label={i18n['CreatedReports:tipoDcoumentoLabel']}
                value={typeDocumentLabel}
                middle={true}
              />
            </Grid>
          </div>

          <div className={classes.divFlexShow}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={classes.gridContainer}>
              <ElementShow
                label={i18n['CreatedReports:nombreDcoumentoLabel']}
                value={file !== undefined && file !== null ? file[0].name : ''}
                middle={true}
              />
              <ElementShow
                label={i18n['CreatedReports:fechaRecepcionDcoumentoLabel']}
                value={dateRecept}
                middle={true}
              />
            </Grid>
          </div>

          <div className={classes.divFlexShow}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.labelStyleValidate}>
                  {i18n['CreatedReports:validateBtLabel']}
                </div>
              </Grid>

            </Grid>
          </div>

          <div className={classes.divFlexButton}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {[
                {
                  label: i18n['CreatedReports:acceptBtLabel'],
                  click: handleSetAccept,
                  align: classes.buttonMiddle
                },
                {
                  label: i18n['CreatedReports:cancelBtLabel'],
                  click: handleSetCancel,
                  align: classes.buttonMiddle
                }
              ].map(({ label, click, align }, index) => (
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
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CreatedReports }
export type { ICreatedReports }
