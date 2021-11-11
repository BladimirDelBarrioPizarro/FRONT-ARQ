import { dataBaseReport } from './index'

const mapperObservaciones = (dataBaseReport, data): any => {
  dataBaseReport.general.observations.condicionesadicionales = data.informeCreica.CREICA.OBSERVACIONES.CONDICIONESADICIONALES ?? ''
  dataBaseReport.general.observations.terminosventa = data.informeCreica.CREICA.OBSERVACIONES.TERMINOSVENTA ?? ''
  dataBaseReport.general.observations.procedimientoslegales = data.informeCreica.CREICA.OBSERVACIONES.PROCEDIMIENTOSLEGALES ?? ''
  dataBaseReport.general.observations.comentariogeneral = data.informeCreica.CREICA.OBSERVACIONES.COMENTARIOGENERAL ?? ''
  return dataBaseReport
}

const mapperOtrosValores = (dataBaseReport, data): any => {
  dataBaseReport.general.otherRTE.codigoRTE = data.informeCreica.CREICA.RATINGS.OTROSVALORESRTE.CODIGORTE ?? ''
  dataBaseReport.general.otherRTE.valorRTE = data.informeCreica.CREICA.RATINGS.OTROSVALORESRTE.VALORRTE ?? ''
  return dataBaseReport
}

const mapperRatings = (dataBaseReport, data): any => {
  dataBaseReport.general.ratingDBDP.rating = data.informeCreica.CREICA.RATINGS ?? ''
  if (data.informeCreica.CREICA.RATINGS.OTROSVALORESRTE) {
    dataBaseReport = mapperOtrosValores(dataBaseReport, data)
  }
  dataBaseReport.general.ratingDBDP.fechacambiorating = data.informeCreica.CREICA.FECCAMBIORATING ?? ''
  dataBaseReport.general.ratingDBDP.importerecomendado = data.informeCreica.CREICA.IMPRECOMENDADO ?? ''
  dataBaseReport.general.ratingDBDP.importemediosolicitado = data.informeCreica.CREICA.IMPMEDIOSOLICITADO ?? ''
  dataBaseReport.general.ratingDBDP.importerecomendado = data.informeCreica.CREICA.IMPMEDIORECOMENDADO ?? ''
  dataBaseReport.general.ratingDBDP.ratinganterior = data.informeCreica.CREICA.RATINGANTERIOR ?? ''
  dataBaseReport.general.ratingDBDP.conceptocomercial = data.informeCreica.CREICA.CONCEPTOCOMERCIAL ?? ''
  dataBaseReport.general.ratingDBDP.evaluacionporcentaje = data.informeCreica.CREICA.EVALUACIONPORCENTAJE ?? ''
  dataBaseReport.general.ratingDBDP.limitecredito = data.informeCreica.CREICA.LIMITECREDITO ?? ''
  dataBaseReport.general.ratingDBDP.riesgotesoreria = data.informeCreica.CREICA.RIESGOTESORERIA ?? ''
  dataBaseReport.general.ratingDBDP.codigoRTE = data.informeCreica.CREICA.CODIGORTE ?? ''
  dataBaseReport.general.ratingDBDP.valorRTE = data.informeCreica.CREICA.VALORRTE ?? ''
  return dataBaseReport
}

