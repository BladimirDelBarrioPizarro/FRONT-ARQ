import * as Faker from 'faker'

const dataEmployessFranciaEmpty = {
  nempleados1: '',
  nempleados2: '',
  nempleados3: '',
  nempleados4: '',
  nempleados5: '',
  nempleados6: ''
}

const dataEmployessFranciaFaker = {
  nempleados1: Faker.random.words(),
  nempleados2: Faker.random.words(),
  nempleados3: Faker.random.words(),
  nempleados4: Faker.random.words(),
  nempleados5: Faker.random.words(),
  nempleados6: Faker.random.words()
}

export {
  dataEmployessFranciaEmpty,
  dataEmployessFranciaFaker
}
