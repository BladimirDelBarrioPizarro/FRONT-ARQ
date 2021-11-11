const mapperDatosHost = (data, json): any => {
  data.general.generalData.codigo = json.informeCreica.CREICA.DATOSHOST.CODEMPRESA ?? ''
  data.general.generalData.ajt1 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD ?? ''
  data.general.generalData.ajt2 = json.informeCreica.CREICA.DATOSHOST.AJTMAYORGRAVEDAD2 ?? ''
  return data
}

const mapperIdentificacion = (data, json): any => {
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION?.DENOMINACION) {
    data.general.generalData.razonSocial = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.NOMBREDIRECCION.DENOMINACION
  }
  if (json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN?.CODIDEN) {
    data.general.generalData.codigoFiscal = json.informeCreica.CREICA.IDENTIFICACION.DEUDOR.IDEN.CODIDEN
  }
  return data
}

const mapperDGXUnion = (data, json): any => {
  if (json.informeCesceDgx.DGX.DGXUNION.trama89) {
    data.general.scorePeru.scoreEmpresasNoPrico = json.informeCesceDgx.DGX.DGXUNION.trama89.S17SCORE
    data.general.scorePeru.scoreAutonomos = json.informeCesceDgx.DGX.DGXUNION.trama89.S16SCORE
    data.general.scorePeru.tipoEmpresa = json.informeCesceDgx.DGX.DGXUNION.trama89.S17MENSAJE
  }
  return data
}

const mapperPersonDirectory = (data, json): any => {
  data.general.directoryNaturalPersons.codigoFiscal = json.informeCesceDgx.DGX.ReporteCrediticio.codigoFiscal ?? ''
  data.general.directoryNaturalPersons.tipoDocumento = json.informeCesceDgx.DGX.ReporteCrediticio.tipoDocumento ?? ''
  data.general.directoryNaturalPersons.denominacion = json.informeCesceDgx.DGX.ReporteCrediticio.denominacion ?? ''
  data.general.directoryNaturalPersons.fechaDeNacimiento = json.informeCesceDgx.DGX.ReporteCrediticio.fechaDeNacimiento ?? ''
  data.general.directoryNaturalPersons.estadoCivil = json.informeCesceDgx.DGX.ReporteCrediticio.estadoCivil ?? ''
  data.general.directoryNaturalPersons.nacionalidad = json.informeCesceDgx.DGX.ReporteCrediticio.nacionalidad ?? ''
  data.general.directoryNaturalPersons.gradoInstruccion = json.informeCesceDgx.DGX.ReporteCrediticio.gradoInstruccion ?? ''
  data.general.directoryNaturalPersons.telefono = json.informeCesceDgx.DGX.ReporteCrediticio.telefono ?? ''
  data.general.directoryNaturalPersons.ocupacion = json.informeCesceDgx.DGX.ReporteCrediticio.ocupacion ?? ''
  return data
}

const mapperModulo1 = (data, json): any => {
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data?.DirectorioSUNAT?.Directorio) {
    data.general.directorySunat.codigoFiscal = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.RUC ?? ''
    data.general.directorySunat.denominacion = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.RazonSocial ?? ''
    data.general.directorySunat.nombreComercial = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.NombreComercial ?? ''
    data.general.directorySunat.direccion = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.Direcciones ?? ''
    data.general.directorySunat.fechaConstitución = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.InicioActividades ?? ''
    data.general.directorySunat.tipoDeContribuyente = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.TipoContribuyente ?? ''
    data.general.directorySunat.estado = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.EstadoContribuyente ?? ''
    data.general.directorySunat.condicionContribuyente = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.CondicionContribuyente ?? ''
    data.general.directorySunat.dependencia = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.Dependencia ?? ''

    data.general.directorySunat.actividadComercioExterior = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.ActividadComercioExterior ?? ''
    data.general.directorySunat.padron = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.Padron ?? ''

    data.general.directorySunat.actividad = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.CodigoCIIU != null &&
                                                        json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.DescripcionCIIU != null
      ? String(json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.CodigoCIIU) + ' - ' + String(json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1].Data.DirectorioSUNAT.Directorio.DescripcionCIIU)
      : ''
  }
  return data
}

const mapperModulo0 = (data, json): any => {
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[0].Data?.Direcciones?.Direccion) {
    data.general.lastAddresses.fecha = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[0].Data.Direcciones.Direccion.Fecha ?? ''
    data.general.lastAddresses.direccion = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[0].Data.Direcciones.Direccion.Descripcion ?? ''
    data.general.lastAddresses.telefono = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[0].Data.Direcciones.Direccion.Telefono ?? ''
    data.general.lastAddresses.fuente = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[0].Data.Direcciones.Direccion.Fuente ?? ''
  }
  return data
}

const mapperModulo2 = (data, json): any => {
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data?.RepresentantesLegales?.RepresentantesDe?.Representante) {
    data.general.legalAgents.name = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentantesDe.Representante.Nombres ?? ''
    data.general.legalAgents.tipoDocumento = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentantesDe.Representante.TipoDocumento ?? ''
    data.general.legalAgents.nDocumento = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentantesDe.Representante.NumeroDocumento ?? ''
    data.general.legalAgents.cargo = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentantesDe.Representante.Cargo ?? ''
    data.general.legalAgents.fecha = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentantesDe.Representante.Fecha ?? ''
  }
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data?.RepresentantesLegales?.RepresentandosPor?.Representante) {
    data.general.legalAgents.name2 = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentandosPor.Representante.Nombres ?? ''
    data.general.legalAgents.tipoDocumento2 = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentandosPor.Representante.TipoDocumento ?? ''
    data.general.legalAgents.nDocumento2 = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentandosPor.Representante.NumeroDocumento ?? ''
    data.general.legalAgents.cargo2 = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentandosPor.Representante.Cargo ?? ''
    data.general.legalAgents.fecha2 = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2].Data.RepresentantesLegales.RepresentandosPor.Representante.Fecha ?? ''
  }
  return data
}

const mapperRegulatedPeriodo = (data, json): any => {
  data.general.microfinanceDebt.regulatedPeriodo1 = json.Periodo[0]['@valor']
  data.general.microfinanceDebt.regulatedPeriodo2 = json.Periodo[1]['@valor']
  data.general.microfinanceDebt.regulatedPeriodo3 = json.Periodo[2]['@valor']
  data.general.microfinanceDebt.regulatedPeriodo4 = json.Periodo[3]['@valor']
  data.general.microfinanceDebt.regulatedPeriodo5 = json.Periodo[4]['@valor']
  data.general.microfinanceDebt.regulatedPeriodo6 = json.Periodo[5]['@valor']
  return data
}

const mapperNonRegulatedPeriodo = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedPeriodo1 = json.Periodo[6]['@valor']
  data.general.microfinanceDebt.nonRegulatedPeriodo2 = json.Periodo[7]['@valor']
  data.general.microfinanceDebt.nonRegulatedPeriodo3 = json.Periodo[8]['@valor']
  data.general.microfinanceDebt.nonRegulatedPeriodo4 = json.Periodo[9]['@valor']
  data.general.microfinanceDebt.nonRegulatedPeriodo5 = json.Periodo[10]['@valor']
  data.general.microfinanceDebt.nonRegulatedPeriodo6 = json.Periodo[11]['@valor']
  return data
}