const mapperImpagosAsNef = (dataBaseReport, data): any => {
  dataBaseReport.general.defaultsAsnef.nombrerazonsocial = data.informeCreica.CREICA.IMPAGOSASNEF.NOMRAZONSOCIAL ?? ''
  dataBaseReport.general.defaultsAsnef.identificacionpersona = data.informeCreica.CREICA.IMPAGOSASNEF.IDENTIFICADORPERSONA ?? ''
  dataBaseReport.general.defaultsAsnef.fechaalta = data.informeCreica.CREICA.IMPAGOSASNEF.FECALTA ?? ''
  dataBaseReport.general.defaultsAsnef.fechaultimaactualizacion = data.informeCreica.CREICA.IMPAGOSASNEF.FECULTACTUALIZACION ?? ''
  dataBaseReport.general.defaultsAsnef.fechaultimaconsulta = data.informeCreica.CREICA.IMPAGOSASNEF.FECULTCONSULTA ?? ''
  dataBaseReport.general.defaultsAsnef.numoperacionesincidencias = data.informeCreica.CREICA.IMPAGOSASNEF.NUMOPERACIONESINCIDENCIAS ?? ''
  dataBaseReport.general.defaultsAsnef.numcuotasimpagadas = data.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTASIMPAGADAS ?? ''
  dataBaseReport.general.defaultsAsnef.importeimpagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPIMPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.peorsituacion = data.informeCreica.CREICA.IMPAGOSASNEF.PEORSIT ?? ''
  dataBaseReport.general.defaultsAsnef.fechapeorsituacion = data.informeCreica.CREICA.IMPAGOSASNEF.FECPEORSIT ?? ''
  dataBaseReport.general.defaultsAsnef.importemaximopagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPMAXIMPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.fechaimpmaximopagado = data.informeCreica.CREICA.IMPAGOSASNEF.FECIMPMAXIMPAGADO ?? ''
  dataBaseReport = mapperImpagosAsNefAtomic(dataBaseReport, data)
  return dataBaseReport
}

const mapperImpagosAsNefAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.defaultsAsnef.codigooperacion = data.informeCreica.CREICA.IMPAGOSASNEF.CODOPERACION ?? ''
  dataBaseReport.general.defaultsAsnef.identificacionpersona = data.informeCreica.CREICA.IMPAGOSASNEF.IDENTIFICACIONPERSONA ?? ''
  dataBaseReport.general.defaultsAsnef.fechaalta = data.informeCreica.CREICA.IMPAGOSASNEF.FECALTA ?? ''
  dataBaseReport.general.defaultsAsnef.entidadcedente = data.informeCreica.CREICA.IMPAGOSASNEF.ENTIDADCEDENTE ?? ''
  dataBaseReport.general.defaultsAsnef.producto = data.informeCreica.CREICA.IMPAGOSASNEF.PRODUCTO ?? ''
  dataBaseReport.general.defaultsAsnef.naturaleza = data.informeCreica.CREICA.IMPAGOSASNEF.NATURALEZA ?? ''
  dataBaseReport.general.defaultsAsnef.situacion = data.informeCreica.CREICA.IMPAGOSASNEF.SITUACION ?? ''
  dataBaseReport.general.defaultsAsnef.importeimpagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPIMPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.fechainicio = data.informeCreica.CREICA.IMPAGOSASNEF.FECINICIO ?? ''
  dataBaseReport.general.defaultsAsnef.fechainicio = data.informeCreica.CREICA.IMPAGOSASNEF.FECFINAL ?? ''
  dataBaseReport.general.defaultsAsnef.fechafinal = data.informeCreica.CREICA.IMPAGOSASNEF.FECFINAL ?? ''
  dataBaseReport.general.defaultsAsnef.numcuotas = data.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTAS ?? ''
  dataBaseReport = mapperImpagosAsNefAtomicBis(dataBaseReport, data)
  return dataBaseReport
}

const mapperImpagosAsNefAtomicBis = (dataBaseReport, data): any => {
  dataBaseReport.general.defaultsAsnef.importecuotas = data.informeCreica.CREICA.IMPAGOSASNEF.IMPCUOTAS ?? ''
  dataBaseReport.general.defaultsAsnef.importependiente = data.informeCreica.CREICA.IMPAGOSASNEF.IMPPENDIENTE ?? ''
  dataBaseReport.general.defaultsAsnef.importepagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.numcuotasimpagadas = data.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTASIMPAGADAS ?? ''
  dataBaseReport.general.defaultsAsnef.fechaprimervencimiento = data.informeCreica.CREICA.IMPAGOSASNEF.FECPRIMERVENCIMIENTO ?? ''
  dataBaseReport.general.defaultsAsnef.fechaultimovencimiento = data.informeCreica.CREICA.IMPAGOSASNEF.FECULTVENCIMIENTO ?? ''
  return dataBaseReport
}

