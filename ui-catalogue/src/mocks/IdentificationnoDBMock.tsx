import * as Faker from 'faker'

const dataIdentificationnoDBEmpty = {
  codigoempresa: '',
  denominacion: '',
  domicilio: '',
  localidad: '',
  provincia: '',
  codigopostal: '',
  pais: '',
  referenciafuente: ''
}

const dataIdentificationnoDBFaker = {
  codigoempresa: Faker.random.words(),
  denominacion: Faker.random.words(),
  domicilio: Faker.random.words(),
  localidad: Faker.random.words(),
  provincia: Faker.random.words(),
  codigopostal: Faker.random.words(),
  pais: Faker.random.words(),
  referenciafuente: Faker.random.words()
}

export {
  dataIdentificationnoDBEmpty,
  dataIdentificationnoDBFaker
}
