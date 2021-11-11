import * as Faker from 'faker'

const dataRelationShipEmpty = {
  input1: '',
  input2: '',
  numDum: '',
  accionista: '',
  tipo: '',
  porcentaje: '',
  importe1: '',
  importe2: ''
}

const dataRelationShipFaker = [
  {
    input1: Faker.random.words(),
    input2: Faker.random.words(),
    numDum: Faker.random.words(),
    accionista: Faker.random.words(),
    tipo: Faker.random.words(),
    porcentaje: Faker.random.words(),
    importe1: Faker.random.words(),
    importe2: Faker.random.words()
  },
  {
    input1: Faker.random.words(),
    input2: Faker.random.words(),
    numDum: Faker.random.words(),
    accionista: Faker.random.words(),
    tipo: Faker.random.words(),
    porcentaje: Faker.random.words(),
    importe1: Faker.random.words(),
    importe2: Faker.random.words()
  },
  {
    input1: Faker.random.words(),
    input2: Faker.random.words(),
    numDum: Faker.random.words(),
    accionista: Faker.random.words(),
    tipo: Faker.random.words(),
    porcentaje: Faker.random.words(),
    importe1: Faker.random.words(),
    importe2: Faker.random.words()
  },
  {
    input1: Faker.random.words(),
    input2: Faker.random.words(),
    numDum: Faker.random.words(),
    accionista: Faker.random.words(),
    tipo: Faker.random.words(),
    porcentaje: Faker.random.words(),
    importe1: Faker.random.words(),
    importe2: Faker.random.words()
  },
  {
    input1: Faker.random.words(),
    input2: Faker.random.words(),
    numDum: Faker.random.words(),
    accionista: Faker.random.words(),
    tipo: Faker.random.words(),
    porcentaje: Faker.random.words(),
    importe1: Faker.random.words(),
    importe2: Faker.random.words()
  }
]

export {
  dataRelationShipEmpty,
  dataRelationShipFaker
}