const mapperIncidenciasAsNef = (dataBaseReport, data): any => {
  dataBaseReport.general.incidentsAsnef.reclamacion = data.informeCreica.CREICA.INCIDENCIASASNEF.RECLAORGPUBLICOS ?? ''
  dataBaseReport.general.incidentsAsnef.importereclamaciones = data.informeCreica.CREICA.INCIDENCIASASNEF.IMPTOTRECLA ?? ''
  dataBaseReport.general.incidentsAsnef.incidenciasjudiciales = data.informeCreica.CREICA.INCIDENCIASASNEF.INCIDENCIASJUDICIALES ?? ''
  dataBaseReport.general.incidentsAsnef.importeincidencias = data.informeCreica.CREICA.INCIDENCIASASNEF.IMPTOTINCIDENCIASJUD ?? ''
  return dataBaseReport
}

const mapperImpago = (dataBaseReport, data): any => {
  dataBaseReport.general.nonPayments.fechaefecto = data.informeCreica.CREICA.IMPAGOS.IMPAGO.FECEFECTO ?? ''
  dataBaseReport.general.nonPayments.importepagado = data.informeCreica.CREICA.IMPAGOS.IMPAGO.IMPPAGADO ?? ''
  dataBaseReport.general.nonPayments.claveprotesta = data.informeCreica.CREICA.IMPAGOS.IMPAGO.CLAVEPROTESTA ?? ''
  dataBaseReport.general.nonPayments.librador = data.informeCreica.CREICA.IMPAGOS.IMPAGO.LIBRADOR ?? ''
  dataBaseReport.general.nonPayments.claveestado = data.informeCreica.CREICA.IMPAGOS.IMPAGO.CLAVEESTADO ?? ''
  dataBaseReport.general.nonPayments.claveaceptado = data.informeCreica.CREICA.IMPAGOS.IMPAGO.CLAVEACEPTADO ?? ''
  dataBaseReport.general.nonPayments.tipodocumento = data.informeCreica.CREICA.IMPAGOS.IMPAGO.TIPODOCUMENTO ?? ''
  dataBaseReport.general.nonPayments.entidadinformante = data.informeCreica.CREICA.IMPAGOS.IMPAGO.ENTIDADINFORMANTE ?? ''
  dataBaseReport.general.nonPayments.importepagadoactual = data.informeCreica.CREICA.IMPAGOS.IMPAGO.IMPORTEPAGADOACTUAL ?? ''
  return dataBaseReport
}

const mapperDemanda = (dataBaseReport, data): any => {
  dataBaseReport.general.demands.codigo = data.informeCreica.CREICA.DEMANDAS.DEMANDA.CODIGO ?? ''
  dataBaseReport.general.demands.fechademanda = data.informeCreica.CREICA.DEMANDAS.DEMANDA.FECDEMANDA ?? ''
  dataBaseReport.general.demands.codigodemanda = data.informeCreica.CREICA.DEMANDAS.DEMANDA.CODIGODEMANDA ?? ''
  dataBaseReport.general.demands.importedemanda = data.informeCreica.CREICA.DEMANDAS.DEMANDA.IMPDEMANDA ?? ''
  dataBaseReport.general.demands.demandante = data.informeCreica.CREICA.DEMANDAS.DEMANDA.DEMANDANTE ?? ''
  return dataBaseReport
}

const mapperProtestDemandaImpago = (dataBaseReport, data): any => {
  dataBaseReport.general.unpaidClaimsProtests.codigoincidencia = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.CODINCIDENCIA ?? ''
  dataBaseReport.general.unpaidClaimsProtests.tipoincidencia = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.TIPINCIDENCIA ?? ''
  dataBaseReport.general.unpaidClaimsProtests.fechaincidencia = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.FECINCIDENCIA ?? ''
  dataBaseReport.general.unpaidClaimsProtests.numeroincidencias = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.NUMINCIDENCIAS ?? ''
  dataBaseReport.general.unpaidClaimsProtests.importeincidencias = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.IMPINCIDENCIAS ?? ''
  return dataBaseReport
}

const mapperScoring = (dataBaseReport, data): any => {
  dataBaseReport.general.scoring.estadopeticion = data.informeCreica.CREICA.SCORING.ESTADOPETICION ?? ''
  dataBaseReport.general.scoring.ventas = data.informeCreica.CREICA.SCORING.VENTAS ?? ''
  dataBaseReport.general.scoring.resultado = data.informeCreica.CREICA.SCORING.RESULTADO ?? ''
  dataBaseReport.general.scoring.fondospropios = data.informeCreica.CREICA.SCORING.FONDOSPROPIOS ?? ''
  dataBaseReport.general.scoring.evolucionventas = data.informeCreica.CREICA.SCORING.EVOLUCIONVENTAS ?? ''
  dataBaseReport.general.scoring.evoluciontesoreria = data.informeCreica.CREICA.SCORING.EVOLUCIONTESORERIA ?? ''
  dataBaseReport.general.scoring.fechaconstitucion = data.informeCreica.CREICA.SCORING.FECCONSTITUCION ?? ''
  dataBaseReport.general.scoring.numimpagos18 = data.informeCreica.CREICA.SCORING.NUMIMPAGOS_18 ?? ''
  dataBaseReport.general.scoring.capitalutil = data.informeCreica.CREICA.SCORING.CAPITALUTIL ?? ''
  dataBaseReport.general.scoring.puntosligados = data.informeCreica.CREICA.SCORING.PUNTOSLIGADOS ?? ''
  dataBaseReport.general.scoring.codigovidaempresa = data.informeCreica.CREICA.SCORING.CODVIDAEMPRESA ?? ''
  dataBaseReport.general.scoring.anoconstitucionestimado = data.informeCreica.CREICA.SCORING.ANOCONSTITUCIONESTIMADO ?? ''
  dataBaseReport.general.scoring.ventasestimadas = data.informeCreica.CREICA.SCORING.VENTASESTIMADAS ?? ''
  dataBaseReport.general.scoring.fechabalance = data.informeCreica.CREICA.SCORING.FECBALANCE ?? ''
  dataBaseReport.general.scoring.importeefectospagados = data.informeCreica.CREICA.SCORING.IMPEFECTOSPAGADOS ?? ''
  return dataBaseReport
}

const mapperExportImport = (dataBaseReport, data): any => {
  dataBaseReport.general.exports.pais = data.informeCreica.CREICA.EXPORTACIONESIMPORTACIONES.EXPORTACIONIMPORTACION.PAIS ?? ''
  dataBaseReport.general.exports.porcentaje = data.informeCreica.CREICA.EXPORTACIONESIMPORTACIONES.EXPORTACIONIMPORTACION.PCTEXPIMP ?? ''
  return dataBaseReport
}

const mapperImpagosDemandas = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.OBSERVACIONES) {
    dataBaseReport = mapperObservaciones(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA.RATINGS) {
    dataBaseReport = mapperRatings(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA.IMPAGOSASNEF) {
    dataBaseReport = mapperImpagosAsNef(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA.INCIDENCIASASNEF) {
    dataBaseReport = mapperIncidenciasAsNef(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.IMPAGOS?.IMPAGO) {
    dataBaseReport = mapperImpago(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.DEMANDAS?.DEMANDA) {
    dataBaseReport = mapperDemanda(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.PROTESTOSDEMANDASIMPAGOS?.PROTESTODEMANDAIMPAGO) {
    dataBaseReport = mapperProtestDemandaImpago(dataBaseReport, data)
  }
  return dataBaseReport
}

const mapperResumenInfo = (dataBaseReport, data): any => {
  dataBaseReport.general.summaryFinancialInformation.nombre = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.TIPO ?? ''
  dataBaseReport.general.summaryFinancialInformation.valor = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.VALOR ?? ''
  dataBaseReport.general.summaryFinancialInformation.ratioapalancamiento = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.RATIOAPALANCAMIENTO ?? ''
  dataBaseReport.general.summaryFinancialInformation.nivelapalancamiento = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.NIVELAPALANCAMIENTO ?? ''
  dataBaseReport.general.summaryFinancialInformation.ratioacidez = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.RATIOACIDEZ ?? ''
  dataBaseReport.general.summaryFinancialInformation.pctapalancamiento = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.PCTAPALANCAMIENTO ?? ''
  dataBaseReport.general.summaryFinancialInformation.desmontante = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.DESMONTANTE ?? ''
  dataBaseReport.general.summaryFinancialInformation.montante = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.MONTANTE ?? ''
  dataBaseReport.general.summaryFinancialInformation.tipofecpropiedades = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.TIPFECPROPIEDADES ?? ''
  dataBaseReport.general.summaryFinancialInformation.fechapropiedades = data.informeCreica.CREICA.RESUMENINFORMACIONFINANCIERA.DATO.FECPROPIEDADES ?? ''
  return dataBaseReport
}

const mapperResumen = (dataBaseReport, data): any => {
  dataBaseReport.general.ajtsDBGDP.formajuridica = data.informeCreica.CREICA.RESUMEN.FORMAJURIDICA ?? ''
  dataBaseReport.general.ajtsDBGDP.anteriorformajuridica = data.informeCreica.CREICA.RESUMEN.ANTERIORFORMAJURIDICA ?? ''
  dataBaseReport.general.ajtsDBGDP.descripcionformajuridica = data.informeCreica.CREICA.RESUMEN.DESFORMAJURIDICA ?? ''
  dataBaseReport.general.ajtsDBGDP.descripcionanteriorformajuridica = data.informeCreica.CREICA.RESUMEN.DESANTERIORFORMAJURIDICA ?? ''
  dataBaseReport.general.ajtsDBGDP.fechaconstitucion = data.informeCreica.CREICA.RESUMEN.FECCONSTITUCION ?? ''
  dataBaseReport.general.ajtsDBGDP.fechaformajurididica = data.informeCreica.CREICA.RESUMEN.FECFORMAJURIDICAACT ?? ''
  dataBaseReport.general.ajtsDBGDP.fechacambiocapitalnominal = data.informeCreica.CREICA.RESUMEN.FECCAMBIOCAPITALNOMINAL ?? ''
  dataBaseReport.general.ajtsDBGDP.fechadatosresumen = data.informeCreica.CREICA.RESUMEN.FECDATOSRESUMEN ?? ''
  dataBaseReport.general.ajtsDBGDP.estadoactual = data.informeCreica.CREICA.RESUMEN.ESTADOACTUAL ?? ''
  dataBaseReport.general.ajtsDBGDP.fechaestadoactual = data.informeCreica.CREICA.RESUMEN.FECESTADOACTUAL ?? ''
  dataBaseReport.general.ajtsDBGDP.capitalnominal = data.informeCreica.CREICA.RESUMEN.CAPITALNOMINAL ?? ''
  dataBaseReport = mapperResumenAtomic(dataBaseReport, data)
  return dataBaseReport
}

const mapperResumenAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.ajtsDBGDP.capitaldesembolsado = data.informeCreica.CREICA.RESUMEN.CAPITALDESEMBOLSADO ?? ''
  dataBaseReport.general.ajtsDBGDP.ventas = data.informeCreica.CREICA.RESUMEN.VENTAS ?? ''
  dataBaseReport.general.ajtsDBGDP.resultadoneto = data.informeCreica.CREICA.RESUMEN.RESULTADONETO ?? ''
  dataBaseReport.general.ajtsDBGDP.fondospropios = data.informeCreica.CREICA.RESUMEN.FONDOSPROPIOS ?? ''
  dataBaseReport.general.ajtsDBGDP.capitalcirculante = data.informeCreica.CREICA.RESUMEN.CAPITALCIRCULANTE ?? ''
  dataBaseReport.general.ajtsDBGDP.activosfijos = data.informeCreica.CREICA.RESUMEN.ACTIVOSFIJOS ?? ''
  dataBaseReport.general.ajtsDBGDP.existencias = data.informeCreica.CREICA.RESUMEN.EXISTENCIAS ?? ''
  dataBaseReport.general.ajtsDBGDP.fuentedatoseconomicos = data.informeCreica.CREICA.RESUMEN.FUENTEDATOSECONOMICOS ?? ''
  dataBaseReport.general.ajtsDBGDP.capitalnominalanterior = data.informeCreica.CREICA.RESUMEN.CAPITALNOMINALANTERIOR ?? ''
  dataBaseReport.general.ajtsDBGDP.numeroempleados = data.informeCreica.CREICA.RESUMEN.NUMEMPLEADOS ?? ''
  dataBaseReport.general.ajtsDBGDP.comentarios = data.informeCreica.CREICA.RESUMEN.COMENTARIOS ?? ''
  return dataBaseReport
}

const mapperOthers = (dataBaseReport, data): any => {
  dataBaseReport.general.averagePaymentDays.periodomediocobro = data.CREICA.DIASMEDIAPAGOPDOMEDIOPAGO ?? ''
  dataBaseReport.general.averagePaymentDays.periodomediocobro = data.CREICA.DIASMEDIAPAGOPDOMEDIOCOBRO ?? ''
  dataBaseReport.general.averagePaymentDays.deudores = data.CREICA.DIASMEDIAPAGODEUDORESDIAS ?? ''
  dataBaseReport.general.datosHost.tipoDocumento = data.informeCreica.CREICA.TIPDOC ?? ''
  dataBaseReport.general.generalData.remitente = data.informeCreica.CREICA.REMITENTE ?? ''
  dataBaseReport.general.generalData.fechamensaje = data.informeCreica.CREICA.FECHAMENSAJE ?? ''
  dataBaseReport.general.generalData.nombredocumento = data.informeCreica.CREICA.NOMDOC ?? ''
  dataBaseReport.general.generalData.fecha = data.informeCreica.CREICA.FEC ?? ''
  dataBaseReport.general.generalData.tipodocumento = data.informeCreica.CREICA.TIPDOC ?? ''
  dataBaseReport.general.generalData.moneda = data.informeCreica.CREICA.MONEDA ?? ''

  if (data.informeCreica?.CREICA?.NOM?.CREICA) {
    dataBaseReport.general.generalData.nombrefichero = data.informeCreica.CREICA.NOM.CREICA
  }
  return dataBaseReport
}

const mapperDatosHost = (dataBaseReport, data): any => {
  dataBaseReport.general.datosHost.numeroPeticion = data.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST ?? ''
  dataBaseReport.general.datosHost.nomCorresponsal = data.informeCreica.CREICA.DATOSHOST.CODCORRESPONSAL ?? ''
  dataBaseReport.general.datosHost.codProducto = data.informeCreica.CREICA.DATOSHOST.CODPRODUCTO ?? ''
  dataBaseReport.general.datosHost.codEmpresa = data.informeCreica.CREICA.DATOSHOST.CODEMPRESA ?? ''
  dataBaseReport.general.datosHost.tipoCorresponsal = data.informeCreica.CREICA.DATOSHOST.TIPOCORRESPONSAL ?? ''
  dataBaseReport.general.datosHost.numeroDocumento = data.informeCreica.CREICA.DATOSHOST.NUMDOCUMENTO ?? ''
  dataBaseReport.general.datosHost.numeroInforme = data.informeCreica.CREICA.DATOSHOST.NUMINFORME ?? ''
  dataBaseReport.general.datosHost.numeroMovimiento = data.informeCreica.CREICA.DATOSHOST.NUMMOVIMIENT ?? ''
  dataBaseReport.general.datosHost.origen = data.informeCreica.CREICA.DATOSHOST.ORIGEN ?? ''
  dataBaseReport.general.datosHost.gravedad = data.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
  dataBaseReport.general.datosHost.tipoFichero = data.informeCreica.CREICA.DATOSHOST.TIPFICHERO ?? ''
  dataBaseReport.general.datosHost.nombreFichero = data.informeCreica.CREICA.DATOSHOST.NOMFICHERO ?? ''
  dataBaseReport = mapperDatosHostAtomic(dataBaseReport, data)
  return dataBaseReport
}

const mapperDatosHostAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.generalData.numerodocumento = data.informeCreica.CREICA.DATOSHOST.TIPODOCUMENTO ?? ''
  if (String(data.informeCreica.CREICA.DATOSHOST.TIPODOCUMENTO) === '52') {
    dataBaseReport.general.generalData.codigoempresa = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODIGOEMPRESA ?? ''
    if (data.informeCreica?.CREICA?.DATOSHOST?.AJTS?.AJTS) {
      dataBaseReport.general.ajtsDBGDP.ajt = data.informeCreica.CREICA.DATOSHOST.AJTS.AJTS
    }
  }
  return dataBaseReport
}

const mapperDirectivos = (dataBaseReport, data): any => {
  dataBaseReport.general.managers.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.DENOMINACION ?? ''
  dataBaseReport.general.managers.numeroidentificacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.NUMIDENTIFICACION ?? ''
  dataBaseReport.general.managers.cargo = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.CARGO ?? ''
  dataBaseReport.general.managers.domicilio = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.DOMICILIO ?? ''
  dataBaseReport.general.managers.localidad = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.LOCALIDAD ?? ''
  dataBaseReport.general.managers.provincia = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.PROVINCIA ?? ''
  dataBaseReport.general.managers.codigopostal = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.CODPOSTAL ?? ''
  dataBaseReport.general.managers.pais = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.PAIS ?? ''
  dataBaseReport.general.managers.porcentajeparticipacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.PCTPARTICIPACION ?? ''
  return dataBaseReport
}

const mapperEmpresaPrincipal = (dataBaseReport, data): any => {
  dataBaseReport.general.primaryResidence.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.COMENTARIOS ?? ''
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.BOLSAS?.BOLSA) {
    dataBaseReport.general.primaryResidence.bolsa = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.BOLSAS.BOLSA ?? ''
    dataBaseReport.general.identification.bolsa = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.BOLSAS.BOLSAS ?? ''
  }
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.DIRECCION) {
    dataBaseReport.general.identification.domicilio = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.DOMICILIO ?? ''
    dataBaseReport.general.primaryResidence.domicilio = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.DOMICILIO ?? ''
    dataBaseReport.general.primaryResidence.localidad = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.LOCALIDAD ?? ''
    dataBaseReport.general.identification.provincia = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PROVINCIA ?? ''
    dataBaseReport.general.primaryResidence.provincia = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PROVINCIA ?? ''
    dataBaseReport.general.identification.codigoPostal = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.CODPOSTAL ?? ''
    dataBaseReport.general.primaryResidence.codigopostal = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.CODPOSTAL ?? ''
    dataBaseReport.general.identification.pais = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PAIS ?? ''
    dataBaseReport.general.primaryResidence.pais = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PAIS ?? ''
  }
  return dataBaseReport
}

const mapperIdentificacion = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.NOMBRESCOMERCIALES?.NOMBRESCOMERCIALES) {
    dataBaseReport.general.tradeNames.nombreComercial = data.informeCreica.CREICA.IDENTIFICACION.NOMBRESCOMERCIALES.NOMBRESCOMERCIALES ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.IDEN?.CODIDEN) {
    dataBaseReport.general.identification.registrationNumber = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.REFERENCIAFUENTE) {
    dataBaseReport.general.identification.referenciaFuente = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.REFERENCIAFUENTE ?? ''
  }
  return dataBaseReport
}

