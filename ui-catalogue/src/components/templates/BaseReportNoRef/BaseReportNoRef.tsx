import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import {
  Grid,
  Dialog,
  DialogContent,
  CircularProgress
} from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { TabPanel } from '../../organisms/TabPanel/TabPanel'
import { IBaseReportNoRef } from './types'
import { GeneralInformationNoRef } from '../../organisms/GeneralInformationNoRef/GeneralInformationNoRef'

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
    backgroundColor: theme.palette.background.paper
  },
  container: {
    width: '100%',
    padding: '36px 48px 42px',
    backgroundColor: '#f9f9f9'
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

const BaseReportNoRef: React.FC<IBaseReportNoRef> = ({
  i18n,
  data,
  report,
  showDownload,
  handleAlta,
  handleRecepcion,
  handleCancel
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [tabSelected, setTabSelected] = useState(0)
  // const [stateLoading, setStateLoading] = useState(false)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue)
    setTabSelected(newValue)
  }

  return (
    <div>
      <div>
        <div className={classes.root}>
          <div className={classes.divFlexTabs}>
            <AppBar position='static' className={classes.radius}>
              <Tabs value={value} onChange={handleChange} aria-label='pestaña de navegacion' className={classes.radius}>
                <div className={ tabSelected === 0 ? classes.tabStyleActive : classes.tabStyleDefault}>
                  <Tab
                    onClick={(e) => handleChange(e, 0)}
                    label={<span className={classes.customStyleOnTab}> {i18n['BaseReport:labelTab1']} </span>}
                    {...a11yProps(0)}
                  />
                </div>
              </Tabs>
            </AppBar>
          </div>

          <div id="print" style={{ display: 'none' }}>
            <div className={classes.divTitlePrint}>
              <span className={classes.labelTitlePrint}>
                {i18n['BaseReport:labelTab1']}
              </span>
            </div>
            <div>
            </div>
            <div className={classes.pagebreak}> </div>
            <div className={classes.divTitlePrint}>
              <span className={classes.labelTitlePrint}>
                {i18n['BaseReport:labelTab1']}
              </span>
            </div>
            <div>
            </div>
          </div>
          <TabPanel value={value} index={0}>
            <GeneralInformationNoRef
              report={report}
              i18n={i18n}
              data={data.general}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
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
                label: i18n['ReportReferencesIdentificacion:buttonAlta'],
                click: handleAlta,
                align: classes.buttonMiddle
              },
              {
                label: i18n['ReportReferencesIdentificacion:buttonRecepcion'],
                click: handleRecepcion,
                align: classes.buttonMiddle
              },
              {
                label: i18n['ReportReferencesIdentificacion:buttonEliminar'],
                click: handleCancel,
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
        </div>
      </div>

      <Dialog
        open={false}
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
    </div>
  )
}

export { BaseReportNoRef }
export type { IBaseReportNoRef }
