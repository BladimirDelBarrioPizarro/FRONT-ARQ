import * as Faker from 'faker'

const dataGeneralDataNoRefEmpty = {
  remitente: '',
  nombredocumento: '',
  tipodocumento: '',
  fechamensaje: '',
  fecha: '',
  fechaultimabusqueda: '',
  numerodocumento: '',
  numeropeticion: '',
  codigoempresa: '',
  moneda: '',
  nombrefichero: ''
}

const dataGeneralDataNoRefFaker = {
  remitente: Faker.random.words(),
  nombredocumento: Faker.random.words(),
  tipodocumento: Faker.random.words(),
  fechamensaje: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaultimabusqueda: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  numerodocumento: Faker.random.words(),
  numeropeticion: Faker.random.words(),
  codigoempresa: Faker.random.words(),
  moneda: Faker.random.words(),
  nombrefichero: Faker.random.words()
}

export {
  dataGeneralDataNoRefEmpty,
  dataGeneralDataNoRefFaker
}
