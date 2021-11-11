import * as Faker from 'faker'

const dataProtestDemandsEUDBPEmpty = {
  codigoincidencia: '',
  tipoincidencia: '',
  fechaincidencia: '',
  numeroincidencias: '',
  importeIncidencias: ''
}

const dataProtestDemandsEUDBPFaker = {
  codigoincidencia: Faker.random.words(),
  tipoincidencia: Faker.random.words(),
  fechaincidencia: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  numeroincidencias: Faker.random.number(99),
  importeIncidencias: Faker.random.number(99)
}

export {
  dataProtestDemandsEUDBPEmpty,
  dataProtestDemandsEUDBPFaker
}
