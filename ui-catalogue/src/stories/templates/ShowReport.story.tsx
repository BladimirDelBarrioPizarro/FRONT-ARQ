/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ShowReport } from '../../components/templates/ShowReport/ShowReport'
import i18nObj from '../i18n.json'

const ShowReportStory: React.FC = () => {
  const data = {
    payload: [
      {
        informeCreica: {
          remitente: 'EXPERIAN ESP',
          fechamensaje: 20210225,
          tipdoc: '10',
          numpeticion: 28000323,
          fec: 20210225,
          fecenvio: 20210225,
          identificacion: {
            deudor: {
              iden: {
                tipiden: 'VAT',
                codiden: 'A28017895'
              }
            }
          },
          moneda: 'EUR',
          protestosdemandasimpagos: {
            protestodemandaimpago: {
              tipincidencia: 'INFORMACION RAI',
              fecincidencia: 0,
              numincidencias: '0',
              impincidencias: 0
            }
          },
          datoshost: {
            codcorresponsal: 11679,
            codproducto: '22',
            codempresa: 28000323,
            tipocorresponsal: '2',
            tipodocumento: '10',
            numinforme: 'P',
            nummovimient: '0',
            origen: '1',
            indinformeref: '1',
            tipfichero: 'IRQ',
            indultinforme: 'SI'
          }
        },
        informeExterno: null,
        informeCesceDgx: null
      }
    ],
    codigo: 200,
    mensaje: 'OK',
    tipo: 'OK',
    totalPaginas: null,
    totalRegistros: null,
    paginaActual: null
  }

  return (
    <ShowReport
      data={data}
      i18n={i18nObj}
    ></ShowReport>
  )
}

export { ShowReportStory }

storiesOf('Components|Templates.ShowReport', module)
  .addDecorator(withThemeProvider)
  .add('ShowReport', () => <ShowReportStory />)
