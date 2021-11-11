import React, { useState } from 'react'
import {
  Grid,
  makeStyles,
  Dialog,
  IconButton
} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { DrawerBusinessCode } from '../DrawerBusinessCode/DrawerBusinessCode'
import { IReceivingReports } from './types'
import {
  ElementFormInput,
  ElementFormSelect
} from '../../atoms/index'
import * as yup from 'yup'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: '#ffffff'
  },
  divFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
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
    width: '100%',
    marginTop: '40px'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMind-Bold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    marginTop: '1rem',
    marginLeft: '1rem'
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
    backgroundColor: '#585858',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  buttonCheck: {
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
  checkboxStyle: {
    color: '#ff9900'
  },
  checkboxDiv: {
    marginTop: '3rem'
  }
})

const ReceivingReports: React.FC<IReceivingReports> = ({
  i18n,
  countries,
  corresponsals,
  elementBackProps,
  drawerBusinessCodeProps,
  products,
  handleSubmit,
  handleCancel,
  handleSearchCorresponsal
}) => {
  const classes = useStyles()
  const [openDrawerBCode, setOpenDrawerBCode] = useState(false)
  const [petitionNum, setPetitionNum] = useState('')
  const [codCompany, setCodCompany] = useState('')
  const [codCorrespondent, setCodCorrespondent] = useState('')
  const [product, setProduct] = useState('')
  const [disabledCodPais, setDisabledCodPais] = useState(false)
  const [disabledEmpresa, setDisabledEmpresa] = useState(false)
  const [disabledPeticion, setDisabledPeticion] = useState(false)
  const [checkPetition, setCheckPetition] = useState(false)
  const [checkEmpresa, setCheckEmpresa] = useState(false)
  const [checkCodPais, setCheckCodPais] = useState(false)
  const [checkIconEmpresa, setCheckIconEmpresa] = useState(false)
  const [errorDeudorMessage, setErrorDeudorMessage] = useState('')
  const [buttonCheck, setButtonCheck] = useState(true)

  var mask = []
  const debtorPattern = '   -      '

  const deudorRegExp = /^[0-9]{3}(-[0-9]{6})?$/

  const schemaCodDeudor = yup.object().shape({
    deudor: yup.string()
      .trim()
      .matches(deudorRegExp)
      .length(10)
      .required()
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

  const handleSetDebtor = (e): void => {
    e.preventDefault()

    if (e.target.value.length >= 4) {
      e.target.value = e.target.value.replace('-', '').substr(0, 3) + '-' + e.target.value.replace('-', '').substr(3)
    }

    validateDebtor(e.target.value.replaceAll(' ', ''), setErrorDeudorMessage)

    setCodCompany(e.target.value)

    changeDebtor(e.target.value)
  }

  const changeDebtor = (value): void => {
    const inputElement = document.getElementById('cod-company') as HTMLInputElement
    inputElement.value = value
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

  const handleDrawerOpen = (): void => {
    setOpenDrawerBCode((prevState) => !prevState)
  }

  const handleClickTableBusiness = (rowData): void => {
    handleDrawerClose()
    mask = debtorPattern.split('')

    var value = ''

    rowData[0].props.children.toString().split('').forEach(char => {
      value += char
      value = reapplyMask(value)
    })

    validateDebtor(value.trim(), setErrorDeudorMessage)
    setCodCompany(value.trim())

    changeDebtor(value)
  }

  const handleSendSubmit = (): void => {
    handleSubmit(petitionNum, codCompany, product, codCorrespondent)
  }

  const handleSendCancel = (): void => {
    elementBackProps.handleBack()
    handleCancel()
  }

  const handlePetitionNum = (e): void => {
    setPetitionNum(e.target.value)
  }
  const handleProduct = (e): void => {
    setProduct(e.target.value)
  }

  const handleDrawerClose = (): void => {
    setOpenDrawerBCode(false)
  }

  const changeCorresponsal = (value): void => {
    const inputElement = document.getElementById('corresponsal') as HTMLInputElement
    inputElement.value = value
  }

  const handleCountries = (e): void => {
    e.preventDefault()

    setCodCorrespondent('')
    changeCorresponsal('')
    setDisabledCodPais(false)
    handleSearchCorresponsal(e.target.value)
  }

  const HandleSetCorresponsal = (e): void => {
    e.preventDefault()

    setCodCorrespondent(e.target.value)

    changeCorresponsal(e.target.value)
  }

  const handlePetitionRadio = (): any => {
    setCheckPetition(true)
    setCheckEmpresa(false)
    setCheckCodPais(false)
    setDisabledPeticion(false)
    setDisabledEmpresa(true)
    setDisabledCodPais(true)
    setCheckIconEmpresa(true)
    setButtonCheck(false)
  }

  const handlePetitionEmpresa = (): any => {
    setCheckIconEmpresa(false)
    setCheckEmpresa(true)
    setCheckPetition(false)
    setCheckCodPais(false)
    setDisabledPeticion(true)
    setDisabledEmpresa(false)
    setDisabledCodPais(true)
    setButtonCheck(false)
  }

  const handlePetitionCodPais = (): any => {
    setCheckCodPais(true)
    setCheckEmpresa(false)
    setCheckPetition(false)
    setDisabledPeticion(true)
    setDisabledEmpresa(true)
    setDisabledCodPais(false)
    setCheckIconEmpresa(true)
    setButtonCheck(false)
  }

  return (
    <div className={classes.root}>

      <Dialog
        open={openDrawerBCode}
        onClose={handleDrawerClose}
        disableBackdropClick={true}
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

      <div className={classes.divFlex}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
            <div className={classes.divHeader}>
              {i18n['ReceivingReports:title']}
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.divFlex}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">

          <div className={classes.checkboxDiv}>
            <Checkbox
              checked={checkPetition}
              icon={<RadioButtonUncheckedRoundedIcon />}
              checkedIcon={<RadioButtonCheckedRoundedIcon
                className={classes.checkboxStyle}
              />}
              name="checkedB"
              onChange={handlePetitionRadio}
            />
          </div>

          <ElementFormInput
            type={'number'}
            name={'petition-num'}
            label={i18n['ReceivingReports:numeropeticion']}
            handleSet={handlePetitionNum}
            value={petitionNum}
            disabled={disabledPeticion}
          />
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          </Grid>

          <div className={classes.checkboxDiv}>
            <Checkbox
              checked={checkEmpresa}
              icon={<RadioButtonUncheckedRoundedIcon />}
              checkedIcon={<RadioButtonCheckedRoundedIcon
                className={classes.checkboxStyle}
              />}
              name="checkedB"
              onChange={handlePetitionEmpresa}
            />
          </div>

          <ElementFormInput
            type={'text'}
            name={'cod-company'}
            label={i18n['ReceivingReports:empresa']}
            handleSet={handleSetDebtor}
            value={codCompany}
            errorMessage={errorDeudorMessage}
            placeholder={debtorPattern}
            maxLength={10}
            disabled={disabledEmpresa}
          />

          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <div className={classes.divIconSearch}>
              <IconButton onClick={() => handleDrawerOpen()} className={classes.iconButton} disabled={checkIconEmpresa}>
                <MoreHorizIcon className={classes.iconSearch}/>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.divFlex}>
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">

          <div className={classes.checkboxDiv}>
            <Checkbox
              checked={checkCodPais}
              icon={<RadioButtonUncheckedRoundedIcon />}
              checkedIcon={<RadioButtonCheckedRoundedIcon
                className={classes.checkboxStyle}
              />}
              name="checkedB"
              onChange={handlePetitionCodPais}
            />
          </div>

          <ElementFormSelect
            name={'countries'}
            label={i18n['ReceivingReports:codigoPaisLabel']}
            handleSet={handleCountries}
            values={countries}
            disabled={disabledCodPais}
          />

          <ElementFormSelect
            name={'corresponsal'}
            label={i18n['ReceivingReports:corresponsal']}
            handleSet={HandleSetCorresponsal}
            values={corresponsals}
            disabled={disabledCodPais}
          />

          <ElementFormSelect
            name={'type-expense'}
            label={i18n['ReceivingReports:producto']}
            handleSet={handleProduct}
            values={products}
            disabled={disabledCodPais}
          />

        </Grid>
      </div>

      <div className={classes.divFlex}>
        <div className={classes.divFlexButton}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>

            </Grid>

            {[
              {
                label: i18n['ReceivingReports:buttonAceptar'],
                click: handleSendSubmit,
                align: classes.buttonMiddle,
                disabled: buttonCheck,
                style: !buttonCheck ? classes.buttonCheck : classes.button
              },
              {
                label: i18n['ReceivingReports:buttonCancelar'],
                click: handleSendCancel,
                align: classes.buttonMiddle,
                disabled: false,
                style: !buttonCheck ? classes.buttonCheck : classes.button
              }
            ].map(({ label, click, align, disabled, style }, index) => (
              <Grid item xs={12} sm={3} md={3} lg={3} xl={3}
                key={index}>
                <div className={align}>
                  <button
                    onClick={click}
                    disabled={disabled}
                    className={style}
                  >
                    {label}
                  </button>
                </div>
              </Grid>
            ))}

            <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>

            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export { ReceivingReports }
