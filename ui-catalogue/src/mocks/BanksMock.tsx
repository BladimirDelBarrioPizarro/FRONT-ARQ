import * as Faker from 'faker'

const dataBankEmpty = {
  input1: '',
  input2: ''
}

const dataBankFaker = {
  input1: Faker.random.words(),
  input2: Faker.random.words()
}

export {
  dataBankEmpty,
  dataBankFaker
}