const mapperRegulatedNroEntidades = (data, json): any => {
  data.general.microfinanceDebt.regulatedNroEntidades1 = json.Periodo[0].NroEntidades
  data.general.microfinanceDebt.regulatedNroEntidades2 = json.Periodo[1].NroEntidades
  data.general.microfinanceDebt.regulatedNroEntidades3 = json.Periodo[2].NroEntidades
  data.general.microfinanceDebt.regulatedNroEntidades4 = json.Periodo[3].NroEntidades
  data.general.microfinanceDebt.regulatedNroEntidades5 = json.Periodo[4].NroEntidades
  data.general.microfinanceDebt.regulatedNroEntidades6 = json.Periodo[5].NroEntidades
  return data
}

const mapperNonRegulatedNroEntidades = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedNroEntidades1 = json.Periodo[6].NroEntidades
  data.general.microfinanceDebt.nonRegulatedNroEntidades2 = json.Periodo[7].NroEntidades
  data.general.microfinanceDebt.nonRegulatedNroEntidades3 = json.Periodo[8].NroEntidades
  data.general.microfinanceDebt.nonRegulatedNroEntidades4 = json.Periodo[9].NroEntidades
  data.general.microfinanceDebt.nonRegulatedNroEntidades5 = json.Periodo[10].NroEntidades
  data.general.microfinanceDebt.nonRegulatedNroEntidades6 = json.Periodo[11].NroEntidades
  return data
}

const mapperRegulatedNro = (data, json): any => {
  data.general.microfinanceDebt.regulatedNor1 = json.Periodo[0].Calificaciones.NOR
  data.general.microfinanceDebt.regulatedNor2 = json.Periodo[1].Calificaciones.NOR
  data.general.microfinanceDebt.regulatedNor3 = json.Periodo[2].Calificaciones.NOR
  data.general.microfinanceDebt.regulatedNor4 = json.Periodo[3].Calificaciones.NOR
  data.general.microfinanceDebt.regulatedNor5 = json.Periodo[4].Calificaciones.NOR
  data.general.microfinanceDebt.regulatedNor6 = json.Periodo[5].Calificaciones.NOR
  return data
}

const mapperNonRegulatedNro = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedNor1 = json.Periodo[6].Calificaciones.NOR
  data.general.microfinanceDebt.nonRegulatedNor2 = json.Periodo[7].Calificaciones.NOR
  data.general.microfinanceDebt.nonRegulatedNor3 = json.Periodo[8].Calificaciones.NOR
  data.general.microfinanceDebt.nonRegulatedNor4 = json.Periodo[9].Calificaciones.NOR
  data.general.microfinanceDebt.nonRegulatedNor5 = json.Periodo[10].Calificaciones.NOR
  data.general.microfinanceDebt.nonRegulatedNor6 = json.Periodo[11].Calificaciones.NOR
  return data
}

const mapperRegulatedCpp = (data, json): any => {
  data.general.microfinanceDebt.regulatedCpp1 = json.Periodo[0].Calificaciones.CPP
  data.general.microfinanceDebt.regulatedCpp2 = json.Periodo[1].Calificaciones.CPP
  data.general.microfinanceDebt.regulatedCpp3 = json.Periodo[2].Calificaciones.CPP
  data.general.microfinanceDebt.regulatedCpp4 = json.Periodo[3].Calificaciones.CPP
  data.general.microfinanceDebt.regulatedCpp5 = json.Periodo[4].Calificaciones.CPP
  data.general.microfinanceDebt.regulatedCpp6 = json.Periodo[5].Calificaciones.CPP
  return data
}

const mapperNonRegulatedCpp = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedCpp1 = json.Periodo[6].Calificaciones.CPP
  data.general.microfinanceDebt.nonRegulatedCpp2 = json.Periodo[7].Calificaciones.CPP
  data.general.microfinanceDebt.nonRegulatedCpp3 = json.Periodo[8].Calificaciones.CPP
  data.general.microfinanceDebt.nonRegulatedCpp4 = json.Periodo[9].Calificaciones.CPP
  data.general.microfinanceDebt.nonRegulatedCpp5 = json.Periodo[10].Calificaciones.CPP
  data.general.microfinanceDebt.nonRegulatedCpp6 = json.Periodo[11].Calificaciones.CPP
  return data
}

const mapperRegulatedDef = (data, json): any => {
  data.general.microfinanceDebt.regulatedDef1 = json.Periodo[0].Calificaciones.DEF
  data.general.microfinanceDebt.regulatedDef2 = json.Periodo[1].Calificaciones.DEF
  data.general.microfinanceDebt.regulatedDef3 = json.Periodo[2].Calificaciones.DEF
  data.general.microfinanceDebt.regulatedDef4 = json.Periodo[3].Calificaciones.DEF
  data.general.microfinanceDebt.regulatedDef5 = json.Periodo[4].Calificaciones.DEF
  data.general.microfinanceDebt.regulatedDef6 = json.Periodo[5].Calificaciones.DEF
  return data
}

const mapperNonRegulatedDef = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedDef1 = json.Periodo[6].Calificaciones.DEF
  data.general.microfinanceDebt.nonRegulatedDef2 = json.Periodo[7].Calificaciones.DEF
  data.general.microfinanceDebt.nonRegulatedDef3 = json.Periodo[8].Calificaciones.DEF
  data.general.microfinanceDebt.nonRegulatedDef4 = json.Periodo[9].Calificaciones.DEF
  data.general.microfinanceDebt.nonRegulatedDef5 = json.Periodo[10].Calificaciones.DEF
  data.general.microfinanceDebt.nonRegulatedDef6 = json.Periodo[11].Calificaciones.DEF
  return data
}

const mapperRegulatedDup = (data, json): any => {
  data.general.microfinanceDebt.regulatedDud1 = json.Periodo[0].Calificaciones.DUD
  data.general.microfinanceDebt.regulatedDud2 = json.Periodo[1].Calificaciones.DUD
  data.general.microfinanceDebt.regulatedDud3 = json.Periodo[2].Calificaciones.DUD
  data.general.microfinanceDebt.regulatedDud4 = json.Periodo[3].Calificaciones.DUD
  data.general.microfinanceDebt.regulatedDud5 = json.Periodo[4].Calificaciones.DUD
  data.general.microfinanceDebt.regulatedDud6 = json.Periodo[5].Calificaciones.DUD
  return data
}

const mapperNonRegulatedDup = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedDud1 = json.Periodo[6].Calificaciones.DUD
  data.general.microfinanceDebt.nonRegulatedDud2 = json.Periodo[7].Calificaciones.DUD
  data.general.microfinanceDebt.nonRegulatedDud3 = json.Periodo[8].Calificaciones.DUD
  data.general.microfinanceDebt.nonRegulatedDud4 = json.Periodo[9].Calificaciones.DUD
  data.general.microfinanceDebt.nonRegulatedDud5 = json.Periodo[10].Calificaciones.DUD
  data.general.microfinanceDebt.nonRegulatedDud6 = json.Periodo[11].Calificaciones.DUD
  return data
}

const mapperRegulatedPer = (data, json): any => {
  data.general.microfinanceDebt.regulatedPer1 = json.Periodo[0].Calificaciones.PER
  data.general.microfinanceDebt.regulatedPer2 = json.Periodo[1].Calificaciones.PER
  data.general.microfinanceDebt.regulatedPer3 = json.Periodo[2].Calificaciones.PER
  data.general.microfinanceDebt.regulatedPer4 = json.Periodo[3].Calificaciones.PER
  data.general.microfinanceDebt.regulatedPer5 = json.Periodo[4].Calificaciones.PER
  data.general.microfinanceDebt.regulatedPer6 = json.Periodo[5].Calificaciones.PER
  return data
}

