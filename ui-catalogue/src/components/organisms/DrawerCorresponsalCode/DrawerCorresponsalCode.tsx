import {
  createStyles,
  makeStyles,
  Grid,
  Theme
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { TableCorrespondents } from '../../molecules/TableCorrespondents/TableCorrespondents'
import { IDrawerCorresponsalCode } from './types'
import {
  ElementFormSelect
} from '../../atoms/index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      height: '70px',
      width: '100%'
    },
    divContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '450px'
    },
    divButtons: {
      display: 'flex',
      justifyContent: 'center',
      margin: '5px'
    },
    labelCodCountry: {
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
    fieldCodCountry: {
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
    buttonMiddle: {
      textAlign: 'center'
    },
    button: {
      width: '159px',
      height: '36px',
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

const DrawerCorresponsalCode: React.FC<IDrawerCorresponsalCode> = (
  {
    tableCorrespondentsProps,
    i18n,
    countries,
    handleSearch,
    loading,
    error
  }
) => {
  const classes = useStyles()
  const [country, setCountry] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [totalRows, setTotalRows] = useState(20)
  const [page, setPage] = useState(0)
  const [sortedType, setSortedType] = useState('ASC')
  const [sortedBy, setSortedBy] = useState('codProducto')

  const handleSubmit = (): void => {
    executeQuery()
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

  useEffect(() => {
    executeQuery()
  }, [sortedType, sortedBy, rowsPerPage, page])

  const executeQuery = (): void => {
    handleSearch(country, rowsPerPage, page, sortedType, sortedBy)
  }

  useEffect(() => {
    executeTotal()
  }, [tableCorrespondentsProps.data])

  const executeTotal = (): void => {
    if (tableCorrespondentsProps.data.length < rowsPerPage) {
      setTotalRows((page * rowsPerPage) + tableCorrespondentsProps.data.length)
    } else {
      if (tableCorrespondentsProps.data.length > 0 && totalRows === 0) {
        setTotalRows(2 * rowsPerPage)
      }
    }
  }

  return (
    <>
      <Grid container
        direction="row"
        justify="flex-start"
        alignItems="center">

        <ElementFormSelect
          name={'cod-corr-pais'}
          label={i18n['DrawerCorresponsalCode:drcrinputLabelTitle']}
          handleSet={setCountry}
          values={countries}
          modal={true}
        />
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

        </Grid>
      </Grid>

      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {[
          {
            label: i18n['DrawerCorresponsalCode:drcrbuttonSearch'],
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

      { tableCorrespondentsProps.data.length > 0 &&
        (
          <TableCorrespondents
            onChangePage={handleOnChangePage}
            onChangeRowsPerPage={handleOnChangeRowsPerPage}
            i18n={tableCorrespondentsProps.i18n}
            data={tableCorrespondentsProps.data}
            handleRowClickSearchResult={tableCorrespondentsProps.handleRowClickSearchResult}
            totalRows={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            onColumnSortChange={onColumnSortChange}
          />
        )
      }
    </>
  )
}

export { DrawerCorresponsalCode }
