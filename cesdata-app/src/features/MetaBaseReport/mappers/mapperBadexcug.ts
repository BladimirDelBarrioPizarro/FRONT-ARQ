const mapperDatosHost = (data, json): any => {
  if (json.informeCreica.CREICA.DATOSHOST.CODEMPRESA) {
    data.empresa = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA
    data.general.generalData.codigo = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA
  }
  if (json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD) {
    data.general.generalData.ajt1 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD
  }
  if (json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD2) {
    data.general.generalData.ajt2 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD2
  }

  return data
}

const mapperIdentDeudorNombreDireccion = (data, json): any => {
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION) {
    data.empresa = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
    data.general.generalData.razonSocial = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
    data.general.identification.razonSocial = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DOMICILIO) {
    data.general.identification.domicilio = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DOMICILIO
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.LOCALIDAD) {
    data.general.identification.localidad = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.LOCALIDAD
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PROVINCIA) {
    data.general.identification.provincia = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PROVINCIA
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODPOSTAL) {
    data.general.identification.codigoPostal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.CODPOSTAL
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PAIS) {
    data.general.identification.pais = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.PAIS
  }
  return data
}

const mapperIdentDeudoIden = (data, json): any => {
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN) {
    data.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
    data.general.generalData.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
    data.general.denominacionesComerciales.nif = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
  }
  return data
}

const mapperIdentDeudor = (data, json): any => {
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION) {
    data = mapperIdentDeudorNombreDireccion(data, json)
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN) {
    data = mapperIdentDeudoIden(data, json)
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.TELEFONO) {
    data.general.denominacionesComerciales.telefono = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.TELEFONO
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.EMAIL) {
    data.general.denominacionesComerciales.email = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.EMAIL
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IPINTERNET) {
    data.general.denominacionesComerciales.web = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IPINTERNET
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.ACTIVIDADES) {
    data.general.denominacionesComerciales.actividades = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.ACTIVIDADES
  }
  return data
}

const mapperImpagosNonPayment = (data, json): any => {
  data.general.protestsDemands.nonPayment.nombreRazonSocial = json.informeCreica.CREICA.IMPAGOSASNEF.NOMRAZONSOCIAL ?? ''
  data.general.protestsDemands.nonPayment.fechaAlta = json.informeCreica.CREICA.IMPAGOSASNEF.FECALTA ?? ''
  data.general.protestsDemands.nonPayment.fechaUltimaConsulta = json.informeCreica.CREICA.IMPAGOSASNEF.FECULTCONSULTA ?? ''
  data.general.protestsDemands.nonPayment.numeroOperaciones = json.informeCreica.CREICA.IMPAGOSASNEF.NUMOPERACIONES ?? ''
  data.general.protestsDemands.nonPayment.operIncidencias = json.informeCreica.CREICA.IMPAGOSASNEF.NUMOPERACIONESINCIDENCIAS ?? ''
  data.general.protestsDemands.nonPayment.importeImpagado = json.informeCreica.CREICA.IMPAGOSASNEF.IMPIMPAGADO ?? ''
  data.general.protestsDemands.nonPayment.fechaPeorSituacion = json.informeCreica.CREICA.IMPAGOSASNEF.FECPEORSIT ?? ''
  data.general.protestsDemands.nonPayment.fechaAnotacionMax = json.informeCreica.CREICA.IMPAGOSASNEF.FECIMPMAXIMPAGADO ?? ''
  data.general.protestsDemands.nonPayment.identificadorPersona = json.informeCreica.CREICA.IMPAGOSASNEF.IDENTIFICADORPERSONA ?? ''
  data.general.protestsDemands.nonPayment.fechaUltimaAct = json.informeCreica.CREICA.IMPAGOSASNEF.FECULTACTUALIZACION ?? ''
  data.general.protestsDemands.nonPayment.entidadUltConsulta = json.informeCreica.CREICA.IMPAGOSASNEF.ENTIDADULTCONSULTA ?? ''
  data.general.protestsDemands.nonPayment.importeOperaciones = json.informeCreica.CREICA.IMPAGOSASNEF.IMPOPERACIONES ?? ''
  data.general.protestsDemands.nonPayment.peorSituacion = json.informeCreica.CREICA.IMPAGOSASNEF.PEORSIT ?? ''
  data.general.protestsDemands.nonPayment.importeAnotacionMax = json.informeCreica.CREICA.IMPAGOSASNEF.IMPMAXIMPAGADO ?? ''
  data.general.protestsDemands.nonPayment.cuotasImpagadas = json.informeCreica.CREICA.IMPAGOSASNEF.NUMCUOTASIMPAGADAS ?? ''
  return data
}

