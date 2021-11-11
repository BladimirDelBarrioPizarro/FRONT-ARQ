import * as Faker from 'faker'

const dataReferencesResultEmpty = {
  referencia: '',
  nombredoc: '',
  tipodocumento: '',
  fechamensaje: '',
  fecha: '',
  fechaultimabus: '',
  ndocumento: '',
  codigoempresa: '',
  moneda: '',
  nombrefichero: ''
}

const detailReferencesResultDataFaker = {
  referencia: Faker.company.companyName(),
  nombredoc: Faker.company.companyName(),
  tipodocumento: Faker.random.words(),
  fechamensaje: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fecha: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  fechaultimabus: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  ndocumento: Faker.random.number(99),
  codigoempresa: Faker.random.words(),
  moneda: Faker.address.streetAddress(),
  nombrefichero: Faker.phone.phoneNumber()
}

export {
  dataReferencesResultEmpty,
  detailReferencesResultDataFaker
}
