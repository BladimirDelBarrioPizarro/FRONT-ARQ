import { dataBaseReport } from './index'

const mapperGenralData = (dataBaseReport, data): any => {
  dataBaseReport.general.generalData.remitente = data.informeCreica.CREICA.REMITENTE ?? ''
  dataBaseReport.general.generalData.nombredocumento = data.informeCreica.CREICA.NOMDOC ?? ''
  dataBaseReport.general.generalData.tipodocumento = data.informeCreica.CREICA.TIPDOC ?? ''
  dataBaseReport.general.generalData.fechamensaje = data.informeCreica.CREICA.FECHAMENSAJE ?? ''
  dataBaseReport.general.generalData.fecha = data.informeCreica.CREICA.FEC ?? ''
  dataBaseReport.general.generalData.fechaultimabusqueda = data.informeCreica.CREICA.FECULTBUSQU ?? ''
  dataBaseReport.general.generalData.nombrefichero = data.informeCreica.CREICA.NOM ?? ''
  dataBaseReport.general.generalData.moneda = data.informeCreica.CREICA.MONEDA ?? ''
  return dataBaseReport
}
const mapperDatosHost = (dataBaseReport, data): any => {
  dataBaseReport.general.generalData.numerodocumento = data.informeCreica.CREICA?.DATOSHOST?.TIPODOCUMENTO ?? ''
  if (String(data.informeCreica.CREICA?.DATOSHOST?.TIPODOCUMENTO) === '52') {
    dataBaseReport.general.ajtEUDBP.ajtmayorgravedad = data.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
    dataBaseReport.general.ajtEUDBP.ajtmayorgravedadbis = data.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD2 ?? ''
  } else {
    dataBaseReport.general.generalData.numeropeticion = data.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST ?? ''
    if (data.informeCreica.CREICA?.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION) {
      dataBaseReport.general.generalData.codigoempresa = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODIGOEMPRESA ?? ''
    }
  }
  if (data.informeCreica?.CREICA?.DATOSHOST?.TIPODOCUMENTO === 52 || data.informeCreica?.CREICA?.DATOSHOST?.TIPODOCUMENTO === '52') {
  }
  return dataBaseReport
}

const mapperDGXOtrosDatos = (dataBaseReport, data): any => {
  if (data.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.TLCM_INFO) {
    dataBaseReport.general.otherData.actividades = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.TLCM_INFO.ACTIVIDADES ?? ''
  }
  if (data.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.TLCM_INFO?.TLCM_ENTR) {
    dataBaseReport.general.otherData.telefono = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.TLCM_INFO.TLCM_ENTR.TEL_NBR ?? ''
  }
  if (data.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.TLCM_INFO) {
    dataBaseReport.general.otherData.telefax = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.TLCM_INFO.TELEFAX ?? ''
    dataBaseReport.general.otherData.telex = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.TLCM_INFO.TELEX ?? ''
  }
  return dataBaseReport
}

const mapperDGX = (dataBaseReport, data): any => {
  if (data.informeCesceDgx.DGX?.CREDITMSGSRSV2?.DATATRNRS) {
    dataBaseReport.general.identificationFRPTIT.referencia = data.informeCesceDgx.DGX?.CREDITMSGSRSV2?.DATATRNRS?.TRNUID ?? ''
  }
  if (data.informeCesceDgx.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL) {
    dataBaseReport.general.identificationFRPTIT.codigoempresa = data.informeCesceDgx.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.CODIGOEMPRESA ?? ''
  }
  if (data.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL.BUS_NME?.NME_ENTR?.NME_ENTR_VW?.NME_TEXT) {
    dataBaseReport.general.identificationFRPTIT.denominacion = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_NME.NME_ENTR.NME_ENTR_VW.NME_TEXT ?? ''
  }
  if (data.DGX?.CREDITMSGSRSV2?.DATATRNRS?.DATARS?.EUBDP?.GSRL?.BUS_ADR?.ADR_ENTR?.ADR_ENTR_VW?.ADR_LINE.TEXT) {
    dataBaseReport.general.identificationFRPTIT.domicilio = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.ADR_LINE.TEXT ?? ''
    dataBaseReport.general.identificationFRPTIT.localidad = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.MINR_TWN_NME ?? ''
    dataBaseReport.general.identificationFRPTIT.provincia = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.CNTY ?? ''
    dataBaseReport.general.identificationFRPTIT.codigopostal = data.DGX.CREDITMSGSRSV2.DATATRNRS.DATARS.EUBDP.GSRL.BUS_ADR.ADR_ENTR.ADR_ENTR_VW.POST_CODE ?? ''
  }
  dataBaseReport = mapperDGXOtrosDatos(dataBaseReport, data)
  return dataBaseReport
}

