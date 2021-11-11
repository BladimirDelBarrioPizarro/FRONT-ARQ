import { ReportTypes } from '../../templates/BaseReport/types'

interface Ii18nInfoGeneralMoveUrl {
  'InfoGeneralMoveUrl:detailTbDatosGenerales': string
  'InfoGeneralMoveUrl:detailTbIdentificacion': string
  'InfoGeneralMoveUrl:detailTbDatosBasicos': string
  'InfoGeneralMoveUrl:detailTbNegocio': string
  'InfoGeneralMoveUrl:detailTbActivos': string
  'InfoGeneralMoveUrl:detailTbRelaciones': string
  'InfoGeneralMoveUrl:detailTbPagos': string
  'InfoGeneralMoveUrl:detailTbProcedimientos': string
  'InfoGeneralMoveUrl:detailTbRatings': string
  'InfoGeneralMoveUrl:detailTbBancoPortugal': string
  'InfoGeneralMoveUrl:detailTbComunicacionEntidades': string
  'InfoGeneralMoveUrl:detailTbResponsabilidadCredito': string
  'InfoGeneralMoveUrl:detailTbResumenAgregado': string
  'InfoGeneralMoveUrl:detailTbDatosHost': string
  'InfoGeneralMoveUrl:detailTbAJTS': string
  'InfoGeneralMoveUrl:detailTbDatosInforma': string
  'InfoGeneralMoveUrl:detailTbScoreEmpresas': string
  'InfoGeneralMoveUrl:detailTbDirectorioPersonas': string
  'InfoGeneralMoveUrl:detailTbDirectorioSunat': string
  'InfoGeneralMoveUrl:detailTbDirecciones': string
  'InfoGeneralMoveUrl:detailTbRepresentacionesLegales': string
  'InfoGeneralMoveUrl:detailTbSistemaFinanciero': string
}

export interface IInfoGeneralMoveUrl {
  i18n: Ii18nInfoGeneralMoveUrl
  report: ReportTypes
}
