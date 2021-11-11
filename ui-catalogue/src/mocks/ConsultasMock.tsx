import * as Faker from 'faker'

const dataConsultasEmpty = {
  temporales: '',
  permanentes: '',
  total: ''
}

const dataConsultasFaker = {
  temporales: Faker.random.words(),
  permanentes: Faker.random.words(),
  total: Faker.random.words()
}

export {
  dataConsultasEmpty,
  dataConsultasFaker
}
