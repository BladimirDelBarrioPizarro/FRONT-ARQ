import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { config, lang, log, call, endpoints } from '@cesce/arq'
import { ThemeCatalogueProvider } from '@cesce/ui-catalogue'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { Dashboard } from './pages/Dashboard'
import { MetaBaseReport } from './features/MetaBaseReport/MetaBaseReport'

console.log('APIS DISPONIBLES')

console.log('config -> ', config)
console.log('lang ->', lang)
console.log('log ->', log)
console.log('call ->', call.api)
console.log('endpoints -> ', endpoints)

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError (error): any {
    // Update state so the next render will show the fallback UI.
    console.log(error) // eslint-disable-line
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo): void{
    // You can also log the error to an error reporting service
    console.log(error) // eslint-disable-line
    console.log(errorInfo) // eslint-disable-line
  }

  render (): any {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

const generateClassName = createGenerateClassName({
  seed: 'cesdata-app',
  productionPrefix: 'cesdata-app'
})

// TODO: Solucionar Links acorde al menu legacy CESDATA
// TODO: Solucionar navegación entre componentes y ruteos
const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeCatalogueProvider>
          <Router>
            <Switch>
              <Route exact path="/basereport/:informe" component={MetaBaseReport}/>
              <Route name="experian" path="/basereport/:informe/:radio" component={MetaBaseReport}/>
              <Route path="/" component={Dashboard}/>
            </Switch>
          </Router>
        </ThemeCatalogueProvider>
      </StylesProvider>
    </ErrorBoundary>
  )
}

export { App }
