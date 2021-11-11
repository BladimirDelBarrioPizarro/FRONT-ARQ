import * as Faker from 'faker'

const dataDemandsEmpty = {
  codigo: '',
  fechademanda: '',
  codigodemanda: '',
  importedemanda: '',
  demandante: ''
}

const dataDemandsFaker = {
  codigo: Faker.random.words(),
  fechademanda: new Date(Faker.date.between('2015-01-01', '2020-01-05')).toString(),
  codigodemanda: Faker.random.words(),
  importedemanda: Faker.random.words(),
  demandante: Faker.random.words()

}

export {
  dataDemandsEmpty,
  dataDemandsFaker
}
