import React from 'react'
import { IOperationCodeBadexcug } from './types'
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

const OperationCodeBadexcug: React.FC<IOperationCodeBadexcug> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <>
      {data.map((elements, index) => (
        <>
          <div className={classes.divHeaderContainer}>
            <div className={classes.divHeaderFlex}>
              <span className={classes.labelHeader}>
                {i18n['OperationCodeBadexcug:title']}: {elements.codigoOperacion}
              </span>
            </div>
          </div>
          <div className={classes.divContainer}>
            {[
              {
                type: 'text',
                name: 'identificadorPersona' + index,
                label: i18n['OperationCodeBadexcug:identificadorPersona'],
                value: elements.identificadorPersona
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
                name: 'fechaAlta' + index,
                label: i18n['OperationCodeBadexcug:fechaAlta'],
                value: elements.fechaAlta,
                typeBis: 'text',
                nameBis: 'entidadCedente' + index,
                labelBis: i18n['OperationCodeBadexcug:entidadCedente'],
                valueBis: elements.entidadCedente
              },
              {
                type: 'text',
                name: 'producto' + index,
                label: i18n['OperationCodeBadexcug:producto'],
                value: elements.producto,
                typeBis: 'text',
                nameBis: 'naturaleza' + index,
                labelBis: i18n['OperationCodeBadexcug:naturaleza'],
                valueBis: elements.naturaleza
              },
              {
                type: 'text',
                name: 'situacion' + index,
                label: i18n['OperationCodeBadexcug:situacion'],
                value: elements.situacion,
                typeBis: 'text',
                nameBis: 'fechaInicio' + index,
                labelBis: i18n['OperationCodeBadexcug:fechaInicio'],
                valueBis: elements.fechaInicio
              },
              {
                type: 'text',
                name: 'fechaFinal' + index,
                label: i18n['OperationCodeBadexcug:fechaFinal'],
                value: elements.fechaFinal,
                typeBis: 'text',
                nameBis: 'numeroCuotas' + index,
                labelBis: i18n['OperationCodeBadexcug:numeroCuotas'],
                valueBis: elements.numeroCuotas
              },
              {
                type: 'text',
                name: 'importeCuotas' + index,
                label: i18n['OperationCodeBadexcug:importeCuotas'],
                value: elements.importeCuotas,
                typeBis: 'text',
                nameBis: 'importePendiente' + index,
                labelBis: i18n['OperationCodeBadexcug:importePendiente'],
                valueBis: elements.importePendiente
              },
              {
                type: 'text',
                name: 'importeImpagado' + index,
                label: i18n['OperationCodeBadexcug:importeImpagado'],
                value: elements.importeImpagado,
                typeBis: 'text',
                nameBis: 'numCuotasImpagadas' + index,
                labelBis: i18n['OperationCodeBadexcug:numCuotasImpagadas'],
                valueBis: elements.numCuotasImpagadas
              },
              {
                type: 'text',
                name: 'fechaPrimerVencimiento' + index,
                label: i18n['OperationCodeBadexcug:fechaPrimerVencimiento'],
                value: elements.fechaPrimerVencimiento,
                typeBis: 'text',
                nameBis: 'fechaUltimoVencimiento' + index,
                labelBis: i18n['OperationCodeBadexcug:fechaUltimoVencimiento'],
                valueBis: elements.fechaUltimoVencimiento
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
            {[
              {
                type: 'text',
                name: 'informacionAdicional' + index,
                label: i18n['OperationCodeBadexcug:informacionAdicional'],
                value: elements.informacionAdicional
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
          </div>
        </>
      ))}
    </>
  )
}

export { OperationCodeBadexcug }
