import * as React from 'react'
import { storiesOf } from '@storybook/react'

import withThemeProvider from '../../ui/theme/ThemeDecorator'

import { ReportDetail } from '../../components/templates/ReportDetail/ReportDetail'

const ReportDetailStory: React.FC = () => {
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
        },
        {
          subheader: 'Resumen',
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
  const i18n = {
    header: 'Datos Generales / Comparex',
    typo1rd: 'Detalles del informe'
  }
  return <ReportDetail i18n={i18n} report={report} />
}

export { ReportDetailStory }

storiesOf('Components|Templates.ReportDetail', module)
  .addDecorator(withThemeProvider)
  .add('ReportDetail', () => <ReportDetailStory />)
