import * as Faker from 'faker'

const dataScorePeruEmpty = {
  score: '',
  puntaje: '',
  nivelRiesgo: '',
  conclusion: '',
  scoreEmpresasNoPrico: '',
  scoreAutonomos: '',
  tipoEmpresa: ''
}

const dataScorePeruFaker = {
  score: Faker.random.words(),
  puntaje: Faker.random.words(),
  nivelRiesgo: Faker.random.words(),
  conclusion: Faker.random.words(),
  scoreEmpresasNoPrico: Faker.random.words(),
  scoreAutonomos: Faker.random.words(),
  tipoEmpresa: Faker.random.words()
}

export {
  dataScorePeruEmpty,
  dataScorePeruFaker
}
