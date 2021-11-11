import React from 'react'
import { render } from '@testing-library/react'

import { SubAcordeon } from './SubAcordeon'

test('Test de renderizado acordeon compuesto', () => {
  const subAcordeon = {
    subheader: 'Identificacion/Localizacion',
    data: [
      {
        name: 'Razon Social',
        value: 1
      },
      {
        name: 'Domicilio',
        value: 1
      }
    ]
  }

  const wrapper = render(<SubAcordeon subAcordeon={subAcordeon} />)
  expect(wrapper).not.toBe(null)
}
)
