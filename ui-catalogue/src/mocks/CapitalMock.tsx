import * as Faker from 'faker'

const dataCapitalEmpty = {
  capital1: '',
  capital2: '',
  tipo: '',
  acciones: '',
  importe: '',
  empleados1: '',
  empleados2: ''
}

const dataCapitalFaker = {
  capital1: Faker.random.words(),
  capital2: Faker.random.words(),
  tipo: Faker.random.words(),
  acciones: Faker.random.words(),
  importe: Faker.random.words(),
  empleados1: Faker.random.words(),
  empleados2: Faker.random.words()
}

export {
  dataCapitalEmpty,
  dataCapitalFaker
}