const mapperProtestsDemands = (data, elements): any => {
  data.codigoOperacion = elements.CODOPERACION ?? ''
  data.identificadorPersona = elements.IDENTIFICACIONPERSONA ?? ''
  data.fechaAlta = elements.FECALTA ?? ''
  data.entidadCedente = elements.ENTIDADCEDENTE ?? ''
  data.producto = elements.PRODUCTO ?? ''
  data.naturaleza = elements.NATURALEZA ?? ''
  data.situacion = elements.SITUACION ?? ''
  data.fechaInicio = elements.FECINICIO ?? ''
  data.fechaFinal = elements.FECFINAL ?? ''
  data = mapperProtestsDemandsReduce(data, elements)
  return data
}

const mapperProtestsDemandsReduce = (data, elements): any => {
  data.numeroCuotas = elements.NUMCUOTAS ?? ''
  data.importeCuotas = elements.IMPCUOTAS ?? ''
  data.importePendiente = elements.IMPPENDIENTE ?? ''
  data.importeImpagado = elements.IMPPAGADO ?? ''
  data.numCuotasImpagadas = elements.NUMCUOTASIMPAGADAS ?? ''
  data.fechaPrimerVencimiento = elements.FECPRIMERVENCIMIENTO ?? ''
  data.fechaUltimoVencimiento = elements.FECULTVENCIMIENTO ?? ''
  data.informacionAdicional = elements.INFORMACIONADICIONAL ?? ''
  return data
}

export const mapperImpagos = (data, json): any => {
  data = mapperImpagosNonPayment(data, json)

  if (json.informeCreica.CREICA.IMPAGOSASNEF.IMPAGOASNEF) {
    json.informeCreica.CREICA.IMPAGOSASNEF.IMPAGOASNEF.map((elements, index) => {
      var newElements = {
        codigoOperacion: '',
        identificadorPersona: '',
        fechaAlta: '',
        entidadCedente: '',
        producto: '',
        naturaleza: '',
        situacion: '',
        fechaInicio: '',
        fechaFinal: '',
        numeroCuotas: '',
        importeCuotas: '',
        importePendiente: '',
        importeImpagado: '',
        numCuotasImpagadas: '',
        fechaPrimerVencimiento: '',
        fechaUltimoVencimiento: '',
        informacionAdicional: ''
      }

      newElements = mapperProtestsDemands(newElements, elements)
      data.general.protestsDemands.operationsCode.push(newElements)
    })
  }
  return data
}

const cleanDataProtestOperations = (data): any => {
  while (data.general.protestsDemands.operationsCode.length > 0) {
    data.general.protestsDemands.operationsCode.pop()
  }
  return data
}

const mapperRemitente = (data, json): any => {
  if (json.informeCreica.CREICA.REMITENTE) {
    data.general.generalData.agencia = json.informeCreica.CREICA.REMITENTE
  }
  return data
}

const mapperAgencia = (data, json): any => {
  if (json.informeCreica.CREICA.FEC) {
    data.general.generalData.agencia = String(data.general.generalData.agencia) + ' /  ' + String(json.informeCreica.CREICA.FEC)
  }
  return data
}

const mapperNombresDirecciones = (data, json): any => {
  if (json.informeCreica.CREICA.NOMBRESYDIRECCIONES?.EMPRESAPRINCIPAL?.COMENTARIOS) {
    data.general.denominacionesComerciales.comentarios = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.ACTIVIDADES
  }
  return data
}

export const mapperBadexcug = (data, json): any => {
  if (json.informeCreica.CREICA) {
    data = mapperRemitente(data, json)
    data = mapperAgencia(data, json)
    data = mapperNombresDirecciones(data, json)

    if (json.informeCreica.CREICA.DATOSHOST) {
      data = mapperDatosHost(data, json)
    }

    if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR) {
      data = mapperIdentDeudor(data, json)
    }

    data = cleanDataProtestOperations(data)

    if (json.informeCreica.CREICA.IMPAGOSASNEF) {
      data = mapperImpagos(data, json)
    }
  }

  return data
}
