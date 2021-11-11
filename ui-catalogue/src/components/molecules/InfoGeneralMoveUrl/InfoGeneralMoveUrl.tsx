import React, { useState } from 'react'
import { IInfoGeneralMoveUrl } from './types'
import { ReportTypes } from '../../templates/BaseReport/types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

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
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    padding: '5px',
    width: '100%',
    '&:hover': {
      color: '#ff9900'
    }
  },
  labelStyleIn: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ff9900',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    padding: '5px',
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    textAlign: 'center'
  },
  divLink: {
    width: '100%',
    textAlign: 'center'
  }
})

const InfoGeneralMoveUrl: React.FC<IInfoGeneralMoveUrl> = ({
  i18n,
  report
}) => {
  const classes = useStyles()

  const [state, setState] = useState('DATOS_GENERALES')

  return (
    <>
      {(() => {
        switch (report) {
          case ReportTypes.FRANCIA:
            return (
              <>
              </>
            )
          case ReportTypes.BUREAU_MEJICO:
            return (
              <>
              </>
            )
          case ReportTypes.ARGENTINA_NOSIS:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      {[
                        {
                          status: 'SCORE',
                          href: '#SCORE',
                          label: i18n['InfoGeneralMoveUrl:detailTbScore']
                        },
                        {
                          status: 'IDENTIDAD',
                          href: '#IDENTIDAD',
                          label: i18n['InfoGeneralMoveUrl:detailTbIdentidad']
                        },
                        {
                          status: 'CONSULTAS',
                          href: '#CONSULTAS',
                          label: i18n['InfoGeneralMoveUrl:detailTbConsultas']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>

                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      {[
                        {
                          status: 'CHEQUES_RECHAZADOS',
                          href: '#CHEQUES_RECHAZADOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbChequesRechazados']
                        },
                        {
                          status: 'CHEQUES_RECHAZADOS_JURI',
                          href: '#CHEQUES_RECHAZADOS_JURI',
                          label: i18n['InfoGeneralMoveUrl:detailTbChequesRechazadosJuri']
                        },
                        {
                          status: 'BUREAU_DE_CREDITO',
                          href: '#BUREAU_DE_CREDITO',
                          label: i18n['InfoGeneralMoveUrl:detailTbBureau']
                        },
                        {
                          status: 'ALERTAS',
                          href: '#ALERTAS',
                          label: i18n['InfoGeneralMoveUrl:detailTbAlertas']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.BADEXCUG:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'IDENTIFICACIÓN',
                          href: '#IDENTIFICACIÓN',
                          label: i18n['InfoGeneralMoveUrl:detailTbIdentificacion']
                        },
                        {
                          status: 'PROTESTOS_DEMANDAS_IMPAGOS',
                          href: '#PROTESTOS_DEMANDAS_IMPAGOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbProtestosDemandasImpagos']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.EUDBP_PT:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'BANCO_PORTUGAL',
                          href: '#BANCO_PORTUGAL',
                          label: i18n['InfoGeneralMoveUrl:detailTbBancoPortugal']
                        },
                        {
                          status: 'COMUNICACION_ENTIDADES',
                          href: '#COMUNICACION_ENTIDADES',
                          label: i18n['InfoGeneralMoveUrl:detailTbComunicacionEntidades']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>

                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'RESPONSABILIDADES_CREDITO',
                          href: '#RESPONSABILIDADES_CREDITO',
                          label: i18n['InfoGeneralMoveUrl:detailTbResponsabilidadCredito']
                        },
                        {
                          status: 'RESUMEN_AGREGADO',
                          href: '#RESUMEN_AGREGADO',
                          label: i18n['InfoGeneralMoveUrl:detailTbResumenAgregado']
                        },
                        {
                          status: 'DATOS_HOST',
                          href: '#DATOS_HOST',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosHost']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.RESTO_PAISES:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'IDENTIFICACIÓN',
                          href: '#IDENTIFICACIÓN',
                          label: i18n['InfoGeneralMoveUrl:detailTbIdentificacion']
                        },
                        {
                          status: 'DATOS_BÁSICOS',
                          href: '#DATOS_BÁSICOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosBasicos']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>

                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'RELACIONES',
                          href: '#RELACIONES',
                          label: i18n['InfoGeneralMoveUrl:detailTbRelaciones']
                        },
                        {
                          status: 'PAGOS_PROCEDIMIENTOS_LEGALES',
                          href: '#PAGOS_PROCEDIMIENTOS_LEGALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbPagosProcedimiento']
                        },
                        {
                          status: 'RATINGS',
                          href: '#RATINGS',
                          label: i18n['InfoGeneralMoveUrl:detailTbRatings']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.Standard:
          default:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'IDENTIFICACIÓN',
                          href: '#IDENTIFICACIÓN',
                          label: i18n['InfoGeneralMoveUrl:detailTbIdentificacion']
                        },
                        {
                          status: 'DATOS_BÁSICOS',
                          href: '#DATOS_BÁSICOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosBasicos']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>

                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'NEGOCIO',
                          href: '#NEGOCIO',
                          label: i18n['InfoGeneralMoveUrl:detailTbNegocio']
                        },
                        {
                          status: 'ACTIVOS',
                          href: '#ACTIVOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbActivos']
                        },
                        {
                          status: 'RELACIONES',
                          href: '#RELACIONES',
                          label: i18n['InfoGeneralMoveUrl:detailTbRelaciones']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>

                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'PAGOS',
                          href: '#PAGOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbPagos']
                        },
                        {
                          status: 'PROCEDIMIENTOS',
                          href: '#PROCEDIMIENTOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbProcedimientos']
                        },
                        {
                          status: 'RATINGS',
                          href: '#RATINGS',
                          label: i18n['InfoGeneralMoveUrl:detailTbRatings']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.ESPANA_INFORMA:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'IDENTIFICACIÓN',
                          href: '#IDENTIFICACIÓN',
                          label: i18n['InfoGeneralMoveUrl:detailTbIdentificacion']
                        },
                        {
                          status: 'AJTS',
                          href: '#AJTS',
                          label: i18n['InfoGeneralMoveUrl:detailTbAJTS']
                        },
                        {
                          status: 'DATOS_INFORMA',
                          href: '#DATOS_INFORMA',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosInforma']
                        },
                        {
                          status: 'RATINGS',
                          href: '#RATINGS',
                          label: i18n['InfoGeneralMoveUrl:detailTbRatings']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.PERU_EQUIFAX:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'SCORE_EMPRESAS_PERU',
                          href: '#SCORE_EMPRESAS_PERU',
                          label: i18n['InfoGeneralMoveUrl:detailTbScoreEmpresas']
                        },
                        {
                          status: 'DIRECTORIO_PERSONAS',
                          href: '#DIRECTORIO_PERSONAS',
                          label: i18n['InfoGeneralMoveUrl:detailTbDirectorioPersonas']
                        },
                        {
                          status: 'DIRECTORIO_SUNAT',
                          href: '#DIRECTORIO_SUNAT',
                          label: i18n['InfoGeneralMoveUrl:detailTbDirectorioSunat']
                        },
                        {
                          status: 'DIRECCIONES',
                          href: '#DIRECCIONES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDirecciones']
                        },
                        {
                          status: 'REPRESENTACIONES_LEGALES',
                          href: '#REPRESENTACIONES_LEGALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbRepresentacionesLegales']
                        },
                        {
                          status: 'SISTEMA_FINANCIERO',
                          href: '#SISTEMA_FINANCIERO',
                          label: i18n['InfoGeneralMoveUrl:detailTbSistemaFinanciero']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
          case ReportTypes.EUDBP_FR:
            return (
              <>
                <div className={classes.divContainer}>
                  <div className={classes.divFlex}>
                    <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                    >

                      {[
                        {
                          status: 'DATOS_GENERALES',
                          href: '#DATOS_GENERALES',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosGenerales']
                        },
                        {
                          status: 'IDENTIFICACIÓN',
                          href: '#IDENTIFICACIÓN',
                          label: i18n['InfoGeneralMoveUrl:detailTbIdentificacion']
                        },
                        {
                          status: 'DATOS_BÁSICOS',
                          href: '#DATOS_BÁSICOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbDatosBasicos']
                        },
                        {
                          status: 'NEGOCIO',
                          href: '#NEGOCIO',
                          label: i18n['InfoGeneralMoveUrl:detailTbNegocio']
                        },
                        {
                          status: 'ACTIVOS',
                          href: '#ACTIVOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbActivos']
                        },
                        {
                          status: 'RELACIONES',
                          href: '#RELACIONES',
                          label: i18n['InfoGeneralMoveUrl:detailTbRelaciones']
                        },
                        {
                          status: 'PAGOS',
                          href: '#PAGOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbPagos']
                        },
                        {
                          status: 'PROCEDIMIENTOS',
                          href: '#PROCEDIMIENTOS',
                          label: i18n['InfoGeneralMoveUrl:detailTbProcedimientos']
                        }
                      ].map(({ status, href, label }, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}>
                          <div className={classes.divLink} >
                            <a
                              href={href}
                              className={state !== status ? classes.labelStyle : classes.labelStyleIn}
                              onClick={(e) => setState(status)}
                            >
                              {label}
                            </a>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            )
        }
      })()}
    </>
  )
}

export { InfoGeneralMoveUrl }
