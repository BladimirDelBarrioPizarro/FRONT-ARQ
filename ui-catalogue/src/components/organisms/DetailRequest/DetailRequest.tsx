import React from 'react'
import {
  makeStyles,
  Grid
} from '@material-ui/core'
import { IDetailRequestList } from './types'
import {
  ElementShow
} from '../../atoms'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    width: '60vw'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginBottom: '0.5rem'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2.6rem'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    width: '100%',
    marginTop: '20px',
    marginLeft: '30px'
  },
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  labelStyle: {
    width: '7em',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  fieldStyle: {
    width: '10em',
    height: '2em',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderColor: '#ff9900'
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
    marginBottom: '1rem'
  }
})

const DetailRequest: React.FC<IDetailRequestList> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <Grid item xs={12}>
                {i18n['DetailRequest:detailTbTitle']} <b>{data.nombreSujeto}</b>
              </Grid>
            </Grid>

          </span>
        </div>
      </div>

      <div className={classes.divContainer}>
        {[
          {
            label: i18n['DetailRequest:detailTbSubject'],
            value: data.nombreSujeto
          },
          {
            label: i18n['DetailRequest:detailTbCorresponsal'],
            value: data.nombreCorresponsal
          },
          {
            label: i18n['DetailRequest:detailTbComercial'],
            value: data.nombreComercial
          },
          {
            label: i18n['DetailRequest:detailTbFiscal'],
            value: data.codFiscal
          }
        ].map(({ label, value }, index) => (
          <div className={classes.divFlex} key={index}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <ElementShow
                label={label}
                value={value}
                middle= {false}
              />
            </Grid>
          </div>
        ))}

        <div className={classes.divFlex}>
          <ElementShow
            label={i18n['DetailRequest:detailTbSector']}
            value={data.codSector}
            middle= {true}
          />
          <ElementShow
            label={i18n['DetailRequest:detailTbProduct']}
            value={data.codProducto}
            middle= {true}
          />
        </div>
        <div className={classes.divFlex}>
          <ElementShow
            label={i18n['DetailRequest:detailTbMotive']}
            value={data.motivoPeticion}
            middle= {false}
          />
        </div>
        <div className={classes.divFlex}>
          <ElementShow
            label={i18n['DetailRequest:detailTbNotes']}
            value={data.notasEnvio}
            middle= {true}
          />
          <ElementShow
            label={i18n['DetailRequest:detailTbSituation']}
            value={data.situacionPeticion}
            middle= {true}
          />
        </div>
        <div className={classes.divFlex}>
          <ElementShow
            label={i18n['DetailRequest:detailTbAddress']}
            value={data.domicilio}
            middle= {false}
          />
        </div>

        {[
          {
            label: i18n['DetailRequest:detailTbPhone'],
            value: data.numeroTelefono,
            labelBis: i18n['DetailRequest:detailTbFax'],
            valueBis: data.numeroFax
          },
          {
            label: i18n['DetailRequest:detailTbAnula'],
            value: data.fechaNotaAnulacion,
            labelBis: i18n['DetailRequest:detailTbCancel'],
            valueBis: data.fechaCancelacion
          },
          {
            label: i18n['DetailRequest:detailTbSended'],
            value: data.fechaEnvioPeticion,
            labelBis: i18n['DetailRequest:detailTbArrivePrev'],
            valueBis: data.fechaRecepcionPrevista
          },
          {
            label: i18n['DetailRequest:detailTbArriveReal'],
            value: data.fechaRecepcionReal,
            labelBis: i18n['DetailRequest:detailTbReclama1'],
            valueBis: data.fechaReclamacion1
          },
          {
            label: i18n['DetailRequest:detailTbReclama2'],
            value: data.fechaReclamacion2,
            labelBis: i18n['DetailRequest:detailTbUrgency'],
            valueBis: data.urgenciaPeticion
          }
        ].map(({ label, value, labelBis, valueBis }, index) => (
          <div className={classes.divFlex} key={index}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <ElementShow
                label={label}
                value={value}
                middle= {true}
              />
              <ElementShow
                label={labelBis}
                value={valueBis}
                middle= {true}
              />
            </Grid>
          </div>
        ))}

        <div className={classes.divFlex}>
          <ElementShow
            label={i18n['DetailRequest:detailTbObservations']}
            value={data.observaciones}
            middle= {false}
          />
        </div>
      </div>
    </>
  )
}

export { DetailRequest }