const mapperNonRegulatedPer = (data, json): any => {
  data.general.microfinanceDebt.nonRegulatedPer1 = json.Periodo[6].Calificaciones.PER
  data.general.microfinanceDebt.nonRegulatedPer2 = json.Periodo[7].Calificaciones.PER
  data.general.microfinanceDebt.nonRegulatedPer3 = json.Periodo[8].Calificaciones.PER
  data.general.microfinanceDebt.nonRegulatedPer4 = json.Periodo[9].Calificaciones.PER
  data.general.microfinanceDebt.nonRegulatedPer5 = json.Periodo[10].Calificaciones.PER
  data.general.microfinanceDebt.nonRegulatedPer6 = json.Periodo[11].Calificaciones.PER
  return data
}

const mapperMicrofinanzas = (data, json): any => {
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.Microfinanzas?.Periodos?.Periodo) {
    var element = element.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.Microfinanzas.Periodos
    data = mapperRegulatedPeriodo(data, element)
    data = mapperNonRegulatedPeriodo(data, element)
    data = mapperRegulatedNroEntidades(data, element)
    data = mapperNonRegulatedNroEntidades(data, element)
    data = mapperRegulatedNro(data, element)
    data = mapperNonRegulatedNro(data, element)
    data = mapperRegulatedCpp(data, element)
    data = mapperNonRegulatedCpp(data, element)
    data = mapperRegulatedDef(data, element)
    data = mapperNonRegulatedDef(data, element)
    data = mapperRegulatedDup(data, element)
    data = mapperNonRegulatedDup(data, element)
    data = mapperRegulatedPer(data, element)
    data = mapperNonRegulatedPer(data, element)
  }
  return data
}

const mapperSemaforoRegulatedPeriodo = (data, json): any => {
  data.general.regulatedNonFinancialSystem.regulatedPeriodo1 = json.Semaforo[0]['@periodo']
  data.general.regulatedNonFinancialSystem.regulatedPeriodo2 = json.Semaforo[1]['@periodo']
  data.general.regulatedNonFinancialSystem.regulatedPeriodo3 = json.Semaforo[2]['@periodo']
  data.general.regulatedNonFinancialSystem.regulatedPeriodo4 = json.Semaforo[3]['@periodo']
  data.general.regulatedNonFinancialSystem.regulatedPeriodo5 = json.Semaforo[4]['@periodo']
  data.general.regulatedNonFinancialSystem.regulatedPeriodo6 = json.Semaforo[5]['@periodo']
  return data
}

const mapperSemaforoNonRegulatedPeriodo = (data, json): any => {
  data.general.regulatedNonFinancialSystem.nonRegulatedPeriodo1 = json.Semaforo[6]['@periodo']
  data.general.regulatedNonFinancialSystem.nonRegulatedPeriodo2 = json.Semaforo[7]['@periodo']
  data.general.regulatedNonFinancialSystem.nonRegulatedPeriodo3 = json.Semaforo[8]['@periodo']
  data.general.regulatedNonFinancialSystem.nonRegulatedPeriodo4 = json.Semaforo[9]['@periodo']
  data.general.regulatedNonFinancialSystem.nonRegulatedPeriodo5 = json.Semaforo[10]['@periodo']
  data.general.regulatedNonFinancialSystem.nonRegulatedPeriodo6 = json.Semaforo[11]['@periodo']
  return data
}

const mapperRegulatedFlagImpagos = (data, json): any => {
  data.general.regulatedNonFinancialSystem.regulatedFlagImpagos1 = json.Semaforo[0].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.regulatedFlagImpagos2 = json.Semaforo[1].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.regulatedFlagImpagos3 = json.Semaforo[2].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.regulatedFlagImpagos4 = json.Semaforo[3].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.regulatedFlagImpagos5 = json.Semaforo[4].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.regulatedFlagImpagos6 = json.Semaforo[5].NoTieneImpagos
  return data
}

const mapperNonRegulatedFlagImpagos = (data, json): any => {
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagImpagos1 = json.Semaforo[6].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagImpagos2 = json.Semaforo[7].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagImpagos3 = json.Semaforo[8].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagImpagos4 = json.Semaforo[9].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagImpagos5 = json.Semaforo[10].NoTieneImpagos
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagImpagos6 = json.Semaforo[11].NoTieneImpagos
  return data
}

const mapperRegulatedFlagDeudaAtrasada = (data, json): any => {
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudaAtrasada1 = json.Semaforo[0].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudaAtrasada2 = json.Semaforo[1].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudaAtrasada3 = json.Semaforo[2].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudaAtrasada4 = json.Semaforo[3].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudaAtrasada5 = json.Semaforo[4].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudaAtrasada6 = json.Semaforo[5].TieneDeudasAtrasadas
  return data
}

const mapperNonRegulatedFlagDeudaAtrasada = (data, json): any => {
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudaAtrasada1 = json.Semaforo[6].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudaAtrasada2 = json.Semaforo[7].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudaAtrasada3 = json.Semaforo[8].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudaAtrasada4 = json.Semaforo[9].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudaAtrasada5 = json.Semaforo[10].TieneDeudasAtrasadas
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudaAtrasada6 = json.Semaforo[11].TieneDeudasAtrasadas
  return data
}

const mapperRegulatedFlagDeudasImpagadasInfocorp = (data, json): any => {
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudasImpagadasInfocorp1 = json.Semaforo[0].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudasImpagadasInfocorp2 = json.Semaforo[1].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudasImpagadasInfocorp3 = json.Semaforo[2].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudasImpagadasInfocorp4 = json.Semaforo[3].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudasImpagadasInfocorp5 = json.Semaforo[4].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.regulatedFlagDeudasImpagadasInfocorp6 = json.Semaforo[5].TieneDeudasImpagasInfocorp
  return data
}

const mapperNonRegulatedFlagDeudasImpagadasInfocorp = (data, json): any => {
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudasImpagadasInfocorp1 = json.Semaforo[6].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudasImpagadasInfocorp2 = json.Semaforo[7].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudasImpagadasInfocorp3 = json.Semaforo[8].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudasImpagadasInfocorp4 = json.Semaforo[9].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudasImpagadasInfocorp5 = json.Semaforo[10].TieneDeudasImpagasInfocorp
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagDeudasImpagadasInfocorp6 = json.Semaforo[11].TieneDeudasImpagasInfocorp
  return data
}

const mapperRegulatedFlagInformacionNoDisponible = (data, json): any => {
  data.general.regulatedNonFinancialSystem.regulatedFlagInformacionNoDisponible1 = json.Semaforo[0].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.regulatedFlagInformacionNoDisponible2 = json.Semaforo[1].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.regulatedFlagInformacionNoDisponible3 = json.Semaforo[2].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.regulatedFlagInformacionNoDisponible4 = json.Semaforo[3].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.regulatedFlagInformacionNoDisponible5 = json.Semaforo[4].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.regulatedFlagInformacionNoDisponible6 = json.Semaforo[5].InformacionNoDisponible
  return data
}

const mapperNonRegulatedFlagInformacionNoDisponible = (data, json): any => {
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagInformacionNoDisponible1 = json.Semaforo[6].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagInformacionNoDisponible2 = json.Semaforo[7].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagInformacionNoDisponible3 = json.Semaforo[8].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagInformacionNoDisponible4 = json.Semaforo[9].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagInformacionNoDisponible5 = json.Semaforo[10].InformacionNoDisponible
  data.general.regulatedNonFinancialSystem.nonRegulatedFlagInformacionNoDisponible6 = json.Semaforo[11].InformacionNoDisponible
  return data
}

