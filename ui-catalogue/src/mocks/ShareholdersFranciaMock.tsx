import * as Faker from 'faker'

const dataShareholdersFranciaEmpty = {
  numDum: '',
  accionistadesde: '',
  tipoparticipacion: '',
  porcentajeparticipacion: '',
  importe1: '',
  importe2: ''
}

const dataShareholdersFranciaFaker = {
  numDum: Faker.random.words(),
  accionistadesde: Faker.random.words(),
  tipoparticipacion: Faker.random.words(),
  porcentajeparticipacion: Faker.random.words(),
  importe1: Faker.random.words(),
  importe2: Faker.random.words()
}

export {
  dataShareholdersFranciaEmpty,
  dataShareholdersFranciaFaker
}
