import * as Faker from 'faker'

const dataCommunicationsPOAEmpty = {
  telefonos1: '',
  telefonos2: '',
  telefonos3: '',
  emails1: '',
  emails2: '',
  emails3: '',
  webs1: '',
  webs2: '',
  webs3: ''
}

const dataCommunicationsPOAFaker = {
  telefonos1: Faker.random.number(9),
  telefonos2: Faker.random.number(9),
  telefonos3: Faker.random.number(9),
  emails1: Faker.random.words(),
  emails2: Faker.random.words(),
  emails3: Faker.random.words(),
  webs1: Faker.random.words(),
  webs2: Faker.random.words(),
  webs3: Faker.random.words()
}

export {
  dataCommunicationsPOAEmpty,
  dataCommunicationsPOAFaker
}
