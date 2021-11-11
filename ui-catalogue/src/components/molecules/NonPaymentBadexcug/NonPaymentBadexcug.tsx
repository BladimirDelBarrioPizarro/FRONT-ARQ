import React from 'react'
import { INonPaymentBadexcug } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import {
  ElementInput
} from '../../atoms'

const useStyles = makeStyles({
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  },
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  }
})

const NonPaymentBadexcug: React.FC<INonPaymentBadexcug> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['NonPaymentBadexcug:title']}
          </span>
        </div>
      </div>
      <div className={classes.divContainer}>
        {[
          {
            type: 'text',
            name: 'nombreRazonSocial',
            label: i18n['NonPaymentBadexcug:nombreRazonSocial'],
            value: data.nombreRazonSocial
          },
          {
            type: 'text',
            name: 'identificadorPersona',
            label: i18n['NonPaymentBadexcug:identificadorPersona'],
            value: data.identificadorPersona
          }
        ].map(({ type, name, label, value }, index) => (
          <div className={classes.divFlex} key={index}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <ElementInput
                type={type}
                name={name}
                label={label}
                value={value}
                size='l'
              />
            </Grid>
          </div>
        ))}

        {[
          {
            type: 'text',
            name: 'fechaAlta',
            label: i18n['NonPaymentBadexcug:fechaAlta'],
            value: data.fechaAlta,
            typeBis: 'text',
            nameBis: 'fechaUltimaAct',
            labelBis: i18n['NonPaymentBadexcug:fechaUltimaAct'],
            valueBis: data.fechaUltimaAct
          },
          {
            type: 'text',
            name: 'fechaUltimaConsulta',
            label: i18n['NonPaymentBadexcug:fechaUltimaConsulta'],
            value: data.fechaUltimaConsulta,
            typeBis: 'text',
            nameBis: 'entidadUltConsulta',
            labelBis: i18n['NonPaymentBadexcug:entidadUltConsulta'],
            valueBis: data.entidadUltConsulta
          },
          {
            type: 'text',
            name: 'numeroOperaciones',
            label: i18n['NonPaymentBadexcug:numeroOperaciones'],
            value: data.numeroOperaciones,
            typeBis: 'text',
            nameBis: 'importeOperaciones',
            labelBis: i18n['NonPaymentBadexcug:importeOperaciones'],
            valueBis: data.importeOperaciones
          },
          {
            type: 'text',
            name: 'operIncidencias',
            label: i18n['NonPaymentBadexcug:operIncidencias'],
            value: data.operIncidencias,
            typeBis: 'text',
            nameBis: 'cuotasImpagadas',
            labelBis: i18n['NonPaymentBadexcug:cuotasImpagadas'],
            valueBis: data.cuotasImpagadas
          },
          {
            type: 'text',
            name: 'importeImpagado',
            label: i18n['NonPaymentBadexcug:importeImpagado'],
            value: data.importeImpagado,
            typeBis: 'text',
            nameBis: 'peorSituacion',
            labelBis: i18n['NonPaymentBadexcug:peorSituacion'],
            valueBis: data.peorSituacion
          },
          {
            type: 'text',
            name: 'fechaPeorSituacion',
            label: i18n['NonPaymentBadexcug:fechaPeorSituacion'],
            value: data.fechaPeorSituacion,
            typeBis: 'text',
            nameBis: 'importeAnotacionMax',
            labelBis: i18n['NonPaymentBadexcug:importeAnotacionMax'],
            valueBis: data.importeAnotacionMax
          },
          {
            type: 'text',
            name: 'fechaAnotacionMax',
            label: i18n['NonPaymentBadexcug:fechaAnotacionMax'],
            value: data.fechaAnotacionMax,
            typeBis: '',
            nameBis: '',
            labelBis: '',
            valueBis: ''
          }
        ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis }, index) => (
          <div className={classes.divFlex} key={index}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <ElementInput
                type={type}
                name={name}
                label={label}
                value={value}
                size='m'
              />
              {typeBis !== ''
                ? <ElementInput
                  type={typeBis}
                  name={nameBis}
                  label={labelBis}
                  value={valueBis}
                  size='m'
                />
                : <></>
              }
            </Grid>
          </div>
        ))}
      </div>
    </>
  )
}

export { NonPaymentBadexcug }