const mapperIdentificacion = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR) {
    dataBaseReport.general.identificationFRPTIT.reffuente = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.REFERENCIAFUENTE ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.IDEN) {
    dataBaseReport.general.taxcodesEUDBP.codigo = data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.IDEN?.CODIDEN ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.ACTNACE) {
    dataBaseReport.general.naceCnae.codigo = data.informeCreica.CREICA.IDENTIFICACION.DEUDOR.ACTNACE.CODACTNACE ?? ''
  }
  if (data.informeCreica?.CREICA?.IDENTIFICACION?.NOMBRESCOMERCIALES[0]) {
    dataBaseReport.general.comercialNames.nombre = data.informeCreica?.CREICA?.IDENTIFICACION?.NOMBRESCOMERCIALES[0]?.NOMBRECOMERCIAL ?? ''
  }
  return dataBaseReport
}

const mapperPrimaryResidence = (dataBaseReport, data): any => {
  if (data.informeCreica.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.DIRECCION?.DOMICILIO) {
    data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.DOMICILIO.map(element => {
      if (element.DIRECCION) {
        dataBaseReport.general.primaryResidence.domicilio = element.DIRECCION.DOMICILIO ?? ''
        dataBaseReport.general.primaryResidence.localidad = element.DIRECCION.LOCALIDAD ?? ''
        dataBaseReport.general.primaryResidence.provincia = element.DIRECCION.PROVINCIA ?? ''
        dataBaseReport.general.primaryResidence.codigopostal = element.DIRECCION.CODPOSTAL ?? ''
        dataBaseReport.general.primaryResidence.pais = element.DIRECCION.PAIS ?? ''
        dataBaseReport.general.primaryResidence.comentarios = element.DIRECCION.COMENTARIOS ?? ''
      }
    })
  }
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.BOLSAS[0]) {
    dataBaseReport.general.primaryResidence.bolsa = data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.BOLSAS[0]?.BOLSA ?? ''
    dataBaseReport.general.previousCompany.bolsa = data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.BOLSAS[0]?.BOLSA ?? ''
    dataBaseReport.general.previousCompanyTrading.bolsa = data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.BOLSAS[0]?.BOLSA ?? ''
  }
  return dataBaseReport
}

const mapperResumen = (dataBaseReport, data): any => {
  dataBaseReport.general.resume.formajuridica = data.informeCreica.CREICA.RESUMEN.FORMAJURIDICA ?? ''
  dataBaseReport.general.resume.anteriorformajuridica = data.informeCreica.CREICA.RESUMEN.ANTERIORFORMAJURIDICA ?? ''
  dataBaseReport.general.resume.descripcionanteriorformajuridica = data.informeCreica.CREICA.RESUMEN.DESFORMAJURIDICA ?? ''
  dataBaseReport.general.resume.descripcionanteriorformajuridica = data.informeCreica.CREICA.RESUMEN.DESANTERIORFORMAJURIDICA ?? ''
  dataBaseReport.general.resume.fechaconstitucion = data.informeCreica.CREICA.RESUMEN.FECCONSTITUCION ?? ''
  dataBaseReport.general.resume.fechaformajuridica = data.informeCreica.CREICA.RESUMEN.FECFORMAJURIDICAACT ?? ''
  dataBaseReport.general.resume.fechacambiocapitalnominal = data.informeCreica.CREICA.RESUMEN.FECCAMBIOCAPITALNOMINAL ?? ''
  dataBaseReport.general.resume.fechadatosresumen = data.informeCreica.CREICA.RESUMEN.FECDATOSRESUMEN ?? ''
  dataBaseReport.general.resume.estadoactual = data.informeCreica.CREICA.RESUMEN.ESTADOACTUAL ?? ''
  dataBaseReport.general.resume.fechaestadoactual = data.informeCreica.CREICA.RESUMEN.FECESTADOACTUAL ?? ''
  dataBaseReport.general.resume.capitalnominal = data.informeCreica.CREICA.RESUMEN.CAPITALNOMINAL ?? ''
  dataBaseReport.general.resume.capitaldesembolsado = data.informeCreica.CREICA.RESUMEN.CAPITALDESEMBOLSADO ?? ''
  dataBaseReport.general.resume.ventas = data.informeCreica.CREICA.RESUMEN.VENTAS ?? ''
  dataBaseReport.general.resume.resultadoneto = data.informeCreica.CREICA.RESUMEN.RESULTADONETO ?? ''
  return mapperResumenAtomic(dataBaseReport, data)
}

