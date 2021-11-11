import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './ThemeCESCE'

const ThemeCatalogueProvider: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {children}
      </CssBaseline>
    </ThemeProvider>
  )
}

export default ThemeCatalogueProvider