const mapperRegulatedDiasAtraso = (data, json): any => {
  data.general.regulatedNonFinancialSystem.regulatedDiasAtraso1 = json.Semaforo[0].DiasAtraso
  data.general.regulatedNonFinancialSystem.regulatedDiasAtraso2 = json.Semaforo[1].DiasAtraso
  data.general.regulatedNonFinancialSystem.regulatedDiasAtraso3 = json.Semaforo[2].DiasAtraso
  data.general.regulatedNonFinancialSystem.regulatedDiasAtraso4 = json.Semaforo[3].DiasAtraso
  data.general.regulatedNonFinancialSystem.regulatedDiasAtraso5 = json.Semaforo[4].DiasAtraso
  data.general.regulatedNonFinancialSystem.regulatedDiasAtraso6 = json.Semaforo[5].DiasAtraso
  return data
}

const mapperNonRegulatedDiasAtraso = (data, json): any => {
  data.general.regulatedNonFinancialSystem.nonRegulatedDiasAtraso1 = json.Semaforo[6].DiasAtraso
  data.general.regulatedNonFinancialSystem.nonRegulatedDiasAtraso2 = json.Semaforo[7].DiasAtraso
  data.general.regulatedNonFinancialSystem.nonRegulatedDiasAtraso3 = json.Semaforo[8].DiasAtraso
  data.general.regulatedNonFinancialSystem.nonRegulatedDiasAtraso4 = json.Semaforo[9].DiasAtraso
  data.general.regulatedNonFinancialSystem.nonRegulatedDiasAtraso5 = json.Semaforo[10].DiasAtraso
  data.general.regulatedNonFinancialSystem.nonRegulatedDiasAtraso6 = json.Semaforo[11].DiasAtraso
  return data
}

const mapperSemaforo = (data, json): any => {
  data = mapperSemaforoRegulatedPeriodo(data, json)
  data = mapperSemaforoNonRegulatedPeriodo(data, json)
  data = mapperRegulatedFlagImpagos(data, json)
  data = mapperNonRegulatedFlagImpagos(data, json)
  data = mapperRegulatedFlagDeudaAtrasada(data, json)
  data = mapperNonRegulatedFlagDeudaAtrasada(data, json)
  data = mapperRegulatedFlagDeudasImpagadasInfocorp(data, json)
  data = mapperNonRegulatedFlagDeudasImpagadasInfocorp(data, json)
  data = mapperRegulatedFlagInformacionNoDisponible(data, json)
  data = mapperNonRegulatedFlagInformacionNoDisponible(data, json)
  data = mapperRegulatedDiasAtraso(data, json)
  data = mapperNonRegulatedDiasAtraso(data, json)
  return data
}

const mapperResumenComportamientoPago = (data, json): any => {
  return mapperSemaforo(data, json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.ResumenComportamientoPago)
}

const mapperRCCRegulatedPeriodo = (data, json): any => {
  data.general.historyPeru.regulatedPeriodo1 = json.Periodo[0]['@valor']
  data.general.historyPeru.regulatedPeriodo2 = json.Periodo[1]['@valor']
  data.general.historyPeru.regulatedPeriodo3 = json.Periodo[2]['@valor']
  data.general.historyPeru.regulatedPeriodo4 = json.Periodo[3]['@valor']
  data.general.historyPeru.regulatedPeriodo5 = json.Periodo[4]['@valor']
  data.general.historyPeru.regulatedPeriodo6 = json.Periodo[5]['@valor']
  return data
}

const mapperRCCNonRegulatedPeriodo = (data, json): any => {
  data.general.historyPeru.nonRegulatedPeriodo1 = json.Periodo[6]['@valor']
  data.general.historyPeru.nonRegulatedPeriodo2 = json.Periodo[7]['@valor']
  data.general.historyPeru.nonRegulatedPeriodo3 = json.Periodo[8]['@valor']
  data.general.historyPeru.nonRegulatedPeriodo4 = json.Periodo[9]['@valor']
  data.general.historyPeru.nonRegulatedPeriodo5 = json.Periodo[10]['@valor']
  data.general.historyPeru.nonRegulatedPeriodo6 = json.Periodo[11]['@valor']
  return data
}

const mapperRCCRegulatedNroEntidades = (data, json): any => {
  data.general.historyPeru.regulatedNroEntidades1 = json.Periodo[0].NroEntidades
  data.general.historyPeru.regulatedNroEntidades2 = json.Periodo[1].NroEntidades
  data.general.historyPeru.regulatedNroEntidades3 = json.Periodo[2].NroEntidades
  data.general.historyPeru.regulatedNroEntidades4 = json.Periodo[3].NroEntidades
  data.general.historyPeru.regulatedNroEntidades5 = json.Periodo[4].NroEntidades
  data.general.historyPeru.regulatedNroEntidades6 = json.Periodo[5].NroEntidades
  return data
}

const mapperRCCNonRegulatedNroEntidades = (data, json): any => {
  data.general.historyPeru.nonRegulatedNroEntidades1 = json.Periodo[6].NroEntidades
  data.general.historyPeru.nonRegulatedNroEntidades2 = json.Periodo[7].NroEntidades
  data.general.historyPeru.nonRegulatedNroEntidades3 = json.Periodo[8].NroEntidades
  data.general.historyPeru.nonRegulatedNroEntidades4 = json.Periodo[9].NroEntidades
  data.general.historyPeru.nonRegulatedNroEntidades5 = json.Periodo[10].NroEntidades
  data.general.historyPeru.nonRegulatedNroEntidades6 = json.Periodo[11].NroEntidades
  return data
}

const mapperRCCRegulatedNro = (data, json): any => {
  data.general.historyPeru.regulatedNor1 = json.Periodo[0].Calificaciones.NOR
  data.general.historyPeru.regulatedNor2 = json.Periodo[1].Calificaciones.NOR
  data.general.historyPeru.regulatedNor3 = json.Periodo[2].Calificaciones.NOR
  data.general.historyPeru.regulatedNor4 = json.Periodo[3].Calificaciones.NOR
  data.general.historyPeru.regulatedNor5 = json.Periodo[4].Calificaciones.NOR
  data.general.historyPeru.regulatedNor6 = json.Periodo[5].Calificaciones.NOR
  return data
}

const mapperRCCNonRegulatedNro = (data, json): any => {
  data.general.historyPeru.nonRegulatedNor1 = json.Periodo[6].Calificaciones.NOR
  data.general.historyPeru.nonRegulatedNor2 = json.Periodo[7].Calificaciones.NOR
  data.general.historyPeru.nonRegulatedNor3 = json.Periodo[8].Calificaciones.NOR
  data.general.historyPeru.nonRegulatedNor4 = json.Periodo[9].Calificaciones.NOR
  data.general.historyPeru.nonRegulatedNor5 = json.Periodo[10].Calificaciones.NOR
  data.general.historyPeru.nonRegulatedNor6 = json.Periodo[11].Calificaciones.NOR
  return data
}

const mapperRCCRegulatedCpp = (data, json): any => {
  data.general.historyPeru.regulatedCpp1 = json.Periodo[0].Calificaciones.CPP
  data.general.historyPeru.regulatedCpp2 = json.Periodo[1].Calificaciones.CPP
  data.general.historyPeru.regulatedCpp3 = json.Periodo[2].Calificaciones.CPP
  data.general.historyPeru.regulatedCpp4 = json.Periodo[3].Calificaciones.CPP
  data.general.historyPeru.regulatedCpp5 = json.Periodo[4].Calificaciones.CPP
  data.general.historyPeru.regulatedCpp6 = json.Periodo[5].Calificaciones.CPP
  return data
}