const mapperResumenAtomic = (dataBaseReport, data): any => {
  dataBaseReport.general.resume.fondospropios = data.informeCreica.CREICA.RESUMEN.FONDOSPROPIOS ?? ''
  dataBaseReport.general.resume.capitalcirculante = data.informeCreica.CREICA.RESUMEN.CAPITALCIRCULANTE ?? ''
  dataBaseReport.general.resume.activosfijos = data.informeCreica.CREICA.RESUMEN.ACTIVOSFIJOS ?? ''
  dataBaseReport.general.resume.existencias = data.informeCreica.CREICA.RESUMEN.EXISTENCIAS ?? ''
  dataBaseReport.general.resume.fuentedatoseconomicos = data.informeCreica.CREICA.RESUMEN.FUENTEDATOSECONOMICOS ?? ''
  dataBaseReport.general.resume.capitalnominalanterior = data.informeCreica.CREICA.RESUMEN.CAPITALNOMINALANTERIOR ?? ''
  dataBaseReport.general.resume.numeroempleados = data.informeCreica.CREICA.RESUMEN.NUMEMPLEADOS ?? ''
  dataBaseReport.general.resume.comentarios = data.informeCreica?.CREICA?.RESUMEN?.COMENTARIOS ?? ''
  dataBaseReport.general.resume.periodomediopago = data.informeCreica.CREICA.DIASMEDIAPAGOPDOMEDIOPAGO ?? ''
  dataBaseReport.general.resume.periodomediocobro = data.informeCreica.CREICA.DIASMEDIAPAGOPDOMEDIOCOBRO ?? ''
  dataBaseReport.general.resume.deudores = data.informeCreica.CREICA.DIASMEDIAPAGODEUDORESDIAS ?? ''
  return dataBaseReport
}

const mapperResumenEmpresasVincIden = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE?.IDEN1) {
    dataBaseReport.general.resume.porcentajeparticipacion2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN1.TIPIDEN ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion3 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN1.CODIDEN ?? ''
  }
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE?.IDEN2) {
    dataBaseReport.general.resume.porcentajeparticipacion4 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN2.TIPIDEN ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion5 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN2.CODIDEN ?? ''
  }
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE?.IDEN3) {
    dataBaseReport.general.resume.porcentajeparticipacion6 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN3.TIPIDEN ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion7 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN3.CODIDEN ?? ''
  }
  return mapperResumenEmpresasVincIdenAtomic(dataBaseReport, data)
}

const mapperResumenEmpresasVincIdenAtomic = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE?.IDEN4) {
    dataBaseReport.general.resume.porcentajeparticipacion8 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN4.TIPIDEN ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion9 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN4.CODIDEN ?? ''
  }
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE?.IDEN5) {
    dataBaseReport.general.resume.porcentajeparticipacion10 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN5.TIPIDEN ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion11 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN5.CODIDEN ?? ''
  }
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE?.IDEN6) {
    dataBaseReport.general.resume.porcentajeparticipacion12 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN6.TIPIDEN ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion13 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.IDEN6.CODIDEN ?? ''
  }
  return dataBaseReport
}

const mapperResumenEmpresasVincUltCia = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.ULTIMACOMPANIAPADRE) {
    dataBaseReport.general.resume.nombre2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.DENOMINACION ?? ''
    dataBaseReport.general.resume.domicilio2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.DOMICILIO ?? ''
    dataBaseReport.general.resume.localidad2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.LOCALIDAD ?? ''
    dataBaseReport.general.resume.provincia2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.PROVINCIA ?? ''
    dataBaseReport.general.resume.codigopostal2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.CODPOSTAL ?? ''
    dataBaseReport.general.resume.pais2 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.ULTIMACOMPANIAPADRE.PAIS ?? ''
  }
  return dataBaseReport
}

