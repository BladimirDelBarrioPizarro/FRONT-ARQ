export const mapperEudbpPT = (data, json): any => {
  // DATOS GENERALES
  if (json.informeCreica.CREICA.DATOSHOST.CODCORRESPONSAL) {
    data.general.generalData.agencia = json.informeCreica.CREICA.DATOSHOST.CODCORRESPONSAL
  }
  return data
}
