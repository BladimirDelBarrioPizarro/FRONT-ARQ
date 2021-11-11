import * as Faker from 'faker'

const dataBanksFranciaEmpty = {
  input1: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: ''
}

const dataBanksFranciaFaker = {
  input1: Faker.random.words(),
  input2: Faker.random.words(),
  input3: Faker.random.words(),
  input4: Faker.random.words(),
  input5: Faker.random.words(),
  input6: Faker.random.words(),
  input7: Faker.random.words()
}

export {
  dataBanksFranciaEmpty,
  dataBanksFranciaFaker
}