const mapperResumenEmpresasVincGarantes = (dataBaseReport, data): any => {
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

const mapperResumenEmpresasVinc = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.RESUMEN?.EMPRESASVINCULADAS?.COMPANIASPADRE) {
    dataBaseReport.general.resume.nombre1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.DENOMINACION ?? ''
    dataBaseReport.general.resume.domicilio1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.DOMICILIO ?? ''
    dataBaseReport.general.resume.localidad1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.LOCALIDAD ?? ''
    dataBaseReport.general.resume.provincia1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.PROVINCIA ?? ''
    dataBaseReport.general.resume.codigopostal1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.CODPOSTAL ?? ''
    dataBaseReport.general.resume.pais1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.PAIS ?? ''
    dataBaseReport.general.resume.porcentajeparticipacion1 = data.informeCreica.CREICA.RESUMEN.EMPRESASVINCULADAS.COMPANIASPADRE.PCTPARTICIPACION ?? ''
  }
  return dataBaseReport
}

const mapperResumenInfoFinanciera = (dataBaseReport, data): any => {
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

const mapperNombresDireccionesEmpAnterior = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAANTERIOR) {
    dataBaseReport.general.previousCompany.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIOR.NOMBRE ?? ''
    dataBaseReport.general.previousCompany.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIOR.COMENTARIOS ?? ''
  }
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESAANTERIORCOMERCIO) {
    dataBaseReport.general.previousCompanyTrading.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIORCOMERCIO.NOMBRE ?? ''
    dataBaseReport.general.previousCompanyTrading.comentarios = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAANTERIORCOMERCIO.COMENTARIOS ?? ''
  }
  return dataBaseReport
}

const mapperNombresDireccionesEmpRelacionadas = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.EMPRESASRELACIONADAS) {
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
    data.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESASRELACIONADAS.BOLSAS.map(element => {
      dataBaseReport.general.companiesRelated.bolsa = element.BOLSAS ?? ''
    })
  }
  return dataBaseReport
}

const mapperNombresDireccionesDirectivos = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES?.DIRECTIVOS) {
    dataBaseReport.general.managers.nombre = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.DENOMINACION ?? ''
    dataBaseReport.general.managers.numeroidentificacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.NUMIDENTIFICACION ?? ''
    dataBaseReport.general.managers.cargo = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.CARGO ?? ''
    dataBaseReport.general.managers.domicilio = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.DOMICILIO ?? ''
    dataBaseReport.general.managers.localidad = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.LOCALIDAD ?? ''
    dataBaseReport.general.managers.provincia = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.PROVINCIA ?? ''
    dataBaseReport.general.managers.codigopostal = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.CODPOSTAL ?? ''
    dataBaseReport.general.managers.pais = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.PAIS ?? ''
    dataBaseReport.general.managers.porcentajeparticipacion = data.informeCreica.CREICA.NOMBRESYDIRECCIONES.DIRECTIVOS.PCTPARTICIPACION ?? ''
  }
  return dataBaseReport
}

const mapperNombresDirecciones = (dataBaseReport, data): any => {
  dataBaseReport = mapperNombresDireccionesEmpAnterior(dataBaseReport, data)
  dataBaseReport = mapperNombresDireccionesEmpRelacionadas(dataBaseReport, data)
  return mapperNombresDireccionesDirectivos(dataBaseReport, data)
}

const mapperExport = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.EXPORTACIONESIMPORTACIONES.EXPORTACIONIMPORTACION.map(element => {
    if (String(element.TIPEXPIMP === '27')) {
      dataBaseReport.general.exports.pais = element.PAIS ?? ''
      dataBaseReport.general.exports.porcentaje = element.PCTEXPIMP ?? ''
    }
  })
  return dataBaseReport
}

const mapperScoring = (dataBaseReport, data): any => {
  dataBaseReport.general.scoring.estadopeticion = data.informeCreica.CREICA.SCORING.ESTADOPETICION ?? ''
  dataBaseReport.general.scoring.ventas = data.informeCreica.CREICA.SCORING.VENTAS ?? ''
  dataBaseReport.general.scoring.ventas = data.informeCreica.CREICA.SCORING.RESULTADO ?? ''
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

const mapperProtestosDemandas = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.PROTESTOSDEMANDASIMPAGOS.PROTESTODEMANDAIMPAGO.map(element => {
    dataBaseReport.general.protestsDemandsEUDBP.codigoincidencia = element.CODINCIDENCIA ?? ''
    dataBaseReport.general.protestsDemandsEUDBP.tipoincidencia = element.TIPINCIDENCIA ?? ''
    dataBaseReport.general.protestsDemandsEUDBP.fechaincidencia = element.FECINCIDENCIA ?? ''
    dataBaseReport.general.protestsDemandsEUDBP.importeIncidencias = element.IMPINCIDENCIAS ?? ''
  })
  return dataBaseReport
}

