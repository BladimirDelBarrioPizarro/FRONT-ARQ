import * as Faker from 'faker'

const dataManualReceptionEmpty = {
  tiporespuesta: '',
  producto: '',
  mediorecepcion: '',
  fecharecepcion: '',
  notas: ''
}

const dataManualReceptionFaker = {
  tiporespuesta: Faker.random.words(),
  producto: Faker.random.words(),
  mediorecepcion: Faker.random.words(),
  fecharecepcion: Faker.random.words(),
  notas: Faker.random.words()
}

export {
  dataManualReceptionEmpty,
  dataManualReceptionFaker
}
