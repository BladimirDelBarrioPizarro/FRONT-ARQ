import React, { useState, ChangeEvent, useRef } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import {
  Grid,
  Typography,
  Card,
  Button
} from '@material-ui/core'
import { AddCircleOutlineRounded, RemoveCircleOutlineRounded, CloudUpload, CloudDownload } from '@material-ui/icons'
import { ISimulationReport } from './types'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1
  },
  divHeader: {
    margin: '20px'
  },
  divFlex: {
    // display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '6em'
  },
  divFlexResult: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    margin: '2em'
  },
  divFlexResultData: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    marginLeft: '25px',
    marginTop: '8px'
  },
  labelStyle: {
    fontSize: '18px',
    textAlign: 'center'
  },
  labelStyleResult: {
    fontFamily: 'NeverMind',
    fontSize: '14px',
    color: '#003b64',
    minWidth: '10em',
    paddingLeft: '15px',
    textAlign: 'left'
  },
  divIconCloudUpload: {
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid 1px #13131370',
    width: '450px',
    borderRadius: '5px',
    marginLeft: '-2em',
    justifyContent: 'space-between'
  },
  divFicheros: {
    fontFamily: 'NeverMind-Bold',
    fontSize: '16px',
    color: '#003b64',
    textAlign: 'left',
    margin: '1em'
  },
  iconButton: {
    flex: '0 0 auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  iconButtonText: {
    fontSize: '18px',
    margin: '0 8px'
  },
  iconCloudUpload: {
    color: '#003b64',
    margin: '8px',
    fontSize: '24px',
    '&:hover': {
      color: '#ff9900'
    }
  },
  divIconCloud: {
    display: 'flex',
    textAlign: 'center',
    width: '26px'
  },
  iconCloud: {
    backgroundColor: '#ffffff',
    color: '#003b64',
    borderRadius: '18px',
    marginLeft: '7px',
    fontSize: '24px',
    '&:hover': {
      color: '#ff9900'
    }
  },
  spanCloudUpload: {
    fontSize: '18px',
    margin: '8px'
  },
  formatType: {
    marginLeft: '15%'
  },
  buttonMiddle: {
    width: '100%',
    paddingLeft: '60%'
  }
}))