const mapperImpagosAtomic = (dataBaseReport, element): any => {
  dataBaseReport.general.nonPaymentsAsnef.numcuotasimpagadas = element.NUMCUOTASIMPAGADAS ?? ''
  dataBaseReport.general.nonPaymentsAsnef.importeimpagado = element.IMPIMPAGADO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.peorsituacion = element.PEORSIT ?? ''
  dataBaseReport.general.nonPaymentsAsnef.fechapeorsituacion = element.FECPEORSIT ?? ''
  dataBaseReport.general.nonPaymentsAsnef.importemaximopagado = element.IMPMAXIMPAGADO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.fechaimpmaximopagado = element.FECIMPMAXIMPAGADO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.codigooperacion = element.CODOPERACION ?? ''
  dataBaseReport.general.nonPaymentsAsnef.identificacionpersona = element.IDENTIFICACIONPERSONA ?? ''
  dataBaseReport.general.nonPaymentsAsnef.fechaalta = element.FECALTA ?? ''
  dataBaseReport.general.nonPaymentsAsnef.entidadcedente = element.ENTIDADCEDENTE ?? ''
  dataBaseReport.general.nonPaymentsAsnef.producto = element.PRODUCTO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.naturaleza = element.NATURALEZA ?? ''
  dataBaseReport.general.nonPaymentsAsnef.situacion = element.SITUACION ?? ''
  dataBaseReport.general.nonPaymentsAsnef.importeimpagado = element.IMPIMPAGADO ?? ''
  return mapperImpagosAtomicBis(dataBaseReport, element)
}

const mapperImpagosAtomicBis = (dataBaseReport, element): any => {
  dataBaseReport.general.nonPaymentsAsnef.fechainicio = element.FECINICIO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.fechafinal = element.FECFINAL ?? ''
  dataBaseReport.general.nonPaymentsAsnef.numcuotas = element.NUMCUOTAS ?? ''
  dataBaseReport.general.nonPaymentsAsnef.importecuotas = element.IMPCUOTAS ?? ''
  dataBaseReport.general.nonPaymentsAsnef.importependiente = element.IMPPENDIENTE ?? ''
  dataBaseReport.general.nonPaymentsAsnef.importepagado = element.IMPPAGADO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.numcuotasimpagadas = element.NUMCUOTASIMPAGADAS ?? ''
  dataBaseReport.general.nonPaymentsAsnef.fechaprimervencimiento = element.FECPRIMERVENCIMIENTO ?? ''
  dataBaseReport.general.nonPaymentsAsnef.fechaultimavencimiento = element.FECULTVENCIMIENTO ?? ''
  return dataBaseReport
}

const mapperImpagos = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.IMPAGOS.ASNEF.IMPAGOASNEF.map(element => {
    dataBaseReport.general.nonPaymentsAsnef.nombrerazonsocial = element.NOMRAZONSOCIAL ?? ''
    dataBaseReport.general.nonPaymentsAsnef.identificacionpersona = element.IDENTIFICADORPERSONA ?? ''
    dataBaseReport.general.nonPaymentsAsnef.fechaalta = element.FECALTA ?? ''
    dataBaseReport.general.nonPaymentsAsnef.fechaultimaact = element.FECULTACTUALIZACION ?? ''
    dataBaseReport.general.nonPaymentsAsnef.fechaultimaconsulta = element.FECULTCONSULTA ?? ''
    dataBaseReport.general.nonPaymentsAsnef.entidadultconsulta = element.ENTIDADULTCONSULTA ?? ''
    dataBaseReport.general.nonPaymentsAsnef.numerooperaciones = element.NUMOPERACIONES ?? ''
    dataBaseReport.general.nonPaymentsAsnef.importeoperaciones = element.IMPOPERACIONES ?? ''
    dataBaseReport.general.nonPaymentsAsnef.importemensualcuotas = element.IMPMENSUALCUOTAS ?? ''
    dataBaseReport.general.nonPaymentsAsnef.importependiente = element.IMPPENDIENTE ?? ''
    dataBaseReport.general.nonPaymentsAsnef.numoperacionesincidencias = element.NUMOPERACIONESINCIDENCIAS ?? ''
    dataBaseReport = mapperImpagosAtomic(dataBaseReport, element)
  })
  return dataBaseReport
}

