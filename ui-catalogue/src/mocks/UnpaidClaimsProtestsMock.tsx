import * as Faker from 'faker'

const dataUnpaisClaimsProtestsEmpty = {
  codigoincidencia: '',
  tipoincidencia: '',
  fechaincidencia: '',
  numeroincidencias: '',
  importeincidencias: ''
}

const dataUnpaisClaimsProtestsFaker = {
  codigoincidencia: Faker.random.words(),
  tipoincidencia: Faker.random.words(),
  fechaincidencia: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  numeroincidencias: Faker.random.words(),
  importeincidencias: Faker.random.words()
}

export {
  dataUnpaisClaimsProtestsEmpty,
  dataUnpaisClaimsProtestsFaker
}
