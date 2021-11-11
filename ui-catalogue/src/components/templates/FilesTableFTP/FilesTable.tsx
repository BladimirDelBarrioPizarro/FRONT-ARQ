import React, { Fragment, useState, ChangeEvent, useRef } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { DrawerBusinessCode } from '../../organisms/DrawerBusinessCode/DrawerBusinessCode'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Dialog
} from '@material-ui/core'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Cancel, CheckCircleSharp, Delete, CloudUpload } from '@material-ui/icons'
import { green } from '@material-ui/core/colors'
import { IFilesTableFTP } from './types'
import {
  ElementFormInput,
  ElementRadio
} from '../../atoms/index'
import { Form, Formik, FormikProps } from 'formik'

import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    minWidth: '60vw'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  divLabels: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '7px'
  },
  divFile: {
    marginTop: '30px'
  },
  radioLabel: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  divLabelsContent1: {
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '0px',
    marginBottom: '0px',
    fontFamily: 'NeverMind',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  divLabelsContent2: {
    marginLeft: '30px',
    marginTop: '0px',
    marginBottom: '0px',
    fontFamily: 'NeverMind',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  divContainerLabels: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'center'
  },
  divBusiness: {
    width: '700px',
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3px'
  },
  button: {
    width: '135px',
    height: '36px',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  labelCodCompany: {
    width: '140px',
    height: '22px',
    marginTop: '35px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelFile: {
    width: '140px',
    height: '22px',
    marginTop: '35px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelConfidencial: {
    width: '140px',
    height: '22px',
    marginTop: '35px',
    marginBottom: '0px',
    marginLeft: '15px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelAlert: {
    width: '140px',
    height: '22px',
    marginTop: '25px',
    marginBottom: '5px',
    marginLeft: '15px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelConsolidation: {
    width: '140px',
    height: '22px',
    marginTop: '25px',
    marginBottom: '5px',
    marginLeft: '15px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelCountrie: {
    width: '140px',
    height: '22px',
    marginTop: '35px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  fieldCodCompany: {
    width: '243px',
    height: '20px',
    marginTop: '30px',
    marginBottom: '2px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
  },
  fieldFile: {
    width: '282px',
    height: '36px',
    margin: '21px 25px 4px 142px',
    padding: '10px 78px 4px 10px',
    borderRadius: '2.6px',
    border: 'solid 1px #d8d8d8'
  },
  fieldCountrie: {
    width: '243px',
    height: '20px',
    marginTop: '30px',
    marginBottom: '2px',
    marginLeft: '41px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
  },
  fieldName: {
    width: '243px',
    height: '20px',
    marginTop: '30px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
  },
  fieldCIF: {
    width: '243px',
    height: '20px',
    marginTop: '30px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
  },
  iconCodEmpresa: {
    marginLeft: '20px',
    marginTop: '40px'
  },
  icon: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px'
  },
  iconCloud: {
    borderRadius: '18px'
  },
  h5: {
    margin: '10px',
    width: '575px',
    height: '30px',
    fontFamily: 'NeverMind',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  span: {
    fontSize: '14px',
    marginLeft: '8px'
  },
  radioGroup1: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '10px'
  },
  radioGroup2: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '10px'
  },
  radioGroup3: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '10px'
  },
  radios: {
    marginTop: '10px'
  },
  buttonCompanySearch: {
    width: '159px',
    height: '36px',
    margin: '41px 27px 5px 139px',
    padding: '10px 0 4px',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff'
  },
  tableContainer: {
    marginTop: '90px',
    marginBottom: 20
  },
  deleteIconStyle: {
    cursor: 'pointer'
  },
  chipError: {
    marginLeft: 15
  },
  divIconSearch: {
    marginTop: '36px'
  },
  drawerContainer: {
    overflow: 'auto'
  },
  iconSearch: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px',
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
  gridContainer: {
    maxHeight: '51px'
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
  divIconCloudUpload: {
    marginTop: '34px',
    border: 'dashed 1px #d8d8d8'
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
  labelRadioStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    alignSelf: 'flex-end',
    padding: '5px',
    height: '50px',
    position: 'relative',
    width: '80px',
    textAlign: 'center'
  },
  labelRadioLeftStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    alignSelf: 'flex-end',
    paddingRight: '12px',
    paddingTop: '4px',
    height: '50px',
    position: 'relative',
    width: '80px',
    textAlign: 'right'
  },
  divRadioLeft: {
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    position: 'absolute',
    height: '20px',
    width: '50px'
  },
  divRadioRight: {
    borderRadius: '4px',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    position: 'absolute',
    height: '20px',
    width: '50px'
  },
  checkboxStyle: {
    color: '#003b64',
    width: '14px'
  },
  checkboxStyleChecked: {
    color: '#ff9900',
    width: '14px'
  },
  dialog: {
    minWidth: '80%',
    maxWidth: 'none'
  }
}))

