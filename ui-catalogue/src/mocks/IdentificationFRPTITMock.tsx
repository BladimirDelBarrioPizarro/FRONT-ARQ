import * as Faker from 'faker'

const dataIdentificationFRPTITEmpty = {
  referencia: '',
  reffuente: '',
  codigoempresa: '',
  denominacion: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  vat: '',
  actividades: '',
  telefono: '',
  fax: ''
}

const dataIdentificationFRPTITFaker = {
  referencia: Faker.random.words(),
  reffuente: Faker.random.words(),
  codigoempresa: Faker.random.words(),
  denominacion: Faker.random.words(),
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  vat: Faker.random.words(),
  actividades: Faker.random.words(),
  telefono: Faker.random.words(),
  fax: Faker.random.words()
}

export {
  dataIdentificationFRPTITEmpty,
  dataIdentificationFRPTITFaker
}
