const mapperRemitente = (data, json): any => {
  data.general.generalData.agencia = json.informeCreica.CREICA.REMITENTE

  return data
}
const mapperNombreDireccion = (data, json): any => {
  data.general.generalData.razonSocial = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION ?? ''
  data.empresa = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION ?? ''
  data.general.identificacionEspanaInforma.denominacion = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION ?? ''
  data.general.identificacionEspanaInforma.domicilio = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DOMICILIO ?? ''
  data.general.identificacionEspanaInforma.localidad = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.LOCALIDAD ?? ''
  data.general.identificacionEspanaInforma.provincia = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PROVINCIA ?? ''
  data.general.identificacionEspanaInforma.codigopostal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODPOSTAL ?? ''
  data.general.identificacionEspanaInforma.pais = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PAIS ?? ''

  return data
}

const mapperIdentificacion = (data, json): any => {
  if (json.informeCreica.CREICA.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION) {
    data = mapperNombreDireccion(data, json)
  }
  if (json.informeCreica.CREICA.IDENTIFICACION?.DEUDOR?.IDEN?.TIPIDEN) {
    data.general.identificacionEspanaInforma.tipoidenfiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.TIPIDEN
  }

  if (json.informeCreica.CREICA.IDENTIFICACION?.DEUDOR?.IDEN?.CODIDEN) {
    data.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
    data.general.generalData.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
    data.general.identificacionEspanaInforma.codidenfiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
  }
  return data
}

const mapperDatosHost = (data, json): any => {
  data.general.generalData.codigo = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA ?? ''
  data.codigoFiscal = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA ?? ''
  data.general.generalData.ajt1 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
  data.general.generalData.ajt2 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD2 ?? ''
  return data
}

const mapperDatosInforma = (data, json): any => {
  data.general.datosInforma.numeropeticion = json.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST ?? ''
  data.general.datosInforma.codigoproducto = json.informeCreica.CREICA.DATOSHOST.CODPRODUCTO ?? ''
  data.general.datosInforma.codnomempresa = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA ?? ''
  data.general.datosInforma.tipocorresponsal = json.informeCreica.CREICA.DATOSHOST.TIPOCORRESPONSAL ?? ''
  data.general.datosInforma.numerodocumento = json.informeCreica.CREICA.DATOSHOST.NUMDOCUMENTO ?? ''
  data.general.datosInforma.tipodocumento = json.informeCreica.CREICA.DATOSHOST.TIPODOCUMENTO ?? ''
  data.general.datosInforma.numeroinforme = json.informeCreica.CREICA.DATOSHOST.NUMINFORME ?? ''
  data.general.datosInforma.numeromovimiento = json.informeCreica.CREICA.DATOSHOST.NUMMOVIMIENT ?? ''
  data.general.datosInforma.origen = json.informeCreica.CREICA.DATOSHOST.ORIGEN ?? ''
  data.general.datosInforma.gravedadajt = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
  data.general.datosInforma.tipofichero = json.informeCreica.CREICA.DATOSHOST.TIPFICHERO ?? ''
  data.general.datosInforma.nombrefichero = json.informeCreica.CREICA.DATOSHOST.NOMFICHERO ?? ''
  return data
}
const mapperATJS = (data, json): any => {
  if (json.informeCreica.CREICA.DATOS_INFORMA) {
    data = mapperATJSInforma(data, json)
  }

  if (json.informeCreica.CREICA.PUNTOSFLASHINFORMA) {
    data = mapperATJSPuntos(data, json)
  }
  return data
}

const mapperATJSInforma = (data, json): any => {
  if (json.informeCreica.CREICA.DATOS_INFORMA.SALIDA) {
    if (json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.INCIDENCIA) {
      data.general.ajtsEspanaInforma.tipoderespuesta = json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.INCIDENCIA
    }
    if (json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.ESCORT) {
      data.general.ajtsEspanaInforma.escort = json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.ESCORT
    }
    if (json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.FECHA_CONST) {
      data.general.ajtsEspanaInforma.fechaconstitucion = json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.FECHA_CONST
    }
    if (json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.DEPOSITO) {
      data.general.ajtsEspanaInforma.deposito = json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.DEPOSITO
    }
    if (json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.NEGATIVA) {
      data.general.ajtsEspanaInforma.negativa = json.informeCreica.CREICA.DATOS_INFORMA.SALIDA.NEGATIVA
    }
  }

  return data
}

const mapperATJSPuntos = (data, json): any => {
  if (json.informeCreica.CREICA.PUNTOSFLASHINFORMA.INCIDENTES) {
    data.general.ajtsEspanaInforma.incidentes = json.informeCreica.CREICA.PUNTOSFLASHINFORMA.INCIDENTES
  }
  if (json.informeCreica.CREICA.PUNTOSFLASHINFORMA.PAGOS) {
    data.general.ajtsEspanaInforma.pagos = json.informeCreica.CREICA.PUNTOSFLASHINFORMA.PAGOS
  }
  if (json.informeCreica.CREICA.PUNTOSFLASHINFORMA.EXPERIENCIA) {
    data.general.ajtsEspanaInforma.experiencia = json.informeCreica.CREICA.PUNTOSFLASHINFORMA.EXPERIENCIA
  }

  return data
}

const mapperIdentificacionEspanaInforma = (data, json): any => {
  if (json.informeCreica.CREICA?.BALANCESECONOMICOS?.BALANCE?.FECULTBALANCE) {
    data.general.identificacionEspanaInforma.fechultbalance = json.informeCreica.CREICA.BALANCESECONOMICOS.BALANCE.FECULTBALANCE
  }

  if (json.informeCreica.CREICA?.BALANCESECONOMICOS?.BALANCE?.COMENTARIOS) {
    data.general.identificacionEspanaInforma.comentariosbalances = json.informeCreica.CREICA.BALANCESECONOMICOS.BALANCE.COMENTARIOS
  }

  if (json.informeCreica.CREICA?.OBSERVACIONES?.COMENTARIOGENERAL) {
    data.general.identificacionEspanaInforma.comentariogen = json.informeCreica.CREICA.OBSERVACIONES.COMENTARIOGENERAL
  }

  if (json.informeCreica.CREICA?.RESUMEN?.COMENTARIOS) {
    data.general.identificacionEspanaInforma.comentarios = json.informeCreica.CREICA.RESUMEN.COMENTARIOS
  }

  return data
}

export const mapperEspanaInforma = (data, json): any => {
  if (json.informeCreica?.CREICA) {
    if (json.informeCreica.CREICA.REMITENTE) {
      data = mapperRemitente(data, json)
    }

    if (json.informeCreica.CREICA.IDENTIFICACION) {
      data = mapperIdentificacion(data, json)
    }

    if (json.informeCreica.CREICA.DATOSHOST) {
      data = mapperDatosHost(data, json)
      data = mapperDatosInforma(data, json)
    }

    data = mapperATJS(data, json)
    data = mapperIdentificacionEspanaInforma(data, json)
  }
  return data
}
