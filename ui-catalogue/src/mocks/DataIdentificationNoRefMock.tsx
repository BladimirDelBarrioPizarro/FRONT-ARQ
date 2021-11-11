import * as Faker from 'faker'

const dataIdentificationNoRefEmpty = {
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

const dataIdentificationNoRefFaker = {
  razonSocial: Faker.random.words(),
  denominacion: Faker.random.words(),
  primaryAddress: Faker.random.words(),
  domicilio: Faker.random.words(),
  addressLine: Faker.random.words(),
  localidad: Faker.random.words(),
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
  dataIdentificationNoRefEmpty,
  dataIdentificationNoRefFaker
}
