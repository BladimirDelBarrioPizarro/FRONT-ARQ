import React from 'react'
import { render } from '@testing-library/react'

import { InfoModal } from './InfoModal'

test('Test de renderizado', () => {
  const handleClose = jest.fn()
  const renderizado = render(
    <InfoModal open={true} handleClose={handleClose} title={'titulo'}>
      <span>children</span>
    </InfoModal>
  )
  expect(renderizado).not.toBe(null)
})