const mapperRCCNonRegulatedCpp = (data, json): any => {
  data.general.historyPeru.nonRegulatedCpp1 = json.Periodo[6].Calificaciones.CPP
  data.general.historyPeru.nonRegulatedCpp2 = json.Periodo[7].Calificaciones.CPP
  data.general.historyPeru.nonRegulatedCpp3 = json.Periodo[8].Calificaciones.CPP
  data.general.historyPeru.nonRegulatedCpp4 = json.Periodo[9].Calificaciones.CPP
  data.general.historyPeru.nonRegulatedCpp5 = json.Periodo[10].Calificaciones.CPP
  data.general.historyPeru.nonRegulatedCpp6 = json.Periodo[11].Calificaciones.CPP
  return data
}

const mapperRCCRegulatedDef = (data, json): any => {
  data.general.historyPeru.regulatedDef1 = json.Periodo[0].Calificaciones.DEF
  data.general.historyPeru.regulatedDef2 = json.Periodo[1].Calificaciones.DEF
  data.general.historyPeru.regulatedDef3 = json.Periodo[2].Calificaciones.DEF
  data.general.historyPeru.regulatedDef4 = json.Periodo[3].Calificaciones.DEF
  data.general.historyPeru.regulatedDef5 = json.Periodo[4].Calificaciones.DEF
  data.general.historyPeru.regulatedDef6 = json.Periodo[5].Calificaciones.DEF
  return data
}

const mapperRCCNonRegulatedDef = (data, json): any => {
  data.general.historyPeru.nonRegulatedDef1 = json.Periodo[6].Calificaciones.DEF
  data.general.historyPeru.nonRegulatedDef2 = json.Periodo[7].Calificaciones.DEF
  data.general.historyPeru.nonRegulatedDef3 = json.Periodo[8].Calificaciones.DEF
  data.general.historyPeru.nonRegulatedDef4 = json.Periodo[9].Calificaciones.DEF
  data.general.historyPeru.nonRegulatedDef5 = json.Periodo[10].Calificaciones.DEF
  data.general.historyPeru.nonRegulatedDef6 = json.Periodo[11].Calificaciones.DEF
  return data
}

const mapperRCCRegulatedDud = (data, json): any => {
  data.general.historyPeru.regulatedDud1 = json.Periodo[0].Calificaciones.DUD
  data.general.historyPeru.regulatedDud2 = json.Periodo[1].Calificaciones.DUD
  data.general.historyPeru.regulatedDud3 = json.Periodo[2].Calificaciones.DUD
  data.general.historyPeru.regulatedDud4 = json.Periodo[3].Calificaciones.DUD
  data.general.historyPeru.regulatedDud5 = json.Periodo[4].Calificaciones.DUD
  data.general.historyPeru.regulatedDud6 = json.Periodo[5].Calificaciones.DUD
  return data
}

const mapperRCCNonRegulatedDud = (data, json): any => {
  data.general.historyPeru.nonRegulatedDud1 = json.Periodo[6].Calificaciones.DUD
  data.general.historyPeru.nonRegulatedDud2 = json.Periodo[7].Calificaciones.DUD
  data.general.historyPeru.nonRegulatedDud3 = json.Periodo[8].Calificaciones.DUD
  data.general.historyPeru.nonRegulatedDud4 = json.Periodo[9].Calificaciones.DUD
  data.general.historyPeru.nonRegulatedDud5 = json.Periodo[10].Calificaciones.DUD
  data.general.historyPeru.nonRegulatedDud6 = json.Periodo[11].Calificaciones.DUD
  return data
}

const mapperRCCRegulatedPer = (data, json): any => {
  data.general.historyPeru.regulatedPer1 = json.Periodo[0].Calificaciones.PER
  data.general.historyPeru.regulatedPer2 = json.Periodo[1].Calificaciones.PER
  data.general.historyPeru.regulatedPer3 = json.Periodo[2].Calificaciones.PER
  data.general.historyPeru.regulatedPer4 = json.Periodo[3].Calificaciones.PER
  data.general.historyPeru.regulatedPer5 = json.Periodo[4].Calificaciones.PER
  data.general.historyPeru.regulatedPer6 = json.Periodo[5].Calificaciones.PER
  return data
}

const mapperRCCNonRegulatedPer = (data, json): any => {
  data.general.historyPeru.nonRegulatedPer1 = json.Periodo[6].Calificaciones.PER
  data.general.historyPeru.nonRegulatedPer2 = json.Periodo[7].Calificaciones.PER
  data.general.historyPeru.nonRegulatedPer3 = json.Periodo[8].Calificaciones.PER
  data.general.historyPeru.nonRegulatedPer4 = json.Periodo[9].Calificaciones.PER
  data.general.historyPeru.nonRegulatedPer5 = json.Periodo[10].Calificaciones.PER
  data.general.historyPeru.nonRegulatedPer6 = json.Periodo[11].Calificaciones.PER
  return data
}

const mapperRCC = (data, json): any => {
  data = mapperRCCRegulatedPeriodo(data, json)
  data = mapperRCCNonRegulatedPeriodo(data, json)
  data = mapperRCCRegulatedNroEntidades(data, json)
  data = mapperRCCNonRegulatedNroEntidades(data, json)
  data = mapperRCCRegulatedNro(data, json)
  data = mapperRCCNonRegulatedNro(data, json)
  data = mapperRCCRegulatedCpp(data, json)
  data = mapperRCCNonRegulatedCpp(data, json)
  data = mapperRCCRegulatedDef(data, json)
  data = mapperRCCNonRegulatedDef(data, json)
  data = mapperRCCRegulatedDud(data, json)
  data = mapperRCCNonRegulatedDud(data, json)
  data = mapperRCCRegulatedPer(data, json)
  data = mapperRCCNonRegulatedPer(data, json)
  return data
}

const mapperResumenSistemaFinanciero = (data, json): any => {
  return mapperRCC(data, json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.RCC.Periodos)
}

const mapperDeudasUltimoPeriodoDeuda0 = (data, json): any => {
  data.general.debtsLastPeriod.entidadMayorDiasRetraso = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Entidad
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.DeudasUltimoPeriodo?.Deuda[0]?.Productos?.Producto[1]) {
    data.general.debtsLastPeriod.calificacionMayorDiasRetraso = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Productos.Producto[1].Monto
    data.general.debtsLastPeriod.sistemaFinancieroMayorDiasRetraso = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Productos.Producto[1].Descripcion
    data.general.debtsLastPeriod.totalDeudaMayorDiasRetraso = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Productos.Producto[1].DiasAtraso
    data.general.debtsLastPeriod.calificacionMayorImporte = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Productos.Producto[1].Monto
    data.general.debtsLastPeriod.sistemaFinancieroMayorImporte = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Productos.Producto[1].Descripcion
    data.general.debtsLastPeriod.totalDeudaMayorImporte = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[0].Productos.Producto[1].DiasAtraso
  }

  return data
}

const mapperDeudasUltimoPeriodo = (data, json): any => {
  data.general.debtsLastPeriod.titlePeriod = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo['@periodo'] ?? ''
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.DeudasUltimoPeriodo?.Deuda[0]) {
    data = mapperDeudasUltimoPeriodoDeuda0(data, json)
  }
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.DeudasUltimoPeriodo?.Deuda[1]) {
    data.general.debtsLastPeriod.entidadMayorDeudas = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[1].Entidad
    data.general.debtsLastPeriod.calificacionMayorDeudas = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[1].Calificacion
    data.general.debtsLastPeriod.sistemaFinancieroMayorDeudas = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[1].SistemaFinanciero
    data.general.debtsLastPeriod.totalDeudaMayorDeudas = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[1].MontoTotal
    data.general.debtsLastPeriod.entidadMayorImporte = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasUltimoPeriodo.Deuda[1].Entidad
  }
  return data
}