const FilesTableFTP: React.FunctionComponent<IFilesTableFTP> = ({
  sending,
  i18n,
  handleRowClickSearchResult,
  onChangePage,
  onChangeRowsPerPage,
  totalRows,
  rowsPerPage = 5,
  page,
  handleSend,
  drawerBusinessCodeProps
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const [errorDeudorMessage, setErrorDeudorMessage] = useState('')
  const [conf, setConf] = useState(false)
  const [alert, setAlert] = useState(false)
  const [consolidation, setConsolidation] = useState(false)
  const [code, setCode] = useState('')
  const [dataFile, setDataFile] = useState<Array<object | number[] | string[]>>([])
  const inputFileRef = useRef(null)

  var mask = []
  const debtorPattern = '   -      '

  const bytesToSize: (n: number) => string = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
  }

  const handleDeleteFile = (e, index): void => {
    e.preventDefault()
    const files = dataFile.filter((item, i) => i !== index)
    setDataFile(files)
  }

  const handleDrawerOpen = (): void => {
    setOpen(!open)
  }

  const handleDrawerClose = (): void => {
    setOpen(false)
  }

  const handleButtonSend = (): void => {
    const data = {
      code: code,
      arrayFile: dataFile,
      conf: conf,
      alertGenerate: alert,
      consolidation: consolidation
    }
    handleSend(data)
    //  console.log('Code: ', data.code, 'files: ', data.arrayFile, 'conf: ', data.conf, 'generate: ', data.alertGenerate, 'consolidation: ', data.consolidation)
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

  const debtorInput = (document.getElementById('code') as HTMLInputElement)

  const handleRowClickBusinessResult = (rowData): void => {
    handleDrawerClose()
    mask = debtorPattern.split('')

    var value = ''

    rowData[0].props.children.toString().split('').forEach(char => {
      value += char
      value = reapplyMask(value)
    })

    validateDebtor(value.trim(), setErrorDeudorMessage)

    debtorInput.value = value

    setCode(value.trim())
  }

  const deudorRegExp = /^[0-9]{3}-[0-9]{6}$/
  const schemaCodDeudor = yup.object().shape({
    deudor: yup.string().matches(deudorRegExp)
  })

  const validateDebtor = (value: string, callError: any): void => {
    if (value.replace('-', '') !== '') {
      schemaCodDeudor.isValid({ deudor: value })
        .then(resp => {
          if (!resp) {
            callError(i18n['AdvancedInformation:errorDebtor'])
          } else {
            callError('')
          }
        })
      .catch(err => console.log(err)) // eslint-disable-line
    } else {
      callError('')
    }
  }

  const handleFindFormChangeDevtor = (e): void => {
    e.preventDefault()

    if (e.target.value.length >= 4) {
      e.target.value = e.target.value.replace('-', '').substr(0, 3) + '-' + e.target.value.replace('-', '').substr(3)
    }

    validateDebtor(e.target.value.replaceAll(' ', ''), setErrorDeudorMessage)

    let value = ''

    if (e.target.value !== '') {
      value = e.target.value.padStart(9, '0')
    }

    setCode(value)
  }

  const handleChangeRadioConf = (e): void => {
    setConf(e.target.value)
  }
  const handleChangeRadioAlert = (e): void => {
    setAlert(e.target.value)
  }

  const handleChangeRadioConsolidation = (e): void => {
    setConsolidation(e.target.value)
  }

  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    setDataFile(Array.from(e.target.files))
  }

  const labelsTbFilesTable = {
    textLabels: {
      body: {
        noMatch: i18n['FilesTableFTP:reportTbNoMatch']
      },
      pagination: {
        next: i18n['FilesTableFTP:reportTbNext'],
        previous: i18n['FilesTableFTP:reportTbPrevious'],
        rowsPerPage: i18n['FilesTableFTP:reportTbPerPage'],
        displayRows: i18n['FilesTableFTP:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['FilesTableFTP:reportTbSearch'],
        downloadCsv: i18n['FilesTableFTP:reportTbDownladCsv'],
        print: i18n['FilesTableFTP:reportTbPrint'],
        viewColumns: i18n['FilesTableFTP:reportTbViewColumns'],
        filterTable: i18n['FilesTableFTP:reportTbFilterTable']
      },
      filter: {
        title: i18n['FilesTableFTP:reportTbTitle'],
        reset: i18n['FilesTableFTP:reportTbReset']
      },
      viewColumns: {
        title: i18n['FilesTableFTP:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['FilesTableFTP:reportTbText'],
        delete: i18n['FilesTableFTP:reportTbDelete']
      }
    }
  }

  const optionsTbFilesTable = {
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    pagination: false,
    selectableRows: 'none',
    onRowClick: handleRowClickSearchResult,
    filter: false,
    download: false,
    print: false,
    rowsPerPageOptions: [],
    count: totalRows,
    rowsPerPage: rowsPerPage,
    page: page,
    search: false
  }

  const columns: MUIDataTableColumn[] = [
    {
      name: 'validation',
      label: i18n['FilesTableFTP:label1ft'],
      options: {
        filter: false,
        customBodyRender: (value: boolean) => {
          const icon =
            sending === 'loading' ? (
              <CircularProgress size={24} />
            ) : value ? (
              <Cancel color="error"></Cancel>
            ) : (
              <CheckCircleSharp style={{ color: green[500] }}></CheckCircleSharp>
            )
          return icon
        }
      }
    },
    {
      name: 'name',
      label: i18n['FilesTableFTP:label2ft'],
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => {
          const rowData = tableMeta.rowData
          const [error, , , , message] = rowData
          const isError: boolean = error
          const newValue = isError ? (
            <>
              {value}
              <Chip className={classes.chipError} color="secondary" label={message} />
            </>
          ) : (
            value
          )
          return newValue
        }
      }
    },
    {
      name: 'size',
      label: i18n['FilesTableFTP:label3ft'],
      options: {
        filter: false,
        customBodyRender: (value: number) => {
          return bytesToSize(value)
        }
      }
    },
    {
      name: 'delete',
      label: i18n['FilesTableFTP:label4ft'],
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => {
          const newValue = (
            <Delete
              className={classes.deleteIconStyle}
              onClick={(e) => handleDeleteFile(e, tableMeta.rowIndex)}
            ></Delete>
          )
          return newValue
        }
      }
    }
  ]

  const [data] = useState({})

  const handleSubmitAccept = (formValues): void => {
    handleSend(formValues)
  }

  return (
    <Fragment>
      <Card className={classes.margen}>
        <CardHeader title={i18n['FilesTableFTP:cardHeaderft']} />
        <CardContent>
          <Formik
            initialValues={data}
            onSubmit={(values, actions) => {
              handleSubmitAccept(data)
            }}
          >
            {(props: FormikProps<any>) => (
              <Form>

                <div className={classes.divFlex}>

                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center">

                    <ElementFormInput
                      type={'text'}
                      name={'code'}
                      label={i18n['AdvancedInformation:debtor']}
                      handleSet={handleFindFormChangeDevtor}
                      value={code}
                      errorMessage={errorDeudorMessage}
                      placeholder={debtorPattern}
                      maxLength={10}
                    />

                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                      <div className={classes.divIconSearch}>
                        <IconButton onClick={() => handleDrawerOpen()}>
                          <MoreHorizIcon className={classes.iconSearch}/>
                        </IconButton>
                      </div>
                    </Grid>

                    <Grid item xs={1} sm={7} md={7} lg={7} xl={7}>

                    </Grid>
                  </Grid>
                </div>
                <div className={classes.divFlex}>

                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.gridContainer}>

                    <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
                      <Typography className={classes.labelStyle}>
                        {i18n['FilesTableFTP:labelFileFTP']}
                      </Typography>
                    </Grid>

                    <Grid item xs={1} sm={3} md={3} lg={3} xl={3}>

                      <input
                        name="file"
                        id="file"
                        accept={'*'}
                        style={{ display: 'none' }}
                        type="file"
                        ref={inputFileRef}
                        onChange={handleInputChange}
                        className={classes.fieldDocumentName}
                        multiple
                      />
                      <div className={classes.divIconCloudUpload}>
                        <IconButton
                          onClick={() => inputFileRef.current.click()}
                          className={classes.iconButton}
                        >
                          <CloudUpload className={classes.iconCloudUpload}/>
                          <span className={classes.spanCloudUpload}>{i18n['FilesTableFTP:inputfiletext']}</span>
                        </IconButton>
                      </div>
                    </Grid>
                    <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>

                    </Grid>

                    <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
                      <Typography className={classes.labelStyle}>

                      </Typography>
                    </Grid>

                    <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>
                      <Typography className={classes.labelStyle}>

                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={2} md={2} lg={2} xl={2}>

                    </Grid>
                  </Grid>

                </div>

                <div className={classes.divFlex}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.gridContainer}>
                    <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>

                    </Grid>

                    <ElementRadio
                      label={i18n['FilesTableFTP:typo1ft']}
                      name={'conf'}
                      value={'true'}
                      labelOpt1={i18n['FilesTableFTP:formControlLabel1']}
                      labelOpt2={i18n['FilesTableFTP:formControlLabel2']}
                      onChange={handleChangeRadioConf}
                      large={true}
                    />
                  </Grid>
                </div>

                <div className={classes.divFlex}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.gridContainer}>
                    <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>

                    </Grid>

                    <ElementRadio
                      label={i18n['FilesTableFTP:typo2ft']}
                      name={'alerta'}
                      value={'true'}
                      labelOpt1={''}
                      labelOpt2={''}
                      onChange={handleChangeRadioAlert}
                      large={true}
                    />
                  </Grid>
                </div>

                <div className={classes.divFlex}>
                  <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.gridContainer}>
                    <Grid item xs={2} sm={6} md={6} lg={6} xl={6}>

                    </Grid>

                    <ElementRadio
                      label={i18n['FilesTableFTP:typo3ft']}
                      name={'consolidation'}
                      value={'true'}
                      labelOpt1={''}
                      labelOpt2={''}
                      onChange={handleChangeRadioConsolidation}
                      large={true}
                    />
                  </Grid>
                </div>

                <div className={classes.tableContainer}>
                  <MUIDataTable title={''} columns={columns} data={dataFile} options={{ ...labelsTbFilesTable, ...optionsTbFilesTable }} />
                </div>

                <div className={classes.divButtons}>
                  <div>
                    <button
                      className={classes.button}
                      onClick={handleButtonSend}
                    >
                      {i18n['FilesTableFTP:buttonSendft']}
                    </button>
                  </div>
                </div>

                <Dialog
                  open={open}
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
                        { handleRowClickSearchResult: handleRowClickBusinessResult }
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

              </Form>
            )}
          </Formik>

        </CardContent>
      </Card>
    </Fragment>
  )
}

export { FilesTableFTP }
export type { IFilesTableFTP }
