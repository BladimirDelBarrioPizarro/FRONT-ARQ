import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { select } from '@storybook/addon-knobs'
import theme from './ThemeCESCE'

const themes = { Default: theme }
const themeNames = Object.keys(themes)

const ThemeKnob: React.FunctionComponent = ({ children }) => {
  const theme = select(
    'Theme',
    themeNames,
    themeNames[0],
    'Themes'
  )

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeKnob
