import { dataBaseReport } from './index'

const mapperGeneralData = (dataBaseReport, data): any => {
  dataBaseReport.general.generalDatanoDB.remitente = data.informeCreica.REMITENTE ?? ''
  dataBaseReport.general.generalDatanoDB.nombreDocumento = data.informeCreica.MONDOC ?? ''
  dataBaseReport.general.generalDatanoDB.tipoDocumento = data.informeCreica.CREICA.TIPDOC ?? ''
  dataBaseReport.general.generalDatanoDB.fechaMensaje = data.informeCreica.CREICA.FECHAMENSAJE ?? ''
  dataBaseReport.general.generalDatanoDB.fecha = data.informeCreica.CREICA.FEC ?? ''
  dataBaseReport.general.generalDatanoDB.fechaBusqueda = data.informeCreica.CREICA.FECULTBUSQUEDA ?? ''
  dataBaseReport.general.generalDatanoDB.numeroPeticion = data.informeCreica.CREICA.NUMPETICION ?? ''
  dataBaseReport.general.generalDatanoDB.numeroDocumento = data.informeCreica.CREICA.NUMDOC ?? ''
  dataBaseReport.general.generalDatanoDB.moneda = data.informeCreica.CREICA.MONEDA ?? ''
  return dataBaseReport
}

const mapperDatosHost = (dataBaseReport, data): any => {
  dataBaseReport.general.primaryResidenceNoDB.numeropeticion = data.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST ?? ''
  dataBaseReport.general.primaryResidenceNoDB.codnomcorresponsal = data.informeCreica.CREICA.DATOSHOST.COMPAREX.NOMCORRESPO ?? ''
  dataBaseReport.general.primaryResidenceNoDB.codproducto = data.informeCreica.CREICA.DATOSHOST.CODPRODUCTO ?? ''
  dataBaseReport.general.primaryResidenceNoDB.codnomempresa = data.informeCreica.CREICA.DATOSHOST.COMPAREX.NOMDEUDOR ?? ''
  dataBaseReport.general.primaryResidenceNoDB.tipocorresponsal = data.informeCreica.CREICA.DATOSHOST.TIPOCORRESPONSAL ?? ''
  dataBaseReport.general.primaryResidenceNoDB.numerodocumento = data.informeCreica.CREICA.DATOSHOST.NUMDOCUMENTO ?? ''
  dataBaseReport.general.primaryResidenceNoDB.tipodocumento = data.informeCreica.CREICA.DATOSHOST.TIPDOC ?? ''
  dataBaseReport.general.primaryResidenceNoDB.numeroinforme = data.informeCreica.CREICA.DATOSHOST.NUMINFORME ?? ''
  dataBaseReport.general.primaryResidenceNoDB.numeromovimiento = data.informeCreica.CREICA.DATOSHOST.NUMMOVIMIENT ?? ''
  dataBaseReport.general.primaryResidenceNoDB.origen = data.informeCreica.CREICA.DATOSHOST.ORIGEN ?? ''
  dataBaseReport.general.primaryResidenceNoDB.gravedadajt = data.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
  dataBaseReport.general.primaryResidenceNoDB.tipofichero = data.informeCreica.CREICA.DATOSHOST.TIPFICHERO ?? ''
  dataBaseReport.general.primaryResidenceNoDB.nombrefichero = data.informeCreica.CREICA.DATOSHOST.NOMFICHERO ?? ''
  dataBaseReport = mapperDatosHostAtomic(dataBaseReport, data)
  return dataBaseReport
}

const mapperDatosHostAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.datosHost.numeroPeticion = data.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST ?? ''
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
  dataBaseReport = mapperDatosHostTipoDoc(dataBaseReport, data)
  return dataBaseReport
}

const mapperDatosHostTipoDoc = (dataBaseReport, data): any => {
  if (String(data.informeCreica.CREICA?.DATOSHOST?.TIPODOCUMENTO) === '52') {
    if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION?.CODIGOEMPRESA) {
      dataBaseReport.general.generalDatanoDB.codigo = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODIGOEMPRESA
    }
    // AJT
    dataBaseReport.general.ajtEUDBP.ajtmayorgravedad = data.informeCreica?.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
  }
  return dataBaseReport
}

const mapperIdentificacion = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.NOMBRESCOMERCIALES) {
    dataBaseReport.general.tradeNames.nombreComercial = data.informeCreica.CREICA.IDENTIFICACION.NOMBRESCOMERCIALES.NOMBRECOMERCIAL ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION) {
    dataBaseReport.general.identificationnoDB.codigoempresa = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODIGOEMPRESA ?? ''
    dataBaseReport.general.identificationnoDB.denominacion = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION ?? ''
    dataBaseReport.general.identificationnoDB.domicilio = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DOMICILIO ?? ''
    dataBaseReport.general.identificationnoDB.localidad = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.LOCALIDAD ?? ''
    dataBaseReport.general.identificationnoDB.provincia = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PROVINCIA ?? ''
    dataBaseReport.general.identificationnoDB.codigopostal = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODPOSTAL ?? ''
    dataBaseReport.general.identificationnoDB.pais = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PAIS ?? ''
  }
  dataBaseReport.general.identificationnoDB.referenciafuente = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.REFERENCIAFUENTE ?? ''
  return dataBaseReport
}

const mapperIdentificacionOtros = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.ACTNACE) {
    dataBaseReport.general.taxcodesEUDBP.codigo = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.ACTNACE.CODACTNACE ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.IDEN) {
    dataBaseReport.general.naceCnae.codigo = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN ?? ''
  }
  dataBaseReport.general.otherData.actividades = data.informeCreica?.CREICA.IDENTIFICACION.DEUDOR.ACTIVIDADES ?? ''
  dataBaseReport.general.otherData.telefono = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.TELEFONO ?? ''
  dataBaseReport.general.otherData.telefax = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.TELEFAX ?? ''
  dataBaseReport.general.otherData.telex = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.TELEX ?? ''
  return dataBaseReport
}

const mapperDomicilio = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.DIRECCION) {
    dataBaseReport.general.primaryResidenceNoDB.domicilio = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.DOMICILIO ?? ''
    dataBaseReport.general.primaryResidenceNoDB.localidad = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.LOCALIDAD ?? ''
    dataBaseReport.general.primaryResidenceNoDB.provincia = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PROVINCIA ?? ''
    dataBaseReport.general.primaryResidenceNoDB.codigopostal = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.CODPOSTAL ?? ''
    dataBaseReport.general.primaryResidenceNoDB.pais = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PAIS ?? ''
  }
  dataBaseReport.general.primaryResidenceNoDB.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.COMENTARIOS ?? ''
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.BOLSAS) {
    dataBaseReport.general.primaryResidenceNoDB.bolsa = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.BOLSAS.BOLSA ?? ''
  }
  return dataBaseReport
}

const mapperResumen = (dataBaseReport, data): any => {
  dataBaseReport.general.resume.formajuridica = data.informeCreica.CREICA.RESUMEN.FORMAJURIDICA ?? ''
  dataBaseReport.general.resume.anteriorformajuridica = data.informeCreica.CREICA.RESUMEN.ANTERIORFORMAJURIDICA ?? ''
  dataBaseReport.general.resume.descripcionformajuridica = data.informeCreica.CREICA.RESUMEN.DESFORMAJURIDICA ?? ''
  dataBaseReport.general.resume.descripcionanteriorformajuridica = data.informeCreica.CREICA.RESUMEN.DESANTERIORFORMAJURIDICA ?? ''
  dataBaseReport.general.resume.fechaconstitucion = data.informeCreica?.CREICA?.RESUMEN?.FECCONSTITUCION ?? ''
  dataBaseReport.general.resume.fechaformajuridica = data.informeCreica.CREICA.RESUMEN.FECFORMAJURIDICAACT ?? ''
  dataBaseReport.general.resume.fechacambiocapitalnominal = data.informeCreica.CREICA.RESUMEN.FECCAMBIOCAPITALNOMINAL ?? ''
  dataBaseReport.general.resume.fechadatosresumen = data.informeCreica.CREICA.RESUMEN.FECDATOSRESUMEN ?? ''
  dataBaseReport.general.resume.estadoactual = data.informeCreica.CREICA.RESUMEN.ESTADOACTUAL ?? ''
  dataBaseReport.general.resume.fechaestadoactual = data.informeCreica.CREICA.RESUMEN.FECESTADOACTUAL ?? ''
  dataBaseReport.general.resume.capitalnominal = data.informeCreica.CREICA.RESUMEN.CAPITALNOMINAL ?? ''
  dataBaseReport = mapperResumenAtomic(dataBaseReport, data)
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS) {
    dataBaseReport = mapperEmpresasVinc(dataBaseReport, data)
  }
  return dataBaseReport
}

const mapperResumenAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.resume.capitaldesembolsado = data.informeCreica.CREICA.RESUMEN.CAPITALDESEMBOLSADO ?? ''
  dataBaseReport.general.resume.ventas = data.informeCreica.CREICA.RESUMEN.VENTAS ?? ''
  dataBaseReport.general.resume.resultadoneto = data.informeCreica.CREICA.RESUMEN.RESULTADONETO ?? ''
  dataBaseReport.general.resume.fondospropios = data.informeCreica.CREICA.RESUMEN.FONDOSPROPIOS ?? ''
  dataBaseReport.general.resume.capitalcirculante = data.informeCreica.CREICA.RESUMEN.CAPITALCIRCULANTE ?? ''
  dataBaseReport.general.resume.activosfijos = data.informeCreica.CREICA.RESUMEN.ACTIVOSFIJOS ?? ''
  dataBaseReport.general.resume.existencias = data.informeCreica.CREICA.RESUMEN.EXISTENCIAS ?? ''
  dataBaseReport.general.resume.fuentedatoseconomicos = data.informeCreica.CREICA.RESUMEN.FUENTEDATOSECONOMICOS ?? ''
  dataBaseReport.general.resume.capitalnominalanterior = data.informeCreica.CREICA.RESUMEN.CAPITALNOMINALANTERIOR ?? ''
  dataBaseReport.general.resume.numeroempleados = data.informeCreica.CREICA.RESUMEN.NUMEMPLEADOS ?? ''
  dataBaseReport.general.resume.comentarios = data.informeCreica.CREICA.RESUMEN.COMENTARIOS ?? ''
  return dataBaseReport
}

const mapperEmpresasVinc = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE) {
    dataBaseReport.general.resume.nombre1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.DENOMINACION ?? ''
    dataBaseReport.general.resume.domicilio1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.DOMICILIO ?? ''
    dataBaseReport.general.resume.provincia1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.PROVINCIA ?? ''
    dataBaseReport.general.resume.codigopostal1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.CODPOSTAL ?? ''
    dataBaseReport.general.resume.pais1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.PAIS ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.PCTPARTICIPACION ?? ''
  }
  dataBaseReport = mapperUltimaCompania(dataBaseReport, data)
  return dataBaseReport
}

const mapperUltimaCompania = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.ULTIMACOMPANIAPADRE) {
    dataBaseReport.general.resume.nombre2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.DENOMINACION ?? ''
    dataBaseReport.general.resume.domicilio2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.DOMICILIO ?? ''
    dataBaseReport.general.resume.localidad2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.LOCALIDAD ?? ''
    dataBaseReport.general.resume.provincia2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.PROVINCIA ?? ''
    dataBaseReport.general.resume.codigopostal2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.CODPOSTAL ?? ''
    dataBaseReport.general.resume.pais2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.PAIS ?? ''
  }
  dataBaseReport = mapperGarantes(dataBaseReport, data)
  return dataBaseReport
}

const mapperGarantes = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.GARANTES?.GARANTE) {
    dataBaseReport.general.resume.nombre3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.GARANTES.GARANTE.DENOMINACION ?? ''
    dataBaseReport.general.resume.domicilio3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.GARANTES.GARANTE.DOMICILIO ?? ''
    dataBaseReport.general.resume.localidad3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.GARANTES.GARANTE.LOCALIDAD ?? ''
    dataBaseReport.general.resume.provincia3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.GARANTES.GARANTE.PROVINCIA ?? ''
    dataBaseReport.general.resume.codigopostal3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.GARANTES.GARANTE.CODPOSTAL ?? ''
    dataBaseReport.general.resume.pais3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.GARANTES.GARANTE.PAIS ?? ''
  }
  return dataBaseReport
}

const mapperDiasMedia = (dataBaseReport, data): any => {
  dataBaseReport.general.resume.periodomediopago = data.informeCreica.CREICA.DIASMEDIAPAGO.PDOMEDIOPAGO ?? ''
  dataBaseReport.general.resume.periodomediocobro = data.informeCreica.CREICA.DIASMEDIAPAGO.PDOMEDIOCOBRO ?? ''
  dataBaseReport.general.resume.deudores = data.informeCreica.CREICA.DIASMEDIAPAGO.DEUDORESDIAS ?? ''
  return dataBaseReport
}

const mapperSummary = (dataBaseReport, data): any => {
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

const mapperEmpresaAnterior = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAANTERIOR) {
    dataBaseReport.general.previousCompany.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIOR.NOMBRE ?? ''
    dataBaseReport.general.previousCompany.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIOR.COMENTARIOS ?? ''
    dataBaseReport.general.previousCompany.bolsa = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIOR.BOLSAS.BOLSA ?? ''
  }
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAANTERIORCOMERCIO) {
    dataBaseReport.general.previousCompanyTrading.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIORCOMERCIO.NOMBRE ?? ''
    dataBaseReport.general.previousCompanyTrading.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIORCOMERCIO.COMENTARIOS ?? ''
    dataBaseReport.general.previousCompanyTrading.bolsa = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIORCOMERCIO.BOLSAS.BOLSA ?? ''
  }
  return dataBaseReport
}

const mapperEmpresasRelacionadas = (dataBaseReport, data): any => {
  dataBaseReport.general.companiesRelated.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.DENOMINACION ?? ''
  dataBaseReport.general.companiesRelated.tiporelacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.TIPRELACION ?? ''
  dataBaseReport.general.companiesRelated.numeroidentificacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.NUMIDENTIFICACION ?? ''
  dataBaseReport.general.companiesRelated.tipoidentificacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.TIPOIDENTIFICACION ?? ''
  dataBaseReport.general.companiesRelated.domicilio = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.DOMICILIO ?? ''
  dataBaseReport.general.companiesRelated.localidad = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.LOCALIDAD ?? ''
  dataBaseReport.general.companiesRelated.provincia = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.PROVINCIA ?? ''
  dataBaseReport.general.companiesRelated.codigopostal = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.CODPOSTAL ?? ''
  dataBaseReport.general.companiesRelated.pais = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.PAIS ?? ''
  dataBaseReport.general.companiesRelated.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.COMENTARIOS ?? ''
  dataBaseReport.general.companiesRelated.bolsa = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.BOLSAS.BOLSA ?? ''
  return dataBaseReport
}

const mapperdirectivos = (dataBaseReport, data): any => {
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

const mapperIdentities = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR) {
    dataBaseReport = mapperIdentificacion(dataBaseReport, data)
    dataBaseReport = mapperIdentificacionOtros(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES) {
    if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL) {
      dataBaseReport = mapperDomicilio(dataBaseReport, data)
    }
    dataBaseReport = mapperEmpresaAnterior(dataBaseReport, data)
    if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESASRELACIONADAS) {
      dataBaseReport = mapperEmpresasRelacionadas(dataBaseReport, data)
    }
    if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.DIRECTIVOS) {
      dataBaseReport = mapperdirectivos(dataBaseReport, data)
    }
  }
  return dataBaseReport
}

const mapperExports = (dataBaseReport, data): any => {
  dataBaseReport.general.exports.pais = data.informeCreica.CREICA.EXPORTACIONESIMPORTACIONES.EXPORTACIONIMPORTACION.PAIS ?? ''
  dataBaseReport.general.exports.porcentaje = data.informeCreica.CREICA.EXPORTACIONESIMPORTACIONES.EXPORTACIONIMPORTACION.PCTEXPIMP ?? ''
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
  return mapperScoringAtomic(dataBaseReport, data)
}

const mapperScoringAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.scoring.puntosligados = data.informeCreica.CREICA.SCORING.PUNTOSLIGADOS ?? ''
  dataBaseReport.general.scoring.codigovidaempresa = data.informeCreica.CREICA.SCORING.CODVIDAEMPRESA ?? ''
  dataBaseReport.general.scoring.anoconstitucionestimado = data.informeCreica.CREICA.SCORING.ANOCONSTITUCIONESTIMADO ?? ''
  dataBaseReport.general.scoring.ventasestimadas = data.informeCreica.CREICA.SCORING.VENTASESTIMADAS ?? ''
  dataBaseReport.general.scoring.fechabalance = data.informeCreica.CREICA.SCORING.FECBALANCE ?? ''
  dataBaseReport.general.scoring.importeefectospagados = data.informeCreica.CREICA.SCORING.IMPEFECTOSPAGADOS ?? ''
  return dataBaseReport
}

const mapperProtestDemands = (dataBaseReport, data): any => {
  dataBaseReport.general.protestsDemandsEUDBP.codigoincidencia = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.CODINCIDENCIA ?? ''
  dataBaseReport.general.protestsDemandsEUDBP.tipoincidencia = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.TIPINCIDENCIA ?? ''
  dataBaseReport.general.protestsDemandsEUDBP.fechaincidencia = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.FECINCIDENCIA ?? ''
  dataBaseReport.general.protestsDemandsEUDBP.numeroincidencias = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.NUMINCIDENCIAS ?? ''
  dataBaseReport.general.protestsDemandsEUDBP.importeIncidencias = data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.IMPINCIDENCIAS ?? ''
  return dataBaseReport
}

const mapperDefaultsAsNef = (dataBaseReport, data): any => {
  dataBaseReport.general.defaultsAsnef.nombrerazonsocial = data.informeCreica.CREICA.IMPAGOSASNEF.NOMRAZONSOCIAL ?? ''
  dataBaseReport.general.defaultsAsnef.identificacionpersona = data.informeCreica.CREICA.IMPAGOSASNEF.IDENTIFICADORPERSONA ?? ''
  dataBaseReport.general.defaultsAsnef.fechaalta = data.informeCreica.CREICA.IMPAGOSASNEF.FECALTA ?? ''
  dataBaseReport.general.defaultsAsnef.fechaultimaactualizacion = data.informeCreica.CREICA.IMPAGOSASNEF.FECULTACTUALIZACION ?? ''
  dataBaseReport.general.defaultsAsnef.fechaultimaconsulta = data.informeCreica.CREICA.IMPAGOSASNEF.FECULTCONSULTA ?? ''
  dataBaseReport.general.defaultsAsnef.entidadultimaconsulta = data.informeCreica.CREICA.IMPAGOSASNEF.ENTIDADULTCONSULTA ?? ''
  dataBaseReport.general.defaultsAsnef.numoperaciones = data.informeCreica.CREICA.IMPAGOSASNEF.NUMOPERACIONES ?? ''
  dataBaseReport.general.defaultsAsnef.importeoperaciones = data.informeCreica.CREICA.IMPAGOSASNEF.IMPOPERACIONES ?? ''
  dataBaseReport.general.defaultsAsnef.importemensualcuotas = data.informeCreica.CREICA.IMPAGOSASNEF.IMPMENSUALCUOTAS ?? ''
  dataBaseReport.general.defaultsAsnef.importependiente = data.informeCreica.CREICA.IMPAGOSASNEF.IMPPENDIENTE ?? ''
  dataBaseReport.general.defaultsAsnef.numoperacionesincidencias = data.informeCreica.CREICA.IMPAGOSASNEF.NUMOPERACIONESINCIDENCIAS ?? ''
  dataBaseReport.general.defaultsAsnef.numcuotasimpagadas = data.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTASIMPAGADAS ?? ''
  dataBaseReport.general.defaultsAsnef.importeimpagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPIMPAGADO ?? ''
  return mapperDefaultsAsNefAtomic(dataBaseReport, data)
}

const mapperDefaultsAsNefAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.defaultsAsnef.peorsituacion = data.informeCreica.CREICA.IMPAGOSASNEF.PEORSIT ?? ''
  dataBaseReport.general.defaultsAsnef.fechapeorsituacion = data.informeCreica.CREICA.IMPAGOSASNEF.FECPEORSIT ?? ''
  dataBaseReport.general.defaultsAsnef.importemaximopagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPMAXIMPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.fechaimpmaximopagado = data.informeCreica.CREICA.IMPAGOSASNEF.FECIMPMAXIMPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.codigooperacion = data.informeCreica.CREICA.IMPAGOSASNEF.CODOPERACION ?? ''
  dataBaseReport.general.defaultsAsnef.identificacionpersona = data.informeCreica.CREICA.IMPAGOSASNEF.IDENTIFICACIONPERSONA ?? ''
  dataBaseReport.general.defaultsAsnef.fechaalta = data.informeCreica.CREICA.IMPAGOSASNEF.FECALTA ?? ''
  dataBaseReport.general.defaultsAsnef.entidadcedente = data.informeCreica.CREICA.IMPAGOSASNEF.ENTIDADCEDENTE ?? ''
  dataBaseReport.general.defaultsAsnef.producto = data.informeCreica.CREICA.IMPAGOSASNEF.PRODUCTO ?? ''
  dataBaseReport.general.defaultsAsnef.naturaleza = data.informeCreica.CREICA.IMPAGOSASNEF.NATURALEZA ?? ''
  dataBaseReport.general.defaultsAsnef.situacion = data.informeCreica.CREICA.IMPAGOSASNEF.SITUACION ?? ''
  dataBaseReport.general.defaultsAsnef.importepagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPIMPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.fechainicio = data.informeCreica.CREICA.IMPAGOSASNEF.FECINICIO ?? ''
  return mapperDefaultsAsNefAtomicBis(dataBaseReport, data)
}

const mapperDefaultsAsNefAtomicBis = (dataBaseReport, data): any => {
  dataBaseReport.general.defaultsAsnef.fechafinal = data.informeCreica.CREICA.IMPAGOSASNEF.FECFINAL ?? ''
  dataBaseReport.general.defaultsAsnef.numcuotas = data.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTAS ?? ''
  dataBaseReport.general.defaultsAsnef.importecuotas = data.informeCreica.CREICA.IMPAGOSASNEF.IMPCUOTAS ?? ''
  dataBaseReport.general.defaultsAsnef.importependiente = data.informeCreica.CREICA.IMPAGOSASNEF.IMPPENDIENTE ?? ''
  dataBaseReport.general.defaultsAsnef.importepagado = data.informeCreica.CREICA.IMPAGOSASNEF.IMPPAGADO ?? ''
  dataBaseReport.general.defaultsAsnef.numcuotasimpagadas = data.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTASIMPAGADAS ?? ''
  dataBaseReport.general.defaultsAsnef.fechaprimervencimiento = data.informeCreica.CREICA.IMPAGOSASNEF.FECPRIMERVENCIMIENTO ?? ''
  dataBaseReport.general.defaultsAsnef.fechaultimovencimiento = data.informeCreica.CREICA.IMPAGOSASNEF.FECULTVENCIMIENTO ?? ''
  return dataBaseReport
}

const mapperIncidentsAsNef = (dataBaseReport, data): any => {
  dataBaseReport.general.incidentsAsnef.reclamacion = data.informeCreica.CREICA.INCIDENCIASASNEF.RECLAORGPUBLICOS ?? ''
  dataBaseReport.general.incidentsAsnef.importereclamaciones = data.informeCreica.CREICA.INCIDENCIASASNEF.IMPTOTRECLA ?? ''
  dataBaseReport.general.incidentsAsnef.incidenciasjudiciales = data.informeCreica.CREICA.INCIDENCIASASNEF.INCIDENCIASJUDICIALES ?? ''
  dataBaseReport.general.incidentsAsnef.importeincidencias = data.informeCreica.CREICA.INCIDENCIASASNEF.IMPTOTINCIDENCIASJUD ?? ''
  return dataBaseReport
}

const mapperNonPayments = (dataBaseReport, data): any => {
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

const mapperDemandas = (dataBaseReport, data): any => {
  dataBaseReport.general.demands.codigo = data.informeCreica.CREICA.DEMANDAS.DEMANDA.CODIGO ?? ''
  dataBaseReport.general.demands.fechademanda = data.informeCreica.CREICA.DEMANDAS.DEMANDA.FECDEMANDA ?? ''
  dataBaseReport.general.demands.codigodemanda = data.informeCreica.CREICA.DEMANDAS.DEMANDA.CODIGODEMANDA ?? ''
  dataBaseReport.general.demands.importedemanda = data.informeCreica.CREICA.DEMANDAS.DEMANDA.IMPDEMANDA ?? ''
  dataBaseReport.general.demands.demandante = data.informeCreica.CREICA.DEMANDAS.DEMANDA.DEMANDANTE ?? ''
  return dataBaseReport
}

const mapperBank = (dataBaseReport, data): any => {
  dataBaseReport.general.bankEUDBP.nombre = data.informeCreica.CREICA.BANCOS.BANCO.DENOMINACION ?? ''
  dataBaseReport.general.bankEUDBP.domicilio = data.informeCreica.CREICA.BANCOS.BANCO.DOMICILIO ?? ''
  dataBaseReport.general.bankEUDBP.localidad = data.informeCreica.CREICA.BANCOS.BANCO.LOCALIDAD ?? ''
  dataBaseReport.general.bankEUDBP.provincia = data.informeCreica.CREICA.BANCOS.BANCO.PROVINCIA ?? ''
  dataBaseReport.general.bankEUDBP.codigopostal = data.informeCreica.CREICA.BANCOS.BANCO.CODPOSTAL ?? ''
  dataBaseReport.general.bankEUDBP.pais = data.informeCreica.CREICA.BANCOS.BANCO.PAIS ?? ''
  dataBaseReport.general.bankEUDBP.fechaapertura = data.informeCreica.CREICA.BANCOS.BANCO.FECAPERTURA ?? ''
  dataBaseReport.general.bankEUDBP.credito = data.informeCreica.CREICA.BANCOS.BANCO.CREDITO ?? ''
  dataBaseReport.general.bankEUDBP.saldo = data.informeCreica.CREICA.BANCOS.BANCO.SALDO ?? ''
  dataBaseReport.general.bankEUDBP.fechasaldo = data.informeCreica.CREICA.BANCOS.BANCO.FECSALDO ?? ''
  dataBaseReport.general.bankEUDBP.limitedescubrimiento = data.informeCreica.CREICA.BANCOS.BANCO.LIMITEDESCUBIERTO ?? ''
  dataBaseReport.general.bankEUDBP.creditogarantizado = data.informeCreica.CREICA.BANCOS.BANCO.CREDITOGARANTIZADO ?? ''
  return dataBaseReport
}

const mapperRating = (dataBaseReport, data): any => {
  dataBaseReport.general.ratingDBDP.rating = data.informeCreica.CREICA.RATINGS
  dataBaseReport.general.ratingDBDP.fechacambiorating = data.informeCreica.CREICA.RATINGS.FECCAMBIORATING ?? ''
  dataBaseReport.general.ratingDBDP.importerecomendado = data.informeCreica.CREICA.RATINGS.IMPRECOMENDADO ?? ''
  dataBaseReport.general.ratingDBDP.importemediosolicitado = data.informeCreica.CREICA.RATINGS.IMPMEDIOSOLICITADO ?? ''
  dataBaseReport.general.ratingDBDP.ratinganterior = data.informeCreica.CREICA.RATINGS.RATINGANTERIOR ?? ''
  dataBaseReport.general.ratingDBDP.conceptocomercial = data.informeCreica.CREICA.RATINGS.CONCEPTOCOMERCIAL ?? ''
  dataBaseReport.general.ratingDBDP.evaluacionporcentaje = data.informeCreica.CREICA.RATINGS.EVALUACIONPORCENTAJE ?? ''
  dataBaseReport.general.ratingDBDP.limitecredito = data.informeCreica.CREICA.RATINGS.LIMITECREDITO ?? ''
  dataBaseReport.general.ratingDBDP.riesgotesoreria = data.informeCreica.CREICA.RATINGS.RIESGOTESORERIA ?? ''
  dataBaseReport.general.ratingDBDP.codigoRTE = data.informeCreica.CREICA.RATINGS.CODIGORTE ?? ''
  dataBaseReport.general.ratingDBDP.valorRTE = data.informeCreica.CREICA.RATINGS.VALORRTE ?? ''
  if (data.informeCreica?.CREICA?.RATINGS?.OTROSVALORESRTE) {
    dataBaseReport.general.otherRTE.codigoRTE = data.informeCreica.CREICA.RATINGS.OTROSVALORESRTE.CODIGORTE ?? ''
    dataBaseReport.general.otherRTE.valorRTE = data.informeCreica.CREICA.RATINGS.OTROSVALORESRTE.VALORRTE ?? ''
  }
  return dataBaseReport
}

const mapperObservaciones = (dataBaseReport, data): any => {
  dataBaseReport.general.observations.condicionesadicionales = data.informeCreica.CREICA.OBSERVACIONES.CONDICIONESADICIONALES ?? ''
  dataBaseReport.general.observations.terminosventa = data.informeCreica.CREICA.OBSERVACIONES.TERMINOSVENTA ?? ''
  dataBaseReport.general.observations.procedimientoslegales = data.informeCreica.CREICA.OBSERVACIONES.PROCEDIMIENTOSLEGALES ?? ''
  dataBaseReport.general.observations.comentariogeneral = data.informeCreica.CREICA.OBSERVACIONES.COMENTARIOGENERAL ?? ''
  return dataBaseReport
}

const mapperCreica = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA) {
    dataBaseReport = mapperGeneralData(dataBaseReport, data)
    dataBaseReport.general.datosHost.tipoDocumento = data.informeCreica.CREICA.TIPDOC ?? ''
    if (data.informeCreica?.CREICA?.DATOSHOST) {
      dataBaseReport = mapperDatosHost(dataBaseReport, data)
    }
    dataBaseReport = mapperIdentities(dataBaseReport, data)
    if (data.informeCreica?.CREICA?.RESUMEN) {
      dataBaseReport = mapperResumen(dataBaseReport, data)
    }
    if (data.informeCreica?.CREICA?.DIASMEDIAPAGO) {
      dataBaseReport = mapperDiasMedia(dataBaseReport, data)
    }
  }
  return mapperCreicaAtomic(dataBaseReport, data)
}

const mapperCreicaAtomic = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMENINFORMACIONFINANCIERA?.DATO) {
    dataBaseReport = mapperSummary(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.EXPORTACIONESIMPORTACIONES?.EXPORTACIONIMPORTACION) {
    dataBaseReport = mapperExports(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.SCORING) {
    dataBaseReport = mapperScoring(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.PROTESTOSDEMANDASIMPAGOS?.PROTESTODEMANDAIMPAGO) {
    dataBaseReport = mapperProtestDemands(dataBaseReport, data)
  }
  return mapperCreicaAtomicBis(dataBaseReport, data)
}

const mapperCreicaAtomicBis = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IMPAGOSASNEF) {
    dataBaseReport = mapperDefaultsAsNef(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.INCIDENCIASASNEF) {
    dataBaseReport = mapperIncidentsAsNef(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.IMPAGOS?.IMPAGO) {
    dataBaseReport = mapperNonPayments(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.DEMANDAS?.DEMANDA) {
    dataBaseReport = mapperDemandas(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.BANCOS?.BANCO) {
    dataBaseReport = mapperBank(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.RATINGS) {
    dataBaseReport = mapperRating(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.OBSERVACIONES) {
    dataBaseReport = mapperObservaciones(dataBaseReport, data)
  }
  return dataBaseReport
}

export const mapperNODB = (dataInforme): any => {
  return mapperCreica(dataBaseReport, dataInforme[0])
}
