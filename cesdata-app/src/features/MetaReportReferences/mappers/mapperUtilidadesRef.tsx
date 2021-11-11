var dataCorresponsalDataFaker = {
  corresponsal: '',
  nombre: '',
  sucursal: ''
}

var dataCompanyDataFaker = {
  empresa: '',
  cif: '',
  nombre: '',
  codigopostal: '',
  direccion: ''
}

var dataApplicationDetailsFaker = {
  npeticion: '',
  plazapago: '',
  fpeticion: '',
  modelo: '',
  productoobtener: '',
  importeoperacion: '',
  divoperacion: '',
  importeoperacioncre: '',
  divoperacioncre: ''
}
export var dataRefReceptionNumFaker = {
  correspondentData: dataCorresponsalDataFaker,
  companyData: dataCompanyDataFaker,
  applicationDetails: dataApplicationDetailsFaker
}

export const mapperCorrespondentData = (data): any => {
  dataRefReceptionNumFaker.correspondentData.nombre = data.nombre ?? ''
  dataRefReceptionNumFaker.correspondentData.corresponsal = data.corresponsal ?? ''
  dataRefReceptionNumFaker.correspondentData.sucursal = data.sucursal ?? ''
  return data
}

export const mapperCompanyData = (data): any => {
  dataRefReceptionNumFaker.companyData.empresa = data.empresa ?? ''
  dataRefReceptionNumFaker.companyData.cif = data.cif ?? ''
  dataRefReceptionNumFaker.companyData.nombre = data.nomEmpresa ?? ''
  dataRefReceptionNumFaker.companyData.codigopostal = data.codPostal ?? ''
  dataRefReceptionNumFaker.companyData.direccion = data.direccion ?? ''
  return data
}

export const mapperApplicationDetails = (data): any => {
  dataRefReceptionNumFaker.applicationDetails.npeticion = data.numPeticion ?? ''
  dataRefReceptionNumFaker.applicationDetails.plazapago = data.plazoPago ?? ''
  dataRefReceptionNumFaker.applicationDetails.fpeticion = data.fechaPeticion ?? ''
  dataRefReceptionNumFaker.applicationDetails.modelo = data.mod ?? ''
  dataRefReceptionNumFaker.applicationDetails.productoobtener = data.producto ?? ''
  dataRefReceptionNumFaker.applicationDetails.importeoperacion = data.importeOperacion ?? ''
  dataRefReceptionNumFaker.applicationDetails.divoperacion = data.divisaOperacion ?? ''
  dataRefReceptionNumFaker.applicationDetails.importeoperacioncre = data.importeCredito ?? ''
  dataRefReceptionNumFaker.applicationDetails.divoperacioncre = data.divisaCredito ?? ''
  return data
}

export const mapperUtilidadesRef = (data): any => {
  data = mapperCorrespondentData(data)
  data = mapperCompanyData(data)
  data = mapperApplicationDetails(data)

  return data
}
