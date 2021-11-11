import React, { useState } from 'react'
import {
  Grid,
  createStyles,
  Dialog,
  IconButton,
  makeStyles,
  Theme
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { DrawerBusinessCode } from '../../organisms/DrawerBusinessCode/DrawerBusinessCode'
import { IHighReports, IDateTimeFormatOptions } from './types'
import {
  ElementFormInput,
  ElementFormSelect
} from '../../atoms/index'
import * as yup from 'yup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      background: '#ffffff'
    },
    divFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      width: '100%',
      textAlign: 'start'
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
    }
  })
)

const HighReports: React.FC<IHighReports> = ({
  i18n,
  countries,
  corresponsals,
  drawerBusinessCodeProps,
  documentType,
  spendType,
  products,
  handleCancel,
  handleSearchCorresponsal,
  handleAccept,
  confirmationProps
}) => {
  const classes = useStyles()
  const [openDrawerBCode, setOpenDrawerBCode] = useState(false)
  const [codDeudor, setCodDeudor] = useState('')
  const [codCorrespondent, setCodCorrespondent] = useState('')
  const [typeDocument, setTypeDocument] = useState('')
  const [typeExpensive, setTypeExpensive] = useState('')
  const [product, setProduct] = useState('')

  const date = new Date().toISOString().slice(0, 10)
  const [dateReception, setDateReception] = useState(date)
  const [disabled, setDisabled] = useState(true)

  const [errorDeudorMessage, setErrorDeudorMessage] = useState('')

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

    setCodDeudor(e.target.value)

    changeDebtor(e.target.value)
  }

  const changeDebtor = (value): void => {
    const inputElement = document.getElementById('cod-company') as HTMLInputElement
    inputElement.value = value
  }

  const validateDebtor = (value: string, callError: any): void => {
    if (value !== '') {
      schemaCodDeudor.isValid({ deudor: value })
        .then(resp => {
          if (!resp) {
            callError(i18n['CreatedReports:debtorErrorLabel'])
          } else {
            callError('')
          }
        })
    .catch(err => console.log(err)) // eslint-disable-line
    } else {
      callError('')
    }
  }

  const handleDrawerOpen = (pattern: string): void => {
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
    setCodDeudor(value.trim())

    changeDebtor(value)
  }

  const changeCorresponsal = (value): void => {
    const inputElement = document.getElementById('corresponsal') as HTMLInputElement
    inputElement.value = value
  }

  const handleCountries = (e): void => {
    e.preventDefault()
    setDisabled(false)
    setCodCorrespondent('')
    changeCorresponsal('')
    handleSearchCorresponsal(e.target.value)
  }

  const handleDocumentType = (e): void => {
    e.preventDefault()
    setTypeDocument(e.target.value)
  }

  const handleSetCorresponsal = (e): void => {
    e.preventDefault()
    setCodCorrespondent(e.target.value)
    changeCorresponsal(e.target.value)
  }
  const options: IDateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
  const formatDate: any = (fecha) => {
    const date = (fecha !== null) && (fecha !== null && fecha !== '') ? new Date(fecha) : new Date()
    return date.toLocaleDateString('es-ES', options).toString()
  }

  const handleDrawerClose = (): void => {
    setOpenDrawerBCode(false)
  }

  const handleProduct = (e): void => {
    e.preventDefault()
    setProduct(e.target.value)
  }

  const handleTypeExpensive = (e): void => {
    e.preventDefault()
    setTypeExpensive(e.target.value)
  }

  const handleDateReception = (e): void => {
    e.preventDefault()
    setDateReception(e.target.value)
  }

  const handleSendAccept = (): void => {
    handleAccept(codDeudor, product, typeDocument, typeExpensive, codCorrespondent, formatDate(dateReception))
  }

  return (
    <div className={classes.root}>
      <>
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
          <div className={classes.divHeader}>
            {i18n['HighReports:title']}
          </div>
        </div>

        <div className={classes.divFlex}>

          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <ElementFormInput
              type={'text'}
              name={'cod-company'}
              label={i18n['HighReports:deudor']}
              handleSet={handleSetDebtor}
              value={codDeudor}
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
          </Grid>
        </div>

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">

            <ElementFormSelect
              name={'countries'}
              label={i18n['HighReports:codigoPaisLabel']}
              handleSet={handleCountries}
              values={countries}
              disabled={false}
            />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            </Grid>

            <ElementFormSelect
              name={'corresponsal'}
              label={i18n['HighReports:corresponsal']}
              handleSet={handleSetCorresponsal}
              values={corresponsals}
              disabled={disabled}
            />

          </Grid>
        </div>

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">

            <ElementFormSelect
              name={'document-type'}
              label={i18n['HighReports:tipodocumento']}
              handleSet={handleDocumentType}
              values={documentType}
              disabled={false}
            />

            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            </Grid>

            <ElementFormSelect
              name={'type-expense'}
              label={i18n['HighReports:tipogasto']}
              handleSet={handleTypeExpensive}
              values={spendType}
              disabled={false}
            />

          </Grid>
        </div>

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">

            <ElementFormSelect
              name={'product'}
              label={i18n['HighReports:producto']}
              handleSet={handleProduct}
              values={products}
              disabled={false}
            />
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            </Grid>

            <ElementFormInput
              type={'date'}
              name={'date'}
              label={i18n['HighReports:fecharecepción']}
              handleSet={handleDateReception}
              value={dateReception}
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
                  label: i18n['HighReports:buttonAceptar'],
                  click: handleSendAccept,
                  align: classes.buttonMiddle
                },
                {
                  label: i18n['HighReports:buttonCancelar'],
                  click: handleCancel,
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

              <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>

              </Grid>
            </Grid>
          </div>
        </div>
      </>

    </div>
  )
}

export { HighReports }
export type { IHighReports }