const mapperDebtHistoryRegulatedPeriodo = (data, json): any => {
  data.general.debtHistory.regulatedPeriodo1 = json.Deuda[0]['@periodo']
  data.general.debtHistory.regulatedPeriodo2 = json.Deuda[1]['@periodo']
  data.general.debtHistory.regulatedPeriodo3 = json.Deuda[2]['@periodo']
  data.general.debtHistory.regulatedPeriodo4 = json.Deuda[3]['@periodo']
  data.general.debtHistory.regulatedPeriodo5 = json.Deuda[4]['@periodo']
  data.general.debtHistory.regulatedPeriodo6 = json.Deuda[5]['@periodo']
  return data
}

const mapperDebtHistoryNonRegulatedPeriodo = (data, json): any => {
  data.general.debtHistory.nonRegulatedPeriodo1 = json.Deuda[6]['@periodo']
  data.general.debtHistory.nonRegulatedPeriodo2 = json.Deuda[7]['@periodo']
  data.general.debtHistory.nonRegulatedPeriodo3 = json.Deuda[8]['@periodo']
  data.general.debtHistory.nonRegulatedPeriodo4 = json.Deuda[9]['@periodo']
  data.general.debtHistory.nonRegulatedPeriodo5 = json.Deuda[10]['@periodo']
  data.general.debtHistory.nonRegulatedPeriodo6 = json.Deuda[11]['@periodo']
  return data
}

const mapperDebtHistoryRegulatedCalificacion = (data, json): any => {
  data.general.debtHistory.regulatedCalificacion1 = json.Deuda[0].Calificacion
  data.general.debtHistory.regulatedCalificacion2 = json.Deuda[1].Calificacion
  data.general.debtHistory.regulatedCalificacion3 = json.Deuda[2].Calificacion
  data.general.debtHistory.regulatedCalificacion4 = json.Deuda[3].Calificacion
  data.general.debtHistory.regulatedCalificacion5 = json.Deuda[4].Calificacion
  data.general.debtHistory.regulatedCalificacion6 = json.Deuda[5].Calificacion
  return data
}

const mapperDebtHistoryNonRegulatedCalificacion = (data, json): any => {
  data.general.debtHistory.nonRegulatedCalificacion1 = json.Deuda[6].Calificacion
  data.general.debtHistory.nonRegulatedCalificacion2 = json.Deuda[7].Calificacion
  data.general.debtHistory.nonRegulatedCalificacion3 = json.Deuda[8].Calificacion
  data.general.debtHistory.nonRegulatedCalificacion4 = json.Deuda[9].Calificacion
  data.general.debtHistory.nonRegulatedCalificacion5 = json.Deuda[10].Calificacion
  data.general.debtHistory.nonRegulatedCalificacion6 = json.Deuda[11].Calificacion
  return data
}

const mapperDebtHistoryRegulatedNroEntidades = (data, json): any => {
  data.general.debtHistory.regulatedNroEntidades1 = json.Deuda[0].NroEntidades
  data.general.debtHistory.regulatedNroEntidades2 = json.Deuda[1].NroEntidades
  data.general.debtHistory.regulatedNroEntidades3 = json.Deuda[2].NroEntidades
  data.general.debtHistory.regulatedNroEntidades4 = json.Deuda[3].NroEntidades
  data.general.debtHistory.regulatedNroEntidades5 = json.Deuda[4].NroEntidades
  data.general.debtHistory.regulatedNroEntidades6 = json.Deuda[5].NroEntidades
  return data
}

const mapperDebtHistoryNonRegulatedNroEntidades = (data, json): any => {
  data.general.debtHistory.nonRegulatedNroEntidades1 = json.Deuda[6].NroEntidades
  data.general.debtHistory.nonRegulatedNroEntidades2 = json.Deuda[7].NroEntidades
  data.general.debtHistory.nonRegulatedNroEntidades3 = json.Deuda[8].NroEntidades
  data.general.debtHistory.nonRegulatedNroEntidades4 = json.Deuda[9].NroEntidades
  data.general.debtHistory.nonRegulatedNroEntidades5 = json.Deuda[10].NroEntidades
  data.general.debtHistory.nonRegulatedNroEntidades6 = json.Deuda[11].NroEntidades
  return data
}

const mapperDebtHistoryRegulatedDuedaVigente = (data, json): any => {
  data.general.debtHistory.regulatedDuedaVigente1 = json.Deuda[0].DeudaVigente
  data.general.debtHistory.regulatedDuedaVigente2 = json.Deuda[1].DeudaVigente
  data.general.debtHistory.regulatedDuedaVigente3 = json.Deuda[2].DeudaVigente
  data.general.debtHistory.regulatedDuedaVigente4 = json.Deuda[3].DeudaVigente
  data.general.debtHistory.regulatedDuedaVigente5 = json.Deuda[4].DeudaVigente
  data.general.debtHistory.regulatedDuedaVigente6 = json.Deuda[5].DeudaVigente
  return data
}

const mapperDebtHistoryNonRegulatedDuedaVigente = (data, json): any => {
  data.general.debtHistory.nonRegulatedDuedaVigente1 = json.Deuda[6].DeudaVigente
  data.general.debtHistory.nonRegulatedDuedaVigente2 = json.Deuda[7].DeudaVigente
  data.general.debtHistory.nonRegulatedDuedaVigente3 = json.Deuda[8].DeudaVigente
  data.general.debtHistory.nonRegulatedDuedaVigente4 = json.Deuda[9].DeudaVigente
  data.general.debtHistory.nonRegulatedDuedaVigente5 = json.Deuda[10].DeudaVigente
  data.general.debtHistory.nonRegulatedDuedaVigente6 = json.Deuda[11].DeudaVigente
  return data
}

const mapperDebtHistoryRegulatedDuedaAtrasada = (data, json): any => {
  data.general.debtHistory.regulatedDeudaAtrasada1 = json.Deuda[0].DeudaAtrasada
  data.general.debtHistory.regulatedDeudaAtrasada2 = json.Deuda[1].DeudaAtrasada
  data.general.debtHistory.regulatedDeudaAtrasada3 = json.Deuda[2].DeudaAtrasada
  data.general.debtHistory.regulatedDeudaAtrasada4 = json.Deuda[3].DeudaAtrasada
  data.general.debtHistory.regulatedDeudaAtrasada5 = json.Deuda[4].DeudaAtrasada
  data.general.debtHistory.regulatedDeudaAtrasada6 = json.Deuda[5].DeudaAtrasada
  return data
}

const mapperDebtHistoryNonRegulatedDuedaAtrasada = (data, json): any => {
  data.general.debtHistory.nonRegulatedFlagDeudaAtrasada1 = json.Deuda[6].DeudaAtrasada
  data.general.debtHistory.nonRegulatedFlagDeudaAtrasada2 = json.Deuda[7].DeudaAtrasada
  data.general.debtHistory.nonRegulatedFlagDeudaAtrasada3 = json.Deuda[8].DeudaAtrasada
  data.general.debtHistory.nonRegulatedFlagDeudaAtrasada4 = json.Deuda[9].DeudaAtrasada
  data.general.debtHistory.nonRegulatedFlagDeudaAtrasada5 = json.Deuda[10].DeudaAtrasada
  data.general.debtHistory.nonRegulatedFlagDeudaAtrasada6 = json.Deuda[11].DeudaAtrasada
  return data
}

