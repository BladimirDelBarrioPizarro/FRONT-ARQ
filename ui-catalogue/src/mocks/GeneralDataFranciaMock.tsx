import * as Faker from 'faker'

const dataGeneralDataFranciaEmpty = {
  codigo: '',
  razonsocial: '',
  codigofiscal: '',
  ajt1: '',
  ajt2: ''
}

const dataGeneralDataFranciaFaker = {
  codigo: Faker.random.words(),
  razonsocial: Faker.random.words(),
  codigofiscal: Faker.random.words(),
  ajt1: Faker.random.words(),
  ajt2: Faker.random.words()
}

export {
  dataGeneralDataFranciaEmpty,
  dataGeneralDataFranciaFaker
}
