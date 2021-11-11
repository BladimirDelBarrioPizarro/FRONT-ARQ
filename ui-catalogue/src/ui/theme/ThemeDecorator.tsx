
import * as React from 'react'
import ThemeProvider from './ThemeProvider'

export default function withThemeProvider (story): React.ReactElement {
  return (
    <ThemeProvider>{story()}</ThemeProvider>
  )
}