const mapperIncidenciasAsNef = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.INCIDENCIASASNEF.map(element => {
    dataBaseReport.general.incidentsAsnef.reclamacion = element.RECLAORGPUBLICOS ?? ''
    dataBaseReport.general.incidentsAsnef.importereclamaciones = element.IMPTOTRECLA ?? ''
    dataBaseReport.general.incidentsAsnef.incidenciasjudiciales = element.INCIDENCIASJUDICIALES ?? ''
    dataBaseReport.general.incidentsAsnef.importeincidencias = element.IMPTOTINCIDENCIASJUD ?? ''
  })
  return dataBaseReport
}

const mapperNonPayments = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.IMPAGOS.map(element => {
    dataBaseReport.general.nonPayments.fechaefecto = element.FECEFECTO ?? ''
    dataBaseReport.general.nonPayments.importepagado = element.IMPPAGADO ?? ''
    dataBaseReport.general.nonPayments.claveprotesta = element.CLAVEPROTESTA ?? ''
    dataBaseReport.general.nonPayments.librador = element.LIBRADOR ?? ''
    dataBaseReport.general.nonPayments.claveestado = element.CLAVEESTADO ?? ''
    dataBaseReport.general.nonPayments.claveestado = element.CLAVEACEPTADO ?? ''
    dataBaseReport.general.nonPayments.tipodocumento = element.TIPODOCUMENTO ?? ''
    dataBaseReport.general.nonPayments.entidadinformante = element.ENTIDADINFORMANTE ?? ''
    dataBaseReport.general.nonPayments.importepagadoactual = element.IMPORTEPAGADOACTUAL ?? ''
  })
  return dataBaseReport
}

const mapperDemands = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.IMPAGOS[0]) {
    dataBaseReport.general.demands.codigo = data.informeCreica?.CREICA?.IMPAGOS[0].CODIGO ?? ''
    dataBaseReport.general.demands.fechademanda = data.informeCreica?.CREICA?.IMPAGOS[0].FECDEMANDA ?? ''
    dataBaseReport.general.demands.codigodemanda = data.informeCreica?.CREICA?.IMPAGOS[0].CODIGODEMANDA ?? ''
    dataBaseReport.general.demands.importedemanda = data.informeCreica?.CREICA?.IMPAGOS[0].IMPDEMANDA ?? ''
    dataBaseReport.general.demands.demandante = data.informeCreica?.CREICA?.IMPAGOS[0].DEMANDANTE ?? ''
  }
  return dataBaseReport
}

const mapperBancos = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.BANCOS.map(element => {
    if (element.BANCO) {
      dataBaseReport.general.bankEUDBP.nombre = element.BANCO.DENOMINACION ?? ''
      dataBaseReport.general.bankEUDBP.domicilio = element.BANCO.DOMICILIO ?? ''
      dataBaseReport.general.bankEUDBP.localidad = element.BANCO.LOCALIDAD ?? ''
      dataBaseReport.general.bankEUDBP.provincia = element.BANCO.PROVINCIA ?? ''
      dataBaseReport.general.bankEUDBP.codigopostal = element.BANCO.CODPOSTAL ?? ''
      dataBaseReport.general.bankEUDBP.pais = element.BANCO.PAIS ?? ''
      dataBaseReport.general.bankEUDBP.fechaapertura = element.BANCO.FECAPERTURA ?? ''
      dataBaseReport.general.bankEUDBP.credito = element.BANCO.CREDITO ?? ''
      dataBaseReport.general.bankEUDBP.saldo = element.BANCO.SALDO ?? ''
      dataBaseReport.general.bankEUDBP.fechasaldo = element.BANCO.FECSALDO ?? ''
      dataBaseReport.general.bankEUDBP.limitedescubrimiento = element.BANCO.LIMITEDESCUBIERTO ?? ''
      dataBaseReport.general.bankEUDBP.creditogarantizado = element.BANCO.CREDITOGARANTIZADO ?? ''
    }
  })
  return dataBaseReport
}

const mapperRatings = (dataBaseReport, data): any => {
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
  return dataBaseReport
}

