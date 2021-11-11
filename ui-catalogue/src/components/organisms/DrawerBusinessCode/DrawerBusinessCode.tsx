import {
  createStyles,
  makeStyles,
  Grid,
  IconButton,
  Theme
} from '@material-ui/core'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { TableCompany } from '../../molecules/TableCompany/TableCompany'
import { IDrawerBusinessCode } from './types'
import * as yup from 'yup'
import CloseIcon from '@material-ui/icons/Close'
import {
  ElementFormInput,
  ElementFormSelect
} from '../../atoms/index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '30ch',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    },
    divFlex: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    },
    divContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '400px'
    },
    fieldCompany: {
      width: '243px',
      height: '20px',
      marginTop: '30px',
      marginBottom: '2px',
      boxSizing: 'border-box',
      border: 'none',
      borderBottom: '2px solid #ff9900',
      backgroundColor: '#fff'
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
    labelCompany: {
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
    labelName: {
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
    labelCIF: {
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
    divButtons: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '5px'
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
    iconButtonWidth: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    iconButton: {
      color: '#003b64',
      '&:hover': {
        color: '#FF9B00 !important'
      }
    }
  })
)

const DrawerBusinessCode: React.FC<IDrawerBusinessCode> = ({
  tableCompanyProps,
  i18n,
  countries,
  handleSearch,
  loading,
  error,
  handleBack
}) => {
  const classes = useStyles()
  const [country, setCountry] = useState('')
  const [companyId, setCompany] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [errorNameMessage, setErrorNameMessage] = useState('')
  const [errorCountryMessage, setErrorCountryMessage] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const [sortedType, setSortedType] = useState('ASC')
  const [sortedBy, setSortedBy] = useState('nombreDeudor')

  useEffect(() => {
    executeQuery()
  }, [sortedType, sortedBy, rowsPerPage, page])

  const handleCountry = (e): void => {
    e.preventDefault()
    setErrorCountryMessage('')
    setCountry(e.target.value)
  }

  const executeQuery = (): void => {
    handleSearch(companyId, companyName, country, rowsPerPage, page, sortedBy, sortedType)
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

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column)
  }

  const nameRegExp = /^[a-z0-9\d\-_\s\u00f1\u00d1]+$/

  const schemaName = yup.object().shape({
    name: yup.string().max(100).matches(nameRegExp)
  })

  const handleCodCompanyIdChange: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    setCompany(e.target.value)
  }

  const [nameCheck, setNameCheck] = useState(false)
  const handleCodCompanyNameChange: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    schemaName.isValid({ name: e.target.value })
      .then(resp => {
        if (!resp) {
          setErrorNameMessage(i18n['DrawerBusinessCode:errorName'])
          setNameCheck(resp)
        } else {
          setErrorNameMessage('')
          setNameCheck(resp)
        }
      })
      .catch(err => console.log(err)) // eslint-disable-line
    setCompanyName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (country === '') {
      setErrorCountryMessage(i18n['DrawerBusinessCode:errorCountry'])
      return
    }
    if (nameCheck || companyId !== '') {
      executeQuery()
    }
  }

  return (
    <>
      <form noValidate action="null">

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
              <div className={classes.divHeader}>
                {i18n['DrawerBusinessCode:title']}
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <div className={classes.iconButtonWidth}>
                <IconButton
                  className={classes.iconButton}
                  onClick={handleBack}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </div>

        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">

          <ElementFormInput
            type={'text'}
            name={'cod-company-cif'}
            label={i18n['DrawerBusinessCode:field3']}
            handleSet={handleCodCompanyIdChange}
            value={companyId}
            errorMessage=''
            modal={true}
          />
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>

          </Grid>

          <ElementFormSelect
            name={'cod-company-country'}
            label={i18n['DrawerBusinessCode:field1']}
            handleSet={handleCountry}
            values={countries}
            errorMessage={errorCountryMessage}
            modal={true}
          />
        </Grid>

        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <ElementFormInput
            type={'text'}
            name={'cod-company-nombre'}
            label={i18n['DrawerBusinessCode:field2']}
            handleSet={handleCodCompanyNameChange}
            value={companyName}
            errorMessage={errorNameMessage}
            modal={false}
            middle={false}
          />
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              label: i18n['DrawerBusinessCode:buttonSearch'],
              click: handleSubmit,
              align: classes.buttonMiddle
            }
          ].map(({ label, click, align }, index) => (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}
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

      </form>
      <br></br>
      {tableCompanyProps.data.length > 0 && (
        <TableCompany
          i18n={tableCompanyProps.i18n}
          data={tableCompanyProps.data}
          onChangePage={handleOnChangePage}
          onChangeRowsPerPage={handleOnChangeRowsPerPage}
          totalRows={tableCompanyProps.totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onViewColumnsChange={onViewColumnsChange}
          onColumnSortChange={onColumnSortChange}
          handleRowClickSearchResult={tableCompanyProps.handleRowClickSearchResult}
        />
      )}
    </>
  )
}

export { DrawerBusinessCode }
