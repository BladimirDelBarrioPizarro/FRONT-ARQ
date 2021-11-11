import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Button,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import PrintIcon from '@material-ui/icons/Print'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { TabPanel } from '../../organisms/TabPanel/TabPanel'
import { IBaseReport, ReportTypes } from './types'
import { GeneralInformation } from '../../organisms/GeneralInformation/GeneralInformation'
import { BalanceInformation } from '../../organisms/BalanceInformation/BalanceInformation'

function a11yProps (index: number): any {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    width: '100%',
    padding: '36px 48px 42px'
  },
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    width: '100%',
    marginTop: '20px'
  },
  labelHeader: {
    fontFamily: 'NeverMind-Bold',
    fontSize: '18px',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  labelSemiHeader: {
    fontFamily: 'NeverMind',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  tabStyleActive: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ff9900',
    color: '#ffffff',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  },
  tabStyleDefault: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    color: '#003b64',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eeeeee'
  },
  AppBar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  divFlexTabs: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  },
  divFlexButton: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '40px'
  },
  button: {
    width: '10em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  radius: {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    width: '100%'
  },
  customStyleOnTab: {
    fontWeight: 'bold'
  },
  buttonMiddle: {
    textAlign: 'center'
  },
  buttonRight: {
    textAlign: 'right'
  },
  buttonLeft: {
    textAlign: 'left'
  },
  divTitlePrint: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: '#ff9900',
    color: '#ffffff',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    height: '50px',
    marginTop: '50px'
  },
  labelTitlePrint: {
    fontWeight: 'bold'
  },
  pagebreak: {
    'page-break-before': 'always'
  },
  dialog: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    overflow: 'hidden',
    minWidth: '100px'
  },
  spiner: {
    color: '#ff9900',
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
}))

