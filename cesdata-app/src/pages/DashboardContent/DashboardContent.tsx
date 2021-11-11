import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { config, lang, log, call } from '@cesce/arq'
import { MetaReportReferences } from '../../features/MetaReportReferences/MetaReportsReferences'
import { MetaCopyFileProcess } from '../../features/MetaCopyFileProcess/MetaCopyFileProcess'
import { MetaConsultReports } from '../../features/MetaConsultReports/MetaConsultReports'
import { MetaFilesTableFTP } from '../../features/MetaFilesTableFTP/MetaFilesTableFTP'
import { MetaRequestList } from '../../features/MetaRequestList/MetaRequestList'
import { MetaMasiveGestion } from '../../features/MetaMasiveGestion/MetaMasiveGestion'
import { MetaCreateReports } from '../../features/MetaCreateReports/MetaCreateReports'
import { IDashboardContent } from './types'
import { makeStyles } from '@material-ui/core/styles'
console.log('APIS DISPONIBLES')

console.log('config -> ', config)
console.log('lang ->', lang)
console.log('log ->', log)
console.log('call ->', call.api)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    margin: '2rem 38px',
    minWidth: '70vw',
    minHeight: '70vh',
    width: '100%'
  },
  borders: {
    borderRadius: '4.6px'
  }
}))

const DashboardContent: React.FC<IDashboardContent> = ({
  i18n,
  page
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/consult">
          <div className={classes.container}>
            <MetaConsultReports/>
          </div>
        </Route>
        <Route path="/references">
          <div className={classes.container}>
            <MetaReportReferences/>
          </div>
        </Route>
        <Route path="/boen">
          <div className={classes.container}>
            <MetaCreateReports/>
          </div>
        </Route>
        <Route path="/simulation">
          <div className={classes.container}>
            <MetaCopyFileProcess/>
          </div>
        </Route>
        <Route path="/ftp">
          <div className={classes.container}>
            <MetaFilesTableFTP/>
          </div>
        </Route>
        <Route path="/petitions">
          <div className={classes.container}>
            <MetaRequestList/>
          </div>
        </Route>
        <Route path="/masive">
          <div className={classes.container}>
            <MetaMasiveGestion/>
          </div>
        </Route>
        <Route path="/">
          <div className={classes.container}>
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export { DashboardContent }

export type { IDashboardContent }
