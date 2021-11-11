import React, { useState, useRef, ChangeEvent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Chip,
  Grid,
  CircularProgress,
  IconButton
} from '@material-ui/core'
import { CloudUpload, Cancel, CheckCircleSharp, Delete } from '@material-ui/icons'
import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables'
import { HistoricTable } from '../../organisms/HistoricTable/HistoricTable'
import { ICopyFileProcess } from './types'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    backgroundColor: '#f9f9f9',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMindBold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal'
  },
  divInput: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '70px',
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
    justifyContent: 'center'
  },
  divIconCloudUpload: {
    marginTop: '30px',
    border: 'dashed 1px #d8d8d8',
    height: '1.5rem'
  },
  labelFile: {
    width: '140px',
    height: '22px',
    marginTop: '35px',
    marginLeft: '0px',
    marginRight: '10px',
    marginBottom: '25px',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  fieldFile: {
    width: '30rem',
    height: '36px',
    margin: '21px 25px 4px 142px',
    padding: '10px 78px 4px 10px',
    borderRadius: '2.6px',
    border: 'solid 1px #d8d8d8'
  },
  span: {
    fontSize: '14px',
    marginLeft: '8px'
  },
  iconCloud: {
    borderRadius: '18px'
  },
  iconCheckCircleSharp: {
    color: '#ff9900'
  },
  iconCloudUpload: {
    backgroundColor: '#ffffff',
    color: '#003b64',
    borderRadius: '18px',
    '&:hover': {
      color: '#ff9900'
    }
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
  spanCloudUpload: {
    fontSize: '14px',
    marginLeft: '8px'
  },
  tableContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  deleteIconStyle: {
    cursor: 'pointer'
  },
  chipError: {
    marginLeft: 15
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%'
  },
  buttonMiddle: {
    textAlign: 'center'
  }
}))

/*
Petición
--------
itemsPerPage    // elementos por página
currentPage     // número de página
sortBy          // método de ordenación
sortOrder       // orden (ascendente o descendente)

Respuesta
---------
totalCount      // número total de elementos
totalPages      // número total de páginas
currentPage     // número de página (ya está en la petición, pero para diferenciar las respuestas del servicio)
*/

