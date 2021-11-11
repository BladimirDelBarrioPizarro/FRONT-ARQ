import * as Faker from 'faker'

const dataGeneralDataRestoPaises2Empty = {
  remitente: '',
  nombredoc: '',
  tipodoc: '',
  fechamensaje: '',
  fecha: '',
  fechaultima: '',
  numerodoc: '',
  codigoempresa: '',
  moneda: '',
  nombrefichero: ''
}

const dataGeneralDataRestoPaises2Faker = {
  remitente: Faker.random.words(),
  nombredoc: Faker.random.words(),
  tipodoc: Faker.random.words(),
  fechamensaje: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaultima: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  numerodoc: Faker.random.words(),
  codigoempresa: Faker.random.words(),
  moneda: Faker.random.words(),
  nombrefichero: Faker.random.words()
}

export {
  dataGeneralDataRestoPaises2Empty,
  dataGeneralDataRestoPaises2Faker
}
