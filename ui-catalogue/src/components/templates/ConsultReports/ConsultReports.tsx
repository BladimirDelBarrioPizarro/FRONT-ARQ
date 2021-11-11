import React, { useState } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { AdvancedInformationSearch } from '../../organisms/AdvancedInformationSearch/AdvancedInformationSearch'
import { ExperianR } from '../../organisms/ExperianR/ExperianR'
import { TabPanel } from '../../organisms/TabPanel/TabPanel'
import { IConsultsReports } from './types'

function a11yProps (index: number): any {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  divContainer: {
    width: '100%',
    Height: '100%'
  },
  root: {
    flexGrow: 1
  },
  divHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: '#003b64',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMindBold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divTabPanels: {
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
  divFlexTabs: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  },
  radius: {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    width: '100%'
  },
  customStyleOnTab: {
    fontWeight: 'bold'
  },
  tab: {
    '& .MuiBox-root': {
      padding: '0px'
    }
  }
}))

const ConsultReports: React.FC<IConsultsReports> = ({
  i18n,
  experianR,
  advancedInformationSearch,
  handleOpenBaseReport,
  cleanConsultReport
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [tabSelected, setTabSelected] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    event.preventDefault()
    setValue(newValue)
    setTabSelected(newValue)
    cleanConsultReport()
  }

  advancedInformationSearch.reportTableProps.handleRowClick = (rowData) => {
    handleOpenBaseReport(rowData)
  }

  return (
    <div className={classes.divContainer}>
      <div className={classes.divHeader}>
        {i18n['ConsultReports:title']}
      </div>
      <div className={classes.divFlex}>
        <div className={classes.root}>
          <div className={classes.divFlexTabs}>
            <Tabs value={value} onChange={handleChange} aria-label='pestaña de navegacion' className={classes.radius}>
              <div className={ tabSelected === 0 ? classes.tabStyleActive : classes.tabStyleDefault}>
                <Tab
                  onClick={(e) => handleChange(e, 0)}
                  label={<span className={classes.customStyleOnTab}> {i18n['ConsultReports:label1']} </span>}
                  {...a11yProps(0)}
                />
              </div>
              <div className={ tabSelected === 1 ? classes.tabStyleActive : classes.tabStyleDefault}>
                <Tab
                  onClick={(e) => handleChange(e, 1)}
                  label={<span className={classes.customStyleOnTab}> {i18n['ConsultReports:label2']} </span>}
                  {...a11yProps(1)}
                />
              </div>
            </Tabs>
          </div>
          <div className={classes.divTabPanels}>
            <TabPanel value={value} index={0}>
              <AdvancedInformationSearch
                country={advancedInformationSearch.country}
                i18n={advancedInformationSearch.i18n}
                findLast={advancedInformationSearch.findLast}
                findAll={advancedInformationSearch.findAll}
                findLoading={advancedInformationSearch.findLoading}
                findError={advancedInformationSearch.findError}
                findCompany={advancedInformationSearch.findCompany}
                findCompanyError={advancedInformationSearch.findCompanyError}
                findCompanyLoading={advancedInformationSearch.findCompanyLoading}
                reportTableProps={advancedInformationSearch.reportTableProps}
                tableBusinessProps={advancedInformationSearch.tableBusinessProps}
                drawerBusinessCodeProps={advancedInformationSearch.drawerBusinessCodeProps}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ExperianR
                i18n={experianR.i18n}
                handleSearchExperian={experianR.handleSearchExperian}
              />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ConsultReports }
export type { IConsultsReports }
