import * as Faker from 'faker'

const dataPaydexHistoricEmpty = {
  mes1: '',
  mes2: '',
  mes3: '',
  mes4: '',
  mes5: '',
  mes6: '',
  mes7: '',
  mes8: '',
  paidex1: '',
  paidex2: '',
  paidex3: '',
  paidex4: '',
  paidex5: '',
  paidex6: '',
  paidex7: '',
  paidex8: ''
}

const dataPaydexHistoricFaker = {
  mes1: Faker.random.words(),
  mes2: Faker.random.words(),
  mes3: Faker.random.words(),
  mes4: Faker.random.words(),
  mes5: Faker.random.words(),
  mes6: Faker.random.words(),
  mes7: Faker.random.words(),
  mes8: Faker.random.words(),
  paidex1: Faker.random.words(),
  paidex2: Faker.random.words(),
  paidex3: Faker.random.words(),
  paidex4: Faker.random.words(),
  paidex5: Faker.random.words(),
  paidex6: Faker.random.words(),
  paidex7: Faker.random.words(),
  paidex8: Faker.random.words()
}

export {
  dataPaydexHistoricEmpty,
  dataPaydexHistoricFaker
}
