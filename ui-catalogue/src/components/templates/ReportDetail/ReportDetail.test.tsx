import React from 'react'
import { render } from '@testing-library/react'
import { ReportDetail } from './ReportDetail'

const i18n = {
  header: 'Datos Generales / Comparex',
  typo1rd: 'Detalles del informe'
}

test('Render Test all data', () => {
  const report = [
    {
      header: 'Identificacion',
      data: [
        {
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
      ]
    },
    {
      header: 'Datos Generales / Comparex',
      data: [
        {
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
      ]
    }
  ]

  const wrapper = render(<ReportDetail i18n={i18n} report={report} />)
  expect(wrapper).not.toBe(null)
}
)

test('Render Test without data', () => {
  const report = []
  const wrapper = render(<ReportDetail report={report} i18n={i18n} />)
  expect(wrapper).not.toBe(null)
}
)
