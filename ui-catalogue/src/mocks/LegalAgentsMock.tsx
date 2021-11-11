import * as Faker from 'faker'

const dataLegalAgentsEmpty = {
  name: '',
  name2: '',
  tipoDocumento: '',
  tipoDocumento2: '',
  nDocumento: '',
  nDocumento2: '',
  cargo: '',
  cargo2: '',
  fecha: '',
  fecha2: ''
}

const dataLegalAgentsFaker = {
  name: Faker.random.words(),
  name2: Faker.random.words(),
  tipoDocumento: Faker.random.words(),
  tipoDocumento2: Faker.random.words(),
  nDocumento: Faker.random.words(),
  nDocumento2: Faker.random.words(),
  cargo: Faker.random.words(),
  cargo2: Faker.random.words(),
  fecha: Faker.random.words(),
  fecha2: Faker.random.words()
}

export {
  dataLegalAgentsEmpty,
  dataLegalAgentsFaker
}
