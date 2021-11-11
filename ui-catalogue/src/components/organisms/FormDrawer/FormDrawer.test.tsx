import React from 'react'
import { render } from '@testing-library/react'

import { FormDrawer } from './FormDrawer'

test('Test de renderizado', () => {
  const toogleDrawer = jest.fn()
  const renderizado = render(
    <FormDrawer
      open={true}
      toggleDrawer={toogleDrawer}
    >
      <div>children</div>
    </FormDrawer>
  )
  expect(renderizado).not.toBe(null)
})
