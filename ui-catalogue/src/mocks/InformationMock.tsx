import * as Faker from 'faker'

const dataIdentificationEmpty = {
  razonSocial: '',
  denominacion: '',
  primaryAddress: '',
  domicilio: '',
  addressLine: '',
  localidad: '',
  provincia: '',
  codigoPostal: '',
  descripcion: '',
  pais: '',
  anteriorRazonSocial: '',
  referenciaInforme: '',
  referenciaFuente: '',
  codigoEmpresa: '',
  registrationNumber: '',
  bolsa: ''
}

const dataIdentificationFaker = {
  razonSocial: Faker.random.words(),
  denominacion: Faker.random.words(),
  primaryAddress: Faker.address.streetAddress(),
  domicilio: Faker.address.streetAddress(),
  addressLine: Faker.address.streetAddress(),
  localidad: Faker.address.streetAddress(),
  provincia: Faker.random.words(),
  codigoPostal: Faker.random.words(),
  descripcion: Faker.random.words(),
  pais: Faker.random.words(),
  anteriorRazonSocial: Faker.random.words(),
  referenciaInforme: Faker.random.words(),
  referenciaFuente: Faker.random.words(),
  codigoEmpresa: Faker.random.words(),
  registrationNumber: Faker.random.words(),
  bolsa: Faker.random.words()
}

export {
  dataIdentificationEmpty,
  dataIdentificationFaker
}
