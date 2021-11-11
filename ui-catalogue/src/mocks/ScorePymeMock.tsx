import * as Faker from 'faker'

const dataScorePymeMexicoEmpty = {
  valorscore: '',
  error: '',
  motivos: ''
}

const dataScorePymeMexicoFaker = {
  valorscore: Faker.random.words(),
  error: Faker.random.words(),
  motivos: Faker.random.words()
}

export {
  dataScorePymeMexicoEmpty,
  dataScorePymeMexicoFaker
}
