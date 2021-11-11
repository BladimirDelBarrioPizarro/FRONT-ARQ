import * as Faker from 'faker'

const dataOtherDataEmpty = {
  actividades: '',
  telefono: '',
  telefax: '',
  telex: ''
}

const dataOtherDataFaker = {
  actividades: Faker.random.words(),
  telefono: Faker.random.words(),
  telefax: Faker.random.words(),
  telex: Faker.random.words()
}

export {
  dataOtherDataEmpty,
  dataOtherDataFaker
}
