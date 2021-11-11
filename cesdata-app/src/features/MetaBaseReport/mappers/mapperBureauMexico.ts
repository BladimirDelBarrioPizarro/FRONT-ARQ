const mapperDatosGenerales = (data, json): any => {
  // DATOS GENERALES
  if (json.informeCreica?.CREICA?.REMITENTE || json.informeCreica?.CREICA?.FEC) {
    const year = json.informeCreica.CREICA.FEC.substring(0, 4)
    const month = json.informeCreica.CREICA.FEC.substring(4, 6)
    const day = json.informeCreica.CREICA.FEC.substring(6, json.informeCreica.CREICA.FEC.length)
    data.general.generalData.agencia = `${json.informeCreica.CREICA.REMITENTE}/${day}-${month}-${year}`
  }
  if (json.informeCreica?.CREICA?.DATOSHOST?.CODEMPRESA) {
    data.general.generalData.codigo = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA
  }
  if (json.informeCreica?.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION?.DENOMINACION) {
    data.general.generalData.razonSocial = json.informeCreica.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
  }
  if (json.informeCreica?.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN) {
    data.general.generalData.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
  }
  if (json.informeCreica?.CREICA?.DATOSHOST?.AJTMAYORGRAVEDAD) {
    data.general.generalData.ajt1 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD
  }
  if (json.informeCreica?.CREICA?.DATOSHOST?.AJTMAYORGRAVEDAD2) {
    data.general.generalData.ajt2 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD2
  }
  return data
}

const mapperInformacionGeneral = (data, json): any => {
  if (json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.FECHACONSULTA) {
    data.general.informationMexico.fechaconsulta = json.informeCreica.CREICA.BURO_MX.DATOSCREDITOS.FECHACONSULTA
  }
  if (json.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.IDEN?.CODIDEN) {
    data.general.informationMexico.rfc = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
  }
  if (json.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION?.DENOMINACION) {
    data.general.informationMexico.nombre = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
  }
  if (json.informeCreica?.CREICA?.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION?.TIPOCLIENTE) {
    data.general.informationMexico.tipo = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.TIPOCLIENTE
  }
  return data
}

const mapperScorePyme = (data, json): any => {
  if (json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.VALORSCORE) {
    data.general.scorepymemexico.valorscore = json.informeCreica.CREICA.BURO_MX.DATOSCREDITOS.VALORSCORE
  }
  if (json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.MOTIVOSCORE1) {
    data.general.scorepymemexico.motivos = json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.MOTIVOSCORE1
  }
  if (json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.MOTIVOSCORE2) {
    data.general.scorepymemexico.motivos = json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.MOTIVOSCORE1
  }
  if (json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.MOTIVOSCORE3) {
    data.general.scorepymemexico.motivos = json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.MOTIVOSCORE1
  }
  if (json.informeCreica?.CREICA?.BURO_MX?.DATOSCREDITOS?.ERRORSCORE) {
    data.general.scorepymemexico.error = json.informeCreica.CREICA.BURO_MX.DATOSCREDITOS.ERRORSCORE
  }
  return data
}

export const mapperBureauMexico = (data, json): any => {
  mapperDatosGenerales(data, json)
  mapperInformacionGeneral(data, json)
  mapperScorePyme(data, json)
  return data
}
