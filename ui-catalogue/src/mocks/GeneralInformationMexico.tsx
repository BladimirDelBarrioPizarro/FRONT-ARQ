import * as Faker from 'faker'

const dataGeneralInformationMexicoEmpty = {
  fechaconsulta: '',
  rfc: '',
  nombre: '',
  tipo: ''
}

const dataGeneralInformationMexicoFaker = {
  fechaconsulta: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  rfc: Faker.random.words(),
  nombre: Faker.random.words(),
  tipo: Faker.random.words()
}

export {
  dataGeneralInformationMexicoEmpty,
  dataGeneralInformationMexicoFaker
}