const BaseReport: React.FC<IBaseReport> = ({
  report,
  i18n,
  data,
  showDownload = true,
  handleOut,
  handleDownload
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [tabSelected, setTabSelected] = useState(0)
  const [stateLoading, setStateLoading] = useState(false)
  const reportName = `${new Date().toISOString()}_${data.general.generalData.codigo}`

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue)
    setTabSelected(newValue)
  }

  const selectHandleDownload = (): void => {
    if (handleDownload !== undefined) {
      handleDownload()
    } else {
      handleDownloadInt()
    }
  }

  const handleDownloadInt = (): void => {
    setStateLoading(true)
    const html = getReport()

    showReport(html)

    html2canvas(html).then((canvas) => {
      // eslint-disable-next-line new-cap
      return generateDownloadReport(new jsPDF('p', 'mm', 'a4'), canvas)
    })
      .then((docResult) => {
        docResult.save(`${reportName}.pdf`)
      })
      .catch(error => error)

    hiddenReport(html)
    setStateLoading(false)
  }

  const generateDownloadReport = (doc, canvas): any => {
    // Obtengo la dimensión en pixeles en base a la documentación
    const a4Size = { w: convertPointsToUnit(595.28, 'px'), h: convertPointsToUnit(841.89, 'px') }

    /* Nuevo Canvas donde generare mis imágenes separadas */
    const canvastoPrint = document.createElement('canvas')
    const ctx = canvastoPrint.getContext('2d')

    /* Medidas de mi hoja */
    canvastoPrint.width = a4Size.w
    canvastoPrint.height = a4Size.h

    /* Tomo cuanto corresponde esos los 700 pixeles restantes de el total de mi imagen */
    const aspectRatioA4 = a4Size.w / a4Size.h
    const rezised = canvas.width / aspectRatioA4

    let printed = 0; let page = 0
    while (printed < canvas.height) {
      // Tomo la imagen en proporcion a el ancho y alto.
      ctx.drawImage(canvas, 0, printed, canvas.width, rezised, 0, 0, a4Size.w, a4Size.h)
      var imgtoPdf = canvastoPrint.toDataURL('image/png')
      const width = doc.internal.pageSize.getWidth()
      const height = doc.internal.pageSize.getHeight()
      if (page === 0) { // si es la primera pagina, va directo a doc
        doc.addImage(imgtoPdf, 'JPEG', 0, 0, width, height)
      } else { // Si no ya tengo que agregar nueva hoja.
        const page = doc.addPage()
        page.addImage(imgtoPdf, 'JPEG', 0, 0, width, height)
      }
      ctx.clearRect(0, 0, canvastoPrint.width, canvastoPrint.height) // Borro el canvas
      printed += rezised // actualizo lo que ya imprimi
      page++ // actualizo mi pagina
    }
    return doc
  }

  const convertPointsToUnit = (points, unit): any => {
    // Unit table from https://github.com/MrRio/jsPDF/blob/ddbfc0f0250ca908f8061a72fa057116b7613e78/jspdf.js#L791
    var multiplier
    switch (unit) {
      case 'pt': multiplier = 1; break
      case 'mm': multiplier = 72 / 25.4; break
      case 'cm': multiplier = 72 / 2.54; break
      case 'in': multiplier = 72; break
      case 'px': multiplier = 96 / 72; break
      case 'pc': multiplier = 12; break
      case 'em': multiplier = 12; break
      case 'ex': multiplier = 6; break
      default: multiplier = 0; break
    }
    return points * multiplier
  }

  const handlePrint = (): void => {
    setStateLoading(true)
    const html = getReport()

    showReport(html)

    generatePrintReport(html)

    hiddenReport(html)
    setStateLoading(false)
  }

  const generatePrintReport = (html): void => {
    const mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150')
    mywindow.document.write('<html>')
    mywindow.document.write('<head>')
    mywindow.document.write(`<title> ${reportName} </title>`)

    const stylePrint = '<style type="text/css" media="print"> ' +
      '@page { size: A4; margin: 0;}  ' +
      '@media print { ' +
        'html { ' +
          'zoom:50%; margin-top: 0%; display: block; -webkit-print-color-adjust: exact; ' +
        '}, ' +
        '.pagebreak { page-break-before: always; } ' +
      '} ' +
    '</style>'

    mywindow.document.write(stylePrint)

    const styles = Array.from(document.head.getElementsByTagName('style'))

    styles.forEach(element => {
      mywindow.document.write('<style>')
      mywindow.document.write(element.innerHTML)
      mywindow.document.write('</style>')
    })
    mywindow.document.write('</head>')
    mywindow.document.write('<body >')
    mywindow.document.write(html.innerHTML)
    mywindow.document.write('</body></html>')

    mywindow.document.close() // necessary for IE >= 10
    mywindow.focus() // necessary for IE >= 10*/

    mywindow.print()
    mywindow.close()
  }

  const getReport = (): any => {
    return document.getElementById('print')
  }

  const showReport = (html): void => {
    html.style.display = 'block'
  }

  const hiddenReport = (html): void => {
    html.style.display = 'none'
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.divHeaderContainer}>
              <div className={classes.divHeaderFlex}>
                <span className={classes.labelHeader}>
                  {i18n['BaseReport:title']}
                </span>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className={classes.divHeaderContainer}>
              <div className={classes.divHeaderFlex}>
                <span className={classes.labelHeader}>
                  {data.empresa} - {data.codigoFiscal}
                </span>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className={classes.divFlexTabs}>
          <Tabs value={value} onChange={handleChange} aria-label='pestaña de navegacion' className={classes.radius}>
            <div className={ tabSelected === 0 ? classes.tabStyleActive : classes.tabStyleDefault}>
              <Tab
                onClick={(e) => handleChange(e, 0)}
                label={<span className={classes.customStyleOnTab}> {i18n['BaseReport:labelTab1']} </span>}
                {...a11yProps(0)}
              />
            </div>
            {(() => {
              switch (report) {
                case ReportTypes.FRANCIA:
                  return (
                    <div className={classes.tabStyleDefault}>
                    </div>
                  )
                case ReportTypes.BUREAU_MEJICO:
                  return (
                    <div className={classes.tabStyleDefault}>
                    </div>
                  )
                case ReportTypes.BADEXCUG:
                  return (
                    <div className={classes.tabStyleDefault}>
                    </div>
                  )
                case ReportTypes.PERU_EQUIFAX:
                  return (
                    <div className={classes.tabStyleDefault}>
                    </div>
                  )
                case ReportTypes.Standard:
                default:
                  return (
                    <div className={ tabSelected === 1 ? classes.tabStyleActive : classes.tabStyleDefault}>
                      <Tab
                        onClick={(e) => handleChange(e, 1)}
                        label={<span className={classes.customStyleOnTab}> {i18n['BaseReport:labelTab2']} </span>}
                        {...a11yProps(1)}
                      />
                    </div>
                  )
              }
            })()}
          </Tabs>
        </div>

        <div id="print" style={{ display: 'none' }}>
          <div className={classes.divTitlePrint}>
            <span className={classes.labelTitlePrint}>
              {i18n['BaseReport:labelTab1']}
            </span>
          </div>
          <div>
            <GeneralInformation
              report={report}
              i18n={i18n}
              data={data.general}
            />
          </div>
          {(() => {
            switch (report) {
              case ReportTypes.BADEXCUG:
                return (
                  <></>
                )
              case ReportTypes.Standard:
                return (
                  <></>
                )
              default:
                return (
                  <>
                    <div className={classes.pagebreak}> </div>
                    <div className={classes.divTitlePrint}>
                      <span className={classes.labelTitlePrint}>
                        {i18n['BaseReport:labelTab1']}
                      </span>
                    </div>
                    <div>
                      <BalanceInformation
                        report={report}
                        i18n={i18n}
                        data={data.balance}
                      />
                    </div>
                  </>
                )
            }
          })()}
        </div>

        <TabPanel value={value} index={0}>
          <GeneralInformation
            report={report}
            i18n={i18n}
            data={data.general}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BalanceInformation
            report={report}
            i18n={i18n}
            data={data.balance}
          />
        </TabPanel>
      </div>
      <div className={classes.divFlexButton}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {[
            {
              label: i18n['BaseReport:buttonOut'],
              click: handleOut,
              align: classes.buttonMiddle,
              show: true,
              hasIcon: false
            },
            {
              label: i18n['BaseReport:buttonPrint'],
              click: handlePrint,
              align: classes.buttonMiddle,
              hasIcon: true,
              show: true,
              icon: <PrintIcon />
            },
            {
              label: i18n['BaseReport:buttonDownload'],
              click: selectHandleDownload,
              align: classes.buttonMiddle,
              hasIcon: true,
              show: showDownload,
              icon: <CloudDownloadIcon />
            }
          ].map(({ label, click, align, hasIcon, icon, show }, index) => (
            <>
              {show
                ? (
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}
                    key={index}>
                    <div className={align}>
                      { hasIcon
                        ? (
                          <Button
                            onClick={click}
                            className={classes.button}
                            startIcon={icon}
                          >
                            {label}
                          </Button>
                        )
                        : (<Button
                          onClick={click}
                          className={classes.button}
                        >
                          {label}
                        </Button>)
                      }

                    </div>
                  </Grid>
                )
                : (<></>)
              }
            </>
          ))}
        </Grid>
      </div>
      <Dialog
        open={stateLoading}
        disableBackdropClick={true}
        PaperProps ={{
          classes: {
            root: classes.dialog
          }
        }}
      >
        <DialogContent>
          <CircularProgress
            className={classes.spiner}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export { BaseReport }
export type { IBaseReport }
