import * as Faker from 'faker'

const dataDealFormEmpty = {
  clientes: '',
  comentarios: '',
  tipomercado1: '',
  tipomercado2: ''
}

const dataDealFormFaker = {
  clientes: Faker.random.words(),
  comentarios: Faker.random.words(),
  tipomercado1: Faker.random.words(),
  tipomercado2: Faker.random.words()
}

export {
  dataDealFormEmpty,
  dataDealFormFaker
}