const mapperDebtHistoryRegulatedDuedaJudicial = (data, json): any => {
  data.general.debtHistory.regulatedDuedaJudicial1 = json.Deuda[0].DeudaJudicial
  data.general.debtHistory.regulatedDuedaJudicial2 = json.Deuda[1].DeudaJudicial
  data.general.debtHistory.regulatedDuedaJudicial3 = json.Deuda[2].DeudaJudicial
  data.general.debtHistory.regulatedDuedaJudicial4 = json.Deuda[3].DeudaJudicial
  data.general.debtHistory.regulatedDuedaJudicial5 = json.Deuda[4].DeudaJudicial
  data.general.debtHistory.regulatedDuedaJudicial6 = json.Deuda[5].DeudaJudicial
  return data
}

const mapperDebtHistoryNonRegulatedDuedaJudicial = (data, json): any => {
  data.general.debtHistory.nonRegulatedDuedaJudicial1 = json.Deuda[6].DeudaJudicial
  data.general.debtHistory.nonRegulatedDuedaJudicial2 = json.Deuda[7].DeudaJudicial
  data.general.debtHistory.nonRegulatedDuedaJudicial3 = json.Deuda[8].DeudaJudicial
  data.general.debtHistory.nonRegulatedDuedaJudicial4 = json.Deuda[9].DeudaJudicial
  data.general.debtHistory.nonRegulatedDuedaJudicial5 = json.Deuda[10].DeudaJudicial
  data.general.debtHistory.nonRegulatedDuedaJudicial6 = json.Deuda[11].DeudaJudicial
  return data
}

const mapperDebtHistoryRegulatedDuedaCastigada = (data, json): any => {
  data.general.debtHistory.regulatedDuedaCastigada1 = json.Deuda[0].DeudaCastigada
  data.general.debtHistory.regulatedDuedaCastigada2 = json.Deuda[1].DeudaCastigada
  data.general.debtHistory.regulatedDuedaCastigada3 = json.Deuda[2].DeudaCastigada
  data.general.debtHistory.regulatedDuedaCastigada4 = json.Deuda[3].DeudaCastigada
  data.general.debtHistory.regulatedDuedaCastigada5 = json.Deuda[4].DeudaCastigada
  data.general.debtHistory.regulatedDuedaCastigada6 = json.Deuda[5].DeudaCastigada
  return data
}

const mapperDebtHistoryNonRegulatedDuedaCastigada = (data, json): any => {
  data.general.debtHistory.nonRegulatedDuedaCastigada1 = json.Deuda[6].DeudaCastigada
  data.general.debtHistory.nonRegulatedDuedaCastigada2 = json.Deuda[7].DeudaCastigada
  data.general.debtHistory.nonRegulatedDuedaCastigada3 = json.Deuda[8].DeudaCastigada
  data.general.debtHistory.nonRegulatedDuedaCastigada4 = json.Deuda[9].DeudaCastigada
  data.general.debtHistory.nonRegulatedDuedaCastigada5 = json.Deuda[10].DeudaCastigada
  data.general.debtHistory.nonRegulatedDuedaCastigada6 = json.Deuda[11].DeudaCastigada
  return data
}

const mapperDebtHistoryRegulatedDuedaTotal = (data, json): any => {
  data.general.debtHistory.regulatedDuedaTotal1 = json.Deuda[0].DeudaTotal
  data.general.debtHistory.regulatedDuedaTotal2 = json.Deuda[1].DeudaTotal
  data.general.debtHistory.regulatedDuedaTotal3 = json.Deuda[2].DeudaTotal
  data.general.debtHistory.regulatedDuedaTotal4 = json.Deuda[3].DeudaTotal
  data.general.debtHistory.regulatedDuedaTotal5 = json.Deuda[4].DeudaTotal
  data.general.debtHistory.regulatedDuedaTotal6 = json.Deuda[5].DeudaTotal
  return data
}

const mapperDebtHistoryNonRegulatedDuedaTotal = (data, json): any => {
  data.general.debtHistory.nonRegulatedDuedaTotal1 = json.Deuda[6].DeudaTotal
  data.general.debtHistory.nonRegulatedDuedaTotal2 = json.Deuda[7].DeudaTotal
  data.general.debtHistory.nonRegulatedDuedaTotal3 = json.Deuda[8].DeudaTotal
  data.general.debtHistory.nonRegulatedDuedaTotal4 = json.Deuda[9].DeudaTotal
  data.general.debtHistory.nonRegulatedDuedaTotal5 = json.Deuda[10].DeudaTotal
  data.general.debtHistory.nonRegulatedDuedaTotal6 = json.Deuda[11].DeudaTotal
  return data
}

const mapperDebtHistoryRegulatedDiasAtraso = (data, json): any => {
  data.general.debtHistory.regulatedDiasAtraso1 = json.Deuda[0].DiasAtraso
  data.general.debtHistory.regulatedDiasAtraso2 = json.Deuda[1].DiasAtraso
  data.general.debtHistory.regulatedDiasAtraso3 = json.Deuda[2].DiasAtraso
  data.general.debtHistory.regulatedDiasAtraso4 = json.Deuda[3].DiasAtraso
  data.general.debtHistory.regulatedDiasAtraso5 = json.Deuda[4].DiasAtraso
  data.general.debtHistory.regulatedDiasAtraso6 = json.Deuda[5].DiasAtraso
  return data
}

const mapperDebtHistoryNonRegulatedDiasAtraso = (data, json): any => {
  data.general.debtHistory.nonRegulatedDiasAtraso1 = json.Deuda[6].DiasAtraso
  data.general.debtHistory.nonRegulatedDiasAtraso2 = json.Deuda[7].DiasAtraso
  data.general.debtHistory.nonRegulatedDiasAtraso3 = json.Deuda[8].DiasAtraso
  data.general.debtHistory.nonRegulatedDiasAtraso4 = json.Deuda[9].DiasAtraso
  data.general.debtHistory.nonRegulatedDiasAtraso5 = json.Deuda[10].DiasAtraso
  data.general.debtHistory.nonRegulatedDiasAtraso6 = json.Deuda[11].DiasAtraso
  return data
}

const mapperDeudasHistoricas = (data, json): any => {
  data = mapperDebtHistoryRegulatedPeriodo(data, json)
  data = mapperDebtHistoryNonRegulatedPeriodo(data, json)
  data = mapperDebtHistoryRegulatedCalificacion(data, json)
  data = mapperDebtHistoryNonRegulatedCalificacion(data, json)
  data = mapperDebtHistoryRegulatedNroEntidades(data, json)
  data = mapperDebtHistoryNonRegulatedNroEntidades(data, json)
  data = mapperDebtHistoryRegulatedDuedaVigente(data, json)
  data = mapperDebtHistoryNonRegulatedDuedaVigente(data, json)
  data = mapperDebtHistoryRegulatedDuedaAtrasada(data, json)
  data = mapperDebtHistoryNonRegulatedDuedaAtrasada(data, json)
  data = mapperDebtHistoryRegulatedDuedaJudicial(data, json)
  data = mapperDebtHistoryNonRegulatedDuedaJudicial(data, json)
  data = mapperDebtHistoryRegulatedDuedaCastigada(data, json)
  data = mapperDebtHistoryNonRegulatedDuedaCastigada(data, json)
  data = mapperDebtHistoryRegulatedDuedaTotal(data, json)
  data = mapperDebtHistoryNonRegulatedDuedaTotal(data, json)
  data = mapperDebtHistoryRegulatedDiasAtraso(data, json)
  data = mapperDebtHistoryNonRegulatedDiasAtraso(data, json)
  return data
}
const mapperSistemaFinancieroDeudasHistoricas = (data, json): any => {
  return mapperDeudasHistoricas(data, json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.DeudasHistoricas)
}

