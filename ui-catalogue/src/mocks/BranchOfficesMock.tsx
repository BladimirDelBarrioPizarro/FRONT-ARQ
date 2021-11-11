import * as Faker from 'faker'

const dataBranchOfficesEmpty = {
  input1: '',
  input2: '',
  numDum: '',
  participada: '',
  participacion: '',
  importe: ''
}

const dataBranchOfficesFaker = {
  input1: Faker.random.words(),
  input2: Faker.random.words(),
  numDum: Faker.random.words(),
  participada: Faker.random.words(),
  participacion: Faker.random.words(),
  importe: Faker.random.words()
}

export {
  dataBranchOfficesEmpty,
  dataBranchOfficesFaker
}
