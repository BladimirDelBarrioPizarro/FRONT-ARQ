import React, { useEffect, useState } from 'react'
import { token } from '@cesce/arq'
import { makeStyles } from '@material-ui/core/styles'
import { IDashboardMenu } from './types'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  child: {
    display: 'table-cell',
    padding: '0 15px',
    fontFamily: 'NeverMind',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b66',
    textDecoration: 'none',
    margin: '0 5px',
    maxWith: '2em',
    cursor: 'default',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#2E9AFE30'
    }
  },
  selected: {
    display: 'table-cell',
    padding: '0 15px',
    backgroundColor: '#FE9A2E30',
    fontFamily: 'NeverMind',
    fontSize: '15px',
    margin: '0 5px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b66',
    textDecoration: 'none',
    maxWith: '2em',
    cursor: 'default'
  },
  separation: {
    width: '1px',
    backgroundColor: 'lightgrey',
    height: '100%',
    float: 'left'
  },
  box: {
    maxWidth: '15em',
    display: 'flex'
  }
}))

const DashboardMenu: React.FC<IDashboardMenu> = ({
  i18n,
  handleSetPage
}) => {
  const classes = useStyles()
  const [actualPath, setActualPath] = useState(window.location.pathname)
  const pathname = window.location.pathname

  const parseJwt = (token): any => {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(jsonPayload)
  }

  useEffect(() => {
    setActualPath(pathname)
  }, [pathname])

  const { authorities } = parseJwt(token)

  let CONSULTREPORT = false
  let REPORTREFERENCES = false
  let BOEN = false
  let MASIVEGESTION = false
  let COPYFILEPROCESS = false
  let FILESTABLEFTP = false
  let REQUESTLIST = false

  authorities.map(item => {
    if (item === '525')CONSULTREPORT = true
    if (item === '524')REPORTREFERENCES = true
    if (item === '510')BOEN = true
    if (item === '511')BOEN = true
    if (item === '520')MASIVEGESTION = true
    if (item === '19')COPYFILEPROCESS = true
    if (item === '186')FILESTABLEFTP = true
    if (item === '213')REQUESTLIST = true
  })

  const printMenu = (label, path, access): any => {
    if (path === actualPath) return <div className={classes.box} >{path !== '/consult' && <div className={classes.separation}/>}<Link className={classes.selected} to={path}> <p style={{ paddingTop: '0px' }} >{label}</p> </Link></div>
    if (access) return <div className={classes.box} >{path !== '/consult' && <div className={classes.separation}/>}<Link className={classes.child} to={path}> <p style={{ paddingTop: '0px' }} >{label}</p> </Link></div>
  }

  return (
    <div className={classes.root}>
      {printMenu(i18n['DashboardMenu:labelMenuConsultaInformes'], '/consult', CONSULTREPORT)}
      {printMenu(i18n['DashboardMenu:labelMenuReferenciacion'], '/references', REPORTREFERENCES)}
      {printMenu(i18n['DashboardMenu:labelMenuBOEN'], '/boen', BOEN)}
      {printMenu(i18n['DashboardMenu:labelMenuGestionMasiva'], '/masive', MASIVEGESTION)}
      {printMenu(i18n['DashboardMenu:labelMenuCopia'], '/simulation', COPYFILEPROCESS)}
      {printMenu(i18n['DashboardMenu:labelMenuFTP'], '/ftp', FILESTABLEFTP)}
      {printMenu(i18n['DashboardMenu:labelMenuPeticiones'], '/petitions', REQUESTLIST)}
    </div>
  )
}

export { DashboardMenu }

export type { IDashboardMenu }