const CopyFileProcess: React.FunctionComponent<ICopyFileProcess> = ({
  i18n,
  historicTableProps,
  sending,
  handleChange,
  handleSendFiles,
  handleCancelFiles,
  handleDeleteFile,
  handleRowClick,
  onChangePage,
  onChangeRowsPerPage,
  totalRows,
  rowsPerPage,
  page,
  handleDownloadFile
}) => {
  const classes = useStyles()
  const bytesToSize: (n: number) => string = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
  }

  const [dataFile, setDataFile] = useState<Array<object | number[] | string[]>>([])
  const [dataSubmit, setDataSubmit] = useState<Array<object | number[] | string[]>>([])
  const [file, setFile] = useState(null)

  const handleButtonSendFiles = (): void => {
    handleSendFiles(dataFile)
    setDataSubmit(dataFile)
  }

  const handleButtonDeleteFile = (index): void => {
    handleDeleteFile(index)
    const files = dataFile.filter((item, i) => i !== index)
    setDataFile(files)
    setFile(files)
  }

  handleCancelFiles = (): void => {
    setDataFile([])
    setFile([])
  }

  const inputFileRef = useRef(null)

  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    handleChange(Array.from(e.target.files))
    setDataFile(Array.from(e.target.files))
    setFile(Array.from(e.target.files))
  }

  const labelsTbFilesTable = {
    textLabels: {
      body: {
        noMatch: i18n['CopyFileProcess:reportTbNoMatch']
      },
      pagination: {
        next: i18n['CopyFileProcess:reportTbNext'],
        previous: i18n['CopyFileProcess:reportTbPrevious'],
        rowsPerPage: i18n['CopyFileProcess:reportTbPerPage'],
        displayRows: i18n['CopyFileProcess:reportTbDisplayRows']
      },
      toolbar: {
        search: i18n['CopyFileProcess:reportTbSearch'],
        downloadCsv: i18n['CopyFileProcess:reportTbDownladCsv'],
        print: i18n['CopyFileProcess:reportTbPrint'],
        viewColumns: i18n['CopyFileProcess:reportTbViewColumns'],
        filterTable: i18n['CopyFileProcess:reportTbFilterTable']
      },
      filter: {
        title: i18n['CopyFileProcess:reportTbTitle'],
        reset: i18n['CopyFileProcess:reportTbReset']
      },
      viewColumns: {
        title: i18n['CopyFileProcess:reportTbViewColumnsShow']
      },
      selectedRows: {
        text: i18n['CopyFileProcess:reportTbText'],
        delete: i18n['CopyFileProcess:reportTbDelete']
      }
    }
  }

  const optionsTbFilesTable = {
    onChangePage: onChangePage,
    onChangeRowsPerPage: onChangeRowsPerPage,
    pagination: false,
    selectableRows: 'none',
    onRowClick: handleRowClick,
    filter: false,
    download: false,
    print: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [],
    count: totalRows,
    page: page,
    serverSide: true,
    search: false
  }

  const columnsTbFilesTable: MUIDataTableColumn[] = [
    {
      name: 'validation',
      label: i18n['CopyFileProcess:fileTableTbColumnsValidation'],
      options: {
        filter: false,
        customBodyRender: (value: boolean) => {
          const icon =
              sending === 'loading' ? (
                <CircularProgress size={24} />
              ) : value ? (
                <Cancel color="error"></Cancel>
              ) : (
                <CheckCircleSharp className={classes.iconCheckCircleSharp}></CheckCircleSharp>
              )
          return icon
        }
      }
    },
    {
      name: 'name',
      label: i18n['CopyFileProcess:fileTableTbColumnsName'],
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
      label: i18n['CopyFileProcess:fileTableTbColumnsSize'],
      options: {
        filter: false,
        customBodyRender: (value) => {
          return bytesToSize(value)
        }
      }
    },
    {
      name: 'delete',
      label: i18n['CopyFileProcess:fileTableTbColumnsDelete'],
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const newValue = (
            <Delete
              className={classes.deleteIconStyle}
              onClick={() => handleButtonDeleteFile(tableMeta.rowIndex)}
            ></Delete>
          )
          return newValue
        }
      }
    }
  ]

  return (
    <div className={classes.root}>
      <div className={classes.divHeader}>
        {i18n['CopyFileProcess:templateTitlecfp']}
      </div>
      <div className={classes.divFlex}>
        <div className={classes.divInput}>
          <div className={classes.labelFile}>
            {i18n['CopyFileProcess:labelFilecfp']}
          </div>
          <input
            name="file"
            id="file"
            accept={'.csv'}
            style={{ display: 'none' }}
            type="file"
            multiple
            ref={inputFileRef}
            onChange={handleInputChange}
            className={classes.fieldFile}
          />
          <div className={classes.divIconCloudUpload}>
            <IconButton
              size="small"
              color="primary"
              onClick={() => inputFileRef.current.click()}
              className={classes.iconButton}
            >
              <CloudUpload color="primary" className={classes.iconCloudUpload}></CloudUpload>
              <span className={classes.spanCloudUpload}>{!Array.isArray(file) ? i18n['CopyFileProcess:spanmessagecfp'] : i18n['CopyFileProcess:spanmessage2cfp'] }</span>
            </IconButton>
          </div>
        </div>
      </div>

      <div className={classes.tableContainer}>
        <MUIDataTable columns={columnsTbFilesTable} data={dataFile} options={{ ...optionsTbFilesTable, ...labelsTbFilesTable }} />
      </div>

      <div className={classes.divFlexButton}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              label: i18n['CopyFileProcess:buttonSend'],
              click: handleButtonSendFiles,
              align: classes.buttonMiddle
            },
            {
              label: i18n['CopyFileProcess:buttonCancel'],
              click: handleCancelFiles,
              align: classes.buttonMiddle
            }
          ].map(({ label, click, align }, index) => (
            <>
              {index !== 0 ??
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>

                  </Grid>
              }

              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}
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
        </Grid>
      </div>

      <HistoricTable
        i18n={historicTableProps.i18n}
        data={dataSubmit}
        handleRowClick={handleRowClick}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        handleDownloadFile={handleDownloadFile}
        totalRows={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
      ></HistoricTable>
    </div>
  )
}

export { CopyFileProcess }
export type { ICopyFileProcess }