const SimulationReport: React.FunctionComponent<ISimulationReport> = ({
  i18n,
  handleSendFiles,
  showResult,
  data,
  handleCleanFiles
}) => {
  const classes = useStyles()
  const [actualIndex, setActualIndex] = useState(0)
  const [files, updateFiles] = useState([])
  const inputFileRef = useRef(null)

  const bytesToSize: (n: number) => string = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return '0 Byte'
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let filesNumber = files.length
    if (actualIndex < filesNumber) {
      const file = e.target.files[0]
      const fileName = `file${actualIndex}`
      const newFiles = [...files]
      newFiles[actualIndex] = {
        name: fileName,
        file: file,
        tamano: file.size,
        data: file
      }
      updateFiles(newFiles)
    } else {
      const newFiles = files.concat(Array.from(e.target.files).map(file => {
        const fileName = `file${filesNumber}`
        filesNumber += 1
        if (files.some(oldFile => oldFile.file !== null && oldFile.file.name === file.name)) {
          return {
            name: fileName,
            file: null,
            tamano: null,
            data: null
          }
        }
        return {
          name: fileName,
          file: file,
          tamano: file.size,
          data: file
        }
      }).filter(file => file.file !== null))
      updateFiles(newFiles)
    }
  }

  const handleButtonCancel = (): void => {
    updateFiles([])
    handleCleanFiles()
  }

  const addFile = (): void => {
    const fileName = `file${files.length}`
    updateFiles(files => [...files, {
      name: fileName,
      file: '',
      tamano: 0,
      data: ''
    }])
  }

  const removeFile = (index): void => {
    updateFiles(files.filter((value, indice) => indice !== index))
  }

  const openFileSearch = (index): void => {
    document.getElementById(`file${index}`).click()
  }

  const downloadFile = (file): void => {
    var blob = new Blob([file])
    var url = URL.createObjectURL(blob)
    window.open(
      url,
      '_blank',
      'location=yes,height=%100,width=%100,left=0,location=0,scrollbars=yes,status=yes')
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.divHeader}>
          <Typography variant="h1">
            {i18n['SimulationReport:title']}
          </Typography>
        </div>

        <Card style={{ maxWidth: '1500px', minWidth: '1300px' }}>
          <div className={classes.divFlex}>
            {files.map((file) => (
              <>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                    <Typography variant="body1" className={classes.labelStyle}>
                      {i18n['SimulationReport:labelFile']}
                    </Typography>
                    <input
                      name={file.name}
                      id={file.name}
                      accept={'*'}
                      style={{ display: 'none' }}
                      type="file"
                      ref={inputFileRef}
                      onClick={() => {
                        setActualIndex(files.indexOf(file))
                      }}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid className={classes.divIconCloudUpload}
                    onClick={(e) => openFileSearch(files.indexOf(file))}
                    item xs={5} sm={5} md={5} lg={5} xl={5}>
                    <Typography className={classes.spanCloudUpload}>
                      {file.data.name}
                    </Typography>
                    <CloudUpload className={classes.iconCloudUpload}/>
                  </Grid>
                  <Grid className={classes.labelStyle} item xs={1} sm={1} md={1} lg={1} xl={1}>
                    {bytesToSize(files[files.indexOf(file)].tamano)}
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <div className={classes.divIconCloud}>
                      <IconButton
                        onClick={() => removeFile(files.indexOf(file))}
                        className={classes.iconButton}
                      >
                        <RemoveCircleOutlineRounded className={classes.iconCloud}/>
                      </IconButton>
                    </div>
                  </Grid>
                </Grid>
                <div className={classes.formatType}>
                  <Typography>
                    {i18n['SimulationReport:labelInformacion']}
                  </Typography>
                </div>
              </>
            ))}
            <>
              <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item xs={3} sm={3} md={3} lg={2} xl={2}>
                  <Typography variant="body1" className={classes.labelStyle}>
                    {i18n['SimulationReport:labelFile']}
                  </Typography>
                  <input
                    accept={'*'}
                    style={{ display: 'none' }}
                    type="file"
                    id="fileDefault"
                    ref={inputFileRef}
                    multiple
                    onClick={() => {
                      setActualIndex(files.length)
                    }}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid className={classes.divIconCloudUpload}
                  onClick={(e) => openFileSearch('Default')}
                  item xs={5} sm={5} md={5} lg={5} xl={5}>
                  <Typography className={classes.spanCloudUpload}>
                    {i18n['SimulationReport:labelExaminar']}
                  </Typography>
                  <CloudUpload className={classes.iconCloudUpload}/>
                </Grid>
                <Grid className={classes.labelStyle} item xs={1} sm={1} md={1} lg={1} xl={1}>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <div className={classes.divIconCloud}>
                    <IconButton
                      onClick={() => addFile()}
                      className={classes.iconButton}
                    >
                      <AddCircleOutlineRounded className={classes.iconCloud}/>
                      <Typography variant="body2" className={classes.iconButtonText} >
                        {i18n['SimulationReport:labelAñadirFichero']}
                      </Typography>
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
              <div className={classes.formatType}>
                <Typography>
                  {i18n['SimulationReport:labelInformacion']}
                </Typography>
              </div>
            </>
            {showResult && <>
              <div className={classes.divFlexResult}>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className={classes.divFicheros}
                  item xs={12} sm={12} md={12} lg={12} xl={12}>
                  {i18n['SimulationReport:labelFicheros']}
                </Grid>
                <Grid container
                  direction="row"
                  justify="flex-start"
                  alignItems="center">
                  <Grid className={classes.divFlexResult} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={classes.labelStyleResult}>
                      {i18n['SimulationReport:labelFicherosNombre']}
                    </div>
                  </Grid>
                </Grid>
                {data.length > 0 && <>
                  {data.filter(file => file.name !== null)
                    .map((element, index) => (
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.divFlexResultData}
                        key={index}>
                        <Grid className={classes.labelStyleResult} item xs={4} sm={4} md={4} lg={4} xl={4}>
                          {element.name}
                        </Grid>
                        <Grid className={classes.labelStyleResult} item xs={2} sm={2} md={2} lg={2} xl={2}>
                          {element.tamano}
                        </Grid>
                        <Grid className={classes.divIconCloud} item xs={1} sm={1} md={1} lg={1} xl={1}>
                          <IconButton
                            onClick={() => downloadFile(element.file)}
                            className={classes.iconButton}
                          >
                            <CloudDownload className={classes.iconCloud}/>
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                </>
                }
              </div>
            </>
            }
            <div className={classes.buttonMiddle}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => handleSendFiles(files) }
              >
                {i18n['SimulationReport:buttonAccept']}
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleButtonCancel}
              >
                {i18n['SimulationReport:buttonCancel']}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export { SimulationReport }
export type { ISimulationReport }
