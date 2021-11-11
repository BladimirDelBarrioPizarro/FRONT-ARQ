import React from 'react'
import { INonPaymentAsnef } from './types'
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
    fontWeight: 'bold',
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

const NonPaymentAsnef: React.FC<INonPaymentAsnef> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['NonPaymentAsnef:title']}
          </span>
        </div>
      </div>
      <div className={classes.divContainer}>
        {[
          {
            type: 'text',
            name: 'nombrerazonsocial',
            label: i18n['NonPaymentAsnef:nombrerazonsocial'],
            value: data.nombrerazonsocial
          },
          {
            type: 'text',
            name: 'identificadorpersona',
            label: i18n['NonPaymentAsnef:identificadorpersona'],
            value: data.identificadorpersona
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
            name: 'fechaalta',
            label: i18n['NonPaymentAsnef:fechaalta'],
            value: data.fechaalta,
            typeBis: 'text',
            nameBis: 'fechaultimaact',
            labelBis: i18n['NonPaymentAsnef:fechaultimaact'],
            valueBis: data.fechaultimaact
          },
          {
            type: 'text',
            name: 'fechaultimaconsulta',
            label: i18n['NonPaymentAsnef:fechaultimaconsulta'],
            value: data.fechaultimaconsulta,
            typeBis: 'text',
            nameBis: 'entidadultconsulta',
            labelBis: i18n['NonPaymentAsnef:entidadultconsulta'],
            valueBis: data.entidadultconsulta
          },
          {
            type: 'text',
            name: 'numerooperaciones',
            label: i18n['NonPaymentAsnef:numerooperaciones'],
            value: data.numerooperaciones,
            typeBis: 'text',
            nameBis: 'importeoperaciones',
            labelBis: i18n['NonPaymentAsnef:importeoperaciones'],
            valueBis: data.importeoperaciones
          },
          {
            type: 'text',
            name: 'importemensualcuotas',
            label: i18n['NonPaymentAsnef:importemensualcuotas'],
            value: data.importemensualcuotas,
            typeBis: 'text',
            nameBis: 'importependiente',
            labelBis: i18n['NonPaymentAsnef:importependiente'],
            valueBis: data.importependiente
          },
          {
            type: 'text',
            name: 'importepagado',
            label: i18n['NonPaymentAsnef:importepagado'],
            value: data.importepagado,
            typeBis: 'text',
            nameBis: 'numoperacionesincidencias',
            labelBis: i18n['NonPaymentAsnef:numoperacionesincidencias'],
            valueBis: data.numoperacionesincidencias
          },
          {
            type: 'text',
            name: 'numcuotasimpagadas',
            label: i18n['NonPaymentAsnef:numcuotasimpagadas'],
            value: data.numcuotasimpagadas,
            typeBis: 'text',
            nameBis: 'importeimpagado',
            labelBis: i18n['NonPaymentAsnef:importeimpagado'],
            valueBis: data.importeimpagado
          },
          {
            type: 'text',
            name: 'peorsituacion',
            label: i18n['NonPaymentAsnef:peorsituacion'],
            value: data.peorsituacion,
            typeBis: 'text',
            nameBis: 'fechapeorsituacion',
            labelBis: i18n['NonPaymentAsnef:fechapeorsituacion'],
            valueBis: data.fechapeorsituacion
          },
          {
            type: 'text',
            name: 'importemaximopagado',
            label: i18n['NonPaymentAsnef:importemaximopagado'],
            value: data.importemaximopagado,
            typeBis: 'text',
            nameBis: 'fechaimpmaximopagado',
            labelBis: i18n['NonPaymentAsnef:fechaimpmaximopagado'],
            valueBis: data.fechaimpmaximopagado
          },
          {
            type: 'text',
            name: 'codigooperacion',
            label: i18n['NonPaymentAsnef:codigooperacion'],
            value: data.codigooperacion,
            typeBis: 'text',
            nameBis: 'identificacionpersona',
            labelBis: i18n['NonPaymentAsnef:identificacionpersona'],
            valueBis: data.identificacionpersona
          },
          {
            type: 'text',
            name: 'entidadcedente',
            label: i18n['NonPaymentAsnef:entidadcedente'],
            value: data.entidadcedente,
            typeBis: 'text',
            nameBis: 'producto',
            labelBis: i18n['NonPaymentAsnef:producto'],
            valueBis: data.producto
          },
          {
            type: 'text',
            name: 'naturaleza',
            label: i18n['NonPaymentAsnef:naturaleza'],
            value: data.naturaleza,
            typeBis: 'text',
            nameBis: 'situacion',
            labelBis: i18n['NonPaymentAsnef:situacion'],
            valueBis: data.situacion
          },
          {
            type: 'text',
            name: 'importeimapgado',
            label: i18n['NonPaymentAsnef:importeimapgado'],
            value: data.importeimapgado,
            typeBis: 'text',
            nameBis: 'fechainicio',
            labelBis: i18n['NonPaymentAsnef:fechainicio'],
            valueBis: data.fechainicio
          },
          {
            type: 'text',
            name: 'fechafinal',
            label: i18n['NonPaymentAsnef:fechafinal'],
            value: data.fechafinal,
            typeBis: 'text',
            nameBis: 'numcuotas',
            labelBis: i18n['NonPaymentAsnef:numcuotas'],
            valueBis: data.numcuotas
          },
          {
            type: 'text',
            name: 'importecuotas',
            label: i18n['NonPaymentAsnef:importecuotas'],
            value: data.importecuotas,
            typeBis: 'text',
            nameBis: 'fechaprimervencimiento',
            labelBis: i18n['NonPaymentAsnef:fechaprimervencimiento'],
            valueBis: data.fechaprimervencimiento
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

export { NonPaymentAsnef }
