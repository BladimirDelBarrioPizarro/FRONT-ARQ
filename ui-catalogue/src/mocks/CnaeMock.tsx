import * as Faker from 'faker'

const dataCnaeEmpty = {
  tipo: '',
  actividad: '',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: ''
}

const dataCnaeFaker = {
  tipo: Faker.random.words(),
  actividad: Faker.random.words(),
  input3: Faker.random.words(),
  input4: Faker.random.words(),
  input5: Faker.random.words(),
  input6: Faker.random.words(),
  input7: Faker.random.words(),
  input8: Faker.random.words()
}

export {
  dataCnaeEmpty,
  dataCnaeFaker
}
