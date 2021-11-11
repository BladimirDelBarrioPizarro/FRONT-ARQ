import React from 'react'
import ReactDOM from 'react-dom'

import Theme from './ui/theme/ThemeProvider'

ReactDOM.render(
  <Theme>
    <span>Isolated!!!</span>
  </Theme>
  , document.getElementById('root')
)
