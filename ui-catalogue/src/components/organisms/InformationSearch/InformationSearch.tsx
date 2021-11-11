import React, { Fragment, useState, ChangeEvent, useEffect } from 'react'
import {
  Backdrop,
  IconButton,
  InputAdornment,
  Drawer,
  Divider,
  Modal,
  TextField,
  Typography
} from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core/styles'
import { TableBusiness } from '../../molecules/TableBusiness/TableBusiness'
import { TableReport } from '../../molecules/TableReports/TableReports'
import { IInformationSearch } from './types'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: '70px',
    width: '100%'
  },
  container: {
    width: '700px',
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3px'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  divButtons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    marginTop: '1px'
  },
  labelCodDebtor: {
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
  fieldCodDebtor: {
    width: '243px',
    height: '20px',
    marginTop: '30px',
    marginBottom: '2px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
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
  icon: {
    backgroundColor: '#003b64',
    color: '#fff',
    borderRadius: '18px'
  },
  iconCodEmpresa: {
    marginLeft: '20px',
    marginTop: '40px'
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
    marginTop: 15
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
  }
}))

const inputStyles = makeStyles(theme => ({
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4
  }
}))

const InformationSearch: React.FunctionComponent<IInformationSearch> = ({
  i18n,
  country,
  businessTableProps,
  reportsTableProps,
  handleLastSearch,
  handleAllSearch,
  handleSearchCompany,
  buttonLastSearchColor,
  buttonLastSearchVariant,
  buttonAllSearchColor,
  buttonAllSearchVariant,
  buttonCleanColor,
  buttonCleanVariant,
  buttonHelpColor,
  buttonHelpVariant
}) => {
  const inputStyle = inputStyles()
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [code, setCode] = useState<number>(0)
  const [businessForm, setBusinessForm] = useState({
    country: '',
    cif: '',
    name: ''
  })

  const [searchType, setSearchType] = useState('')
  const [errorCIFMessage, setErrorCIFMessage] = useState('')
  const [errorNameMessage, setErrorNameMessage] = useState('')
  const [sortedBy, setSortedBy] = useState('id')
  const [sortedType, setSortedType] = useState('ASC')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortedByBusiness, setSortedByBusiness] = useState('codProducto')
  const [sortedTypeBusiness, setSortedTypeBusiness] = useState('ASC')
  const [pageBusiness, setPageBusiness] = useState(0)
  const [rowsPerPageBusiness, setRowsPerPageBusiness] = useState(10)

  const cifRegExp = /^[a-zA-Z]{1}\d{7}[a-zA-Z0-9]{1}$/

  const schemaCIF = yup.object().shape({
    cif: yup.string().min(9).matches(cifRegExp)
  })

  const schemaName = yup.object().shape({
    name: yup.string().max(100)
  })

  const handleClose = (): void => {
    setOpenModal(false)
  }

  const handleDrawerOpen = (): void => {
    setOpen(!open)
  }

  const handleDrawerClose = (): void => {
    setOpen(false)
  }

  const handleCountry: (e) => void = e => {
    e.preventDefault()
    setBusinessForm({
      ...businessForm,
      [e.target.name]: e.target.value
    })
  }

  const handleName: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    e.preventDefault()
    schemaName.isValid({ name: e.target.value })
      .then(resp => {
        if (!resp) {
          setErrorNameMessage(i18n['InformationSearch:errorNameMessage'])
        } else {
          setErrorNameMessage('')
        }
      })
      .catch(err => console.log(err)) // eslint-disable-line
    setBusinessForm({
      ...businessForm,
      [e.target.name]: e.target.value
    })
  }

  const handleCIF: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    e.preventDefault()
    schemaCIF.isValid({ cif: e.target.value })
      .then(resp => {
        if (!resp) {
          setErrorCIFMessage(i18n['InformationSearch:errorCIFMessage'])
        } else {
          setErrorCIFMessage('')
        }
      })
      .catch(err => console.log(err)) // eslint-disable-line
    setBusinessForm({
      ...businessForm,
      [e.target.name]: e.target.value
    })
  }

  const handleRowClickCode = (rowData: any): void => {
    setCode(rowData[1].props.children)
  }

  const handleSearchLast = (e): void => {
    e.preventDefault()
    setSearchType('last')
    handleLastSearch(code, rowsPerPage, page, sortedBy, sortedType)
  }

  const handleSearchAll = (e): void => {
    e.preventDefault()
    setSearchType('all')
    handleAllSearch(code, rowsPerPage, page, sortedBy, sortedType)
  }

  const handleCompanySearch = (e): void => {
    e.preventDefault()
    executeBusinessQuery()
  }

  const handleSubmit = (): void => {
    if (searchType === 'last') {
      handleLastSearch(code, rowsPerPage, page, sortedBy, sortedType)
    } else {
      handleAllSearch(code, rowsPerPage, page, sortedBy, sortedType)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('query sent ', rowsPerPage, page, sortedBy, sortedType)
    handleSubmit()
  }, [sortedBy, sortedType, rowsPerPage, page])

  const handleOnChangePage = (page): void => {
    setPage(page)
  }

  const handleOnChangeRowsPerPage = (rowsPerPage): void => {
    setRowsPerPage(rowsPerPage)
  }

  const onColumnSortChange = (changedColumn: string, direction: string): void => {
    setSortedBy(changedColumn)
    setSortedType(direction.toUpperCase())
  }

  const onViewColumnsChange = (column: any): void => {
    // eslint-disable-next-line no-console
    console.log(column) // TODO: Si está función solo expone un console.log será mejor eliminarla?
  }

  const handleOnChangePageBusiness = (page): void => {
    setPageBusiness(page)
  }

  const handleOnChangeRowsPerPageBusiness = (rowsPerPage): void => {
    setRowsPerPageBusiness(rowsPerPage)
  }

  const onColumnSortChangeBusiness = (changedColumn: string, direction: string): void => {
    setSortedByBusiness(changedColumn)
    setSortedTypeBusiness(direction.toUpperCase())
  }

  useEffect(() => {
    executeBusinessQuery()
  }, [sortedByBusiness, sortedTypeBusiness, rowsPerPageBusiness, pageBusiness])

  const executeBusinessQuery = (): void => {
    handleSearchCompany(businessForm.country, businessForm.name, businessForm.cif, rowsPerPageBusiness, pageBusiness, sortedByBusiness, sortedTypeBusiness)
  }

  return (
    <Fragment>
      <form autoComplete="off">
        <div className={classes.divFlex}>
          <div className={classes.divContainer}>
            <div className={classes.labelCodDebtor}>
              {i18n['InformationSearch:typo1']}
            </div>
            <input
              type="number"
              value={code}
              className={classes.fieldCodDebtor}
              onChange={(e) => setCode(parseInt(e.target.value))}
            />
            <div className={classes.iconCodEmpresa}>
              <InputAdornment position="start">
                <IconButton onClick={handleDrawerOpen}>
                  <MoreHorizIcon className={classes.icon}></MoreHorizIcon>
                </IconButton>
              </InputAdornment>
            </div>
          </div>
        </div>

        <div className={classes.divButtons}>
          <button className={classes.button}
            type="submit"
            onClick={(e) => handleSearchLast(e)}
          >
            {i18n['InformationSearch:button2is']}
          </button>
          <button className={classes.button}
            type="submit"
            onClick={(e) => handleSearchAll(e)}
          >
            {i18n['InformationSearch:button3is']}
          </button>
        </div>
      </form>

      {
        reportsTableProps.data.length > 0 &&
            <TableReport
              i18n={reportsTableProps.i18n}
              data={reportsTableProps.data}
              handleRowClick={reportsTableProps.handleRowClick}
              onChangePage={handleOnChangePage}
              onChangeRowsPerPage={handleOnChangeRowsPerPage}
              totalRows={reportsTableProps.totalRows}
              rowsPerPage={rowsPerPage}
              page={page}
              onViewColumnsChange={reportsTableProps.onViewColumnsChange}
              onColumnSortChange={onColumnSortChange}
            ></TableReport>
      }
      <Drawer
        className={classes.drawerContainer}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <IconButton data-testid="iconClose" onClick={handleDrawerClose}>
          <ChevronRightIcon color="primary" />
          <Typography color="primary">
            {i18n['InformationSearch:typo2']}
          </Typography>
        </IconButton>
        <Divider />
        <h5 className={classes.h5}>
          {i18n['InformationSearch:typo3']}
        </h5>

        <div className={classes.container}>
          <form noValidate autoComplete="off">
            <div className={classes.divContainer}>
              <div className={classes.labelCountrie}>
                {i18n['InformationSearch:label2is']}
              </div>
              <select
                className={classes.fieldCountrie}
                id="country"
                name="country"
                onChange={e => handleCountry(e)}
              >
                <option>{i18n['InformationSearch:option']}</option>
                {country.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>

            <div className={classes.divContainer}>
              <div className={classes.labelCountrie}>
                {i18n['InformationSearch:label3is']}
              </div>
              <TextField
                className={classes.fieldName}
                data-testid="name"
                id="name"
                name="name"
                value={businessForm.name}
                onChange={handleName}
                helperText={errorNameMessage}
                InputProps={{ classes: inputStyle }}
                  error={!!errorNameMessage} // eslint-disable-line
              />
            </div>

            <div className={classes.divContainer}>
              <div className={classes.labelCountrie}>
                {i18n['InformationSearch:label4is']}
              </div>
              <TextField
                className={classes.fieldCIF}
                data-testid="cif"
                id="cif"
                name="cif"
                value={businessForm.cif}
                onChange={handleCIF}
                helperText={errorCIFMessage}
                InputProps={{ classes: inputStyle }}
                  error={!!errorCIFMessage} // eslint-disable-line
              />
            </div>

            <button
              className={classes.button}
              data-testid="search"
              type="submit"
              onClick={(e) => handleCompanySearch(e)}
            >
              {i18n['InformationSearch:button6is']}
            </button>
          </form>
        </div>
        {businessTableProps.data.length > 0 &&
                <TableBusiness
                  i18n={businessTableProps.i18n}
                  data={businessTableProps.data}
                  handleRowClick={handleRowClickCode}
                  onChangePage={handleOnChangePageBusiness}
                  onChangeRowsPerPage={handleOnChangeRowsPerPageBusiness}
                  onViewColumnsChange={onViewColumnsChange}
                  onColumnSortChange={onColumnSortChangeBusiness}
                  totalRows={businessTableProps.totalRows}
                  rowsPerPage={rowsPerPageBusiness}
                  page={pageBusiness}
                ></TableBusiness>
        }
      </Drawer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={classes.paper}>
          <h2 id="transition-modal-title">{i18n['InformationSearch:h2']}</h2>
          <p id="transition-modal-description">
            {i18n['InformationSearch:texthelp']}
          </p>
        </div>
      </Modal>
    </Fragment>
  )
}

export { InformationSearch }