const mapperIdentities = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.DIRECTIVOS) {
    dataBaseReport = mapperDirectivos(dataBaseReport, data)
  }

  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL) {
    dataBaseReport = mapperEmpresaPrincipal(dataBaseReport, data)
  }
  if (data.informeCreica.CREICA.IDENTIFICACION) {
    dataBaseReport = mapperIdentificacion(dataBaseReport, data)
  }
  return dataBaseReport
}

const mapperScoringAndResumenes = (dataBaseReport, data): any => {
  if (data.informeCreica.CREICA.SCORING) {
    dataBaseReport = mapperScoring(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.EXPORTACIONESIMPORTACIONES?.EXPORTACIONIMPORTACION) {
    dataBaseReport = mapperExportImport(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.RESUMENINFORMACIONFINANCIERA?.DATO) {
    dataBaseReport = mapperResumenInfo(dataBaseReport, data)
  }
  if (data.informeCreica?.RESUMEN) {
    dataBaseReport = mapperResumen(dataBaseReport, data)
  }
  return dataBaseReport
}

const mapperCreica = (dataBaseReport, data): any => {
  dataBaseReport = mapperImpagosDemandas(dataBaseReport, data)
  dataBaseReport = mapperScoringAndResumenes(dataBaseReport, data)
  dataBaseReport = mapperOthers(dataBaseReport, data)
  if (data.informeCreica?.CREICA?.DATOSHOST) {
    dataBaseReport = mapperDatosHost(dataBaseReport, data)
  }
  dataBaseReport = mapperIdentities(dataBaseReport, data)
  return dataBaseReport
}

const mapperDGX = (dataBaseReport, data): any => {
  if (data.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.BUS_NME?.NME_ENTR?.NME_ENTR_VW?.NME_TEXT) {
    dataBaseReport.general.identification.denominacion = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_NME.NME_ENTR.NME_ENTR_VW.NME_TEXT ?? ''
  }
  if (data.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.TRNUID) {
    dataBaseReport.general.identification.referenciaInforme = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.TRNUID ?? ''
  }
  if (data.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.BUS_ADR?.ADR_ENTR?.ADR_ENTR_VW?.POST_CODE) {
    dataBaseReport.general.identification.codigoPostal = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.POST_CODE ?? ''
  }
  if (data.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.BUS_ADR?.ADR_ENTR?.ADR_ENTR_VW?.CNTY) {
    dataBaseReport.general.identification.provincia = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.CNTY ?? ''
  }
  if (data.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.BUS_ADR?.ADR_ENTR?.ADR_ENTR_VW?.MINR_TWN_NME) {
    dataBaseReport.general.identification.localidad = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.MINR_TWN_NME ?? ''
  }
  if (data.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.BUS_ADR?.ADR_ENTR?.ADR_ENTR_VW?.ADR_LINE?.TEXT) {
    dataBaseReport.general.identification.domicilio = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.ADR_LINE.TEXT ?? ''
  }
  return dataBaseReport
}

export const mapperRestoPaises = (dataInforme): any => {
  var result = dataBaseReport
  const data = dataInforme[0]
  if (data.informeCreica?.CREICA) {
    result = mapperCreica(result, data)
  }
  if (data.informeCesceDgx?.DGX) {
    result = mapperDGX(result, data)
  }
  return result
}
