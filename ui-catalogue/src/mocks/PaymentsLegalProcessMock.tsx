import * as Faker from 'faker'

const paymentsLegalProcessEmpty = {
  empresa: '',
  history: '',
  financial: '',
  criminal: '',
  judgements: '',
  claims: '',
  secured: '',
  legal: '',
  disaster: '',
  operational: '',
  others: '',
  actual: '',
  months: '',
  norm: ''
}

const paymentsLegalProcessFaker = {
  empresa: Faker.random.words(),
  history: Faker.random.words(),
  financial: Faker.random.words(),
  criminal: Faker.random.words(),
  judgements: Faker.random.words(),
  claims: Faker.random.words(),
  secured: Faker.random.words(),
  legal: Faker.random.words(),
  disaster: Faker.random.words(),
  operational: Faker.random.words(),
  others: Faker.random.words(),
  actual: Faker.random.words(),
  months: Faker.random.words(),
  norm: Faker.random.words()
}

export {
  paymentsLegalProcessEmpty,
  paymentsLegalProcessFaker
}
