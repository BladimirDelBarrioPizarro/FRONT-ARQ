import React, { useState, useRef, ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Dialog,
  IconButton,
  InputAdornment
} from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { DrawerBusinessCode } from '../../organisms/DrawerBusinessCode/DrawerBusinessCode'
import { DrawerCorresponsalCode } from '../../organisms/DrawerCorresponsalCode/DrawerCorresponsalCode'
import { FormDrawer } from '../../organisms/FormDrawer/FormDrawer'
import { IBoeForm } from './types'

const useStyles = makeStyles((theme) =>
  createStyles({
    divFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      height: '100%',
      width: '100%'
    },
    divContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    divButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%'
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
    span: {
      fontSize: '14px',
      marginLeft: '8px',
      marginTop: '1rem'
    },
    iconCloud: {
      borderRadius: '18px',
      marginTop: '1rem'
    },
    iconCodCorrespondent: {
      marginLeft: '3px',
      marginTop: '40px',
      color: '#003b64'
    },
    fieldCodCompany: {
      width: '15.188rem',
      height: '1.25rem',
      marginTop: '1.875rem',
      marginBottom: '0.125rem',
      boxSizing: 'border-box',
      border: 'none',
      borderBottom: '2px solid #ff9900',
      backgroundColor: '#fff'
    },
    fieldDocumentType: {
      width: '243px',
      height: '20px',
      marginTop: '30px',
      marginBottom: '2px',
      boxSizing: 'border-box',
      border: 'none',
      borderBottom: '2px solid #ff9900',
      backgroundColor: '#fff'
    },
    fieldDocumentName: {
      width: '282px',
      height: '36px',
      margin: '21px 25px 4px 142px',
      padding: '10px 78px 4px 10px',
      borderRadius: '2.6px',
      border: 'solid 1px #d8d8d8'
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
    labelDocumentType: {
      width: '120px',
      height: '22px',
      marginTop: '35px',
      marginLeft: '0.90rem',
      fontFamily: 'NeverMind',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#003b64'
    },
    fieldPetitionNum: {
      width: '243px',
      height: '20px',
      marginTop: '30px',
      marginBottom: '2px',
      marginLeft: '25px',
      boxSizing: 'border-box',
      border: 'none',
      borderBottom: '2px solid #ff9900'
    },
    fieldReceptionDate: {
      marginLeft: '10px',
      width: '135px',
      height: '22px',
      margin: '29px 57px 10px 3px',
      fontFamily: 'NeverMind',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#666666'
    },
    fieldCodCorrespondent: {
      width: '243px',
      height: '20px',
      marginTop: '30px',
      marginBottom: '2px',
      marginLeft: '4px',
      boxSizing: 'border-box',
      border: 'none',
      borderBottom: '2px solid #ff9900'
    },
    fieldCodProduct: {
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
    fieldTypeExpensive: {
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

    labelDocumentName: {
      width: '140px',
      height: '22px',
      marginTop: '35px',
      marginLeft: '0px',
      marginRight: '10px',
      fontFamily: 'NeverMind',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#003b64'
    },
    labelReceptionDate: {
      height: '22px',
      marginTop: '35px',
      marginLeft: '226px',
      marginRight: '0px',
      fontFamily: 'NeverMind',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#003b64'
    },
    labelPetitionNum: {
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
    labelCodCorrespondent: {
      marginTop: '35px',
      marginLeft: '95px',
      fontFamily: 'NeverMind',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#003b64'
    },
    labelCodProduct: {
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
    labelTypeExpensive: {
      marginTop: '35px',
      marginLeft: '95px',
      fontFamily: 'NeverMind',
      fontSize: '14px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#003b64'
    },
    button: {
      width: '135px',
      height: '36px',
      marginTop: '3rem',
      borderRadius: '6px',
      boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
      backgroundColor: '#003b64',
      color: '#fff',
      border: '1px',
      '&:hover': {
        backgroundColor: '#ff9900'
      }
    }
  })
)

const BoeForm: React.FC<IBoeForm> = ({
  i18n,
  documentType,
  productCode,
  spendType,
  handleSearch,
  drawerBusinessCodeProps,
  drawerCorresponsalCodeProps
}) => {
  const classes = useStyles()
  const [file, setFile] = useState(null)
  const [openDrawerBCode, setOpenDrawerBCode] = useState(false)
  const [openDrawerCCode, setOpenDrawerCCode] = useState(false)
  const [codCompany, setCodCompany] = useState('')
  const [codCorrespondent, setCodCorrespondent] = useState('')
  const [documentTyp, setDocumentType] = useState('')
  const [petitionNum, setPetitionNum] = useState('')
  const [codProduct, setCodProduct] = useState('')
  const [typeExpensive, setTypeExpensive] = useState('')

  const toggleDrawer = (anchor: string, open: boolean) => {
    return () => {
      if (anchor === 'bcode') {
        setOpenDrawerBCode(open)
      } else {
        setOpenDrawerCCode(open)
      }
    }
  }

  const actualDate = (): string => {
    const date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  const handleClickTableBusiness = (rowData): void => {
    setOpenDrawerBCode(false)
    setCodCompany(rowData[0].props.children)
  }

  const handleClickTableCorrespondents = (rowData): void => {
    setOpenDrawerCCode(false)
    setCodCorrespondent(rowData[0].props.children)
  }

  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    setFile(Array.from(e.target.files))
  }

  const inputFileRef = useRef(null)

  const handleSubmit = (): void => {
    console.log('codCompany: ', codCompany, 'documentTyp:', documentTyp, 'file:', file, 'fecha recepcion:', actualDate(), 'numPetition:', petitionNum, 'CodCorrespondent: ', codCorrespondent, 'codProduct: ', codProduct, 'typo gasto:', typeExpensive) // eslint-disable-line
  }

  return (
    <Card>

      <Dialog
        open={openDrawerBCode}
        onClose={toggleDrawer('bcode', false)}
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
          handleBack={toggleDrawer('bcode', false)}
        />
      </Dialog>

      <FormDrawer
        open={openDrawerCCode}
        toggleDrawer={toggleDrawer('ccode', false)}
      >
        <DrawerCorresponsalCode
          tableCorrespondentsProps={
            Object.assign(
              {},
              drawerCorresponsalCodeProps.tableCorrespondentsProps,
              { handleRowClickSearchResult: handleClickTableCorrespondents }
            )
          }
          i18n={drawerCorresponsalCodeProps.i18n}
          countries={drawerCorresponsalCodeProps.countries}
          handleSearch={drawerCorresponsalCodeProps.handleSearch}
          loading={drawerCorresponsalCodeProps.loading}
          error={drawerCorresponsalCodeProps.error}
        >
        </DrawerCorresponsalCode>
      </FormDrawer>

      <CardHeader title={i18n['BoeForm:cardTitle']}></CardHeader>
      <CardContent>

        <div className={classes.divFlex}>
          <div className={classes.divContainer}>
            <div className={classes.labelCodCompany}>
              {i18n['BoeForm:boeFormlabel1']}
            </div>
            <input
              type="text"
              className={classes.fieldCodCompany}
              name="cod-company"
              id="cod-company"
              value={codCompany}
              onChange={e => { setCodCompany(e.target.value) }}
            />
            <div className={classes.iconCodEmpresa}>
              <InputAdornment position="start">
                <IconButton onClick={toggleDrawer('bcode', true)}>
                  <MoreHorizIcon className={classes.icon}></MoreHorizIcon>
                </IconButton>
              </InputAdornment>
            </div>
          </div>

          <div className={classes.divContainer}>
            <div className={classes.labelDocumentType}>
              {i18n['BoeForm:boeFormlabel2']}
            </div>
            <select
              className={classes.fieldDocumentType}
              id="document-type"
              onChange={e => { setDocumentType(e.target.value) }}
            >
              <option>{i18n['BoeForm:menuTitle']}</option>
              {documentType.map((item, index) => (
                <option key={index} value={item.value}>{item.result}</option>
              ))}
            </select>
          </div>

        </div>

        <div className={classes.divFlex}>
          <div className={classes.divContainer}>
            <div className={classes.labelDocumentName}>
              {i18n['BoeForm:boeFormlabel3']}
            </div>
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
            <IconButton
              size="small"
              color="primary"
              onClick={() => inputFileRef.current.click()}
            >
              <CloudUpload color="primary" className={classes.iconCloud}></CloudUpload>
              <span className={classes.span}>{!Array.isArray(file) ? i18n['BoeForm:iconCloud'] : file[0].name }</span>
            </IconButton>

          </div>

          <div className={classes.divContainer}>
            <div className={classes.labelReceptionDate}>
              {i18n['BoeForm:boeFormlabel8']}
            </div>
            <input
              className={classes.fieldReceptionDate}
              name="reception-date"
              id="reception-date"
              readOnly
              disabled
              value={`${actualDate()}`}
            />
          </div>
        </div>

        <div className={classes.divFlex}>
          <div className={classes.divContainer}>
            <div className={classes.labelPetitionNum}>
              {i18n['BoeForm:boeFormlabel4']}
            </div>
            <input
              className={classes.fieldPetitionNum}
              type="number"
              name="petition-num"
              id="petition-num"
              onChange={e => { setPetitionNum(e.target.value) }}
              max="10"
            ></input>
          </div>

          <div className={classes.divContainer}>
            <div className={classes.labelCodCorrespondent}>
              {i18n['BoeForm:boeFormlabel5']}
            </div>

            <input
              type="text"
              className={classes.fieldCodCorrespondent}
              name="cod-correspondent"
              id="cod-correspondent"
              max="10"
              value={codCorrespondent}
              onChange={e => setCodCorrespondent(e.target.value)}
            />
            <div className={classes.iconCodCorrespondent}>
              <InputAdornment position="end">
                <IconButton onClick={toggleDrawer('ccode', true)}>
                  <MoreHorizIcon className={classes.icon}></MoreHorizIcon>
                </IconButton>
              </InputAdornment>
            </div>
          </div>
        </div>

        <div className={classes.divFlex}>
          <div className={classes.divContainer}>
            <div className={classes.labelCodProduct}>
              {i18n['BoeForm:boeFormlabel6']}
            </div>
            <select
              className={classes.fieldCodProduct}
              id="document-type"
              onChange={e => { setCodProduct(e.target.value) }}
            >
              <option>{i18n['BoeForm:menuTitle']}</option>
              {productCode.map((item, index) => (
                <option key={index} value={item.value}>{item.result}</option>
              ))}
            </select>
          </div>

          <div className={classes.divContainer}>
            <div className={classes.labelTypeExpensive}>
              {i18n['BoeForm:boeFormlabel7']}
            </div>
            <select
              className={classes.fieldTypeExpensive}
              id="type-expense"
              onChange={e => { setTypeExpensive(e.target.value) }}
            >
              <option>{i18n['BoeForm:menuTitle']}</option>
              {spendType.map((item, index) => (
                <option key={index} value={item.value}>{item.result}</option>
              ))}
            </select>

          </div>
        </div>

        <div className={classes.divButtons}>
          <button className={classes.button}
            type="submit"
            onClick={handleSubmit as any}>
            {i18n['BoeForm:buttonSend']}
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export { BoeForm }
export type { IBoeForm }
