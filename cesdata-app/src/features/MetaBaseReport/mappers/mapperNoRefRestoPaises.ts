const mapperGeneralData = (data, json): any => {
  data.general.generalData.remitente = json.informeCreica.CREICA.REMITENTE ?? ''
  data.general.generalData.nombreDocumento = json.informeCreica.CREICA.NOMDOC ?? ''
  data.general.generalData.tipoDocumento = json.informeCreica.CREICA.TIPDOC ?? ''
  data.general.generalData.fechaMensaje = json.informeCreica.CREICA.FECHAMENSAJE ?? ''
  data.general.generalData.fecha = json.informeCreica.CREICA.FEC ?? ''
  data.general.generalData.fechaBusqueda = json.informeCreica.CREICA.FECULTBUSQUEDA ?? ''
  data.general.generalData.moneda = json.informeCreica.CREICA.MONEDA ?? ''
  return data
}

const mapperIdentificacion = (data, json): any => {
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR?.NOMBREDIRECCION?.CODIGOEMPRESA) {
    data.general.identification.codigoEmpresa = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODIGOEMPRESA
    data.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODIGOEMPRESA
  }

  return data
}

const mapperDatosHost = (data, json): any => {
  if (json.informeCreica.CREICA.DATOSHOST?.TIPODOCUMENTO) {
    data.general.generalData.numeroDocumento = json.informeCreica.CREICA.DATOSHOST.TIPODOCUMENTO
    if (json.informeCreica.CREICA.DATOSHOST.TIPODOCUMENTO !== 52) {
      if (json.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST) {
        data.general.generalData.numeroPeticion = json.informeCreica.CREICA.DATOSHOST.NUMPETICIONHOST
      }
      if (json.informeCreica.CREICA.IDENTIFICACION) {
        data = mapperIdentificacion(data, json)
      }
    }
  }

  return data
}

const mapperNombreDireccion = (data, json): any => {
  if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL?.DIRECCION?.DOMICILIO) {
    data.general.identification.domicilio = json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.DOMICILIO
  }
  if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL?.DIRECCION?.LOCALIDAD) {
    data.general.identification.localidad = json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.LOCALIDAD
  }
  if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL?.DIRECCION?.PROVINCIA) {
    data.general.identification.provincia = json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PROVINCIA
  }
  if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL?.DIRECCION?.CODPOSTAL) {
    data.general.identification.codigoPostal = json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.CODPOSTAL
  }
  if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL?.DIRECCION?.PAIS) {
    data.general.identification.pais = json.informeCreica.CREICA.NOMBRESYDIRECCIONES.EMPRESAPRINCIPAL.DIRECCION.PAIS
  }
  if (json.informeCreica.IDENTIFICACION?.DEUDOR?.NOMBREDIRECCION?.DENOMINACION) {
    data.general.identification.razonSocial = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
    data.empresa = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
  }

  return data
}

export const mapperNoRefRestoPaises = (data, json): any => {
  if (json.informeCreica?.CREICA) {
    data = mapperGeneralData(data, json)
    data = mapperDatosHost(data, json)

    if (json.informeCesceDgx?.DGX?.CREDITMSGSRSV2?.DATATRNRS?.TRNUID) {
      data.general.identification.referenciaInforme = json.informeCreica.DGX.CREDITMSGSRSV2.DATATRNRS.TRNUID
    }

    if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES) {
      data = mapperNombreDireccion(data, json)
    }
  }
  return data
}
