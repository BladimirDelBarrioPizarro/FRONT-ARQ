import React from 'react'
import { render } from '@testing-library/react'

import { TabPanel } from './TabPanel'

test('Render test', () => {
  const wrapper = render(<TabPanel value={3} index={3} />)

  expect(wrapper).not.toBe(null)
})