const mapperRTE = (dataBaseReport, data): any => {
  data.informeCreica.CREICA.RATINGS.OTROSVALORESRTE.map(element => {
    dataBaseReport.general.otherRTE.codigoRTE = element.CODIGORTE ?? ''
    dataBaseReport.general.otherRTE.valorRTE = element.VALORRTE ?? ''
  })
  return dataBaseReport
}

const mapperObservaciones = (dataBaseReport, data): any => {
  dataBaseReport.general.observations.condicionesadicionales = data.informeCreica.CREICA.OBSERVACIONES.CONDICIONESADICIONALES ?? ''
  dataBaseReport.general.observations.terminosventa = data.informeCreica.CREICA.OBSERVACIONES.TERMINOSVENTA ?? ''
  dataBaseReport.general.observations.procedimientoslegales = data.informeCreica.CREICA.OBSERVACIONES.PROCEDIMIENTOSLEGALES ?? ''
  dataBaseReport.general.observations.comentariogeneral = data.informeCreica.CREICA.OBSERVACIONES.COMENTARIOGENERAL ?? ''
  return dataBaseReport
}

const mapperCreicaInformacion = (dataBaseReport, data): any => {
  if (data.informeCreica.CREICA?.IDENTIFICACION) {
    dataBaseReport = mapperIdentificacion(dataBaseReport, data)
  }
  if (data.informeCreica.CREICA?.NOMBRESYDIRECCIONES) {
    dataBaseReport = mapperPrimaryResidence(dataBaseReport, data)
  }
  if (data.informeCreica.CREICA?.RESUMEN) {
    dataBaseReport = mapperResumen(dataBaseReport, data)
  }
  if (data.informeCreica.CREICA?.RESUMEN) {
    dataBaseReport = mapperResumen(dataBaseReport, data)
    dataBaseReport = mapperResumenEmpresasVinc(dataBaseReport, data)
    dataBaseReport = mapperResumenEmpresasVincIden(dataBaseReport, data)
    dataBaseReport = mapperResumenEmpresasVincUltCia(dataBaseReport, data)
    dataBaseReport = mapperResumenEmpresasVincGarantes(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.RESUMENINFORMACIONFINANCIERA?.DATO) {
    dataBaseReport = mapperResumenInfoFinanciera(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.NOMBRESYDIRECCIONES) {
    dataBaseReport = mapperNombresDirecciones(dataBaseReport, data)
  }
  return dataBaseReport
}

const mapperCreicaEconomicos = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA?.EXPORTACIONESIMPORTACIONES?.EXPORTACIONIMPORTACION) {
    dataBaseReport = mapperExport(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.SCORING) {
    dataBaseReport = mapperScoring(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.PROTESTOSDEMANDASIMPAGOS?.PROTESTODEMANDAIMPAGO) {
    dataBaseReport = mapperProtestosDemandas(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.INCIDENCIASASNEF) {
    dataBaseReport = mapperIncidenciasAsNef(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.IMPAGOS) {
    if (data.informeCreica?.CREICA?.IMPAGOS?.ASNEF?.IMPAGOASNEF) {
      dataBaseReport = mapperImpagos(dataBaseReport, data)
    }
    dataBaseReport = mapperNonPayments(dataBaseReport, data)
    dataBaseReport = mapperDemands(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.BANCOS) {
    dataBaseReport = mapperBancos(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.RATINGS) {
    dataBaseReport = mapperRatings(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.RATINGS?.OTROSVALORESRTE) {
    dataBaseReport = mapperRTE(dataBaseReport, data)
  }
  if (data.informeCreica?.CREICA?.OBSERVACIONES) {
    dataBaseReport = mapperObservaciones(dataBaseReport, data)
  }
  return dataBaseReport
}

const mapperCreica = (dataBaseReport, data): any => {
  if (data.informeCreica?.CREICA) {
    dataBaseReport = mapperGenralData(dataBaseReport, data)
    if (data.informeCreica.CREICA?.DATOSHOST) {
      dataBaseReport = mapperDatosHost(dataBaseReport, data)
    }
    dataBaseReport = mapperCreicaInformacion(dataBaseReport, data)
    dataBaseReport = mapperCreicaEconomicos(dataBaseReport, data)
  }
  return dataBaseReport
}

export const mapperFrPtIt = (dataInforme): any => {
  var result = mapperCreica(dataBaseReport, dataInforme[0])
  if (dataInforme[0].informeCesceDgx?.DGX) {
    result = mapperDGX(result, dataInforme[0])
  }
  return result
}