const mapperModulo3 = (data, json): any => {
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.Microfinanzas) {
    if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.Microfinanzas?.CalificacionEntidad?.Entidades[0]) {
      data.general.microfinanceDebt.ultimoPeriodo = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.Microfinanzas.CalificacionEntidad.Entidades[0]['@periodo']
      data.general.microfinanceDebt.ultimoPeriodo = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.Microfinanzas.CalificacionEntidad.Entidades[0]['@periodo']
    }

    data = mapperMicrofinanzas(data, json)
  }
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.ResumenComportamientoPago?.Semaforo) {
    data = mapperResumenComportamientoPago(data, json)
  }
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.RCC?.Periodos?.Periodo) {
    data = mapperResumenSistemaFinanciero(data, json)
  }
  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.RCC?.DetalleEntidades) {
    data.general.lastPeriodDetail.ultimoPeriodo = json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data.SistemaFinanciero.RCC.DetalleEntidades['@periodo']
  }

  data = mapperDeudasUltimoPeriodo(data, json)

  if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3].Data?.SistemaFinanciero?.DeudasHistoricas?.Deuda) {
    data = mapperSistemaFinancieroDeudasHistoricas(data, json)
  }
  return data
}

const mapperModulos = (data, json): any => {
  if (json.informeCesceDgx.DGX.ReporteCrediticio?.Modulos) {
    // falta el mapeo de Directorio de personas
    data = mapperPersonDirectory(data, json)
    if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[1]) {
      data = mapperModulo1(data, json)
    }
    if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[0]) {
      data = mapperModulo0(data, json)
    }
    if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[2]) {
      data = mapperModulo2(data, json)
    }
    if (json.informeCesceDgx.DGX.ReporteCrediticio.Modulos.Modulo[3]) {
      data = mapperModulo3(data, json)
    }
  }
  return data
}

const mapperScorePeru = (data, json): any => {
  data.general.scorePeru.puntaje = json.informeCreica.CREICA.puntaje ?? ''
  data.general.scorePeru.nivelRiesgo = json.informeCreica.CREICA.nivelRiesgo ?? ''
  data.general.scorePeru.conclusion = json.informeCreica.CREICA.conclusion ?? ''
  return data
}

const mapperHistoryPeru = (data, json): any => {
  data.general.historyPeru.regulatedTotalDeuda1 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda1 ?? ''
  data.general.historyPeru.regulatedTotalDeuda2 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda2 ?? ''
  data.general.historyPeru.regulatedTotalDeuda3 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda3 ?? ''
  data.general.historyPeru.regulatedTotalDeuda4 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda4 ?? ''
  data.general.historyPeru.regulatedTotalDeuda5 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda5 ?? ''
  data.general.historyPeru.regulatedTotalDeuda6 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda6 ?? ''
  data.general.historyPeru.nonRegulatedTotalDeuda1 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda7 ?? ''
  data.general.historyPeru.nonRegulatedTotalDeuda2 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda8 ?? ''
  data.general.historyPeru.nonRegulatedTotalDeuda3 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda9 ?? ''
  data.general.historyPeru.nonRegulatedTotalDeuda4 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda10 ?? ''
  data.general.historyPeru.nonRegulatedTotalDeuda5 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda11 ?? ''
  data.general.historyPeru.nonRegulatedTotalDeuda6 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montorccdeuda12 ?? ''
  return data
}

const mapperMicrofinanceDebt = (data, json): any => {
  data.general.microfinanceDebt.regulatedTotalDeuda1 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda1 ?? ''
  data.general.microfinanceDebt.regulatedTotalDeuda2 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda2 ?? ''
  data.general.microfinanceDebt.regulatedTotalDeuda3 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda3 ?? ''
  data.general.microfinanceDebt.regulatedTotalDeuda4 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda4 ?? ''
  data.general.microfinanceDebt.regulatedTotalDeuda5 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda5 ?? ''
  data.general.microfinanceDebt.regulatedTotalDeuda6 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda6 ?? ''
  data.general.microfinanceDebt.nonRegulatedTotalDeuda1 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda7 ?? ''
  data.general.microfinanceDebt.nonRegulatedTotalDeuda2 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda8 ?? ''
  data.general.microfinanceDebt.nonRegulatedTotalDeuda3 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda9 ?? ''
  data.general.microfinanceDebt.nonRegulatedTotalDeuda4 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda10 ?? ''
  data.general.microfinanceDebt.nonRegulatedTotalDeuda5 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda11 ?? ''
  data.general.microfinanceDebt.nonRegulatedTotalDeuda6 = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.montomicrodeuda12 ?? ''

  data = mapperMicrofinanceDebtCesdata(data, json)
  return data
}

const mapperMicrofinanceDebtCesdata = (data, json): any => {
  data.general.microfinanceDebt.nroEntidadesInput = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.microfinanzanument ?? ''
  data.general.microfinanceDebt.peorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.microfinanzapeorcali ?? ''
  data.general.microfinanceDebt.nroEntidadesInput = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.microfinanzanument ?? ''
  data.general.microfinanceDebt.peorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.microfinanzapeorcali ?? ''

  return data
}

const mapperDebtsLastPeriod = (data, json): any => {
  data.general.debtsLastPeriod.entidadPeorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.entipeorcali ?? ''
  data.general.debtsLastPeriod.calificacionPeorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.califipeorcali ?? ''
  data.general.debtsLastPeriod.sistemaFinancieroPeorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.sfpeorcali ?? ''
  data.general.debtsLastPeriod.totalDeudaPeorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.deudapeorcali ?? ''

  return data
}

const mapperLastPeriodDetail = (data, json): any => {
  data.general.lastPeriodDetail.nroEntidades = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.numentrcc ?? ''
  data.general.lastPeriodDetail.totalCreditosVigentes = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.totcredvigente ?? ''
  data.general.lastPeriodDetail.totalCreditosVencidos = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.totcredvenc ?? ''
  data.general.lastPeriodDetail.peorCalificacion = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.califipeorcali ?? ''
  data.general.lastPeriodDetail.totalCreditosRefinanciados = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.totcredref ?? ''
  data.general.lastPeriodDetail.totalCreditosJudiciales = json.informeCesceDgx.DGX.ReporteCrediticio.calculadosReporteCrediticio.cesdata.totcredjud ?? ''

  return data
}

const mapperDGX = (data, json): any => {
  if (json.informeCesceDgx.DGX.DGXUNION) {
    data = mapperDGXUnion(data, json)
  }

  data = mapperModulos(data, json)
  if (json.informeCesceDgx.DGX?.ReporteCrediticio?.calculadosReporteCrediticio?.cesdata) {
    data = mapperDebtsLastPeriod(data, json)
    data = mapperLastPeriodDetail(data, json)
    data = mapperHistoryPeru(data, json)
    data = mapperMicrofinanceDebt(data, json)
  }

  return data
}

export const mapperPeruEquifax = (data, json): any => {
  if (json.informeCreica?.CREICA) {
    data.general.generalData.agencia = json.informeCreica.CREICA.REMITENTE ?? ''

    if (json.informeCreica.CREICA.DATOSHOST) {
      data = mapperDatosHost(data, json)
    }

    if (json.informeCreica.CREICA.IDENTIFICACION?.DEUDOR) {
      data = mapperIdentificacion(data, json)
    }
  }
  if (json.informeCesceDgx?.DGX) {
    data = mapperDGX(data, json)
  }

  data = mapperScorePeru(data, json)

  return data
}
